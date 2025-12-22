---
title: "Conteúdo rico"
date: 2019-03-10
description: "Uma breve descrição dos Shortcodes do Hugo"
summary: "Este é um _exemplo_ de um resumo de conteúdo **rico**."
tags: ["shortcodes", "privacidade", "exemplo", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

O Hugo vem com vários [shortcodes integrados](https://gohugo.io/content-management/shortcodes/#embedded) para conteúdo rico, junto com uma [configuração de privacidade](https://gohugo.io/about/hugo-and-gdpr/) e um conjunto de _shortcodes simples_ que permitem versões estáticas e sem JS de várias incorporações de redes sociais.

## YouTube

Abaixo está um exemplo usando o shortcode integrado `youtube`.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Este exemplo usa o shortcode `x` para exibir um Tweet. Ele requer dois parâmetros nomeados `user` e `id`.

{{< x user="DesignReviewed" id="1085870671291310081" >}}

Alternativamente, o shortcode `tweet` pode ser usado para incorporar um cartão do Twitter totalmente formatado.

## Gist

O shortcode `gist` pode ser usado para incorporar um GitHub Gist. Ele requer dois parâmetros sem nome: o nome de usuário e o ID do Gist.

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

O shortcode `vimeo_simple` incorporará um vídeo do Vimeo.

{{< vimeo_simple 48912912 >}}
