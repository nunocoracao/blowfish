---
title: "缩略图"
weight: 10
draft: false
description: "为你的文章配置缩略图。"
slug: "thumbnails"
tags: ["缩略图", "配置", "文档"]
series: ["部署教程"]
series_order: 6
---

## 缩略图

Blowfish 对视觉支持进行了增强，可以让你轻松地为文章添加缩略图。你只需要将一个以 `feature*` 开头的图像文件（支持几乎所有格式，但更推荐 `.png` 或 `.jpg`）放置在文章所在的目录中，如下面所示：

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

这将告诉 Blowfish 这篇文章有一个特征图片，这个图片可以在网站作为缩略图使用，也可以用于社交平台上的 <a target="_blank" href="https://oembed.com/">oEmbed</a> 卡片。

## 文件结构

如果你仅仅使用一个 `.md` 文件作为文章，文件结构如下所示：

```shell
content
└── awesome_article.md
```

如果想添加缩略图，你需要将单个 Markdown 文件放在文件夹中。创建一个与文章同名的目录，在其中创建 `index.md` 文件。文件结构如下所示：

```shell
content
└── awesome_article
    └── index.md
```

然后你只需要像之前那样添加一个特征图片。如果你想看示例，你可以参 [这个示例]({{< ref "thumbnail_sample" >}})。

## Hero 图片

缩略图将默认用作每篇文章的 hero 图片。开启此功能，可以使用全局的 `article.showHero` 参数来控制整个站点所有文章，或者扉页参数 `showHero` 来控制其中一个文章。如果你想覆盖 hero 图片的样式，你可以在 `./layouts/partials/` 文件夹中创建一个名为 `hero.html` 的文件，它会覆盖主题中的默认部分。
