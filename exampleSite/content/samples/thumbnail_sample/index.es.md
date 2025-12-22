---
title: "Miniaturas"
date: 2022-09-26
draft: false
description: "Activa las miniaturas para tus artículos."
slug: "thumbnail_sample"
tags: ["miniatura", "ejemplo"]
summary: "Un ejemplo rápido de cómo empezar a usar miniaturas en tus artículos."
type: 'sample'
---

Un ejemplo rápido de cómo empezar a usar miniaturas en tus artículos.

Si tu directorio promedio para un artículo se ve así:

```shell
content
└── awesome_article.md
```

Necesitas cambiarlo de un solo archivo markdown a una carpeta. Crea un directorio con el mismo nombre del artículo, y dentro crea un archivo `index.md`. Obtendrás una estructura similar a la de abajo.

```shell
content
└── awesome_article
    └── featured.png
```

Dentro del artículo ahora puedes agregar un archivo de imagen (casi todos los formatos son compatibles pero recomendamos `.png` o `.jpg`) que comience con `feature*`. Ejemplo abajo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Esto le indicará a Blowfish que este artículo tiene una imagen destacada que se puede usar tanto como miniatura en tu sitio web como para tarjetas <a target="_blank" href="https://oembed.com/">oEmbed</a> en plataformas sociales. Como ejemplo, puedes intentar copiar y pegar la URL de este artículo en una plataforma que muestre oEmbeds (por ejemplo Twitter, WhatsApp, Telegram, etc.) y ver qué se muestra.
