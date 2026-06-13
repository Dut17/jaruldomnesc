(function () {
  'use strict';

  // Hamburger mobile
  const nav = document.getElementById('myTopnav');
  const btn = document.getElementById('navHamburger');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Chiudi menu mobile al click su un link
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
    });
  });

  // Voce navbar attiva basata sull'URL corrente
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll to top
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}());
