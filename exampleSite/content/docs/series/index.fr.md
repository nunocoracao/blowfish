---
title: "Séries"
weight: 12
draft: false
description: "Apprenez à regrouper des articles dans une série."
slug: "series"
tags: ["séries", "documentation"]
series: ["Documentation"]
series_order: 11
seriesOpened: true
---

Blowfish propose une fonctionnalité permettant de regrouper un ensemble d'articles sous une "série". Placer un article dans une série affichera les autres articles de la série sur chaque page individuelle et permettra une navigation rapide entre eux. Vous pouvez voir un exemple ci-dessus.

## Créer une taxonomie
La première étape pour activer les séries est de créer la taxonomie `series`. Pour ce faire, ajoutez simplement la taxonomie `series` à votre liste de taxonomies dans `hugo.toml`.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## Marquer les articles

Ensuite, vous devez simplement marquer chaque article en utilisant le paramètre `series` et `series_order`. Le paramètre `series` sera l'identifiant et le nom de la série dans laquelle vous placez l'article (même si la variable est un tableau, nous recommandons de garder chaque article dans une seule série). Et `series_order` définit l'ordre de cet article dans la série. Dans l'exemple ci-dessous, l'article est le numéro `11` dans la série `Documentation`.

```md
series: ["Documentation"]
series_order: 11
```

## Comportement des séries
Marquer un article comme faisant partie d'une série affichera automatiquement le module de série comme vous pouvez le voir sur cette page par exemple. Vous pouvez choisir si ce module démarre ouvert ou non en utilisant la variable globale `article.seriesOpened` dans `params.toml` ou le paramètre front matter `seriesOpened` pour spécifier une valeur différente au niveau de l'article.
