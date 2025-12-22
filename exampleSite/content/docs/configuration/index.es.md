---
title: "Configuración"
weight: 4
draft: false
description: "Todas las variables de configuración disponibles en Blowfish."
slug: "configuration"
tags: ["configuración", "documentación"]
series: ["Documentación"]
series_order: 4
---

Blowfish es un tema altamente personalizable y utiliza algunas de las últimas características de Hugo para simplificar su configuración.

El tema viene con una configuración predeterminada que te permite empezar con un blog básico o sitio web estático.

{{< alert "fire" >}}
Acabamos de lanzar una herramienta CLI para ayudarte a empezar con Blowfish. Te ayudará con la instalación y configuración. Instala la herramienta CLI globalmente usando:

```bash
npx blowfish-tools
```

{{< /alert >}}

> Los archivos de configuración incluidos con el tema se proporcionan en formato TOML ya que es la sintaxis predeterminada de Hugo. Siéntete libre de convertir tu configuración a YAML o JSON si lo deseas.

La configuración predeterminada del tema está documentada en cada archivo para que puedas ajustar libremente la configuración según tus necesidades.

{{< alert >}}
Como se describe en las [instrucciones de instalación]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), debes ajustar la configuración de tu tema modificando los archivos en la carpeta `config/_default/` de tu proyecto Hugo y eliminar el archivo `hugo.toml` en la raíz de tu proyecto.
{{< /alert >}}

## Configuración del sitio

Las variables de configuración estándar de Hugo se respetan en todo el tema, sin embargo, hay algunas cosas específicas que deben configurarse para la mejor experiencia.

La configuración del sitio se gestiona a través del archivo `config/_default/hugo.toml`. La tabla a continuación describe todas las configuraciones que Blowfish aprovecha.

Ten en cuenta que los nombres de variables proporcionados en esta tabla usan notación de puntos para simplificar la estructura de datos TOML (es decir, `outputs.home` se refiere a `[outputs] home`).

