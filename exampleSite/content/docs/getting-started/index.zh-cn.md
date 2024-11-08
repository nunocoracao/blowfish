---
title: "入门指南"
weight: 3
draft: false
description: "所有在你要使用 Blowfish 主题搭建网站之前的准备工作"
slug: "getting-started"
tags: ["安装", "文档"]
series: ["部署教程"]
series_order: 3
---

{{< alert >}}
本节内容需要已经阅读了 [安装 Blowfish 主题]({{< ref "docs/installation" >}})。
{{< /alert >}}

</br>
{{< alert "fire" >}}
我们刚刚推出了一个 CLI 工具，用来帮助你快速开始 Blowfish。 它将帮助你安装和配置 Blowfish 主题。 可以使用以下命令全局安装 CLI 工具：
```bash
npx blowfish-tools
```
{{< /alert >}}


Blowfish 中的配置文件中包含了主题需要的所有可能的设置选项。但默认情况下大多数设置都是被注释的，你只需要取消注释就可以激活或者修改设定选项。

## 基础设置

在刚刚安装完成，创建内容之前，有几个设置需要关注。从 `hugo.toml` 开始，设置 `baseURL` 和 `languageCode` 参数。`languageCode`参数是用来指定你创作内容的主要语言。

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

下一步是设置语言。尽管 Blowfish 支持多语言，但是 `hugo.toml` 只能配置一个主语言。

在 `config/_default` 文件夹中找到 `languages.en.toml`。如果你的主语言是英语，你可以直接使用此文件。否则需要重命名为主语言对应的文件名。例如，如果主语言是法语，那么需要将文件命名为 `languages.fr.toml`。

