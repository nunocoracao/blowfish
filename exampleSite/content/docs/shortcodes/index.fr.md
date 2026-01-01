---
title: "Shortcodes"
weight: 6
draft: false
description: "Tous les shortcodes disponibles dans Blowfish."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "documentation"]
series: ["Documentation"]
series_order: 8
---

En plus de tous les [shortcodes Hugo par défaut](https://gohugo.io/content-management/shortcodes/), Blowfish en ajoute quelques-uns supplémentaires pour des fonctionnalités avancées.

## Alert

`alert` affiche son contenu sous forme de boîte de message stylisée dans votre article. C'est utile pour attirer l'attention sur des informations importantes que vous ne voulez pas que le lecteur manque.

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `icon` | **Optionnel.** L'icône à afficher sur le côté gauche.<br>**Par défaut:** `triangle-exclamation` (Consultez le [shortcode icon](#icon) pour plus de détails sur l'utilisation des icônes.) |
| `iconColor` | **Optionnel.** La couleur de l'icône en style CSS basique.<br>Peut être soit des valeurs hexadécimales (`#FFFFFF`) soit des noms de couleurs (`white`)<br>Par défaut choisi en fonction du thème de couleur actuel. |
| `cardColor` | **Optionnel.** La couleur de fond de la carte en style CSS basique.<br>Peut être soit des valeurs hexadécimales (`#FFFFFF`) soit des noms de couleurs (`white`)<br>Par défaut choisi en fonction du thème de couleur actuel. |
| `textColor` | **Optionnel.** La couleur du texte en style CSS basique.<br>Peut être soit des valeurs hexadécimales (`#FFFFFF`) soit des noms de couleurs (`white`)<br>Par défaut choisi en fonction du thème de couleur actuel. |
<!-- prettier-ignore-end -->

L'entrée est écrite en Markdown, vous pouvez donc la formater comme vous le souhaitez.

**Exemple 1 :** Sans paramètres

```md
{{</* alert */>}}
**Attention !** Cette action est destructive !
{{</* /alert */>}}
```

{{< alert >}}
**Attention !** Cette action est destructive !
{{< /alert >}}

**Exemple 2 :** Paramètre non nommé

```md
{{</* alert "twitter" */>}}
N'oubliez pas de me [suivre](https://twitter.com/nunocoracao) sur Twitter.
{{</* /alert */>}}
```

{{< alert "twitter" >}}
N'oubliez pas de me [suivre](https://twitter.com/nunocoracao) sur Twitter.
{{< /alert >}}

**Exemple 3 :** Paramètres nommés

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
Ceci est une erreur !
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
Ceci est une erreur !
{{< /alert >}}

<br/><br/><br/>

## Admonition

Les admonitions vous permettent d'insérer des encadrés d'avertissement accrocheurs dans votre contenu.

Les admonitions servent un objectif similaire au shortcode alert mais sont implémentées via des hooks de rendu Hugo. La différence clé est la syntaxe : les admonitions utilisent la syntaxe Markdown, ce qui les rend plus portables entre différentes plateformes, tandis que les shortcodes sont spécifiques à Hugo. La syntaxe ressemble aux alertes GitHub :

```md
> [!NOTE]
> Une admonition de type Note.

> [!TIP]+ Titre personnalisé
> Une admonition repliable avec un titre personnalisé.
```

> [!NOTE]
> Une admonition de type Note.

> [!TIP]+ Titre personnalisé
> Une admonition repliable avec un titre personnalisé.

Le signe d'alerte (`+` ou `-`) est optionnel pour contrôler si l'admonition est repliée ou non. Notez que le signe d'alerte n'est compatible qu'avec Obsidian.

