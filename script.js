// Pobranie elementów
const links     = document.querySelectorAll('.nav-link');
const sections  = document.querySelectorAll('.section');
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');

// Funkcja pokazująca/ukrywająca sekcje
function showSection(targetId) {
  if (!sections.length) return;

  sections.forEach(sec => {
    sec.classList.toggle('active', sec.id === targetId);
  });

  // Podświetlenie aktywnego linku
  links.forEach(link => {
    const href = link.getAttribute('href');
    const hashIndex = href.indexOf('#');
    const linkHash = hashIndex > -1 ? href.slice(hashIndex + 1) : '';
    link.classList.toggle('active', linkHash === targetId);
  });
}

// Obsługa kliku – tylko dla czystych #hash
links.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      showSection(targetId);
      navList.classList.remove('open');
    }
  });
});

// Menu mobilne
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Po załadowaniu strony głównej wybieramy sekcję wg hash
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.slice(1) || 'home';
  showSection(hash);
});

// Jeśli użytkownik zmienia hash bez przeładowania (np. wraca w historii)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  showSection(hash);
});