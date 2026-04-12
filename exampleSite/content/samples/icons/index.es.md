---
title: "Iconos"
date: 2020-08-14
lastmod: 2022-03-09
draft: false
description: "Soporte de iconos en Blowfish."
slug: "icons"
tags: ["iconos", "ejemplo", "shortcodes"]
type: 'sample'
---

Blowfish tiene soporte integrado para varios iconos de [FontAwesome 6](https://fontawesome.com/icons). Estos pueden incluirse en tu sitio web a través del [partial icon]({{< ref "docs/partials#icon" >}}) o el [shortcode icon]({{< ref "docs/shortcodes#icon" >}}).

Además, los iconos personalizados también son totalmente compatibles. Simplemente proporciona tus propios assets de iconos SVG colocándolos en el directorio `assets/icons/` en la raíz de tu proyecto. Todos los iconos en el directorio de iconos estarán disponibles en todo el tema. Para lograr el relleno automático de color, cada ruta SVG necesita el atributo XML `fill="currentColor"`.

La lista completa de iconos integrados y sus nombres correspondientes se puede consultar a continuación.

{{< icon-ref >}}
