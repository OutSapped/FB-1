document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.body;

  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  document.body.appendChild(overlay);

  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
  });

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    });
  });
});
