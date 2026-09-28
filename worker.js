import { onRequestGet as reserved } from "./functions/api/reserved.js";
import { onRequestPost as reserve } from "./functions/api/reserve.js";
import { onRequestPost as validateAddress } from "./functions/api/validate-address.js";
import { onRequestPost as shippingRate } from "./functions/api/shipping-rate.js";

const routes = {
  "GET /api/reserved": reserved,
  "POST /api/reserve": reserve,
  "POST /api/validate-address": validateAddress,
  "POST /api/shipping-rate": shippingRate
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const handler = routes[`${request.method} ${url.pathname}`];

    if (handler) {
      try {
        return await handler({ request, env, waitUntil: ctx.waitUntil.bind(ctx) });
      } catch (e) {
        return new Response(JSON.stringify({ error: String(e.message || e) }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response("Not found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
