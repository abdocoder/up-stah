const nav = document.querySelector('.navbar');
const toggle = document.querySelector('.menu-btn');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-visible', open);
  });

  nav.querySelectorAll('.menu-list a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      document.body.classList.remove('menu-visible');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener(
  'scroll',
  () => nav?.classList.toggle('scrolled', window.scrollY > 12),
  { passive: true }
);
