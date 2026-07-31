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
  VARIABLES GLOBALES PRODUCTO
========================= */

let colorFundaSeleccionado = "Blanco";
let colorIphoneSeleccionado = "Plata / Gris";
let cantidadProducto = 1;
let metodoEntregaSeleccionado = "Enviar a domicilio";


/* =========================
  FUNDA SILICONA 17 PRO
========================= */

function actualizarWhatsappSilicona() {
const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
    let textoEntrega = "";

    if (metodoEntregaSeleccionado === "Paso a recoger") {
      textoEntrega = "Quiero pasar a recoger";
    } else {
      textoEntrega = "Quiero que me lo envíen";
    }

const mensaje = 
`Hola, quiero comprar:\n\n` +
      `Producto: Funda de silicona para iPhone 17 Pro\n` +
      `Color de funda: ${colorFundaSeleccionado}\n` +
      `Color de iPhone: ${colorIphoneSeleccionado}\n` +
      `Funda de silicona para iPhone 17 Pro en color: ${colorFundaSeleccionado}\n` +
`Cantidad: ${cantidadProducto}\n` +
      `Entrega: ${metodoEntregaSeleccionado}\n` +
      `Precio unitario: Bs 50`;
      `${textoEntrega}`;

whatsappButton.href = `https://wa.me/59164465212?text=${encodeURIComponent(mensaje)}`;
}
}

function previsualizarProductoSilicona(nombreColor, imagen) {
const mainImage = document.getElementById("mainProductImage");
const selectedColor = document.getElementById("selectedColor");

if (mainImage) {
mainImage.src = imagen;
mainImage.alt = "Funda de silicona iPhone 17 Pro color " + nombreColor;
}

if (selectedColor) {
selectedColor.textContent = nombreColor;
}
}

function fijarProductoSilicona(nombreColor, imagen, elemento) {
  const mainImage = document.getElementById("mainProductImage");
  const selectedColor = document.getElementById("selectedColor");

  colorFundaSeleccionado = nombreColor;

  if (mainImage) {
    mainImage.src = imagen;
    mainImage.alt =
      "Funda de silicona iPhone 17 Pro color " + nombreColor;
  }

  if (selectedColor) {
    selectedColor.textContent = nombreColor;
  }

  document.querySelectorAll(".color-dot").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.querySelectorAll(".amazon-thumb").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (elemento) {
    elemento.classList.add("active");
  }

  document.querySelectorAll(".color-dot").forEach((btn) => {
    const onclick = btn.getAttribute("onclick");

    if (onclick && onclick.includes(nombreColor)) {
      btn.classList.add("active");
    }
  });

  document.querySelectorAll(".amazon-thumb").forEach((btn) => {
    const onclick = btn.getAttribute("onclick");

    if (onclick && onclick.includes(nombreColor)) {
      btn.classList.add("active");
    }
  });

  actualizarWhatsappSilicona();
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

actualizarWhatsappSilicona();
}


/* =========================
  CANTIDAD
========================= */

function actualizarCantidadVisual() {
const cantidadTexto = document.getElementById("cantidadProducto");

if (cantidadTexto) {
cantidadTexto.textContent = cantidadProducto;
}

actualizarWhatsappSilicona();
}

function sumarCantidad() {
cantidadProducto++;
actualizarCantidadVisual();
}

function restarCantidad() {
if (cantidadProducto > 1) {
cantidadProducto--;
actualizarCantidadVisual();
}
}


/* =========================
  ENTREGA
========================= */

function seleccionarEntrega(nombreEntrega, elemento) {
metodoEntregaSeleccionado = nombreEntrega;

document.querySelectorAll(".delivery-card").forEach(card => {
card.classList.remove("active");
});

if (elemento) {
elemento.classList.add("active");
}

actualizarWhatsappSilicona();
}


/* =========================
  CARRITO Y COMPRA
========================= */

function agregarCarritoSilicona() {
const producto = {
nombre: "Funda de silicona para iPhone 17 Pro",
colorFunda: colorFundaSeleccionado,
colorIphone: colorIphoneSeleccionado,
cantidad: cantidadProducto,
entrega: metodoEntregaSeleccionado,
precio: 50
};

let carrito = JSON.parse(localStorage.getItem("carritoMaroba")) || [];

carrito.push(producto);

localStorage.setItem("carritoMaroba", JSON.stringify(carrito));

alert(
`Producto agregado al carrito:\n\n` +
`${producto.nombre}\n` +
`Color de funda: ${producto.colorFunda}\n` +
`Color de iPhone: ${producto.colorIphone}\n` +
`Cantidad: ${producto.cantidad}\n` +
`Entrega: ${producto.entrega}\n` +
`Precio unitario: Bs ${producto.precio}`
);
}

