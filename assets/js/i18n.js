(function () {
  'use strict';

  const translations = {
    it: {
      // Navbar
      'nav.home':      'Home',
      'nav.menu':      'Menu',
      'nav.struttura': 'Struttura',
      'nav.eventi':    'Eventi',
      'nav.contatti':  'Contatti',

      // Shared
      'skip.link':   'Salta al contenuto',
      'scroll.hint': 'Scorri',

      // Footer
      'footer.tagline':  'Cucina rumena, moldava e italiana<br>Padova',
      'footer.where':    'Dove Siamo',
      'footer.contacts': 'Contatti',
      'footer.hours':    'Orari',
      'footer.schedule': 'Lun&ndash;Gio: 12:00&ndash;14:30<br>Ven: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sab&ndash;Dom: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      // menu.html
      'menu.h1':       'Menu di Oggi',
      'menu.subtitle': 'Aggiornato ogni mattina \u2014 aperto tutti i giorni a pranzo',
      'menu.primo':    'Primo',
      'menu.secondo':  'Secondo',
      'menu.contorno': 'Contorno',
      'menu.prezzo':   'Prezzo',
      'menu.loading':  'Caricamento menu in corso\u2026',
      'menu.empty':    'Menu non ancora inserito. Riprova pi\u00f9 tardi.',
      'menu.error':    'Impossibile caricare il menu. Riprova pi\u00f9 tardi.',
      'menu.allergeni':'Per informazioni sugli allergeni presenti nei nostri piatti, chiedi al personale di sala. Reg. UE 1169/2011.',
      'menu.contact':  'Per informazioni e prenotazioni: <a href="contatti.html" style="color:#b8962e;">contattaci</a>.',

      // index.html
      'hero.badge':        'Padova &middot; Cucina Rumena &amp; Moldava',
      'hero.title':        'Sapori<br><em>di Casa</em>',
      'hero.sub':          'Piatti della tradizione rumena e moldava preparati con ingredienti freschi e ricette di famiglia. Carne alla brace, stufati lenti e dolci fatti in casa.',
      'hero.cta.menu':     'Scopri il Menu',
      'hero.cta.map':      'Dove Siamo',
      'feat.grill.title':  'Carne alla Brace',
      'feat.grill.desc':   'Mici, costite e friptura grigliate al momento su brace di legna.',
      'feat.soup.title':   'Zuppe Tradizionali',
      'feat.soup.desc':    'Ciorba di trippa, bors di pollo e sarmale cotti a fuoco lento ogni giorno.',
      'feat.wine.title':   'Vini Rumeni',
      'feat.wine.desc':    'Selezione di vini DOC della Romania: Feteasca, Merlot e Cabernet Sauvignon.',
      'about.eyebrow':     'La Nostra Storia',
      'about.title':       'Un pezzo di<br>Romania a Padova',
      'about.subtitle':    'Un pezzo di Romania, Moldova e Italia nel cuore di Padova',
      'about.body':        'Il nostro ristorante nasce dall\u2019incontro di tre culture che amano stare a tavola: quella rumena, moldava e italiana. Abbiamo portato a Padova le ricette della tradizione, i sapori autentici di casa e la passione per la buona cucina, unendo ingredienti, profumi e storie che parlano di famiglia, amicizia e convivialit\u00e0.',
      'about.body2':       'Ogni piatto racconta un viaggio tra tradizioni diverse ma accomunate dallo stesso valore: il piacere di condividere un buon pasto. Qui potrete assaporare il meglio della cucina rumena, moldava e italiana in un ambiente accogliente, dove ogni ospite \u00e8 accolto come un amico.',
      'about.tagline':     'Benvenuti a tavola, dove tre tradizioni si incontrano nel cuore di Padova. \ud83c\uddf7\ud83c\uddf4\ud83c\uddf2\ud83c\udde9\ud83c\uddee\ud83c\uddf9\ud83c\udf77\u2728',
      'about.cta':         'Vieni a Trovarci',

      // struttura.html
      'str.h1':            'La Nostra Struttura',
      'str.intro':         'Jarul Domnesc Official offre ambienti accoglienti e versatili, pensati sia per il pranzo di tutti i giorni che per occasioni speciali. Ogni spazio \u00e8 curato nei dettagli per garantire comfort e un\u2019atmosfera autentica rumena.',
      'str.sala1.title':   'Sala Principale',
      'str.sala1.meta1':   'fino a [X] posti',
      'str.sala1.meta2':   'con finestre',
      'str.sala1.desc':    'La sala principale del ristorante, luminosa e accogliente. Ideale per pranzi in famiglia, cene romantiche e tavolate tra amici. Arredi caldi e atmosfera tipicamente rumena.',
      'str.sala2.title':   'Sala Privata',
      'str.sala2.meta1':   'fino a [X] posti',
      'str.sala2.meta2':   'riservabile',
      'str.sala2.desc':    'Sala riservata ideale per piccoli gruppi, riunioni di lavoro o celebrazioni esclusive. Pu\u00f2 essere allestita su misura in base all\u2019evento.',
      'str.sala3.title':   'Spazio Esterno',
      'str.sala3.meta1':   'fino a [X] posti',
      'str.sala3.meta2':   'stagionale',
      'str.sala3.desc':    'Area esterna disponibile nella bella stagione. Perfetta per aperitivi, cene estive e momenti di relax all\u2019aperto in un contesto tranquillo.',
      'str.cta.h2':        'Vuoi visitarci o prenotare uno spazio?',
      'str.cta.p':         'Contattaci per informazioni sulla disponibilit\u00e0 e per organizzare la tua visita.',
      'str.cta.btn':       'Contattaci ora',

      // eventi.html
      'ev.hero.h1':        'Eventi Privati',
      'ev.hero.p':         'Battesimi, comunioni, compleanni, cene aziendali e molto altro',
      'ev.intro':          'Che sia un battesimo con tutta la famiglia allargata o una cena aziendale di fine anno, da Jarul Domnesc ogni tavolata ha il suo peso. Concordiamo menu, allestimento e orari \u2014 noi pensiamo ai dettagli, tu ti godi l\u2019occasione.',
      'ev.card1.h3':       'Battesimi',
      'ev.card1.p':        'Un giorno indimenticabile per tutta la famiglia. Men\u00f9 personalizzato, sala riservata e attenzione ad ogni dettaglio.',
      'ev.card2.h3':       'Comunioni &amp; Cresime',
      'ev.card2.p':        'Celebra il grande giorno con un pranzo o una cena dedicata, in un ambiente caldo e accogliente.',
      'ev.card3.h3':       'Compleanni',
      'ev.card3.p':        'Feste di compleanno per tutte le et\u00e0: dal dopocena tra amici alla tavolata in famiglia con torta inclusa.',
      'ev.card4.h3':       'Anniversari',
      'ev.card4.p':        'Sorprendi la persona speciale con una cena romantica o un pranzo in compagnia delle persone pi\u00f9 care.',
      'ev.card5.h3':       'Cene Aziendali',
      'ev.card5.p':        'Team building, cene di fine anno o pranzi di lavoro: ambienti discreti e men\u00f9 adatti a ogni budget aziendale.',
      'ev.card6.h3':       'Feste Private',
      'ev.card6.p':        'Qualsiasi altra occasione da festeggiare: lauree, promozioni, riunioni di famiglia. Contattaci e costruiamo insieme il tuo evento.',
      'ev.how.h2':         'Come organizziamo il tuo evento',
      'ev.step1.h4':       'Ci contatti',
      'ev.step1.p':        'Chiamaci o scrivici indicando data, numero di persone e tipo di evento.',
      'ev.step2.h4':       'Definiamo i dettagli',
      'ev.step2.p':        'Scegliamo insieme men\u00f9, allestimento e orari. Tutto su misura per te.',
      'ev.step3.h4':       'Confermiamo',
      'ev.step3.p':        'Fissiamo la prenotazione con un piccolo acconto a garanzia della data.',
      'ev.step4.h4':       'Festeggia',
      'ev.step4.p':        'Il giorno dell\u2019evento pensiamo a tutto noi. Tu goditi ogni momento.',
      'ev.cta.h2':         'Pronto a organizzare il tuo evento?',
      'ev.cta.p':          'Scrivici o chiamaci: ti diciamo subito disponibilit\u00e0 e costi, senza impegno.',
      'ev.cta.btn1':       'Richiedi informazioni',
      'ev.cta.btn2':       'Chiamaci ora',

      // contatti.html
      'ct.hero.h1':        'Contatti',
      'ct.h2':             'Vieni a Trovarci',
      'ct.addr.h3':        'Indirizzo',
      'ct.phone.h3':       'Telefono',
      'ct.email.h3':       'Email',
      'ct.hours.h3':       'Orari di Apertura',
      'ct.hours.note':     'Per eventi privati e serate speciali, <a href="tel:+393398548172" style="color:#b8962e;">contattaci direttamente</a>.',
      'ct.days.mon':       'Luned\u00ec',
      'ct.days.tue':       'Marted\u00ec',
      'ct.days.wed':       'Mercoled\u00ec',
      'ct.days.thu':       'Gioved\u00ec',
      'ct.days.fri':       'Venerd\u00ec',
      'ct.days.sat':       'Sabato',
      'ct.days.sun':       'Domenica',
    },

    en: {
      'nav.home':      'Home',
      'nav.menu':      'Menu',
      'nav.struttura': 'Gallery',
      'nav.eventi':    'Events',
      'nav.contatti':  'Contact',

      'skip.link':   'Skip to content',
      'scroll.hint': 'Scroll',

      'footer.tagline':  'Romanian, Moldovan and Italian cuisine<br>Padua',
      'footer.where':    'Find Us',
      'footer.contacts': 'Contact',
      'footer.hours':    'Opening Hours',
      'footer.schedule': 'Mon&ndash;Thu: 12:00&ndash;14:30<br>Fri: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>Sat&ndash;Sun: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      // menu.html
      'menu.h1':       "Today's Menu",
      'menu.subtitle': 'Updated every morning \u2014 open every day for lunch',
      'menu.primo':    'First course',
      'menu.secondo':  'Main course',
      'menu.contorno': 'Side dish',
      'menu.prezzo':   'Price',
      'menu.loading':  'Loading menu\u2026',
      'menu.empty':    'Menu not yet available. Please check back later.',
      'menu.error':    'Unable to load the menu. Please try again later.',
      'menu.allergeni':'For allergen information, please ask a member of staff. EU Reg. 1169/2011.',
      'menu.contact':  'For information and reservations: <a href="contatti.html" style="color:#b8962e;">contact us</a>.',

      'hero.badge':        'Padua &middot; Romanian &amp; Moldovan Cuisine',
      'hero.title':        'Flavours<br><em>of Home</em>',
      'hero.sub':          'Romanian and Moldovan family recipes made with fresh ingredients. Grilled meats, slow-cooked stews and homemade desserts.',
      'hero.cta.menu':     'See the Menu',
      'hero.cta.map':      'Find Us',
      'feat.grill.title':  'Grilled Meats',
      'feat.grill.desc':   'Mici, ribs and friptura grilled over wood fire.',
      'feat.soup.title':   'Traditional Soups',
      'feat.soup.desc':    'Tripe ciorba, chicken bors and sarmale slow-cooked every day.',
      'feat.wine.title':   'Romanian Wines',
      'feat.wine.desc':    'DOC wines from Romania: Feteasca, Merlot and Cabernet Sauvignon.',
      'about.eyebrow':     'Our Story',
      'about.title':       'A piece of<br>Romania in Padua',
      'about.subtitle':    'A piece of Romania, Moldova and Italy in the heart of Padua',
      'about.body':        'Our restaurant was born from the meeting of three cultures that love sharing a meal: Romanian, Moldovan and Italian. We brought to Padua the recipes of tradition, the authentic flavours of home and a passion for good food, blending ingredients, aromas and stories that speak of family, friendship and conviviality.',
      'about.body2':       'Every dish tells a journey through different traditions united by the same value: the pleasure of sharing a good meal. Here you can savour the best of Romanian, Moldovan and Italian cuisine in a welcoming environment, where every guest is treated like a friend.',
      'about.tagline':     'Welcome to the table, where three traditions meet in the heart of Padua. \ud83c\uddf7\ud83c\uddf4\ud83c\uddf2\ud83c\udde9\ud83c\uddee\ud83c\uddf9\ud83c\udf77\u2728',
      'about.cta':         'Come Visit Us',

      'str.h1':            'Our Venue',
      'str.intro':         'Jarul Domnesc Official offers warm and versatile spaces, designed for everyday lunches as well as special occasions. Every room is carefully arranged to ensure comfort and an authentic Romanian atmosphere.',
      'str.sala1.title':   'Main Hall',
      'str.sala1.meta1':   'up to [X] seats',
      'str.sala1.meta2':   'with windows',
      'str.sala1.desc':    'The main dining room, bright and welcoming. Perfect for family lunches, romantic dinners and group gatherings. Warm furnishings and a typically Romanian atmosphere.',
      'str.sala2.title':   'Private Room',
      'str.sala2.meta1':   'up to [X] seats',
      'str.sala2.meta2':   'bookable',
      'str.sala2.desc':    'A private room ideal for small groups, business meetings or exclusive celebrations. Can be arranged to suit any occasion.',
      'str.sala3.title':   'Outdoor Space',
      'str.sala3.meta1':   'up to [X] seats',
      'str.sala3.meta2':   'seasonal',
      'str.sala3.desc':    'Outdoor area available in the warm season. Perfect for aperitifs, summer dinners and relaxing moments in a peaceful setting.',
      'str.cta.h2':        'Want to visit or book a space?',
      'str.cta.p':         'Contact us for availability and to arrange your visit.',
      'str.cta.btn':       'Contact Us',

      'ev.hero.h1':        'Private Events',
      'ev.hero.p':         'Christenings, communions, birthdays, corporate dinners and much more',
      'ev.intro':          'Whether it\u2019s a christening with the whole family or a company year-end dinner, at Jarul Domnesc every gathering matters. We agree on the menu, setup and timings\u2009\u2014\u2009we handle the details so you can enjoy the occasion.',
      'ev.card1.h3':       'Christenings',
      'ev.card1.p':        'An unforgettable day for the whole family. Custom menu, reserved room and attention to every detail.',
      'ev.card2.h3':       'Communions &amp; Confirmations',
      'ev.card2.p':        'Celebrate the big day with a dedicated lunch or dinner in a warm, welcoming environment.',
      'ev.card3.h3':       'Birthdays',
      'ev.card3.p':        'Birthday parties for all ages: from an evening out with friends to a family table with cake included.',
      'ev.card4.h3':       'Anniversaries',
      'ev.card4.p':        'Surprise that special someone with a romantic dinner or a lunch with your closest people.',
      'ev.card5.h3':       'Corporate Dinners',
      'ev.card5.p':        'Team building, end-of-year dinners or business lunches: discreet spaces and menus suited to any corporate budget.',
      'ev.card6.h3':       'Private Parties',
      'ev.card6.p':        'Any other occasion worth celebrating: graduations, promotions, family reunions. Contact us and we will build your event together.',
      'ev.how.h2':         'How we organise your event',
      'ev.step1.h4':       'Get in touch',
      'ev.step1.p':        'Call or write to us with the date, number of guests and type of event.',
      'ev.step2.h4':       'Define the details',
      'ev.step2.p':        'We choose the menu, setup and timings together. Everything tailored to you.',
      'ev.step3.h4':       'Confirm',
      'ev.step3.p':        'We lock in the booking with a small deposit to secure the date.',
      'ev.step4.h4':       'Celebrate',
      'ev.step4.p':        'On the day of the event we handle everything. You just enjoy every moment.',
      'ev.cta.h2':         'Ready to plan your event?',
      'ev.cta.p':          'Write or call us: we\u2019ll tell you availability and costs straight away, no commitment needed.',
      'ev.cta.btn1':       'Request information',
      'ev.cta.btn2':       'Call us now',

      'ct.hero.h1':        'Contact',
      'ct.h2':             'Come Find Us',
      'ct.addr.h3':        'Address',
      'ct.phone.h3':       'Phone',
      'ct.email.h3':       'Email',
      'ct.hours.h3':       'Opening Hours',
      'ct.hours.note':     'For private events and special evenings, <a href="tel:+393398548172" style="color:#b8962e;">contact us directly</a>.',
      'ct.days.mon':       'Monday',
      'ct.days.tue':       'Tuesday',
      'ct.days.wed':       'Wednesday',
      'ct.days.thu':       'Thursday',
      'ct.days.fri':       'Friday',
      'ct.days.sat':       'Saturday',
      'ct.days.sun':       'Sunday',
    },

    ro: {
      'nav.home':      'Acas\u0103',
      'nav.menu':      'Meniu',
      'nav.struttura': 'Galerie',
      'nav.eventi':    'Evenimente',
      'nav.contatti':  'Contact',

      'skip.link':   'Salt la con\u0163inut',
      'scroll.hint': 'Deruleaz\u0103',

      'footer.tagline':  'Buc\u0103t\u0103rie rom\u00e2n\u0103, moldoveneasc\u0103 \u015fi italian\u0103<br>Padova',
      'footer.where':    'Unde Suntem',
      'footer.contacts': 'Contact',
      'footer.hours':    'Program',
      'footer.schedule': 'Lun&ndash;Joi: 12:00&ndash;14:30<br>Vin: 12:00&ndash;14:30 / 19:00&ndash;22:00<br>S\u00e2m&ndash;Dum: 12:00&ndash;14:30 / 19:00&ndash;22:00',

      // menu.html
      'menu.h1':       'Meniul de Azi',
      'menu.subtitle': 'Actualizat \u00een fiecare diminea\u0163\u0103 \u2014 deschis \u00een fiecare zi la pr\u00e2nz',
      'menu.primo':    'Fel \u00eent\u00e2i',
      'menu.secondo':  'Fel principal',
      'menu.contorno': 'Garnitur\u0103',
      'menu.prezzo':   'Pre\u0163',
      'menu.loading':  'Se \u00eencarc\u0103 meniul\u2026',
      'menu.empty':    'Meniul nu a fost \u00eenc\u0103 introdus. Reveniti mai t\u00e2rziu.',
      'menu.error':    'Nu se poate \u00eenc\u0103rca meniul. \u00cencerca\u0163i din nou mai t\u00e2rziu.',
      'menu.allergeni':'Pentru informa\u0163ii despre alergeni, rug\u0103m s\u0103 \u00eentreba\u0163i personalul. Reg. UE 1169/2011.',
      'menu.contact':  'Pentru informa\u0163ii \u015fi rezerv\u0103ri: <a href="contatti.html" style="color:#b8962e;">contacta\u0163i-ne</a>.',

      'hero.badge':        'Padova &middot; Buc\u0103t\u0103rie Rom\u00e2n\u0103 &amp; Moldoveneasc\u0103',
      'hero.title':        'Gusturi<br><em>de Acas\u0103</em>',
      'hero.sub':          'Preparate tradi\u0163ionale rom\u00e2ne\u015fti \u015fi moldovene\u015fti din ingrediente proaspete \u015fi re\u0163ete de familie. Carne la gr\u0103tar, toc\u0103ni\u0163e \u015fi dulciuri de cas\u0103.',
      'hero.cta.menu':     'Vezi Meniul',
      'hero.cta.map':      'Unde Suntem',
      'feat.grill.title':  'Carne la Gr\u0103tar',
      'feat.grill.desc':   'Mici, coaste \u015fi friptur\u0103 la gr\u0103tar pe jar de lemn.',
      'feat.soup.title':   'Ciorbe Tradi\u0163ionale',
      'feat.soup.desc':    'Ciorb\u0103 de burt\u0103, bor\u015f de pui \u015fi sarmale fierte \u00een\u0103bu\u015fit \u00een fiecare zi.',
      'feat.wine.title':   'Vinuri Rom\u00e2ne\u015fti',
      'feat.wine.desc':    'Selec\u0163ie de vinuri DOC din Rom\u00e2nia: Feteasca, Merlot \u015fi Cabernet Sauvignon.',
      'about.eyebrow':     'Povestea Noastr\u0103',
      'about.title':       'O bucat\u0103 de<br>Rom\u00e2nia la Padova',
      'about.subtitle':    'O buc\u0103t\u0103 din Rom\u00e2nia, Moldova \u015fi Italia \u00een inima Padovei',
      'about.body':        'Restaurantul nostru s-a n\u0103scut din \u00eent\u00e2lnirea a trei culturi care iubesc s\u0103 stea la mas\u0103: cea rom\u00e2neasc\u0103, moldoveneasc\u0103 \u015fi italian\u0103. Am adus la Padova re\u0163etele tradi\u0163iei, aromele autentice de acas\u0103 \u015fi pasiunea pentru buc\u0103t\u0103ria bun\u0103, \u00eembin\u00e2nd ingrediente, mirosuri \u015fi pove\u015fti care vorbesc despre familie, prietenie \u015fi convivialitate.',
      'about.body2':       'Fiecare preparat spune o c\u0103l\u0103torie prin tradi\u0163ii diferite, unite de aceea\u015fi valoare: pl\u0103cerea de a \u00emp\u0103r\u0163i o mas\u0103 bun\u0103. Aici pute\u0163i savura ce e mai bun din buc\u0103t\u0103ria rom\u00e2neasc\u0103, moldoveneasc\u0103 \u015fi italian\u0103 \u00eetr-un ambient primitor, unde fiecare oaspete este primit ca un prieten.',
      'about.tagline':     'Bun venit la mas\u0103, unde trei tradi\u0163ii se \u00eent\u00e2lnesc \u00een inima Padovei. \ud83c\uddf7\ud83c\uddf4\ud83c\uddf2\ud83c\udde9\ud83c\uddee\ud83c\uddf9\ud83c\udf77\u2728',
      'about.cta':         'Vino s\u0103 Ne Vizitezi',

      'str.h1':            'Spa\u0163iile Noastre',
      'str.intro':         'Jarul Domnesc Official ofer\u0103 spa\u0163ii primitoare \u015fi versatile, concepute at\u00e2t pentru pr\u00e2nzul de zi cu zi, c\u00e2t \u015fi pentru ocazii speciale. Fiecare spa\u0163iu este \u00eengrijit \u00een detalii pentru a garanta confort \u015fi o atmosfer\u0103 autentic rom\u00e2neasc\u0103.',
      'str.sala1.title':   'Sala Principal\u0103',
      'str.sala1.meta1':   'p\u00e2n\u0103 la [X] locuri',
      'str.sala1.meta2':   'cu ferestre',
      'str.sala1.desc':    'Sala principal\u0103 a restaurantului, luminoas\u0103 \u015fi primitoare. Ideal\u0103 pentru pr\u00e2nzuri \u00een familie, cine romantice \u015fi mese cu prietenii. Mobilier cald \u015fi atmosfer\u0103 tipic rom\u00e2neasc\u0103.',
      'str.sala2.title':   'Sal\u0103 Privat\u0103',
      'str.sala2.meta1':   'p\u00e2n\u0103 la [X] locuri',
      'str.sala2.meta2':   'rezervabil\u0103',
      'str.sala2.desc':    'Sal\u0103 rezervat\u0103, ideal\u0103 pentru grupuri mici, \u00eent\u00e2lniri de afaceri sau celebr\u0103ri exclusive. Poate fi amenajat\u0103 personalizat \u00een func\u0163ie de eveniment.',
      'str.sala3.title':   'Spa\u0163iu Exterior',
      'str.sala3.meta1':   'p\u00e2n\u0103 la [X] locuri',
      'str.sala3.meta2':   'sezonier',
      'str.sala3.desc':    'Zon\u0103 exterioar\u0103 disponibil\u0103 \u00een sezonul cald. Perfect\u0103 pentru aperitive, cine de var\u0103 \u015fi momente de relaxare \u00een aer liber \u00eentr-un cadru lini\u015ftit.',
      'str.cta.h2':        'Vrei s\u0103 ne vizitezi sau s\u0103 rezervi un spa\u0163iu?',
      'str.cta.p':         'Contacteaz\u0103-ne pentru informa\u0163ii despre disponibilitate \u015fi pentru a-\u0163i organiza vizita.',
      'str.cta.btn':       'Contacteaz\u0103-ne',

      'ev.hero.h1':        'Evenimente Private',
      'ev.hero.p':         'Botezuri, comuniuni, zile de na\u015ftere, cine de afaceri \u015fi multe altele',
      'ev.intro':          'Fie c\u0103 e un botez cu toat\u0103 familia sau o cin\u0103 de sfar\u015fit de an cu colegii, la Jarul Domnesc fiecare mas\u0103 conteaz\u0103. Stabilim meniul, decorul \u015fi orarul \u2014 noi ne ocup\u0103m de detalii, tu te bucuri de ocazie.',
      'ev.card1.h3':       'Botezuri',
      'ev.card1.p':        'O zi de neuitat pentru toat\u0103 familia. Meniu personalizat, sal\u0103 rezervat\u0103 \u015fi aten\u0163ie la fiecare detaliu.',
      'ev.card2.h3':       'Comuniuni &amp; Confirm\u0103ri',
      'ev.card2.p':        'S\u0103rb\u0103tore\u015fte ziua cea mare cu un pr\u00e2nz sau o cin\u0103 dedicat\u0103, \u00eentr-un mediu cald \u015fi primitor.',
      'ev.card3.h3':       'Zile de Na\u015ftere',
      'ev.card3.p':        'Petreceri de zi de na\u015ftere pentru toate v\u00e2rstele: de la o sear\u0103 cu prietenii la o mas\u0103 \u00een familie cu tort inclus.',
      'ev.card4.h3':       'Aniversari',
      'ev.card4.p':        'Surprinde persoana special\u0103 cu o cin\u0103 romantic\u0103 sau un pr\u00e2nz al\u0103turi de cei mai dragi.',
      'ev.card5.h3':       'Cine de Afaceri',
      'ev.card5.p':        'Team building, cine de sf\u00e2r\u015fit de an sau pr\u00e2nzuri de lucru: spa\u0163ii discrete \u015fi meniuri potrivite oric\u0103rui buget.',
      'ev.card6.h3':       'Petreceri Private',
      'ev.card6.p':        'Orice alt\u0103 ocazie de s\u0103rb\u0103torit: licen\u0163e, promov\u0103ri, re\u00eentruniri de familie. Contacteaz\u0103-ne \u015fi construim \u00eempreun\u0103 evenimentul t\u0103u.',
      'ev.how.h2':         'Cum organiz\u0103m evenimentul t\u0103u',
      'ev.step1.h4':       'Ne contactezi',
      'ev.step1.p':        'Sun\u0103-ne sau scrie-ne cu data, num\u0103rul de persoane \u015fi tipul de eveniment.',
      'ev.step2.h4':       'Definim detaliile',
      'ev.step2.p':        'Alegem \u00eempreun\u0103 meniul, decorul \u015fi orarul. Totul personalizat pentru tine.',
      'ev.step3.h4':       'Confirm\u0103m',
      'ev.step3.p':        'Stabilim rezervarea cu un mic avans pentru garantarea datei.',
      'ev.step4.h4':       'S\u0103rb\u0103tore\u015fte',
      'ev.step4.p':        '\u00cen ziua evenimentului ne ocup\u0103m de tot. Tu bucur\u0103-te de fiecare moment.',
      'ev.cta.h2':         'Preg\u0103tit s\u0103 organizezi evenimentul t\u0103u?',
      'ev.cta.p':          'Scrie-ne sau sun\u0103-ne: \u00ee\u0163i spunem imediat disponibilitatea \u015fi costurile, f\u0103r\u0103 angajament.',
      'ev.cta.btn1':       'Solicit\u0103 informa\u0163ii',
      'ev.cta.btn2':       'Sun\u0103-ne acum',

      'ct.hero.h1':        'Contact',
      'ct.h2':             'Vino s\u0103 Ne G\u0103se\u015fti',
      'ct.addr.h3':        'Adres\u0103',
      'ct.phone.h3':       'Telefon',
      'ct.email.h3':       'Email',
      'ct.hours.h3':       'Program de Func\u0163ionare',
      'ct.hours.note':     'Pentru evenimente private \u015fi seri speciale, <a href="tel:+393398548172" style="color:#b8962e;">contacta\u0163i-ne direct</a>.',
      'ct.days.mon':       'Luni',
      'ct.days.tue':       'Mar\u0163i',
      'ct.days.wed':       'Miercuri',
      'ct.days.thu':       'Joi',
      'ct.days.fri':       'Vineri',
      'ct.days.sat':       'S\u00e2mb\u0103t\u0103',
      'ct.days.sun':       'Duminic\u0103',
    },
  };

  const SUPPORTED_LANGS = ['it', 'en', 'ro'];
  const DEFAULT_LANG    = 'it';
  const STORAGE_KEY     = 'jd_lang';

  function applyLanguage(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key         = el.getAttribute('data-i18n');
      var translation = dict[key] !== undefined ? dict[key] : translations[DEFAULT_LANG][key];
      if (translation !== undefined) { el.innerHTML = translation; }
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

  // defer guarantees DOM is ready — no DOMContentLoaded wrapper needed
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
