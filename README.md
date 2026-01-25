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

## 🎯 À propos

ArtéNova Shop est un site e-commerce professionnel conçu pour présenter et vendre des produits artisanaux. Le site est entièrement responsive et optimisé pour tous les appareils (desktop, tablette, mobile).

### Caractéristiques principales :
- Design moderne et attractif
- Navigation intuitive avec menu hamburger sur mobile
- Système de panier d'achat fonctionnel
- Carrousel de produits
- Compte à rebours pour les offres
- Section blog
- Newsletter
- Animations fluides

## ✨ Fonctionnalités

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

## 🛠️ Technologies utilisées

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
│
├── index.html          # Page principale
├── styles.css          # Feuille de styles
├── script.js           # Scripts JavaScript
├── README.md           # Documentation (ce fichier)
├── .gitignore         # Fichiers à ignorer par Git
│
├── images/            # Dossier pour les images (à créer)
│   ├── products/      # Images des produits
│   ├── blog/          # Images du blog
│   └── icons/         # Icônes personnalisées
│
└── assets/            # Ressources additionnelles (à créer)
    ├── fonts/         # Polices personnalisées
    └── videos/        # Vidéos (si nécessaire)
```

### Description des fichiers principaux :

- **index.html** : Structure HTML complète du site avec toutes les sections
- **styles.css** : Tous les styles CSS avec commentaires détaillés
- **script.js** : Logique JavaScript pour l'interactivité
- **README.md** : Documentation du projet

## 🚀 Déploiement

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

## 🎨 Personnalisation

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
        <p class="price">Prix€</p>
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

## 🔧 Configuration Git

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

## 📝 TODO / Améliorations futures

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

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**ArtéNova Shop**
- Website: [artenovashop.com](https://artenovashop.com) (à configurer)
- Email: support@artenovashop.com
- GitHub: [@votre-username](https://github.com/votre-username)

## 🙏 Remerciements

- Font Awesome pour les icônes
- Inspiration du design basée sur des sites e-commerce modernes
- Communauté open source

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !

## 📞 Support

Pour toute question ou problème :
- Ouvrez une [issue](https://github.com/votre-username/artenova-shop/issues)
- Envoyez un email à support@artenovashop.com

---

Fait avec ❤️ pour ArtéNova Shop
