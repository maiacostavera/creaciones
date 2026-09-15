# Creaciones Abi — página web

Página estática (HTML, CSS y JavaScript, sin frameworks ni base de datos) con
catálogo de productos y contacto directo por WhatsApp. Pensada para publicarse
en Vercel y poner el link en la bio de Instagram.

**Ya están cargados:** el nombre, el WhatsApp (11 2575-0730), el Instagram
(@crecionesabi) y los 8 productos, con los colores del flyer.

**Falta:** las fotos reales y los precios. Abajo está cómo cargarlos.

---

## 1. Subir las fotos (lo más importante)

Hoy cada producto muestra un dibujito provisorio que dice "FALTA LA FOTO".
Para poner las fotos de verdad:

### Desde la web de GitHub, sin instalar nada

1. Entrá a la carpeta
   [`assets/img/productos`](../../tree/main/assets/img/productos) del repositorio.
2. Botón **Add file → Upload files**.
3. Arrastrá las fotos y clic en **Commit changes**.
4. Abrí `assets/data/productos.js`, tocá el lápiz ✏️ y cambiá la línea `imagen:`
   de cada producto por el nombre del archivo que subiste.

Por ejemplo, si subiste `bolsitas-spiderman.jpg`:

```js
imagen: "assets/img/productos/bolsitas-spiderman.jpg",
```

### Cómo conviene que sean las fotos

- **Cuadradas** (1:1). Si son rectangulares, la web las recorta al centro.
- Alrededor de **1000×1000 px** y **menos de 300 KB** cada una, para que cargue
  rápido desde el celular.
- Con buena luz y fondo prolijo. La primera foto de cada producto es la que más
  se ve, así que conviene que sea la mejor.

---

## 2. Cargar los precios

Ahora las tarjetas dicen "Según cantidad" o "Consultar precio". Para mostrar un
precio, en `assets/data/productos.js` escribilo en `precio` como número pelado y
dejá `precioTexto` vacío:

```js
precio: 4500,        // se muestra como $4.500
precioTexto: "",
```

Y al revés, para texto libre:

```js
precio: null,
precioTexto: "Desde $8.000",
```

Cuando hay un precio en números, el mensaje de WhatsApp lo incluye solo.

---

## 3. Agregar o sacar productos

Los productos viven en **`assets/data/productos.js`**. Cada uno es un bloque así:

```js
{
  id: "bolsitas-cumpleanos",               // texto corto, sin espacios ni acentos
  nombre: "Bolsitas personalizadas",
  categoria: "Cumpleaños",                  // arma sola los filtros del catálogo
  precio: null,
  precioTexto: "Según cantidad",
  descripcion: "Se ve en la tarjeta.",
  detalle: "Se ve al abrir el producto.",
  imagen: "assets/img/productos/bolsitas-cumpleanos.svg",
  imagenes: [],
  destacado: true,                          // true = sale también en la portada
  disponible: true,                         // false = muestra el cartel "A pedido"
  etiquetas: ["bolsitas", "cumpleaños"]      // ayudan al buscador
},
```

- **Para agregar:** copiá un bloque entero (desde `{` hasta `},`) y cambiale los datos.
- **Para sacar:** borrá el bloque completo, con su coma.
- Las categorías y los filtros se generan solos con lo que escribas en `categoria`.

---

## 4. Cambiar los datos del negocio

Todo lo demás está en **`assets/data/config.js`**: nombre, frase, WhatsApp,
Instagram, horarios, zona, envíos, formas de pago y el texto de "Sobre mí".

El WhatsApp va en formato internacional y **solo con números**:

| Cómo lo tenés agendado | Cómo va acá |
|---|---|
| `11 2575-0730` | `5491125750730` |
| `0351 15 444-5555` | `5493514445555` |

La regla para Argentina: `54` + `9` + código de área **sin el 0** + número **sin el 15**.
Si el número quedara mal cargado, la web muestra un cartel de aviso hasta que se corrija.

---

## 5. Ver la página antes de publicarla

