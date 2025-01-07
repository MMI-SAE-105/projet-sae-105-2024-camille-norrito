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
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project__item");

    projectItems.forEach((item) => {
        const logo = item.querySelector(".project__logo");

        if (logo) {
            // Gestion du clic sur le logo
            logo.addEventListener("click", (e) => {
                e.stopPropagation(); // Empêche la propagation du clic vers l'accordéon
                const link = item.getAttribute("data-link"); // Récupère l'URL du lien
                if (link) {
                    window.open(link, "_blank"); // Ouvre le site dans un nouvel onglet
                } else {
                    console.error("Lien introuvable pour cet élément :", item);
                }
            });

            // Gestion du clic sur l'accordéon
            item.addEventListener("click", () => {
                console.log("Accordéon cliqué :", item); // Debugging dans la console
                projectItems.forEach((el) => {
                    if (el !== item) el.classList.remove("active");
                });
                item.classList.toggle("active");
            });
        } else {
            console.error("Logo non trouvé pour cet élément :", item);
        }
    });
});


// Animation du vinyle
const vinyle = document.getElementById('vinyle');
const audio = document.getElementById('audio');


let isPlaying = false;


vinyle.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play()
        vinyle.style.animationPlayState = 'running';
        isPlaying = true;
    } else {
        audio.pause();
        vinyle.style.animationPlayState = 'paused';
        isPlaying = false;
    }
});


audio.addEventListener('ended', () => {
    vinyle.style.animationPlayState = 'paused';
    isPlaying = false;
});

