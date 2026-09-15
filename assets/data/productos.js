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
      imagen: "assets/img/productos/vela-lavanda.jpg"
      Las imágenes que vienen ahora son de muestra.
   ============================================================= */

window.PRODUCTOS = [
  {
    id: "vela-soja-lavanda",
    nombre: "Vela de soja aromática",
    categoria: "Velas",
    precio: 9500,
    precioTexto: "",
    descripcion: "Cera de soja 100% natural, con aroma a lavanda y mecha de algodón.",
    detalle:
      "Vela artesanal de cera de soja en vaso de vidrio reutilizable. Aproximadamente 30 horas de encendido. Podés elegir el aroma entre lavanda, vainilla, coco o cítricos.",
    imagen: "assets/img/productos/vela-soja-lavanda.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["vela", "soja", "aroma", "lavanda", "regalo"],
  },
  {
    id: "set-velas-regalo",
    nombre: "Set de 3 velas + caja",
    categoria: "Velas",
    precio: 24000,
    precioTexto: "",
    descripcion: "Tres velas chicas con aromas a elección, presentadas en caja de regalo.",
    detalle:
      "Set ideal para regalar: tres velas de soja de 100 g cada una, con los aromas que elijas, en caja con papel de seda y tarjeta escrita a mano.",
    imagen: "assets/img/productos/set-velas-regalo.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["set", "velas", "caja", "regalo", "combo"],
  },
  {
    id: "llavero-resina",
    nombre: "Llavero de resina personalizado",
    categoria: "Personalizados",
    precio: 4500,
    precioTexto: "",
    descripcion: "Con el nombre, la inicial o la fecha que quieras, en el color que elijas.",
    detalle:
      "Llavero de resina epoxi hecho a mano. Se personaliza con nombre, inicial o fecha y podés elegir el color de base, los brillos y el tipo de argolla.",
    imagen: "assets/img/productos/llavero-resina.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["llavero", "resina", "personalizado", "nombre", "souvenir"],
  },
  {
    id: "aros-artesanales",
    nombre: "Aros artesanales",
    categoria: "Accesorios",
    precio: 6800,
    precioTexto: "",
    descripcion: "Livianos, hipoalergénicos y en varias combinaciones de color.",
    detalle:
      "Aros hechos a mano con base de acero quirúrgico. Livianos para usar todo el día. Consultame por los colores disponibles en el momento.",
    imagen: "assets/img/productos/aros-artesanales.svg",
    imagenes: [],
    destacado: false,
    disponible: true,
    etiquetas: ["aros", "accesorios", "acero", "colores"],
  },
  {
    id: "taza-personalizada",
    nombre: "Taza personalizada",
    categoria: "Personalizados",
    precio: 11000,
    precioTexto: "",
    descripcion: "Con nombre, frase o foto. Apta para lavavajillas.",
    detalle:
      "Taza de cerámica blanca sublimada con el diseño que quieras: nombre, frase, dibujo o foto. Se entrega en caja individual.",
    imagen: "assets/img/productos/taza-personalizada.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["taza", "personalizada", "foto", "frase", "regalo"],
  },
  {
    id: "box-regalo",
    nombre: "Box de regalo armada",
    categoria: "Regalos",
    precio: null,
    precioTexto: "Desde $18.000",
    descripcion: "Vos me decís la ocasión y el presupuesto, y yo la armo.",
    detalle:
      "Cajas armadas para cumpleaños, Día de la Madre, aniversarios o agradecimientos. Se arman según el presupuesto: velas, accesorios, algo dulce y tarjeta personalizada.",
    imagen: "assets/img/productos/box-regalo.svg",
    imagenes: [],
    destacado: true,
    disponible: true,
    etiquetas: ["box", "caja", "regalo", "cumpleaños", "combo"],
  },
  {
    id: "souvenirs-evento",
    nombre: "Souvenirs para eventos",
    categoria: "Souvenirs",
    precio: null,
    precioTexto: "Consultar por cantidad",
    descripcion: "Cumpleaños, bautismos y casamientos. Precio por cantidad.",
    detalle:
      "Souvenirs personalizados a pedido, desde 20 unidades. Se coordinan colores, packaging y fecha de entrega. Pedilos con al menos 3 semanas de anticipación.",
    imagen: "assets/img/productos/souvenirs-evento.svg",
    imagenes: [],
    destacado: false,
    disponible: true,
    etiquetas: ["souvenirs", "evento", "cumpleaños", "casamiento", "cantidad"],
  },
  {
    id: "cuadro-deco",
    nombre: "Cuadro decorativo",
    categoria: "Deco",
    precio: 15500,
    precioTexto: "",
    descripcion: "Para el living, el cuarto o la entrada. Varios tamaños.",
    detalle:
      "Cuadro decorativo hecho a mano, con marco de madera. Disponible en tres tamaños y con la frase o el diseño que prefieras.",
    imagen: "assets/img/productos/cuadro-deco.svg",
    imagenes: [],
    destacado: false,
    disponible: true,
    etiquetas: ["cuadro", "deco", "living", "pared", "madera"],
  },
  {
    id: "agenda-personalizada",
    nombre: "Cuaderno personalizado",
    categoria: "Personalizados",
    precio: 8900,
    precioTexto: "",
    descripcion: "Tapa dura con tu nombre. Hojas lisas o rayadas.",
    detalle:
      "Cuaderno A5 de tapa dura, personalizado con nombre o frase. Elegís el color de tapa y el tipo de hoja.",
    imagen: "assets/img/productos/agenda-personalizada.svg",
    imagenes: [],
    destacado: false,
    disponible: false,
    etiquetas: ["cuaderno", "agenda", "personalizado", "nombre"],
  },
];
