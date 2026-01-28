# ArtéNova Shop 🛍️

Site e-commerce moderne et responsive pour produits artisanaux de qualité.

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Personnalisation](#personnalisation)
- [Contribution](#contribution)
- [Licence](#licence)

## A propos

ArtéNova Shop est une boutique e-commerce conçue comme une vitrine moderne pour des créations artistiques et de mode, alliant esthétique et performance. Elle propose une expérience utilisateur fluide et professionnelle, avec une structure technique pensée pour la scalabilité et la maintenance. Plus qu'un simple site de vente, c'est un projet entrepreneurial et créatif qui sert de laboratoire de développement : chaque nouvelle fonctionnalité, qu'il s'agisse d'une module de paiement, d'une optimisation UX ou d'une gestion des stocks, contribue à batir une plateforme robuste, évolutive et cohérente, reflétant une identité numérique forte. Le site est entièrement responsive et optimisé pour tous les appareils (desktop, tablette, mobile).

### Caractéristiques principales :
- Design moderne et attractif
- Navigation intuitive avec menu hamburger sur mobile
- Système de panier d'achat fonctionnel
- Carrousel de produits
- Compte à rebours pour les offres
- Section blog
- Newsletter
- Animations fluides

##  Fonctionnalités

### Pour les visiteurs :
- ✅ Parcourir les produits vedettes
- ✅ Ajouter des articles au panier
- ✅ Consulter les informations de contact
- ✅ S'abonner à la newsletter
- ✅ Lire les articles de blog
- ✅ Navigation fluide entre les sections

### Fonctionnalités techniques :
- ✅ Design 100% responsive
- ✅ Menu hamburger pour mobile
- ✅ Animations au scroll
- ✅ Compte à rebours dynamique
- ✅ Système de notifications
- ✅ Optimisation SEO
- ✅ Performance optimisée

##  Technologies utilisées

Ce projet utilise des technologies web standard :

- **HTML5** - Structure du site
- **CSS3** - Styles et animations
  - Variables CSS
  - Flexbox & Grid
  - Media queries pour le responsive
  - Animations et transitions
- **JavaScript (Vanilla)** - Interactivité
  - Gestion du DOM
  - Event listeners
  - LocalStorage (pour extension future)
  - Animations dynamiques

### Bibliothèques externes :
- **Font Awesome 6.4.0** - Icônes

## 📦 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code recommandé)
- Git (pour le clonage et le versioning)

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/artenova-shop.git
cd artenova-shop
```

2. **Ouvrir le projet**
```bash
# Avec VS Code
code .

# Ou ouvrez simplement index.html dans votre navigateur
```

3. **Lancer le projet localement**

Option A - Ouvrir directement :
- Double-cliquez sur `index.html`

Option B - Avec Live Server (recommandé) :
- Installez l'extension "Live Server" dans VS Code
- Clic droit sur `index.html` → "Open with Live Server"

Option C - Avec Python :
```bash
# Python 3
python -m http.server 8000

# Puis ouvrez http://localhost:8000 dans votre navigateur
```

## 📁 Structure du projet

```
 artenova-shop/
artenova-shop/
│
├── 📁 assets/                    # Toutes les ressources du site
│   │
│   ├── 📁 images/               # Images du site
│   │   ├── 📁 products/         # Images des produits
│   │   │   ├── adidas-camps.jpg
│   │   │   ├── air-force-one.jpg
│   │   │   ├── chemise-plissee.jpg
│   │   │   ├── bijoux-artisanaux.jpg
│   │   │   ├── ceramique.jpg
│   │   │   └── savons-naturels.jpg
│   │   │
│   │   ├── 📁 hero/
|   |   |    ├── hero-banner.jpg           # Image principale de la bannière
|   |   |    ├── hero-bg-pattern.svg       # Motif de fond stylisé
|   |   |    ├── hero-text.svg             # Texte vectorisé ("Nouvelle collection")
|   |   |    ├── hero-cta-button.png       # Visuel du bouton "Acheter maintenant"
|   |   |    ├── hero-mobile.webp          # Version mobile optimisée
|   |   |    ├── hero-accessories.jpg      # Image secondaire (sacs, chaussures)
|   |   |    └── hero-overlay.png          # Effet graphique en superposition
│   │   │
│   │   ├── 📁 blog/             # Images pour le blog
│   │   │   ├── article-1.jpg
│   │   │   └── article-2.jpg
│   │   │
│   │   ├── 📁 icons/            # Icônes personnalisées
│   │   │   └── favicon.png
│   │   │
│   │   └── logo.png             # Logo principal
│   │
│   ├── 📁 styles/               # Fichiers CSS modulaires
│   │   ├── variables.css        # Variables CSS (couleurs, espacements)
│   │   ├── reset.css            # Reset CSS
│   │   ├── main.css             # Styles généraux
│   │   ├── header.css           # Styles du header
│   │   ├── footer.css           # Styles du footer
│   │   ├── hero.css             # Section hero
│   │   ├── products.css         # Section produits
│   │   ├── services.css         # Section services
│   │   ├── blog.css             # Section blog
│   │   ├── newsletter.css       # Newsletter
│   │   └── responsive.css       # Media queries
│   │
│   └── 📁 scripts/              # Fichiers JavaScript modulaires
│       ├── main.js              # Script principal
│       ├── cart.js              # Gestion du panier
│       ├── menu.js              # Menu hamburger
│       ├── carousel.js          # Carrousel produits
│       ├── countdown.js         # Compte à rebours
│       └── newsletter.js        # Formulaire newsletter
│
├── 📁 pages/                    # Pages additionnelles
│   ├── products.html            # Page liste produits
│   ├── product-detail.html      # Page détail produit
│   ├── cart.html                # Page panier
│   ├── checkout.html            # Page paiement
│   ├── about.html               # Page à propos
│   ├── contact.html             # Page contact
│   └── blog.html                # Page blog
│
├── 📄 index.html                # Page d'accueil
│
├── 📚 Documentation
│   ├── README.md                # Documentation principale
│   ├── QUICKSTART.md            # Guide démarrage rapide
│   ├── DEPLOYMENT.md            # Guide déploiement
│   ├── CONTRIBUTING.md          # Guide contribution
│   └── CHANGELOG.md             # Historique versions
│
├── ⚙️ Configuration
│   ├── .gitignore               # Fichiers Git à ignorer
│   ├── package.json             # Configuration npm
│   ├── netlify.toml             # Config Netlify
│   ├── vercel.json              # Config Vercel
│   └── LICENSE                  # Licence MIT
│
└── 📁 docs/                     # Documentation additionnelle (optionnel)
    ├── screenshots/             # Captures d'écran
    └── guides/   
```

### Docs/screenshots

Ce dossier contient les captures d'ecran utilisées pour illustrer la documentation du projet.

Elles servent à :
- Présenter l'interface utilisteur et les fonctionnalités principales.
- Expliquer visuellement certaines étapes d'installation ou de configuration.
- Fournir des exemples concrets pour faciliter la compréhension des utilisateurs et des contributeurs.

> Les fichies doivents etre  nommés de manière claire et cohérente (ex. `feature-login.png`, `setup-guide-01.png`) afin de garantir une bonne organisation et une maintenance simplifiée.

### Description des fichiers principaux :

- **index.html** : Structure HTML complète du site avec toutes les sections
- **styles.css** : Tous les styles CSS avec commentaires détaillés
- **script.js** : Logique JavaScript pour l'interactivité
- **README.md** : Documentation du projet

##  Déploiement

### Déploiement sur Netlify

1. **Via l'interface Netlify :**
   - Créez un compte sur [Netlify](https://www.netlify.com)
   - Cliquez sur "Add new site" → "Import an existing project"
   - Connectez votre repository GitHub
   - Netlify détectera automatiquement les paramètres
   - Cliquez sur "Deploy site"

2. **Via Netlify CLI :**
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer
netlify deploy --prod
```

### Déploiement sur Vercel

1. **Via l'interface Vercel :**
   - Créez un compte sur [Vercel](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Cliquez sur "Deploy"

2. **Via Vercel CLI :**
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Déploiement sur GitHub Pages

1. **Configuration :**
   - Allez dans Settings → Pages
   - Sélectionnez la branche "main"
   - Sélectionnez le dossier "/ (root)"
   - Cliquez sur "Save"

2. **Votre site sera disponible à :**
```
https://votre-username.github.io/artenova-shop
```

##  Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #2c3e50;      /* Couleur principale */
    --secondary-color: #e74c3c;    /* Couleur secondaire */
    --accent-color: #f39c12;       /* Couleur d'accent */
    /* ... autres couleurs */
}
```

### Ajouter vos produits

Dans `index.html`, dupliquez cette structure dans la section produits :

```html
<div class="product-card">
    <div class="product-image">
        <i class="fas fa-votre-icone product-icon"></i>
        <!-- Ou utilisez une vraie image -->
        <!-- <img src="images/produit.jpg" alt="Nom du produit"> -->
    </div>
    <div class="product-info">
        <h3>Nom du produit</h3>
        <div class="rating">
            <!-- Étoiles de notation -->
        </div>
        <p class="price">Prix-FCFA</p>
        <button class="btn-add-cart">
            <i class="fas fa-shopping-cart"></i> Ajouter au panier
        </button>
    </div>
</div>
```

### Modifier les informations de contact

Recherchez et remplacez dans `index.html` :
- `(+33) 1 23 45 67 89` par votre numéro
- `support@artenovashop.com` par votre email
- Horaires d'ouverture

### Ajouter de vraies images

1. Créez un dossier `images/`
2. Ajoutez vos images
3. Remplacez les icônes par :

```html
<img src="images/votre-image.jpg" alt="Description">
```

##  Configuration Git

### Initialiser Git (si pas encore fait)

```bash
git init
git add .
git commit -m "Initial commit - ArtéNova Shop"
```

### Créer un repository sur GitHub

1. Allez sur GitHub et créez un nouveau repository "artenova-shop"
2. Connectez votre repository local :

```bash
git remote add origin https://github.com/votre-username/artenova-shop.git
git branch -M main
git push -u origin main
```

### Commandes Git utiles

```bash
# Vérifier le statut
git status

# Ajouter des modifications
git add .

# Faire un commit
git commit -m "Description de vos changements"

# Pousser vers GitHub
git push

# Créer une nouvelle branche
git checkout -b nom-de-la-branche

# Revenir à la branche principale
git checkout main
```

##  TODO / Améliorations futures

- [ ] Ajouter un système de filtrage des produits
- [ ] Implémenter une recherche fonctionnelle
- [ ] Créer une page produit détaillée
- [ ] Ajouter un système d'authentification
- [ ] Intégrer un système de paiement (Stripe, PayPal)
- [ ] Créer une page de checkout
- [ ] Ajouter un backend (Node.js, PHP, etc.)
- [ ] Base de données pour les produits
- [ ] Système de gestion des commandes
- [ ] Interface d'administration
- [ ] Multilingue (FR/EN)
- [ ] Mode sombre

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

##  Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**FullStackFlow-dev**
- Website: [artenovashop.com](https://artenovashop.com) (à configurer)
- Email: merphy97@gmail.com
- GitHub: [FullStackFlow-dev](https://github.com/FullStackFlow-dev)

## 🙏 Remerciements

- Font Awesome pour les icônes
- Inspiration du design basée sur des sites e-commerce modernes
- Communauté open source

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !

## 📞 Support

Pour toute question ou problème :
- Ouvrez une [issue](https://github.com/FullStackFlow.dev/artenova-shop/issues
- Envoyez un email à merphy97@gmail.com

- https://fullstackflow-dev.github.io/Projet-Site-E-commerce-ArteNova-Shop/

---

Fait avec ❤️ pour ArtéNova Shop
