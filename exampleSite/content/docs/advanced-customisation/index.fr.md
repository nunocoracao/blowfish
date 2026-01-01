---
title: "Personnalisation avancée"
weight: 13
draft: false
description: "Apprenez à construire Blowfish manuellement."
slug: "advanced-customisation"
tags: ["avancé", "css", "documentation"]
series: ["Documentation"]
series_order: 13
---

Il existe de nombreuses façons d'apporter des modifications avancées à Blowfish. Lisez ci-dessous pour en savoir plus sur ce qui peut être personnalisé et la meilleure façon d'atteindre le résultat souhaité.

Si vous avez besoin de conseils supplémentaires, posez vos questions sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).

## Structure du projet Hugo

Avant de se lancer, d'abord un petit mot sur la [structure du projet Hugo](https://gohugo.io/getting-started/directory-structure/) et les meilleures pratiques pour gérer votre contenu et les personnalisations de thème.

{{< alert >}}
**En résumé :** Ne modifiez jamais directement les fichiers du thème. Faites uniquement des personnalisations dans les sous-répertoires de votre projet Hugo, pas dans le répertoire themes lui-même.
{{< /alert >}}

Blowfish est construit pour tirer parti de toutes les pratiques standard de Hugo. Il est conçu pour permettre la personnalisation et le remplacement de tous les aspects du thème sans modifier aucun des fichiers du thème de base. Cela permet une expérience de mise à niveau transparente tout en vous donnant un contrôle total sur l'apparence et le comportement de votre site web.

Pour y parvenir, vous ne devriez jamais ajuster manuellement les fichiers du thème directement. Que vous installiez en utilisant les modules Hugo, comme un sous-module git ou que vous incluiez manuellement le thème dans votre répertoire `themes/`, vous devriez toujours laisser ces fichiers intacts.

La bonne façon d'ajuster le comportement du thème est de remplacer les fichiers en utilisant le puissant [ordre de recherche de fichiers](https://gohugo.io/templates/lookup-order/) de Hugo. En résumé, l'ordre de recherche garantit que tous les fichiers que vous incluez dans votre répertoire de projet auront automatiquement priorité sur les fichiers du thème.

Par exemple, si vous vouliez remplacer le template d'article principal dans Blowfish, vous pouvez simplement créer votre propre fichier `layouts/_default/single.html` et le placer à la racine de votre projet. Ce fichier remplacera alors le `single.html` du thème sans jamais modifier le thème lui-même. Cela fonctionne pour tous les fichiers du thème - templates HTML, partials, shortcodes, fichiers de configuration, données, assets, etc.

Tant que vous suivez cette pratique simple, vous pourrez toujours mettre à jour le thème (ou tester différentes versions du thème) sans vous soucier de perdre vos modifications personnalisées.

## Modifier les paramètres d'optimisation d'image

Hugo dispose de diverses méthodes intégrées pour redimensionner, recadrer et optimiser les images.

À titre d'exemple - dans `layouts/partials/article-link/card.html`, vous avez le code suivant :

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

Le comportement par défaut de Hugo ici est de redimensionner l'image à 600px en conservant le ratio.

