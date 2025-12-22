---
title: "Diseño de página de inicio"
weight: 5
draft: false
description: "Configuración del diseño de la página de inicio en el tema Blowfish."
slug: "homepage-layout"
tags: ["página de inicio", "diseños", "documentación"]
series: ["Documentación"]
series_order: 5
---

Blowfish proporciona un diseño de página de inicio totalmente flexible. Hay dos plantillas principales para elegir con configuraciones adicionales para ajustar el diseño. Alternativamente, también puedes proporcionar tu propia plantilla y tener control total sobre el contenido de la página de inicio.

El diseño de la página de inicio está controlado por la configuración `homepage.layout` en el archivo de configuración `params.toml`. Además, todos los diseños tienen la opción de incluir una lista de [artículos recientes](#artículos-recientes).

## Diseño Perfil

El diseño predeterminado es el diseño de perfil, que es ideal para sitios web personales y blogs. Pone los detalles del autor en primer plano proporcionando una imagen y enlaces a perfiles sociales.

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

La información del autor se proporciona en el archivo de configuración de idiomas. Consulta las secciones [Primeros Pasos]({{< ref "getting-started" >}}) y [Configuración de idioma]({{< ref "configuration##language-and-i18n" >}}) para detalles de los parámetros.

Además, cualquier contenido Markdown que se proporcione en el contenido de la página de inicio se colocará debajo del perfil del autor. Esto permite flexibilidad adicional para mostrar una biografía u otro contenido personalizado usando shortcodes.

Para habilitar el diseño Perfil, establece `homepage.layout = "profile"` en el archivo de configuración `params.toml`.

## Diseño Página

El diseño de página es simplemente una página de contenido normal que muestra tu contenido Markdown. Es ideal para sitios web estáticos y proporciona mucha flexibilidad.

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

Para habilitar el diseño Página, establece `homepage.layout = "page"` en el archivo de configuración `params.toml`.

## Diseño Hero

El diseño hero combina ideas de los diseños de perfil y tarjeta. Este no solo muestra información sobre el autor del sitio sino que también carga tu markdown debajo.

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

Para habilitar el diseño Hero, establece `homepage.layout = "hero"` y `homepage.homepageImage` en el archivo de configuración `params.toml`.

## Diseño Fondo

El diseño de fondo es una versión más suave del diseño hero. Como en el diseño Hero, este también muestra información sobre el autor del sitio y carga tu markdown debajo.

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

Para habilitar el diseño Fondo, establece `homepage.layout = "background"` y `homepage.homepageImage` en el archivo de configuración `params.toml`.

## Diseño Tarjeta

El diseño de tarjeta es una extensión del diseño de página. Proporciona el mismo nivel de flexibilidad mostrando también tu contenido markdown y añade una imagen de tarjeta para mostrar contenido visual.

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

Para habilitar el diseño Tarjeta, establece `homepage.layout = "card"` y `homepage.homepageImage` en el archivo de configuración `params.toml`.


## Diseño personalizado

Si los diseños de página de inicio integrados no son suficientes para tus necesidades, tienes la opción de proporcionar tu propio diseño personalizado. Esto te permite tener control total sobre el contenido de la página y esencialmente te da una página en blanco para trabajar.

Para habilitar el diseño personalizado, establece `homepage.layout = "custom"` en el archivo de configuración `params.toml`.

Con el valor de configuración establecido, crea un nuevo archivo `custom.html` y colócalo en `layouts/partials/home/custom.html`. Ahora, lo que esté en el archivo `custom.html` se colocará en el área de contenido de la página de inicio del sitio. Puedes usar cualquier HTML, Tailwind o funciones de plantillas Hugo que desees para definir tu diseño.

Para incluir [artículos recientes](#artículos-recientes) en el diseño personalizado, usa el partial `recent-articles/main.html`.

Como ejemplo, la [página de inicio]({{< ref "/" >}}) de este sitio usa el diseño personalizado para permitir alternar entre los diseños de perfil y página. Visita el [repositorio de GitHub](https://github.com/nunocoracao/blowfish/blob/main/exampleSite/layouts/partials/home/custom.html) para ver cómo funciona.

## Artículos recientes

Todos los diseños de página de inicio tienen la opción de mostrar artículos recientes debajo del contenido principal de la página. Para habilitar esto, simplemente establece la configuración `homepage.showRecent` en `true` en el archivo de configuración `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Los artículos listados en esta sección se derivan de la configuración `mainSections` que permite cualquier tipo de contenido que estés usando en tu sitio web. Por ejemplo, si tienes secciones de contenido para _posts_ y _projects_ podrías establecer esta configuración en `["posts", "projects"]` y todos los artículos en estas dos secciones se usarían para llenar la lista de recientes. El tema espera que esta configuración sea un array, así que si solo usas una sección para todo tu contenido, deberías establecerlo así: `["blog"]`.

## Miniaturas

Blowfish fue construido para que sea fácil agregar soporte visual a tus artículos. Si estás familiarizado con la estructura de artículos de Hugo, solo necesitas colocar un archivo de imagen (casi todos los formatos son compatibles pero recomendamos `.png` o `.jpg`) que comience con `feature*` dentro de tu carpeta de artículo. Y eso es todo, Blowfish podrá usar la imagen tanto como miniatura dentro de tu sitio web como para tarjetas <a target="_blank" href="https://oembed.com/">oEmbed</a> en plataformas sociales.

[Aquí]({{< ref "thumbnails" >}}) hay una guía con más información y un [ejemplo]({{< ref "thumbnail_sample" >}}) si quieres ver un ejemplo.

## Galería de tarjetas

Blowfish también admite mostrar las listas estándar de artículos como galerías de tarjetas. Puedes configurar esto tanto para la sección de recientes en la página de inicio como para las listas de artículos en todo tu sitio web. Para la página de inicio puedes usar `homepage.cardView` y `homepage.cardViewScreenWidth`; y para las listas usa `list.cardView` y `list.cardViewScreenWidth`. Consulta la [documentación de configuración]({{< ref "configuration" >}}) para más detalles, y la página de inicio para una demostración en vivo.
