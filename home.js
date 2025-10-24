function toggleMenu() {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.toggle-menu');

  menu.classList.toggle('active');
  toggle.classList.toggle('active');
}

const hamburger = document.getElementById('hamburger');
const mainMenu = document.getElementById('mainMenu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  mainMenu.classList.toggle('show');
});


document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mainMenu.contains(e.target) && mainMenu.classList.contains('show')) {
    mainMenu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});