> [!INFO]- Types supportés
> Les types d'admonition valides incluent les [types d'alerte GitHub](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) et les [types de callout Obsidian](https://help.obsidian.md/callouts). Les types ne sont pas sensibles à la casse.
>
> **Types GitHub :** `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`
> **Types Obsidian :** `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

<br/><br/><br/>

## Article

`Article` intègre un seul article dans un fichier markdown. Le `link` vers le fichier doit être le `.RelPermalink` du fichier à intégrer. Notez que le shortcode n'affichera rien s'il fait référence à sa page parente. _Note : si vous exécutez votre site dans un sous-dossier comme Blowfish (c'est-à-dire /blowfish/), veuillez inclure ce chemin dans le lien._

<!-- prettier-ignore-start -->
| Paramètre | Description                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **Requis.** Le `.RelPermalink` vers l'article cible. |
| `showSummary` | **Optionnel.** Une valeur booléenne indiquant s'il faut afficher le résumé de l'article. Si non défini, la configuration par défaut du site sera utilisée. |
| `compactSummary` | **Optionnel.** Une valeur booléenne indiquant s'il faut afficher le résumé en mode compact. Par défaut false. |
<!-- prettier-ignore-end -->

**Exemple :**

```md
{{</* article link="/docs/welcome/" showSummary=true compactSummary=true */>}}
```

{{< article link="/docs/welcome/" showSummary=true compactSummary=true >}}

<br/><br/><br/>

## Badge

`badge` affiche un composant de badge stylisé qui est utile pour afficher des métadonnées.

**Exemple :**

```md
{{</* badge */>}}
Nouvel article !
{{</* /badge */>}}
```

{{< badge >}}
Nouvel article !
{{< /badge >}}

<br/><br/><br/>

## Button

`button` affiche un composant de bouton stylisé qui peut être utilisé pour mettre en évidence une action principale. Il a trois variables optionnelles `href`, `target` et `rel` qui peuvent être utilisées pour spécifier l'URL, la cible et la relation du lien.

**Exemple :**

```md
{{</* button href="#button" target="_self" */>}}
Appel à l'action
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Appel à l'action
{{< /button >}}

<br/><br/><br/>

## Carousel

`carousel` est utilisé pour présenter plusieurs images de manière interactive et visuellement attrayante. Cela permet à un utilisateur de faire défiler plusieurs images tout en n'occupant que l'espace vertical d'une seule. Toutes les images sont affichées en utilisant la largeur complète du composant parent et le ratio d'aspect que vous définissez avec une valeur par défaut de `16:9`.

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `images` | **Requis.** Une chaîne regex pour correspondre aux noms ou URLs des images. |
| `aspectRatio` | **Optionnel.** Le ratio d'aspect pour le carrousel. Par défaut `16-9`. |
| `interval` | **Optionnel.** L'intervalle pour le défilement automatique, spécifié en millisecondes. Par défaut `2000` (2s) |
<!-- prettier-ignore-end -->

**Exemple 1 :** Ratio d'aspect 16:9 et liste d'images détaillée

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**Exemple 2 :** Ratio d'aspect 21:9 et liste d'images avec regex

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## Chart

`chart` utilise la bibliothèque Chart.js pour intégrer des graphiques dans les articles en utilisant des données structurées simples. Il prend en charge un certain nombre de [différents styles de graphiques](https://www.chartjs.org/docs/latest/samples/) et tout peut être configuré depuis le shortcode. Fournissez simplement les paramètres du graphique entre les balises du shortcode et Chart.js fera le reste.

Consultez la [documentation officielle Chart.js](https://www.chartjs.org/docs/latest/general/) pour les détails sur la syntaxe et les types de graphiques supportés.

**Exemple :**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomate', 'Myrtille', 'Banane', 'Citron vert', 'Orange'],
  datasets: [{
    label: '# de votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

Vous pouvez voir des exemples Chart.js supplémentaires sur la page [exemples de graphiques]({{< ref "charts" >}}).

<br/><br/><br/>

## Code Importer

Ce shortcode permet d'importer facilement du code depuis des sources externes sans copier-coller.

<!-- prettier-ignore-start -->
| Paramètre | Description                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Requis** URL vers un fichier de code hébergé externement.     |
| `type`    | Type de code utilisé pour la coloration syntaxique.                 |
| `startLine` | **Optionnel** Le numéro de ligne à partir duquel commencer l'import.    |
| `endLine` | **Optionnel** Le numéro de ligne auquel terminer l'import.        |

<!-- prettier-ignore-end -->

**Exemple :**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}

<br/><br/>

## Codeberg Card

`codeberg` vous permet de créer rapidement un lien vers un dépôt Codeberg via l'API Codeberg, fournissant des mises à jour en temps réel sur les statistiques telles que les étoiles et les forks.

<!-- prettier-ignore-start -->
| Paramètre | Description                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] dépôt Codeberg au format `utilisateur/repo` |
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```

{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

Blowfish inclut un shortcode `figure` pour ajouter des images au contenu. Le shortcode remplace la fonctionnalité Hugo de base afin de fournir des avantages de performance supplémentaires.

Lorsqu'une image fournie est une ressource de page, elle sera optimisée en utilisant Hugo Pipes et mise à l'échelle pour fournir des images appropriées aux différentes résolutions d'appareils. Si un asset statique ou une URL vers une image externe est fourni, il sera inclus tel quel sans aucun traitement d'image par Hugo.

Le shortcode `figure` accepte six paramètres :

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `src` | **Requis.** Le chemin/nom de fichier local ou l'URL de l'image. Lors de la fourniture d'un chemin et d'un nom de fichier, le thème tentera de localiser l'image en utilisant l'ordre de recherche suivant : Premièrement, comme une [ressource de page](https://gohugo.io/content-management/page-resources/) groupée avec la page ; puis un asset dans le répertoire `assets/` ; et enfin, une image statique dans le répertoire `static/`. |
| `alt` | [Description textuelle alternative](https://moz.com/learn/seo/alt-text) pour l'image. |
| `caption` | Markdown pour la légende de l'image, qui sera affichée sous l'image. |
| `class` | Classes CSS supplémentaires à appliquer à l'image. |
| `href` | URL vers laquelle l'image doit être liée. |
| `target` | L'attribut cible pour l'URL `href`. |
| `nozoom` | `nozoom=true` désactive la fonctionnalité de "zoom" de l'image. C'est particulièrement utile en combinaison avec un lien `href`. |
| `default` | Paramètre spécial pour revenir au comportement `figure` Hugo par défaut. Fournissez simplement `default=true` puis utilisez la [syntaxe de shortcode Hugo](https://gohugo.io/content-management/shortcodes/#figure) normale. |
<!-- prettier-ignore-end -->

Blowfish prend également en charge la conversion automatique des images incluses en utilisant la syntaxe Markdown standard. Utilisez simplement le format suivant et le thème s'occupera du reste :

```md
![Texte alternatif](image.jpg "Légende de l'image")
```

**Exemple :**

```md
{{</* figure
    src="abstract.jpg"
    alt="Œuvre d'art abstraite violette"
    caption="Photo par [Jr Korpa](https://unsplash.com/@jrkorpa) sur [Unsplash](https://unsplash.com/)"
    */>}}

<!-- OU -->

![Œuvre d'art abstraite violette](abstract.jpg "Photo par [Jr Korpa](https://unsplash.com/@jrkorpa) sur [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Photo par [Jr Korpa](https://unsplash.com/@jrkorpa) sur [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Forgejo Card

`forgejo` vous permet de créer rapidement un lien vers un dépôt Forgejo via l'API Forgejo, fournissant des mises à jour en temps réel sur les statistiques telles que les étoiles et les forks.

<!-- prettier-ignore-start -->
| Paramètre | Description                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] dépôt Forgejo au format `utilisateur/repo`|
| `server`  | [String] URL du serveur comme `https://v11.next.forgejo.org`|
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" */>}}
```

{{< forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" >}}

<br/><br/><br/>

## Gallery

`gallery` vous permet de présenter plusieurs images à la fois, de manière responsive avec des mises en page plus variées et intéressantes.

Pour ajouter des images à la galerie, utilisez des balises `img` pour chaque image et ajoutez `class="grid-wXX"` pour que la galerie puisse identifier la largeur de colonne pour chaque image. Les largeurs disponibles par défaut commencent à 10% et vont jusqu'à 100% par incréments de 5%. Par exemple, pour définir la largeur à 65%, définissez la classe sur `grid-w65`. De plus, des largeurs pour 33% et 66% sont également disponibles pour construire des galeries à 3 colonnes. Vous pouvez également utiliser les indicateurs responsive de Tailwind pour avoir une grille responsive.

**Exemple 1 : Galerie normale**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>

**Exemple 2 : Galerie responsive**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

Le shortcode `gist` vous permet d'intégrer un GitHub Gist directement dans votre contenu en spécifiant l'utilisateur du Gist, l'ID, et optionnellement un fichier spécifique.

| Paramètre      | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | [String] Nom d'utilisateur GitHub                                           |
| `[1]`          | [String] ID du Gist                                                   |
| `[2]` (optionnel)| [String] Nom de fichier dans le Gist à intégrer (optionnel)             |

**Exemple 1 : Intégrer un Gist entier**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
````

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**Exemple 2 : Intégrer un fichier spécifique du Gist**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

## Gitea Card

`gitea` vous permet de créer rapidement un lien vers un dépôt Gitea via l'API Gitea, fournissant des mises à jour en temps réel sur les statistiques telles que les étoiles et les forks.

<!-- prettier-ignore-start -->
| Paramètre | Description                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] dépôt Gitea au format `utilisateur/repo`  |
| `server`  | [String] URL du serveur comme `https://git.fsfe.org`       |
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```

{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub Card

`github` vous permet de créer rapidement un lien vers un dépôt GitHub, tout en affichant et mettant à jour en temps réel les statistiques le concernant, comme le nombre d'étoiles et de forks.

<!-- prettier-ignore-start -->
| Paramètre       | Description                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | [String] dépôt GitHub au format `utilisateur/repo`         |
| `showThumbnail` | **Optionnel** [boolean] affiche une vignette pour le dépôt |
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* github repo="nunocoracao/blowfish" showThumbnail=true */>}}
```

{{< github repo="nunocoracao/blowfish" showThumbnail=true >}}

<br/><br/><br/>

## GitLab Card

`gitlab` vous permet de créer rapidement un lien vers un projet GitLab (le terme GitLab pour dépôt).
Il affiche les statistiques en temps réel le concernant, comme le nombre d'étoiles et de forks.
Contrairement à `github`, il ne peut pas afficher le langage de programmation principal d'un projet.
Enfin, une URL d'instance GitLab personnalisée peut être fournie, tant que le point de terminaison `api/v4/projects/` est disponible, ce qui rend ce shortcode compatible avec la plupart des déploiements auto-hébergés / entreprise.

<!-- prettier-ignore-start -->
| Paramètre   | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `projectID` | [String] ID numérique du projet GitLab                                       |
| `baseURL`   | [String] URL optionnelle de l'instance GitLab, par défaut `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## Hugging Face Card

`huggingface` vous permet de créer rapidement un lien vers un modèle ou un dataset Hugging Face, affichant des informations en temps réel comme le nombre de likes et de téléchargements, ainsi que le type et la description.

| Paramètre  | Description                                                    |
|------------|----------------------------------------------------------------|
| `model`    | [String] Modèle Hugging Face au format `utilisateur/modèle` |
| `dataset`  | [String] Dataset Hugging Face au format `utilisateur/dataset` |

**Note :** Utilisez soit le paramètre `model` soit `dataset`, pas les deux.

**Exemple 1 (Modèle) :**

```md
{{</* huggingface model="google-bert/bert-base-uncased" */>}}
```

{{< huggingface model="google-bert/bert-base-uncased" >}}

**Exemple 2 (Dataset) :**

```md
{{</* huggingface dataset="stanfordnlp/imdb" */>}}
```

{{< huggingface dataset="stanfordnlp/imdb" >}}

<br/><br/><br/>

## Icon

`icon` affiche une icône SVG et prend le nom de l'icône comme seul paramètre. L'icône est mise à l'échelle pour correspondre à la taille du texte actuel.

**Exemple :**

```md
{{</* icon "github" */>}}
```

**Sortie :** {{< icon "github" >}}

Les icônes sont remplies en utilisant les pipelines Hugo, ce qui les rend très flexibles. Blowfish inclut un certain nombre d'icônes intégrées pour les réseaux sociaux, les liens et d'autres usages. Consultez la page [exemples d'icônes]({{< ref "samples/icons" >}}) pour une liste complète des icônes supportées.

Des icônes personnalisées peuvent être ajoutées en fournissant vos propres assets d'icônes dans le répertoire `assets/icons/` de votre projet. L'icône peut ensuite être référencée dans le shortcode en utilisant le nom du fichier SVG sans l'extension `.svg`.

Les icônes peuvent également être utilisées dans les partials en appelant le [partial icon]({{< ref "partials#icon" >}}).

<br/><br/><br/>

## KaTeX

Le shortcode `katex` peut être utilisé pour ajouter des expressions mathématiques au contenu des articles en utilisant le package KaTeX. Consultez la référence en ligne des [fonctions TeX supportées](https://katex.org/docs/supported.html) pour la syntaxe disponible.

Pour inclure des expressions mathématiques dans un article, placez simplement le shortcode n'importe où dans le contenu. Il ne doit être inclus qu'une fois par article et KaTeX rendra automatiquement tout le markup de cette page. Les notations inline et bloc sont supportées.

La notation inline peut être générée en entourant l'expression des délimiteurs `\(` et `\)`. Alternativement, la notation bloc peut être générée en utilisant les délimiteurs `$$`.

**Exemple :**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

Consultez la page [exemples de notation mathématique]({{< ref "mathematical-notation" >}}) pour plus d'exemples.

<br/><br/><br/>

## Keyword

Le composant `keyword` peut être utilisé pour mettre en évidence visuellement certains mots ou phrases importants, par exemple les compétences professionnelles, etc. Le shortcode `keywordList` peut être utilisé pour regrouper plusieurs éléments `keyword`. Chaque élément peut avoir les propriétés suivantes.

<!-- prettier-ignore-start -->
| Paramètre | Description                             |
| --------- | --------------------------------------- |
| `icon`    | Icône optionnelle à utiliser dans le keyword |
<!-- prettier-ignore-end -->

L'entrée est écrite en Markdown, vous pouvez donc la formater comme vous le souhaitez.

**Exemple 1 :**

```md
{{</* keyword */>}} *Super* compétence {{</* /keyword */>}}
```

{{< keyword >}} _Super_ compétence {{< /keyword >}}

**Exemple 2 :**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} Compétence **importante** {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} Compétence *autonome* {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} Compétence **importante** {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} Compétence _autonome_ {{< /keyword >}}

<br/><br/><br/>

## Lead

`lead` est utilisé pour mettre en évidence le début d'un article. Il peut être utilisé pour styliser une introduction ou pour attirer l'attention sur une information importante. Entourez simplement tout contenu Markdown dans le shortcode `lead`.

**Exemple :**

```md
{{</* lead */>}}
Quand la vie te donne des citrons, fais de la limonade.
{{</* /lead */>}}
```

{{< lead >}}
Quand la vie te donne des citrons, fais de la limonade.
{{< /lead >}}

<br/><br/><br/>

## List

`List` affichera une liste des articles récents. Ce shortcode nécessite une valeur limite pour contraindre la liste. De plus, il supporte un `where` et un `value` pour filtrer les articles par leurs paramètres. Notez que ce shortcode n'affichera pas sa page parente mais elle comptera pour la valeur limite.

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `limit` | **Requis.** Le nombre d'articles récents à afficher. |
| `title` | Titre optionnel pour la liste, par défaut `Recent` |
| `cardView` | Vue en carte optionnelle activée pour la liste, par défaut `false` |
| `where` | La variable à utiliser pour la requête des articles, par exemple `Type` |
| `value` | La valeur qui devra correspondre au paramètre défini dans `where` pour la requête des articles, par exemple pour `where` == `Type` une valeur valide pourrait être `sample` |

{{< alert >}}
Les valeurs `where` et `value` sont utilisées dans la requête suivante `where .Site.RegularPages $where $value` dans le code du shortcode. Consultez les [docs Hugo](https://gohugo.io/methods/page/) pour en savoir plus sur les paramètres disponibles.
{{</ alert >}}

<!-- prettier-ignore-end -->

**Exemple #1 :**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**Exemple #2 :**

```md
{{</* list title="Exemples" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## LTR/RTL

`ltr` et `rtl` vous permettent de mélanger vos contenus. De nombreux utilisateurs de langues RTL veulent inclure des parties du contenu en LTR. Ce shortcode vous permettra de le faire, et en utilisant `%` comme délimiteur externe dans le shortcode [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown), tout markdown à l'intérieur sera rendu normalement.

**Exemple :**

```md
- Ceci est une liste markdown.
- Direction LTR par défaut
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- Ceci est une liste markdown.
- Direction LTR par défaut
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown Importer

Ce shortcode vous permet d'importer des fichiers markdown depuis des sources externes. C'est utile pour inclure du contenu d'autres dépôts ou sites web sans avoir à copier-coller le contenu.

<!-- prettier-ignore-start -->
| Paramètre | Description                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Requis** URL vers un fichier markdown hébergé externement. |

<!-- prettier-ignore-end -->

**Exemple :**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

## Mermaid

`mermaid` vous permet de dessiner des diagrammes et visualisations détaillés en utilisant du texte. Il utilise Mermaid en arrière-plan et supporte une grande variété de diagrammes, graphiques et autres formats de sortie.

Écrivez simplement votre syntaxe Mermaid dans le shortcode `mermaid` et laissez le plugin faire le reste.

Consultez la [documentation officielle Mermaid](https://mermaid-js.github.io/) pour les détails sur la syntaxe et les types de diagrammes supportés.

**Exemple :**

```md
{{</* mermaid */>}}
graph LR;
A[Citrons]-->B[Limonade];
B-->C[Profit]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

Vous pouvez voir des exemples Mermaid supplémentaires sur la page [exemples de diagrammes et organigrammes]({{< ref "diagrams-flowcharts" >}}).

<br/><br/><br/>

## Swatches

`swatches` affiche un ensemble de jusqu'à trois couleurs différentes pour présenter des éléments de couleur comme une palette de couleurs. Ce shortcode prend les codes `HEX` de chaque couleur et crée les éléments visuels pour chacune.

**Exemple**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**Sortie**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## Tabs

Le shortcode `tabs` est couramment utilisé pour présenter différentes variantes d'une étape particulière. Par exemple, il peut être utilisé pour montrer comment installer VS Code sur différentes plateformes.

**Exemple**

`````md
{{</* tabs */>}}

    {{</* tab label="Windows" */>}}
    Installer avec Chocolatey :

    ```pwsh
    choco install vscode.install
    ```

    ou installer avec WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{</* /tab */>}}

    {{</* tab label="macOS" */>}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{</* /tab */>}}

    {{</* tab label="Linux" */>}}
    Voir la [documentation](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{</* /tab */>}}

{{</* /tabs */>}}
`````

**Sortie**

{{< tabs >}}

    {{< tab label="Windows" >}}
    Installer avec Chocolatey :

    ```pwsh
    choco install vscode.install
    ```

    ou installer avec WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{< /tab >}}

    {{< tab label="macOS" >}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{< /tab >}}

    {{< tab label="Linux" >}}
    Voir la [documentation](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{< /tab >}}

{{< /tabs >}}

<br/><br/><br/>

## Timeline

Le `timeline` crée une timeline visuelle qui peut être utilisée dans différents cas d'utilisation, par exemple l'expérience professionnelle, les réalisations d'un projet, etc. Le shortcode `timeline` repose sur le sous-shortcode `timelineItem` pour définir chaque élément dans la timeline principale. Chaque élément peut avoir les propriétés suivantes.

<!-- prettier-ignore-start -->
| Paramètre   | Description                                  |
| ----------- | -------------------------------------------- |
| `md`        | Rendre le contenu en Markdown (true/false)  |
| `icon`      | L'icône à utiliser dans les visuels de la timeline  |
| `header`    | En-tête pour chaque entrée                        |
| `badge`     | Texte à placer dans le badge en haut à droite     |
| `subheader` | Sous-en-tête de l'entrée                            |

<!-- prettier-ignore-end -->

**Exemple :**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="En-tête" badge="Test badge" subheader="Sous-en-tête" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}


{{</* timelineItem icon="code" header="Un autre super en-tête" badge="date - présent" subheader="Super sous-en-tête" */>}}
Avec du code HTML
<ul>
  <li>Café</li>
  <li>Thé</li>
  <li>Lait</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="GÉNIAL" */>}}
Avec d'autres shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Un autre super en-tête"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader">}}
Avec du code HTML
<ul>
  <li>Café</li>
  <li>Thé</li>
  <li>Lait</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
Avec d'autres shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{</ timelineItem >}}
{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="nunocoracao/blowfish" >}}
{{</ timelineItem >}}
{{</ timeline >}}

<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) est l'outil JavaScript le plus polyvalent pour créer des effets de machine à écrire sur la planète. Avec une configuration simple, il vous permet de taper des chaînes simples ou multiples qui font des retours à la ligne, se suppriment et se remplacent mutuellement, et il peut même gérer des chaînes contenant du HTML complexe.

Blowfish implémente un sous-ensemble des fonctionnalités TypeIt en utilisant un `shortcode`. Écrivez votre texte dans le shortcode `typeit` et utilisez les paramètres suivants pour configurer le comportement souhaité.

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `tag` | [String] Balise `html` qui sera utilisée pour rendre les chaînes. |
| `classList` | [String] Liste de classes `css` à appliquer à l'élément `html`. |
| `initialString` | [String] Chaîne initiale qui apparaîtra écrite et sera remplacée. |
| `speed` | [number] Vitesse de frappe, mesurée en millisecondes entre chaque étape. |
| `lifeLike` | [boolean] Rend le rythme de frappe irrégulier, comme si une vraie personne le faisait. |
| `startDelay` | [number] Le temps avant que le plugin commence à taper après avoir été initialisé. |
| `breakLines` | [boolean] Si plusieurs chaînes sont imprimées les unes sur les autres (true), ou si elles sont supprimées et remplacées les unes par les autres (false). |
| `waitUntilVisible` | [boolean] Détermine si l'instance commencera au chargement ou seulement lorsque l'élément cible devient visible dans le viewport. Par défaut `true` |
| `loop` | [boolean] Si vos chaînes seront continuellement répétées après la complétion |

<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**Exemple 2 :**

```md
{{</* typeit
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**Exemple 3 :**

```md
{{</* typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
"Franchement, ma chère, c'est le cadet de mes soucis." Autant en emporte le vent (1939)
"Je vais lui faire une offre qu'il ne pourra pas refuser." Le Parrain (1972)
"Toto, j'ai l'impression que nous ne sommes plus au Kansas." Le Magicien d'Oz (1939)
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"Frankly, my dear, I don't give a damn." Gone with the Wind (1939)
"I'm gonna make him an offer he can't refuse." The Godfather (1972)
"Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz (1939)
{{< /typeit >}}

<br/><br/><br/>

## Video

Blowfish inclut un shortcode `video` pour intégrer des vidéos locales ou externes dans le contenu. Le shortcode génère un conteneur `<figure>` avec un lecteur vidéo adaptatif et une légende facultative.

Le shortcode `video` accepte les paramètres suivants :

<!-- prettier-ignore-start -->
| Paramètre | Description |
| --- | --- |
| `src` | **Requis.** URL de la vidéo ou chemin local. Ordre de recherche local : ressource de page → `assets/` → `static/`. |
| `poster` | Image d'affiche optionnelle (URL ou chemin local). Si omise, le shortcode tente une image du même nom dans le bundle de page. |
| `caption` | Légende Markdown optionnelle affichée sous la vidéo. |
| `autoplay` | `true`/`false`. Active la lecture automatique quand `true`. Par défaut : `false`. |
| `loop` | `true`/`false`. Boucle quand `true`. Par défaut : `false`. |
| `muted` | `true`/`false`. Met en sourdine quand `true`. Par défaut : `false`. |
| `controls` | `true`/`false`. Affiche les contrôles de lecture par défaut du navigateur quand `true`. Par défaut : `true`. |
| `playsinline` | `true`/`false`. Lecture en ligne sur mobile quand `true`. Par défaut : `true`. |
| `preload` | `metadata` (charge les infos), `none` (économise la bande passante) ou `auto` (précharge davantage). Par défaut : `metadata`. |
| `start` | Temps de début optionnel en secondes. |
| `end` | Temps de fin optionnel en secondes. |
| `ratio` | Ratio d'aspect réservé pour le lecteur. Prend en charge `16/9`, `4/3`, `1/1` ou `W/H` personnalisé. Par défaut : `16/9`. |
| `fit` | Ajustement de la vidéo dans le ratio : `contain` (pas de recadrage), `cover` (recadre pour remplir), `fill` (étire). Par défaut : `contain`. |
<!-- prettier-ignore-end -->

Si le navigateur ne peut pas lire la vidéo, le lecteur affiche un message minimal en anglais avec un lien de téléchargement.

**Exemple :**

```md
{{</* video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Démo du domaine public** — vidéo et affiche CC0."
    loop=true
    muted=true
*/>}}
```

{{< video
  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
  caption="**Démo du domaine public** — vidéo et affiche CC0."
  loop=true
  muted=true
>}}

<br/><br/><br/>

## Youtube Lite

Un raccourci pour intégrer des vidéos YouTube en utilisant la bibliothèque [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed). Cette bibliothèque est une alternative légère aux intégrations YouTube standard, et elle est conçue pour être plus rapide et plus efficace.

<!-- prettier-ignore-start -->
| Paramètre | Description                                  |
| --------- | -------------------------------------------- |
| `id`      | [String] ID de la vidéo YouTube à intégrer.          |
| `label`   | [String] Libellé pour la vidéo                 |
| `params`  | [String] Paramètres supplémentaires pour la lecture vidéo |
<!-- prettier-ignore-end -->

**Exemple 1 :**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Démo Blowfish-tools" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**Exemple 2 :**

Vous pouvez utiliser tous les [paramètres du lecteur](https://developers.google.com/youtube/player_parameters#Parameters) YouTube pour la variable `params`, comme démontré ci-dessous :

> Cette vidéo démarrera après 130 secondes (2m10)

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Démo Blowfish-tools" params="start=130" */>}}
```

> Cette vidéo n'aura pas de contrôles d'interface utilisateur, démarrera à 130 secondes et s'arrêtera 10 secondes plus tard.

Pour concaténer plusieurs options comme indiqué ci-dessous, vous devez ajouter le caractère `&` entre elles.

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Démo Blowfish-tools" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

Plus d'informations peuvent être trouvées sur le [repo GitHub youtubeLite](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters) et la page [paramètres du lecteur](https://developers.google.com/youtube/player_parameters#Parameters) de YouTube.