<!-- prettier-ignore-start -->
| Nombre | Predeterminado | Descripción |
| --- | --- | --- |
| `theme` | `"blowfish"` | Al usar Módulos Hugo, este valor de configuración debe eliminarse. Para todos los demás tipos de instalación, esto debe establecerse en `blowfish` para que el tema funcione. |
| `baseURL` | _No establecido_ | La URL a la raíz del sitio web. |
| `defaultContentLanguage` | `"en"` | Este valor determina el idioma predeterminado de los componentes del tema y el contenido. Consulta la sección [idioma e i18n](#idioma-e-i18n) a continuación para los códigos de idioma compatibles. |
| `enableRobotsTXT` | `true` | Cuando está habilitado, se creará un archivo `robots.txt` en la raíz del sitio que permite a los motores de búsqueda rastrear todo el sitio. Si prefieres proporcionar tu propio `robots.txt` prefabricado, establece en `false` y coloca tu archivo en el directorio `static`. Para control completo, puedes proporcionar un [diseño personalizado]({{< ref "content-examples#custom-layouts" >}}) para generar este archivo. |
| `pagination.pagerSize` | `10` | El número de artículos listados en cada página de la lista de artículos. |
| `summaryLength` | `0` | El número de palabras que se utilizan para generar el resumen del artículo cuando no se proporciona uno en el [front matter]({{< ref "front-matter" >}}). Un valor de `0` usará la primera oración. Este valor no tiene efecto cuando los resúmenes están ocultos. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | Los formatos de salida que se generan para el sitio. Blowfish requiere HTML, RSS y JSON para que todos los componentes del tema funcionen correctamente. |
| `permalinks` | _No establecido_ | Consulta la [documentación de Hugo](https://gohugo.io/configuration/permalinks/) para la configuración de permalinks. |
| `taxonomies` | _No establecido_ | Consulta la sección [Organización del contenido]({{< ref "getting-started#organising-content" >}}) para la configuración de taxonomías. |
<!-- prettier-ignore-end -->

## Miniaturas

Blowfish fue construido para que sea fácil agregar soporte visual a tus artículos. Si estás familiarizado con la estructura de artículos de Hugo, solo necesitas colocar un archivo de imagen (casi todos los formatos son compatibles pero recomendamos `.png` o `.jpg`) que comience con `feature*` dentro de tu carpeta de artículo. Y eso es todo, Blowfish podrá usar la imagen tanto como miniatura dentro de tu sitio web como para tarjetas <a target="_blank" href="https://oembed.com/">oEmbed</a> en plataformas sociales.

[Aquí]({{< ref "thumbnails" >}}) también hay una guía con más información y un [ejemplo]({{< ref "thumbnail_sample" >}}) si quieres ver cómo puedes hacerlo.

## Idioma e i18n

Blowfish está optimizado para sitios web completamente multilingües y los recursos del tema están traducidos a varios idiomas de forma predeterminada. La configuración de idioma te permite generar múltiples versiones de tu contenido para proporcionar una experiencia personalizada a tus visitantes en su idioma nativo.

El tema actualmente soporta los siguientes idiomas por defecto:

| Idioma | Código |
| --- | --- |
| Árabe | `ar` |
| Búlgaro | `bg` |
| Bengalí | `bn` |
| Catalán | `ca` |
| Checo | `cs` |
| Alemán | `de` |
| Inglés | `en` |
| Esperanto | `eo` |
| Español (España) | `es` |
| Finlandés | `fi` |
| Francés | `fr` |
| Gallego | `gl` |
| Hebreo | `he` |
| Croata | `hr` |
| Húngaro | `hu` |
| Indonesio | `id` |
| Italiano | `it` |
| Japonés | `ja` |
| Coreano | `ko` |
| Neerlandés | `nl` |
| Persa | `fa` |
| Polaco | `pl` |
| Portugués (Brasil) | `pt-br` |
| Portugués (Portugal) | `pt-pt` |
| Rumano | `ro` |
| Ruso | `ru` |
| Tailandés | `th` |
| Turco | `tr` |
| Vietnamita | `vi` |
| Chino simplificado (China) | `zh-cn` |
| Chino tradicional (Taiwán) | `zh-tw` |

Las traducciones predeterminadas pueden sobrescribirse creando un archivo personalizado en `i18n/[code].yaml` que contenga las cadenas de traducción. También puedes usar este método para agregar nuevos idiomas. Si deseas compartir una nueva traducción con la comunidad, por favor [abre una pull request](https://github.com/nunocoracao/blowfish/pulls).

### Configuración

Para ser lo más flexible posible, se debe crear un archivo de configuración de idioma para cada idioma en el sitio web. Por defecto, Blowfish incluye una configuración de idioma en inglés en `config/_default/languages.en.toml`.

El archivo predeterminado puede usarse como plantilla para crear idiomas adicionales, o renombrarse si deseas escribir tu sitio web en un idioma diferente al inglés. Simplemente nombra el archivo usando el formato `languages.[language-code].toml`.

{{< alert >}}
**Nota:** Asegúrate de que el parámetro `defaultContentLanguage` en la [configuración del sitio](#configuración-del-sitio) coincida con el código de idioma en el nombre del archivo de configuración de idioma.
{{< /alert >}}

Para información detallada sobre todos los parámetros de configuración disponibles, consulta la documentación en inglés ya que los nombres de parámetros son técnicos y permanecen en su forma original.

## Parámetros del tema

Blowfish proporciona un gran número de parámetros de configuración que controlan cómo funciona el tema. La lista completa de todos los parámetros disponibles se encuentra en el archivo `config/_default/params.toml`.

Muchos de los valores predeterminados de artículos pueden sobrescribirse por artículo especificándolos en el front matter. Consulta la sección [Front Matter]({{< ref "front-matter" >}}) para más detalles.

## Otros archivos de configuración

El tema también incluye un archivo de configuración `markup.toml`. Este archivo contiene algunos parámetros importantes que aseguran que Hugo esté correctamente configurado para generar sitios construidos con Blowfish.

Siempre asegúrate de que este archivo esté presente en el directorio de configuración y que los valores requeridos estén establecidos. No hacerlo puede causar que ciertas características funcionen incorrectamente y podría resultar en comportamiento no deseado.
