---
title: "Primeros Pasos"
weight: 3
draft: false
description: "Todas las variables de front matter disponibles en Blowfish."
slug: "getting-started"
tags: ["instalación", "documentación"]
series: ["Documentación"]
series_order: 3
---

{{< alert >}}
Esta sección asume que ya has [instalado el tema Blowfish]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
Acabamos de lanzar una herramienta CLI para ayudarte a empezar con Blowfish. Te ayudará con la instalación y configuración. Instala la herramienta CLI globalmente usando:
```bash
npx blowfish-tools
```
{{< /alert >}}

Los archivos de configuración que vienen con Blowfish contienen todas las configuraciones posibles que el tema reconoce. Por defecto, muchas de estas están comentadas, pero puedes simplemente descomentarlas para activar o cambiar una característica específica.

## Configuración básica

Antes de crear cualquier contenido, hay algunas cosas que debes configurar para una nueva instalación. Comenzando en el archivo `hugo.toml`, establece los parámetros `baseURL` y `languageCode`. El `languageCode` debe configurarse con el idioma principal que usarás para escribir tu contenido.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "es"
```

El siguiente paso es configurar los ajustes de idioma. Aunque Blowfish admite configuraciones multilingües, por ahora, solo configura el idioma principal.

Localiza el archivo `languages.en.toml` en la carpeta de configuración. Si tu idioma principal es el inglés, puedes usar este archivo tal cual. De lo contrario, renómbralo para que incluya el código de idioma correcto en el nombre del archivo. Por ejemplo, para español, renombra el archivo a `languages.es.toml`.

{{< alert >}}
Ten en cuenta que el código de idioma en el nombre del archivo de configuración de idioma debe coincidir con la configuración `languageCode` en `hugo.toml`.
{{< /alert >}}

```toml
# config/_default/languages.es.toml

title = "Mi sitio web increíble"

[params.author]
name = "Mi nombre"
image = "img/author.jpg"
headline = "Un ser humano generalmente increíble"
bio = "Un poco sobre mí"
links = [
  { twitter = "https://twitter.com/username" }
]
```

La configuración `[params.author]` determina cómo se muestra la información del autor en el sitio web. La imagen debe colocarse en la carpeta `assets/` del sitio. Los enlaces se mostrarán en el orden en que están listados.

Si necesitas más detalles, se cubre información adicional sobre cada una de estas opciones de configuración en la sección [Configuración]({{< ref "configuration" >}}).

## Esquemas de colores

Blowfish viene con varios esquemas de colores listos para usar. Puedes probar los esquemas integrados a continuación:

{{< theme-switcher >}}

Cada esquema de colores en Blowfish está construido sobre una paleta de tres colores que se usa consistentemente en todo el tema. Cada uno de estos colores principales está basado en las paletas de colores de diez tonos incluidas en [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

Aunque estos son los esquemas predeterminados, también puedes crear los tuyos propios. Consulta la sección [Personalización Avanzada]({{< ref "advanced-customisation#colour-schemes" >}}) para más detalles.

## Organización del contenido

Por defecto, Blowfish no te obliga a usar un tipo de contenido particular. Al hacerlo, eres libre de definir tu contenido como desees. Podrías preferir _páginas_ para un sitio estático, _publicaciones_ para un blog, o _proyectos_ para un portafolio.

Aquí hay una descripción general rápida de un proyecto Blowfish básico. Todo el contenido se coloca dentro de la carpeta `content`:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

Es importante tener una comprensión firme de cómo Hugo espera que se organice el contenido, ya que el tema está diseñado para aprovechar al máximo los bundles de páginas de Hugo. Asegúrate de leer la [documentación oficial de Hugo](https://gohugo.io/content-management/organization/) para más información.

Blowfish también es flexible cuando se trata de taxonomías. Algunas personas prefieren usar _tags_ y _categorías_ para agrupar su contenido, otros prefieren usar _temas_.

Hugo usa por defecto posts, tags y categorías, y esto funcionará bien si eso es lo que quieres. Sin embargo, si deseas personalizar esto, puedes hacerlo creando un archivo de configuración `taxonomies.toml`:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

Esto reemplazará los _tags_ y _categorías_ predeterminados con _temas_. Consulta la [documentación de taxonomías de Hugo](https://gohugo.io/content-management/taxonomies/) para más información sobre cómo nombrar taxonomías.

Cuando creas una nueva taxonomía, necesitarás ajustar los enlaces de navegación en el sitio web para apuntar a las secciones correctas, lo cual se cubre a continuación.

## Menús

Blowfish tiene dos menús que se pueden personalizar para adaptarse al contenido y diseño de tu sitio. El menú `main` aparece en el encabezado del sitio y el menú `footer` aparece en la parte inferior de la página justo antes del aviso de copyright.

Ambos menús se configuran en el archivo `menus.es.toml`. De manera similar al archivo de configuración de idiomas, si deseas usar otro idioma, renombra este archivo y reemplaza `en` con el código de idioma que deseas usar.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Temas"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Privacidad"
  url = "https://external-link"
```