function comprarAhoraSilicona() {
let textoEntrega = "";

if (metodoEntregaSeleccionado === "Paso a recoger") {
textoEntrega = "Quiero pasar a recoger";
} else {
textoEntrega = "Quiero que me lo envíen";
}

const mensaje = 
`Hola, quiero comprar:\n\n` +
`Funda de silicona para iPhone 17 Pro en color: ${colorFundaSeleccionado}\n` +
`Cantidad: ${cantidadProducto}\n` +
`${textoEntrega}`;

const url = `https://wa.me/59164465212?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");
}


/* =========================
  COMPATIBILIDAD FUNDA GAMUZADA
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
}
/* =========================
   CARRUSEL PRINCIPAL
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".hero-slider");
  const track = document.querySelector(".hero-track");

  if (!slider || !track) return;

  let animando = false;
  let intervaloCarrusel = null;

  function obtenerSlides() {
    return Array.from(track.querySelectorAll(".hero-slide"));
  }

  function desplazamientoParaCentrar(slide) {
    const centroSlider = slider.clientWidth / 2;
    const centroSlide = slide.offsetLeft + slide.offsetWidth / 2;

    return centroSlider - centroSlide;
  }

  function centrarSlideMedio(sinAnimacion = false) {
    const slides = obtenerSlides();
    const slideMedio = slides[1];

    if (!slideMedio) return;

    track.style.transition = sinAnimacion
      ? "none"
      : "transform 0.65s ease";

    const desplazamiento = desplazamientoParaCentrar(slideMedio);

    track.style.transform =
      `translate3d(${desplazamiento}px, 0, 0)`;
  }

  function moverCarruselDerecha() {
    if (animando) return;

    const slides = obtenerSlides();
    const slideIzquierdo = slides[0];

    if (!slideIzquierdo) return;

    animando = true;
    track.style.transition = "transform 0.65s ease";

    const desplazamiento =
      desplazamientoParaCentrar(slideIzquierdo);

    track.style.transform =
      `translate3d(${desplazamiento}px, 0, 0)`;

    track.addEventListener(
      "transitionend",
      () => {
        const slidesActuales = obtenerSlides();
        const ultimoSlide =
          slidesActuales[slidesActuales.length - 1];

        track.prepend(ultimoSlide);

        centrarSlideMedio(true);

        requestAnimationFrame(() => {
          track.style.transition = "transform 0.65s ease";
          animando = false;
        });
      },
      { once: true }
    );
  }

  function moverCarruselIzquierda() {
    if (animando) return;

    const slides = obtenerSlides();
    const slideDerecho = slides[2];

    if (!slideDerecho) return;

    animando = true;
    track.style.transition = "transform 0.65s ease";

    const desplazamiento =
      desplazamientoParaCentrar(slideDerecho);

    track.style.transform =
      `translate3d(${desplazamiento}px, 0, 0)`;

    track.addEventListener(
      "transitionend",
      () => {
        const primerSlide = obtenerSlides()[0];

        track.append(primerSlide);

        centrarSlideMedio(true);

        requestAnimationFrame(() => {
          track.style.transition = "transform 0.65s ease";
          animando = false;
        });
      },
      { once: true }
    );
  }

  function iniciarMovimientoAutomatico() {
  clearInterval(intervaloCarrusel);

  intervaloCarrusel = setInterval(() => {
    moverCarruselIzquierda();
  }, 4000);
}

  const botonAnterior =
    document.querySelector(".prev-arrow");

  const botonSiguiente =
    document.querySelector(".next-arrow");

  botonAnterior?.addEventListener("click", () => {
    moverCarruselDerecha();
    iniciarMovimientoAutomatico();
  });

  botonSiguiente?.addEventListener("click", () => {
    moverCarruselIzquierda();
    iniciarMovimientoAutomatico();
  });

  slider.addEventListener("mouseenter", () => {
    clearInterval(intervaloCarrusel);
  });

  slider.addEventListener("mouseleave", () => {
    iniciarMovimientoAutomatico();
  });

  window.addEventListener("resize", () => {
    centrarSlideMedio(true);
  });

  requestAnimationFrame(() => {
    centrarSlideMedio(true);
    iniciarMovimientoAutomatico();
  });
});
