---
title: "Front Matter"
weight: 7
draft: false
description: "Todas las variables de front matter disponibles en Blowfish."
slug: "front-matter"
tags: ["front matter", "configuración", "documentación"]
series: ["Documentación"]
series_order: 7
---

Además de los [parámetros de front matter predeterminados de Hugo](https://gohugo.io/content-management/front-matter/#front-matter-variables), Blowfish añade varias opciones adicionales para personalizar la presentación de artículos individuales. Todos los parámetros de front matter del tema disponibles se enumeran a continuación.

Los valores predeterminados de los parámetros de front matter se heredan de la [configuración base]({{< ref "configuration" >}}) del tema, por lo que solo necesitas especificar estos parámetros en tu front matter cuando quieras anular el valor predeterminado.

<!-- prettier-ignore-start -->
| Nombre | Predeterminado | Descripción |
| --- | --- | --- |
| `title` | _No establecido_ | El nombre del artículo. |
| `description` | _No establecido_ | La descripción de texto del artículo. Se utiliza en los metadatos HTML. |
| `externalUrl` | _No establecido_ | Si este artículo está publicado en un sitio web de terceros, la URL a este artículo. Proporcionar una URL evitará que se genere una página de contenido y cualquier referencia a este artículo enlazará directamente al sitio web de terceros. |
| `editURL` | `article.editURL` | Cuando `showEdit` está activo, la URL para el enlace de edición. |
| `editAppendPath` | `article.editAppendPath` | Cuando `showEdit` está activo, si la ruta al artículo actual debe añadirse a la URL establecida en `editURL`. |
| `groupByYear` | `list.groupByYear` | Si los artículos se agrupan por año en las páginas de lista. |
| `menu` | _No establecido_ | Cuando se proporciona un valor, aparecerá un enlace a este artículo en los menús nombrados. Los valores válidos son `main` o `footer`. |
| `robots` | _No establecido_ | Cadena que indica cómo los robots deben manejar este artículo. Si se establece, se mostrará en el encabezado de la página. Consulta la [documentación de Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) para valores válidos. |
| `sharingLinks` | `article.sharingLinks` | Qué enlaces de compartir mostrar al final de este artículo. Cuando no se proporciona o se establece en `false`, no se mostrarán enlaces. |
| `showAuthor` | `article.showAuthor` | Si la caja del autor para el autor predeterminado se muestra en el pie de página del artículo. |
| `showAuthorBottom` | `article.showAuthorBottom` | Las cajas de autor se muestran en la parte inferior de cada página en lugar de arriba. |
| `authors` | _No establecido_ | Array de valores para autores, si se establece anula la configuración de `showAuthor` para la página o el sitio. Se usa en la función de múltiples autores, consulta [esta página]({{< ref "multi-author" >}}) para más detalles sobre cómo configurar esa función. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Si las taxonomías de `authors` se muestran en el encabezado del artículo o lista. Esto requiere la configuración de `multiple authors` y la taxonomía `authors`. Consulta [esta página]({{< ref "multi-author" >}}) para más detalles. |
| `featureimage` | _No establecido_ | Enlace para la imagen destacada |
| `featureimagecaption` | _No establecido_ | Leyenda para la imagen destacada. Solo se muestra en heroStyle `big` |
| `showHero` | `article.showHero` | Si la imagen en miniatura se mostrará como imagen hero dentro de la página del artículo. |
| `heroStyle` | `article.heroStyle` | Estilo para mostrar la imagen hero, las opciones válidas son: `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _No establecido_ | Establece la posición de la imagen destacada usando el atributo `object-position`. Los valores válidos son los especificados en la [documentación MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `showBreadcrumbs` | `article.showBreadcrumbs` o `list.showBreadcrumbs` | Si las migas de pan se muestran en el encabezado del artículo o lista. |
| `showDate` | `article.showDate` | Si se muestra la fecha del artículo. La fecha se establece usando el parámetro `date`. |
| `showDateUpdated` | `article.showDateUpdated` | Si se muestra la fecha en que se actualizó el artículo. La fecha se establece usando el parámetro `lastmod`. |
| `showEdit` | `article.showEdit` | Si se debe mostrar el enlace para editar el contenido del artículo. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Si los enlaces de anclaje de encabezados se muestran junto a los encabezados en este artículo. |
| `showPagination` | `article.showPagination` | Si los enlaces al artículo siguiente/anterior se muestran en el pie de página del artículo. |
| `invertPagination` | `article.invertPagination` | Si se debe invertir la dirección de los enlaces al artículo siguiente/anterior. |
| `showReadingTime` | `article.showReadingTime` | Si se muestra el tiempo de lectura del artículo. |
| `showTaxonomies` | `article.showTaxonomies` | Si se muestran las taxonomías relacionadas con este artículo. |
| `showTableOfContents` | `article.showTableOfContents` | Si se muestra la tabla de contenidos en este artículo. |
| `showWordCount` | `article.showWordCount` | Si se muestra el recuento de palabras del artículo. |
| `showComments` | `article.showComments` | Si el [partial de comentarios]({{< ref "partials#comments" >}}) se incluye después del pie de página del artículo. |
| `showSummary` | `list.showSummary` | Si el resumen del artículo debe mostrarse en las páginas de lista. |
| `showViews` | `article.showViews` | Si las vistas del artículo deben mostrarse en listas y vista detallada. Esto requiere una integración con Firebase. Consulta [esta página]({{< ref "firebase-views" >}}) para una guía sobre cómo integrar Firebase. |
| `showLikes` | `article.showLikes` | Si los likes del artículo deben mostrarse en listas y vista detallada. Esto requiere una integración con Firebase. Consulta [esta página]({{< ref "firebase-views" >}}) para una guía sobre cómo integrar Firebase. |
| `seriesOpened` | `article.seriesOpened` | Si el módulo de serie se mostrará abierto por defecto o no. |
| `series` | _No establecido_ | Array de series a las que pertenece el artículo, recomendamos usar solo una serie por artículo. |
| `series_order` | _No establecido_ | Número del artículo dentro de la serie. |
| `summary` | Generado automáticamente usando `summaryLength` (ver [configuración del sitio]({{< ref "configuration#site-configuration" >}})) | Cuando `showSummary` está habilitado, esta es la cadena Markdown que se usará como resumen para este artículo. |
| `xml` | `true` a menos que sea excluido por `sitemap.excludedKinds` | Si este artículo se incluye en el archivo `/sitemap.xml` generado. |
| `excludeFromSearch` | `false` | Si este artículo debe excluirse del sitemap y el índice de búsqueda. Cuando es `true`, la página no aparecerá en `sitemap.xml` ni `index.json`. |
| `layoutBackgroundBlur` | `true` | Hace que la imagen de fondo en el heroStyle background se difumine con el desplazamiento |
| `layoutBackgroundHeaderSpace` | `true` | Añade espacio entre el encabezado y el cuerpo. |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | ¿Deben los enlaces externos en markdown abrirse en una nueva pestaña? |
<!-- prettier-ignore-end -->
