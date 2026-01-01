---
title: "Shortcodes"
weight: 6
draft: false
description: "Todos los shortcodes disponibles en Blowfish."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "documentación"]
series: ["Documentación"]
series_order: 8
---

Además de todos los [shortcodes predeterminados de Hugo](https://gohugo.io/content-management/shortcodes/), Blowfish añade algunos adicionales para funcionalidad extra.

## Alert

`alert` muestra su contenido como una caja de mensaje estilizada dentro de tu artículo. Es útil para llamar la atención sobre información importante que no quieres que el lector se pierda.

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `icon` | **Opcional.** El icono a mostrar en el lado izquierdo.<br>**Por defecto:** `triangle-exclamation` (Consulta el [shortcode icon](#icon) para más detalles sobre el uso de iconos.) |
| `iconColor` | **Opcional.** El color del icono en estilo CSS básico.<br>Puede ser valores hexadecimales (`#FFFFFF`) o nombres de colores (`white`)<br>Por defecto se elige según el tema de color actual. |
| `cardColor` | **Opcional.** El color del fondo de la tarjeta en estilo CSS básico.<br>Puede ser valores hexadecimales (`#FFFFFF`) o nombres de colores (`white`)<br>Por defecto se elige según el tema de color actual. |
| `textColor` | **Opcional.** El color del texto en estilo CSS básico.<br>Puede ser valores hexadecimales (`#FFFFFF`) o nombres de colores (`white`)<br>Por defecto se elige según el tema de color actual. |
<!-- prettier-ignore-end -->

La entrada está escrita en Markdown, así que puedes formatearla como desees.

**Ejemplo 1:** Sin parámetros

```md
{{</* alert */>}}
**¡Advertencia!** ¡Esta acción es destructiva!
{{</* /alert */>}}
```

{{< alert >}}
**¡Advertencia!** ¡Esta acción es destructiva!
{{< /alert >}}

**Ejemplo 2:** Parámetro sin nombre

```md
{{</* alert "twitter" */>}}
No olvides [seguirme](https://twitter.com/nunocoracao) en Twitter.
{{</* /alert */>}}
```

{{< alert "twitter" >}}
No olvides [seguirme](https://twitter.com/nunocoracao) en Twitter.
{{< /alert >}}

**Ejemplo 3:** Parámetros con nombre

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
¡Esto es un error!
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
¡Esto es un error!
{{< /alert >}}

<br/><br/><br/>

## Admonition

Las admonitions te permiten insertar llamativos cuadros de aviso en tu contenido.

Las admonitions sirven un propósito similar al shortcode alert pero se implementan mediante hooks de renderizado de Hugo. La diferencia clave es la sintaxis: las admonitions usan sintaxis Markdown, haciéndolas más portables entre diferentes plataformas, mientras que los shortcodes son específicos de Hugo. La sintaxis se parece a las alertas de GitHub:

```md
> [!NOTE]
> Una admonition de tipo Note.

> [!TIP]+ Título personalizado
> Una admonition plegable con título personalizado.
```

> [!NOTE]
> Una admonition de tipo Note.

> [!TIP]+ Título personalizado
> Una admonition plegable con título personalizado.

El signo de alerta (`+` o `-`) es opcional para controlar si la admonition está plegada o no. Ten en cuenta que el signo de alerta solo es compatible con Obsidian.

> [!INFO]- Tipos soportados
> Los tipos válidos de admonition incluyen [tipos de alerta de GitHub](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) y [tipos de callout de Obsidian](https://help.obsidian.md/callouts). Los tipos no distinguen entre mayúsculas y minúsculas.
>
> **Tipos de GitHub:** `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`
> **Tipos de Obsidian:** `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

<br/><br/><br/>

## Article

`Article` incrustará un solo artículo en un archivo markdown. El `link` al archivo debe ser el `.RelPermalink` del archivo a incrustar. Ten en cuenta que el shortcode no mostrará nada si hace referencia a su página padre. _Nota: si estás ejecutando tu sitio web en una subcarpeta como Blowfish (es decir, /blowfish/), incluye esa ruta en el enlace._

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **Requerido.** El `.RelPermalink` al artículo objetivo. |
| `showSummary` | **Opcional.** Un valor booleano que indica si mostrar el resumen del artículo. Si no se establece, se usará la configuración predeterminada del sitio. |
| `compactSummary` | **Opcional.** Un valor booleano que indica si mostrar el resumen en modo compacto. Por defecto false. |
<!-- prettier-ignore-end -->

**Ejemplo:**

```md
{{</* article link="/docs/welcome/" showSummary=true compactSummary=true */>}}
```

{{< article link="/docs/welcome/" showSummary=true compactSummary=true >}}

<br/><br/><br/>

## Badge

`badge` muestra un componente de insignia estilizado que es útil para mostrar metadatos.

**Ejemplo:**

```md
{{</* badge */>}}
¡Nuevo artículo!
{{</* /badge */>}}
```

{{< badge >}}
¡Nuevo artículo!
{{< /badge >}}

<br/><br/><br/>

## Button

`button` muestra un componente de botón estilizado que puede usarse para resaltar una acción principal. Tiene tres variables opcionales `href`, `target` y `rel` que pueden usarse para especificar la URL, el destino y la relación del enlace.

**Ejemplo:**

```md
{{</* button href="#button" target="_self" */>}}
Llamada a la acción
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Llamada a la acción
{{< /button >}}

<br/><br/><br/>

## Carousel

`carousel` se usa para mostrar múltiples imágenes de manera interactiva y visualmente atractiva. Esto permite al usuario deslizarse a través de múltiples imágenes mientras solo ocupa el espacio vertical de una. Todas las imágenes se muestran usando el ancho completo del componente padre y la relación de aspecto que establezcas con un valor predeterminado de `16:9`.

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `images` | **Requerido.** Una cadena regex para coincidir con nombres o URLs de imágenes. |
| `aspectRatio` | **Opcional.** La relación de aspecto para el carrusel. Por defecto `16-9`. |
| `interval` | **Opcional.** El intervalo para el desplazamiento automático, especificado en milisegundos. Por defecto `2000` (2s) |
<!-- prettier-ignore-end -->

**Ejemplo 1:** Relación de aspecto 16:9 y lista de imágenes detallada

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**Ejemplo 2:** Relación de aspecto 21:9 y lista de imágenes con regex

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## Chart

`chart` usa la biblioteca Chart.js para incrustar gráficos en artículos usando datos estructurados simples. Soporta varios [estilos de gráficos diferentes](https://www.chartjs.org/docs/latest/samples/) y todo se puede configurar desde el shortcode. Simplemente proporciona los parámetros del gráfico entre las etiquetas del shortcode y Chart.js hará el resto.

Consulta la [documentación oficial de Chart.js](https://www.chartjs.org/docs/latest/general/) para detalles sobre la sintaxis y tipos de gráficos soportados.

**Ejemplo:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomate', 'Arándano', 'Plátano', 'Lima', 'Naranja'],
  datasets: [{
    label: '# de votos',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

Puedes ver ejemplos adicionales de Chart.js en la página de [ejemplos de gráficos]({{< ref "charts" >}}).

<br/><br/><br/>

## Code Importer

Este shortcode permite importar código de fuentes externas fácilmente sin copiar y pegar.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Requerido** URL a un archivo de código alojado externamente.     |
| `type`    | Tipo de código usado para el resaltado de sintaxis.                 |
| `startLine` | **Opcional** El número de línea desde el que comenzar la importación.    |
| `endLine` | **Opcional** El número de línea en el que terminar la importación.        |

<!-- prettier-ignore-end -->

**Ejemplo:**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}

<br/><br/>

## Codeberg Card

`codeberg` te permite enlazar rápidamente un repositorio de Codeberg a través de la API de Codeberg, proporcionando actualizaciones en tiempo real sobre estadísticas como estrellas y forks.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositorio de Codeberg en formato `usuario/repo` |
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```

{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

Blowfish incluye un shortcode `figure` para añadir imágenes al contenido. El shortcode reemplaza la funcionalidad base de Hugo para proporcionar beneficios de rendimiento adicionales.

Cuando una imagen proporcionada es un recurso de página, será optimizada usando Hugo Pipes y escalada para proporcionar imágenes apropiadas para diferentes resoluciones de dispositivos. Si se proporciona un asset estático o una URL a una imagen externa, se incluirá tal cual sin ningún procesamiento de imagen por Hugo.

El shortcode `figure` acepta seis parámetros:

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `src` | **Requerido.** La ruta/nombre de archivo local o URL de la imagen. Al proporcionar una ruta y nombre de archivo, el tema intentará localizar la imagen usando el siguiente orden de búsqueda: Primero, como un [recurso de página](https://gohugo.io/content-management/page-resources/) empaquetado con la página; luego un asset en el directorio `assets/`; y finalmente, una imagen estática en el directorio `static/`. |
| `alt` | [Descripción de texto alternativo](https://moz.com/learn/seo/alt-text) para la imagen. |
| `caption` | Markdown para el pie de imagen, que se mostrará debajo de la imagen. |
| `class` | Clases CSS adicionales para aplicar a la imagen. |
| `href` | URL a la que la imagen debe enlazar. |
| `target` | El atributo target para la URL `href`. |
| `nozoom` | `nozoom=true` desactiva la funcionalidad de "zoom" de la imagen. Esto es especialmente útil en combinación con un enlace `href`. |
| `default` | Parámetro especial para volver al comportamiento predeterminado de `figure` de Hugo. Simplemente proporciona `default=true` y luego usa la [sintaxis normal de shortcode de Hugo](https://gohugo.io/content-management/shortcodes/#figure). |
<!-- prettier-ignore-end -->

Blowfish también soporta la conversión automática de imágenes incluidas usando la sintaxis estándar de Markdown. Simplemente usa el siguiente formato y el tema se encargará del resto:

```md
![Texto alternativo](image.jpg "Pie de imagen")
```

**Ejemplo:**

```md
{{</* figure
    src="abstract.jpg"
    alt="Obra de arte abstracta púrpura"
    caption="Foto de [Jr Korpa](https://unsplash.com/@jrkorpa) en [Unsplash](https://unsplash.com/)"
    */>}}

<!-- O -->

![Obra de arte abstracta púrpura](abstract.jpg "Foto de [Jr Korpa](https://unsplash.com/@jrkorpa) en [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Foto de [Jr Korpa](https://unsplash.com/@jrkorpa) en [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Forgejo Card

`forgejo` te permite enlazar rápidamente un repositorio de Forgejo a través de la API de Forgejo, proporcionando actualizaciones en tiempo real sobre estadísticas como estrellas y forks.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositorio de Forgejo en formato `usuario/repo`|
| `server`  | [String] URL del servidor como `https://v11.next.forgejo.org`|
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" */>}}
```

{{< forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" >}}

<br/><br/><br/>

## Gallery

`gallery` te permite mostrar múltiples imágenes a la vez, de manera responsive con diseños más variados e interesantes.

Para añadir imágenes a la galería, usa etiquetas `img` para cada imagen y añade `class="grid-wXX"` para que la galería pueda identificar el ancho de columna para cada imagen. Los anchos disponibles por defecto empiezan en 10% y van hasta 100% en incrementos de 5%. Por ejemplo, para establecer el ancho al 65%, establece la clase a `grid-w65`. Además, también están disponibles anchos para 33% y 66% para construir galerías de 3 columnas. También puedes aprovechar los indicadores responsive de Tailwind para tener una cuadrícula responsive.

**Ejemplo 1: Galería normal**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>

**Ejemplo 2: Galería responsive**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

El shortcode `gist` te permite incrustar un GitHub Gist directamente en tu contenido especificando el usuario del Gist, el ID y opcionalmente un archivo específico.

| Parámetro      | Descripción                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | [String] Nombre de usuario de GitHub                                           |
| `[1]`          | [String] ID del Gist                                                   |
| `[2]` (opcional)| [String] Nombre de archivo dentro del Gist a incrustar (opcional)             |

**Ejemplo 1: Incrustar Gist completo**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
````

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**Ejemplo 2: Incrustar archivo específico del Gist**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

## Gitea Card

`gitea` te permite enlazar rápidamente un repositorio de Gitea a través de la API de Gitea, proporcionando actualizaciones en tiempo real sobre estadísticas como estrellas y forks.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] repositorio de Gitea en formato `usuario/repo`  |
| `server`  | [String] URL del servidor como `https://git.fsfe.org`       |
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```

{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub Card

`github` te permite enlazar rápidamente un repositorio de GitHub, mostrando y actualizando en tiempo real las estadísticas sobre él, como el número de estrellas y forks.

<!-- prettier-ignore-start -->
| Parámetro       | Descripción                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | [String] repositorio de GitHub en formato `usuario/repo`         |
| `showThumbnail` | **Opcional** [boolean] muestra una miniatura para el repositorio |
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* github repo="nunocoracao/blowfish" showThumbnail=true */>}}
```

{{< github repo="nunocoracao/blowfish" showThumbnail=true >}}

<br/><br/><br/>

## GitLab Card

`gitlab` te permite enlazar rápidamente un Proyecto de GitLab (la jerga de GitLab para repositorio).
Muestra estadísticas en tiempo real sobre él, como el número de estrellas y forks.
A diferencia de `github`, no puede mostrar el lenguaje de programación principal de un proyecto.
Finalmente, se puede proporcionar una URL de instancia de GitLab personalizada, siempre que el endpoint `api/v4/projects/` esté disponible, haciendo este shortcode compatible con la mayoría de los despliegues auto-alojados / empresariales.

<!-- prettier-ignore-start -->
| Parámetro   | Descripción                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `projectID` | [String] ID numérico del proyecto de GitLab                                       |
| `baseURL`   | [String] URL opcional de la instancia de GitLab, por defecto `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## Hugging Face Card

`huggingface` te permite enlazar rápidamente un modelo o dataset de Hugging Face, mostrando información en tiempo real como el número de likes y descargas, junto con el tipo y descripción.

| Parámetro  | Descripción                                                    |
|------------|----------------------------------------------------------------|
| `model`    | [String] Modelo de Hugging Face en formato `usuario/modelo` |
| `dataset`  | [String] Dataset de Hugging Face en formato `usuario/dataset` |

**Nota:** Usa el parámetro `model` o `dataset`, no ambos.

**Ejemplo 1 (Modelo):**

```md
{{</* huggingface model="google-bert/bert-base-uncased" */>}}
```

{{< huggingface model="google-bert/bert-base-uncased" >}}

**Ejemplo 2 (Dataset):**

```md
{{</* huggingface dataset="stanfordnlp/imdb" */>}}
```

{{< huggingface dataset="stanfordnlp/imdb" >}}

<br/><br/><br/>

## Icon

`icon` muestra un icono SVG y toma el nombre del icono como único parámetro. El icono se escala para coincidir con el tamaño del texto actual.

**Ejemplo:**

```md
{{</* icon "github" */>}}
```

**Salida:** {{< icon "github" >}}

Los iconos se rellenan usando pipelines de Hugo, lo que los hace muy flexibles. Blowfish incluye varios iconos integrados para redes sociales, enlaces y otros propósitos. Consulta la página de [ejemplos de iconos]({{< ref "samples/icons" >}}) para una lista completa de los iconos soportados.

Se pueden añadir iconos personalizados proporcionando tus propios assets de iconos en el directorio `assets/icons/` de tu proyecto. El icono puede luego referenciarse en el shortcode usando el nombre del archivo SVG sin la extensión `.svg`.

Los iconos también pueden usarse en partials llamando al [partial icon]({{< ref "partials#icon" >}}).

<br/><br/><br/>

## KaTeX

El shortcode `katex` puede usarse para añadir expresiones matemáticas al contenido de artículos usando el paquete KaTeX. Consulta la referencia en línea de [funciones TeX soportadas](https://katex.org/docs/supported.html) para la sintaxis disponible.

Para incluir expresiones matemáticas en un artículo, simplemente coloca el shortcode en cualquier lugar del contenido. Solo necesita incluirse una vez por artículo y KaTeX renderizará automáticamente cualquier markup en esa página. Se soportan tanto la notación en línea como la notación en bloque.

La notación en línea puede generarse envolviendo la expresión con los delimitadores `\(` y `\)`. Alternativamente, la notación en bloque puede generarse usando los delimitadores `$$`.

**Ejemplo:**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

Consulta la página de [ejemplos de notación matemática]({{< ref "mathematical-notation" >}}) para más ejemplos.

<br/><br/><br/>

## Keyword

El componente `keyword` puede usarse para resaltar visualmente ciertas palabras o frases importantes, por ejemplo, habilidades profesionales, etc. El shortcode `keywordList` puede usarse para agrupar múltiples elementos `keyword`. Cada elemento puede tener las siguientes propiedades.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                             |
| --------- | --------------------------------------- |
| `icon`    | Icono opcional a usar en el keyword |
<!-- prettier-ignore-end -->

La entrada está escrita en Markdown, así que puedes formatearla como desees.

**Ejemplo 1:**

```md
{{</* keyword */>}} *Super* habilidad {{</* /keyword */>}}
```

{{< keyword >}} _Super_ habilidad {{< /keyword >}}

**Ejemplo 2:**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} Habilidad **importante** {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} Habilidad *independiente* {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} Habilidad **importante** {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} Habilidad _independiente_ {{< /keyword >}}

<br/><br/><br/>

## Lead

`lead` se usa para dar énfasis al inicio de un artículo. Puede usarse para estilizar una introducción o para destacar una información importante. Simplemente envuelve cualquier contenido Markdown en el shortcode `lead`.

**Ejemplo:**

```md
{{</* lead */>}}
Cuando la vida te da limones, haz limonada.
{{</* /lead */>}}
```

{{< lead >}}
Cuando la vida te da limones, haz limonada.
{{< /lead >}}

<br/><br/><br/>

## List

`List` mostrará una lista de artículos recientes. Este shortcode requiere un valor límite para restringir la lista. Además, soporta un `where` y un `value` para filtrar artículos por sus parámetros. Ten en cuenta que este shortcode no mostrará su página padre pero contará para el valor límite.

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `limit` | **Requerido.** El número de artículos recientes a mostrar. |
| `title` | Título opcional para la lista, por defecto `Recent` |
| `cardView` | Vista de tarjeta opcional habilitada para la lista, por defecto `false` |
| `where` | La variable a usar para la consulta de artículos, por ejemplo `Type` |
| `value` | El valor que necesitará coincidir con el parámetro definido en `where` para la consulta de artículos, por ejemplo para `where` == `Type` un valor válido podría ser `sample` |

{{< alert >}}
Los valores `where` y `value` se usan en la siguiente consulta `where .Site.RegularPages $where $value` en el código del shortcode. Consulta los [docs de Hugo](https://gohugo.io/methods/page/) para saber más sobre qué parámetros están disponibles.
{{</ alert >}}

<!-- prettier-ignore-end -->

**Ejemplo #1:**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**Ejemplo #2:**

```md
{{</* list title="Muestras" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## LTR/RTL

`ltr` y `rtl` te permiten mezclar tus contenidos. Muchos usuarios de idiomas RTL quieren incluir partes del contenido en LTR. Usando este shortcode podrás hacerlo, y al aprovechar `%` como el delimitador más externo en el shortcode [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown), cualquier markdown dentro se renderizará normalmente.

**Ejemplo:**

```md
- Esta es una lista markdown.
- Por defecto dirección LTR
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- Esta es una lista markdown.
- Por defecto dirección LTR
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown Importer

Este shortcode te permite importar archivos markdown de fuentes externas. Esto es útil para incluir contenido de otros repositorios o sitios web sin tener que copiar y pegar el contenido.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Requerido** URL a un archivo markdown alojado externamente. |

<!-- prettier-ignore-end -->

**Ejemplo:**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

## Mermaid

`mermaid` te permite dibujar diagramas y visualizaciones detalladas usando texto. Usa Mermaid por debajo y soporta una amplia variedad de diagramas, gráficos y otros formatos de salida.

Simplemente escribe tu sintaxis Mermaid dentro del shortcode `mermaid` y deja que el plugin haga el resto.

Consulta la [documentación oficial de Mermaid](https://mermaid-js.github.io/) para detalles sobre la sintaxis y tipos de diagramas soportados.

**Ejemplo:**

```md
{{</* mermaid */>}}
graph LR;
A[Limones]-->B[Limonada];
B-->C[Ganancia]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

Puedes ver ejemplos adicionales de Mermaid en la página de [ejemplos de diagramas y diagramas de flujo]({{< ref "diagrams-flowcharts" >}}).

<br/><br/><br/>

## Swatches

`swatches` muestra un conjunto de hasta tres colores diferentes para mostrar elementos de color como una paleta de colores. Este shortcode toma los códigos `HEX` de cada color y crea los elementos visuales para cada uno.

**Ejemplo**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**Salida**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## Tabs

El shortcode `tabs` se usa comúnmente para presentar diferentes variantes de un paso en particular. Por ejemplo, puede usarse para mostrar cómo instalar VS Code en diferentes plataformas.

**Ejemplo**

`````md
{{</* tabs */>}}

    {{</* tab label="Windows" */>}}
    Instalar usando Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    o instalar usando WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{</* /tab */>}}

    {{</* tab label="macOS" */>}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{</* /tab */>}}

    {{</* tab label="Linux" */>}}
    Ver [documentación](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{</* /tab */>}}

{{</* /tabs */>}}
`````

**Salida**

{{< tabs >}}

    {{< tab label="Windows" >}}
    Instalar usando Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    o instalar usando WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{< /tab >}}

    {{< tab label="macOS" >}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{< /tab >}}

    {{< tab label="Linux" >}}
    Ver [documentación](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{< /tab >}}

{{< /tabs >}}

<br/><br/><br/>

## Timeline

El `timeline` crea una línea de tiempo visual que puede usarse en diferentes casos de uso, por ejemplo, experiencia profesional, logros de un proyecto, etc. El shortcode `timeline` se basa en el sub-shortcode `timelineItem` para definir cada elemento dentro de la línea de tiempo principal. Cada elemento puede tener las siguientes propiedades.

<!-- prettier-ignore-start -->
| Parámetro   | Descripción                                  |
| ----------- | -------------------------------------------- |
| `md`        | Renderizar el contenido como Markdown (true/false)  |
| `icon`      | El icono a usar en los visuales de la línea de tiempo  |
| `header`    | Encabezado para cada entrada                        |
| `badge`     | Texto a colocar dentro del badge superior derecho     |
| `subheader` | Subencabezado de la entrada                            |

<!-- prettier-ignore-end -->

**Ejemplo:**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="Encabezado" badge="Prueba badge" subheader="Subencabezado" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}


{{</* timelineItem icon="code" header="Otro gran encabezado" badge="fecha - presente" subheader="Gran subencabezado" */>}}
Con código HTML
<ul>
  <li>Café</li>
  <li>Té</li>
  <li>Leche</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="INCREÍBLE" */>}}
Con otros shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Otro gran encabezado"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader">}}
Con código HTML
<ul>
  <li>Café</li>
  <li>Té</li>
  <li>Leche</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
Con otros shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{</ timelineItem >}}
{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="nunocoracao/blowfish" >}}
{{</ timelineItem >}}
{{</ timeline >}}

<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) es la herramienta JavaScript más versátil para crear efectos de máquina de escribir en el planeta. Con una configuración sencilla, te permite escribir cadenas simples o múltiples que hacen saltos de línea, se borran y reemplazan entre sí, e incluso puede manejar cadenas que contienen HTML complejo.

