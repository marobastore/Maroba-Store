/* =========================
   BUSCADOR GENERAL
========================= */

function buscarProducto() {
  const input = document.getElementById("searchInput");

  if (!input) return;

  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe el producto que quieres buscar.");
  } else {
    alert("Buscando: " + texto);
  }
}


/* =========================
   FUNDA GAMUZADA
   producto-funda.html
========================= */

function cambiarColor(nombreColor, imagen) {
  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");
  const whatsappButton = document.getElementById("whatsappButton");

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt = "Funda gamuzada color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }

  if (whatsappButton) {
    const mensaje = `Hola, quiero comprar la Funda gamuzada para iPhone en color ${nombreColor}`;
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


/* =========================
   FUNDA SILICONA 17 PRO
   producto-silicona-17pro.html
========================= */

let colorFundaSeleccionado = "Blanco";
let colorIphoneSeleccionado = "Plata / Gris";

function actualizarWhatsappSiliconaMax() {
  const whatsappButton = document.getElementById("whatsappButton");

  if (whatsappButton) {
    const mensaje = `Hola, quiero comprar la Funda de silicona para iPhone 17 Pro, color de funda ${colorFundaSeleccionado}, color de iPhone ${colorIphoneSeleccionado}`;
    whatsappButton.href = `https://wa.me/59164465212?text=${encodeURIComponent(mensaje)}`;
  }
}

function previewProductoSiliconaMax(nombreColor, imagen, elemento) {
  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt = "Funda de silicona 17 Pro color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }
}

function fijarProductoSiliconaMax(nombreColor, imagen, elemento) {
  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");

  colorFundaSeleccionado = nombreColor;

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt = "Funda de silicona 17 Pro color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }

  document.querySelectorAll(".color-dot").forEach(btn => {
    btn.classList.remove("active");
  });

  if (elemento) {
    elemento.classList.add("active");
  }

  actualizarWhatsappSiliconaMax();
}

function seleccionarColorIphone(nombreColor, elemento) {
  const selectedPhoneColor = document.getElementById("selectedPhoneColor");

  colorIphoneSeleccionado = nombreColor;

  if (selectedPhoneColor) {
    selectedPhoneColor.textContent = nombreColor;
  }

  document.querySelectorAll(".phone-swatch").forEach(btn => {
    btn.classList.remove("active");
  });

  if (elemento) {
    elemento.classList.add("active");
  }

  actualizarWhatsappSiliconaMax();
}

function cambiarProductoSiliconaMax(nombreColor, imagen, elemento) {
  colorFundaSeleccionado = nombreColor;

  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt = "Funda de silicona 17 Pro color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }

  document.querySelectorAll(".amazon-thumb").forEach(btn => {
    btn.classList.remove("active");
  });

  if (elemento) {
    elemento.classList.add("active");
  }

  document.querySelectorAll(".color-dot").forEach(btn => {
    btn.classList.remove("active");
  });

  actualizarWhatsappSiliconaMax();
}
