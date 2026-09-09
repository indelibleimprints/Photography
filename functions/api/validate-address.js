import { validateAddress } from "../_lib/usps.js";

export async function onRequestPost(context) {
  let body;
  try {
    body = await context.request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  if (!body || !body.street || !body.city || !body.state || !body.zip) {
    return new Response(JSON.stringify({ error: "Missing address fields" }), { status: 400 });
  }

  try {
    const result = await validateAddress(context.env, body);
    return new Response(JSON.stringify({ ok: true, address: result }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e.message || e) }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
}
