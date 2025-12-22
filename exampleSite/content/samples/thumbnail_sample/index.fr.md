---
title: "Miniatures"
date: 2022-09-26
draft: false
description: "Activez les miniatures pour vos articles."
slug: "thumbnail_sample"
tags: ["miniature", "exemple"]
summary: "Un exemple rapide de comment commencer à utiliser les miniatures dans vos articles."
type: 'sample'
---

Un exemple rapide de comment commencer à utiliser les miniatures dans vos articles.

Si votre répertoire moyen pour un article ressemble à ceci :

```shell
content
└── awesome_article.md
```

Vous devez le changer d'un simple fichier markdown en un dossier. Créez un répertoire avec le même nom que l'article, et à l'intérieur créez un fichier `index.md`. Vous obtiendrez une structure similaire à celle ci-dessous.

```shell
content
└── awesome_article
    └── featured.png
```

À l'intérieur de l'article, vous pouvez maintenant ajouter un fichier image (presque tous les formats sont pris en charge mais nous recommandons `.png` ou `.jpg`) qui commence par `feature*`. Exemple ci-dessous.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Cela indiquera à Blowfish que cet article a une image vedette qui peut être utilisée à la fois comme miniature sur votre site web et pour les cartes <a target="_blank" href="https://oembed.com/">oEmbed</a> sur les plateformes sociales. Par exemple, vous pouvez essayer de copier-coller l'URL de cet article dans une plateforme qui affiche les oEmbeds (par exemple Twitter, WhatsApp, Telegram, etc.) et voir ce qui s'affiche.
