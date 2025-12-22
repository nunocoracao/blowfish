[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | Français | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)
# Blowfish
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.87.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish est conçu pour être un thème puissant et léger pour [Hugo](https://gohugo.io). Il est construit avec Tailwind CSS avec un design épuré et minimaliste qui donne la priorité à votre contenu.

![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)


🌏 [Site de démonstration](https://blowfish.page/)
📑 [Documentation du thème](https://blowfish.page/docs/)
💎 [Boutique de produits dérivés](http://tee.pub/lic/qwSlWVBL5zc)
🐛 [Rapports de bugs et problèmes](https://github.com/nunocoracao/blowfish/issues)
💡 [Questions et demandes de fonctionnalités](https://github.com/nunocoracao/blowfish/discussions)



<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>



## Fonctionnalités

- Disposition entièrement responsive construite avec Tailwind CSS 3.0
- Plusieurs palettes de couleurs (ou personnalisez entièrement la vôtre)
- Mode sombre (forcé activé/désactivé ou basculement automatique avec commutateur utilisateur)
- Configuration hautement personnalisable
- Intégration Firebase pour prendre en charge les données dynamiques
- Compteur de vues et mécanisme de likes
- Articles connexes
- Plusieurs mises en page pour la page d'accueil
- Plusieurs auteurs
- Séries d'articles
- Tri des articles basé sur la date et le poids
- Mode Zen pour la lecture d'articles
- Flexible avec tous les types de contenu, taxonomies et menus
- Menus d'en-tête et de pied de page
- Menus imbriqués et menu de sous-navigation
- Table des matières défilable
- Support du contenu multilingue incluant la prise en charge des langues RTL
- Possibilité de lier des articles sur des sites web tiers
- Prise en charge de plusieurs shortcodes comme Gallery, Timeline, GitHub cards et Carousels
- Syntaxe GitHub Alerts, 15 types, support pliable
- Intégration Buymeacoffee
- Recherche côté client alimentée par Fuse.js
- Diagrammes et visualisations utilisant Mermaid
- Graphiques utilisant Chart.js
- Intégration TypeIt
- Intégrations Youtube avec améliorations de performance
- Notation mathématique utilisant KaTeX
- Icônes SVG de FontAwesome 6
- Redimensionnement automatique des images utilisant Hugo Pipes
- Ancres de titres, Tables des matières, Copie de code, Boutons, Badges et plus
- Support HTML et Emoji dans les articles 🎉
- SEO optimisé avec liens pour partage sur les réseaux sociaux
- Support de Fathom Analytics et Google Analytics
- Flux RSS, Favicons et support des commentaires
- Personnalisation avancée utilisant de simples définitions de couleurs et styles Tailwind
- Optimisé pour les performances et l'accessibilité avec des scores Lighthouse parfaits
- Entièrement documenté avec des mises à jour régulières

---

![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

## Documentation

Blowfish dispose d'une [documentation complète](https://blowfish.page/docs/) qui couvre tous les aspects du thème. Assurez-vous de [lire la documentation](https://blowfish.page/docs/) pour en savoir plus sur l'utilisation du thème et de ses fonctionnalités.

---

## Installation

Blowfish prend en charge plusieurs méthodes d'installation - en tant que sous-module git, module Hugo, ou en tant qu'installation complètement manuelle.

Des instructions détaillées pour chaque méthode se trouvent dans la documentation [Installation](https://blowfish.page/docs/installation). Vous devriez consulter la documentation pour l'expérience de configuration la plus simple. Ci-dessous se trouve un guide de démarrage rapide utilisant les sous-modules si vous utilisez git, ou les modules Hugo si vous êtes déjà à l'aise avec l'installation de thèmes Hugo.

### Démarrage rapide avec Blowfish Tools

> **Note :** Assurez-vous d'avoir **Node.js**, **Git** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.

Nous venons de lancer un nouvel outil CLI pour vous aider à démarrer avec Blowfish. Il créera un nouveau projet Hugo, installera le thème et configurera les fichiers de configuration du thème pour vous. Il est encore en version bêta, veuillez donc [signaler tout problème que vous rencontrez](https://github.com/nunocoracao/blowfish-tools).

Installez l'outil CLI globalement en utilisant npm (ou un autre gestionnaire de paquets) :
```shell
npm i -g blowfish-tools
```

Ensuite, exécutez la commande `blowfish-tools` pour démarrer une exécution interactive qui vous guidera à travers les cas d'utilisation de création et de configuration.
```shell
blowfish-tools
```

Vous pouvez également exécuter la commande `blowfish-tools new` pour créer un nouveau projet Hugo et installer le thème en une seule fois. Consultez l'aide du CLI pour plus d'informations.
```shell
blowfish-tools new mynewsite
```

### Démarrage rapide avec les sous-modules git

> **Note :** Assurez-vous d'avoir **Git** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.

1. Depuis le répertoire de votre projet, initialisez git :

   ```shell
   git init
   ```

2. Configurez Blowfish comme un sous-module git :

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. Dans le dossier racine de votre site web, supprimez le fichier `hugo.toml` qui a été généré par Hugo. Copiez les fichiers de configuration `*.toml` du thème dans votre dossier `config/_default/`.

   Vous trouverez ces fichiers de configuration du thème dans le répertoire cache de Hugo, ou [téléchargez une copie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) depuis GitHub.

4. Suivez les instructions [Pour commencer](https://blowfish.page/docs/getting-started/) pour configurer votre site web.

### Démarrage rapide avec Hugo

> **Note :** Assurez-vous d'avoir **Go** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.

1. Depuis le répertoire de votre projet, initialisez les modules Hugo :

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Créez `config/_default/module.toml` et ajoutez ce qui suit :

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

3. Démarrez votre serveur en utilisant `hugo server` et le thème sera téléchargé automatiquement.

4. Dans le dossier racine de votre site web, supprimez le fichier `hugo.toml` qui a été généré par Hugo. Copiez les fichiers de configuration `*.toml` du thème dans votre dossier `config/_default/`.

   > **Note :** Ne remplacez pas le fichier `module.toml` que vous avez créé ci-dessus !

   Vous trouverez ces fichiers de configuration du thème dans le répertoire cache de Hugo, ou [téléchargez une copie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) depuis GitHub.

5. Suivez les instructions [Pour commencer](https://blowfish.page/docs/getting-started/) pour configurer votre site web.

### Installation des mises à jour du thème

Au fur et à mesure que de nouvelles versions sont publiées, vous pouvez mettre à jour le thème en utilisant Hugo. Exécutez simplement `hugo mod get -u` depuis le répertoire de votre projet et le thème se mettra automatiquement à jour vers la dernière version.

Des [instructions de mise à jour](https://blowfish.page/docs/installation/#installing-updates) détaillées sont disponibles dans la documentation.

---

## Contribuer

Blowfish est destiné à évoluer au fil du temps. J'ai l'intention de continuer à ajouter des fonctionnalités et à apporter des modifications selon les besoins.

N'hésitez pas à me contacter pour tout problème ou suggestion de nouvelles fonctionnalités que vous aimeriez voir.

- 🐛 **Rapports de bugs et problèmes :** Utilisez [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)
- 💡 **Idées de nouvelles fonctionnalités :** Ouvrez une discussion sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)
- 🙋‍♀️ **Questions générales :** Rendez-vous sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)

Si vous êtes en mesure de corriger un bug ou de mettre en œuvre une nouvelle fonctionnalité, j'accueille les PR à cette fin. Apprenez-en plus dans les [directives de contribution](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).

---

## Évolution des stargazers

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
