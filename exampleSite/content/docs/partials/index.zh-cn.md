---
title: "局部模板(Partials)"
weight: 9
draft: false
description: "所有 Blowfish 可以配置的 Partials"
slug: "partials"
tags: ["partials", "统计服务", "隐私", "评论", "网站图标", "图标", "文档"]
series: ["部署教程"]
series_order: 9
---

## 站点分析

Blowfish 支持了 Fathom、Google 和 Umami。Fathom 和 Umami 都是开源、简单、且注重隐私的站点分析服务，他们可以很好地替代 Google 分析。Fathom 和 Umami 都有公有云的付费版本，当然你也可以自己手动部署开源版。

### Fathom

要启用 Fathom Analytics 支持，只需在 `config/_default/params.toml` 文件中提供您的 Fathom 站点代码。如果您还使用 Fathom 的自定义域功能，并希望从您的域中提供脚本，还可以额外提供 `domain` 配置值。如果不提供 `domain` 值，脚本将直接从 Fath只需要在 `config/_default/params.toml` 文件提供你的 Fathom 站点代码，就可以快速支持 Fathom 站点分析。
如果你想使用自定义域名来获取跟踪脚本， 那么需要提供 `domain` 参数，否则会从 Fathom 云服务版的地址 (＜cdn.usefathom.com＞) 获取脚本。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google

Hugo partial 本身已经支持了 Google 站点分析。只需要在 `config/_default/hugo.toml` 文件添加 `googleAnalytics` 参数即可，跟踪脚本会自动添加。

版本3 (analytics.js) 和版本4 (gtag.js) 都是支持的，参考如下示例：

```toml
# config/_default/hugo.toml

# 版本 3
googleAnalytics = "UA-PROPERTY_ID"
# 版本 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami

只需要在 `config/_default/params.toml` 文件提供你的 [Umami 跟踪代码](https://umami.is/docs/collect-data)，就可以快速支持 Umami 站点分析。
如果你想使用自定义域名来获取跟踪脚本， 那么需要提供 `domain` 参数，否则会从 Umami 云服务版的地址 (analytics.umami.is) 获取脚本。
如果你只想在特别的数个域名中使用 tracker 功能，那么需要提供 `dataDomains` 参数。否则任何一个匹配了 `websiteid` 和 `domain` 参数值的网站，Umami 脚本都会执行。如果环境变量配置了 `TRACKER_SCRIPT_NAME` 可以填写自定义的脚本名称 `scriptName`，如果没有配置就注释掉或者填写默认的 `script.js` 。

{{< alert >}}
**Note:** 开启 Umami 网站分析后, Blowfish 会自动支持 [Umami 事件追踪](https://umami.is/docs/track-events)。如果你不想支持此功能，需要把参数 `enableTrackEvent` 设置为 `false`。

{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline

只需要在 `config/_default/params.toml` 文件提供你的 [Seline token](https://seline.so/docs/install-seline)，就可以快速支持 Seline 站点分析。

{{< alert >}}
**Note:** 开启 Seline 网站分析后, Blowfish 会自动支持 [Seline 事件追踪](https://seline.so/docs/custom-events)。如果你不想支持此功能，需要把参数 `enableTrackEvent` 设置为 `false`。
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### 提供自定义站点分析

如果你想在你的网站提供其他站点分析，你可以自己提供脚本，并覆盖 Blowfish 主题中内置的 partial。
只需要创建 `layouts/partials/extend-head.html` 文件并在内容中提供脚本即可，Blowfish 主题会自动将 `extend-head.html` 中的内容添加到整个站点的 `<head>` 中。

## 评论

Blowfish 支持了在每篇文章底部添加一个评论功能。只需要提供一个 `layouts/partials/comments.html` 文件，并在其中添加显示评论的代码即可。

你可以使用 Hugo 中内置的 Disqus 模板，也可以提供自定义代码。更多内容和细节可以参考 [Hugo 文档](https://gohugo.io/content-management/comments/).

一旦提供了评论的 partial，你就可以使用 `showComments` 更细致地控制评论的显隐。此参数可以在 `params.toml` [配置文件]({{< ref "configuration#theme-parameters" >}}) 中全局设置，也可以在每篇文章的 [扉页参数]({{< ref "front-matter" >}}) 中单独针对特定文章设置。该参数默认为  `false`，因此需要在上面两个位置设置为 `true` 才能显示评论。

## 网站图标（Favicons）

Blowfish 提供了一套空白网站图标以便快速上手，但你可以提供自己的资源来覆盖他们。想要获取新的图标资源最简单的方法是使用第三方提供商，如 [favicon.io](https://favicon.io)。

网站图标资源的位置在 `static/` 文件夹中，并务必按照如下的名称命名。如果你使用了[favicon.io](https://favicon.io)，那么下载下来的文件名和下面的示例完全一致；当然你也可以通过别的方式提供，记得重命名就行。

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

**示例：**

```go
  {{ partial "icon.html" "github" }}
```

图标使用 Hugo 管道填充，因此非常灵活。Blowfish 内置了大量用于社交、链接和其他用途的图标。请查看[图标示例]（{{< ref "samples/icons" >}}）页面，查看支持图标的完整列表。

可以通过在项目的 `assets/icons/` 目录中提供自己的图标资源来添加自定义图标。然后，可以通过使用 SVG 文件名（不含`.svg`扩展名）在局部中引用图标。

图标还可通过调用[图标简码]（{{< ref "shortcodes#icon" >}}）在文章内容中使用。

## 扩展

Blowfish 还提供了许多扩展 partial，可以扩展基本功能。

### 文章链接

如果您希望在文章链接后插入附加代码，请创建一个 `layouts/partials/extend-article-link.html` 文件。如果与[`badge`]({{< ref "shortcodes#badge" >}})简码结合使用，该功能将尤为强大，可用于突出显示某些文章的元数据。

### 头部和尾部

本主题允许在模板的`<head>`和`<footer>`部分直接插入附加代码。这些代码可用于提供不属于主题的脚本或其他逻辑。

只需创建`layouts/partials/extend-head.html`或`layouts/partials/extend-footer.html`，这些部分就会自动包含在网站构建中。这两个 partial 将作为最后一项注入到 `<head>` 和 `<footer>` 中，因此它们可用于覆盖主题默认值。

### 非缓存的 Head 扩展

`extend-head.html` 是被[缓存](https://gohugo.io/functions/partials/includecached/)的，Blowfish 同时支持一种非缓存的 head 扩展方式，用于根据页面属性**条件性地**插入脚本或元数据。要使用此功能，请在项目中创建 `layouts/partials/extend-head-uncached.html` 文件，该文件会被插入到 `<head>` 标签中。

此功能适用于根据 shortcode、front matter 标记或其他页面专属数据，动态添加脚本或元数据，避免内容在构建时被缓存。

例如，可在 `extend-head-uncached.html` 中使用 [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) 方法，根据 shortcode 是否存在动态加载 CDN JavaScript 文件。
