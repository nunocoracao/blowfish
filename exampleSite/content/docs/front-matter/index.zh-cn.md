---
title: "Front Matter(文件头信息)"
weight: 7
draft: false
description: "文本主要介绍 Blowfish 中页面中可以添加的所有的 Front Matter 参数。"
slug: "front-matter"
tags: ["front matter", "配置", "文档"]
series: ["部署教程"]
series_order: 7
---

除了 [Hugo 中默认的 front matter](https://gohugo.io/content-management/front-matter/#front-matter-variables)，Blowfish 主题中还添加了大量的参数选项来自定义单个页面的展示方式。所有可用的扉页参数如下。

front matter 参数中的默认值是从[基础配置]({{< ref "configuration" >}})中继承的，所有只有当你想要覆盖默认值时，才需要在当前页面指定这些参数。

<!-- prettier-ignore-start -->
| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| `title` | 无 | 文章名称。 |
| `description` | 无 | 文章的描述信息，它会被添加在 HTML 的 `<meta>`  元数据中。 |
| `externalUrl` | 无 | 如果文章发布在第三方网站上，这里提供只想对应文章的 URL 地址。提供 URL 将会组织生成内容页面，对这篇文章的任何引用都会直接跳转到第三方网站的 URL 上面。 |
| `editURL` | `article.editURL` | 当激活 `showEdit` 参数时，此参数用来设置编辑文章的 URL。 |
| `editAppendPath` | `article.editAppendPath` | 当激活 `showEdit` 参数时，该参数指定是否将当前文章路径添加到 `editURL` 设置的 URL 后面。 |
| `groupByYear` | `list.groupByYear` | 是否在列表页面按年份对文章进行分组。 |
| `menu` | 无 | 当设置此值，这篇内容的链接将会出现在菜单中。有效值是 `main` 或 `footer`。 |
| `robots` | 无 | 支持搜索引擎的爬虫如何处理这篇文章。如果设置了此值，它将在页面头部输出。更多内容请参考 [Google 文档](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)。 |
| `sharingLinks` | `article.sharingLinks` | 指定文章结尾显示哪些分享链接。如果没有设置或设置为 `false` ，则没有分享链接。 |
| `showAuthor` | `article.showAuthor` | 是否在页脚处显示作者框。 |
| `showAuthorBottom` | `article.showAuthorBottom` | 作者框显示在每页的底部而不是顶部。 |
| `authors` | 无 | 用于展示多创作者的数组，如果设置了将会覆盖 `showAuthor` 设置。这里使用了多作者的特性，查看[这个页面]({{< ref "multi-author" >}})来获取更多信息。 |
| `showAuthorsBadges` | `article.showAuthorsBadges` | 是否在文章和列表页展示`authors`作者分类。想是它生效需要开启`multiple authors`多创作者和 `authors` 作者分类。 查看[这个页面]({{< ref "multi-author" >}})来获取更多信息。 |
| `featureimage` | 无 | 基于连结的特征图片链接。 |
| `featureimagecaption` | 无 | 特征图片的说明，仅在 hero 样式的 `big` 风格下展示。 |
| `showHero` | `article.showHero` | 是否在文章页面将所裸土作为文章页面内的 hero 图片显示。 |
| `heroStyle` | `article.heroStyle` | hero 图片的风格，合法的值有： `basic`、`big`、`background`、`thumbAndBackground`。 |
| `imagePosition` | 无 | 使用 `object-position` 属性设置特色图片的位置。有效值如 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it) 所示。 |
| `showBreadcrumbs` | `article.showBreadcrumbs` or `list.showBreadcrumbs` | 是否在文章或列表页面显示面包屑导航。 |
| `showDate` | `article.showDate` | 是否显示文章的日期。具体日期使用 `date` 参数设置。 |
| `showDateUpdated` | `article.showDateUpdated` | 是否显示文章的更新日期。具体日期使用 `lastmod` 参数设置。 |
| `showEdit` | `article.showEdit` | 是否显示编辑文章内容的链接。 |
| `showHeadingAnchors` | `article.showHeadingAnchors` | 是否在文章的标题旁显示锚点链接。 |
| `showPagination` | `article.showPagination` | 是否在文章页脚显示下一篇/上一篇链接。 |
| `invertPagination` | `article.invertPagination` | 是否翻转下一篇/上一篇的链接方向。 |
| `showReadingTime` | `article.showReadingTime` | 是否显示文章的预估阅读时间。 |
| `showTaxonomies` | `article.showTaxonomies` | 是否显示文章关联的分类/标签。 |
| `showTableOfContents` | `article.showTableOfContents` | 是否显示文章目录。 |
| `showWordCount` | `article.showWordCount` | 是否显示文章字数统计。如果你的语言属于 CJK 语言，需要在 `hugo.toml` 中开启 `hasCJKLanguage` 参数。 |
| `showComments` | `article.showComments` | 是否在文章页脚显示 [评论部分]({{< ref "partials#comments" >}})。 |
| `showSummary` | `list.showSummary` | 是否在文章或列表页显示摘要。 |
| `showViews` | `article.showViews` | 是否显示文章和列表页面的阅读量。这需要集成 firebase ，具体可以看[这个页面]({{< ref "firebase-views" >}})来了解如何在 Blowfish 中集成firebase。 |
| `showLikes` | `article.showLikes` | 是否显示文章和列表页面的点赞量。这需要集成 firebase ，具体可以看[这个页面]({{< ref "firebase-views" >}})来了解如何在 Blowfish 中集成firebase。 |
| `seriesOpened` | `article.seriesOpened` | 是否打开系列模块。 |
| `series` | 无 | 文章所属的系列数组，我们建议每篇文章只属于一个系列。 |
| `series_order` | 无 | 文章在系列中的编号。 |
| `summary` | Auto generated using `summaryLength` (see [site configuration]({{< ref "configuration#site-configuration" >}})) | 当启用 `showSummary` 时，这是作为这篇文章摘要的Markdown字符串。 |
| `xml` | `true` unless excluded by `sitemap.excludedKinds` | 是否将这篇文章包含在生成的 `/sitemap.xml` 文件中。 |
| `layoutBackgroundBlur` | `true` | 向下滚动主页时，是否模糊背景图。 |
| `layoutBackgroundHeaderSpace` | `true` | 在标题和正文之间添加空白区域间隔。 |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | 是否强制 Markdown 中的外部链接在新标签页中打开。 |
<!-- prettier-ignore-end -->
