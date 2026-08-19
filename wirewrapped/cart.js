const CART_KEY = "wireWrappedCart";

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

function addToCart(id, qty) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
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
