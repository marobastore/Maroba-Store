/* =========================
   CARRITO CABLE USB-C
   Maroba Store
========================= */

function agregarCableCarrito(){

  const producto = {
    nombre: "Apple Cable USB-C a USB-C 60W",
    precio: 70,
    cantidad: 1,
    imagen: "img/cable-cc-trenzado-1m-blanco-01.png"
  };

  addToCart(producto);

  alert(
    `Producto agregado al carrito:\n\n` +
    `${producto.nombre}\n` +
    `Precio: Bs ${producto.precio}`
  );

}
