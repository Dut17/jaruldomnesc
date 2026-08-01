// Cookie consent banner — centralizzato per tutto il sito
(function () {
  var COOKIE_KEY = 'jarul_cookie_ok';
  var MAPS_KEY = 'jarul_maps_ok';

  function setConsent(key, value) {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    document.cookie = key + '=' + value + '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }

  function getConsent(key) {
    return document.cookie.split(';').some(function (c) {
      return c.trim() === key + '=1';
    });
  }

  function loadMapsIfConsented() {
    if (!getConsent(MAPS_KEY)) return;
    document.querySelectorAll('[data-maps-src]').forEach(function (el) {
      if (!el.src) el.src = el.getAttribute('data-maps-src');
    });
  }

  function injectBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'alert');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML =
      '<span>Questo sito utilizza cookie tecnici necessari al funzionamento. ' +
      'Google Maps viene caricato solo se acconsenti, poiché trasmette dati (IP, posizione approssimativa) a Google. ' +
      '<a href="privacy.html">Informativa Privacy</a>.</span>' +
      '<div class="cookie-btns">' +
      '<button id="cookie-reject" type="button">Rifiuta</button>' +
      '<button id="cookie-accept" type="button">Accetta</button>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#cookie-banner{position:fixed;bottom:0;left:0;right:0;background:#1c1714;color:#f5f0e8;' +
      'padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;' +
      'gap:1rem;z-index:9999;font-family:Inter,sans-serif;font-size:.85rem;flex-wrap:wrap;' +
      'box-shadow:0 -2px 12px rgba(0,0,0,.3);}' +
      '#cookie-banner a{color:#b8962e;text-decoration:underline;}' +
      '.cookie-btns{display:flex;gap:.5rem;flex-shrink:0;}' +
      '#cookie-accept,#cookie-reject{border:none;padding:.5rem 1.2rem;border-radius:6px;cursor:pointer;' +
      'font-family:Inter,sans-serif;font-size:.85rem;font-weight:600;white-space:nowrap;}' +
      '#cookie-accept{background:#bd2336;color:#fff;}' +
      '#cookie-accept:hover{background:#a01f2d;}' +
      '#cookie-reject{background:transparent;color:#f5f0e8;border:1px solid #f5f0e8;}' +
      '#cookie-reject:hover{background:rgba(255,255,255,.1);}' +
      '@media(max-width:600px){#cookie-banner{flex-direction:column;align-items:flex-start;}}';

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setConsent(COOKIE_KEY, 1);
      setConsent(MAPS_KEY, 1);
      loadMapsIfConsented();
      banner.remove();
    });

    document.getElementById('cookie-reject').addEventListener('click', function () {
      setConsent(COOKIE_KEY, 1);
      setConsent(MAPS_KEY, 0);
      banner.remove();
    });
  }

  function init() {
    loadMapsIfConsented();
    if (!getConsent(COOKIE_KEY)) injectBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
