---
title: "Mise en page de la page d'accueil"
featureimage: "images/v3/homepage-layout.png"
weight: 5
draft: false
description: "Configuration de la mise en page de la page d'accueil dans le thème Blowfish."
slug: "homepage-layout"
tags: ["page d'accueil", "mises en page", "documentation"]
series: ["Documentation"]
series_order: 5
---

Blowfish offre des mises en page de page d'accueil flexibles avec des paramètres pour ajuster chaque design. Alternativement, vous pouvez également fournir votre propre modèle et avoir un contrôle total sur le contenu de la page d'accueil.

La mise en page de la page d'accueil est contrôlée par le paramètre `homepage.layout` dans le fichier de configuration `params.toml`. De plus, toutes les mises en page ont l'option d'inclure une liste des [articles récents](#articles-récents).

## Mise en page Profil

La mise en page par défaut est la mise en page profil, idéale pour les sites web personnels et les blogs. Elle met les détails de l'auteur au premier plan en fournissant une image et des liens vers les profils sociaux.

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

Les informations sur l'auteur sont fournies dans le fichier de configuration des langues. Consultez les sections [Premiers Pas]({{< ref "getting-started" >}}) et [Configuration de la langue]({{< ref "configuration##language-and-i18n" >}}) pour les détails des paramètres.

De plus, tout contenu Markdown fourni dans le contenu de la page d'accueil sera placé sous le profil de l'auteur. Cela permet une flexibilité supplémentaire pour afficher une bio ou d'autres contenus personnalisés en utilisant des shortcodes.

Pour activer la mise en page Profil, définissez `homepage.layout = "profile"` dans le fichier de configuration `params.toml`.

## Mise en page Page

La mise en page page est simplement une page de contenu normale qui affiche votre contenu Markdown. Elle est idéale pour les sites web statiques et offre beaucoup de flexibilité.

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

Pour activer la mise en page Page, définissez `homepage.layout = "page"` dans le fichier de configuration `params.toml`.

## Mise en page Hero

La mise en page hero rassemble des idées des mises en page profil et carte. Celle-ci affiche non seulement des informations sur l'auteur du site, mais charge également votre markdown en dessous.

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

Pour activer la mise en page Hero, définissez `homepage.layout = "hero"` et `homepage.homepageImage` dans le fichier de configuration `params.toml`.

## Mise en page Arrière-plan

La mise en page arrière-plan est une version plus fluide de la mise en page hero. Comme pour la mise en page Hero, celle-ci affiche également les informations sur l'auteur du site et charge votre markdown en dessous.

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

Pour activer la mise en page Arrière-plan, définissez `homepage.layout = "background"` et `homepage.homepageImage` dans le fichier de configuration `params.toml`.

## Mise en page Carte

La mise en page carte est une extension de la mise en page page. Elle offre le même niveau de flexibilité en affichant également votre contenu markdown et ajoute une image de carte pour afficher du contenu visuel.

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

Pour activer la mise en page Carte, définissez `homepage.layout = "card"` et `homepage.homepageImage` dans le fichier de configuration `params.toml`.

## Mise en page Landing

La mise en page Landing est conçue pour les sites de produits, les hubs de documentation et les sites personnels qui ont besoin d'une entrée en matière plus affirmée. Elle s'ouvre sur un hero spacieux et éditorial — accroche, titre fort, paragraphe d'introduction et boutons d'appel à l'action — éventuellement adossé à une image hero pleine largeur qui se fond dans l'arrière-plan global, avec une animation d'entrée échelonnée qui est automatiquement désactivée pour les visiteurs préférant réduire les animations. Tout ce qui se trouve sous le hero est du Markdown standard et des shortcodes Blowfish, de sorte que la page complète reste portable et facile à maintenir.

{{< figure src="img/home-landing.png" class="thumbnailshadow" >}}

Pour activer la mise en page Landing, définissez `homepage.layout = "landing"` dans le fichier de configuration `params.toml`.

Le hero est piloté par le front matter de `content/_index.md`. Tous les champs sont optionnels — tout ce que vous omettez n'est simplement pas affiché :

```yaml
---
title: "Build a site that feels unmistakably yours."
heroCaption: "Blowfish" # eyebrow above the title; defaults to the author name
heroLead: "A short statement that expands on the title."
heroButtons:
  - label: "Get started"
    url: "/docs/installation/"
  - label: "Explore the docs"
    url: "/docs/"
    style: "outline" # "primary" (default) or "outline"
---
```

