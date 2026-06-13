// Cookie consent banner — centralizzato per tutto il sito
(function () {
  var COOKIE_KEY = 'jarul_cookie_ok';

  function setCookieConsent() {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    document.cookie = COOKIE_KEY + '=1; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }

  function getCookieConsent() {
    return document.cookie.split(';').some(function (c) {
      return c.trim().startsWith(COOKIE_KEY + '=');
    });
  }

  function injectBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'alert');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML =
      '<span>Questo sito utilizza solo cookie tecnici necessari al funzionamento (Google Fonts, Google Maps). ' +
      'Nessun cookie di profilazione o tracciamento. ' +
      '<a href="privacy.html">Informativa Privacy</a>.</span>' +
      '<button id="cookie-accept" aria-label="Accetta e chiudi banner cookie">OK, ho capito</button>';

    var style = document.createElement('style');
    style.textContent =
      '#cookie-banner{position:fixed;bottom:0;left:0;right:0;background:#1c1714;color:#f5f0e8;' +
      'padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;' +
      'gap:1rem;z-index:9999;font-family:Inter,sans-serif;font-size:.85rem;flex-wrap:wrap;' +
      'box-shadow:0 -2px 12px rgba(0,0,0,.3);}' +
      '#cookie-banner a{color:#b8962e;text-decoration:underline;}' +
      '#cookie-accept{background:#bd2336;color:#fff;border:none;padding:.5rem 1.2rem;' +
      'border-radius:6px;cursor:pointer;font-family:Inter,sans-serif;font-size:.85rem;' +
      'font-weight:600;white-space:nowrap;flex-shrink:0;}' +
      '#cookie-accept:hover{background:#a01f2d;}' +
      '@media(max-width:600px){#cookie-banner{flex-direction:column;align-items:flex-start;}}';

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setCookieConsent();
      banner.remove();
    });
  }

  // Aspetta che il DOM sia pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (!getCookieConsent()) injectBanner();
    });
  } else {
    if (!getCookieConsent()) injectBanner();
  }
}());
