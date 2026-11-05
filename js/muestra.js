/* Hoja de muestra: corre la firma de la portada y el botón "Ver de nuevo" */
(() => {
  'use strict';
  const { $, RM, hasGSAP, safe, listo, firmaPortada } = window.DD || {};
  if (!window.DD) return;
  safe(() => {
    const repetir = $('[data-ver-de-nuevo]');
    const aviso = $('[data-aviso-rm]');
    if (!hasGSAP) { if (repetir) repetir.hidden = true; return; }
    if (RM) {
      if (aviso) aviso.hidden = false;
      if (repetir) repetir.addEventListener('click', () => {
        gsap.fromTo('[data-portada] [data-pieza], [data-portada] .portada__titulo', { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: 'none' });
      });
      return;
    }
    let tl = null;
    listo().then(() => { tl = firmaPortada(); });
    if (repetir) repetir.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!tl) return;
      window.DD.scrollToEl(document.getElementById('portada'), true);
      tl.restart();
    });
  });
})();
