---
title: "简码示例"
date: 2019-03-10
description: "Hugo 简码的简要说明"
summary: "这是**简码**内容的示例。"
tags: ["简码", "隐私", "示例", "gist", "twitter", "youtube", "vimeo"]
type: 'sample'
---

Hugo 附带了几个用于丰富内容的[内置简码](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)，以及一个[隐私配置](https: //gohugo.io/about/hugo-and-gdpr/) 和一组干练的简码，支持各种社交媒体嵌入的静态窗口。

## YouTube

下面是一个使用内置 `youtube` 简码的示例。

{{< youtube ZJthWmvUzzc >}}

## Twitter

此示例使用 `twitter_simple` 简码来显示推文。它需要两个参数 `user` 和 `id` 。

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

或者，`tweet` 简码可用于生成嵌入式的 Twitter 卡片。

## Gist

`gist` 简码可用于嵌入 GitHub Gist。它需要两个参数：Gist 的用户名和 ID。

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

## Vimeo

`vimeo_simple` 简码将生成一个嵌入式的 Vimeo 播放器。

{{< vimeo_simple 48912912 >}}
