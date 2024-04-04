---
title: "Partials"
date: 2020-08-10
draft: false
description: "所有 Blowfish 可以配置的 Partials"
slug: "partials"
tags: ["partials", "统计服务", "隐私", "评论", "网站图标", "图标", "文档"]
series: ["部署教程"]
series_order: 9
---

## 数据分析

Blowfish 提供对 Fathom Analytics 和 Google Analytics 的内置支持。Fathom 是 Google Analytics 的付费替代品，尊重用户隐私。

### Fathom Analytics

要启用 Fathom Analytics 支持，只需在 `config/_default/params.toml` 文件中提供您的 Fathom 站点代码。如果您还使用 Fathom 的自定义域功能，并希望从您的域中提供脚本，还可以额外提供 `domain` 配置值。如果不提供 `domain` 值，脚本将直接从 Fathom DNS 加载。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

Google Analytics 支持通过 Hugo 内部 partial 提供。只需在 `config/_default/config.toml` 文件中提供 `googleAnalytics` 密钥，脚本就会自动添加。

根据提供的配置值，版本 3（analytics.js）和版本 4（gtag.js）均可支持：

```toml
# config/_default/config.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### 自定义数据分析提供商

如果您希望在网站上使用不同的分析提供商，也可以覆盖分析部分并提供自己的脚本。只需在项目中创建`layouts/partials/extend-head.html`文件，它就会自动将其包含在网站的`<head>`中。

## 评论

为了在文章中添加评论，Blowfish 可在每篇文章页面底部引入评论 partial。只需提供一个 `layouts/partials/comments.html`即可，其中要包含显示所选评论所需的代码。

您可以使用 Hugo 内置的 Disqus 模板，也可以提供自己的自定义代码。更多信息请参阅 [Hugo 文档](https://gohugo.io/content-management/comments/)。

一旦提供了 partial，就可以使用 "showComments "参数对评论在不同页面的显示与否进行更精细的控制。该值可以在 "params.toml"[配置文件]（{{< ref "configuration#theme-parameters" >}}）中进行主题级别的设置，也可以在[front matter]（{{< ref "front-matter" >}}）中按每篇文章设置。该参数的默认值为 "false"，因此必须在其中一个位置将其设置为 "true"，才能显示评论。

## Favicons 图标

Blowfish 提供了一套默认的纯色图标供用户使用，但用户也可以提供自己的图标资源来覆盖这些图标。获取最新 favicon 资源的最简单方法是使用第三方提供商生成，如 [favicon.io](https://favicon.io)。

图标资源应直接放在网站的 `static/` 文件夹中，并按以下列表命名。如果使用 [favicon.io](https://favicon.io)，这些文件名将自动为您生成，但您也可以根据需要提供自己的资源。

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

或者，您也可以完全覆盖默认的 favicon 行为，提供自己的 favicon HTML 标签和资源。只需在项目中提供一个 `layouts/partials/favicons.html` 文件，该文件就会被加入网站的 `<head>` 中，取代默认资源。

## Icon 图标

与 [图标简码]（{{< ref "shortcodes#icon" >}}）类似，您也可以通过使用 Blowfish 的 `icon.html` partial，在自己的模板和 partial 中加入图标。该部分包含一个参数，即要包含的图标名称。

**Example:**

```go
  {{ partial "icon.html" "github" }}
```

图标使用 Hugo pipelines 填充，因此非常灵活。Blowfish 内置了大量用于社交、链接和其他用途的图标。请查看[图标示例]（{{< ref "samples/icons" >}}）页面，查看支持图标的完整列表。

可以通过在项目的 `assets/icons/` 目录中提供自己的图标资源来添加自定义图标。然后，可以通过使用 SVG 文件名（不含`.svg`扩展名）在局部中引用图标。

图标还可通过调用[图标简码]（{{< ref "shortcode#icon" >}}）在文章内容中使用。

## 扩展

Blowfish 还提供了许多扩展 partial，可以扩展基本功能。

### 文章链接

如果您希望在文章链接后插入附加代码，请创建一个 `layouts/partials/extend-article-link.html` 文件。如果与[`badge`]({{< ref "shortcodes#badge" >}})简码结合使用，该功能将尤为强大，可用于突出显示某些文章的元数据。

### 页眉和页脚

本主题允许在模板的`<head>`和`<footer>`部分直接插入附加代码。这些代码可用于提供不属于主题的脚本或其他逻辑。

只需创建`layouts/partials/extend-head.html`或`layouts/partials/extend-footer.html`，这些部分就会自动包含在网站构建中。这两个 partial 将作为最后一项注入到 `<head>` 和 `<footer>` 中，因此它们可用于覆盖主题默认值。
