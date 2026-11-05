/* ==========================================================
   Diego Dev · sitio
   Orden: lo funcional primero (sirve sin animación), luego el movimiento
   ========================================================== */
(() => {
  'use strict';
  if (!window.DD) return;
  const { d, $, $$, RM, hasGSAP, safe, M, listo, firmaPortada, scrollToEl } = window.DD;
  const html = d.documentElement;
  const WA = '16176508046';
  const CORREO = 'diegoporrasveradepv@gmail.com';

  /* ---------- 1. Funcional: siempre ---------- */

  // Los botones de WhatsApp los arma js/idioma.js (cada uno con su mensaje, en el idioma elegido)
  const I = window.DDI || { form: () => ({ hello: "Hi Diego, I saw your portfolio and I'd like to tell you about my project.", name: 'Name', biz: 'Business', need: 'I need', subject: 'Project' }) };

  // Menú del celular
  safe(() => {
    const menu = $('#menu');
    const abrir = $('.nav__toggle');
    const cerrar = $('.menu__cerrar');
    if (!menu || !abrir) return;
    const set = (on) => {
      menu.hidden = !on;
      abrir.setAttribute('aria-expanded', String(on));
      if (window.DD.lenis) on ? window.DD.lenis.stop() : window.DD.lenis.start();
      d.body.style.overflow = on ? 'hidden' : '';
      if (on) { const a = $('a', menu); a && a.focus(); } else abrir.focus();
    };
    abrir.addEventListener('click', () => set(true));
    cerrar.addEventListener('click', () => set(false));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) { menu.hidden = true; abrir.setAttribute('aria-expanded', 'false'); d.body.style.overflow = ''; if (window.DD.lenis) window.DD.lenis.start(); } });
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) set(false); });
  });

  // Enlace activo en la navegación
  safe(() => {
    const links = $$('.nav__links a');
    const secciones = links.map((a) => d.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === `#${en.target.id}`));
        links.forEach((a) => { if (a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'true'); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secciones.forEach((s) => io.observe(s));
  });

  // Barra fija del celular: aparece al dejar la portada y se esconde en el contacto
  safe(() => {
    const barra = $('[data-barra]');
    const portada = $('#portada');
    const contacto = $('#contacto');
    if (!barra || !portada || !contacto) return;
    let enPortada = true, enContacto = false;
    const upd = () => barra.classList.toggle('is-on', !enPortada && !enContacto);
    new IntersectionObserver(([en]) => { enPortada = en.isIntersecting; upd(); }, { threshold: 0.15 }).observe(portada);
    new IntersectionObserver(([en]) => { enContacto = en.isIntersecting; upd(); }, { threshold: 0.05 }).observe(contacto);
  });

  // Formulario: arma el mensaje y abre WhatsApp o el correo
  safe(() => {
    const form = $('#form-contacto');
    if (!form) return;
    const error = $('.form__error', form);
    const f = form.elements;
    const valido = () => {
      let primero = null;
      ['nombre', 'servicio', 'mensaje'].forEach((n) => {
        const ok = f[n].checkValidity();
        f[n].setAttribute('aria-invalid', String(!ok));
        if (!ok && !primero) primero = f[n];
      });
      error.hidden = !primero;
      if (primero) primero.focus();
      return !primero;
    };
    const mensaje = () => {
      const T = I.form();
      const lineas = [T.hello, ''];
      const add = (et, v) => { if (v) lineas.push(`${et}: ${v}`); };
      add(T.name, f.nombre.value.trim());
      add(T.biz, f.negocio.value.trim());
      add(T.need, f.servicio.selectedIndex > 0 ? f.servicio.options[f.servicio.selectedIndex].text : '');
      lineas.push('', f.mensaje.value.trim());
      return lineas.join('\n');
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!valido()) return;
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(mensaje())}`, '_blank', 'noopener');
    });
    $('[data-correo]', form).addEventListener('click', () => {
      if (!valido()) return;
      const asunto = `${I.form().subject}: ${f.servicio.options[f.servicio.selectedIndex].text}`;
      location.href = `mailto:${CORREO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje())}`;
    });
    form.addEventListener('input', (e) => {
      if (e.target.getAttribute('aria-invalid') === 'true' && e.target.checkValidity()) {
        e.target.setAttribute('aria-invalid', 'false');
        if (!$$('[aria-invalid="true"]', form).length) error.hidden = true;
      }
    });
  });

  // Si llegan con #seccion en la dirección
  const irAlHash = () => safe(() => {
    const id = location.hash.slice(1);
    const el = id && d.getElementById(id);
    if (el && id !== 'portada') scrollToEl(el, true);
  });

  /* ---------- 2. Movimiento ---------- */
  if (!hasGSAP || RM) { if (location.hash) addEventListener('load', irAlHash); return; }

  // Títulos por líneas. Al cambiar de idioma se deshacen y se vuelven a dividir
  let splits = [];
  const splitTitulos = (yaVistos) => safe(() => {
    if (!window.SplitText) return;
    splits = $$('[data-split]').map((el) => SplitText.create(el, {
      type: 'lines', mask: 'lines', linesClass: 'linea', autoSplit: true,
      onSplit: (self) => {
        if (yaVistos || el.dataset.visto) return gsap.set(self.lines, { yPercent: 0 });
        return gsap.from(self.lines, {
          yPercent: 130, duration: M.dur * 1.1, stagger: M.stagger * 1.5, ease: M.ease,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true, onEnter: () => { el.dataset.visto = '1'; } },
        });
      },
    }));
  });
  d.addEventListener('dd:antes-idioma', () => safe(() => { splits.forEach((s) => s.revert()); splits = []; }));
  d.addEventListener('dd:idioma', () => safe(() => {
    $$('[data-split]').forEach((el) => {   // los que ya están en pantalla no se vuelven a animar
      if (el.getBoundingClientRect().top < innerHeight * 0.88) el.dataset.visto = '1';
    });
    splitTitulos();
    if (window.DD.recalcularCamino) window.DD.recalcularCamino();
    ScrollTrigger.refresh();
  }));

  const revelados = () => safe(() => {
    $$('[data-reveal]').forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: M.dist }, {
        autoAlpha: 1, y: 0, duration: M.dur, ease: M.ease,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
    $$('[data-reveal-grupo]').forEach((g) => {
      gsap.fromTo(g.children, { autoAlpha: 0, y: M.dist }, {
        autoAlpha: 1, y: 0, duration: M.dur, stagger: M.stagger * 1.5, ease: M.ease,
        scrollTrigger: { trigger: g, start: 'top 88%', once: true },
      });
    });
  });

  // Rima de la firma: cada captura se abre por la diagonal de la D, como la portada
  const capturas = () => safe(() => {
    $$('[data-abre]').forEach((el) => {
      gsap.fromTo(el,
        { clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)' },
        { clipPath: 'polygon(0% 0%, 160% 0%, 100% 100%, 0% 100%)', duration: M.dur * 1.4, ease: M.easeIO,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onComplete: () => gsap.set(el, { clipPath: 'none' }) });
    });
  });

  // La línea del proceso se dibuja conforme bajas
  const trazos = () => safe(() => {
    $$('[data-draw] path').forEach((p) => {
      gsap.fromTo(p, { strokeDasharray: '0 100' }, {
        strokeDasharray: '100 0', ease: 'none',
        scrollTrigger: { trigger: p.closest('.pasos-caja') || p, start: 'top 75%', end: 'bottom 60%', scrub: true },
      });
    });
  });

  listo().then(() => {
    safe(firmaPortada);
    html.classList.add('gsap-ok');
    splitTitulos();
    revelados();
    capturas();
    trazos();
    ScrollTrigger.refresh();
    if (location.hash) irAlHash();
  });
})();
