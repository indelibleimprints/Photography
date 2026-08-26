const CART_KEY = "shopCart";

const SHIPPING_TIERS = [
  { max: 49.99, rate: 8.00 },
  { max: 99.99, rate: 5.00 },
  { max: Infinity, rate: 0 }
];

function calculateShipping(subtotal) {
  if (subtotal <= 0) return 0;
  const tier = SHIPPING_TIERS.find(t => subtotal <= t.max);
  return tier.rate;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(id, qty, maxQty) {
  const cap = maxQty || 1;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, cap);
  } else {
    cart.push({ id, qty: Math.min(qty, cap) });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  saveCart(getCart().filter(item => item.id !== id));
}

function updateCartQty(id, qty) {
  const cart = getCart();
  const item = cart.find(item => item.id === id);
  if (item) {
    item.qty = qty;
    saveCart(cart.filter(i => i.qty > 0));
  }
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = cartCount();
}

// Reservation system: one-off pieces get reserved the moment someone clicks
// a payment button, so nobody else can buy the same item while that payment
// is in flight. No expiry - a reservation only clears when it's deleted in
// the Cloudflare KV dashboard (payment confirmed -> mark sold in products.js
// and delete the key; payment never came -> just delete the key).
async function fetchReservedIds() {
  try {
    const res = await fetch("/api/reserved");
    if (!res.ok) return [];
    const ids = await res.json();
    return ids.map(id => parseInt(id, 10));
  } catch (e) {
    return [];
  }
}

async function reserveItems(ids) {
  try {
    await fetch("/api/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids })
    });
  } catch (e) {
    // Don't block checkout if the reservation API is unreachable.
  }
}
