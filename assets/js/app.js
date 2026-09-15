/* =============================================================
   Creaciones Abi — lógica del sitio
   No hace falta tocar este archivo para cambiar productos ni
   datos de contacto: eso está en assets/data/
   ============================================================= */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var PRODUCTOS = Array.isArray(window.PRODUCTOS) ? window.PRODUCTOS : [];
  var WA_DEMO = "5491112345678";

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- Utilidades ---------- */

  function soloNumeros(v) { return String(v || "").replace(/\D/g, ""); }

  function linkWhatsApp(texto) {
    var num = soloNumeros(CFG.whatsapp);
    if (!num) return "#";
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(texto || "");
  }

  function telFormateado() {
    var n = soloNumeros(CFG.whatsapp);
    if (!n) return "";
    // 54 9 11 5555 6666 -> +54 9 11 5555-6666
    var m = n.match(/^54(9?)(\d{2,4})(\d{4})(\d{4})$/);
    if (m) return "+54 " + (m[1] ? "9 " : "") + m[2] + " " + m[3] + "-" + m[4];
    return "+" + n;
  }

  function precioTexto(p) {
    if (p.precioTexto) return p.precioTexto;
    if (typeof p.precio === "number" && !isNaN(p.precio)) {
      try {
        return (CFG.moneda || "$") + p.precio.toLocaleString("es-AR");
      } catch (e) {
        return (CFG.moneda || "$") + p.precio;
      }
    }
    return "Consultar";
  }

  function mensajeProducto(p) {
    var base = CFG.mensajeBase || "Hola! Quería consultarte por";
    // El precio va en el mensaje solo si es un importe; "Consultar" no aporta nada.
    var hayImporte = typeof p.precio === "number" && !isNaN(p.precio);
    var importe = hayImporte ? " (" + precioTexto(p) + ")" : "";
    return base + " *" + p.nombre + "*" + importe + ". ¿Me contás cómo seguimos?";
  }

  function texto(el, valor) { if (el) el.textContent = valor; }

  /* ---------- Datos del negocio en el HTML ---------- */

  function pintarConfig() {
    $$("[data-site]").forEach(function (el) {
      var clave = el.getAttribute("data-site");
      if (CFG[clave]) el.textContent = CFG[clave];
    });

    // Título de la pestaña y metadatos
    if (CFG.marca) {
      document.title = CFG.marca + " · " + (CFG.tagline || "Creaciones artesanales");
      var inicial = (CFG.inicial || CFG.marca.trim().charAt(0)).toUpperCase();
      $$(".brand-mark, .sobre-art span").forEach(function (el) {
        if (inicial) el.textContent = inicial;
      });
    }

    // Enlaces de WhatsApp
    var href = linkWhatsApp(CFG.mensajeGeneral || CFG.mensajeBase || "Hola!");
    $$("[data-wa-general]").forEach(function (a) {
      a.setAttribute("href", href);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
    texto($("[data-wa-display]"), telFormateado() || "Cargá tu número");

    // Instagram
    var ig = String(CFG.instagram || "").replace(/^@/, "").trim();
    $$("[data-ig]").forEach(function (a) {
      if (!ig) { a.setAttribute("hidden", ""); return; }
      a.setAttribute("href", "https://www.instagram.com/" + ig + "/");
      if (a.textContent.trim().charAt(0) === "@") a.textContent = "@" + ig;
    });

    // Email (opcional)
    if (CFG.email) {
      var fila = $("[data-email-row]");
      var mail = $("[data-email]");
      if (fila) fila.removeAttribute("hidden");
      if (mail) { mail.setAttribute("href", "mailto:" + CFG.email); mail.textContent = CFG.email; }
    }

    // Pasos, envíos y pagos
    var pasos = $("#pasos");
    if (pasos && Array.isArray(CFG.pasos)) {
      pasos.innerHTML = CFG.pasos.map(function (p) {
        return "<li><h3></h3><p></p></li>";
      }).join("");
      $$("#pasos li").forEach(function (li, i) {
        texto($("h3", li), CFG.pasos[i].titulo);
        texto($("p", li), CFG.pasos[i].texto);
      });
    }

    listaSimple("#listaEnvios", CFG.envios);
    listaSimple("#listaPagos", CFG.pagos);

    texto($("#anio"), new Date().getFullYear());

    // Aviso mientras no se cargue el WhatsApp real
    if (soloNumeros(CFG.whatsapp) === WA_DEMO) {
      var banner = $("#demoBanner");
      if (banner) banner.removeAttribute("hidden");
    }
  }

  function listaSimple(sel, items) {
    var ul = $(sel);
    if (!ul || !Array.isArray(items)) return;
    ul.innerHTML = "";
    items.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
  }

  /* ---------- Tarjetas de producto ---------- */

  function crearCard(p) {
    var card = document.createElement("article");
    card.className = "card";

    var media = document.createElement("div");
    media.className = "card-media";

    if (!p.disponible) {
      var et = document.createElement("span");
      et.className = "etiqueta pedido";
      et.textContent = "A pedido";
      media.appendChild(et);
    }

    var img = document.createElement("img");
    img.src = p.imagen || "assets/img/favicon.svg";
    img.alt = p.nombre;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 800; img.height = 800;
    media.appendChild(img);

    var lupa = document.createElement("button");
    lupa.type = "button";
    lupa.setAttribute("aria-label", "Ver detalle de " + p.nombre);
    lupa.addEventListener("click", function () { abrirModal(p); });
    media.appendChild(lupa);

    var body = document.createElement("div");
    body.className = "card-body";

    var cat = document.createElement("p");
    cat.className = "card-cat";
    cat.textContent = p.categoria || "";

    var h3 = document.createElement("h3");
    h3.className = "card-titulo";
    var btnTitulo = document.createElement("button");
    btnTitulo.type = "button";
    btnTitulo.textContent = p.nombre;
    btnTitulo.addEventListener("click", function () { abrirModal(p); });
    h3.appendChild(btnTitulo);

    var desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = p.descripcion || "";

    var precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = precioTexto(p);

    var cta = document.createElement("a");
    cta.className = "btn btn-wa btn-block btn-sm";
    cta.href = linkWhatsApp(mensajeProducto(p));
    cta.target = "_blank";
    cta.rel = "noopener";
    cta.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.6 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.2-.7-2.7-1.1-4.4-3.9-4.5-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.1.1.5-.1 1Z"/></svg>';
    cta.appendChild(document.createTextNode("Consultar"));

    body.appendChild(cat);
    body.appendChild(h3);
    body.appendChild(desc);
    body.appendChild(precio);
    body.appendChild(cta);

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function pintarGrilla(contenedor, lista) {
    contenedor.innerHTML = "";
    var frag = document.createDocumentFragment();
    lista.forEach(function (p) { frag.appendChild(crearCard(p)); });
    contenedor.appendChild(frag);
  }

  /* ---------- Filtros y búsqueda ---------- */

  var estado = { categoria: "Todos", busqueda: "" };

  function categorias() {
    var vistas = [];
    PRODUCTOS.forEach(function (p) {
      if (p.categoria && vistas.indexOf(p.categoria) === -1) vistas.push(p.categoria);
    });
    return ["Todos"].concat(vistas);
  }

  function pintarFiltros() {
    var cont = $("#filtros");
    if (!cont) return;
    cont.innerHTML = "";
    categorias().forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip-filtro";
      b.textContent = c;
      b.setAttribute("aria-pressed", c === estado.categoria ? "true" : "false");
      b.addEventListener("click", function () {
        estado.categoria = c;
        $$(".chip-filtro", cont).forEach(function (o) { o.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        aplicarFiltros();
      });
      cont.appendChild(b);
    });
  }

  function normalizar(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function aplicarFiltros() {
    var q = normalizar(estado.busqueda).trim();
    var lista = PRODUCTOS.filter(function (p) {
      if (estado.categoria !== "Todos" && p.categoria !== estado.categoria) return false;
      if (!q) return true;
      var heno = normalizar(
        [p.nombre, p.categoria, p.descripcion, p.detalle, (p.etiquetas || []).join(" ")].join(" ")
      );
      return q.split(/\s+/).every(function (palabra) { return heno.indexOf(palabra) !== -1; });
    });

    pintarGrilla($("#gridCatalogo"), lista);
    var vacio = $("#sinResultados");
    if (vacio) vacio.hidden = lista.length !== 0;
  }

  /* ---------- Modal ---------- */

  var ultimoFoco = null;

  function abrirModal(p) {
    var modal = $("#modal");
    if (!modal) return;
    ultimoFoco = document.activeElement;

    var img = $("#modalImg");
    img.src = p.imagen || "assets/img/favicon.svg";
    img.alt = p.nombre;
    texto($("#modalCat"), p.categoria || "");
    texto($("#modalTitulo"), p.nombre);
    texto($("#modalPrecio"), precioTexto(p));
    texto($("#modalDetalle"), p.detalle || p.descripcion || "");

    var tags = $("#modalTags");
    tags.innerHTML = "";
    (p.etiquetas || []).slice(0, 6).forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      tags.appendChild(li);
    });

    var wa = $("#modalWa");
    wa.href = linkWhatsApp(mensajeProducto(p));
    wa.target = "_blank";
    wa.rel = "noopener";

    modal.hidden = false;
    document.body.classList.add("sin-scroll");
    $(".modal-close", modal).focus();

    if (p.id && history.replaceState) {
      history.replaceState(null, "", "#p-" + p.id);
    }
  }

  function cerrarModal() {
    var modal = $("#modal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("sin-scroll");
    if (history.replaceState && location.hash.indexOf("#p-") === 0) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
  }

  /* ---------- Menú mobile ---------- */

  function menu() {
    var btn = $("#navToggle");
    var nav = $("#navMenu");
    if (!btn || !nav) return;

    btn.addEventListener("click", function () {
      var abierto = nav.classList.toggle("abierto");
      btn.setAttribute("aria-expanded", abierto ? "true" : "false");
      btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    $$("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("abierto");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Arranque ---------- */

  function init() {
    pintarConfig();
    menu();

    // Destacados
    var destacados = PRODUCTOS.filter(function (p) { return p.destacado; });
    if (destacados.length) {
      $("#destacados").hidden = false;
      pintarGrilla($("#gridDestacados"), destacados.slice(0, 4));
    }

    pintarFiltros();
    aplicarFiltros();

    var buscador = $("#buscador");
    if (buscador) {
      var t;
      buscador.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          estado.busqueda = buscador.value;
          aplicarFiltros();
        }, 140);
      });
    }

    $$("[data-cerrar]").forEach(function (el) {
      el.addEventListener("click", cerrarModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") cerrarModal();
    });

    // Link directo a un producto: ...#p-vela-soja-lavanda
    abrirDesdeHash();
    window.addEventListener("hashchange", abrirDesdeHash);
  }

  function abrirDesdeHash() {
    if (location.hash.indexOf("#p-") !== 0) return;
    var id = location.hash.slice(3);
    var encontrado = PRODUCTOS.filter(function (p) { return p.id === id; })[0];
    if (encontrado) abrirModal(encontrado);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
