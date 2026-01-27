# Guide de Déploiement - ArtéNova Shop 🚀

Ce guide vous accompagne pas à pas pour déployer votre site ArtéNova Shop sur différentes plateformes.

## 📋 Table des matières

- [Prérequis](#prérequis)
- [Déploiement sur Netlify](#déploiement-sur-netlify)
- [Déploiement sur Vercel](#déploiement-sur-vercel)
- [Déploiement sur GitHub Pages](#déploiement-sur-github-pages)
- [Configuration DNS personnalisé](#configuration-dns-personnalisé)
- [Optimisations post-déploiement](#optimisations-post-déploiement)
- [Dépannage](#dépannage)

---

## 🎯 Prérequis

Avant de déployer, assurez-vous d'avoir :

- ✅ Un compte GitHub (gratuit)
- ✅ Votre projet sur GitHub (voir [QUICKSTART.md](QUICKSTART.md))
- ✅ Tous les fichiers du projet localement
- ✅ Git installé sur votre ordinateur

### Vérification rapide

```bash
# Vérifiez que Git est installé
git --version

# Vérifiez que votre projet est initialisé
git status

# Vérifiez que vous avez bien tous les fichiers
ls -la
# Vous devriez voir : index.html, styles.css, script.js, etc.
```

---

## 🟢 Déploiement sur Netlify

Netlify est la méthode **la plus simple et recommandée** pour les débutants.

### Méthode 1 : Glisser-Déposer (Drag & Drop) ⭐ RECOMMANDÉ

**Temps estimé : 2 minutes**

1. **Allez sur Netlify**
   - Visitez [netlify.com](https://www.netlify.com)
   - Cliquez sur "Sign up" (gratuit)
   - Connectez-vous avec GitHub

2. **Déployez votre site**
   - Sur le dashboard, cherchez la zone "Want to deploy a new site without connecting to Git?"
   - Glissez-déposez le **dossier entier** de votre projet
   - Attendez quelques secondes ⏱️

3. **Votre site est en ligne !** 🎉
   - URL générée automatiquement : `https://random-name-12345.netlify.app`
   - Le site est immédiatement accessible

4. **Personnaliser le nom** (optionnel)
   - Cliquez sur "Site settings"
   - "Change site name"
   - Exemple : `artenova-shop` → `https://artenova-shop.netlify.app`

### Méthode 2 : Via GitHub (Déploiement continu)

**Avantage** : Chaque push sur GitHub met à jour le site automatiquement

1. **Préparez votre repository GitHub**
   ```bash
   # Si pas encore fait
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/artenova-shop.git
   git push -u origin main
   ```

2. **Connectez Netlify à GitHub**
   - Sur Netlify, cliquez "Add new site" → "Import an existing project"
   - Sélectionnez "GitHub"
   - Autorisez Netlify à accéder à vos repositories
   - Sélectionnez `artenova-shop`

3. **Configuration du build**
   ```
   Branch to deploy: main
   Build command: (laissez vide)
   Publish directory: . (ou laissez vide)
   ```

4. **Déployez**
   - Cliquez "Deploy site"
   - Attendez 1-2 minutes
   - Votre site est en ligne ! 🚀

5. **Mises à jour automatiques**
   ```bash
   # À chaque modification
   git add .
   git commit -m "Mise à jour du design"
   git push
   
   # Netlify redéploie automatiquement ! ✨
   ```

### Méthode 3 : Via Netlify CLI

**Pour les utilisateurs avancés**

```bash
# Installation
npm install -g netlify-cli

# Connexion
netlify login

# Initialisation (première fois)
netlify init

# Déploiement
netlify deploy --prod

# Suivez les instructions
```

### Configuration avancée Netlify

Le fichier `netlify.toml` est déjà configuré avec :
- ✅ Headers de sécurité
- ✅ Cache optimisé
- ✅ Redirections
- ✅ Variables d'environnement prêtes

---

## 🔷 Déploiement sur Vercel

Vercel est une excellente alternative, très performante.

### Méthode 1 : Via l'interface Vercel ⭐ RECOMMANDÉ

**Temps estimé : 3 minutes**

1. **Créez un compte Vercel**
   - Visitez [vercel.com](https://vercel.com)
   - Cliquez "Sign up"
   - Connectez-vous avec GitHub (recommandé)

2. **Importez votre projet**
   - Cliquez "Add New..." → "Project"
   - Sélectionnez "Import Git Repository"
   - Cherchez `artenova-shop` dans la liste
   - Cliquez "Import"

3. **Configuration**
   ```
   Project Name: artenova-shop
   Framework Preset: Other (détecté automatiquement)
   Root Directory: ./
   Build Command: (laissez vide)
   Output Directory: (laissez vide)
   Install Command: (laissez vide)
   ```

4. **Déployez**
   - Cliquez "Deploy"
   - Attendez 30-60 secondes ⏱️
   - Votre site est en ligne !

5. **URL générée**
   - Production : `https://artenova-shop.vercel.app`
   - Preview : Une URL unique pour chaque branche

### Méthode 2 : Via Vercel CLI

**Installation et configuration**

```bash
# Installation globale
npm install -g vercel

# Ou avec npx (sans installation)
npx vercel
```

**Première fois - Configuration**

```bash
# Dans le dossier du projet
cd artenova-shop

# Déploiement initial
vercel

# Répondez aux questions :
# ? Set up and deploy "~/artenova-shop"? [Y/n] Y
# ? Which scope do you want to deploy to? Your Username
# ? Link to existing project? [y/N] N
# ? What's your project's name? artenova-shop
# ? In which directory is your code located? ./
# ? Want to override the settings? [y/N] N
```

**Déploiements suivants**

```bash
# Déploiement en production
vercel --prod

# Ou simplement
vercel

# Preview deployment (pour tester)
vercel --preview
```

### Méthode 3 : Glisser-Déposer (nouveau)

1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Descendez jusqu'à "Or, deploy a template"
3. Cliquez sur "Browse all templates"
4. Ou directement "Deploy" et glissez votre dossier

### Configuration Vercel

Le fichier `vercel.json` est configuré avec :
- ✅ Headers de sécurité (X-Frame-Options, CSP, etc.)
- ✅ Cache optimisé pour CSS/JS
- ✅ Routage statique
- ✅ Clean URLs
- ✅ Compression automatique

### Fonctionnalités Vercel

**Déploiements automatiques** :
- Chaque push sur `main` → déploiement en production
- Chaque pull request → preview deployment unique

**Variables d'environnement** :
```bash
# Via CLI
vercel env add VARIABLE_NAME

# Via interface
# Project Settings → Environment Variables
```

**Domaine personnalisé** :
1. Project Settings → Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

---

## 📘 Déploiement sur GitHub Pages

**Gratuit et simple, parfait pour les projets statiques**

### Configuration

1. **Poussez votre code sur GitHub**
   ```bash
   git add .
   git commit -m "Prêt pour GitHub Pages"
   git push origin main
   ```

2. **Activez GitHub Pages**
   - Allez sur votre repository GitHub
   - Settings → Pages (dans le menu latéral)
   - Source : Deploy from a branch
   - Branch : `main`
   - Folder : `/ (root)`
   - Cliquez "Save"

3. **Attendez le déploiement**
   - GitHub construit votre site (1-2 minutes)
   - L'URL apparaît : `https://votre-username.github.io/artenova-shop`

4. **Vérification**
   - Visitez l'URL
   - Le site devrait s'afficher correctement

### Configuration avec Actions (optionnel)

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

### Domaine personnalisé GitHub Pages

1. Ajoutez un fichier `CNAME` à la racine :
   ```
   www.artenovashop.com
   ```

2. Configurez votre DNS :
   ```
   Type: CNAME
   Name: www
   Value: votre-username.github.io
   ```

---

## 🌐 Configuration DNS personnalisé

### Pour Netlify

1. **Dans Netlify**
   - Site settings → Domain management
   - Add custom domain
   - Entrez : `www.artenovashop.com`

2. **Chez votre registrar DNS** (ex: Namecheap, GoDaddy, OVH)
   ```
   Type: CNAME
   Name: www
   Value: votre-site.netlify.app
   TTL: Automatic
   ```

3. **Pour le domaine racine** (sans www)
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: AAAA (IPv6)
   Name: @
   Value: 2600:1f13:fe4:2500::1
   ```

4. **Activez HTTPS**
   - Netlify le fait automatiquement
   - Attendez quelques minutes pour le certificat SSL

### Pour Vercel

1. **Dans Vercel**
   - Project Settings → Domains
   - Add domain : `artenovashop.com`

2. **Chez votre registrar DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Vérification**
   - Vercel vérifie automatiquement
   - HTTPS activé automatiquement

### Propagation DNS

⏰ **Temps de propagation** : 24-48 heures (souvent plus rapide)

**Vérifier la propagation** :
- [whatsmydns.net](https://www.whatsmydns.net)
- Entrez votre domaine
- Vérifiez que le CNAME/A pointe vers le bon serveur

---

## ⚡ Optimisations post-déploiement

### 1. SEO et Métadonnées

Ajoutez dans `<head>` de `index.html` :

```html
<!-- Meta SEO -->
<meta name="description" content="ArtéNova Shop - Votre boutique en ligne pour des produits artisanaux de qualité. Livraison gratuite, retours sous 30 jours.">
<meta name="keywords" content="artisanat, boutique, artisanal, produits faits main, ArtéNova">
<meta name="author" content="ArtéNova Shop">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="ArtéNova Shop - Produits Artisanaux">
<meta property="og:description" content="Découvrez notre sélection de produits artisanaux de qualité">
<meta property="og:image" content="https://votre-site.com/images/og-image.jpg">
<meta property="og:url" content="https://artenovashop.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ArtéNova Shop">
<meta name="twitter:description" content="Produits artisanaux de qualité">
<meta name="twitter:image" content="https://votre-site.com/images/twitter-card.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/images/favicon.png">
```

### 2. Analytics

**Google Analytics** :

```html
<!-- Dans <head> -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Vercel Analytics** :

```bash
npm install @vercel/analytics
```

Dans `index.html` :
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

### 3. Performance

**Créez un `robots.txt`** :
```
User-agent: *
Allow: /
Sitemap: https://artenovashop.com/sitemap.xml
```

**Créez un `sitemap.xml`** :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://artenovashop.com/</loc>
    <lastmod>2026-01-24</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Sécurité

Les headers sont déjà configurés dans `netlify.toml` et `vercel.json` :
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy

---

## 🔧 Dépannage

### Site ne s'affiche pas correctement

**Problème** : Page blanche ou erreur 404

**Solutions** :
1. Vérifiez que `index.html` est à la racine
2. Vérifiez les chemins des fichiers CSS/JS
3. Consultez les logs de déploiement
4. Videz le cache de votre navigateur (Ctrl+Shift+R)

### CSS ne se charge pas

**Problème** : Site sans styles

**Solutions** :
1. Vérifiez le chemin dans `<link rel="stylesheet" href="styles.css">`
2. Vérifiez que `styles.css` est bien déployé
3. Inspectez la console (F12) pour les erreurs
4. Vérifiez la casse (styles.css vs Styles.css)

### JavaScript ne fonctionne pas

**Problème** : Interactions ne marchent pas

**Solutions** :
1. Ouvrez la console (F12)
2. Regardez les erreurs JavaScript
3. Vérifiez que `<script src="script.js"></script>` est avant `</body>`
4. Vérifiez les chemins de fichiers

### Domaine personnalisé ne fonctionne pas

**Problème** : Site inaccessible via votre domaine

**Solutions** :
1. Attendez 24-48h pour la propagation DNS
2. Vérifiez la configuration DNS sur [whatsmydns.net](https://www.whatsmydns.net)
3. Vérifiez les paramètres chez votre registrar
4. Essayez en navigation privée
5. Videz le cache DNS : `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### Erreurs de build

**Sur Netlify/Vercel**

1. **Consultez les logs** :
   - Netlify : Deploys → cliquez sur le déploiement → Logs
   - Vercel : Deployments → cliquez sur le déploiement

2. **Erreurs communes** :
   - Fichiers manquants → vérifiez Git
   - Chemins incorrects → utilisez des chemins relatifs
   - Fichiers en double → vérifiez `.gitignore`

### HTTPS ne fonctionne pas

**Solutions** :
1. Attendez quelques minutes (provisionnement du certificat)
2. Sur Netlify : Domain settings → HTTPS → Verify DNS configuration
3. Sur Vercel : Automatic HTTPS devrait s'activer sous 1-2 minutes
4. Forcez le renouvellement du certificat dans les settings

---

## 📊 Comparaison des plateformes

| Fonctionnalité | Netlify | Vercel | GitHub Pages |
|---|---|---|---|
| **Déploiement** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Vitesse** | Rapide | Très rapide | Moyen |
| **HTTPS gratuit** | ✅ | ✅ | ✅ |
| **Domaine personnalisé** | ✅ | ✅ | ✅ |
| **CI/CD** | ✅ | ✅ | ✅ |
| **Fonctions serverless** | ✅ | ✅ | ❌ |
| **Preview deployments** | ✅ | ✅ | ❌ |
| **Limite gratuite** | 100 GB/mois | 100 GB/mois | Illimité |
| **Facilité** | Très facile | Très facile | Facile |

**Recommandation** :
- 🥇 **Netlify** : Le plus simple pour débuter
- 🥈 **Vercel** : Le plus rapide et performant
- 🥉 **GitHub Pages** : Gratuit et illimité

---

## ✅ Checklist finale

Avant de partager votre site :

- [ ] Le site s'affiche correctement
- [ ] Toutes les pages sont accessibles
- [ ] Le responsive fonctionne (mobile, tablette, desktop)
- [ ] Pas d'erreurs dans la console
- [ ] HTTPS est activé
- [ ] Les liens fonctionnent
- [ ] Les formulaires fonctionnent
- [ ] Les images se chargent
- [ ] Le SEO est configuré
- [ ] Analytics est activé (optionnel)
- [ ] Domaine personnalisé configuré (optionnel)

---

## 🎉 Félicitations !

Votre site ArtéNova Shop est maintenant en ligne et accessible au monde entier !

**Prochaines étapes** :
1. Partagez votre URL sur les réseaux sociaux
2. Ajoutez le lien dans votre bio Instagram/Facebook
3. Continuez à améliorer le site
4. Ajoutez de nouveaux produits

**Besoin d'aide ?**
- 📧 support@artenovashop.com
- 💬 Créez une issue sur GitHub
- 📖 Consultez le README.md

---

Bon déploiement ! 🚀