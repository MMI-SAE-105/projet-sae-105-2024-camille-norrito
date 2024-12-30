// Sélection des éléments nécessaires
const menu = document.getElementById('menu'); // Menu déroulant
const menuButton = document.querySelector('.header__menu-button'); // Bouton hamburger

// État du menu
let isMenuOpen = false;

// Gestionnaire pour bouton hamburger
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Inverse l'état du menu

    // Ajoute/retire la classe CSS pour ouvrir le menu
    menu.classList.toggle('menu--open', isMenuOpen);
    menuButton.classList.toggle('menu--open', isMenuOpen);

    // Met à jour les attributs d'accessibilité
    menu.setAttribute('aria-hidden', !isMenuOpen);
    menuButton.setAttribute('aria-expanded', isMenuOpen);
});

// Gestion de la fermeture en cliquant à l'extérieur du menu
document.addEventListener('click', (e) => {
    if (isMenuOpen && !menu.contains(e.target) && !menuButton.contains(e.target)) {
        isMenuOpen = false;
        menu.classList.remove('menu--open');
        menuButton.classList.remove('menu--open');
        menu.setAttribute('aria-hidden', 'true');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});



//carousel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -carousel.offsetWidth, // Défiler vers la gauche
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: carousel.offsetWidth, // Défiler vers la droite
        behavior: 'smooth'
    });
});
