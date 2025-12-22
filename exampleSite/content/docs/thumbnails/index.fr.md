---
title: "Vignettes"
weight: 10
draft: false
description: "Activez les vignettes pour vos articles."
slug: "thumbnails"
tags: ["vignette", "configuration", "documentation"]
series: ["Documentation"]
series_order: 6
---

## Vignettes

Blowfish a été amélioré pour faciliter l'ajout de support visuel à vos publications. Pour ce faire, il vous suffit de placer un fichier image (presque tous les formats sont supportés mais nous recommandons `.png` ou `.jpg`) commençant par `feature*` dans le répertoire principal de votre article, comme illustré dans l'exemple ci-dessous.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Cela indiquera à Blowfish que cet article a une image de fonctionnalité qui peut être utilisée à la fois comme vignette sur votre site web ainsi que pour les cartes <a target="_blank" href="https://oembed.com/">oEmbed</a> sur les plateformes sociales.

## Structure des dossiers

Si vous utilisez des fichiers `.md` individuels pour vos articles et avez une structure de fichiers similaire à celle-ci :

```shell
content
└── awesome_article.md
```

Vous devez la changer d'un fichier Markdown unique en un dossier. Créez un répertoire avec le même nom que l'article, à l'intérieur créez un fichier `index.md`. Vous obtiendrez une structure similaire à celle ci-dessous.

```shell
content
└── awesome_article
    └── index.md
```

Ensuite, il vous suffit d'ajouter une image comme expliqué précédemment. Si vous voulez voir un exemple de ceci, vous pouvez consulter [cet exemple]({{< ref "thumbnail_sample" >}}).

## Images héros

Les vignettes seront utilisées par défaut comme images héros dans chaque article. Utilisez le paramètre global `article.showHero` ou le paramètre front matter `showHero` pour contrôler cette fonctionnalité sur l'ensemble du site ou pour chaque publication spécifique. Si vous voulez remplacer le style de l'image héros, vous pouvez créer un fichier appelé `hero.html` dans `./layouts/partials/` qui remplacera le partial original du thème.
