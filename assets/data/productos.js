/* =============================================================
   CATÁLOGO DE PRODUCTOS
   -------------------------------------------------------------
   Cada producto es un bloque { ... } separado por coma.
   Para agregar uno nuevo, copiá un bloque entero y cambiale
   los datos. Para sacarlo, borrá el bloque completo.

   Campos:
     id          -> texto corto y único, sin espacios (sirve para el link)
     nombre      -> cómo se llama el producto
     categoria   -> se usa para los filtros de arriba del catálogo
     precio      -> número, sin puntos ni símbolos. Poné null si no querés mostrarlo
     precioTexto -> si preferís texto libre ("Desde $8.000", "Consultar")
     descripcion -> 1 o 2 renglones que se ven en la tarjeta
     detalle     -> texto más largo que aparece al abrir el producto
     imagen      -> ruta de la foto principal
     imagenes    -> fotos extra (opcional)
     destacado   -> true para que aparezca en la portada
     disponible  -> false si está sin stock / a pedido con demora
     etiquetas   -> palabras que ayudan al buscador

   👉 LAS FOTOS: guardá las tuyas en assets/img/productos/ y
      escribí acá el nombre del archivo. Por ejemplo:
      imagen: "assets/img/productos/bolsitas.jpg"
      Los dibujos que vienen ahora son provisorios.

   👉 LOS PRECIOS: ahora dicen "Consultar". Para mostrar el precio,
      escribilo en precio (ej.: precio: 4500) y dejá precioTexto en "".
   ============================================================= */

