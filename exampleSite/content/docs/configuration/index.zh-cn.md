---
title: "配置"
date: 2020-08-14
draft: false
description: "介绍 Blowfish 中所有可用的的配置变量。"
slug: "configuration"
tags: ["配置", "文档"]
series: ["部署教程"]
series_order: 4
---

Blowfish 适宜个高度定制化的主题，使用到了一些 Hugo 中最新的特性来简化配置方式。

主题附带了默认配置，可以让你快速启动一个基本的博客或静态网站。

{{< alert "fire" >}}
我们刚刚推出了 CLI 工具，来帮助你快速上手 Blowfish。它将帮助你进行安装和配置。使用以下命令可以全局范围安装 CLI 工具：

```bash
npx blowfish-tools
```
{{< /alert >}}

> 配置文件是基于 TOML 格式的，这也是 Hugo 默认支持的语法。当然如果你愿意，也可以将配置转换成 YAML 或 JSON 格式。

默认情况下，在每个文件中都定义了主题中的可用参数，因此你可以自由调整设置来满足你的需求。

{{< alert >}}
正如[安装说明]({{< ref "/docs/installation#set-up-theme-configuration-files" >}})中的内容，如果你想调整主题配置，可以修改 Hugo 项目中 `config/_default/` 文件夹下的文件，并删除项目根目录中的 `config.toml` 文件。
{{< /alert >}}

## 网站配置

Blowfish 主题支持了 Hugo 框架中定义的所有标准配置变量。但如果希望有更好的体验，需要设置一些特定的配置。

网站配置是通过 `config/_default/config.toml` 文件管理的。下面的表格展示了 Blowfish 中的所有设置.

值得注意的是，表格中提供的变量名可以使用点表示法来简化 TOML 数据结构，例如 `outputs.home` 指的是 `[outputs] home`。

