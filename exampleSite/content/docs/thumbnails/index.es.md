---
title: "Miniaturas"
weight: 10
draft: false
description: "Activa las miniaturas para tus artículos."
slug: "thumbnails"
tags: ["miniatura", "configuración", "documentación"]
series: ["Documentación"]
series_order: 6
---

## Miniaturas

Blowfish fue mejorado para facilitar añadir soporte visual a tus publicaciones. Para hacerlo, solo necesitas colocar un archivo de imagen (casi todos los formatos son soportados pero recomendamos `.png` o `.jpg`) que comience con `feature*` dentro del directorio principal de tu artículo, como se muestra en el ejemplo de abajo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Esto le indicará a Blowfish que este artículo tiene una imagen destacada que puede ser usada tanto como miniatura en tu sitio web como para tarjetas <a target="_blank" href="https://oembed.com/">oEmbed</a> en plataformas sociales.

## Estructura de carpetas

Si estás usando archivos `.md` individuales para tus artículos y tienes una estructura de archivos similar a esta:

```shell
content
└── awesome_article.md
```

Necesitas cambiarla de un único archivo Markdown a una carpeta. Crea un directorio con el mismo nombre del artículo, dentro crea un archivo `index.md`. Obtendrás una estructura similar a la de abajo.

```shell
content
└── awesome_article
    └── index.md
```

Luego solo necesitas añadir una imagen como se explicó anteriormente. Si quieres ver un ejemplo de esto, puedes consultar [esta muestra]({{< ref "thumbnail_sample" >}}).

## Imágenes hero

Las miniaturas se usarán por defecto como imágenes hero dentro de cada artículo. Usa el parámetro global `article.showHero` o el parámetro front matter `showHero` para controlar esta característica en todo el sitio o para cada publicación específica. Si quieres anular el estilo de la imagen hero, puedes crear un archivo llamado `hero.html` en `./layouts/partials/` que anulará el partial original del tema.
