// Marks item ids as reserved. Called the moment a shopper clicks a payment
// button, so nobody else can buy the same one-off piece out from under them
// while the payment is in flight. No expiry - stays reserved until the
// reservation is cleared in the Cloudflare KV dashboard (payment confirmed
// -> mark sold in products.js and delete the key; payment never came ->
// just delete the key).
export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const ids = body && body.ids;
  if (!Array.isArray(ids) || ids.length === 0) {
    return new Response(JSON.stringify({ error: "No ids provided" }), { status: 400 });
  }

  const kv = context.env.RESERVATIONS;
  const now = new Date().toISOString();
  await Promise.all(ids.map(id => kv.put(String(id), now)));

  return new Response(JSON.stringify({ ok: true, reserved: ids }), {
    headers: { "Content-Type": "application/json" }
  });
}
