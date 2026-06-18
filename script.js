const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const backTop = document.getElementById('backTop');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 500);
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