| Front matter | Description |
| ------------ | ----------- |
| `heroCaption` | Petite accroche en majuscules au-dessus du titre. Par défaut, `params.Author.name`. |
| `heroLead` | Paragraphe d'introduction affiché sous le titre. Prend en charge le Markdown. |
| `heroButtons` | Liste de boutons d'appel à l'action (`label`, `url` et `style` optionnel). Utilise le même style que le [shortcode `cta`]({{< ref "shortcodes#cta-button" >}}). |

Le corps Markdown de `_index.md` est rendu sous le hero, de sorte que les statistiques, les grilles de fonctionnalités, les étapes et tous les autres shortcodes peuvent construire le reste de la page. La mise en page Landing se marie bien avec l'option `backgroundCanvas` à l'échelle du site décrite dans la [documentation de configuration]({{< ref "configuration" >}}).


## Mise en page personnalisée

Si les mises en page de page d'accueil intégrées ne sont pas suffisantes pour vos besoins, vous avez la possibilité de fournir votre propre mise en page personnalisée. Cela vous permet d'avoir un contrôle total sur le contenu de la page et vous donne essentiellement une page blanche pour travailler.

Pour activer la mise en page personnalisée, définissez `homepage.layout = "custom"` dans le fichier de configuration `params.toml`.

Avec la valeur de configuration définie, créez un nouveau fichier `custom.html` et placez-le dans `layouts/partials/home/custom.html`. Maintenant, tout ce qui est dans le fichier `custom.html` sera placé dans la zone de contenu de la page d'accueil du site. Vous pouvez utiliser n'importe quel HTML, Tailwind, ou fonctions de templating Hugo que vous souhaitez pour définir votre mise en page.

Pour inclure les [articles récents](#articles-récents) dans la mise en page personnalisée, utilisez le partial `recent-articles/main.html`.

Le site d'exemple inclus utilise la mise en page Landing intégrée et des shortcodes de contenu standard. Visitez le [dépôt GitHub](https://github.com/nunocoracao/blowfish/tree/main/exampleSite) pour voir comment il est configuré.

## Articles récents

Toutes les mises en page de page d'accueil ont l'option d'afficher les articles récents sous le contenu principal de la page. Pour activer cela, définissez simplement le paramètre `homepage.showRecent` sur `true` dans le fichier de configuration `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Les articles listés dans cette section sont dérivés du paramètre `mainSections` qui permet d'utiliser n'importe quels types de contenu que vous utilisez sur votre site web. Par exemple, si vous avez des sections de contenu pour _posts_ et _projects_, vous pourriez définir ce paramètre sur `["posts", "projects"]` et tous les articles de ces deux sections seraient utilisés pour remplir la liste récente. Le thème s'attend à ce que ce paramètre soit un tableau, donc si vous n'utilisez qu'une seule section pour tout votre contenu, vous devriez le définir en conséquence : `["blog"]`.

## Vignettes

Blowfish a été conçu pour qu'il soit facile d'ajouter un support visuel à vos articles. Si vous êtes familier avec la structure des articles Hugo, il vous suffit de placer un fichier image (presque tous les formats sont pris en charge mais nous recommandons `.png` ou `.jpg`) qui commence par `feature*` dans votre dossier d'article. Et c'est tout, Blowfish pourra alors utiliser l'image à la fois comme vignette sur votre site et pour les cartes <a target="_blank" href="https://oembed.com/">oEmbed</a> sur les plateformes sociales.

[Voici]({{< ref "thumbnails" >}}) un guide avec plus d'informations et un [exemple]({{< ref "thumbnail_sample" >}}) si vous voulez voir un exemple.

## Galerie de cartes

Blowfish prend également en charge l'affichage des listes d'articles standard sous forme de galeries de cartes. Vous pouvez configurer cela à la fois pour la section récente sur la page d'accueil et pour les listes d'articles sur tout votre site web. Pour la page d'accueil, vous pouvez utiliser `homepage.cardView` et `homepage.cardViewScreenWidth` ; et pour les listes, utilisez `list.cardView` et `list.cardViewScreenWidth`. Consultez la [documentation de configuration]({{< ref "configuration" >}}) pour plus de détails, et la page d'accueil pour une démo en direct.
