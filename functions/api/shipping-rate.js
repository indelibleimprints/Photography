import { getShippingRate } from "../_lib/usps.js";

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const zip = body && body.zip;
  const weightOz = body && body.weightOz;
  if (!zip || !weightOz) {
    return new Response(JSON.stringify({ error: "Missing zip or weightOz" }), { status: 400 });
  }

  try {
    const price = await getShippingRate(context.env, zip, weightOz);
    return new Response(JSON.stringify({ ok: true, price }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e.message || e) }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
}