Il est à noter que les configurations d'image par défaut telles que le [point d'ancrage](https://gohugo.io/content-management/image-processing/#anchor) peuvent également être définies dans votre [configuration de site](https://gohugo.io/content-management/image-processing/#processing-options) ainsi que dans le template lui-même.

Voir les [docs Hugo sur le traitement d'image](https://gohugo.io/content-management/image-processing/#image-processing-methods) pour plus d'infos.

## Schémas de couleurs

Blowfish est livré avec plusieurs schémas de couleurs prêts à l'emploi. Pour changer le schéma de couleurs de base, vous pouvez définir le paramètre de thème `colorScheme`. Référez-vous à la section [Premiers pas]({{< ref "getting-started#colour-schemes" >}}) pour en savoir plus sur les schémas intégrés.

En plus des schémas par défaut, vous pouvez également créer les vôtres et restyler l'ensemble du site web selon vos goûts. Les schémas sont créés en plaçant un fichier `<nom-du-schema>.css` dans le dossier `assets/css/schemes/`. Une fois le fichier créé, référencez-le simplement par son nom dans la configuration du thème.

{{< alert "github">}}
**Note :** générer ces fichiers manuellement peut être difficile, j'ai créé un outil terminal `nodejs` pour aider avec cela, [Fugu](https://github.com/nunocoracao/fugu). En bref, vous passez les trois principales valeurs `hex` de votre palette de couleurs et le programme produira un fichier css qui peut être importé directement dans Blowfish.
{{< /alert >}}


Blowfish définit une palette de trois couleurs qui est utilisée tout au long du thème. Les trois couleurs sont définies comme variantes `neutral`, `primary` et `secondary`, chacune contenant dix nuances de couleur.

En raison de la façon dont Tailwind CSS 3.0 calcule les valeurs de couleur avec l'opacité, les couleurs spécifiées dans le schéma doivent [se conformer à un format particulier](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) en fournissant les valeurs de couleur rouge, vert et bleu.

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

Cet exemple définit une variable CSS pour la couleur `primary-500` avec une valeur rouge de `139`, une valeur verte de `92` et une valeur bleue de `246`.

Utilisez l'une des feuilles de style du thème existantes comme modèle. Vous êtes libre de définir vos propres couleurs, mais pour l'inspiration, consultez la [référence de palette de couleurs Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) officielle.

## Remplacer la feuille de style

Parfois vous devez ajouter un style personnalisé pour styliser vos propres éléments HTML. Blowfish prévoit ce scénario en vous permettant de remplacer les styles par défaut dans votre propre feuille de style CSS. Créez simplement un fichier `custom.css` dans le dossier `assets/css/` de votre projet.

Le fichier `custom.css` sera minifié par Hugo et chargé automatiquement après tous les autres styles du thème, ce qui signifie que tout dans votre fichier personnalisé aura priorité sur les valeurs par défaut.

### Utiliser des polices supplémentaires

Blowfish vous permet de changer facilement la police de votre site. Après avoir créé un fichier `custom.css` dans le dossier `assets/css/` de votre projet, placez votre fichier de police dans un dossier `fonts` dans le dossier racine `static`.

```shell
.
├── assets
│   └── css
│       └── custom.css
...
└─── static
    └── fonts
        └─── font.ttf

```

Cela rend la police disponible pour le site web. Maintenant, la police peut simplement être importée dans votre `custom.css` et remplacée où vous le jugez bon. L'exemple ci-dessous montre à quoi ressemblerait le remplacement de la police pour tout le `html`.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Ajuster la taille de police

Changer la taille de police de votre site web est un exemple de remplacement de la feuille de style par défaut. Blowfish rend cela simple car il utilise des tailles de police mises à l'échelle tout au long du thème qui sont dérivées de la taille de police HTML de base. Par défaut, Tailwind définit la taille par défaut à `12pt`, mais elle peut être changée selon votre préférence.

Créez un fichier `custom.css` en utilisant les [instructions ci-dessus]({{< ref "#overriding-the-stylesheet" >}}) et ajoutez la déclaration CSS suivante :

```css
/* Augmenter la taille de police par défaut */
html {
  font-size: 13pt;
}
```

Simplement en changeant cette seule valeur, toutes les tailles de police sur votre site web seront ajustées pour correspondre à cette nouvelle taille. Par conséquent, pour augmenter les tailles de police globales utilisées, faites la valeur plus grande que `12pt`. De même, pour diminuer les tailles de police, faites la valeur plus petite que `12pt`.

### Changer le thème de coloration syntaxique

Pour changer le thème de coloration syntaxique, créez `assets/css/custom.css` et ajoutez ce qui suit :

```css
.chroma,
.chroma *,
.chroma:is(.dark *),
.chroma:is(.dark *) * {
  color: unset;
  font-weight: unset;
  font-style: unset;
}
```

Cela efface les styles Chroma par défaut. L'étape suivante est d'incorporer les styles Chroma dans votre fichier CSS en utilisant la commande `hugo gen chromastyles` :

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# Cette commande ne peut pas s'exécuter dans CMD ; elle doit s'exécuter dans PowerShell
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

Voir tous les styles disponibles dans la [documentation de Hugo](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles).

## Construire le CSS du thème depuis la source

Si vous souhaitez faire une modification majeure, vous pouvez tirer parti du compilateur JIT de Tailwind CSS et reconstruire tout le CSS du thème à partir de zéro. C'est utile si vous voulez ajuster la configuration Tailwind ou ajouter des classes Tailwind supplémentaires à la feuille de style principale.

{{< alert >}}
**Note :** Construire le thème manuellement est destiné aux utilisateurs avancés.
{{< /alert >}}

Voyons comment fonctionne la construction du Tailwind CSS.

### Configuration Tailwind

Pour générer un fichier CSS qui contient uniquement les classes Tailwind qui sont réellement utilisées, le compilateur JIT doit scanner tous les templates HTML et fichiers de contenu Markdown pour vérifier quels styles sont présents dans le markup. Le compilateur fait cela en regardant le fichier `tailwind.config.js` qui est inclus à la racine du répertoire du thème :

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // et plus...
};
```

Cette configuration par défaut a été incluse avec ces chemins de contenu afin que vous puissiez facilement générer votre propre fichier CSS sans avoir besoin de la modifier, à condition de suivre une structure de projet particulière. À savoir, **vous devez inclure Blowfish dans votre projet comme un sous-répertoire à `themes/blowfish/`**. Cela signifie que vous ne pouvez pas facilement utiliser les modules Hugo pour installer le thème et vous devez opter pour l'installation par sous-module git (recommandé) ou l'installation manuelle. Les [docs d'installation]({{< ref "installation" >}}) expliquent comment installer le thème en utilisant l'une de ces méthodes.

### Structure du projet

Pour tirer parti de la configuration par défaut, votre projet devrait ressembler à quelque chose comme ceci...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # c'est le fichier que nous allons générer
├── config  # config du site
│   └── _default
├── content  # contenu du site
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # layouts personnalisés pour votre site
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # sous-module git ou installation manuelle du thème
```

Cette structure d'exemple ajoute un nouveau type de contenu `projects` avec son propre layout personnalisé ainsi qu'un shortcode personnalisé et un partial étendu. Pourvu que le projet suive cette structure, tout ce qui est requis est de recompiler le fichier `main.css`.

### Installer les dépendances

Pour que cela fonctionne, vous devrez vous déplacer dans le répertoire `themes/blowfish/` et installer les dépendances du projet. Vous aurez besoin de [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) sur votre machine locale pour cette étape.

```shell
cd themes/blowfish
npm install
```

### Exécuter le compilateur Tailwind

Avec les dépendances installées, il ne reste plus qu'à utiliser [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) pour invoquer le compilateur JIT. Retournez à la racine de votre projet Hugo et lancez la commande suivante :

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

C'est une commande un peu laide à cause des chemins impliqués mais essentiellement vous appelez Tailwind CLI et lui passez l'emplacement du fichier de config Tailwind (celui que nous avons regardé ci-dessus), où trouver le fichier `main.css` du thème et ensuite où vous voulez que le fichier CSS compilé soit placé (il va dans le dossier `assets/css/compiled/` de votre projet Hugo).

Le fichier de config scannera automatiquement tout le contenu et les layouts de votre projet ainsi que tous ceux du thème et construira un nouveau fichier CSS qui contient tout le CSS requis pour votre site web. En raison de la façon dont Hugo gère la hiérarchie des fichiers, ce fichier dans votre projet remplacera maintenant automatiquement celui qui vient avec le thème.

Chaque fois que vous faites un changement dans vos layouts et avez besoin de nouveaux styles Tailwind CSS, vous pouvez simplement relancer la commande et générer le nouveau fichier CSS. Vous pouvez aussi ajouter `-w` à la fin de la commande pour exécuter le compilateur JIT en mode watch.

### Créer un script de build

Pour compléter entièrement cette solution, vous pouvez simplifier tout ce processus en ajoutant des alias pour ces commandes, ou faire ce que je fais et ajouter un `package.json` à la racine de votre projet qui contient les scripts nécessaires...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": cross-env "NODE_ENV=development ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": cross-env "NODE_ENV=production ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // et plus...
}
```

Maintenant quand vous voulez travailler sur le design de votre site, vous pouvez invoquer `npm run dev` et le compilateur s'exécutera en mode watch. Quand vous êtes prêt à déployer, lancez `npm run build` et vous aurez un build Tailwind CSS propre.

🙋‍♀️ Si vous avez besoin d'aide, n'hésitez pas à poser une question sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).
