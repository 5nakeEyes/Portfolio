// Pobranie elementów
const links    = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');

// Funkcja do przełączania widoku
function showSection(targetId) {
  sections.forEach(sec => {
    sec.classList.toggle('active', sec.id === targetId);
  });
  links.forEach(link => {
    const href = link.getAttribute('href').slice(1);
    link.classList.toggle('active', href === targetId);
  });
}

// Obsługa kliknięć na linki
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    showSection(targetId);
    if (navList.classList.contains('open')) {
      navList.classList.remove('open');
    }
  });
});

// Menu mobilne
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Inicjalne pokazanie Home
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});