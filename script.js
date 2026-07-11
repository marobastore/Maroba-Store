function buscarProducto() {
  const input = document.getElementById("searchInput");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe el producto que quieres buscar.");
  } else {
    alert("Buscando: " + texto);
  }
}
function cambiarProductoSilicona(nombreColor, imagen) {
  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");
  const whatsappButton = document.getElementById("whatsappButton");

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt = "Funda de silicona 17 Pro color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }

  if (whatsappButton) {
    const mensaje = `Hola, quiero comprar la Funda de silicona 17 Pro en color ${nombreColor}`;
    whatsappButton.href = `https://wa.me/59164465212?text=${encodeURIComponent(mensaje)}`;
  }

  document.querySelectorAll(".color-dot").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelectorAll(".thumb").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelectorAll(".color-dot").forEach(btn => {
    const onclick = btn.getAttribute("onclick");
    if (onclick && onclick.includes(nombreColor)) {
      btn.classList.add("active");
    }
  });

  document.querySelectorAll(".thumb").forEach(btn => {
    const onclick = btn.getAttribute("onclick");
    if (onclick && onclick.includes(nombreColor)) {
      btn.classList.add("active");
    }
  });
}
