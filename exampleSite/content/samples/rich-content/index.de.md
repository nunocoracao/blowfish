---
title: "Rich Content"
date: 2019-03-10
description: "Eine kurze Beschreibung der Hugo Shortcodes"
summary: "Dies ist ein _Beispiel_ für eine **Rich-Content**-Zusammenfassung."
tags: ["shortcodes", "datenschutz", "beispiel", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

Hugo wird mit mehreren [integrierten Shortcodes](https://gohugo.io/content-management/shortcodes/#embedded) für Rich Content geliefert, zusammen mit einer [Datenschutzkonfiguration](https://gohugo.io/about/hugo-and-gdpr/) und einer Reihe von _einfachen Shortcodes_, die statische und No-JS-Versionen verschiedener Social-Media-Einbettungen ermöglichen.

## YouTube

Unten ist ein Beispiel mit dem integrierten `youtube`-Shortcode.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Dieses Beispiel verwendet den `x`-Shortcode, um einen Tweet auszugeben. Es benötigt zwei benannte Parameter `user` und `id`.

{{< x user="DesignReviewed" id="1085870671291310081" >}}

Alternativ kann der `tweet`-Shortcode verwendet werden, um eine vollständig formatierte Twitter-Karte einzubetten.

## Gist

Der `gist`-Shortcode kann verwendet werden, um ein GitHub Gist einzubetten. Er benötigt zwei unbenannte Parameter: den Benutzernamen und die ID des Gist.

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

Der `vimeo_simple`-Shortcode bettet ein Vimeo-Video ein.

{{< vimeo_simple 48912912 >}}
