// Returns the list of currently reserved item ids so shop pages can show
// them as unavailable alongside permanently sold items.
export async function onRequestGet(context) {
  const kv = context.env.RESERVATIONS;
  const list = await kv.list();
  const ids = list.keys.map(k => k.name);

  return new Response(JSON.stringify(ids), {
    headers: { "Content-Type": "application/json" }
  });
}
