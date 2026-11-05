/* ==========================================================
   Diego Dev · idioma
   Inglés por defecto (es el texto del HTML). Español con el botón ES,
   con ?lang=es en la dirección o si la persona ya lo eligió antes.
   Para editar textos en español: cambia el valor en ES.
   Para editar textos en inglés: cambia el HTML (y WA.en / FORM.en aquí).
   ========================================================== */
(() => {
  'use strict';
  const d = document;
  const html = d.documentElement;
  const GUARDA = 'dd-idioma';

  const ES = {
    'meta.title': 'Diego Porras · Desarrollador web y de apps en Massachusetts',
    'meta.desc': 'Soy Diego Porras, desarrollador freelance en Boston, Massachusetts. Creo sitios web y aplicaciones a la medida de tu negocio, con trato directo.',
    skip: 'Saltar al contenido',
    'logo.aria': 'Diego Dev, inicio',
    'nav.aria': 'Principal',
    'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.services': 'Servicios', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos', 'nav.menu': 'Menú', 'menu.close': 'Cerrar menú',
    cta: 'Cuéntame tu proyecto',
    'hero.hi': 'Hola, soy',
    'hero.role': 'Desarrollador web y de apps',
    'hero.desc': 'Creo sitios y aplicaciones claros, rápidos y hechos a la medida de tu negocio. Desde Massachusetts, para clientes de cualquier lugar.',
    'hero.work': 'Ver mi trabajo',
    'hero.fig': 'Manacus y Lifetime, dos apps creadas por Diego',
    'hero.img1': 'Manacus, administrador de clientes para freelancers, con su tablero de propuestas',
    'hero.img2': 'Lifetime, app de finanzas personales en iPhone, con cuentas y presupuesto',
    'hero.tag1': 'Proyectos reales', 'hero.tag2': 'Webs y apps',
    'hero.tools': 'Construyo con', 'hero.toolsaria': 'Herramientas con las que trabajo',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Una persona, de principio a fin.',
    'about.lead': 'Soy Diego Ernesto Porras Vera, el desarrollador detrás de Diego Dev.',
    'about.p1': 'Mi trabajo une desarrollo web, tecnología y medios digitales. Creo sitios y aplicaciones pensando tanto en cómo funcionan como en las personas que los van a usar.',
    'about.p2': 'Trabajo contigo para entender qué necesita tu negocio, ordenar las ideas y convertirlas en un proyecto digital con sentido. Hablas directamente conmigo durante todo el proceso.',
    'about.b1': 'Trato directo, sin intermediarios',
    'about.b2': 'A la medida, nada de plantillas',
    'about.b3': 'Avances que ves en cada etapa',
    'about.b4': 'Te explico cómo seguir por tu cuenta',
    'card.aria': 'Datos de contacto', 'card.loc': 'Ubicación', 'card.locv': 'Boston, Massachusetts · trabajo remoto',
    'card.email': 'Correo', 'card.phone': 'Teléfono', 'card.profiles': 'Perfiles',
    'srv.eyebrow': 'Mis servicios',
    'srv.title': 'Lo que puedo hacer por tu negocio',
    'srv.1t': 'Desarrollo web',
    'srv.1p': 'Una web que presente tu negocio, explique lo que ofreces y facilite el siguiente paso a tus clientes.',
    'srv.2t': 'Aplicaciones a medida',
    'srv.2p': 'Herramientas para una necesidad concreta: organizar información, simplificar una tarea o crear una experiencia interactiva.',
    'srv.3t': 'Adaptado a cada pantalla',
    'srv.3p': 'Tu sitio se ve y funciona bien en celular, tableta y computadora, y carga rápido para que nadie se vaya esperando.',
    'srv.4t': 'Mejoras y mantenimiento',
    'srv.4p': 'Si ya tienes una web o app, revisamos su estado y definimos qué conviene mejorar: nuevas páginas, funciones o ajustes.',
    'prj.eyebrow': 'Proyectos destacados',
    'prj.title': 'Ideas que ya tienen forma.',
    'prj.github': 'Más en GitHub',
    'prj.tech': 'Tecnologías', 'prj.visit': 'Abrir sitio', 'prj.code': 'Ver código', 'prj.bilingual': 'Español e inglés',
    'prj.1k': 'Aplicación web · Educación',
    'prj.1p': 'Una forma de prepararse para el examen de manejo de Massachusetts, con práctica bilingüe, simulacros y progreso personal.',
    'prj.2k': 'Sitio web · Restaurante',
    'prj.2p': 'La presencia digital de un restaurante peruano en East Boston, con menú por categorías, información para pedidos y catering por etapas.',
    'prj.3k': 'Sitio web · Gastronomía',
    'prj.3p': 'Un sitio de comida peruana con menú, fichas de platos y pedidos por WhatsApp, pensado para descubrir y elegir.',
    'prj.mimg': 'Manacus en iPhone, iPad y Mac: panel principal y lista de clientes',
    'prj.mk': 'App · iPhone, iPad y Mac',
    'prj.mp': 'Un administrador de clientes para freelancers. Clientes, propuestas, proyectos, horas, facturas, pagos y gastos en un solo lugar, con un panel que muestra lo cobrado, lo pendiente y lo vencido.',
    'prj.mf1': 'Clientes, oportunidades y calendario',
    'prj.mf2': 'Tablero de propuestas, de la investigación a lista para presentar',
    'prj.mf3': 'Facturas, pagos y gastos con la ganancia del mes',
    'prj.mf4': 'Tareas y horas medidas contra tu capacidad',
    'prj.platforms': 'Plataformas',
    'prj.gapps': 'Apps para iPhone, iPad, Mac y Android',
    'prj.fk': 'App · iPhone, iPad y Mac',
    'prj.fp': 'Un entrenador de nutrición y gimnasio donde cada número tiene una fuente oficial. Le dices tu objetivo y arma dos planes que van juntos: qué comer y cómo entrenar, desde un día hasta un año.',
    'prj.ff1': 'Planes de alimentación y entrenamiento con periodización real',
    'prj.ff2': 'Planea con lo que mide tu Apple Watch, no con una fórmula',
    'prj.ff3': 'Lista del súper: qué comprar, cuánto, dónde y cómo cocinarlo seguro',
    'prj.ff4': 'Cada recomendación abre su fuente: ACSM, OMS, USDA y las Guías Alimentarias',
    'prj.fimg1': 'FUFI en iPhone: anillos de macros y gasto medido por el Apple Watch',
    'prj.fimg2': 'FUFI en iPad: programa de entrenamiento con periodización de 13 semanas',
    'prj.fimg3': 'FUFI en MacBook: tendencia de peso, adherencia y récords personales',
    'prj.gweb': 'Sitios web para negocios',
    'prj.gwapp': 'Aplicaciones web y sistemas',
    'hs.tag': 'Instalada en tu iPhone',
    'prj.soon': 'Próximamente en', 'prj.soonaria': 'Próximamente en App Store', 'prj.soongparia': 'Próximamente en Google Play',
    'hs.dia': 'MIÉ', 'hs.cal': 'Calendario', 'hs.clima': 'Clima', 'hs.reloj': 'Reloj', 'hs.correo': 'Correo',
    'hs.mapas': 'Mapas', 'hs.notas': 'Notas', 'hs.musica': 'Música', 'hs.camara': 'Cámara',
    'hs.ajustes': 'Ajustes', 'hs.archivos': 'Archivos', 'hs.mensajes': 'Mensajes',
    'prj.login': 'Acceso para personal',
    'prj.localseo': 'SEO local',
    'prj.corporate': 'Corporativo',
    'prj.6k': 'Tienda en línea · Gastronomía',
    'prj.6p': 'Una tienda en línea de turrón artesanal de miel hecho en Huancayo, Perú. Tiene catálogo de productos, carrito, cuentas de clientes, pedidos mayoristas y personalizados, y envíos a todo el Perú y al extranjero.',
    'prj.7k': 'Aplicación web · Sistema interno',
    'prj.7p': 'Un sistema interno de punto de venta para las tiendas CyberByte y Nexora. El personal inicia sesión para manejar ventas, el catálogo de productos y la operación diaria de cada tienda, con los contactos de soporte y el horario siempre a la vista.',
    'prj.8k': 'Sitio web · Eventos y entretenimiento',
    'prj.8p': 'El sitio de una productora de eventos en Boston: DJs, artistas en vivo, karaoke, sonido e iluminación para bodas, quinceañeras y eventos corporativos. Presenta servicios, tipos de evento y paquetes, con cotizaciones por WhatsApp.',
    'prj.9k': 'Sitio web · Hotel',
    'prj.9p': 'El sitio de un hotel familiar en Chilca, Huancayo, Perú. Muestra las habitaciones, servicios, galería, ubicación y preguntas frecuentes, con reservas por WhatsApp.',
    'prj.10k': 'Sitio web · Servicios para el hogar',
    'prj.10p': 'El sitio de una empresa de poda y jardinería en Randolph, Massachusetts. Cubre tala, poda, retiro de tocones y daños por tormentas, con galería, presupuestos gratis y atención de emergencia el mismo día.',
    'prj.12k': 'Sitio web · DJ y música',
    'prj.12p': 'El sitio de un DJ bilingüe para bodas y eventos en Boston. Reúne su biografía, próximas fechas, últimos mixes y videos, su residencia y sus redes, con reservas para bodas, eventos corporativos y fiestas privadas en toda Nueva Inglaterra.',
    'prj.11k': 'Sitio web · Ingeniería industrial',
    'prj.11p': 'El sitio corporativo de una empresa de ingeniería que diseña y suministra sistemas de fluidos para la industria del acero. Presenta sus sistemas de lubricación, hidráulicos, de enfriamiento y neumáticos, servicios de consultoría, noticias y oficinas en seis países.',
    'prj.gnpo': 'Sitios para organizaciones sin fines de lucro',
    'prj.npo': 'Sin fines de lucro',
    'prj.4k': 'Sitio web · Sin fines de lucro · Cultura',
    'prj.5k': 'Sitio web · Sin fines de lucro · Propuesta de diseño',
    'prj.5p': 'Una propuesta de sitio bilingüe para una asociación cultural peruana en Massachusetts, fundada en 2016 para difundir la tunantada, danza tradicional de Jauja. Cuenta su historia, explica la danza y sus personajes, y reúne sus encuentros, galería de fotos y una forma de participar.',
    'prj.4p': 'El sitio de una agrupación de danzas folclóricas peruanas en Jamaica Plain formada por familias, niños, jóvenes y adultos. Presenta sus danzas de costa y sierra, presentaciones, integrantes, galería de fotos y los reconocimientos que han recibido de Boston, Lynn y el Senado de Massachusetts.',
    'prj.lk': 'App · iPhone',
    'prj.lp': 'Una app de finanzas personales que reúne tu dinero y tu tiempo en un solo lugar. Registra tus gastos automáticamente y te muestra de un vistazo si tus cuentas están cubiertas, cuánto puedes gastar y cuánto te queda libre para ahorrar.',
    'prj.lf1': 'Registro automático con Apple Pay o importando el archivo de tu banco',
    'prj.lf2': 'Pagos fijos, recordatorios y presupuesto mensual por categoría',
    'prj.lf3': 'Patrimonio neto, metas de ahorro y portafolio',
    'prj.lf4': 'Privada: tus datos se quedan en tu teléfono, con bloqueo por Face ID',
    'prj.limg1': 'Panel de Lifetime: todo cubierto, dentro del presupuesto y libre para ahorrar',
    'prj.limg2': 'Movimientos de Lifetime registrados automáticamente con Apple Pay',
    'prj.limg3': 'Patrimonio en Lifetime con metas de ahorro y portafolio',
    'prj.demo': 'Pídeme una demo',
    'nav.nfc': 'NFC', 'nav.nfcmenu': 'Tarjetas NFC',
    'prj.nfcchip': 'Lista para NFC',
    'nfc.eyebrow': 'Opción física · NFC',
    'nfc.title': 'Tu app, en una tarjeta.',
    'nfc.intro': 'Cada app y sitio web que desarrollo puede tener una versión física: <strong>tarjetas NFC personalizadas para tu negocio</strong>, con tu logo y tus colores. Un toque con el celular abre la pantalla exacta que necesitas.',
    'nfc.u1t': 'Entrada y salida', 'nfc.u1p': 'Con tu app conectada a la nube, tu equipo toca una tarjeta para registrar sus horas.',
    'nfc.u2t': 'Tarjetas de cliente y lealtad', 'nfc.u2p': 'Con tu app conectada a la nube, tus clientes abren su perfil, sus puntos o sus premios.',
    'nfc.u3t': 'Registro en tu negocio', 'nfc.u3p': 'Visitas y clientes se registran al llegar.',
    'nfc.u4t': 'Tarjeta de presentación inteligente', 'nfc.u4p': 'Comparte tu contacto, tu web o tu WhatsApp con un toque.',
    'nfc.cardname': 'Tu negocio', 'nfc.cardtap': 'Toca para abrir',
    'proc.eyebrow': 'Cómo trabajo',
    'proc.title': 'Sin perderte en el proceso.',
    'proc.intro': 'Antes de escribir código, hablamos. Así cada etapa parte de una necesidad real y tiene un siguiente paso claro.',
    'proc.1t': 'Escuchar', 'proc.1p': 'Entender tu negocio, a tus usuarios y lo que quieres crear o mejorar.',
    'proc.2t': 'Definir', 'proc.2p': 'Acordar las funciones, lo que se entrega y el alcance antes de empezar.',
    'proc.3t': 'Construir', 'proc.3p': 'Dar forma al proyecto, compartir avances y revisar las decisiones contigo.',
    'proc.4t': 'Entregar', 'proc.4p': 'Revisar que todo funcione y explicarte lo necesario para dar el siguiente paso.',
    'ct.eyebrow': 'Trabajemos juntos',
    'ct.title': '¿Tienes un proyecto en mente?',
    'ct.p': 'Cuéntame qué quieres crear o mejorar. Una buena conversación es el primer paso, y te respondo yo directamente.',
    'f.title': 'O déjame los detalles',
    'f.intro': 'Preparo el mensaje por ti y lo revisas antes de enviarlo.',
    'f.name': 'Tu nombre', 'f.nameph': '¿Cómo te llamas?',
    'f.biz': 'Tu negocio <em>(opcional)</em>', 'f.bizph': 'Nombre del negocio',
    'f.need': '¿Qué necesitas?', 'f.opt0': 'Elige una opción',
    'f.opt1': 'Una web para mi negocio', 'f.opt2': 'Una aplicación a medida',
    'f.opt3': 'Que mi sitio funcione mejor en celular', 'f.opt4': 'Mejorar una web o app que ya tengo',
    'f.opt5': 'Quiero explorar una idea',
    'f.more': 'Cuéntame un poco más', 'f.moreph': 'Qué quieres crear, para quién y qué debería hacer',
    'f.error': 'Completa los campos marcados, por favor.',
    'f.send': 'Enviar por WhatsApp', 'f.email': 'Prefiero por correo',
    'f.note': 'Este formulario no guarda nada. Solo abre WhatsApp o tu correo con el mensaje listo.',
    'ft.tag': 'Tu proyecto, bien construido.',
    'ft.legal': '© 2026 Diego Porras. Todos los derechos reservados.',
  };

  // Mensajes de WhatsApp: los escribe el cliente, en su idioma
  const WA = {
    en: {
      'wa.nav': "Hi Diego, I saw your portfolio and I'd like to discuss a project.",
      'wa.main': "Hi Diego, I saw your portfolio and I'd like to tell you about my project.",
      'wa.about': "Hi Diego, I read about you on your portfolio and I'd like to tell you about my project.",
      'wa.s1': "Hi Diego, I'd like a quote for a business website. What information do you need?",
      'wa.s2': "Hi Diego, I'd like a quote for a custom application. What information do you need?",
      'wa.s3': "Hi Diego, I'd like my site to work better on mobile. Could you take a look?",
      'wa.s4': "Hi Diego, I have a website or app I'd like to improve. Could you take a look?",
      'wa.contact': "Hi Diego, I'd like to tell you about my project.",
      'wa.manacus': "Hi Diego, I saw Manacus on your portfolio and I'd like to see a demo.",
      'wa.lifetime': "Hi Diego, I saw Lifetime on your portfolio and I'd like to see a demo.",
      'wa.nfc': "Hi Diego, I'd like custom NFC cards for my business. Can we talk?",
      'wa.fufi': "Hi Diego, I saw FUFI on your portfolio and I'd like to see a demo.",
      'wa.pos': "Hi Diego, I saw POS Check on your portfolio and I'd like to see a demo.",
    },
    es: {
      'wa.nav': 'Hola Diego, vi tu portafolio y quiero hablar de un proyecto.',
      'wa.main': 'Hola Diego, vi tu portafolio y quiero contarte mi proyecto.',
      'wa.about': 'Hola Diego, leí sobre ti en tu portafolio y quiero contarte mi proyecto.',
      'wa.s1': 'Hola Diego, quiero cotizar una web para mi negocio. ¿Qué información necesitas?',
      'wa.s2': 'Hola Diego, quiero cotizar una aplicación a medida. ¿Qué información necesitas?',
      'wa.s3': 'Hola Diego, quiero que mi sitio funcione mejor en celular. ¿Lo revisamos?',
      'wa.s4': 'Hola Diego, ya tengo una web o app y quiero mejorarla. ¿La revisamos?',
      'wa.contact': 'Hola Diego, quiero contarte mi proyecto.',
      'wa.manacus': 'Hola Diego, vi Manacus en tu portafolio y me gustaría ver una demo.',
      'wa.lifetime': 'Hola Diego, vi Lifetime en tu portafolio y me gustaría ver una demo.',
      'wa.nfc': 'Hola Diego, quiero tarjetas NFC personalizadas para mi negocio. ¿Podemos hablar?',
      'wa.fufi': 'Hola Diego, vi FUFI en tu portafolio y me gustaría ver una demo.',
      'wa.pos': 'Hola Diego, vi POS Check en tu portafolio y me gustaría ver una demo.',
    },
  };

  // Lo que arma el formulario
  const FORM = {
    en: { hello: "Hi Diego, I saw your portfolio and I'd like to tell you about my project.", name: 'Name', biz: 'Business', need: 'I need', subject: 'Project' },
    es: { hello: 'Hola Diego, vi tu portafolio y quiero contarte mi proyecto.', name: 'Nombre', biz: 'Negocio', need: 'Necesito', subject: 'Proyecto' },
  };

  // Inglés: se toma del HTML tal como está escrito
  const EN = {
    'meta.title': d.title,
    'meta.desc': (d.querySelector('meta[name="description"]') || {}).content || '',
  };
  d.querySelectorAll('[data-i18n]').forEach((el) => { const k = el.dataset.i18n; if (!(k in EN)) EN[k] = el.innerHTML; });
  d.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((par) => {
      const [attr, k] = par.split(':').map((s) => s.trim());
      if (!(k in EN)) EN[k] = el.getAttribute(attr) || '';
    });
  });
  const TXT = { en: EN, es: ES };

  let lang = 'en';
  try {
    const q = new URLSearchParams(location.search).get('lang');
    const guardado = localStorage.getItem(GUARDA);
    if (q === 'es' || q === 'en') lang = q;
    else if (guardado === 'es') lang = 'es';
  } catch (e) { /* sin almacenamiento: inglés */ }

  const t = (k) => (TXT[lang][k] != null ? TXT[lang][k] : EN[k]);

  const aplicar = () => {
    html.lang = lang;
    d.title = t('meta.title');
    const md = d.querySelector('meta[name="description"]');
    if (md) md.content = t('meta.desc');
    d.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    d.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((par) => {
        const [attr, k] = par.split(':').map((s) => s.trim());
        el.setAttribute(attr, t(k));
      });
    });
    d.querySelectorAll('[data-wa-key]').forEach((a) => {
      a.href = `https://wa.me/16176508046?text=${encodeURIComponent(WA[lang][a.dataset.waKey] || WA.en['wa.main'])}`;
    });
    d.querySelectorAll('.idioma [data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  };

  const set = (nuevo) => {
    if (nuevo === lang || !TXT[nuevo]) return;
    d.dispatchEvent(new CustomEvent('dd:antes-idioma'));
    lang = nuevo;
    try { localStorage.setItem(GUARDA, lang); } catch (e) { /* nada */ }
    aplicar();
    d.dispatchEvent(new CustomEvent('dd:idioma', { detail: lang }));
  };

  d.addEventListener('click', (e) => {
    const b = e.target.closest('.idioma [data-lang]');
    if (b) set(b.dataset.lang);
  });

  aplicar();
  window.DDI = { get lang() { return lang; }, t, set, form: () => FORM[lang] };
})();
