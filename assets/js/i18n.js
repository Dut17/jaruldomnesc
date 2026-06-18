(function () {
  'use strict';

  // ─── Translation dictionary ───────────────────────────────────────────────

  const translations = {
    it: {
      // Navbar
      'nav.home':       'Home',
      'nav.menu':       'Menu',
      'nav.struttura':  'Struttura',
      'nav.eventi':     'Eventi',
      'nav.contatti':   'Contatti',

      // index.html — Hero
      'hero.badge':     'Padova · Cucina Rumena & Moldava',
      'hero.title':     'Sapori<br><em>di Casa</em>',
      'hero.sub':       'Piatti della tradizione rumena e moldava preparati con ingredienti freschi e ricette di famiglia. Carne alla brace, stufati lenti e dolci fatti in casa.',
      'hero.cta.menu':  'Scopri il Menu',
      'hero.cta.map':   'Dove Siamo',

      // index.html — Feature strip
      'feat.grill.title': 'Carne alla Brace',
      'feat.grill.desc':  'Mici, costite e friptura grigliate al momento su brace di legna.',
      'feat.soup.title':  'Zuppe Tradizionali',
      'feat.soup.desc':   'Ciorba di trippa, bors di pollo e sarmale cotti a fuoco lento ogni giorno.',
      'feat.wine.title':  'Vini Rumeni',
      'feat.wine.desc':   'Selezione di vini DOC della Romania: Feteasca, Merlot e Cabernet Sauvignon.',

      // index.html — About strip
      'about.eyebrow':  'La Nostra Storia',
      'about.title':    'Un pezzo di<br>Romania a Padova',
      'about.body':     'Jarul Domnesc Official nasce dal desiderio di portare la vera cucina di casa rumena e moldava in Italia. Ogni piatto è preparato seguendo ricette tramandate di generazione in generazione: dal mamalighe croccante ai sarmale invernali, dall\'ostropel profumato alla papanasi calda con panna acida. Menu fisso a pranzo, aperto tutti i giorni.',
      'about.cta':      'Vieni a Trovarci',

      // Footer
      'footer.tagline':  'Cucina rumena, moldava e italiana<br>Padova',
      'footer.where':    'Dove Siamo',
      'footer.contacts': 'Contatti',
      'footer.hours':    'Orari',
      'footer.schedule': 'Lun&ndash;Gio: 12:00&ndash;14:30<br>Ven: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sab&ndash;Dom: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      // Skip link
      'skip.link': 'Salta al contenuto',

      // Scroll hint
      'scroll.hint': 'Scorri',
    },

    en: {
      'nav.home':       'Home',
      'nav.menu':       'Menu',
      'nav.struttura':  'Gallery',
      'nav.eventi':     'Events',
      'nav.contatti':   'Contact',

      'hero.badge':     'Padua · Romanian & Moldovan Cuisine',
      'hero.title':     'Flavours<br><em>of Home</em>',
      'hero.sub':       'Romanian and Moldovan family recipes made with fresh ingredients. Grilled meats, slow-cooked stews and homemade desserts.',
      'hero.cta.menu':  'See the Menu',
      'hero.cta.map':   'Find Us',

      'feat.grill.title': 'Grilled Meats',
      'feat.grill.desc':  'Mici, ribs and friptura grilled over wood fire.',
      'feat.soup.title':  'Traditional Soups',
      'feat.soup.desc':   'Tripe ciorba, chicken bors and sarmale slow-cooked every day.',
      'feat.wine.title':  'Romanian Wines',
      'feat.wine.desc':   'DOC wines from Romania: Feteasca, Merlot and Cabernet Sauvignon.',

      'about.eyebrow':  'Our Story',
      'about.title':    'A piece of<br>Romania in Padua',
      'about.body':     'Jarul Domnesc Official was born from the desire to bring authentic Romanian and Moldovan home cooking to Italy. Every dish follows recipes passed down through generations: from crispy mamaliga to winter sarmale, fragrant ostropel to warm papanasi with sour cream. Fixed lunch menu, open every day.',
      'about.cta':      'Come Visit Us',

      'footer.tagline':  'Romanian, Moldovan and Italian cuisine<br>Padua',
      'footer.where':    'Find Us',
      'footer.contacts': 'Contact',
      'footer.hours':    'Opening Hours',
      'footer.schedule': 'Mon&ndash;Thu: 12:00&ndash;14:30<br>Fri: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sat&ndash;Sun: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      'skip.link': 'Skip to content',
      'scroll.hint': 'Scroll',
    },

    ro: {
      'nav.home':       'Acasă',
      'nav.menu':       'Meniu',
      'nav.struttura':  'Galerie',
      'nav.eventi':     'Evenimente',
      'nav.contatti':   'Contact',

      'hero.badge':     'Padova · Bucătărie Română & Moldoveneascā',
      'hero.title':     'Gusturi<br><em>de Acasă</em>',
      'hero.sub':       'Preparate tradiționale românești și moldovenești din ingrediente proaspete și rețete de familie. Carne la grătar, tocănițe și dulciuri de casă.',
      'hero.cta.menu':  'Vezi Meniul',
      'hero.cta.map':   'Unde Suntem',

      'feat.grill.title': 'Carne la Grătar',
      'feat.grill.desc':  'Mici, coaste și friptură la grătar pe jar de lemn.',
      'feat.soup.title':  'Ciorbe Tradiționale',
      'feat.soup.desc':   'Ciorbă de burtā, borș de pui și sarmale fierte înăbușit în fiecare zi.',
      'feat.wine.title':  'Vinuri Românești',
      'feat.wine.desc':   'Selecție de vinuri DOC din România: Feteasca, Merlot și Cabernet Sauvignon.',

      'about.eyebrow':  'Povestea Noastră',
      'about.title':    'O bucată de<br>România la Padova',
      'about.body':     'Jarul Domnesc Official s-a născut din dorința de a aduce bucătăria autentică românească și moldovenească în Italia. Fiecare preparat urmează rețete transmise din generație în generație: de la mămăliguța crocantă la sarmalele de iarnă, de la ostropelul parfumat la papanașii calzi cu smântână. Meniu fix la prânz, deschis în fiecare zi.',
      'about.cta':      'Vino să Ne Vizitezi',

      'footer.tagline':  'Bucătărie română, moldovenească și italiană<br>Padova',
      'footer.where':    'Unde Suntem',
      'footer.contacts': 'Contact',
      'footer.hours':    'Program',
      'footer.schedule': 'Lun&ndash;Joi: 12:00&ndash;14:30<br>Vin: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sâm&ndash;Dum: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      'skip.link': 'Salt la conținut',
      'scroll.hint': 'Derulează',
    },
  };

  // ─── Supported languages ─────────────────────────────────────────────────

  const SUPPORTED_LANGS = ['it', 'en', 'ro'];
  const DEFAULT_LANG    = 'it';
  const STORAGE_KEY     = 'jd_lang';

  // ─── Core engine ─────────────────────────────────────────────────────────

  /**
   * Applies the given language to all [data-i18n] elements in the DOM.
   * Uses innerHTML to support <br> and <em> in translation strings.
   * Falls back to DEFAULT_LANG if key is missing.
   */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key        = el.getAttribute('data-i18n');
      const translation = dict[key] || translations[DEFAULT_LANG][key];

      if (translation !== undefined) {
        el.innerHTML = translation;
      }
    });

    // Update <html lang=""> for screen readers and SEO
    document.documentElement.lang = lang;

    // Mark active button
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  /**
   * Persists the chosen language and re-renders the page.
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  /**
   * Reads stored preference, falls back to browser language, then default.
   */
  function resolveInitialLang() {
    const stored  = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG;
  }

  // ─── Init ─────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    // Wire up language buttons
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang-btn'));
      });
    });

    // Apply on load
    applyLanguage(resolveInitialLang());
  });

  // Expose setLanguage for external use (e.g. cookie banner redirect)
  window.i18n = { setLanguage: setLanguage };

}());
