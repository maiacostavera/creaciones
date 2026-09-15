/* =============================================================
   CONFIGURACIÓN GENERAL DEL SITIO
   -------------------------------------------------------------
   Este es el único archivo que hay que tocar para cambiar los
   datos del negocio: nombre, WhatsApp, redes, envíos y pagos.
   Editá los textos entre comillas y guardá. Nada más.
   ============================================================= */

window.SITE_CONFIG = {
  /* --- Identidad --- */
  marca: "Creaciones Abi",
  tagline: "Hecho a mano, pensado para vos",
  /* Letra del logo (el círculo del encabezado). Dejala vacía para usar
     la primera letra del nombre de la marca. */
  inicial: "A",
  descripcion:
    "Creaciones artesanales y regalos personalizados. Cada pieza se hace a pedido, con tiempo y detalle.",

  /* --- WhatsApp -------------------------------------------------
     IMPORTANTE: formato internacional, SOLO números.
     Sin "+", sin 0, sin 15, sin espacios ni guiones.
     Argentina: 54 + 9 + código de área + número.
     Ej.: (11) 5555-6666  ->  "5491155556666"
     Mientras diga 5491112345678 la web muestra un aviso de demo. */
  whatsapp: "5491112345678",

  /* Texto con el que arranca cada mensaje de WhatsApp.
     Después la web le agrega el nombre del producto. */
  mensajeBase: "¡Hola Abi! 👋 Vi la página y quería consultarte por",
  /* Mensaje del botón general de contacto (sin producto). */
  mensajeGeneral: "¡Hola Abi! 👋 Vi la página y quería hacerte una consulta.",

  /* --- Redes y contacto --- */
  instagram: "crecionesabi",
  email: "",
  ubicacion: "Buenos Aires, Argentina",
  horarios: "Lunes a sábados, de 10 a 19 h",

  /* --- Moneda para los precios --- */
  moneda: "$",

  /* --- Cómo comprar (los 3 pasos del inicio) --- */
  pasos: [
    {
      titulo: "Elegí tu creación",
      texto: "Mirá el catálogo y quedate con la que más te guste. Todo se hace a pedido.",
    },
    {
      titulo: "Escribime por WhatsApp",
      texto: "Tocá el botón del producto y me llega tu consulta con el modelo ya cargado.",
    },
    {
      titulo: "Coordinamos y listo",
      texto: "Arreglamos color, personalización, pago y entrega. Te aviso cuando esté lista.",
    },
  ],

  /* --- Envíos --- */
  envios: [
    "Entrega en mano a coordinar",
    "Envío a todo el país por correo",
    "Retiro sin cargo por el taller",
  ],

  /* --- Formas de pago --- */
  pagos: ["Efectivo", "Transferencia bancaria", "Mercado Pago"],

  /* --- Sobre el emprendimiento (sección "Sobre mí") --- */
  sobreMi:
    "Soy Abi y hago cada pieza a mano, de a una. Trabajo con materiales elegidos con cuidado y me gusta que cada pedido tenga algo tuyo: un color, un nombre, una fecha. Si tenés una idea en la cabeza, escribime y la armamos juntas.",

  /* --- Dominio final del sitio (para compartir bien el link) --- */
  url: "https://creaciones-abi.vercel.app",
};
