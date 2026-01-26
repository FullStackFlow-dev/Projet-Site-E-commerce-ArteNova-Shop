// ========================================
// GESTION DU MENU HAMBURGER
// ========================================

/**
 * Fonction pour gérer l'ouverture/fermeture du menu mobile
 * Ajoute/retire la classe 'active' pour afficher/masquer le menu
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    // Bascule la classe 'active' sur le bouton hamburger pour l'animation
    hamburger.classList.toggle('active');
    // Bascule la classe 'active' sur le menu pour l'afficher/masquer
    navMenu.classList.toggle('active');
});

/**
 * Ferme le menu mobile lorsqu'on clique sur un lien
 * Améliore l'expérience utilisateur sur mobile
 */
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/**
 * Ferme le menu mobile si on clique en dehors
 * Permet de fermer le menu en cliquant sur le reste de la page
 */
document.addEventListener('click', (e) => {
    // Vérifie si le clic est en dehors du menu et du bouton hamburger
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// GESTION DU CARROUSEL DE PRODUITS
// ========================================

/**
 * Système de navigation pour le carrousel de produits
 * Permet de faire défiler les produits avec les boutons précédent/suivant
 */
const productsGrid = document.getElementById('productsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Variable pour suivre la position actuelle du défilement
let scrollPosition = 0;

/**
 * Fonction pour faire défiler le carrousel vers la gauche
 */
prevBtn.addEventListener('click', () => {
    // Calcul de la largeur d'une carte produit + marge
    const cardWidth = productsGrid.querySelector('.product-card').offsetWidth + 32;
    scrollPosition = Math.max(0, scrollPosition - cardWidth);
    productsGrid.scrollTo({
        left: scrollPosition,
        behavior: 'smooth' // Animation fluide
    });
});

/**
 * Fonction pour faire défiler le carrousel vers la droite
 */
nextBtn.addEventListener('click', () => {
    const cardWidth = productsGrid.querySelector('.product-card').offsetWidth + 32;
    const maxScroll = productsGrid.scrollWidth - productsGrid.clientWidth;
    scrollPosition = Math.min(maxScroll, scrollPosition + cardWidth);
    productsGrid.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

/**
 * Met à jour la position de défilement lors du défilement manuel
 * Permet de synchroniser la position avec les boutons
 */
productsGrid.addEventListener('scroll', () => {
    scrollPosition = productsGrid.scrollLeft;
});

// ========================================
// GESTION DU PANIER
// ========================================

/**
 * Système de gestion du panier d'achat
 * Stocke les articles ajoutés et met à jour l'affichage
 */
let cart = {
    items: [],
    total: 0
};

/**
 * Fonction pour ajouter un produit au panier
 * @param {string} productName - Nom du produit
 * @param {number} price - Prix du produit
 */
function addToCart(productName, price) {
    // Ajoute l'article au tableau du panier
    cart.items.push({
        name: productName,
        price: price
    });
    
    // Met à jour le total
    cart.total += price;
    
    // Met à jour l'affichage du panier
    updateCartDisplay();
    
    // Affiche une notification
    showNotification(`${productName} ajouté au panier !`);
}

/**
 * Met à jour l'affichage du compteur de panier
 */
function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const cartBtn = document.querySelector('.cart-btn');
    
    // Met à jour le nombre d'articles
    cartCount.textContent = cart.items.length;
    
    // Met à jour le total avec 2 décimales
    const totalText = cart.total.toFixed(2);
    cartBtn.innerHTML = `
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">${cart.items.length}</span> Articles - (${totalText}€)
    `;
}

/**
 * Ajoute des écouteurs d'événements sur tous les boutons "Ajouter au panier"
 */
const addToCartButtons = document.querySelectorAll('.btn-add-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Récupère les informations du produit depuis la carte parente
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const priceText = productCard.querySelector('.price').textContent;
        // Extrait le nombre du texte du prix (enlève le symbole €)
        const price = parseFloat(priceText.replace('€', '').trim());
        
        // Ajoute au panier
        addToCart(productName, price);
    });
});

// ========================================
// SYSTÈME DE NOTIFICATIONS
// ========================================

/**
 * Affiche une notification temporaire à l'écran
 * @param {string} message - Message à afficher
 */
function showNotification(message) {
    // Crée l'élément de notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style de la notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Ajoute la notification au document
    document.body.appendChild(notification);
    
    // Retire la notification après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Ajoute les animations CSS pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// COMPTE À REBOURS
// ========================================

/**
 * Gère le compte à rebours pour les offres de la semaine
 * Calcule et affiche le temps restant jusqu'à la fin de la semaine
 */
function updateCountdown() {
    // Obtient la date et l'heure actuelles
    const now = new Date();
    
    // Calcule la fin de la semaine (dimanche à minuit)
    const endOfWeek = new Date(now);
    endOfWeek.setDate(now.getDate() + (7 - now.getDay())); // Prochain dimanche
    endOfWeek.setHours(23, 59, 59, 999); // À minuit
    
    // Calcule la différence en millisecondes
    const timeLeft = endOfWeek - now;
    
    // Convertit en jours, heures, minutes et secondes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Formate avec un zéro devant si nécessaire (01, 02, etc.)
    const formatNumber = (num) => num.toString().padStart(2, '0');
    
    // Met à jour l'affichage
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
}

// Met à jour le compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);
// Initialise le compte à rebours immédiatement
updateCountdown();

// ========================================
// GESTION DU FORMULAIRE NEWSLETTER
// ========================================

/**
 * Gère la soumission du formulaire de newsletter
 * Empêche le rechargement de la page et affiche une confirmation
 */
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();
    
    // Récupère la valeur de l'email
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Affiche une notification de succès
    showNotification(`Merci pour votre inscription avec l'email : ${email}`);
    
    // Réinitialise le formulaire
    emailInput.value = '';
});