<!-- prettier-ignore-start -->
| 名称                     | 默认值                    | 描述                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`                  | `"blowfish"`              | 当你使用 Hugo 模块安装时，应该移除这个配置项。但对 Git 子模块或本地文件复制的安装方式，必须将其设置为 blowfish 才能正常工作。                                                                                                                                                                        |
| `baseURL`                | 无                        | 网站 URL 根地址。                                                                                                                                                                                                                                                                                    |
| `defaultContentLanguage` | `"en"`                    | 这个值决定了主题中组件和内容所使用的默认语言。 参考 [语言和 i18n](#language-and-i18n) 部分来了解 blowfish 支持的所有语言代码。                                                                                                                                                                       |
| `enableRobotsTXT`        | `true`                    | 当开启这个值，`robots.txt` 文件将会被创建在站点根目录， 这将允许搜索引擎抓取整个网站。如果你想要自己提供 `robots.txt`，那么设置这个值为 `false` 并把你的文件放置到 `static` 目录下。 为了实现完全控制，你可以需要提供一个 [自定义布局]({{< ref "content-examples#custom-layouts" >}}) 来生成此文件。 |
| `paginate`               | `10`                      | 定义文章列表中，每页展示的文章数量。                                                                                                                                                                                                                                                                 |
| `summaryLength`          | `0`                       | 当[扉页参数]({{< ref "front-matter" >}}) 中没有提供文章摘要时，此参数定义了自动生成文章摘要的单词数量。如果值为`0`，则默认使用第一句话作为摘要。当摘要被隐藏，这个值没有任何效果。                                                                                                                   |
| `outputs.home`           | `["HTML", "RSS", "JSON"]` | 为站点自动生成输出格式。Blowfish 要求 HTML、RSS 和 JSON 都需要有，以保证主题组件可以正常运作。                                                                                                                                                                                                       |
| `permalinks`             | 无                        | 参考 [Hugo 文档](https://gohugo.io/content-management/urls/#permalinks) 中的自定义文章的固定链接配置。                                                                                                                                                                                               |
| `taxonomies`             | 无                        | 参考 [整理内容]({{< ref "getting-started#organising-content" >}}) 中的分类器配置。                                                                                                                                                                                                                   |
<!-- prettier-ignore-end -->

## 缩略图

Blowfish 的创立开端旨在便于为文章添加视觉效果。如果你熟悉 Hugo 的文章结构，只需要在你文章所在的文件夹中，放置一个以`feature*`开头的图像文件（Blowfish支持所有格式的文件，但更推荐使用 `.png` 或 `.jpg`）。就这样，Blowfish 就能够将图像文件作为文章的缩略图，而且能够在社交平台的 `<a target="_blank" href="https://oembed.com/">oEmbed</a>` 卡片中使用。

[这里]({{< ref "thumbnails" >}}) 可以看到更多内容，同时我们提供了一个[示例]({{< ref "thumbnail_sample" >}})，以便你具体看看如何操作。

## 语言和i18n

Blowfish 针对多语言网站进行了优化，主题的资源素材目前已经翻译成了多个语言版本。语言配置允许你生成多个版本的内容介绍，为网站的访问者提供他们母语的定制化体验。

Blowfish 主题目前默认支持了以下语言：

| 语言                         | 代码    |
| ---------------------------- | ------- |
| Arabic                       | `ar`    |
| Bulgarian                    | `bg`    |
| Bengali                      | `bn`    |
| Catalan                      | `ca`    |
| Czech                        | `cs`    |
| German                       | `de`    |
| English                      | `en`    |
| Spanish (Spain)              | `es`    |
| Finnish                      | `fi`    |
| French                       | `fr`    |
| Hebrew                       | `he`    |
| Croatian                     | `hr`    |
| Hungarian                    | `hu`    |
| Indonesian                   | `id`    |
| Italian                      | `it`    |
| Japanese                     | `ja`    |
| Korean                       | `ko`    |
| Polish                       | `pl`    |
| Portuguese (Brazil)          | `pt-br` |
| Portuguese (Portugal)        | `pt-pt` |
| Romanian                     | `ro`    |
| Russian                      | `ru`    |
| Turkish                      | `tr`    |
| Vietnamese                   | `vi`    |
| Simplified Chinese (China)   | `zh-cn` |
| Traditional Chinese (Taiwan) | `zh-tw` |


组件和静态资源的默认翻译在 `i18n/[code].yaml` 文件中，当然如果你想自定义，覆盖对应的文件即可。你也可以使用这种方法添加新的语言。如果你想与社区分享心得翻译，请[提交PR](https://github.com/nunocoracao/blowfish/pulls)。

### 配置

为了让 Blowfish 尽可能的灵活，每个网站都至少语言创建一个语言配置文件。默认情况下，Blowfish 提供了 `config/_default/languages.en.toml` 文件以默认支持英语。

默认的文件可以用来作为创建其他语言的一个模板，如果你希望用英语以外的语言撰写网站，也可以对其重命名。只需要格式遵循 `languages.[language-code].toml` 的命名即可。

{{< alert >}}
**注意：** 保证 [网站设置](#site-configuration) 中的 `defaultContentLanguage`参数和你提供的语言配置文件相匹配。
{{< /alert >}}


#### 全局

<!-- prettier-ignore-start -->
| 名称           | 默认值       | 描述                                                                                                                                                                                                                             |
| -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `languageCode` | `"en"`       | Hugo 中的默认语言代码。他可以是一个高层级语言（例如 `en`），也可以是一个变体子语言（例如 `en-au`），但一定需要和语言配置文件中的语言代码相匹配。为了符合 HTML 的规范并设置设置大小写敏感的 `isoCode`，Hugo希望这个值最好是小写。 |
| `languageName` | `"English"`  | 语言名称。                                                                                                                                                                                                                       |
| `weight`       | `1`          | 权重决定了在构建多语言时的语言顺序。                                                                                                                                                                                             |
| `title`        | `"Blowfish"` | 网站的标题。它将在网站头部和底部进行展示。                                                                                                                                                                                       |
<!-- prettier-ignore-end -->

#### 参数

<!-- prettier-ignore-start -->
| 名称                   | 默认值             | 描述                                                                                                                                                                                                                           |
| ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `params.displayName`   | `"EN"`             | 语言在网站中的展示名。                                                                                                                                                                                                         |
| `params.isoCode`       | `"en"`             | 用于 HTML 元数据的 ISO 语言代码。他可以是一个高层级语言（例如 `en`），也可以是一个变体子语言（例如 `en-au`）。                                                                                                                 |
| `params.rtl`           | `false`            | 用于指定是否是 RTL 语言。设置为 `true` 则网站会从右向左重拍内容。Blowfish 完全支持同时使用 RTL 和 LTR 语言，并将动态调整。                                                                                                     |
| `params.dateFormat`    | `"2 January 2006"` | 用于指定如何日期格式化。参考 [Hugo 文档](https://gohugo.io/functions/format/#gos-layout-string) 了解可以支持的格式。                                                                                                           |
| `params.logo`          | 无                 | `assets/` 文件夹中站点 logo 的相对路径。该 logo 文件需要提供 2x 分辨率并支持任何图像尺寸。                                                                                                                                     |
| `params.secondaryLogo` | 无                 | `assets/` 文件夹中站点次要 logo 的相对路径。该 logo 文件需要提供 2x 分辨率并支持任何图像尺寸。这个 logo 的颜色方案应该是和上面的是相反或对比的。如果设置了这个值，当用户从 `defaultAppearance` 模式切换时，将会显示这个 logo。 |
| `params.description`   | 无                 | 网站表述。此参数将会被用作站点元数据。                                                                                                                                                                                         |
| `params.copyright`     | 无                 | 此参数是一个 Markdown，用于网站页脚的版权声明。此参数可以包含占位符 { year } ，以此动态插入当前年份。 如果没有提供，Blowfish 将会使用网站 `title` 自动生成版权信息。                                                           |


<!-- prettier-ignore-end -->

#### 作者
| 名称              | 默认值 | 描述                                                                                                                                                                                 |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `author.name`     | 无     | 作者名。此参数将展示在文章页脚。并且如果主页使用了个人资料布局，也会展示此值。                                                                                                       |
| `author.image`    | 无     | 作者头像的文件路径。图像应该是 1:1 的宽高比。可以放在网站的 `assets/` 文件夹中，也可以是外部 URL。                                                                                   |
| `author.headline` | 无     | 包含作者头衔的 Markdown。它将展示在主页中作者姓名打分下方。                                                                                                                          |
| `author.bio`      | 无     | 包含作者简介的 Markdown。它将展示在文章页脚。                                                                                                                                        |
| `author.links`    | 无     | 与作者详细信息一起显示的链接。配置文件中包含示例链接，取消注释即可启用。链接展示的顺序由他们在数组中定义的顺序决定。如果你想自定义链接，可以在 `assets/icons/` 中提供相应的SVG图片。 |
<!-- prettier-ignore-end -->

### 菜单

Blowfish 还支持针对特定语言的菜单配置。菜单配置文件的命名规则和语言配置文件的格式类似。只需要在文件名中提供语言代码，Hugo 就可以知道这是针对哪种语言的菜单。

菜单配置文件的命名格式是 `menus.[language-code].toml`。请始终确保菜单配置项中使用的语言代码和语言配置相匹配。

[入门指南]({{< ref "getting-started#menus" >}})部分更详细地介绍了这个文件的结构。你还可以参考 [Hugo 菜单文档](https://gohugo.io/content-management/menus/)，以获取更多配置示例。

## 主题参数

Blowfish 提供了大量控制主题功能的配置参数，下面的表格中列举了 `config/_default/params.toml` 文件中所有的可用参数。

下面列举的文章参数是全局默认值，都可以在每个文章中的前置元数据内容中进行覆盖。详细可以参考 [扉页参数]({{< ref "front-matter" >}})。

<!-- prettier-ignore-start -->

### 全局

| 名称                            | 默认值       | 描述                                                                                                                                                                                                                                                                    |
| ------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorScheme`                   | `"blowfish"` | 主题使用的颜色方案。合法的值有： `blowfish` （默认）、`avocado`、`fire`、`ocean`、`forest`、`princess`、`neon`、`bloody`、`terminal`、`marvel`、`noir`、`autumn`、`congo` 和 `slate`。 具体参考[颜色方案]({{< ref "getting-started#colour-schemes" >}})以获取更多信息。 |
| `defaultAppearance`             | `"light"`    | 默认的主题外观，可以是 `light` 或者 `dark`。                                                                                                                                                                                                                            |
| `autoSwitchAppearance`          | `true`       | 主题外观是否根据访问者操作系统的偏好自动切换。设置为 `false` 会强制网站始终使用 `defaultAppearance`。                                                                                                                                                                   |
| `enableSearch`                  | `false`      | 是否开启网站的搜索功能，设为 `true` 即为启用。注意，搜索功能依赖于[站点设置](#site-configuration)中的 `outputs.home` 设置，请确保此值配置正确。                                                                                                                         |
| `enableCodeCopy`                | `false`      | 是否可以将`<code>`代码块复制到剪贴板。想要使用代码复制功能，需要将 `highlight.noClasses` 参数设置为 `false`。 阅读 [其他配置文件](#other-configuration-files) 以获取更多信息。                                                                                          |
| `mainSections`                  | 无           | 指定最近文章中应该展示的模块。 如果没有指定，则使用文章数量最多的板块。                                                                                                                                                                                                 |
| `showViews`                     | 无           | 是否显示文章和列表页面的阅读量。这需要集成 firebase ，具体可以看下面。                                                                                                                                                                                                  |
| `showLikes`                     | 无           | 是否显示文章和列表页面的点赞量。这需要集成 firebase ，具体可以看下面。                                                                                                                                                                                                  |
| `robots`                        | 无           | 用于支持搜索引擎爬虫如何处理你的网站。如果设置了该值，它将被输出在页面头部。具体的参数值请参考 [Google 文档](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)。                                                                    |
| `disableImageZoom`              | `false`      | 禁用网站上所有图片缩放功能。                                                                                                                                                                                                                                            |
| `disableImageOptimization`      | `false`      | 禁用图片上所有图片的调整大小和优化功能。                                                                                                                                                                                                                                |
| `disableTextInHeader`           | `false`      | 禁用文本类型的标题，对基于 logo 的标题很有用。                                                                                                                                                                                                                          |
| `defaultBackgroundImage`        | 无           | 设置默认背景图，用于 `background` 和 `hero` 布局下的主页。                                                                                                                                                                                                              |
| `defaultFeaturedImage`          | 无           | 设置默认背景图片，用于所有文章的`featured`图片，可以通过文章目录中的 `featured` 图片替换。                                                                                                                                                                              |
| `highlightCurrentMenuArea`      | 无           | 当菜单被选择时，标记主菜单中的菜单项。                                                                                                                                                                                                                                  |
| `smartTOC`                      | 无           | 开启智能目录，视图中的项目将会被高亮显示。                                                                                                                                                                                                                              |
| `smartTOCHideUnfocusedChildren` | 无           | 当开启智能目录，如果目录级别不再被聚焦时，将会隐藏更深层次的目录。                                                                                                                                                                                                      |

### 页头

| 名称            | 默认值    | 描述                                                                                          |
| --------------- | --------- | --------------------------------------------------------------------------------------------- |
| `header.layout` | `"basic"` | 定义整个站点的页头的布局，支持的参数有 `basic`、`fixed`、`fixed-fill`、and `fixed-fill-blur`. |

### 页脚

| 名称                            | 默认值  | 描述                                                                                                                        |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| `footer.showMenu`               | `true`  | 显示/隐藏页面底部菜单，该菜单可以在 `config/_default/menus.en.toml` 文件中的 `[[footer]]` 部分进行配置。                    |
| `footer.showCopyright`          | `true`  | 是否在底部显示 copyright 版权信息。请注意，如果你想定制，可以在[语言配置](#language-and-i18n)中使用 `copyright` 参数。      |
| `footer.showThemeAttribution`   | `true`  | 是否在网站底部中显示"powered by" 的主题归属信息。如果禁用此参数，请考虑在你网站的其他位置设置主题归属信息，例如在关于页面。 |
| `footer.showAppearanceSwitcher` | `false` | 是否在也页面底部显示外观切换器。浏览器的本地存储会缓存访问者的偏好设置。                                                    |
| `footer.showScrollToTop`        | `true`  | 当设置为 `true` 时，显示返回顶部的箭头按钮。                                                                                |

### 主页

| 名称                            | 默认值      | 描述                                                                                                                                                                                                                                                    |
| ------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `homepage.layout`               | `"profile"` | 首页布局参数。合法的参数值有： `page`、`profile`、`hero`、`card`、`background` 或 `custom`。当你设置为 `custom` 时，你必须创建 `/layouts/partials/home/custom.html` 文件以定制自己的布局。参考[主页布局]({{< ref "homepage-layout" >}})来获取更多信息。 |
| `homepage.homepageImage`        | 无          | 在 `hero` 和 `card` 布局中使用的图像。图片可以来自于本地的资源目录，也可以是外部图像 URL。参考 [主页布局]({{< ref "homepage-layout" >}}) 来获取更多信息。                                                                                               |
| `homepage.showRecent`           | `false`     | 是否在主页展示最新文章列表。                                                                                                                                                                                                                            |
| `homepage.showRecentItems`      | 5           | 如果将 `showRecent` 设置为 `true`，此参数用于显示多少篇文章。如果没有设置或者为0，则默认显示5篇文章。                                                                                                                                                   |
| `homepage.showMoreLink`         | `false`     | 是否在主页底部添加“显示更多”，该链接会降会用带到一个预定义位置。                                                                                                                                                                                        |
| `homepage.showMoreLinkDest`     | `/posts`    | 更多按钮所指向的位置。                                                                                                                                                                                                                                  |
| `homepage.cardView`             | `false`     | 将列表展示为卡片容器。                                                                                                                                                                                                                                  |
| `homepage.cardViewScreenWidth`  | `false`     | 增强列表中卡片的宽度，使其可以占据可用的全部宽度。                                                                                                                                                                                                      |
| `homepage.layoutBackgroundBlur` | `false`     | 向下滚动主页时，是否模糊背景图。                                                                                                                                                                                                                        |

### 文章页

| 名称                                  | 默认值  | 描述                                                                                                                                                                                                                                                         |
| ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `article.showDate`                    | `true`  | 是否显示日期。                                                                                                                                                                                                                                               |
| `article.showViews`                   | `false` | 是否显示文章阅读量。这需要集成 firebase ，具体可以看下面。                                                                                                                                                                                                   |
| `article.showLikes`                   | `false` | 是否显示文章点赞量。这需要集成 firebase ，具体可以看下面。                                                                                                                                                                                                   |
| `article.showDateOnlyInArticle`       | `false` | 是否在文章内显示日期，不影响文章列表或卡片页面的日期显示。                                                                                                                                                                                                   |
| `article.showDateUpdated`             | `false` | 是否展示文章的更新日期。                                                                                                                                                                                                                                     |
| `article.showAuthor`                  | `true`  | 是否在文章底部显示作者框。                                                                                                                                                                                                                                   |
| `article.showAuthorBottom`            | `false` | 作者框显示在每页的底部而不是顶部。                                                                                                                                                                                                                           |
| `article.showHero`                    | `false` | 缩略图是否会在每个页面中作为 hero 图像显示。                                                                                                                                                                                                                 |
| `article.heroStyle`                   | 无      | hero 图像的展示样式，可选的参数值有：`basic`、`big`、`background`、`thumbAndBackground`。                                                                                                                                                                    |
| `article.layoutBackgroundBlur`        | `true`  | 向下滚动文章页时，是否模糊背景图。                                                                                                                                                                                                                           |
| `article.layoutBackgroundHeaderSpace` | `true`  | 在标题和正文之间添加空白区域间隔。                                                                                                                                                                                                                           |
| `article.showBreadcrumbs`             | `false` | 是否在标题栏显示面包屑导航。                                                                                                                                                                                                                                 |
| `article.showDraftLabel`              | `true`  | 当使用 `--buildDrafts` 构建网站时，是否在文章旁边显示草稿。                                                                                                                                                                                                  |
| `article.showEdit`                    | `false` | 是否展示编辑文章的链接。                                                                                                                                                                                                                                     |
| `article.editURL`                     | 无      | 当激活 `article.showEdit` 参数，此参数用于设置文章的编辑链接。                                                                                                                                                                                               |
| `article.editAppendPath`              | `true`  | 当激活 `article.showEdit` 参数，是否将文章的路径附加到 `article.editURL` 参数所设置的 URL 后面。                                                                                                                                                             |
| `article.seriesOpened`                | `false` | 是否默认显示打开系列模块、                                                                                                                                                                                                                                   |
| `article.showHeadingAnchors`          | `true`  | 是否在文章标题旁添加锚点。                                                                                                                                                                                                                                   |
| `article.showPagination`              | `true`  | 是否在文章末尾展示上一篇/下一篇的文章链接。                                                                                                                                                                                                                  |
| `article.invertPagination`            | `false` | 是否翻转下一篇/上一篇文章链接的方向。                                                                                                                                                                                                                        |
| `article.showReadingTime`             | `true`  | 是否展示文章的阅读时间。如果你的语言包含 CJK 语言，需要在 `config.toml` 中开启 `hasCJKLanguage` 参数。                                                                                                                                                       |
| `article.showTableOfContents`         | `false` | 是否展示文章的目录。                                                                                                                                                                                                                                         |
| `article.showRelatedContent`          | `false` | 为文章显示相关内容。如果你想要启用此功能，请检查 `config.toml` 文件并复制所有 *related* 相关的参数，如果你想自定义，也可以对 `config.toml` 添加额外配置。更多内容请参考 [Hugo 文档](https://gohugo.io/content-management/related/) 中关于 *related* 的内容。 |
| `article.relatedContentLimit`         | `3`     | 如果启用`showRelatedContent`，则限制显示相关文章的数量。                                                                                                                                                                                                     |
| `article.showTaxonomies`              | `false` | 是否显示文章的分类或标签信息。                                                                                                                                                                                                                               |
| `article.showAuthorsBadges`           | `false` | 是否在文章或列表中显示 `authors` 分类。这需要开启多个作者 `multiple authors` 和 `authors` 分类法。 请阅读 [这个网页]({{< ref "multi-author" >}}) 来获取更多内容。                                                                                            |
| `article.showWordCount`               | `false` | 是否显示文章的字数。 如果你的语言属于 CJK 语言，需要在 `config.toml` 中开启 `hasCJKLanguage` 参数。                                                                                                                                                          |
| `article.showComments`                | `false` | 是否在文章末尾添加 [评论部分]({{< ref "partials#comments" >}})。                                                                                                                                                                                             |
| `article.sharingLinks`                | 无      | 在文章末尾显示的分享链接。如果没有提供或设置为 `false`，则不会显示任何分享链接。可用的值包括："linkedin"、"twitter"、"reddit"、"pinterest"、"facebook"、"email"、"whatsapp" 和 "telegram"                                                                    |
| `article.showZenMode`                 | `false` | 指定是否激活文章阅读的禅模式，即隐藏常规的界面元素。                                                                                                                                                                                                         |

### 列表页

| 名称                               | 默认值  | 描述                                                                                                                                                                      |
| ---------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list.showHero`                    | `false` | 缩略图是否会在每个页面中作为 hero 图像显示。                                                                                                                              |
| `list.heroStyle`                   | 无      | hero 图像的展示样式，可选的参数值有：`basic`、`big`、`background`、`thumbAndBackground`。                                                                                 |
| `list.showBreadcrumbs`             | `false` | 是否在标题栏显示面包屑导航。                                                                                                                                              |
| `list.layoutBackgroundBlur`        | `true`  | 向下滚动列表页时，是否模糊背景图。                                                                                                                                        |
| `list.layoutBackgroundHeaderSpace` | `true`  | 在标题和正文之间添加空白区域间隔。                                                                                                                                        |
| `list.showTableOfContents`         | `false` | 是否展示目录。                                                                                                                                                            |
| `list.showSummary`                 | `false` | 是否在列表页显示文章摘要。如果在[扉页参数]({{< ref "front-matter" >}})中没有提供摘要，那么将会使用[站点配置](#site-configuration) 中的 `summaryLength` 参数自动生成一个。 |
| `list.showViews`                   | `false` | 是否显示文章阅读量。这需要集成 firebase ，具体可以看下面。                                                                                                                |
| `list.showLikes`                   | `false` | 是否显示文章点赞量。这需要集成 firebase ，具体可以看下面。                                                                                                                |
| `list.showCards`                   | `false` | 是否将每个文章显示未卡片或简单的内联文本。                                                                                                                                |
| `list.groupByYear`                 | `true`  | 是否根据年做聚合。                                                                                                                                                        |
| `list.cardView`                    | `false` | 将列表展示为卡片容器。                                                                                                                                                    |
| `list.cardViewScreenWidth`         | `false` | 增强列表中卡片的宽度，使其可以占据可用的全部宽度。                                                                                                                        |
| `list.constrainItemsWidth`         | `false` | 将项目宽度限制为 `prose` 以提高可读性。在没有 featurn 图片的时候非常有用。                                                                                                |
| `list.showTableOfContents`         | `false` | 是否显示目录。                                                                                                                                                            |

### Sitemap

| 名称                    | 默认值                 | 描述                                                                                                                                |
| ----------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sitemap.excludedKinds` | `["taxonomy", "term"]` | 从生成的 `/sitemap.xml` 文件中排除的内容。 具体的配置请参考[Hugo 文档](https://gohugo.io/templates/section-templates/#page-kinds)。 |

### 分类法 

| 名称                           | 默认值  | 描述                                                                                      |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| `taxonomy.showTermCount`       | `true`  | 是否在分类列表总显示对应的数量。                                                          |
| `taxonomy.showHero`            | `false` | 缩略图是否会在每个页面中作为 hero 图像显示。                                              |
| `taxonomy.heroStyle`           | 无      | hero 图像的展示样式，可选的参数值有：`basic`、`big`、`background`、`thumbAndBackground`。 |
| `taxonomy.showBreadcrumbs`     | `false` | 是否在标题栏显示面包屑导航。                                                              |
| `taxonomy.showViews`           | `false` | 是否显示文章阅读量。这需要集成 firebase ，具体可以看下面。                                |
| `taxonomy.showLikes`           | `false` | 是否显示文章点赞量。这需要集成 firebase ，具体可以看下面。                                |
| `taxonomy.showTableOfContents` | `false` | 是否显示目录。                                                                            |
| `taxonomy.cardView`            | `false` | 将列表展示为卡片容器。                                                                    |

### 术语

| 名称                       | 默认值  | 描述                                                                                       |
| -------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `term.showHero`            | `false` | 缩略图是否会在每个页面中作为 hero 图像显示。                                               |
| `term.heroStyle`           | 无      | hero 图像的展示样式，可选的参数值有： `basic`、`big`、`background`、`thumbAndBackground`。 |
| `term.showBreadcrumbs`     | `false` | 是否在标题栏显示面包屑导航。                                                               |
| `term.showViews`           | `false` | 是否显示文章阅读量。这需要集成 firebase ，具体可以看下面。                                 |
| `term.showLikes`           | `false` | 是否显示文章点赞量。这需要集成 firebase ，具体可以看下面。                                 |
| `term.showTableOfContents` | `false` | 是否显示目录。                                                                             |
| `term.groupByYear`         | `false` | 是否根据年做聚合。                                                                         |
| `term.cardView`            | `false` | 将列表展示为卡片容器。                                                                     |
| `term.cardViewScreenWidth` | `false` | 增强列表中卡片的宽度，使其可以占据可用的全部宽度。                                         |

### Firebase

| 名称                         | 默认值 | 描述                                                                                                                                          |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `firebase.apiKey`            | 无     | Firebase apiKey， 与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。           |
| `firebase.authDomain`        | 无     | Firebase authDomain，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。        |
| `firebase.projectId`         | 无     | Firebase projectId，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。         |
| `firebase.storageBucket`     | 无     | Firebase storageBucket，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。     |
| `firebase.messagingSenderId` | 无     | Firebase messagingSenderId，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。 |
| `firebase.appId`             | 无     | Firebase appId，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。             |
| `firebase.measurementId`     | 无     | Firebase measurementId，与 Firebase 集成的必填参数。了解如何将 Firebase 集成进 Blowfish 请参考 [这个页面]({{< ref "firebase-views" >}})。     |

### Fathom Analytics

| 名称                     | 默认值 | 描述                                                                                        |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------- |
| `fathomAnalytics.site`   | 无     | 支持 Fathom 站点分析平台。更多详细内容请参考 [分析文档]({{< ref "partials#analytics" >}})。 |
| `fathomAnalytics.domain` | 无     | 如果使用自定义域名的 Fathom Analytics，请在此提供，以便从自定义域名获取 `script.js`。       |

### Umami Analytics

| Name                       | Default   | Description                                                                                |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| `umamiAnalytics.websiteid` | _Not set_ | 支持 Umami 站点分析平台。更多详细内容请参考 [分析文档]({{< ref "partials#analytics" >}})。 |
| `umamiAnalytics.domain`    | _Not set_ | 如果使用自定义域名的 Umami Analytics，请在此提供，以便从自定义域名获取 `script.js`。       |


### BuyMeACoffee

| 名称                                | 默认值 | 描述                               |
| ----------------------------------- | ------ | ---------------------------------- |
| `buymeacoffee.identifier`           | 无     | buymeacoffee 账号的用户名。        |
| `buymeacoffee.globalWidget`         | 无     | 激活位于全局的 buymeacoffee 组件。 |
| `buymeacoffee.globalWidgetMessage`  | 无     | 新用户首次访问网站时显示的消息。   |
| `buymeacoffee.globalWidgetColor`    | 无     | 组件颜色，使用 HEX 格式。          |
| `buymeacoffee.globalWidgetPosition` | 无     | 组件位置，例如 "Left" 或 "Right"。 |
### 验证

| 名称                     | 默认值 | 描述                                                     |
| ------------------------ | ------ | -------------------------------------------------------- |
| `verification.google`    | 无     | Google 提供的网站验证字符串，用于在网站元数据中包含。    |
| `verification.bing`      | 无     | Bing 提供的网站验证字符串，用于在网站元数据中包含。      |
| `verification.pinterest` | 无     | Pinterest 提供的网站验证字符串，用于在网站元数据中包含。 |
| `verification.yandex`    | 无     | Yandex 提供的网站验证字符串，用于在网站元数据中包含。    |
<!-- prettier-ignore-end -->

## 别的配置文件

Blowfish 主题还包括 `markup.toml` 配置文件。这个文件包含了一些重要参数，来确保 Hugo 正确配置以生成使用 Blowfish 创建的网站。

需要确保次文件在 `config` 目录中，并设置所需要的值。否则某些功能可能无法正确启用，并可能导致意外行为。
