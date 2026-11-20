<h1 align="center">ArtéNova Shop</h1>

<p align="center">
  <strong>Une expérience e-commerce moderne, intelligente et pensée pour le commerce de mode.</strong>
</p>

<p align="center">
  Boutique en ligne de vêtements, chaussures et accessoires — Dakar, Sénégal
</p>

<p align="center">
  <a href="https://artenova-shoponline.vercel.app">
    <img src="https://img.shields.io/badge/demo-online-green" alt="Live Demo">
  </a>
  <a href="https://github.com/FullStackFlow-dev/Projet-Site-E-commerce-ArteNova-Shop/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/FullStackFlow-dev/Projet-Site-E-commerce-ArteNova-Shop.svg" alt="License">
  </a>
  <a href="https://github.com/FullStackFlow-dev/Projet-Site-E-commerce-ArteNova-Shop">
    <img src="https://img.shields.io/badge/statut-en%20reprise%20%26%20d%C3%A9veloppement-blue" alt="Statut du projet">
  </a>
</p>

---

## Table des matières

1. [Présentation](#1-présentation)
2. [Vision et objectifs](#2-vision-et-objectifs)
3. [Périmètre fonctionnel cible](#3-périmètre-fonctionnel-cible)
   - [3.1 Expérience client](#31-expérience-client)
   - [3.2 Administration](#32-administration)
   - [3.3 Fonctionnalités intelligentes](#33-fonctionnalités-intelligentes)
4. [Stratégie de réalisation : migration hybride](#4-stratégie-de-réalisation--migration-hybride)
   - [Phase 1 — Assainissement et sécurisation de la base existante](#phase-1----assainissement-et-sécurisation-de-la-base-existante)
   - [Phase 2 — Modernisation de l'interface](#phase-2----modernisation-de-linterface)
   - [Phase 3 — Socle backend et données](#phase-3----socle-backend-et-données)
   - [Phase 4 — E-commerce opérationnel](#phase-4----e-commerce-opérationnel)
   - [Phase 5 — Intelligence, analyse et optimisation](#phase-5----intelligence-analyse-et-optimisation)
5. [Architecture technique cible](#5-architecture-technique-cible)
   - [Technologies envisagées](#technologies-envisagées)
6. [Principes de données et sécurité](#6-principes-de-données-et-sécurité)
7. [Qualité, tests et déploiement](#7-qualité-tests-et-déploiement)
8. [État actuel et transparence](#8-état-actuel-et-transparence)
9. [Organisation du dépôt — cible indicative](#9-organisation-du-dépôt----cible-indicative)
10. [Démarrage local — version historique](#10-démarrage-local----version-historique)
11. [Feuille de route](#11-feuille-de-route)
12. [Identité du projet](#12-identité-du-projet)

---

------------------------------------------------------------------------

## 1. Présentation

**ArtéNova Shop** est un projet entrepreneurial personnel dont
l'ambition est de construire une véritable boutique en ligne,
accessible, fiable et évolutive, dédiée à la vente de vêtements,
chaussures et accessoires de mode.

Le projet a été initié comme premier projet phare personnel. Sa première
version constitue une base historique : elle a permis de poser les
premières idées, l'identité du site et une première structure frontend.
La reprise actuelle marque une nouvelle étape : faire évoluer
progressivement cette base vers une plateforme e-commerce complète, avec
une expérience client soignée, une administration opérationnelle et des
services intelligents.

ArtéNova Shop n'est pas conçu comme une simple vitrine. La cible est une
plateforme capable d'accompagner le client depuis la découverte d'un
produit jusqu'à la livraison, tout en donnant à l'équipe
d'administration les outils nécessaires pour gérer le catalogue, les
stocks, les promotions, les commandes et la relation client.

## 2. Vision et objectifs

-   Présenter un catalogue clair et attractif de vêtements, chaussures
    et accessoires.
-   Permettre aux visiteurs de rechercher, filtrer, comparer et
    découvrir des produits.
-   Gérer les variantes de produits : tailles, couleurs, images et
    disponibilité.
-   Proposer un panier persistant et un parcours de commande simple.
-   Permettre la création de comptes clients et la gestion de leurs
    informations utiles aux commandes et livraisons.
-   Fournir un espace d'administration pour gérer les produits, les
    stocks, les commandes, les clients et les campagnes promotionnelles.
-   Déployer progressivement des fonctionnalités intelligentes de
    recommandation, d'assistance et de personnalisation.
-   Construire une architecture sécurisée, maintenable et capable
    d'évoluer avec l'activité commerciale.

## 3. Périmètre fonctionnel cible

### 3.1 Expérience client

-   Accueil avec mise en avant des nouveautés, meilleures ventes,
    promotions et collections.
-   Catalogue organisé par catégories et sous-catégories.
-   Fiches produits avec galerie d'images, description, prix, tailles,
    couleurs et disponibilité.
-   Recherche, filtres et tri.
-   Suggestions de produits similaires ou complémentaires.
-   Panier avec modification des quantités, suppression d'articles et
    calcul du total.
-   Tunnel de commande avec coordonnées, adresse et informations de
    livraison.
-   Comptes clients : inscription, connexion, profil et adresses
    enregistrées.
-   Historique et suivi des commandes selon les capacités logistiques
    intégrées.
-   Pages de contact, FAQ, informations de livraison, retours et
    conditions de vente.

### 3.2 Administration

L'administration constitue un composant central du projet. Elle devra
être protégée par authentification et autorisations adaptées.

**Gestion du catalogue** - Créer, modifier, publier, dépublier et
archiver un produit. - Téléverser plusieurs images et définir une image
principale. - Définir nom, description, catégorie, prix, prix
promotionnel et statut. - Gérer les variantes : taille, couleur,
référence et quantité disponible. - Définir les seuils de stock faible
et suivre les mouvements de stock.

**Promotions et communication** - Créer des promotions avec dates de
début et de fin. - Configurer des remises en pourcentage ou en montant
fixe. - Mettre en avant nouveautés, collections et produits
sélectionnés. - Administrer des bannières et carrousels d'annonces sur
la page d'accueil. - Préparer des campagnes destinées aux clients ayant
accepté de recevoir des communications.

**Commandes et clients** - Consulter les commandes et leurs détails. -
Faire évoluer leur statut : en attente, confirmée, en préparation,
expédiée, livrée ou annulée. - Consulter les informations nécessaires à
la préparation et à la livraison. - Retrouver l'historique d'un client
et ses commandes, avec accès limité selon les rôles. - Consulter des
indicateurs de ventes, commandes et stocks.

### 3.3 Fonctionnalités intelligentes

L'intelligence artificielle doit apporter une valeur commerciale
mesurable et rester sous contrôle. Elle ne remplace ni les règles métier
ni la décision du client.

-   Assistant conversationnel pour répondre aux questions sur les
    produits, tailles, disponibilité, livraison et commandes.
-   Recherche assistée en langage naturel.
-   Recommandations de produits selon le contexte de navigation, les
    préférences déclarées et les achats, dans le respect du
    consentement.
-   Suggestions de produits complémentaires.
-   Aide à la découverte de produits et collections.
-   Assistance à l'administration : aide à la rédaction de descriptions,
    catégorisation et propositions de contenus promotionnels.
-   Analyse des ventes et signaux de stock pour éclairer les décisions
    commerciales.

Les réponses de l'assistant concernant les prix, les stocks, les délais
et les commandes devront provenir des données réelles de la plateforme.
L'assistant ne devra jamais inventer une disponibilité, confirmer une
commande non enregistrée ou exposer les données d'un autre client.

## 4. Stratégie de réalisation : migration hybride

La stratégie retenue est **hybride et progressive** : préserver la base
historique lorsqu'elle est exploitable, tout en construisant les
nouveaux composants sur une architecture moderne.

### Phase 1 --- Assainissement et sécurisation de la base existante

-   Faire l'inventaire des pages, scripts, styles et ressources.
-   Corriger les chemins, liens de navigation et références aux
    fichiers.
-   Restaurer ou reconstruire les pages actuellement vides.
-   Organiser les images et ressources statiques.
-   Vérifier l'accessibilité, le responsive design et les performances.
-   Maintenir une version fonctionnelle de référence.

### Phase 2 --- Modernisation de l'interface

-   Définir un système de design cohérent avec l'identité ArtéNova Shop.
-   Moderniser les composants communs : en-tête, navigation, pied de
    page, cartes produit et formulaires.
-   Mettre en place une navigation cohérente entre toutes les pages.
-   Préparer la migration des vues vers des composants React/Next.js
    sans interrompre le travail sur la version existante.

### Phase 3 --- Socle backend et données

-   Construire une API Python avec FastAPI.
-   Concevoir le modèle relationnel PostgreSQL.
-   Mettre en place les migrations de schéma et les données de
    référence.
-   Ajouter l'authentification, les rôles et les autorisations.
-   Intégrer le stockage des images et médias.
-   Définir les contrats d'API consommés par le frontend.

### Phase 4 --- E-commerce opérationnel

-   Catalogue, catégories, variantes et recherche.
-   Gestion des stocks.
-   Panier et commandes.
-   Comptes clients et adresses de livraison.
-   Administration des produits, promotions et commandes.
-   Notifications transactionnelles.
-   Intégration des moyens de paiement et de livraison après validation
    des prestataires, contraintes réglementaires et modalités
    commerciales applicables au Sénégal.

### Phase 5 --- Intelligence, analyse et optimisation

-   Assistant e-commerce connecté aux données autorisées.
-   Recommandations et recherche intelligente.
-   Tableaux de bord de ventes, commandes, produits et stocks.
-   Mesure des performances, qualité des recommandations et satisfaction
    client.
-   Optimisation SEO et visibilité dans les moteurs de recherche et
    systèmes de recherche assistés par IA (GEO).

Les phases pourront se chevaucher lorsque les dépendances techniques le
permettent. Chaque étape devra toutefois produire une version testable
et déployable.

## 5. Architecture technique cible

L'architecture cible sépare clairement l'interface, la logique métier,
les données et les services d'intelligence.

``` text
Clients / Administration
          |
          v
Frontend web — Next.js / React
          |
          v
API Backend — Python / FastAPI
          |
    +-----+-------------------+
    |                         |
    v                         v
PostgreSQL              Services applicatifs
    |                   - Authentification
    |                   - Catalogue / stocks
    |                   - Panier / commandes
    |                   - Promotions / clients
    |                   - Notifications
    |
    +-----------------------------+
                                  |
                         Services IA / RAG
                         - Assistant produit
                         - Recherche sémantique
                         - Recommandations
                         - Aide à l'administration

Stockage médias — images produits et contenus
Services externes — paiement, livraison, e-mail/SMS
Observabilité — logs, erreurs, métriques et audit
```

### Technologies envisagées

  -----------------------------------------------------------------------
  Couche                  Technologie cible       Responsabilité
  ----------------------- ----------------------- -----------------------
  Frontend                React / Next.js,        Interface client et
                          TypeScript              administration

  Backend                 Python, FastAPI,        API, règles métier et
                          Pydantic                intégrations

  Base de données         PostgreSQL              Données clients,
                                                  catalogue, stocks et
                                                  commandes

  ORM et migrations       SQLAlchemy, Alembic     Accès aux données et
                                                  évolution du schéma

  Authentification        Solution éprouvée       Sessions, comptes et
                          compatible avec FastAPI rôles

  Médias                  Stockage objet          Images et fichiers
                          compatible S3           produits

  IA                      API de modèles ou       Assistant, recherche et
                          modèles hébergés selon  recommandations
                          les besoins             

  RAG / recherche         PostgreSQL et extension Recherche sémantique
                          vectorielle si          sur contenus autorisés
                          justifiée               

  Tests                   Pytest, tests frontend  Fiabilité fonctionnelle
                          et tests API            et technique

  CI/CD                   GitHub Actions et       Vérifications et
                          Vercel / hébergement    déploiements
                          backend adapté          

  Analytics               Événements métier et    Pilotage de l'activité
                          tableaux de bord        
  -----------------------------------------------------------------------

Cette architecture est une cible de conception, pas la description de
fonctionnalités déjà livrées. Les fournisseurs, coûts, régions
d'hébergement et contraintes de paiement devront être validés avant leur
adoption.

## 6. Principes de données et sécurité

Le modèle PostgreSQL devra notamment couvrir les entités suivantes :

-   Utilisateurs, rôles et profils clients.
-   Adresses et préférences de communication.
-   Catégories, produits, images et variantes.
-   Stocks et mouvements de stock.
-   Promotions, coupons et campagnes.
-   Paniers et lignes de panier.
-   Commandes, lignes de commande et statuts.
-   Paiements et références de transaction.
-   Livraisons et événements de suivi.
-   Avis et évaluations, si cette fonctionnalité est activée.
-   Journaux d'audit des actions d'administration.

Principes à respecter : - Ne jamais stocker les mots de passe en
clair. - Appliquer le principe du moindre privilège aux comptes et
rôles. - Valider les données côté serveur, même si elles sont déjà
validées dans le navigateur. - Protéger les routes d'administration et
les opérations sensibles. - Ne pas stocker les données de carte bancaire
: déléguer le traitement aux prestataires de paiement conformes. -
Limiter l'accès aux données personnelles au strict besoin
opérationnel. - Obtenir le consentement approprié avant les
communications marketing. - Prévoir sauvegardes, restauration,
journalisation et politique de conservation des données. - Ne jamais
transmettre à un modèle IA des informations personnelles qui ne sont pas
nécessaires à la tâche.

## 7. Qualité, tests et déploiement

Chaque évolution devra être vérifiée avant intégration :

-   Tests unitaires des fonctions métier.
-   Tests d'intégration de l'API et de PostgreSQL.
-   Tests du parcours catalogue → panier → commande.
-   Tests des rôles et permissions.
-   Tests responsive et accessibilité.
-   Vérification des liens, ressources, images et routes.
-   Contrôles de sécurité et analyse des dépendances.
-   Vérification des variables d'environnement et absence de secrets
    dans Git.

Le frontend pourra être déployé sur Vercel. Le backend Python et
PostgreSQL devront être hébergés sur des services compatibles avec leur
fonctionnement, leur persistance, leurs sauvegardes et les exigences de
disponibilité. Le choix final dépendra du budget et des contraintes
opérationnelles.

## 8. État actuel et transparence

Le dépôt contient une première base frontend HTML/CSS/JavaScript, un
`index.html`, des scripts, des feuilles de style, des pages secondaires,
des tests Jest et une configuration de projet Node.js.

La reprise du projet a mis en évidence plusieurs limites historiques à
traiter : - Plusieurs pages secondaires et fichiers CSS/JavaScript sont
actuellement vides. - Les ressources d'images attendues ne sont pas
encore présentes dans le dépôt local inspecté. - Certains chemins de
ressources et de feuilles de style doivent être harmonisés. - La
navigation entre pages et les interactions e-commerce restent à
construire ou à vérifier. - La version historique ne constitue pas
encore une boutique transactionnelle complète.

Les tests actuellement présents vérifient notamment des fonctions de
calcul et de formatage des prix. Leur réussite ne signifie pas que le
parcours e-commerce complet est déjà opérationnel.

**Statut : projet en reprise et en développement.** Les fonctionnalités
décrites dans la vision cible ne doivent pas être considérées comme
disponibles tant qu'elles n'ont pas été implémentées, testées et
déployées.

## 9. Organisation du dépôt --- cible indicative

``` text
artenova-shop/
├── apps/
│   └── web/                 # Frontend Next.js
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   └── tests/
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
│   ├── specifications/
│   ├── architecture/
│   └── decisions/
├── infrastructure/
├── scripts/
├── tests/
├── .env.example
└── README.md
```

Cette organisation représente une structure cible à introduire
progressivement. Elle ne prétend pas décrire exactement l'arborescence
actuelle du dépôt.

## 10. Démarrage local --- version historique

La première version du projet utilise HTML, CSS et JavaScript avec
quelques scripts Node.js pour les tests et le serveur local.

Prérequis : - Node.js et npm. - Git.

Installation :

``` bash
git clone https://github.com/FullStackFlow-dev/Projet-Site-E-commerce-ArteNova-Shop.git
cd Projet-Site-E-commerce-ArteNova-Shop
npm install
```

Lancer les tests :

``` bash
npm test
```

Lancer le serveur de développement historique :

``` bash
npm run dev
```

Selon la configuration actuelle du projet, le script `dev` utilise
`live-server` via `npx`. Si le paquet n'est pas disponible dans les
dépendances, il faudra l'ajouter explicitement ou adapter le script. Les
commandes backend et Next.js seront documentées lorsqu'ils seront
effectivement intégrés.

## 11. Feuille de route

-   [ ] Audit complet du frontend historique et des chemins de
    ressources.
-   [ ] Restaurer ou reconstruire les pages secondaires.
-   [ ] Ajouter les ressources visuelles et l'identité graphique.
-   [ ] Finaliser la navigation responsive.
-   [ ] Construire le catalogue et les fiches produits.
-   [ ] Implémenter le panier et les règles de prix.
-   [ ] Concevoir le schéma PostgreSQL et les migrations.
-   [ ] Développer l'API FastAPI.
-   [ ] Mettre en place comptes clients et administration sécurisée.
-   [ ] Développer commandes, livraison et intégrations de paiement.
-   [ ] Ajouter promotions, bannières et campagnes.
-   [ ] Intégrer assistant IA et recommandations de manière contrôlée.
-   [ ] Ajouter tableaux de bord et analytics.
-   [ ] Renforcer SEO, accessibilité, sécurité et performances.
-   [ ] Mettre en place CI/CD, sauvegardes et supervision.

## 12. Identité du projet

**ArtéNova Shop**\
Boutique en ligne de vêtements, chaussures et accessoires.\
Dakar, Sénégal\
Contact : `artenovashop01@gmail.com`

Dépôt GitHub :
https://github.com/FullStackFlow-dev/Projet-Site-E-commerce-ArteNova-Shop

------------------------------------------------------------------------

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
- Email: merphy.softwareengineer@gmail.com
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
- Envoyez un email à merphy.softwareengineer@gmail.com

- https://fullstackflow-dev.github.io/Projet-Site-E-commerce-ArteNova-Shop/

---

Fait avec ❤️ pour ArtéNova Shop

---

*ArtéNova Shop --- une initiative entrepreneuriale indépendante,
développée progressivement vers une plateforme e-commerce complète et
intelligente.*
