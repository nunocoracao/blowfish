---
title: "Múltiples autores"
weight: 8
draft: false
description: "Configura múltiples autores para tus artículos."
slug: "multi-author"
tags: ["autores", "configuración", "documentación"]
series: ["Documentación"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---


Algunos sitios web tienen más de un autor contribuyendo con contenido y por lo tanto requieren más de un único autor predeterminado para todo el sitio. Para esos casos de uso, Blowfish permite a los usuarios extender la lista de autores usando la función de múltiples autores.

Para mantener todo compatible hacia atrás, esta función solo permite la definición de autores adicionales y no cambia de ninguna manera la funcionalidad de autor anterior que se usa a través de archivos de configuración.


## Crear autores

El primer paso para crear nuevos autores es configurar una nueva carpeta en `./data/authors`. Luego puedes simplemente añadir nuevos archivos `json` dentro, uno para cada nuevo autor. El nombre del archivo será la `clave` para ese autor al referenciarlo en tus artículos.

Como ejemplo, vamos a crear un archivo llamado `nunocoracao.json` dentro de `./data/authors`. El contenido del archivo debería ser similar al de abajo. `name`, `image`, `bio` y `social` son los 4 parámetros soportados actualmente para autores. Reflejan las configuraciones disponibles para el autor predeterminado en los archivos de configuración.

_Nota: la clave en el objeto social se usará para obtener uno de los iconos del tema, siéntete libre de usar cualquiera de los iconos disponibles en tu instalación._

```json
{
    "name": "Nuno Coração",
    "image" : "img/nuno_avatar.jpg",
    "bio": "Theme Creator",
    "social": [
        { "linkedin": "https://linkedin.com/in/nunocoracao" },
        { "twitter": "https://twitter.com/nunocoracao" },
        { "instagram": "https://instagram.com/nunocoracao" },
        { "medium": "https://medium.com/@nunocoracao" },
        { "github": "https://github.com/nunocoracao" },
        { "goodreads": "http://goodreads.com/nunocoracao" },
        { "keybase": "https://keybase.io/nunocoracao" },
        { "reddit": "https://reddit.com/user/nunoheart" }
    ]
}
```


## Referenciar autores en artículos

Ahora que has creado un autor, el siguiente paso es referenciarlo en uno o más artículos. En el ejemplo de abajo, referenciamos el autor creado en el paso anterior usando su `clave`.

Esto renderizará un autor adicional usando los datos proporcionados en el archivo `json`. Esta función no cambia de ninguna manera el autor predeterminado configurado para el sitio general, y por lo tanto, puedes controlar ambos por separado. Usando el parámetro `showAuthor`, puedes configurar si mostrar el autor predeterminado, ese es el caso de uso normal para un blog de un solo autor. El nuevo parámetro front matter `authors` te permite definir autores específicamente para un artículo, y serán renderizados independientemente de las configuraciones para el autor del sitio predeterminado.

```md
---
title: "Multiple Authors"
date: 2020-08-10
draft: false
description: "Configure multiple authors for your articles."
slug: "multi-author"
tags: ["authors", "config", "docs"]
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---
```

En el ejemplo, que coincide con el markdown de la página actual, tanto el autor predeterminado como el nuevo serán mostrados. Puedes desplazarte hacia abajo ahora para ver el resultado.

## Crear la taxonomía de autores

Para obtener listas de artículos para cada uno de tus autores puedes configurar la taxonomía `authors`, que abre algunas configuraciones más que podrían ser interesantes. Este es un paso opcional en el proceso que no es requerido para mostrar los autores en tus artículos.

El primer paso es configurar la taxonomía `authors` en tu archivo `hugo.toml`, como en el ejemplo de abajo. Aunque `tag` y `category` están definidos por defecto con Hugo, una vez que añades una sección de taxonomías específica necesitas añadirlos de nuevo, de lo contrario el sitio no los procesará.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

Y eso es básicamente todo. Ahora tendrás páginas que referencian a tus autores y, para cada uno, muestran la lista respectiva de artículos donde participan. También puedes usar `article.showAuthorsBadges` en el archivo de configuración, o `showAuthorsBadges` en cada artículo para elegir si mostrar la taxonomía `authors` como badges en cada elemento de publicación. Como ejemplo, esta documentación está configurada para no mostrar autores pero si miras la muestra referenciada abajo verás los autores mostrados como badges.

Por último, puedes añadir más detalle a cada página de autor para que muestre una pequeña bio, enlaces, o cualquier información que se ajuste a tu caso de uso. Para lograr eso, crea una carpeta con la `clave` para cada autor dentro de `./content/authors` y dentro de cada carpeta coloca un archivo `_index.md`. Para el ejemplo de arriba, terminaríamos con un archivo `.content/authors/nunocoracao/_index.md`. Dentro, puedes configurar el nombre real del autor y el contenido de su página. Los autores en este sitio de documentación están configurados así, por lo que puedes echar un vistazo jugando con el sitio.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Ejemplo

Esta muestra de abajo muestra un ejemplo donde el autor del sitio predeterminado está desactivado y el artículo tiene múltiples autores.

{{< article link="/samples/multiple-authors/" >}}
