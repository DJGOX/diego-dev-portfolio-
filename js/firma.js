/* ==========================================================
   Diego Dev · cimientos y firma de la portada
   La usan direccion-de-arte.html y el sitio. Expone window.DD
   ========================================================== */
(() => {
  'use strict';

  // 1. Ayudantes y banderas
  const d = document;
  const html = d.documentElement;
  const $ = (s, c = d) => c.querySelector(s);
  const $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const safe = (fn) => { try { return fn(); } catch (e) { console.warn('[diego-dev]', e); } };

  if (!hasGSAP) html.classList.remove('js');
  else {
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  // Tokens de movimiento: preciso y sereno (pareja de las variables CSS)
  const M = { ease: 'power3.out', easeIO: 'power3.inOut', pop: 'back.out(1.3)', dur: 0.8, stagger: 0.06, dist: 22, lerp: 0.11 };

  // 2. Lenis conectado a ScrollTrigger
  let lenis = null;
  if (hasGSAP && !RM && window.Lenis && M.lerp) {
    safe(() => {
      lenis = new Lenis({ lerp: M.lerp, smoothWheel: true, wheelMultiplier: 1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    });
  }

  const scrollToEl = (el, instant) => {
    const off = -((($('.nav') || {}).offsetHeight) || 0);
    if (lenis) lenis.scrollTo(el, { offset: off, duration: instant ? 0 : 1.3, immediate: !!instant });
    else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + off, behavior: RM || instant ? 'auto' : 'smooth' });
  };
  d.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    const el = hash.length > 1 && d.getElementById(hash.slice(1));
    if (!el) return;
    e.preventDefault();
    scrollToEl(el);
    history.replaceState(null, '', hash);
  });

  // Barra de navegación sólida al bajar
  safe(() => {
    const nav = $('.nav');
    if (!nav) return;
    const upd = () => nav.classList.toggle('is-solid', scrollY > 24);
    upd();
    addEventListener('scroll', upd, { passive: true });
  });

  // 3. El camino: de la ranura de la ventana al botón principal
  const trazarCamino = () => {
    const svg = $('.portada .camino');
    const win = $('[data-camino-desde]');
    const btn = $('[data-camino-hasta]');
    if (!svg || !win || !btn) return null;
    const h = svg.getBoundingClientRect();
    const w = win.getBoundingClientRect();
    const b = btn.getBoundingClientRect();
    const sx = w.left + w.width * 0.54 - h.left;
    const sy = w.top + w.height * 0.61 - h.top;
    let ex, ey, c1x, c1y, c2x, c2y;
    if (b.bottom < w.top) {           // celular: la ventana queda abajo; la luz sube por la derecha y entra al botón
      ex = b.right - h.left + 8; ey = b.top + b.height * 0.5 - h.top;
      const dy = sy - ey;
      c1x = sx + w.width * 0.12; c1y = sy - dy * 0.55;
      c2x = ex + 70; c2y = ey;
    } else {                          // escritorio: sigue la diagonal de la ranura y entra al botón por debajo
      ex = b.left + b.width * 0.5 - h.left; ey = b.bottom - h.top + 8;
      const dx = sx - ex;
      c1x = sx - dx * 0.4; c1y = sy + dx * 0.4 * (32 / 46) * (w.height / w.width);
      c2x = ex; c2y = ey + 36;
    }
    svg.setAttribute('viewBox', `0 0 ${h.width} ${h.height}`);
    const path = $('path', svg);
    path.setAttribute('d', `M${sx},${sy} C${c1x},${c1y} ${c2x},${c2y} ${ex},${ey}`);
    return path;
  };
  const dibujarCamino = (path) => {
    if (!path) return gsap.timeline();
    const L = path.getTotalLength();
    return gsap.timeline().fromTo(path, { strokeDasharray: L, strokeDashoffset: L },
      { strokeDashoffset: 0, duration: M.dur * 1.25, ease: M.easeIO });
  };
  safe(trazarCamino);
  let anchoCamino = innerWidth, rCamino;
  addEventListener('resize', () => {
    if (innerWidth === anchoCamino) return;
    anchoCamino = innerWidth;
    clearTimeout(rCamino);
    rCamino = setTimeout(() => safe(() => {
      const p = trazarCamino();
      if (p && hasGSAP) gsap.set(p, { strokeDasharray: 'none', strokeDashoffset: 0 });
    }), 200);
  });

  // 4. La firma: la ranura del logo se enciende, abre la ventana y su luz baja hasta el botón
  const ABRE_DE = 'polygon(0% 98%, 100% 28.5%, 100% 29.5%, 0% 99%)';
  const ABRE_A = 'polygon(0% -80%, 100% -80%, 100% 210%, 0% 210%)';

  function firmaPortada() {
    const camino = trazarCamino();
    const luz = $('.ventana__ranura .r-luz');
    const Lluz = luz ? luz.getTotalLength() : 0;
    gsap.set('.portada__linea-in', { yPercent: 130, y: 0 });
    gsap.set('[data-pieza]', { autoAlpha: 0 });
    html.classList.add('gsap-ok');   // GSAP toma el control: se apaga el rescate por tiempo

    const tl = gsap.timeline({ defaults: { ease: M.ease } });
    tl.fromTo('.nav__inner', { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: M.dur }, 0);
    if (luz) {
      tl.fromTo(luz, { strokeDasharray: Lluz, strokeDashoffset: Lluz, strokeOpacity: 1 },
        { strokeDashoffset: 0, duration: 0.6, ease: M.easeIO, onComplete: () => gsap.set(luz, { strokeDasharray: 'none' }) }, 0.1);
    }
    tl.fromTo('.ventana__abre', { autoAlpha: 1, clipPath: ABRE_DE },
        { clipPath: ABRE_A, duration: 1.05, ease: M.easeIO, onComplete: () => gsap.set('.ventana__abre', { clipPath: 'none' }) }, 0.55)
      .fromTo('.ventana__img', { scale: 1.08 }, { scale: 1, duration: 1.5 }, 0.55)
      .to('.portada__linea-in', { yPercent: 0, duration: M.dur * 1.2, stagger: M.stagger * 1.5 }, 0.2)
      .fromTo('[data-pieza="texto"]', { autoAlpha: 0, y: M.dist }, { autoAlpha: 1, y: 0, duration: M.dur, stagger: M.stagger }, 0.6)
      .fromTo('.ventana__cel', { autoAlpha: 0, y: 46, rotate: -5 }, { autoAlpha: 1, y: 0, rotate: 0, duration: M.dur * 1.2, ease: M.pop }, 1.1)
      .fromTo('.ventana__etiqueta', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: M.dur }, 1.3)
      .fromTo('[data-pieza="herr"]', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: M.dur, stagger: M.stagger }, 1.2)
      .add(dibujarCamino(camino), 1.4);
    if (luz) tl.to(luz, { strokeOpacity: 0.45, duration: 0.6 }, 1.6);
    tl.fromTo('[data-camino-hasta] .ico', { x: -4, y: 4 }, { x: 0, y: 0, duration: 0.5, ease: M.pop }, 2.35);

    // se salta con un toque o una tecla
    const saltar = () => { if (tl.progress() < 1) tl.progress(1); };
    d.addEventListener('pointerdown', saltar, { once: true });
    d.addEventListener('keydown', saltar, { once: true });
    return tl;
  }

  const listo = () => Promise.race([d.fonts ? d.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]);

  const recalcularCamino = () => safe(() => {
    const p = trazarCamino();
    if (p && hasGSAP) gsap.set(p, { strokeDasharray: 'none', strokeDashoffset: 0 });
  });
  // sin animaciones, el camino también se recalcula al cambiar de idioma
  if (!hasGSAP || RM) d.addEventListener('dd:idioma', recalcularCamino);

  window.DD = { d, $, $$, RM, FINE, hasGSAP, safe, M, lenis, firmaPortada, listo, scrollToEl, recalcularCamino };
})();
