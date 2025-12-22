---
title: "Partials"
weight: 9
draft: false
description: "Todos los partials disponibles en Blowfish."
slug: "partials"
tags: ["partials", "analytics", "privacidad", "comentarios", "favicons", "icon", "documentación"]
series: ["Documentación"]
series_order: 9
---

## Analytics

Blowfish proporciona soporte integrado para Fathom Analytics, Google Analytics y Umami Analytics. Fathom es una alternativa de pago a Google Analytics que respeta la privacidad del usuario.

### Fathom Analytics

Para habilitar el soporte de Fathom Analytics, simplemente proporciona tu código de sitio de Fathom en el archivo `config/_default/params.toml`. Si también utilizas la función de dominio personalizado de Fathom y deseas servir su script desde tu dominio, también puedes proporcionar adicionalmente el valor de configuración `domain`. Si no proporcionas un valor `domain`, el script se cargará directamente desde el DNS de Fathom.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

El soporte de Google Analytics se proporciona a través del partial interno de Hugo. Simplemente proporciona la clave `googleAnalytics` en el archivo `config/_default/hugo.toml` y el script se añadirá automáticamente.

Se soportan tanto la versión 3 (analytics.js) como la versión 4 (gtag.js), según el valor de configuración proporcionado:

```toml
# config/_default/hugo.toml

# versión 3
googleAnalytics = "UA-PROPERTY_ID"
# versión 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Para habilitar el soporte de Umami Analytics, simplemente proporciona tu [código de seguimiento de Umami](https://umami.is/docs/collect-data) en el archivo `config/_default/params.toml`.
Si también utilizas la función de dominio personalizado de Umami y deseas servir su script desde tu dominio, también puedes proporcionar adicionalmente el valor de configuración `domain`. Si no proporcionas un valor `domain`, el script se cargará directamente desde el DNS de Umami (analytics.umami.is).
Si quieres que el rastreador solo se ejecute en dominios específicos, puedes proporcionar el valor de configuración `dataDomains`. Si no proporcionas un valor `dataDomains`, el script se ejecutará en cualquier sitio web donde coincidan `domain` y `websiteid`. Si la variable de entorno `TRACKER_SCRIPT_NAME` está configurada, puedes especificar un nombre de script personalizado `scriptName`. Si no está configurada, coméntala o usa el valor predeterminado `script.js`.

{{< alert >}}
**Nota:** Si habilitas Umami Analytics, Blowfish soportará [Umami Track Event](https://umami.is/docs/track-events) automáticamente. Si no deseas soportar Track Event, el parámetro `enableTrackEvent` debe establecerse en `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