// ========================================
// ANIMATION AU DÉFILEMENT
// ========================================

/**
 * Ajoute des animations lors du défilement de la page
 * Les éléments apparaissent progressivement lorsqu'ils entrent dans le viewport
 */
function animateOnScroll() {
    // Sélectionne tous les éléments à animer
    const elements = document.querySelectorAll('.product-card, .service-card, .blog-card');
    
    // Parcourt chaque élément
    elements.forEach((element) => {
        // Obtient la position de l'élément par rapport au viewport
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Si l'élément est visible dans le viewport
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Style initial pour les éléments avant animation
document.querySelectorAll('.product-card, .service-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Écoute l'événement de défilement
window.addEventListener('scroll', animateOnScroll);
// Lance l'animation au chargement de la page
animateOnScroll();

// ========================================
// DÉFILEMENT FLUIDE
// ========================================

/**
 * Gère le défilement fluide pour les liens d'ancrage
 * Améliore la navigation dans la page
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        // Ne fait rien pour les liens vides (#)
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Défile vers l'élément cible avec animation
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// NAVBAR STICKY AVEC EFFET
// ========================================

/**
 * Ajoute un effet d'ombre à la navbar lors du défilement
 * Améliore la visibilité de la navigation
 */
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollY = window.scrollY;
});

// ========================================
// GESTION DU CHARGEMENT DE LA PAGE
// ========================================

/**
 * Actions à exécuter une fois que le DOM est complètement chargé
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('ArtéNova Shop chargé avec succès !');
    
    // Ajoute une classe pour les animations d'entrée
    document.body.classList.add('loaded');
});

// ========================================
// GESTION DES IMAGES (LAZY LOADING)
// ========================================

/**
 * Lazy loading pour les images (si vous ajoutez de vraies images)
 * Améliore les performances en chargeant les images seulement quand nécessaire
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Charge l'image seulement quand elle est visible
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    // Observer toutes les images avec data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// ANALYTICS ET TRACKING (OPTIONNEL)
// ========================================

/**
 * Fonction pour tracker les clics sur les produits
 * Peut être utilisé pour Google Analytics ou autres outils d'analyse
 */
function trackProductClick(productName) {
    console.log(`Produit consulté : ${productName}`);
    // Ici, vous pouvez ajouter du code pour Google Analytics
    // Par exemple : gtag('event', 'product_click', { product_name: productName });
}

// Ajoute le tracking sur les cartes de produits
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        trackProductClick(productName);
    });
});
