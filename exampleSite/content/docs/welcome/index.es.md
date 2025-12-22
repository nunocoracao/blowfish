---
title: "Bienvenido a Blowfish"
weight: 1
draft: false
description: "Descubre las novedades de Blowfish versión 2.0."
tags: ["nuevo", "documentación"]
series: ["Documentación"]
series_order: 1
---

{{< lead >}}
Blowfish está repleto de funcionalidades.
{{< /lead >}}

El objetivo original de Blowfish era desarrollar un tema simple y ligero. El tema es un fork de <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> y expande su visión inicial.

## Tailwind CSS 3.0

Tailwind CSS es el corazón de Blowfish y esta versión contiene la última [Tailwind CSS versión 3](https://tailwindcss.com/blog/tailwindcss-v3). Trae optimizaciones de rendimiento y soporte para algunas nuevas y geniales características CSS.

{{< youtube "TmWIrBPE6Bc" >}}

## Soporte multilingüe

Una característica muy solicitada: ¡Blowfish ahora es multilingüe! Si publicas tu contenido en varios idiomas, el sitio se construirá con todas las traducciones disponibles.

<div class="text-2xl text-center" style="font-size: 2.8rem">🇬🇧 🇩🇪 🇫🇷 🇪🇸 🇨🇳 🇧🇷 🇹🇷 🇧🇩</div>

Gracias a las contribuciones de la comunidad, Blowfish ya ha sido traducido a [treinta idiomas](https://github.com/nunocoracao/blowfish/tree/main/i18n), y se añadirán más con el tiempo. Por cierto, ¡los [pull requests](https://github.com/nunocoracao/blowfish/pulls) para nuevos idiomas siempre son bienvenidos!

## Soporte para idiomas RTL

Uno de los beneficios de las nuevas características de Tailwind y multilingüe es la capacidad de añadir soporte para idiomas RTL. Cuando está habilitado, todo el contenido del sitio se reorganizará de derecha a izquierda. Cada elemento en el tema ha sido rediseñado para asegurar que se vea genial en este modo, lo que ayuda a los autores que desean generar contenido en idiomas RTL.

RTL se controla por idioma, por lo que puedes mezclar contenido RTL y LTR en tus proyectos y el tema responderá en consecuencia.

## Redimensionamiento automático de imágenes

Un gran cambio en Blowfish 2.0 es la adición del redimensionamiento automático de imágenes. Usando el poder de Hugo Pipes, las imágenes en el contenido Markdown ahora se escalan automáticamente a diferentes tamaños de salida. Estos se presentan usando atributos HTML `srcset`, permitiendo servir tamaños de archivo optimizados a los visitantes de tu sitio.

![Imagen con texto alternativo](image-resizing.png)

```html
<!-- Markdown: ![Mi imagen](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w"
  src="/image_635x0_resize_q75_box.jpg"
  alt="Mi imagen"
/>
```

¡Lo mejor de todo es que no necesitas cambiar nada! Simplemente inserta la sintaxis estándar de imagen Markdown y deja que el tema haga el resto. Si quieres un poco más de control, el shortcode `figure` ha sido completamente reescrito para proporcionar los mismos beneficios de redimensionamiento.


## Búsqueda en el sitio

Impulsada por [Fuse.js](https://fusejs.io), la búsqueda del sitio permite a los visitantes encontrar tu contenido rápida y fácilmente. Todas las búsquedas se realizan del lado del cliente, lo que significa que no hay nada que configurar en el servidor y las consultas se realizan súper rápido. Simplemente habilita la función en la configuración de tu sitio y listo. ¡Ah, y también soporta navegación completa por teclado!

## Tablas de contenido

Una característica muy solicitada: Blowfish ahora soporta tablas de contenido en las páginas de artículos. Puedes verla en acción en esta página. Los contenidos son completamente responsivos y se ajustarán para aprovechar el espacio disponible en diferentes resoluciones de pantalla.

Disponible de forma global o por artículo, la tabla de contenidos puede personalizarse completamente usando los valores de configuración estándar de Hugo, permitiéndote ajustar el comportamiento a tu proyecto.

## Mejoras de accesibilidad

Desde añadir descripciones ARIA a más elementos hasta simplemente ajustar el contraste de ciertos elementos de texto, esta versión es la más accesible hasta ahora.

La versión 2 también introduce enlaces de "saltar al contenido" y "volver arriba" que permiten una navegación rápida. También hay atajos de teclado para activar elementos como la búsqueda sin necesidad de usar el ratón.

Las nuevas funciones de redimensionamiento de imágenes también proporcionan control total sobre los elementos `alt` y `title`, permitiendo una experiencia accesible para todos los visitantes.

## Y mucho más

Hay innumerables otras funciones para explorar. Desde poder mostrar taxonomías en artículos y páginas de lista, hasta usar el nuevo parámetro de autor `headline` para personalizar tu página de inicio. También hay datos estructurados JSON-LD mejorados que optimizan aún más el rendimiento SEO.
