# Creaciones Abi — página web

Página estática (HTML, CSS y JavaScript, sin frameworks ni base de datos) con
catálogo de productos y contacto directo por WhatsApp. Pensada para publicarse
en Vercel gratis y poner el link en la bio de Instagram.

> **Estado actual:** los productos, las fotos y el número de WhatsApp son de
> ejemplo. Abajo está el paso a paso para reemplazarlos.

---

## 1. Primero que nada: cargar el WhatsApp real

Abrí el archivo **`assets/data/config.js`** y buscá esta línea:

```js
whatsapp: "5491112345678",
```

Cambiala por el número real, en **formato internacional y solo con números**:

| Cómo lo tenés agendado | Cómo va acá |
|---|---|
| `11 5555-6666` | `5491155556666` |
| `0351 15 444-5555` | `5493514445555` |

La regla para Argentina: `54` + `9` + código de área **sin el 0** + número **sin el 15**.

Mientras el número sea el de ejemplo, la web muestra un cartel amarillo de aviso
arriba de todo. Cuando lo cambies, ese cartel desaparece solo.

En el mismo archivo se cambian: nombre, frase, Instagram, horarios, zona,
formas de pago, envíos y el texto de "Sobre mí".

---

## 2. Cargar los productos

Los productos viven en **`assets/data/productos.js`**. Cada uno es un bloque así:

```js
{
  id: "vela-soja-lavanda",                 // texto corto, sin espacios ni acentos
  nombre: "Vela de soja aromática",
  categoria: "Velas",                       // arma sola los filtros del catálogo
  precio: 9500,                             // número pelado, o null para no mostrarlo
  precioTexto: "",                          // alternativa libre: "Desde $8.000", "Consultar"
  descripcion: "Se ve en la tarjeta.",
  detalle: "Se ve al abrir el producto.",
  imagen: "assets/img/productos/vela-soja-lavanda.svg",
  imagenes: [],
  destacado: true,                          // true = sale también en la portada
  disponible: true,                         // false = muestra el cartel "A pedido"
  etiquetas: ["vela", "regalo"]             // ayudan al buscador
},
```

- **Para agregar un producto:** copiá un bloque entero (desde `{` hasta `},`) y cambiale los datos.
- **Para sacar un producto:** borrá el bloque completo, con su coma.
- Las categorías y los filtros se generan solos con lo que escribas en `categoria`.

### Las fotos

1. Guardá las fotos en `assets/img/productos/`.
2. Poné el nombre del archivo en el campo `imagen`, por ejemplo
   `imagen: "assets/img/productos/vela-lavanda.jpg"`.

Recomendaciones: **cuadradas** (1:1), alrededor de 1000×1000 px y menos de 300 KB
cada una para que la página cargue rápido en el celular. Las que están ahora son
dibujos de muestra en `.svg` y hay que reemplazarlas.

---

## 3. Ver la página antes de publicarla

Alcanza con hacer doble clic en `index.html` y se abre en el navegador.

Si preferís un servidor local (recomendado para probar como se va a ver de verdad):

```bash
npx serve .
# o
python3 -m http.server 8000
```

Después entrá a `http://localhost:8000`.

---

## 4. Publicar en Vercel

1. Subí este repositorio a GitHub (ya está en `maiacostavera/creaciones`).
2. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con la cuenta de GitHub.
3. **Add New… → Project** y elegí el repositorio `creaciones`.
4. Vercel lo detecta como sitio estático: **no toques nada**, dejá el framework en
   "Other" y los campos de build vacíos. Clic en **Deploy**.
5. En menos de un minuto queda online en una dirección tipo
   `https://creaciones.vercel.app`.

Desde ahí, **cada vez que se suba un cambio a GitHub, Vercel actualiza la web sola**.
No hay que volver a hacer nada.

### Dominio propio (opcional)

En **Settings → Domains** del proyecto se puede conectar un dominio propio
(`creacionesabi.com.ar`, por ejemplo). Vercel da el certificado HTTPS gratis.

### Después de publicar

Reemplazá `https://creaciones-abi.vercel.app` por la dirección definitiva en:

- `index.html` → las etiquetas `canonical`, `og:url` y `og:image`
- `assets/data/config.js` → el campo `url`
- `robots.txt` y `sitemap.xml`

Eso hace que, al compartir el link por WhatsApp, aparezca la vista previa con
título, descripción e imagen.

---

## 5. Poner el link en Instagram

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
  js/app.js                 catálogo, filtros, buscador, modal y links de WhatsApp
  data/config.js            👈 datos del negocio
  data/productos.js         👈 catálogo
  img/                      logo, imagen para compartir y fotos de productos
```

### Cambiar los colores

En `assets/css/styles.css`, las primeras líneas:

```css
--crema:     #FDF8F3;   /* fondo */
--terracota: #B07D56;   /* color principal */
--tinta:     #3D3129;   /* textos y botón oscuro */
--salvia:    #6E7F63;   /* detalles */
```

Cambiando esos cuatro valores cambia la identidad de todo el sitio.

---

## Qué hace la página

- **Responsive de verdad**: diseñada primero para celular, que es por donde va a
  entrar casi todo el mundo desde Instagram.
- **Catálogo con filtros por categoría y buscador** (ignora acentos y mayúsculas).
- **Botón de WhatsApp en cada producto**: abre el chat con el mensaje ya escrito,
  con el nombre del producto y el precio. No hay que explicar qué se quiere.
- **Botón flotante de WhatsApp** siempre visible.
- **Link directo a un producto**: `…/#p-vela-soja-lavanda` abre la página con ese
  producto ya desplegado. Sirve para pasarle a alguien un modelo puntual.
- **Vista previa al compartir** el link (imagen, título y descripción).
- **Cero dependencias**: no hay que instalar ni mantener nada.

---

## Ideas para más adelante

- Carrito simple que junte varios productos en un solo mensaje de WhatsApp.
- Galería con varias fotos por producto (el campo `imagenes` ya está preparado).
- Sección de testimonios o fotos de clientas.
- Formulario de pedidos personalizados (color, nombre, fecha de entrega).
- Panel para cargar productos sin tocar archivos.
