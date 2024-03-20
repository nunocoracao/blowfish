---
title: "缩略图"
date: 2022-09-26
draft: false
description: "在你的文章中开启缩略图。"
slug: "thumbnail_sample"
tags: ["缩略图", "示例"]
summary: "一个展示如何在你的文章中开始使用缩略图的快速示例。"
type: 'sample'
---

这是一个在你的文章使用缩略图的快速示例。

如果你的文章目录看起来像这样：
If your average directory for an article looks like this:

```shell
content
└── awesome_article.md
```

你需要将他从单个 markdown 文件更改为一个同名文件夹。创建一个与文章同名的目录，并在此目录中添加一个 `index.md` 文件。目录结构如下所示：

```shell
content
└── awesome_article
    └── featured.png
```

在文件夹内部，你可以添加一个 `feature*` 开头的特征图片（支持几乎所有格式，但推荐使用 `.png` 或 `.jpg`）。目录结构如下所示：

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

这将告诉 Blowfish 这篇文章有一个特征图片，这个图片可以在网站作为缩略图使用，也可以用于社交平台上的 <a target="_blank" href="https://oembed.com/">oEmbed</a> 卡片。
作为一个示例，你可以尝试将这篇文章的 URL 复制粘贴到一个可以显示 oEmbeds 的平台，如 Twitter、WhatsApp、Telegram等等。
