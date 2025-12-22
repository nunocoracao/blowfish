---
title: "Contenu riche"
date: 2019-03-10
description: "Une brève description des Shortcodes Hugo"
summary: "Ceci est un _exemple_ de résumé de contenu **riche**."
tags: ["shortcodes", "confidentialité", "exemple", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

Hugo est livré avec plusieurs [shortcodes intégrés](https://gohugo.io/content-management/shortcodes/#embedded) pour le contenu riche, ainsi qu'une [configuration de confidentialité](https://gohugo.io/about/hugo-and-gdpr/) et un ensemble de _shortcodes simples_ qui permettent des versions statiques et sans JS de diverses intégrations de réseaux sociaux.

## YouTube

Voici un exemple utilisant le shortcode intégré `youtube`.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Cet exemple utilise le shortcode `x` pour afficher un Tweet. Il nécessite deux paramètres nommés `user` et `id`.

{{< x user="DesignReviewed" id="1085870671291310081" >}}

Alternativement, le shortcode `tweet` peut être utilisé pour intégrer une carte Twitter entièrement formatée.

## Gist

Le shortcode `gist` peut être utilisé pour intégrer un GitHub Gist. Il nécessite deux paramètres non nommés : le nom d'utilisateur et l'ID du Gist.

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

Le shortcode `vimeo_simple` intégrera une vidéo Vimeo.

{{< vimeo_simple 48912912 >}}