{{< alert >}}
注意：语言配置文件名中的语言代码需要与 `hugo.toml` 中 `languageCode` 相匹配。
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[params.author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```

`[params.author]` 属性决定了作者信息的展示方式。 作者的图片信息应该放在 `assets/` 文件夹中。作者相关的链接将会按照排列顺序依次展示。

如果你还需要额外属性，在配置部分会有详细说明。

## 颜色方案

Blowfish 主题中包含了数个颜色方案，这些方案可以快速使用。如果需要修改方案，只需要简单的设置 `colorScheme` 参数即可。`colorScheme` 可选的值有`blowfish` （默认）、`avocado`、`fire`、`ocean`、`forest`、`princess`、`neon`、`bloody`、`terminal`、`marvel`、`noir`、`autumn`、`congo`和`slate`。

```toml
# config/_default/params.toml

colorScheme = "blowfish"
```

Blowfish 定义了一种由三种主色调构成的配色方案，每种主色调包含了10种子色调，10个色调是借鉴 [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) 中的定义。Blowfish 中定义了多个预置的三色主题，以便在整个主题中使用。

#### Blowfish（默认）
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Avocado
{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Fire
{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Forest
{{< swatches "#658c86" "#3bf5df" "#06d45c" >}}

#### Princess
{{< swatches "#8c658c" "#f53bf2" "#7706d4" >}}

#### Neon
{{< swatches "#8338ec" "#ff006e" "#3a86ff" >}}

#### Bloody
{{< swatches "#d90429" "#8d99ae" "#457b9d" >}}

#### Terminal
{{< swatches "#004b23" "#38b000" "#1a759f" >}}

#### Marvel
{{< swatches "#2541b2" "#d81159" "#ffbc42" >}}

#### Noir
{{< swatches "#5c6b73" "#9db4c0" "#00a5cf" >}}

#### Autumn
{{< swatches "#0a9396" "#ee9b00" "#bb3e03" >}}

#### Congo
{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Slate
{{< swatches "#6B7280" "#64748b" "#6B7280" >}}

这些是内置的配色方案，你也可以去自定义这一部分，请参阅 [高级自定义]({{< ref "advanced-customisation#colour-schemes" >}}) 。

## 整理内容

默认情况下， Blowfish 不强制你使用特定类型的内容。这样你可以随意自定义你想要的内容。你可能喜欢用作静态网站页面、博客帖子，或作为作品集中的某个项目。

这是基本 Blowfish 项目的快速概览。所有内容都放在 `content` 文件夹中：

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

一定要熟练掌握在 Hugo 中组织你想要的内容，此主题也旨在充分利用 Hugo 中页面页面捆绑的逻辑。请阅读  [Hugo 官方文档](https://gohugo.io/content-management/organization/) 以获取更多内容。

Blowfish 在分类方法上面也非常灵活。有的人喜欢使用标签（_tags_）和类别（_categories_）来分组内容，而有的人喜欢用话题（_topics_）。

Hugo 默认是使用帖子、标签和类别，这三种可以开箱即用的。但如果你希望自定义，那么可以创建 `taxonomies.toml` 配置文件来实现：

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

这将把默认的标签和分类替换成话题。有关 Hugo 中命名分类法的更多内容，可以参考 [Hugo 分类方法](https://gohugo.io/content-management/taxonomies/)。

当你创建了一个新的分类法时，需要调整网站上的导航链接，以确保新分类可以指向正确的内容，下面会详细介绍。

## 菜单

Blowfish 有两个可以定制的菜单，以此来适配网站中的内容和布局。`main`菜单出现在网站头部，`footer`菜单出现在页面底部和版权声明上方。

这两个菜单都是配置在 `menus.en.toml` 文件中。与语言配置文件类似，如果你希望使用另一种语言，请重命名这个文件并将 `en` 替换为你所希望的语言代码。

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Privacy"
  url = "https://external-link"
```

`name` 参数用于指定菜单中的文本。你还可以选择性的提供一个 `title` 标题，它将会被填充到链接的 HTML 代码的 `title` 属性中。

`pageRef` 参数用于引用 Hugo 的分类。这是配置菜单最简单的方法，你无需引用任何 Hugo 内容项，它会自动构建正确的链接。如果你需要链接到外部 URL，那么可以使用 `url` 参数。

`pre` 参数用于设置菜单条目上的图标，这个图标需要是 [Blowfish 图标集]({{< ref "samples/icons" >}})中的一个。这个参与可以和 `name` 一起使用，也可以单独使用。如果你指向展示图标，请设置 `identifier` 参数，否则 Hugo 将默认使用 `name` 作为 id，可能不会显示所有菜单项。

菜单中的多个链接将会根据 `weight` 权重参数进行从低到高排序，如果权重值一样那么会按照 `name` 字母顺序排序。

这两个菜单都是完全可选的，如果不需要也可以注释掉。你可以使用文件中提供的模板作为示例。

### 嵌套菜单

Blowfish 还支持嵌套菜单。你需要在`menu.toml` 中定义一个父级菜单项及其子菜单，使用 `parent` 可以指定子菜单项的父级。在上面菜单部分提到的所有参数一样适用于子菜单项，同样地，`pageRef` 和 `url` 也可以在父菜单项中使用。还需要注意一点，嵌套菜单只能在 `main` 菜单中可用，即网站头部的菜单。

```toml
# config/_default/menus.toml

[[main]]
  name = "Parent"
  weight = 20

[[main]]
  name = "sub-menu 1"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 2"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 3"
  parent = "Parent"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### 子导航菜单

此外，你可以设置一个子导航菜单。只需要在 `menus.toml` 中将新的菜单项定义为 `subnavigation` 即可。
这将在主菜单下面展示第二行，其中包含子类别项。

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "An interesting topic"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "My Awesome Category"
  pageRef = "categories/awesome"
  weight = 20
```

默认的 `name` 是 `pageRef` 的首字母大写。

## 缩略图 & 背景

Blowfish 的创立开端旨在便于为文章添加视觉效果。如果你熟悉 Hugo 的文章结构，只需要在你文章所在的文件夹中，放置一个以`feature*`开头的图像文件（Blowfish支持所有格式的文件，但更推荐使用 `.png` 或 `.jpg`）。就这样，Blowfish 就能够将图像文件作为文章的缩略图，而且能够在社交平台的 `<a target="_blank" href="https://oembed.com/">oEmbed</a>` 卡片中使用。

[这里]({{< ref "thumbnails" >}}) 有一个指南，提供了个人更多的内容和[示例]({{< ref "thumbnail_sample" >}})。如果你想看看具体如何操作可以看这里。

Blowfish 还支持在文章和列表中使用背景图。为了使与缩略图不同，可以添加一个名为 `background*` 开头的图像文件。当然如果你没有设置背景图片，Blowfish 会默认使用缩略图作为背景图。

## 详细配置

上面的步骤介绍了最基本的配置。如果你现在运行 `hugo server`，你将会看到一个空白的 Blowfish 网站。更加详细的内容在[配置]({{< ref "configuration" >}})中介绍。

