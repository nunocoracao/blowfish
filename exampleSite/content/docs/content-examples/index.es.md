---
title: "Ejemplos de contenido"
weight: 11
draft: false
description: "Todos los partials disponibles en Blowfish."
slug: "content-examples"
tags: ["contenido", "ejemplo"]
series: ["Documentación"]
series_order: 12
---

Si has estado leyendo la documentación en orden, ahora deberías conocer todas las características y configuraciones disponibles en Blowfish. Esta página está diseñada para unir todo y ofrecer algunos ejemplos prácticos que podrías querer usar en tu proyecto Hugo.

{{< alert >}}
**Consejo:** Si eres nuevo en Hugo, asegúrate de consultar la [documentación oficial](https://gohugo.io/content-management/page-bundles/) para aprender más sobre el concepto de bundles de página y recursos.
{{< /alert >}}

Los ejemplos en esta página pueden adaptarse a diferentes escenarios, pero esperamos que te den algunas ideas sobre cómo abordar el formateo de un elemento de contenido particular para tu proyecto individual.

## Páginas rama

Los bundles de página rama en Hugo cubren elementos como la página de inicio, listados de secciones y páginas de taxonomía. Lo importante a recordar sobre los bundles rama es que el nombre de archivo para este tipo de contenido es **`_index.md`**.

Blowfish respetará los parámetros de front matter especificados en las páginas rama y estos anularán la configuración predeterminada para esa página particular. Por ejemplo, establecer el parámetro `title` en una página rama permitirá anular el título de la página.

### Página de inicio

|              |                      |
| ------------ | -------------------- |
| **Layout:**  | `layouts/index.html` |
| **Contenido:** | `content/_index.md`  |

La página de inicio en Blowfish es especial porque su diseño general está controlado por el parámetro de configuración del layout de la página de inicio. Puedes aprender más sobre esto en la sección [Layout de página de inicio]({{< ref "homepage-layout" >}}).

Si quieres añadir contenido personalizado a esta página, simplemente necesitas crear un archivo `content/_index.md`. Cualquier cosa en este archivo se incluirá en tu página de inicio.

**Ejemplo:**

```yaml
---
title: "¡Bienvenido a Blowfish!"
description: "Esta es una demostración de cómo añadir contenido a la página de inicio."
---
¡Bienvenido a mi sitio web! Me alegra mucho que hayas pasado por aquí.
```

_Este ejemplo establece un título personalizado y añade algo de texto adicional al cuerpo de la página. Cualquier texto formateado en Markdown es aceptable, incluyendo shortcodes, imágenes y enlaces._

### Páginas de lista

|              |                              |
| ------------ | ---------------------------- |
| **Layout:**  | `layouts/_default/list.html` |
| **Contenido:** | `content/../_index.md`       |

Las páginas de lista agrupan todas las páginas de una sección y proporcionan una forma para que los visitantes lleguen a cada página. Un blog o portfolio son ejemplos de una página de lista ya que agrupan publicaciones o proyectos.

Crear una página de lista es tan simple como crear un subdirectorio en la carpeta de contenido. Por ejemplo, para crear una sección "Proyectos", crearías `content/projects/`. Luego crea un archivo Markdown para cada uno de tus proyectos.

Se generará una página de lista por defecto, sin embargo, para personalizar el contenido, también deberías crear una página `_index.md` en este nuevo directorio.

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

Hugo generará URLs para las páginas en tu carpeta de proyectos en consecuencia.

Al igual que la página de inicio, el contenido en el archivo `_index.md` se mostrará en el índice de lista generado. Blowfish luego listará cualquier página en esta sección debajo del contenido.

**Ejemplo:**

```yaml
---
title: "Proyectos"
description: "Aprende sobre algunos de mis proyectos."
cascade:
  showReadingTime: false
---
Esta sección contiene todos mis proyectos actuales.
```

_En este ejemplo, se está usando el parámetro especial `cascade` para ocultar el tiempo de lectura en cualquier subpágina dentro de esta sección. Al hacer esto, las páginas de proyecto no mostrarán su tiempo de lectura. Esta es una excelente manera de anular los parámetros predeterminados del tema para una sección completa sin tener que incluirlos en cada página individual._

La [sección de muestras]({{< ref "samples" >}}) de este sitio es un ejemplo de una página de lista.

### Páginas de taxonomía

|                  |                                  |
| ---------------- | -------------------------------- |
| **Layout lista:** | `layouts/_default/taxonomy.html` |
| **Layout término:** | `layouts/_default/term.html`     |
| **Contenido:**     | `content/../_index.md`           |

Las páginas de taxonomía vienen en dos formas - listas de taxonomía y términos de taxonomía. Las listas muestran un listado de cada uno de los términos dentro de una taxonomía dada, mientras que los términos muestran una lista de páginas que están relacionadas con un término dado.

La terminología puede ser un poco confusa, así que exploremos un ejemplo usando una taxonomía llamada `animals`.

Primero, para usar taxonomías en Hugo, deben configurarse. Esto se hace creando un archivo de configuración en `config/_default/taxonomies.toml` y definiendo el nombre de la taxonomía.

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

Hugo espera que las taxonomías se listen usando sus formas singular y plural, así que añadimos el singular `animal` igual al plural `animals` para crear nuestra taxonomía de ejemplo.

Ahora que nuestra taxonomía `animals` existe, necesita añadirse a los elementos de contenido individuales. Es tan simple como insertarla en el front matter:

```yaml
---
title: "En la guarida del león"
description: "Esta semana estamos aprendiendo sobre leones."
animals: ["lion", "cat"]
---
```

Esto ha creado ahora dos _términos_ dentro de nuestra taxonomía `animals` - `lion` y `cat`.

Aunque no es obvio en este punto, Hugo ahora estará generando páginas de lista y término para esta nueva taxonomía. Por defecto, el listado puede accederse en `/animals/` y las páginas de término pueden encontrarse en `/animals/lion/` y `/animals/cat/`.

La página de lista listará todos los términos contenidos dentro de la taxonomía. En este ejemplo, navegar a `/animals/` mostrará una página que tiene enlaces para "lion" y "cat" que llevan a los visitantes a las páginas de término individuales.

Las páginas de término listarán todas las páginas contenidas dentro de ese término. Estas listas de términos son esencialmente lo mismo que las [páginas de lista](#páginas-de-lista) normales y se comportan de manera muy similar.

Para añadir contenido personalizado a las páginas de taxonomía, simplemente crea archivos `_index.md` en la carpeta de contenido usando el nombre de la taxonomía como nombre del subdirectorio.

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

Cualquier cosa en estos archivos de contenido se colocará ahora en las páginas de taxonomía generadas. Como con otro contenido, las variables de front matter pueden usarse para anular valores predeterminados. De esta manera podrías tener una etiqueta llamada `lion` pero anular el `title` para que sea "León".

Para ver cómo se ve esto en la realidad, consulta el [listado de taxonomía de etiquetas]({{< ref "tags" >}}) en este sitio.

## Páginas hoja

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout:**               | `layouts/_default/single.html`  |
| **Contenido (independiente):** | `content/../page-name.md`       |
| **Contenido (agrupado):**    | `content/../page-name/index.md` |

Las páginas hoja en Hugo son básicamente páginas de contenido estándar. Se definen como páginas que no contienen ninguna subpágina. Estas podrían ser cosas como una página Acerca de, o una publicación de blog individual que vive en la sección de blog del sitio web.

Lo más importante a recordar sobre las páginas hoja es que a diferencia de las páginas rama, las páginas hoja deben nombrarse `index.md` _sin_ guion bajo. Las páginas hoja también son especiales porque pueden agruparse en el nivel superior de la sección y nombrarse con un nombre único.

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

Cuando se incluyen recursos en una página, como una imagen, debe usarse un bundle de página. Los bundles de página se crean usando un subdirectorio con un archivo `index.md`. Agrupar los recursos con el contenido en su propio directorio es importante ya que muchos de los shortcodes y otras lógicas del tema asumen que los recursos están agrupados junto con las páginas.

**Ejemplo:**

```yaml
---
title: "Mi primera publicación de blog"
date: 2022-01-25
description: "¡Bienvenido a mi blog!"
summary: "Aprende más sobre mí y por qué estoy empezando este blog."
tags: ["bienvenida", "nuevo", "acerca", "primero"]
---
_Este_ es el contenido de mi publicación de blog.
```

Las páginas hoja tienen una amplia variedad de parámetros de [front matter]({{< ref "front-matter" >}}) que pueden usarse para personalizar cómo se muestran.

### Enlaces externos

Blowfish tiene una característica especial que permite que los enlaces a páginas externas aparezcan junto a los artículos en los listados de artículos. Esto es útil si tienes contenido en sitios web de terceros como Medium, o artículos de investigación que te gustaría enlazar, sin replicar el contenido en tu sitio Hugo.

Para crear un artículo de enlace externo, se necesita establecer algún front matter especial:

```yaml
---
title: "Mi publicación en Medium"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "Escribí una publicación en Medium."
showReadingTime: false
build:
  render: "false"
  list: "local"
---
```

Junto con los parámetros normales de front matter como `title` y `summary`, el parámetro `externalUrl` se usa para decirle a Blowfish que este no es un artículo ordinario. La URL proporcionada aquí será donde se dirija a los visitantes cuando seleccionen este artículo.

Adicionalmente, usamos un parámetro especial de front matter de Hugo `build` para evitar que se genere una página normal para este contenido - ¡no tiene sentido generar una página ya que estamos enlazando a una URL externa!

El tema incluye un arquetipo para simplificar la generación de estos artículos de enlace externo. Solo especifica `-k external` al crear nuevo contenido.

```shell
hugo new -k external posts/my-post.md
```

### Páginas simples

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

Blowfish también incluye un layout especial para páginas simples. El layout simple es una plantilla de ancho completo que simplemente coloca el contenido Markdown en la página sin ninguna característica especial del tema.

Las únicas características disponibles en el layout simple son las migas de pan y los enlaces para compartir. Sin embargo, el comportamiento de estos aún puede controlarse usando las variables normales de [front matter]({{< ref "front-matter" >}}) de la página.

Para habilitar el layout simple en una página particular, añade la variable de front matter `layout` con un valor de `"simple"`:

```yaml
---
title: "Mi página de aterrizaje"
date: 2022-03-08
layout: "simple"
---
El contenido de esta página ahora es de ancho completo.
```

## Layouts personalizados

Uno de los beneficios de Hugo es que facilita la creación de layouts personalizados para todo el sitio, secciones individuales o páginas.

Los layouts siguen todas las reglas normales de plantillas de Hugo y hay más información disponible en la [documentación oficial de Hugo](https://gohugo.io/templates/introduction/).

### Anular layouts predeterminados

Cada uno de los tipos de contenido discutidos anteriormente lista el archivo de layout que se usa para generar cada tipo de página. Si este archivo se crea en tu proyecto local, anulará la plantilla del tema y por lo tanto puede usarse para personalizar el estilo predeterminado del sitio web.

Por ejemplo, crear un archivo `layouts/_default/single.html` permitirá personalizar completamente el layout de las páginas hoja.

### Layouts de sección personalizados

También es simple crear layouts personalizados para secciones de contenido individuales. Esto es útil cuando quieres crear una sección que lista cierto tipo de contenido usando un estilo particular.

Repasemos un ejemplo que crea una página "Proyectos" personalizada que lista proyectos usando un layout especial.

Para hacer esto, estructura tu contenido usando las reglas normales de contenido de Hugo y crea una sección para tus proyectos. Adicionalmente, crea un nuevo layout para la sección de proyectos usando el mismo nombre de directorio que el contenido y añadiendo un archivo `list.html`.

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

Este archivo `list.html` ahora anulará la plantilla de lista predeterminada, pero solo para la sección `projects`. Antes de mirar este archivo, primero veamos los archivos de proyecto individuales.

```yaml
---
title: "Blowfish"
date: 2021-08-11
icon: "github"
description: "Un tema para Hugo construido con Tailwind CSS."
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/nunocoracao/blowfish/"
---
```

_En este ejemplo estamos asignando algunos metadatos a cada proyecto que luego podemos usar en nuestra plantilla de lista. No hay contenido de página, pero nada te impide incluirlo. ¡Es tu propia plantilla personalizada después de todo!_

Con los proyectos definidos, ahora podemos crear una plantilla de lista que muestre los detalles de cada proyecto.

```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

Aunque este es un ejemplo bastante sencillo, puedes ver que recorre cada una de las páginas en esta sección (es decir, cada proyecto), y luego muestra enlaces HTML a cada proyecto junto con un icono. Los metadatos en el front matter de cada proyecto se usan para determinar qué información se muestra.

Ten en cuenta que necesitarás asegurarte de que los estilos y clases relevantes estén disponibles, lo que puede requerir que se recompile el CSS de Tailwind. Esto se discute con más detalle en la sección [Personalización avanzada]({{< ref "advanced-customisation" >}}).

Al crear plantillas personalizadas como esta, siempre es más fácil echar un vistazo a cómo funciona la plantilla predeterminada de Blowfish y luego usarla como guía. Recuerda, la [documentación de Hugo](https://gohugo.io/templates/introduction/) también es un gran recurso para aprender más sobre la creación de plantillas.
