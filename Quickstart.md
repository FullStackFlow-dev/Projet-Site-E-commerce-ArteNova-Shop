# Guide de Démarrage Rapide - ArtéNova Shop 

Ce guide vous permettra de démarrer avec ArtéNova Shop en moins de 5 minutes !

##  Objectif

Avoir votre site e-commerce ArtéNova Shop fonctionnel localement et déployé en ligne.

##  Prérequis Minimaux

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un compte GitHub (gratuit)
- Un éditeur de texte (VS Code recommandé)

##  Installation en 3 étapes

### Étape 1 : Récupérer le code (2 minutes)

**Option A - Via GitHub (recommandé)**

1. Allez sur le repository : `https://github.com/votre-username/artenova-shop`
2. Cliquez sur le bouton vert "Code"
3. Sélectionnez "Download ZIP"
4. Décompressez le fichier

**Option B - Via Git**

```bash
git clone https://github.com/votre-username/artenova-shop.git
cd artenova-shop
```

### Étape 2 : Tester localement (1 minute)

**Méthode Simple** - Double-cliquez sur `index.html`

**Méthode avec Live Server** (recommandé pour le développement)

1. Ouvrez VS Code
2. Installez l'extension "Live Server"
3. Clic droit sur `index.html` → "Open with Live Server"
4. Le site s'ouvre automatiquement dans votre navigateur !

### Étape 3 : Déployer en ligne (2 minutes)

**Sur Netlify** (le plus simple)

1. Allez sur [netlify.com](https://www.netlify.com)
2. Créez un compte (gratuit)
3. Glissez-déposez le dossier du projet dans Netlify
4. Votre site est en ligne ! 

**URL de votre site** : `https://votre-site-12345.netlify.app`

## ✅ Vérification

Votre site devrait afficher :
- ✅ Header avec logo "ArtéNova Shop"
- ✅ Section hero avec titre et boutons
- ✅ 4 produits vedettes
- ✅ Section à propos
- ✅ Services (livraison, retours, garantie)
- ✅ Compte à rebours
- ✅ Articles de blog
- ✅ Newsletter
- ✅ Footer complet

##  Première Personnalisation (5 minutes)

### Changer les couleurs

1. Ouvrez `styles.css`
2. Trouvez les variables CSS (lignes 15-25)
3. Modifiez les couleurs :

```css
:root {
    --primary-color: #2c3e50;      /* Votre couleur principale */
    --secondary-color: #e74c3c;    /* Votre couleur secondaire */
    --accent-color: #f39c12;       /* Votre couleur d'accent */
}
```

4. Rafraîchissez le navigateur

### Modifier les informations de contact

1. Ouvrez `index.html`
2. Recherchez (Ctrl+F) : `(+33) 1 23 45 67 89`
3. Remplacez par votre numéro
4. Recherchez : `support@artenovashop.com`
5. Remplacez par votre email
6. Sauvegardez et rafraîchissez

### Ajouter votre logo

1. Préparez votre logo (format PNG ou SVG)
2. Placez-le dans un dossier `images/`
3. Dans `index.html`, trouvez :
```html
<div class="logo">
    <h1>ArtéNova Shop</h1>
</div>
```
4. Remplacez par :
```html
<div class="logo">
    <img src="images/votre-logo.png" alt="ArtéNova Shop">
</div>
```

## 📱 Test du Responsive

Testez votre site sur différentes tailles :

1. Ouvrez les DevTools (F12)
2. Cliquez sur l'icône mobile/tablette
3. Testez ces résolutions :
   - 📱 iPhone SE : 375x667
   - 📱 iPhone 12 Pro : 390x844
   - 📱 iPad : 768x1024
   - 💻 Desktop : 1920x1080

Le menu devrait devenir un hamburger sur mobile !

##  Fonctionnalités à Tester

### Menu Hamburger (Mobile)
1. Réduisez la fenêtre ou passez en mode mobile
2. Cliquez sur le menu hamburger (☰)
3. Le menu doit s'ouvrir en slide
4. Cliquez sur un lien
5. Le menu doit se fermer

### Panier d'Achat
1. Cliquez sur "Ajouter au panier" sur un produit
2. Une notification doit apparaître
3. Le compteur du panier doit s'incrémenter
4. Le total doit être mis à jour

### Compte à Rebours
1. Vérifiez que les chiffres changent
2. Il compte jusqu'à la fin de la semaine

### Carrousel de Produits
1. Cliquez sur les flèches ← →
2. Les produits doivent défiler

### Newsletter
1. Entrez un email dans le champ
2. Cliquez sur "S'abonner"
3. Une notification de succès doit apparaître

## 📦 Structure des Fichiers

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

##  Problèmes Courants

### Le site ne s'affiche pas correctement
- ✅ Vérifiez que tous les fichiers sont au même niveau
- ✅ Vérifiez la console (F12) pour les erreurs
- ✅ Utilisez Live Server au lieu d'ouvrir directement le fichier

### Le menu hamburger ne fonctionne pas
- ✅ Vérifiez que `script.js` est bien chargé
- ✅ Vérifiez la console pour les erreurs JavaScript

### Les icônes ne s'affichent pas
- ✅ Vérifiez votre connexion internet
- ✅ Font Awesome est chargé depuis un CDN

### Le responsive ne fonctionne pas
- ✅ Vérifiez la balise meta viewport dans `index.html`
- ✅ Testez avec les DevTools du navigateur

## 📚 Prochaines Étapes

Maintenant que votre site fonctionne :

1. **Lisez le README complet** pour toutes les fonctionnalités
2. **Ajoutez vos produits** (voir section Personnalisation dans README)
3. **Connectez votre domaine** à Netlify
4. **Configurez Git** pour versionner vos modifications
5. **Ajoutez Google Analytics** pour suivre vos visiteurs

## 🎓 Ressources d'Apprentissage

Pour améliorer le site :

- **HTML** : [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML)
- **CSS** : [CSS-Tricks](https://css-tricks.com/)
- **JavaScript** : [JavaScript.info](https://javascript.info/)
- **Git** : [Git - la doc simple](https://rogerdudler.github.io/git-guide/index.fr.html)

##  Idées d'Amélioration

Fonctionnalités faciles à ajouter :

- [ ] Changer les couleurs du thème
- [ ] Ajouter de vrais produits
- [ ] Ajouter vos propres images
- [ ] Modifier les textes
- [ ] Ajouter une page "Contact"
- [ ] Créer une page "Mentions légales"
- [ ] Intégrer Google Maps
- [ ] Ajouter un chatbot

Fonctionnalités avancées :

- [ ] Backend avec Node.js
- [ ] Base de données (MongoDB, PostgreSQL)
- [ ] Authentification utilisateur
- [ ] Paiement en ligne (Stripe)
- [ ] Gestion des stocks
- [ ] Dashboard admin
- [ ] Multilingue

## 🆘 Besoin d'Aide ?

1. **Consultez le README** pour la documentation complète
2. **Vérifiez les issues** sur GitHub
3. **Créez une issue** si vous trouvez un bug
4. **Contactez-nous** : support@artenovashop.com

##  Félicitations !

Vous avez maintenant un site e-commerce professionnel et responsive !

Prochaine étape : Personnalisez-le à votre image et ajoutez vos propres produits.

---

**Temps total** : ~10 minutes  
**Niveau** : Débutant  
**Résultat** : Site e-commerce fonctionnel 

Bon développement ! 