El parámetro `name` especifica el texto que se usa en el enlace del menú. También puedes proporcionar opcionalmente un `title` que llena el atributo title HTML para el enlace.

El parámetro `pageRef` te permite referenciar fácilmente páginas de contenido y taxonomías de Hugo. Es la forma más rápida de configurar el menú ya que puedes simplemente referirte a cualquier elemento de contenido de Hugo y automáticamente construirá el enlace correcto. Para enlazar a URLs externas, se puede usar el parámetro `url`.

El parámetro `pre` te permite colocar un icono del [conjunto de iconos de Blowfish]({{< ref "samples/icons" >}}) en la entrada del menú. Este parámetro se puede usar con el parámetro `name` o por sí solo. Si quieres usar múltiples entradas de menú con solo iconos, por favor establece el parámetro `identifier`, de lo contrario Hugo usará por defecto el tag de nombre como id y probablemente no mostrará todas las entradas del menú.

Los enlaces del menú se ordenarán del `weight` más bajo al más alto, y luego alfabéticamente por `name`.

Ambos menús son completamente opcionales y pueden comentarse si no se necesitan. Usa la plantilla proporcionada en el archivo como guía.

### Menús anidados

El tema también admite menús anidados. Para usarlos, solo necesitas definir una entrada padre en `menu.toml` y sus submenús usando el parámetro `parent` para referenciar al padre. Todas las propiedades se pueden usar para submenús. `pageRef` y `url` también se pueden usar en la entrada padre. Los menús anidados solo están disponibles en el menú principal, no para el pie de página.

```toml
# config/_default/menus.toml

[[main]]
  name = "Padre"
  weight = 20

[[main]]
  name = "sub-menú 1"
  parent = "Padre"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menú 2"
  parent = "Padre"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menú 3"
  parent = "Padre"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Menú de sub-navegación

Adicionalmente, también puedes configurar un menú de sub-navegación. Solo define nuevas entradas de menú como `subnavigation` en `menus.toml`.
Esto renderizará una segunda línea con subcategorías debajo del menú principal del encabezado.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "Un tema interesante"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "Mi categoría increíble"
  pageRef = "categories/awesome"
  weight = 20
```

El `name` predeterminado es el `pageRef` en formato de título.

## Miniaturas y Fondos

Blowfish fue construido para que sea fácil agregar soporte visual a tus artículos. Si estás familiarizado con la estructura de artículos de Hugo, solo necesitas colocar un archivo de imagen (casi todos los formatos son compatibles pero recomendamos `.png` o `.jpg`) que comience con `feature*` dentro de tu carpeta de artículo. Y eso es todo, Blowfish podrá usar la imagen tanto como miniatura dentro de tu sitio web como para tarjetas <a target="_blank" href="https://oembed.com/">oEmbed</a> en plataformas sociales.

[Aquí]({{< ref "thumbnails" >}}) también hay una guía con más información y un [ejemplo]({{< ref "thumbnail_sample" >}}) si quieres ver cómo puedes hacerlo.

Adicionalmente, Blowfish también admite imágenes hero de fondo en artículos y listas. Para usar una imagen diferente a la destacada, agrega un archivo de imagen cuyo nombre comience con `background*`.

## Configuración detallada

Los pasos anteriores son la configuración mínima. Si ahora ejecutas `hugo server` se te presentará un sitio web Blowfish en blanco. La configuración detallada se cubre en la sección [Configuración]({{< ref "configuration" >}}).