Alcanza con hacer doble clic en `index.html` y se abre en el navegador.

Con un servidor local (se ve igual que publicada):

```bash
npx serve .
# o
python3 -m http.server 8000
```

Después entrá a `http://localhost:8000`.

---

## 6. Publicar en Vercel

1. Entrá a [vercel.com](https://vercel.com) y **Sign Up → Continue with GitHub**.
2. **Add New… → Project** y elegí el repositorio `creaciones`.
3. En *Framework Preset* dejá **Other**. No toques los campos de build: están
   vacíos a propósito, porque el sitio no necesita compilarse.
4. Clic en **Deploy**. En menos de un minuto queda online en una dirección tipo
   `https://creaciones.vercel.app`.

Desde ahí, **cada cambio que se suba a GitHub actualiza la web sola**.

### Dominio propio (opcional)

En **Settings → Domains** del proyecto se puede conectar un dominio propio
(`creacionesabi.com.ar`, por ejemplo). El certificado HTTPS lo da Vercel, gratis.

### Después de publicar

Reemplazá `https://creaciones-abi.vercel.app` por la dirección definitiva en:

- `index.html` → las etiquetas `canonical`, `og:url` y `og:image`
- `assets/data/config.js` → el campo `url`
- `robots.txt` y `sitemap.xml`

Eso hace que, al compartir el link por WhatsApp, aparezca la vista previa con
título, descripción e imagen.

---

## 7. Poner el link en Instagram

Editar perfil → **Sitio web** → pegar la dirección de Vercel.
Conviene además fijarlo en una historia destacada y mencionarlo en la bio
("Catálogo y pedidos 👇").

---

## Cómo está armado

```
index.html                  todo el contenido de la página
vercel.json                 configuración del deploy (cache y headers)
robots.txt / sitemap.xml    para que Google la encuentre
assets/
  css/styles.css            estilos (los colores están arriba de todo, en :root)
  css/fonts.css             tipografías, servidas desde el propio repo
  js/app.js                 catálogo, filtros, buscador, modal y links de WhatsApp
  data/config.js            👈 datos del negocio
  data/productos.js         👈 catálogo
  fonts/                    Baloo 2, Pacifico y Quicksand (licencia SIL OFL)
  img/                      logo, imagen para compartir y fotos de productos
```

### Cambiar los colores

En `assets/css/styles.css`, las primeras líneas:

```css
--fondo:  #FFF7FC;   /* fondo de la página */
--rosa:   #DB4E96;   /* color principal */
--lila:   #9159C8;   /* color secundario */
--tinta:  #4A2E52;   /* textos y botón oscuro */
```

Cambiando esos cuatro valores cambia la identidad de todo el sitio.

Las tipografías (Baloo 2 para los títulos, Pacifico para el logo y Quicksand
para el texto) están descargadas dentro del repositorio: la página no depende de
Google Fonts y carga más rápido.

---

## Qué hace la página

- **Responsive de verdad**: diseñada primero para celular, que es por donde va a
  entrar casi todo el mundo desde Instagram. El catálogo va en dos columnas.
- **Catálogo con filtros por categoría y buscador** (ignora acentos y mayúsculas).
- **Botón de WhatsApp en cada producto**: abre el chat con el mensaje ya escrito,
  con el nombre del producto. No hay que explicar qué se quiere.
- **Botón flotante de WhatsApp** siempre visible.
- **Link directo a un producto**: `…/#p-taza-personalizada` abre la página con ese
  producto ya desplegado. Sirve para pasarle a alguien un modelo puntual.
- **Vista previa al compartir** el link (imagen, título y descripción).
- **Cero dependencias**: no hay que instalar ni mantener nada.

---

## Ideas para más adelante

- Carrito simple que junte varios productos en un solo mensaje de WhatsApp.
- Galería con varias fotos por producto (el campo `imagenes` ya está preparado).
- Sección de testimonios o fotos de cumpleaños ya entregados.
- Formulario de pedidos: temática, cantidad de invitados y fecha del cumple.