Para habilitar el soporte de Seline Analytics, simplemente proporciona tu [token de Seline](https://seline.so/docs/install-seline) en el archivo `config/_default/params.toml`.

{{< alert >}}
**Nota:** Si habilitas Seline Analytics, Blowfish soportará [Seline Track Event](https://seline.so/docs/custom-events) automáticamente. Si no deseas soportar Track Event, el parámetro `enableTrackEvent` debe establecerse en `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Proveedores de analytics personalizados

Si deseas usar un proveedor de analytics diferente en tu sitio web, también puedes sobrescribir el partial de analytics y proporcionar tu propio script. Simplemente crea el archivo `layouts/partials/extend-head.html` en tu proyecto y se incluirá automáticamente en el `<head>` del sitio web.

## Comentarios

Para añadir comentarios a tus artículos, Blowfish incluye soporte para un partial de comentarios que se incluye en la base de cada página de artículo. Simplemente proporciona un `layouts/partials/comments.html` que contenga el código requerido para mostrar tus comentarios elegidos.

Puedes usar ya sea la plantilla Disqus integrada de Hugo o proporcionar tu propio código personalizado. Consulta la [documentación de Hugo](https://gohugo.io/content-management/comments/) para más información.

Una vez que se ha proporcionado el partial, el control más fino sobre dónde se muestran los comentarios se gestiona usando el parámetro `showComments`. Este valor puede establecerse a nivel de tema en el [archivo de configuración]({{< ref "configuration#theme-parameters" >}}) `params.toml`, o por artículo incluyéndolo en el [front matter]({{< ref "front-matter" >}}). El parámetro es `false` por defecto, por lo que debe establecerse en `true` en una de estas ubicaciones para que se muestren los comentarios.

## Favicons

Blowfish proporciona un conjunto predeterminado de favicons en blanco para comenzar, pero puedes proporcionar tus propios recursos para sobrescribirlos. La forma más fácil de obtener nuevos recursos de favicon es generarlos usando un proveedor de terceros como [favicon.io](https://favicon.io).

Los recursos de iconos deben colocarse directamente en la carpeta `static/` de tu sitio web y nombrarse según la lista a continuación. Si usas [favicon.io](https://favicon.io), estos serán los nombres de archivo que se generarán automáticamente para ti, pero puedes proporcionar tus propios recursos si lo deseas.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternativamente, también puedes sobrescribir completamente el comportamiento predeterminado de favicon y proporcionar tus propias etiquetas HTML de favicon y recursos. Simplemente proporciona un archivo `layouts/partials/favicons.html` en tu proyecto y este se inyectará en el `<head>` del sitio en lugar de los recursos predeterminados.

## Icon

Similar al [shortcode icon]({{< ref "shortcodes#icon" >}}), puedes incluir iconos en tus propios templates y partials usando el partial `icon.html` de Blowfish. El partial toma un parámetro que es el nombre del icono a incluir.

**Ejemplo:**

```go
  {{ partial "icon.html" "github" }}
```

Los iconos se rellenan usando pipelines de Hugo, lo que los hace muy flexibles. Blowfish incluye varios iconos integrados para redes sociales, enlaces y otros propósitos. Consulta la página de [ejemplos de iconos]({{< ref "samples/icons" >}}) para una lista completa de los iconos soportados.

Se pueden añadir iconos personalizados proporcionando tus propios recursos de iconos en el directorio `assets/icons/` de tu proyecto. El icono puede luego referenciarse en el partial usando el nombre del archivo SVG sin la extensión `.svg`.

Los iconos también pueden usarse en el contenido de artículos llamando al [shortcode icon]({{< ref "shortcodes#icon" >}}).

## Extensiones

Blowfish también proporciona varios partials de extensión que permiten ampliar la funcionalidad base.

### Enlace de artículo

Si deseas insertar código adicional después de los enlaces de artículos, crea un archivo `layouts/partials/extend-article-link.html`. Esto es especialmente poderoso cuando se combina con el shortcode [`badge`]({{< ref "shortcodes#badge" >}}) que puede usarse para resaltar metadatos de ciertos artículos.

### Head y Footer

El tema permite insertar código adicional directamente en las secciones `<head>` y `<footer>` de la plantilla. Estos pueden ser útiles para proporcionar scripts u otra lógica que no forma parte del tema.

Simplemente crea ya sea `layouts/partials/extend-head.html` o `layouts/partials/extend-footer.html` y estos se incluirán automáticamente en la construcción de tu sitio web. Ambos partials se inyectan como los últimos elementos en `<head>` y `<footer>`, por lo que pueden usarse para sobrescribir los valores predeterminados del tema.

### Extensión Head sin caché

El `extend-head.html` está [en caché](https://gohugo.io/functions/partials/includecached/), y Blowfish también soporta una extensión head sin caché para incluir **condicionalmente** scripts o metadatos basados en propiedades a nivel de página. Para usar esta función, crea un archivo `layouts/partials/extend-head-uncached.html` en tu proyecto. Este archivo se incluirá en la etiqueta HTML `<head>`.

Esto es útil cuando necesitas incluir elementos dinámicos—como scripts o metadatos—basados en propiedades como shortcodes, flags de front matter, u otros datos específicos de la página que no deben almacenarse en caché entre builds.

Por ejemplo, para cargar dinámicamente un archivo JavaScript de CDN basado en la aparición de un shortcode, puedes usar el método [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) dentro de `extend-head-uncached.html`.
