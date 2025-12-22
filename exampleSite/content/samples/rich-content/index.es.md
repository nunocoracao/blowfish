---
title: "Contenido enriquecido"
date: 2019-03-10
description: "Una breve descripción de los Shortcodes de Hugo"
summary: "Este es un _ejemplo_ de un resumen de contenido **enriquecido**."
tags: ["shortcodes", "privacidad", "ejemplo", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

Hugo viene con varios [shortcodes integrados](https://gohugo.io/content-management/shortcodes/#embedded) para contenido enriquecido, junto con una [configuración de privacidad](https://gohugo.io/about/hugo-and-gdpr/) y un conjunto de _shortcodes simples_ que permiten versiones estáticas y sin JS de varias incrustaciones de redes sociales.

## YouTube

A continuación hay un ejemplo usando el shortcode integrado `youtube`.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Este ejemplo usa el shortcode `x` para mostrar un Tweet. Requiere dos parámetros nombrados `user` e `id`.

{{< x user="DesignReviewed" id="1085870671291310081" >}}

Alternativamente, el shortcode `tweet` se puede usar para incrustar una tarjeta de Twitter completamente formateada.

## Gist

El shortcode `gist` se puede usar para incrustar un GitHub Gist. Requiere dos parámetros sin nombre: el nombre de usuario y el ID del Gist.

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

El shortcode `vimeo_simple` incrustará un video de Vimeo.

{{< vimeo_simple 48912912 >}}
