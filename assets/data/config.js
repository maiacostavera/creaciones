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
  /* Letra del logo (el círculo del encabezado). Dejala vacía para usar
     la primera letra del nombre de la marca. */
  inicial: "A",
  tagline: "Decoración y golosinas personalizadas",
  descripcion:
    "Bolsitas, golosinas y decoración personalizada para cumpleaños. Tazas, termos y stickers con el diseño que quieras.",
  frase: "Hacemos que cada celebración sea especial",

  /* --- WhatsApp -------------------------------------------------
     Formato internacional, SOLO números: 54 + 9 + área sin 0 + número sin 15.
     11 2575-0730  ->  5491125750730                                 */
  whatsapp: "5491125750730",

  /* Texto con el que arranca cada mensaje de WhatsApp.
     Después la web le agrega el nombre del producto. */
  mensajeBase: "¡Hola Abi! 👋 Vi la página y quería consultarte por",
  /* Mensaje del botón general de contacto (sin producto). */
  mensajeGeneral: "¡Hola Abi! 👋 Vi la página y quería hacerte una consulta.",

  /* --- Redes y contacto --- */
  instagram: "crecionesabi",
  email: "",
  ubicacion: "Buenos Aires, Argentina",
  horarios: "Todos los días, de 10 a 20 h",

  /* --- Moneda para los precios --- */
  moneda: "$",

  /* --- Cómo comprar (los 3 pasos del inicio) --- */
  pasos: [
    {
      titulo: "Contame tu idea",
      texto: "El personaje, los colores, la cantidad y para cuándo lo necesitás.",
    },
    {
      titulo: "Te paso el presupuesto",
      texto: "Armamos el diseño juntas y te confirmo el precio final y la fecha de entrega.",
    },
    {
      titulo: "Lo preparo y te lo entrego",
      texto: "Te mando fotos cuando está listo y coordinamos la entrega o el envío.",
    },
  ],

  /* --- Envíos --- */
  envios: [
    "Entrega en mano a coordinar",
    "Envío a todo el país por correo",
    "Pedidos de cumpleaños: avisá con anticipación",
  ],

  /* --- Formas de pago --- */
  pagos: ["Efectivo", "Transferencia bancaria", "Mercado Pago"],

  /* --- Sobre el emprendimiento (sección "Sobre mí") --- */
  sobreMi:
    "Soy Abi y me dedico a que cada celebración tenga algo único. Hago bolsitas, golosinas y decoración personalizada para cumpleaños, y también tazas, termos y stickers con el diseño que se te ocurra. Trabajo con el personaje, los colores y los nombres que elijas: vos me contás la idea y yo la armo.",

  /* --- Dominio final del sitio (para compartir bien el link) --- */
  url: "https://creacionesabi.vercel.app",
};