Blowfish implementa un subconjunto de las características de TypeIt usando un `shortcode`. Escribe tu texto dentro del shortcode `typeit` y usa los siguientes parámetros para configurar el comportamiento deseado.

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `tag` | [String] Etiqueta `html` que se usará para renderizar las cadenas. |
| `classList` | [String] Lista de clases `css` a aplicar al elemento `html`. |
| `initialString` | [String] Cadena inicial que aparecerá escrita y será reemplazada. |
| `speed` | [number] Velocidad de escritura, medida en milisegundos entre cada paso. |
| `lifeLike` | [boolean] Hace que el ritmo de escritura sea irregular, como si una persona real lo hiciera. |
| `startDelay` | [number] La cantidad de tiempo antes de que el plugin comience a escribir después de ser inicializado. |
| `breakLines` | [boolean] Si múltiples cadenas se imprimen una encima de otra (true), o si se borran y reemplazan entre sí (false). |
| `waitUntilVisible` | [boolean] Determina si la instancia comenzará cuando se cargue o solo cuando el elemento objetivo sea visible en el viewport. Por defecto `true` |
| `loop` | [boolean] Si tus cadenas se repetirán continuamente después de completarse |

<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**Ejemplo 2:**

```md
{{</* typeit
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**Ejemplo 3:**

```md
{{</* typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
"Francamente, querida, me importa un bledo." Lo que el viento se llevó (1939)
"Le haré una oferta que no podrá rechazar." El Padrino (1972)
"Toto, tengo la sensación de que ya no estamos en Kansas." El Mago de Oz (1939)
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"Frankly, my dear, I don't give a damn." Gone with the Wind (1939)
"I'm gonna make him an offer he can't refuse." The Godfather (1972)
"Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz (1939)
{{< /typeit >}}

<br/><br/><br/>

## Video

Blowfish incluye un shortcode `video` para incrustar vídeos locales o externos en el contenido. El shortcode renderiza un contenedor `<figure>` con un reproductor de vídeo adaptable y un pie de foto opcional.

El shortcode `video` acepta los siguientes parámetros:

<!-- prettier-ignore-start -->
| Parámetro | Descripción |
| --- | --- |
| `src` | **Requerido.** URL del vídeo o ruta local. Orden de búsqueda local: recurso de página → `assets/` → `static/`. |
| `poster` | Imagen de póster opcional (URL o ruta local). Si se omite, el shortcode intenta una imagen con el mismo nombre en el bundle de la página. |
| `caption` | Pie de foto opcional en Markdown, mostrado debajo del vídeo. |
| `autoplay` | `true`/`false`. Activa la reproducción automática cuando es `true`. Predeterminado: `false`. |
| `loop` | `true`/`false`. Repite en bucle cuando es `true`. Predeterminado: `false`. |
| `muted` | `true`/`false`. Silencia cuando es `true`. Predeterminado: `false`. |
| `controls` | `true`/`false`. Muestra los controles de reproducción predeterminados del navegador cuando es `true`. Predeterminado: `true`. |
| `playsinline` | `true`/`false`. Reproducción en línea en móvil cuando es `true`. Predeterminado: `true`. |
| `preload` | `metadata` (carga info), `none` (ahorra ancho de banda) o `auto` (precarga más). Predeterminado: `metadata`. |
| `start` | Tiempo de inicio opcional en segundos. |
| `end` | Tiempo de fin opcional en segundos. |
| `ratio` | Relación de aspecto reservada para el reproductor. Soporta `16/9`, `4/3`, `1/1` o `W/H` personalizado. Predeterminado: `16/9`. |
| `fit` | Cómo encaja el vídeo en la relación: `contain` (sin recorte), `cover` (recorta para llenar), `fill` (estira). Predeterminado: `contain`. |
<!-- prettier-ignore-end -->

Si el navegador no puede reproducir el vídeo, el reproductor mostrará un breve mensaje en inglés con un enlace de descarga.

**Ejemplo:**

```md
{{</* video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Demo de dominio público** — vídeo y póster CC0."
    loop=true
    muted=true
*/>}}
```

{{< video
  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
  caption="**Demo de dominio público** — vídeo y póster CC0."
  loop=true
  muted=true
>}}

<br/><br/><br/>

## Youtube Lite

Un atajo para incrustar videos de YouTube usando la biblioteca [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed). Esta biblioteca es una alternativa ligera a las incrustaciones estándar de YouTube, y está diseñada para ser más rápida y eficiente.

<!-- prettier-ignore-start -->
| Parámetro | Descripción                                  |
| --------- | -------------------------------------------- |
| `id`      | [String] ID del video de YouTube a incrustar.          |
| `label`   | [String] Etiqueta para el video                 |
| `params`  | [String] Parámetros extra para la reproducción del video |
<!-- prettier-ignore-end -->

**Ejemplo 1:**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo de Blowfish-tools" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**Ejemplo 2:**

Puedes usar todos los [parámetros del reproductor](https://developers.google.com/youtube/player_parameters#Parameters) de YouTube para la variable `params`, como se demuestra a continuación:

> Este video comenzará después de 130 segundos (2m10)

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo de Blowfish-tools" params="start=130" */>}}
```

> Este video no tendrá controles de interfaz, comenzará a los 130 segundos y se detendrá 10 segundos después.

Para concatenar múltiples opciones como se muestra a continuación, necesitas añadir el carácter `&` entre ellas.

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Demo de Blowfish-tools" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

Más información puede encontrarse en el [repo de GitHub de youtubeLite](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters) y la página de [parámetros del reproductor](https://developers.google.com/youtube/player_parameters#Parameters) de YouTube.
