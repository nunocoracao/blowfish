---
title: "主页布局"
date: 2020-08-13
draft: false
description: "在 Blowfish 主题中设置主页布局。"
slug: "homepage-layout"
tags: ["主页", "布局", "文档"]
series: ["部署教程"]
series_order: 5
---

Blowfish 提供了一个完全灵活的主页布局。你可以选择两种主要模板，并提供了额外的参数来帮助调整设计。当然，你也可以提供自己的模板，完全控制主页的内容。

主页布局由 `params.toml` 配置文件中的 `homepage.layout` 参数来控制的。此外所有布局都默认包括 [最近文章](#recent-articles)。

## 个人资料布局 (profile)

默认的布局是 profile 布局，这非常适合个人网站和博客。它将作者的详细信息置于中心位置，并附带了头像和社交平台的链接。

<img class="thumbnailshadow" src="img/home-profile.png"/>

作者信息是在语言配置文件中提供的。具体的参数详情，请参考[快速入门]({{< ref "getting-started" >}})和[语言配置]({{< ref "configuration##language-and-i18n" >}})的内容。

此外，主页内容中提供的任何 Markdown 都会显示在作者资料的下方。这对使用短代码显示简介或其他主页的自定义内容提供了更多的灵活性。

如果想要启用 profile 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "profile"`。

## 页面布局（page）

页面布局只会简单的显示你的 Markdown 内容，这种方式非常适合静态网站，并提供了很多灵活性。

<img class="thumbnailshadow" src="img/home-page.png"/>

如果想要启用 page 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "page"`。

## 英雄布局（hero）

英雄布局（hearo）组合了个人资料布局（profile）和卡片布局（card）。它不仅显示了网站作者的个人信息，还在个人资料下方加载了你的 markdown 内容。 

<img class="thumbnailshadow" src="img/home-hero.png"/>

如果想要启用 hero 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "hero"`。

## 背景布局（background）

背景布局（background）相对于英雄布局（hero）更叫平滑。和英雄布局（hero）类似，它也显示了网站作者的信息，并在其下方加载 markdown 内容。

<img class="thumbnailshadow" src="img/home-background.png"/>

如果想要启用 background 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "background"` 和 `homepage.homepageImage` 。

## 卡片布局（card）

卡片模板（card）是在页面布局上的扩展，它同样提供了灵活性。在显示了你的 markdown 内容的同时，展示了一个卡片组件中的图像。

<img class="thumbnailshadow" src="img/home-card.png"/>

如果想要启用 card 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "card"` 和 `homepage.homepageImage` 。

## 自定义布局（custom）

如果以上几个布局还没有满足你的需求，你还可以自己创建自定义布局。这样你可以基于一个空白的画布，来完全控制页面上的内容。

如果想要启用 custom 布局，请在 `params.toml` 配置文件中设置 `homepage.layout = "custom"` 。

配置好参数后，在  `layouts/partials/home` 目录下创建一个 `custom.html` 文件。 `custom.html` 文件中定义的任何内容都会被放置在网站主页的内容区域。你可以使用 HTML、Tailwind 或 Hugo 模板函数来定义你的布局。

如果你想在自定义布局上添加 [最近文章](#recent-articles)，请使用 `recent-articles/main.html` 中的内容。

如果你想在网站[主页]({{< ref "/" >}})使用自定义布局来实现在个人资料和页面布局之间的切换。这里的[GitHub 仓库](https://github.com/nunocoracao/blowfish/blob/main/exampleSite/layouts/partials/home/custom.html)有一个例子可以参考。

## 最近文章

所有的主页布局都可以在主要内容下方显示最近文章。如果想要启用此功能，只需要在 `params.toml` 配置文件中将 `homepage.showRecent` 参数设置为 `true` 即可。

<img class="thumbnailshadow" src="img/home-list.png"/>

这部分会列举出你在 `mainSections` 参数中设置的文章列表，此参数允许你使用网站上的任何内容类型。例如，如果你想在最新文章中展示 _posts_ 和 _projects_ 内容中的文章，你可以将此值设置为 `["posts", "projects"]`，这两个部分中的所有文章都会填充到最近文章列表中。Blowfish 主题期望这个参数是一个数组，如果你只想设置一个部分的所有文章，你可以设置为 `["blog"]` 即可。

## 缩略图

Blowfish 为你的文章提供了视觉支持。如果你熟悉 Hugo 的文章结构，只需要在你的文章对应的文件夹中防止一个以`feature*`开头的图像文件即可，图像类型几乎支持所有格式，更推荐使用`.png` 或者 `.jpg`。这样一来，Blowfish 将会在你的网站内使用该图片作为缩略图，并用在社交媒体平台上的 <a target="_blank" href="https://oembed.com/">oEmbed</a> 卡片中。 

[这是]({{< ref "thumbnails" >}})有更多详细内容，并且有一个便于理解的[示例]({{< ref "thumbnail_sample" >}})。

## 卡片画廊

Blowfish 支持将标准的文章列表显示为卡片画廊，你可以在主页的最近文章和网站上的文章列表中配置这个选项。
- 对于主页可以使用 `homepage.cardView` 和 `homepage.cardViewScreenWidth` 参数
- 对于列表页可以使用 `list.cardView` 和 `list.cardViewScreenWidth` 参数
请查看 [配置文件]({{< ref "configuration" >}}) 以获取更多信息。
