---
title: "リッチコンテンツ"
date: 2019-03-10
description: "Hugo ショートコードの簡単な説明"
summary: "This is an _example_ of a **rich** content summary."
tags: ["shortcodes", "privacy", "sample", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

Hugo には、リッチコンテンツのためのいくつかの[組み込みショートコード](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)と[プライバシー設定](https://gohugo.io/about/hugo-and-gdpr/)、そして様々なソーシャルメディアの埋め込みを静的に、 JS なしで可能にする _simple shortcodes_ のセットが同梱されています。

## YouTube

下記のものは `youtube` ショートコードの組み込みを利用した例です。

{{< youtube ZJthWmvUzzc >}}

## Twitter

この例はツイートを `twitter_simple` ショートコードを利用して出力しています。こちらは `user` と `id` の二つのパラメータを必須としています。

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

代わりとして、 `tweet` ショートコードが完全にマークアップされた Twitter カードの埋め込みに利用できます、

## Gist

`gist` ショートコードは GitHub Gist の埋め込みに利用できます。こちらは Gist のユーザー名と ID の二つのパラメータを必須としています。

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

`vimeo_simple` ショートコードは Vimeo 動画を埋め込むことができます。

{{< vimeo_simple 48912912 >}}