window.PRODUCTOS = [
  {
    id: "bolsitas-cumpleanos",
    nombre: "Bolsitas personalizadas",
    categoria: "Cumpleaños",
    precio: null,
    precioTexto: "Según cantidad",
    descripcion: "Con el personaje y los colores del cumple. Listas para llenar.",
    detalle:
      "Bolsitas de cartulina personalizadas con el personaje o la temática que elijas, con cinta a tono. Se pueden hacer con el nombre del cumpleañero y se entregan armadas. Precio según cantidad y diseño.",
    imagen: "assets/img/productos/bolsitas-noah.jpg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["bolsitas", "cumpleaños", "personalizadas", "souvenir", "infantil", "personaje"],
  },
  {
    id: "golosinas-personalizadas",
    nombre: "Golosinas personalizadas",
    categoria: "Cumpleaños",
    precio: null,
    precioTexto: "Según cantidad",
    descripcion: "Jugos, alfajores, chupetines y más, con etiqueta a juego.",
    detalle:
      "Golosinas forradas con el diseño del cumpleaños: cajitas de jugo, alfajores, chocolatines, chupetines y bananitas. Todo combinado con la misma temática y con el nombre del cumpleañero.",
    imagen: "assets/img/productos/golosinas-personalizadas.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["golosinas", "jugos", "alfajores", "cumpleaños", "personalizadas", "mesa dulce"],
  },
  {
    id: "decoracion-cumpleanos",
    nombre: "Decoración para cumpleaños",
    categoria: "Cumpleaños",
    precio: null,
    precioTexto: "Según la temática",
    descripcion: "Carteles, banderines y todo lo que necesita la mesa.",
    detalle:
      "Decoración completa para la mesa dulce: cartel con el nombre, banderines, toppers, centros de mesa y adornos, todo en la temática elegida. Contame cuántos invitados son y el estilo que buscás.",
    imagen: "assets/img/productos/decoracion-cumpleanos.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["decoracion", "cumpleaños", "mesa dulce", "cartel", "banderines", "fiesta"],
  },
  {
    id: "kit-cumpleanos",
    nombre: "Kit completo de cumpleaños",
    categoria: "Cumpleaños",
    precio: null,
    precioTexto: "Presupuesto a medida",
    descripcion: "Bolsitas + golosinas + decoración, todo combinado.",
    detalle:
      "El combo completo, con todo en la misma temática: bolsitas, golosinas personalizadas y decoración de la mesa. Se arma según la cantidad de invitados y el presupuesto. Es la opción más conveniente si querés resolver todo de una.",
    imagen: "assets/img/productos/kit-cumpleanos.svg",
    imagenes: [],
    destacado: false,
    disponible: true,
    etiquetas: ["kit", "combo", "cumpleaños", "completo", "fiesta", "todo"],
  },
  {
    id: "taza-personalizada",
    nombre: "Taza personalizada",
    categoria: "Personalizados",
    precio: null,
    precioTexto: "Consultar precio",
    descripcion: "Con nombre, frase, foto o el personaje que quieras.",
    detalle:
      "Taza de cerámica personalizada con lo que se te ocurra: un nombre, una frase, una foto o un personaje. Se hacen para regalar a maestras, para cumpleaños o para uso diario. Contame la idea y armamos el diseño.",
    imagen: "assets/img/productos/taza-maestra.jpg",
    imagenes: ["assets/img/productos/taza-personajes.jpg"],
    destacado: true,
    disponible: true,
    etiquetas: ["taza", "personalizada", "regalo", "foto", "frase", "ceramica", "maestra", "personajes"],
  },
  {
    id: "termo-personalizado",
    nombre: "Termo individual personalizado",
    categoria: "Personalizados",
    precio: null,
    precioTexto: "Consultar precio",
    descripcion: "Con sorbete y tapa, ideal para el mate o el café.",
    detalle:
      "Termo individual con tapa y sorbete, personalizado con el diseño, el dibujo o la frase que elijas. Mantiene la temperatura y es perfecto para llevar a todos lados. Un regalo que se usa todos los días.",
    imagen: "assets/img/productos/termo-personalizado.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["termo", "vaso", "mate", "cafe", "personalizado", "regalo", "sorbete"],
  },
  {
    id: "tarjetas-emprendimientos",
    nombre: "Tarjetas personalizadas",
    categoria: "Emprendimientos",
    precio: null,
    precioTexto: "Según cantidad",
    descripcion: "Con tu logo, tus redes y tu WhatsApp. Para sumar a cada venta.",
    detalle:
      "Tarjetas personalizadas para tu emprendimiento, diseñadas con tu logo, tus colores, tus redes y tu WhatsApp. Se suman a cada pedido para que tus clientes te vuelvan a encontrar. El precio va según la cantidad.",
    imagen: "assets/img/productos/tarjetas-emprendimientos.jpg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["tarjetas", "emprendimiento", "logo", "agradecimiento", "papeleria", "negocio", "marca"],
  },
  {
    id: "plancha-stickers",
    nombre: "Plancha de stickers",
    categoria: "Stickers",
    precio: null,
    precioTexto: "Consultar precio",
    descripcion: "Varios stickers en una hoja, con los diseños que elijas.",
    detalle:
      "Plancha con varios stickers en una misma hoja: personajes, frases, memes o lo que quieras. Se imprimen en buena calidad y se pueden armar planchas totalmente a pedido con tus diseños favoritos.",
    imagen: "assets/img/productos/plancha-stickers.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["stickers", "plancha", "calcomanias", "personajes", "frases", "memes"],
  },
  {
    id: "stickers-troquelados",
    nombre: "Stickers individuales",
    categoria: "Stickers",
    precio: null,
    precioTexto: "Según cantidad",
    descripcion: "Cortados a medida y entregados uno por uno.",
    detalle:
      "Stickers individuales cortados siguiendo el contorno del diseño: escudos, personajes, nombres o logos. Se entregan protegidos uno por uno. Consultame por precio según la cantidad.",
    imagen: "assets/img/productos/stickers-troquelados.svg",
    imagenes: [],
    destacado: false,
    disponible: true,
    etiquetas: ["stickers", "troquelados", "individuales", "escudos", "logo", "calcomanias"],
  },
];
