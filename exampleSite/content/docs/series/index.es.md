---
title: "Series"
weight: 12
draft: false
description: "Aprende cómo agrupar artículos en una serie."
slug: "series"
tags: ["series", "documentación"]
series: ["Documentación"]
series_order: 11
seriesOpened: true
---

Blowfish proporciona una función para agrupar un conjunto de artículos bajo una "serie". Colocar un artículo en una serie mostrará el resto de los artículos de la serie en cada página individual y proporcionará una forma rápida de navegar entre ellos. Puedes ver un ejemplo de esto arriba.

## Crear taxonomía
El primer paso para habilitar las series es crear la taxonomía `series`. Para hacer esto, simplemente añade la taxonomía `series` a tu lista de taxonomías en `hugo.toml`.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## Marcar artículos

Luego solo necesitas marcar cada artículo usando el parámetro `series` y `series_order`. El parámetro `series` será el identificador y nombre de la serie en la que estás colocando el artículo (aunque la variable es un array, recomendamos mantener cada artículo en una sola serie). Y `series_order` define el orden de ese artículo dentro de la serie. En el ejemplo siguiente, el artículo es el número `11` en la serie `Documentation`.

```md
series: ["Documentation"]
series_order: 11
```

## Comportamiento de las series
Marcar un artículo como parte de una serie mostrará automáticamente el módulo de series como puedes ver en esta página por ejemplo. Puedes elegir si ese módulo comienza abierto o no usando la variable global `article.seriesOpened` en `params.toml` o el parámetro front matter `seriesOpened` para especificar una anulación a nivel de artículo.
