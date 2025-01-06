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

    // Ajoute ou retire la classe no-scroll au body
    if (isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

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

        // Retire la classe no-scroll lorsque le menu se ferme
        document.body.classList.remove('no-scroll');
    }
});





// carrousel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

if (prevButton && nextButton && carousel) {
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
}





// accordéons - autres projets
console.log("Script.js chargé avec succès");


document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project__item");

    projectItems.forEach((item) => {
        const logo = item.querySelector(".project__logo");

        if (logo) {
            logo.addEventListener("click", () => {
                console.log("Logo cliqué :", logo.alt); // Affiche dans la console le logo cliqué
                projectItems.forEach((el) => {
                    if (el !== item) el.classList.remove("active");
                });

                item.classList.toggle("active");
                console.log("Classe active ajoutée :", item.classList.contains("active"));
            });
        } else {
            console.error("Logo non trouvé pour cet élément :", item);
        }
    });
});


