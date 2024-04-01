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

## 站点分析

Blowfish 支持了 Fathom、Google 和 Umami。Fathom 和 Umami 都是开源、简单、且注重隐私的站点分析服务，他们可以很好地替代 Google 分析。Fathom 和 Umami 都有公有云的付费版本，当然你也可以自己手动部署开源版。

### Fathom

只需要在 `config/_default/params.toml` 文件提供你的 Fathom 站点代码，就可以快速支持 Fathom 站点分析。
如果你想使用自定义域名来获取跟踪脚本， 那么需要提供 `domain` 参数，否则会从 Fathom 云服务版的地址 (cdn.usefathom.com) 获取脚本。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google

Hugo partial 本身已经支持了 Google 站点分析。只需要在 `config/_default/config.toml` 文件添加 `googleAnalytics` 参数即可，跟踪脚本会自动添加。

版本3 (analytics.js) 和版本4 (gtag.js) 都是支持的，参考如下示例：

```toml
# config/_default/config.toml

# 版本 3
googleAnalytics = "UA-PROPERTY_ID"
# 版本 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami

只需要在 `config/_default/params.toml` 文件提供你的 [Umami 跟踪代码](https://umami.is/docs/collect-data)，就可以快速支持 Umami 站点分析。
如果你想使用自定义域名来获取跟踪脚本， 那么需要提供 `domain` 参数，否则会从 Umami 云服务版的地址 (analytics.umami.is) 获取脚本。

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
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

另外，你也可以完全覆盖 Blowfish 提供的这套网站图标逻辑，只需要在 `layouts/partials/favicons.html` 文件中，提供你自己的网站图标 HTML 和对应资源，`favicons.html`文件中的内容会自动添加到网站的 `<head>` 中。

## 图标

类似 [图标短代码]({{< ref "shortcodes#icon" >}})，Blowfish 提供了 `icon.html`，以便你在自己的模板和部分（partials）中包含图标。此 partials 只接收一个参数，即图标的名称，示例如下。

**示例：**

```go
  {{ partial "icon.html" "github" }}
```

图标会使用 Hugo 的管道进行填充，这会使它们非常灵活。Blowfish 内置了许多图标，用于社交、链接等其他目的。查看 [图标样本]({{< ref "samples/icons" >}}) 可以看到 Blowfish 内置的所有图标。

你也可以在 `assets/icons/` 目录中提供你自己的图标资源。在 `icon.html` 中也可以添加不是 `.svg` 后缀的图标资源。

图标也可以通过[图标短代码]({{< ref "shortcodes#icon" >}})的方式使用在文章中。

## 扩展

Blowfish 还提供了一些扩展部分，允许在基础功能上进行扩展。

### 文章链接

如果你希望在文章链接中追加额外代码，可以创建  `layouts/partials/extend-article-link.html` 文件。 当与 [badge]({{< ref "shortcodes#badge" >}}) 短代码结合使用时尤其强大，可用于在链接中添加某些文章的元数据。

### 头部和尾部

Blowfish 主题允许直接在模板的 <head> 和 <footer> 部分中插入额外的代码。这些可用于提供不属于主题的脚本或其他逻辑。

只需创建 `layouts/partials/extend-head.html` 或 `layouts/partials/extend-footer.html`，这些将自动包含在您的网站构建中。这两个部分作为 `<head>` 和 `<footer>` 中的最后一项被注入，因此它们可用于覆盖主题默认设置。
