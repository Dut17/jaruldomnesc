(function () {
  'use strict';

 const translations = {
  it: {
    'nav.home': 'Home', 'nav.menu': 'Menu', 'nav.struttura': 'Struttura',
    'nav.eventi': 'Eventi', 'nav.contatti': 'Contatti',
    'skip.link': 'Salta al contenuto', 'scroll.hint': 'Scorri',
    'footer.tagline': 'Cucina rumena, moldava e italiana<br>Padova',
    'footer.where': 'Dove Siamo', 'footer.contacts': 'Contatti', 'footer.hours': 'Orari',
    'footer.schedule': 'Lun&ndash;Gio: 12:00&ndash;14:30<br>Ven: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sab&ndash;Dom: 12:00&ndash;14:30 / 19:00&ndash;22:00',
    'menu.h1': 'Menu di Oggi',
    'menu.subtitle': 'Aggiornato ogni mattina &mdash; aperto tutti i giorni a pranzo',
    'menu.primo': 'Primo', 'menu.secondo': 'Secondo', 'menu.contorno': 'Contorno', 'menu.prezzo': 'Prezzo',
    'menu.weekendNotice': 'Oggi menu alla carta',
    'menu.loading': 'Caricamento menu in corso&hellip;',
    'menu.empty': 'Menu non ancora inserito. Riprova piu tardi.',
    'menu.error': 'Impossibile caricare il menu. Riprova piu tardi.',
    'menu.allergeni': 'Per informazioni sugli allergeni presenti nei nostri piatti, chiedi al personale di sala. Reg. UE 1169/2011.',
    'menu.contact': 'Per informazioni e prenotazioni: <a href="contatti.html" style="color:#b8962e;">contattaci</a>.',
    'hero.badge': 'Padova &middot; Cucina Rumena &amp; Moldava',
    'hero.title': 'Sapori<br><em>di Casa</em>',
    'hero.sub': 'Piatti della tradizione rumena e moldava preparati con ingredienti freschi e ricette di famiglia. Carne alla brace, stufati lenti e dolci fatti in casa.',
    'hero.cta.menu': 'Scopri il Menu', 'hero.cta.map': 'Dove Siamo',
    'feat.grill.title': 'Carne alla Brace', 'feat.grill.desc': 'Mici, costite e friptura grigliate al momento su brace di legna.',
    'feat.soup.title': 'Zuppe Tradizionali', 'feat.soup.desc': 'Ciorba di trippa, bors di pollo e sarmale cotti a fuoco lento ogni giorno.',
    'feat.wine.title': 'Vini Rumeni', 'feat.wine.desc': 'Selezione di vini DOC della Romania: Feteasca, Merlot e Cabernet Sauvignon.',
    'about.eyebrow': 'La Nostra Storia',
    'about.title': 'Un pezzo di<br>Romania a Padova',
    'about.subtitle': 'Un pezzo di Romania, Moldova e Italia nel cuore di Padova',
    'about.body': 'Il nostro ristorante nasce dall&rsquo;incontro di tre culture che amano stare a tavola: quella rumena, moldava e italiana. Abbiamo portato a Padova le ricette della tradizione, i sapori autentici di casa e la passione per la buona cucina, unendo ingredienti, profumi e storie che parlano di famiglia, amicizia e convivialita.',
    'about.body2': 'Ogni piatto racconta un viaggio tra tradizioni diverse ma accomunate dallo stesso valore: il piacere di condividere un buon pasto. Qui potrete assaporare il meglio della cucina rumena, moldava e italiana in un ambiente accogliente, dove ogni ospite è accolto come un amico.',
    'about.tagline': 'Benvenuti a tavola, dove tre tradizioni si incontrano nel cuore di Padova.',
    'about.cta': 'Vieni a Trovarci',
    'str.h1': 'La Nostra Struttura',
    'str.intro': 'Jarul Domnesc Official offre ambienti accoglienti e versatili, pensati sia per il pranzo di tutti i giorni che per occasioni speciali.',
    'str.sala1.title': 'Sala Principale', 'str.sala1.meta1': 'fino a [X] posti', 'str.sala1.meta2': 'con finestre',
    'str.sala1.desc': 'La sala principale del ristorante, luminosa e accogliente. Ideale per pranzi in famiglia, cene romantiche e tavolate tra amici.',
    'str.sala2.title': 'Sala Privata', 'str.sala2.meta1': 'fino a [X] posti', 'str.sala2.meta2': 'riservabile',
    'str.sala2.desc': 'Sala riservata ideale per piccoli gruppi, riunioni di lavoro o celebrazioni esclusive.',
    'str.sala3.title': 'Spazio Esterno', 'str.sala3.meta1': 'fino a [X] posti', 'str.sala3.meta2': 'stagionale',
    'str.sala3.desc': 'Area esterna disponibile nella bella stagione. Perfetta per aperitivi, cene estive e momenti di relax.',
    'str.cta.h2': 'Vuoi visitarci o prenotare uno spazio?',
    'str.cta.p': 'Contattaci per informazioni sulla disponibilita e per organizzare la tua visita.',
    'str.cta.btn': 'Contattaci ora',
    'ev.hero.h1': 'Eventi Privati', 'ev.hero.p': 'Battesimi, comunioni, compleanni, cene aziendali e molto altro',
    'ev.intro': 'Che sia un battesimo con tutta la famiglia o una cena aziendale, da Jarul Domnesc ogni tavolata ha il suo peso. Concordiamo menu, allestimento e orari &mdash; noi pensiamo ai dettagli, tu ti godi l&rsquo;occasione.',
    'ev.card1.h3': 'Battesimi', 'ev.card1.p': 'Un giorno indimenticabile per tutta la famiglia. Menu personalizzato, sala riservata e attenzione ad ogni dettaglio.',
    'ev.card2.h3': 'Comunioni &amp; Cresime', 'ev.card2.p': 'Celebra il grande giorno con un pranzo o una cena dedicata, in un ambiente caldo e accogliente.',
    'ev.card3.h3': 'Compleanni', 'ev.card3.p': 'Feste di compleanno per tutte le eta: dal dopocena tra amici alla tavolata in famiglia con torta inclusa.',
    'ev.card4.h3': 'Anniversari', 'ev.card4.p': 'Sorprendi la persona speciale con una cena romantica o un pranzo in compagnia delle persone piu care.',
    'ev.card5.h3': 'Cene Aziendali', 'ev.card5.p': 'Team building, cene di fine anno o pranzi di lavoro: ambienti discreti e menu adatti a ogni budget aziendale.',
    'ev.card6.h3': 'Feste Private', 'ev.card6.p': 'Qualsiasi altra occasione da festeggiare: lauree, promozioni, riunioni di famiglia. Contattaci e costruiamo insieme il tuo evento.',
    'ev.how.h2': 'Come organizziamo il tuo evento',
    'ev.step1.h4': 'Ci contatti', 'ev.step1.p': 'Chiamaci o scrivici indicando data, numero di persone e tipo di evento.',
    'ev.step2.h4': 'Definiamo i dettagli', 'ev.step2.p': 'Scegliamo insieme menu, allestimento e orari. Tutto su misura per te.',
    'ev.step3.h4': 'Confermiamo', 'ev.step3.p': 'Fissiamo la prenotazione con un piccolo acconto a garanzia della data.',
    'ev.step4.h4': 'Festeggia', 'ev.step4.p': 'Il giorno dell&rsquo;evento pensiamo a tutto noi. Tu goditi ogni momento.',
    'ev.cta.h2': 'Pronto a organizzare il tuo evento?',
    'ev.cta.p': 'Scrivici o chiamaci: ti diciamo subito disponibilita e costi, senza impegno.',
    'ev.cta.btn1': 'Richiedi informazioni', 'ev.cta.btn2': 'Chiamaci ora',
    'ct.hero.h1': 'Contatti', 'ct.h2': 'Vieni a Trovarci',
    'ct.addr.h3': 'Indirizzo', 'ct.phone.h3': 'Telefono', 'ct.email.h3': 'Email', 'ct.hours.h3': 'Orari di Apertura',
    'ct.hours.note': 'Per eventi privati e serate speciali, <a href="tel:+393398548172" style="color:#b8962e;">contattaci direttamente</a>.',
    'ct.days.mon': 'Lunedi', 'ct.days.tue': 'Martedi', 'ct.days.wed': 'Mercoledi',
    'ct.days.thu': 'Giovedi', 'ct.days.fri': 'Venerdi', 'ct.days.sat': 'Sabato', 'ct.days.sun': 'Domenica',
  },

  en: {
    'nav.home': 'Home', 'nav.menu': 'Menu', 'nav.struttura': 'Gallery',
    'nav.eventi': 'Events', 'nav.contatti': 'Contact',
    'skip.link': 'Skip to content', 'scroll.hint': 'Scroll',
    'footer.tagline': 'Romanian, Moldovan and Italian cuisine<br>Padua',
    'footer.where': 'Find Us', 'footer.contacts': 'Contact', 'footer.hours': 'Opening Hours',
    'footer.schedule': 'Mon&ndash;Thu: 12:00&ndash;14:30<br>Fri: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sat&ndash;Sun: 12:00&ndash;14:30 / 19:00&ndash;22:00',
    'menu.h1': "Today's Menu",
    'menu.subtitle': 'Updated every morning &mdash; open every day for lunch',
    'menu.primo': 'First course', 'menu.secondo': 'Main course', 'menu.contorno': 'Side dish', 'menu.prezzo': 'Price',
    'menu.weekendNotice': 'À la carte menu today',
    'menu.loading': 'Loading menu&hellip;',
    'menu.empty': 'Menu not yet available. Please check back later.',
    'menu.error': 'Unable to load the menu. Please try again later.',
    'menu.allergeni': 'For allergen information, please ask a member of staff. EU Reg. 1169/2011.',
    'menu.contact': 'For information and reservations: <a href="contatti.html" style="color:#b8962e;">contact us</a>.',
    'hero.badge': 'Padua &middot; Romanian &amp; Moldovan Cuisine',
    'hero.title': 'Flavours<br><em>of Home</em>',
    'hero.sub': 'Romanian and Moldovan family recipes made with fresh ingredients. Grilled meats, slow-cooked stews and homemade desserts.',
    'hero.cta.menu': 'See the Menu', 'hero.cta.map': 'Find Us',
    'feat.grill.title': 'Grilled Meats', 'feat.grill.desc': 'Mici, ribs and friptura grilled over wood fire.',
    'feat.soup.title': 'Traditional Soups', 'feat.soup.desc': 'Tripe ciorba, chicken bors and sarmale slow-cooked every day.',
    'feat.wine.title': 'Romanian Wines', 'feat.wine.desc': 'DOC wines from Romania: Feteasca, Merlot and Cabernet Sauvignon.',
    'about.eyebrow': 'Our Story',
    'about.title': 'A piece of<br>Romania in Padua',
    'about.subtitle': 'A piece of Romania, Moldova and Italy in the heart of Padua',
    'about.body': 'Our restaurant was born from the meeting of three cultures that love sharing a meal: Romanian, Moldovan and Italian. We brought to Padua the recipes of tradition, the authentic flavours of home and a passion for good food, blending ingredients, aromas and stories that speak of family, friendship and conviviality.',
    'about.body2': 'Every dish tells a journey through different traditions united by the same value: the pleasure of sharing a good meal. Here you can savour the best of Romanian, Moldovan and Italian cuisine in a welcoming environment, where every guest is treated like a friend.',
    'about.tagline': 'Welcome to the table, where three traditions meet in the heart of Padua.',
    'about.cta': 'Come Visit Us',
    'str.h1': 'Our Venue',
    'str.intro': 'Jarul Domnesc Official offers warm and versatile spaces, designed for everyday lunches as well as special occasions.',
    'str.sala1.title': 'Main Hall', 'str.sala1.meta1': 'up to [X] seats', 'str.sala1.meta2': 'with windows',
    'str.sala1.desc': 'The main dining room, bright and welcoming. Perfect for family lunches, romantic dinners and group gatherings.',
    'str.sala2.title': 'Private Room', 'str.sala2.meta1': 'up to [X] seats', 'str.sala2.meta2': 'bookable',
    'str.sala2.desc': 'A private room ideal for small groups, business meetings or exclusive celebrations.',
    'str.sala3.title': 'Outdoor Space', 'str.sala3.meta1': 'up to [X] seats', 'str.sala3.meta2': 'seasonal',
    'str.sala3.desc': 'Outdoor area available in the warm season. Perfect for aperitifs, summer dinners and relaxing moments.',
    'str.cta.h2': 'Want to visit or book a space?',
    'str.cta.p': 'Contact us for availability and to arrange your visit.',
    'str.cta.btn': 'Contact Us',
    'ev.hero.h1': 'Private Events', 'ev.hero.p': 'Christenings, communions, birthdays, corporate dinners and much more',
    'ev.intro': 'Whether it is a christening with the whole family or a company year-end dinner, at Jarul Domnesc every gathering matters. We agree on the menu, setup and timings &mdash; we handle the details so you can enjoy the occasion.',
    'ev.card1.h3': 'Christenings', 'ev.card1.p': 'An unforgettable day for the whole family. Custom menu, reserved room and attention to every detail.',
    'ev.card2.h3': 'Communions &amp; Confirmations', 'ev.card2.p': 'Celebrate the big day with a dedicated lunch or dinner in a warm, welcoming environment.',
    'ev.card3.h3': 'Birthdays', 'ev.card3.p': 'Birthday parties for all ages: from an evening out with friends to a family table with cake included.',
    'ev.card4.h3': 'Anniversaries', 'ev.card4.p': 'Surprise that special someone with a romantic dinner or a lunch with your closest people.',
    'ev.card5.h3': 'Corporate Dinners', 'ev.card5.p': 'Team building, end-of-year dinners or business lunches: discreet spaces and menus suited to any corporate budget.',
    'ev.card6.h3': 'Private Parties', 'ev.card6.p': 'Any other occasion worth celebrating: graduations, promotions, family reunions. Contact us and we will build your event together.',
    'ev.how.h2': 'How we organise your event',
    'ev.step1.h4': 'Get in touch', 'ev.step1.p': 'Call or write to us with the date, number of guests and type of event.',
    'ev.step2.h4': 'Define the details', 'ev.step2.p': 'We choose the menu, setup and timings together. Everything tailored to you.',
    'ev.step3.h4': 'Confirm', 'ev.step3.p': 'We lock in the booking with a small deposit to secure the date.',
    'ev.step4.h4': 'Celebrate', 'ev.step4.p': 'On the day of the event we handle everything. You just enjoy every moment.',
    'ev.cta.h2': 'Ready to plan your event?',
    'ev.cta.p': 'Write or call us: we will tell you availability and costs straight away, no commitment needed.',
    'ev.cta.btn1': 'Request information', 'ev.cta.btn2': 'Call us now',
    'ct.hero.h1': 'Contact', 'ct.h2': 'Come Find Us',
    'ct.addr.h3': 'Address', 'ct.phone.h3': 'Phone', 'ct.email.h3': 'Email', 'ct.hours.h3': 'Opening Hours',
    'ct.hours.note': 'For private events and special evenings, <a href="tel:+393398548172" style="color:#b8962e;">contact us directly</a>.',
    'ct.days.mon': 'Monday', 'ct.days.tue': 'Tuesday', 'ct.days.wed': 'Wednesday',
    'ct.days.thu': 'Thursday', 'ct.days.fri': 'Friday', 'ct.days.sat': 'Saturday', 'ct.days.sun': 'Sunday',
  },

  ro: {
    'nav.home': 'Acasă', 'nav.menu': 'Meniu', 'nav.struttura': 'Galerie',
    'nav.eventi': 'Evenimente', 'nav.contatti': 'Contact',
    'skip.link': 'Salt la conținut', 'scroll.hint': 'Derulează',
    'footer.tagline': 'Bucătărie română, moldovenească și italiană<br>Padova',
    'footer.where': 'Unde Suntem', 'footer.contacts': 'Contact', 'footer.hours': 'Program',
    'footer.schedule': 'Lun&ndash;Joi: 12:00&ndash;14:30<br>Vin: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sâm&ndash;Dum: 12:00&ndash;14:30 / 19:00&ndash;22:00',
    'menu.h1': 'Meniul de Azi',
    'menu.subtitle': 'Actualizat în fiecare dimineață &mdash; deschis în fiecare zi la prânz',
    'menu.primo': 'Fel întâi', 'menu.secondo': 'Fel principal', 'menu.contorno': 'Garnitură', 'menu.prezzo': 'Preț',
    'menu.weekendNotice': 'Meniu à la carte astăzi',
    'menu.loading': 'Se încarcă meniul&hellip;',
    'menu.empty': 'Meniul nu a fost încă introdus. Reveniți mai târziu.',
    'menu.error': 'Nu se poate încărca meniul. Încercați din nou mai târziu.',
    'menu.allergeni': 'Pentru informații despre alergeni, rugăm să întrebați personalul. Reg. UE 1169/2011.',
    'menu.contact': 'Pentru informații și rezervări: <a href="contatti.html" style="color:#b8962e;">contactați-ne</a>.',
    'hero.badge': 'Padova &middot; Bucătărie Română &amp; Moldovenească',
    'hero.title': 'Gusturi<br><em>de Acasă</em>',
    'hero.sub': 'Preparate tradiționale românești și moldovenești din ingrediente proaspete și rețete de familie. Carne la grătar, tocănițe și dulciuri de casă.',
    'hero.cta.menu': 'Vezi Meniul', 'hero.cta.map': 'Unde Suntem',
    'feat.grill.title': 'Carne la Grătar', 'feat.grill.desc': 'Mici, coaste și friptură la grătar pe jar de lemn.',
    'feat.soup.title': 'Ciorbe Tradiționale', 'feat.soup.desc': 'Ciorbă de burtă, borș de pui și sarmale fierte înăbușit în fiecare zi.',
    'feat.wine.title': 'Vinuri Românești', 'feat.wine.desc': 'Selecție de vinuri DOC din România: Feteasca, Merlot și Cabernet Sauvignon.',
    'about.eyebrow': 'Povestea Noastră',
    'about.title': 'O bucată de<br>România la Padova',
    'about.subtitle': 'O bucată din România, Moldova și Italia în inima Padovei',
    'about.body': 'Restaurantul nostru s-a născut din întâlnirea a trei culturi care iubesc să stea la masă: cea românească, moldovenească și italiană. Am adus la Padova rețetele tradiției, aromele autentice de acasă și pasiunea pentru bucătăria bună, îmbinând ingrediente, mirosuri și povești care vorbesc despre familie, prietenie și convivialitate.',
    'about.body2': 'Fiecare preparat spune o călătorie prin tradiții diferite, unite de aceeași valoare: plăcerea de a împărți o masă bună. Aici puteți savura ce e mai bun din bucătăria românească, moldovenească și italiană într-un ambient primitor, unde fiecare oaspete este primit ca un prieten.',
    'about.tagline': 'Bun venit la masă, unde trei tradiții se întâlnesc în inima Padovei.',
    'about.cta': 'Vino să Ne Vizitezi',
    'str.h1': 'Spațiile Noastre',
    'str.intro': 'Jarul Domnesc Official oferă spații primitoare și versatile, concepute pentru prânzul de zi cu zi cât și pentru ocazii speciale.',
    'str.sala1.title': 'Sala Principală', 'str.sala1.meta1': 'până la [X] locuri', 'str.sala1.meta2': 'cu ferestre',
    'str.sala1.desc': 'Sala principală a restaurantului, luminoasă și primitoare. Ideală pentru prânzuri în familie și mese cu prietenii.',
    'str.sala2.title': 'Sală Privată', 'str.sala2.meta1': 'până la [X] locuri', 'str.sala2.meta2': 'rezervabilă',
    'str.sala2.desc': 'Sală rezervată, ideală pentru grupuri mici, întâlniri de afaceri sau celebrări exclusive.',
    'str.sala3.title': 'Spațiu Exterior', 'str.sala3.meta1': 'până la [X] locuri', 'str.sala3.meta2': 'sezonier',
    'str.sala3.desc': 'Zonă exterioară disponibilă în sezonul cald. Perfectă pentru aperitive și cine de vară.',
    'str.cta.h2': 'Vrei să ne vizitezi sau să rezervi un spațiu?',
    'str.cta.p': 'Contactează-ne pentru informații despre disponibilitate.',
    'str.cta.btn': 'Contactează-ne',
    'ev.hero.h1': 'Evenimente Private', 'ev.hero.p': 'Botezuri, comuniuni, zile de naștere, cine de afaceri și multe altele',
    'ev.intro': 'Fie că e un botez cu toată familia sau o cină de sfârșit de an, la Jarul Domnesc fiecare masă contează. Stabilim meniul, decorul și orarul &mdash; noi ne ocupăm de detalii, tu te bucuri de ocazie.',
    'ev.card1.h3': 'Botezuri', 'ev.card1.p': 'O zi de neuitat pentru toată familia. Meniu personalizat, sală rezervată și atenție la fiecare detaliu.',
    'ev.card2.h3': 'Comuniuni &amp; Confirmări', 'ev.card2.p': 'Sărbătorește ziua cea mare cu un prânz sau o cină dedicată, într-un mediu cald și primitor.',
    'ev.card3.h3': 'Zile de Naștere', 'ev.card3.p': 'Petreceri de zi de naștere pentru toate vârstele: de la o seară cu prietenii la o masă în familie cu tort inclus.',
    'ev.card4.h3': 'Aniversări', 'ev.card4.p': 'Surprinde persoana specială cu o cină romantică sau un prânz alături de cei mai dragi.',
    'ev.card5.h3': 'Cine de Afaceri', 'ev.card5.p': 'Team building, cine de sfârșit de an sau prânzuri de lucru: spații discrete și meniuri potrivite oricărui buget.',
    'ev.card6.h3': 'Petreceri Private', 'ev.card6.p': 'Orice altă ocazie de sărbătorit: licențe, promovări, reîntruniri de familie. Contactează-ne și construim împreună evenimentul tău.',
    'ev.how.h2': 'Cum organizăm evenimentul tău',
    'ev.step1.h4': 'Ne contactezi', 'ev.step1.p': 'Sună-ne sau scrie-ne cu data, numărul de persoane și tipul de eveniment.',
    'ev.step2.h4': 'Definim detaliile', 'ev.step2.p': 'Alegem împreună meniul, decorul și orarul. Totul personalizat pentru tine.',
    'ev.step3.h4': 'Confirmăm', 'ev.step3.p': 'Stabilim rezervarea cu un mic avans pentru garantarea datei.',
    'ev.step4.h4': 'Sărbătorește', 'ev.step4.p': 'În ziua evenimentului ne ocupăm de tot. Tu bucură-te de fiecare moment.',
    'ev.cta.h2': 'Pregătit să organizezi evenimentul tău?',
    'ev.cta.p': 'Scrie-ne sau sună-ne: îți spunem imediat disponibilitatea și costurile, fără angajament.',
    'ev.cta.btn1': 'Solicită informații', 'ev.cta.btn2': 'Sună-ne acum',
    'ct.hero.h1': 'Contact', 'ct.h2': 'Vino să Ne Găsești',
    'ct.addr.h3': 'Adresă', 'ct.phone.h3': 'Telefon', 'ct.email.h3': 'Email', 'ct.hours.h3': 'Program de Funcționare',
    'ct.hours.note': 'Pentru evenimente private și seri speciale, <a href="tel:+393398548172" style="color:#b8962e;">contactați-ne direct</a>.',
    'ct.days.mon': 'Luni', 'ct.days.tue': 'Marți', 'ct.days.wed': 'Miercuri',
    'ct.days.thu': 'Joi', 'ct.days.fri': 'Vineri', 'ct.days.sat': 'Sâmbătă', 'ct.days.sun': 'Duminică',
  },
};
  const SUPPORTED_LANGS = ['it', 'en', 'ro'];
  const DEFAULT_LANG    = 'it';
  const STORAGE_KEY     = 'jd_lang';

  function applyLanguage(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var t   = dict[key] !== undefined ? dict[key] : translations[DEFAULT_LANG][key];
      if (t !== undefined) { el.innerHTML = t; }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) { return; }
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  function resolveInitialLang() {
    var stored  = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) { return stored; }
    var browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG;
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLanguage(btn.getAttribute('data-lang-btn')); });
  });
  applyLanguage(resolveInitialLang());

  window.i18n = {
    setLanguage: setLanguage,
    t: function (key) {
      var lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      var dict = translations[lang] || translations[DEFAULT_LANG];
      return dict[key] !== undefined ? dict[key] : (translations[DEFAULT_LANG][key] || key);
    },
  };

}());
