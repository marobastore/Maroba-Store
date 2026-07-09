function buscarProducto() {
  const input = document.getElementById("searchInput");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe el producto que quieres buscar.");
  } else {
    alert("Buscando: " + texto);
  }
}
