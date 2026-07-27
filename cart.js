/* =========================
   CARRITO CENTRALIZADO
   Maroba Store — localStorage: carritoMaroba
========================= */

const CART_STORAGE_KEY = "carritoMaroba";

/**
 * Normaliza un campo de texto para comparación.
 * Trata undefined, null y "" como equivalentes.
 */
function normalizeCartField(value) {
  if (value === undefined || value === null) {
    return "";
  }
  return String(value).trim();
}

/**
 * Normaliza el precio para comparación numérica consistente.
 */
function normalizeCartPrecio(value) {
  const precio = Number(value);
  return Number.isFinite(precio) ? precio : 0;
}

/**
 * Genera una clave única para identificar si dos productos
 * son la misma línea (mismo producto + mismas variantes).
 */
function getCartItemKey(item) {
  if (!item || typeof item !== "object") {
    return "";
  }

  return [
    normalizeCartField(item.nombre),
    normalizeCartPrecio(item.precio),
    normalizeCartField(item.colorFunda),
    normalizeCartField(item.colorIphone),
    normalizeCartField(item.entrega),
  ].join("\x1f");
}

/**
 * Compara dos productos campo por campo (misma lógica que getCartItemKey).
 */
function isSameCartProduct(a, b) {
  return getCartItemKey(a) === getCartItemKey(b);
}

/**
 * Lee el carrito desde localStorage.
 * @returns {Array}
 */
function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    if (!data) {
      return [];
    }

    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Guarda el carrito en localStorage.
 * @param {Array} cart
 */
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

/**
 * Agrega un producto al carrito.
 * Si ya existe uno igual (misma clave), suma la cantidad.
 *
 * @param {Object} producto - { nombre, precio, cantidad?, colorFunda?, colorIphone?, entrega? }
 * @returns {Array} carrito actualizado
 */
function addToCart(producto) {
  const cart = getCart();
  const cantidadAAgregar = Number(producto.cantidad) > 0 ? Number(producto.cantidad) : 1;

  const existenteIndex = cart.findIndex((item) => isSameCartProduct(item, producto));

  if (existenteIndex !== -1) {
    const existente = cart[existenteIndex];
    existente.cantidad = (Number(existente.cantidad) || 1) + cantidadAAgregar;
  } else {
    cart.push({
      nombre: normalizeCartField(producto.nombre),
      precio: normalizeCartPrecio(producto.precio),
      cantidad: cantidadAAgregar,
      colorFunda: normalizeCartField(producto.colorFunda),
      colorIphone: normalizeCartField(producto.colorIphone),
      entrega: normalizeCartField(producto.entrega),
    });
  }

  saveCart(cart);
  return cart;
}

/**
 * Elimina un producto del carrito por índice.
 * @param {number} index
 * @returns {Array} carrito actualizado
 */
function removeFromCart(index) {
  const cart = getCart();

  if (index < 0 || index >= cart.length) {
    return cart;
  }

  cart.splice(index, 1);
  saveCart(cart);
  return cart;
}

/**
 * Actualiza la cantidad de un producto por índice.
 * Si la cantidad es 0 o menor, elimina el producto.
 *
 * @param {number} index
 * @param {number} cantidad
 * @returns {Array} carrito actualizado
 */
function updateQuantity(index, cantidad) {
  const cart = getCart();

  if (index < 0 || index >= cart.length) {
    return cart;
  }

  if (cantidad <= 0) {
    return removeFromCart(index);
  }

  cart[index].cantidad = cantidad;
  saveCart(cart);
  return cart;
}

/**
 * Devuelve la cantidad total de unidades en el carrito.
 * @returns {number}
 */
function getCartCount() {
  return getCart().reduce((total, item) => total + (Number(item.cantidad) || 1), 0);
}
