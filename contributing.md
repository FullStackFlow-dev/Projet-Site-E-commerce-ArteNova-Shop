# Guide de Contribution - ArtéNova Shop 
Merci de votre intérêt pour contribuer à ArtéNova Shop ! 

## Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Signaler un bug](#signaler-un-bug)
- [Proposer une fonctionnalité](#proposer-une-fonctionnalité)
- [Process de Pull Request](#process-de-pull-request)
- [Style de code](#style-de-code)
- [Structure des commits](#structure-des-commits)

## Code de conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite. Soyez respectueux, inclusif et professionnel dans toutes vos interactions.

## Comment contribuer

Il existe plusieurs façons de contribuer au projet :

1. **Signaler des bugs** - Si vous trouvez un bug, créez une issue
2. **Proposer des fonctionnalités** - Vous avez une idée ? Partagez-la !
3. **Améliorer la documentation** - Corrections, clarifications, traductions
4. **Soumettre du code** - Corrections de bugs, nouvelles fonctionnalités
5. **Réviser les Pull Requests** - Aidez à examiner les contributions des autres

## Signaler un bug

Avant de créer une issue :

1. **Vérifiez** que le bug n'a pas déjà été signalé
2. **Utilisez** la dernière version du code
3. **Collectez** les informations suivantes :
   - Description claire du problème
   - Étapes pour reproduire le bug
   - Comportement attendu vs comportement observé
   - Captures d'écran si pertinent
   - Environnement (navigateur, OS, version)

### Template d'issue pour un bug

```markdown
**Description du bug**
Une description claire du problème.

**Reproduction**
Étapes pour reproduire :
1. Aller sur '...'
2. Cliquer sur '...'
3. Descendre jusqu'à '...'
4. Voir l'erreur

**Comportement attendu**
Description de ce qui devrait se passer.

**Captures d'écran**
Si applicable, ajoutez des captures d'écran.

**Environnement**
- Navigateur: [ex. Chrome 120]
- OS: [ex. Windows 11]
- Version du projet: [ex. 1.0.0]

**Informations supplémentaires**
Tout autre contexte utile.
```

## Proposer une fonctionnalité

Avant de proposer une nouvelle fonctionnalité :

1. **Vérifiez** qu'elle n'a pas déjà été proposée
2. **Réfléchissez** à son utilité pour le projet
3. **Préparez** une description détaillée

### Template d'issue pour une fonctionnalité

```markdown
**Problème à résoudre**
Description du problème que cette fonctionnalité résoudrait.

**Solution proposée**
Description claire de la fonctionnalité.

**Alternatives envisagées**
Autres solutions que vous avez considérées.

**Contexte supplémentaire**
Captures d'écran, exemples, références, etc.
```

## Process de Pull Request

### 1. Fork et Clone

```bash
# Forker le repository sur GitHub puis :
git clone https://github.com/votre-username/artenova-shop.git
cd artenova-shop
```

### 2. Créer une branche

```bash
# Créez une branche descriptive
git checkout -b feature/nom-de-la-fonctionnalité
# ou
git checkout -b fix/nom-du-bug
```

### 3. Faire vos modifications

- Écrivez du code propre et commenté
- Testez vos modifications dans plusieurs navigateurs
- Vérifiez le responsive design
- Assurez-vous qu'il n'y a pas d'erreurs dans la console

### 4. Committer vos changements

```bash
git add .
git commit -m "Type: Description courte"
```

Voir [Structure des commits](#structure-des-commits) pour plus de détails.

### 5. Pousser vers votre fork

```bash
git push origin feature/nom-de-la-fonctionnalité
```

### 6. Créer une Pull Request

1. Allez sur GitHub
2. Cliquez sur "New Pull Request"
3. Sélectionnez votre branche
4. Remplissez le template de PR
5. Soumettez !

### Template de Pull Request

```markdown
**Type de changement**
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Amélioration
- [ ] Documentation

**Description**
Description claire des changements apportés.

**Problème résolu**
Fixes #(numéro de l'issue)

**Tests effectués**
- [ ] Testé sur Chrome
- [ ] Testé sur Firefox
- [ ] Testé sur Safari
- [ ] Testé sur mobile
- [ ] Responsive vérifié

**Captures d'écran**
Si applicable.

**Checklist**
- [ ] Mon code suit le style du projet
- [ ] J'ai commenté mon code
- [ ] J'ai mis à jour la documentation
- [ ] Mes changements ne génèrent pas de nouveaux warnings
- [ ] J'ai testé mes changements
```

## Style de code

### HTML

```html
<!-- ✅ BON - Indentation de 4 espaces, commentaires clairs -->
<section class="products" id="products">
    <div class="container">
        <h2 class="section-title">Produits Vedettes</h2>
        <!-- Grille de produits -->
        <div class="products-grid">
            <!-- Contenu -->
        </div>
    </div>
</section>

<!-- ❌ MAUVAIS - Pas d'indentation, pas de commentaires -->
<section class="products" id="products"><div class="container"><h2 class="section-title">Produits Vedettes</h2><div class="products-grid"></div></div></section>
```

### CSS

```css
/* ✅ BON - Commentaires par section, propriétés organisées */
/* ========================================
   SECTION PRODUITS
   ======================================== */

.products {
    /* Espacement */
    padding: var(--spacing-xl) 0;
    
    /* Arrière-plan */
    background-color: var(--bg-light);
}

.product-card {
    /* Layout */
    display: flex;
    flex-direction: column;
    
    /* Espacement */
    padding: var(--spacing-md);
    
    /* Effets */
    transition: all var(--transition-speed);
}

/* ❌ MAUVAIS - Tout mélangé, pas de commentaires */
.products{padding:var(--spacing-xl) 0;background-color:var(--bg-light);}
.product-card{display:flex;padding:var(--spacing-md);transition:all var(--transition-speed);}
```

### JavaScript

```javascript
// ✅ BON - Fonctions documentées, code lisible

/**
 * Ajoute un produit au panier
 * @param {string} productName - Nom du produit
 * @param {number} price - Prix du produit
 */
function addToCart(productName, price) {
    // Validation des paramètres
    if (!productName || price <= 0) {
        console.error('Paramètres invalides');
        return;
    }
    
    // Ajout au panier
    cart.items.push({ name: productName, price: price });
    
    // Mise à jour de l'interface
    updateCartDisplay();
}

// ❌ MAUVAIS - Pas de documentation, variables cryptiques
function a(n,p){cart.items.push({name:n,price:p});u();}
```

### Conventions de nommage

- **Classes CSS** : kebab-case (`product-card`, `nav-menu`)
- **IDs** : camelCase (`navMenu`, `productsGrid`)
- **Variables JS** : camelCase (`cartTotal`, `productName`)
- **Constantes** : UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- **Fonctions** : camelCase, verbes (`addToCart`, `updateDisplay`)

## Structure des commits

Utilisez des messages de commit clairs et descriptifs :

### Format

```
Type: Description courte (max 50 caractères)

Description détaillée si nécessaire (optionnel)
- Point 1
- Point 2

Fixes #123
```

### Types de commits

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, point-virgules manquants, etc.
- `refactor:` - Refactorisation du code
- `perf:` - Amélioration des performances
- `test:` - Ajout de tests
- `chore:` - Maintenance, mise à jour de dépendances

### Exemples

```bash
# Bonne pratique
git commit -m "feat: Ajout du filtre de produits par catégorie"
git commit -m "fix: Correction du bug du panier vide"
git commit -m "docs: Mise à jour du README avec instructions de déploiement"

# Mauvaise pratique
git commit -m "update"
git commit -m "fixes"
git commit -m "changes"
```

## Checklist avant soumission

Avant de soumettre votre PR, assurez-vous que :

- [ ] Le code fonctionne sans erreurs
- [ ] Le code est bien commenté
- [ ] Le responsive est vérifié (mobile, tablette, desktop)
- [ ] Le code suit le style du projet
- [ ] Les commits sont bien structurés
- [ ] La documentation est à jour
- [ ] Aucun fichier inutile n'est inclus
- [ ] Les tests passent (si applicables)

## Tests à effectuer

### Navigateurs

Testez sur au moins :
- Chrome (dernière version)
- Firefox (dernière version)
- Safari (si possible)
- Edge (si possible)

### Appareils

- Desktop (1920x1080)
- Tablette (768x1024)
- Mobile (375x667)

### Fonctionnalités

- Navigation
- Menu hamburger
- Ajout au panier
- Formulaire newsletter
- Animations au scroll
- Liens et ancres

## Questions ?

Si vous avez des questions :

1. Consultez la [documentation](README.md)
2. Recherchez dans les [issues existantes](https://github.com/FullStackFlow-dev/artenova-shop/issues)
3. Créez une nouvelle issue avec le label "question"
4. Contactez-nous à merphy97@gmail.com

## Remerciements

Merci pour votre contribution à ArtéNova Shop ! Chaque contribution, petite ou grande, est appréciée. 🙏

---

Fait avec ❤️ pour la communauté open source
