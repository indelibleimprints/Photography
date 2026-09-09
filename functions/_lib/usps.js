// Shared USPS API helpers for Cloudflare Pages Functions.
// Requires env.USPS_CLIENT_ID and env.USPS_CLIENT_SECRET (set as encrypted
// environment variables in the Cloudflare Pages dashboard) and env.RESERVATIONS
// (KV namespace, reused here to cache the OAuth token).

const ORIGIN_ZIP = "28115";
const TOKEN_CACHE_KEY = "_usps_token";

export async function getUspsToken(env) {
  const cached = await env.RESERVATIONS.get(TOKEN_CACHE_KEY, { type: "json" });
  if (cached && cached.expiresAt > Date.now()) {
    return cached.accessToken;
  }

  const res = await fetch("https://apis.usps.com/oauth2/v3/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.USPS_CLIENT_ID,
      client_secret: env.USPS_CLIENT_SECRET,
      grant_type: "client_credentials"
    })
  });

  if (!res.ok) {
    throw new Error(`USPS token request failed: ${res.status}`);
  }

  const data = await res.json();
  const accessToken = data.access_token;
  const expiresInMs = (data.expires_in || 3600) * 1000;

  await env.RESERVATIONS.put(
    TOKEN_CACHE_KEY,
    JSON.stringify({ accessToken, expiresAt: Date.now() + expiresInMs - 60000 }),
    { expirationTtl: Math.max(60, Math.floor(expiresInMs / 1000) - 60) }
  );

  return accessToken;
}

export async function validateAddress(env, address) {
  const token = await getUspsToken(env);
  const params = new URLSearchParams({
    streetAddress: address.street || "",
    city: address.city || "",
    state: address.state || "",
    ZIPCode: address.zip || ""
  });
  if (address.street2) params.set("secondaryAddress", address.street2);

  const res = await fetch(`https://apis.usps.com/addresses/v3/address?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    throw new Error(`USPS address validation failed: ${res.status} ${errBody}`);
  }

  return res.json();
}

export async function getShippingRate(env, destinationZip, weightOz) {
  const token = await getUspsToken(env);
  const weightLbs = Math.max(0.0625, weightOz / 16);

  const res = await fetch("https://apis.usps.com/prices/v3/total-rates/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      originZIPCode: ORIGIN_ZIP,
      destinationZIPCode: destinationZip,
      weight: weightLbs,
      mailClass: "USPS_GROUND_ADVANTAGE",
      processingCategory: "MACHINABLE",
      priceType: "RETAIL",
      mailingDate: new Date().toISOString().slice(0, 10)
    })
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    throw new Error(`USPS rate lookup failed: ${res.status} ${errBody}`);
  }

  const data = await res.json();
  // Response field name isn't confirmed against a live account yet - check
  // the couple of shapes USPS docs/examples use and fall back if unknown.
  const price =
    data.totalBasePrice ??
    data.price ??
    (Array.isArray(data.rates) && data.rates[0] && data.rates[0].price);

  if (typeof price !== "number") {
    throw new Error("Unrecognized USPS rate response shape");
  }

  return price;
}
