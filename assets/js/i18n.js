(function () {
  'use strict';

  // ─── Translation dictionary ───────────────────────────────────────────────

  const translations = {
    it: {
      // Navbar
      'nav.home':      'Home',
      'nav.menu':      'Menu',
      'nav.struttura': 'Struttura',
      'nav.eventi':    'Eventi',
      'nav.contatti':  'Contatti',

      // index.html — Hero
      'hero.badge':    'Padova &middot; Cucina Rumena &amp; Moldava',
      'hero.title':    'Sapori<br><em>di Casa</em>',
      'hero.sub':      'Piatti della tradizione rumena e moldava preparati con ingredienti freschi e ricette di famiglia. Carne alla brace, stufati lenti e dolci fatti in casa.',
      'hero.cta.menu': 'Scopri il Menu',
      'hero.cta.map':  'Dove Siamo',

      // index.html — Feature strip
      'feat.grill.title': 'Carne alla Brace',
      'feat.grill.desc':  'Mici, costite e friptura grigliate al momento su brace di legna.',
      'feat.soup.title':  'Zuppe Tradizionali',
      'feat.soup.desc':   'Ciorba di trippa, bors di pollo e sarmale cotti a fuoco lento ogni giorno.',
      'feat.wine.title':  'Vini Rumeni',
      'feat.wine.desc':   'Selezione di vini DOC della Romania: Feteasca, Merlot e Cabernet Sauvignon.',

      // index.html — About strip
      'about.eyebrow': 'La Nostra Storia',
      'about.title':   'Un pezzo di<br>Romania a Padova',
      'about.body':    'Jarul Domnesc Official nasce dal desiderio di portare la vera cucina di casa rumena e moldava in Italia. Ogni piatto \u00e8 preparato seguendo ricette tramandate di generazione in generazione: dal mamalighe croccante ai sarmale invernali, dall\u2019ostropel profumato alla papanasi calda con panna acida. Menu fisso a pranzo, aperto tutti i giorni.',
      'about.cta':     'Vieni a Trovarci',

      // Footer
      'footer.tagline':  'Cucina rumena, moldava e italiana<br>Padova',
      'footer.where':    'Dove Siamo',
      'footer.contacts': 'Contatti',
      'footer.hours':    'Orari',
      'footer.schedule': 'Lun&ndash;Gio: 12:00&ndash;14:30<br>Ven: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sab&ndash;Dom: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      // Shared
      'skip.link':   'Salta al contenuto',
      'scroll.hint': 'Scorri',
    },

    en: {
      'nav.home':      'Home',
      'nav.menu':      'Menu',
      'nav.struttura': 'Gallery',
      'nav.eventi':    'Events',
      'nav.contatti':  'Contact',

      'hero.badge':    'Padua &middot; Romanian &amp; Moldovan Cuisine',
      'hero.title':    'Flavours<br><em>of Home</em>',
      'hero.sub':      'Romanian and Moldovan family recipes made with fresh ingredients. Grilled meats, slow-cooked stews and homemade desserts.',
      'hero.cta.menu': 'See the Menu',
      'hero.cta.map':  'Find Us',

      'feat.grill.title': 'Grilled Meats',
      'feat.grill.desc':  'Mici, ribs and friptura grilled over wood fire.',
      'feat.soup.title':  'Traditional Soups',
      'feat.soup.desc':   'Tripe ciorba, chicken bors and sarmale slow-cooked every day.',
      'feat.wine.title':  'Romanian Wines',
      'feat.wine.desc':   'DOC wines from Romania: Feteasca, Merlot and Cabernet Sauvignon.',

      'about.eyebrow': 'Our Story',
      'about.title':   'A piece of<br>Romania in Padua',
      'about.body':    'Jarul Domnesc Official was born from the desire to bring authentic Romanian and Moldovan home cooking to Italy. Every dish follows recipes passed down through generations: from crispy mamaliga to winter sarmale, fragrant ostropel to warm papanasi with sour cream. Fixed lunch menu, open every day.',
      'about.cta':     'Come Visit Us',

      'footer.tagline':  'Romanian, Moldovan and Italian cuisine<br>Padua',
      'footer.where':    'Find Us',
      'footer.contacts': 'Contact',
      'footer.hours':    'Opening Hours',
      'footer.schedule': 'Mon&ndash;Thu: 12:00&ndash;14:30<br>Fri: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sat&ndash;Sun: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      'skip.link':   'Skip to content',
      'scroll.hint': 'Scroll',
    },

    ro: {
      'nav.home':      'Acas\u0103',
      'nav.menu':      'Meniu',
      'nav.struttura': 'Galerie',
      'nav.eventi':    'Evenimente',
      'nav.contatti':  'Contact',

      'hero.badge':    'Padova &middot; Buc\u0103t\u0103rie Rom\u00e2n\u0103 &amp; Moldoveneasc\u0103',
      'hero.title':    'Gusturi<br><em>de Acas\u0103</em>',
      'hero.sub':      'Preparate tradi\u0163ionale rom\u00e2ne\u015fti \u015fi moldovene\u015fti din ingrediente proaspete \u015fi re\u0163ete de familie. Carne la gr\u0103tar, toc\u0103ni\u0163e \u015fi dulciuri de cas\u0103.',
      'hero.cta.menu': 'Vezi Meniul',
      'hero.cta.map':  'Unde Suntem',

      'feat.grill.title': 'Carne la Gr\u0103tar',
      'feat.grill.desc':  'Mici, coaste \u015fi friptur\u0103 la gr\u0103tar pe jar de lemn.',
      'feat.soup.title':  'Ciorbe Tradi\u0163ionale',
      'feat.soup.desc':   'Ciorb\u0103 de burt\u0103, bor\u015f de pui \u015fi sarmale fierte \u00een\u0103bu\u015fit \u00een fiecare zi.',
      'feat.wine.title':  'Vinuri Rom\u00e2ne\u015fti',
      'feat.wine.desc':   'Selec\u0163ie de vinuri DOC din Rom\u00e2nia: Feteasca, Merlot \u015fi Cabernet Sauvignon.',

      'about.eyebrow': 'Povestea Noastr\u0103',
      'about.title':   'O bucat\u0103 de<br>Rom\u00e2nia la Padova',
      'about.body':    'Jarul Domnesc Official s-a n\u0103scut din dorin\u0163a de a aduce buc\u0103t\u0103ria autentic\u0103 rom\u00e2neasc\u0103 \u015fi moldoveneasc\u0103 \u00een Italia. Fiecare preparat urmeaz\u0103 re\u0163ete transmise din genera\u0163ie \u00een genera\u0163ie: de la m\u0103m\u0103ligu\u0163a crocant\u0103 la sarmalele de iarn\u0103, de la ostropelul parfumat la papana\u015fii calzi cu sm\u00e2nt\u00e2n\u0103. Meniu fix la pr\u00e2nz, deschis \u00een fiecare zi.',
      'about.cta':     'Vino s\u0103 Ne Vizitezi',

      'footer.tagline':  'Buc\u0103t\u0103rie rom\u00e2n\u0103, moldoveneasc\u0103 \u015fi italian\u0103<br>Padova',
      'footer.where':    'Unde Suntem',
      'footer.contacts': 'Contact',
      'footer.hours':    'Program',
      'footer.schedule': 'Lun&ndash;Joi: 12:00&ndash;14:30<br>Vin: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>S\u00e2m&ndash;Dum: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      'skip.link':   'Salt la con\u0163inut',
      'scroll.hint': 'Deruleaz\u0103',
    },
  };

  // ─── Config ───────────────────────────────────────────────────────────────

  const SUPPORTED_LANGS = ['it', 'en', 'ro'];
  const DEFAULT_LANG    = 'it';
  const STORAGE_KEY     = 'jd_lang';

  // ─── Core engine ─────────────────────────────────────────────────────────

  /**
   * Applies translations to all [data-i18n] elements.
   * Uses innerHTML to support <br> and <em> in strings.
   * Falls back to DEFAULT_LANG if key is missing in chosen lang.
   */
  function applyLanguage(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key         = el.getAttribute('data-i18n');
      var translation = dict[key] !== undefined ? dict[key] : translations[DEFAULT_LANG][key];

      if (translation !== undefined) {
        el.innerHTML = translation;
      }
    });

    // Update <html lang> for accessibility and SEO
    document.documentElement.lang = lang;

    // Highlight active button
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  /**
   * Persists language choice and re-renders.
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) { return; }
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  /**
   * Resolves initial language: localStorage → browser lang → default.
   */
  function resolveInitialLang() {
    var stored  = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) { return stored; }

    var browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG;
  }

  // ─── Init ─────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang-btn'));
      });
    });

    applyLanguage(resolveInitialLang());
  });

  // Public API
  window.i18n = { setLanguage: setLanguage };

}());
