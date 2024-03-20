---
title: "内容示例"
date: 2020-08-09
draft: false
description: "包含 Blowfish 中所有可用部分的示例、"
slug: "content-examples"
tags: ["内容", "示例"]
series: ["部署教程"]
series_order: 12
---

如果你已经按顺序阅读了文档，那么你现在应该已经了解了 Blowfish 中所有的功能和配置信息。这个页面旨在把所有内容整合在一起，并提供一些你会在 Hugo 项目中使用的示例。

{{< alert >}}
**提示:** 如果你是Hugo的新用户，请务必阅读[官方文档](https://gohugo.io/content-management/page-bundles/)，了解更多关于页面捆绑和资源的概念。
{{< /alert >}}

这个页面上的示例都可以根据不同的场景进行调整，期待你在做自己项目的同时，提出一些对特定内容格式化的想法。

## 分支页面

Hugo 中的分支页面包括主页、部分列表页面和分类页面等内容，请记住，这些分支页面的文件名都是 **`_index.md`**。

Blowfish 支持在分支页面中设置[扉页参数]({{< ref "front-matter" >}})，在扉页中设置的参数将会覆盖在配置文件中设置的参数默认值。例如，在分支页面中的 `title` 参数将会覆盖页面标题的默认值。

### 主页

|              |                      |
| ------------ | -------------------- |
| **Layout:**  | `layouts/index.html` |
| **Content:** | `content/_index.md`  |

Blowfish 中的主页比较特殊，它的整体设计是由主页的布局参数控制的。你可以在 [主页布局]({{< ref "homepage-layout" >}}) 来获取更多内容。

如果你想自定义主页的内容，你仅需创建一个 `content/_index.md` 文件。该文件中的任何内容都会包含在你的主页中。

**示例：**

```yaml
---
title: "欢迎来到 Blowfish ！"
description: "这是往主页中添加内容的例子。"
---
欢迎来到我的网站！我很高兴你的来访。
```
_这个例子设置了一个自定义标题，并在页面正文中添加了一些额外的内容。当然任何的 Markdown 都是可接受的，包括短代码、图片和连接。_

### 列表页

|              |                              |
| ------------ | ---------------------------- |
| **Layout:**  | `layouts/_default/list.html` |
| **Content:** | `content/../_index.md`       |

列表页将所有页面聚合到一个目录下，并为访问者提供了一种浏览页面的方式。博客或者作品集是一个典型案例，因为这两种类型的网站会将帖子或项目整合到一个列表页中。

创建一个列表页就如同创建子目录一样简单。例如，要创建一个 "Projects" 列表页，你可以创建`content/projects/`。然后为你的项目创建一个 Markdown 文件。
Creating a list page is as simple as making a sub-directory in the content folder. For example, to create a "Projects" section, you would create `content/projects/`. Then create a Markdown file for each of your projects.

列表页面默认会自动生成，如果你想在列表添加一些页自定义内容，还需要在此目录创建一个 `_index.md` 文件。

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

Hugo 将会自动为目录中对应的项目页面生成 URL。

类似于主页，列表页面也可以通过 `_index.md` 文件来添加自定义的内容。Blowfish将会在自定义内容的下方，展示这个列表所包含的所有子页面。

**示例：**

```yaml
---
title: "项目"
description: "了解我的一些项目。"
cascade:
  showReadingTime: false
---
本节包含了我所有的当前项目。
```

_在上面的示例中，这里的 `cascade` 参数被用来隐藏该列表页下任何子页面的阅读时间。这样做是的任何子页面都不会显示阅读时间，这是一种为整个部分添加默认参数的好方法。_

[样本部分]({{< ref "samples" >}})提供了列表页面的例子。

### 分类页面

|                  |                                  |
| ---------------- | -------------------------------- |
| **List layout:** | `layouts/_default/taxonomy.html` |
| **Term layout:** | `layouts/_default/term.html`     |
| **Content:**     | `content/../_index.md`           |

分类页面有两种形式：分类列表和分类术语。列表页面显示给定分类中每个属于的列表，术语页面显示与给定术语相关的页面列表。

术语这个词可能会有些令人困惑，所以这里让我们举个例子，假设将 `animals` 分类。 

首先，想要在 Hugo 中使用分类，需要先进行配置。通过创建 `config/_default/taxonomies.toml` 文件并定义分类名称来完成创建。

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

Hugo 期望分类定义式 单数 = “复数” 的形式，所以这里添加单数 `animal` 等于复数 `animals` 来创建我们的分类示例。

现在 `animals` 分类就有了，需要在内容中添加它。下面是一个简单的在扉页参数中添加分类的例子：

```yaml
---
title: "进入狮子的巢穴"
description: "这周我们学习狮子。"
animals: ["lion", "cat"]
---
```

现在我们已经在 `animals` 分类中添加了 `lion` 和 `cat` 两个术语。

目前看起来还不太明显，但是 Hugo 将会为这个分类自动生成分类列表页和两个术语页。默认情况下可以在 `/animals/` 地址访问列表页，在 `/animals/lion/` 和 `/animals/cat/` 访问术语页。

这个列表页会列举出所有包含在这个分类中的术语。在上面的例子中，`/animals/` 页面会包含 "lion" 和 "cat" 的链接，以此将访问者导向至具体的术语页。

术语页将会列举出包含这个术语的所有页面。这些术语页面本质上和[列表页面](#list-pages)相同，并且以类似的方式运作。

如果你想在分类页面中添加自定义的内容，只需要对应文件夹的目录中创建 `_index.md` 文件即可。

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

这些 `_index.md` 中的内容都会放置在生成的分类页面上。与其他页面一样，[扉页参数]({{< ref "front-matter" >}})中设置的变量也可以用来覆盖默认值。比如你可以有一个标签名是`lion`，但是可以将其覆盖成 "Lion"。

想要查看实际效果，可以看[标签分类列表]({{< ref "tags" >}})。

## 叶子页面

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout:**               | `layouts/_default/single.html`  |
| **Content (standalone):** | `content/../page-name.md`       |
| **Content (bundled):**    | `content/../page-name/index.md` |

Hugo 中的页面叶子页面是一个标准的内容页面，它不包含子页面的页面。可以作为关于页面，或者位于个人博客网站中的文章。

最重要的是，与分支页面不同，叶子页面应该被命名为 `index.md`，而不是带下划线的`_index.md`。叶子页面比较特殊，它可以是一个在列表页面中的一个有唯一名称的文件，也可以是在一个有唯一名称的页面捆绑包。

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

当页面中包含类似图片的资源，应该使用页面捆绑包，即子目录的方式。页面捆绑包时一个包含 `index.md` 文件的子目录。将资源和页面内容打包在同一个目录中是必要的，因为许多短代码和其他主题逻辑假设资源和页面捆绑在一起，

**示例：**

```yaml
---
title: "我的第一篇博客文章"
date: 2022-01-25
description: "欢迎来到我的博客"
summary: "了解更多关于我和我创建博客的初衷。"
tags: ["welcome", "new", "about", "first"]
---
_这_ 是博客的内容。
```

叶子页面有很多的[扉页参数]({{< ref "front-matter" >}})，来帮你你自定义展示它。

### 外部链接

Blowfish 允许外部页面链接和文章列表一起显示在列表页。如果你在第三方网站（如Medium）有文章，或者你想连接到研究论文，而不想在 Hugo 中复制内容，这将非常有用。

为了创建一个外部链接文章，需要设置一些特殊的扉页参数：

```yaml
---
title: "我的 Medium 文章"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "我在Medium上写了一篇文章。"
showReadingTime: false
_build:
  render: "false"
  list: "local"
---
```

除了像 `title` 和 `summary` 这种普通的扉页参数外，需要设置 `externalUrl` 参数来告诉 Blowfish 这不是一篇普通的文章。访问者在访问后，会被重定向到这里提供的 URL。

此外，我们使用了 `_build` 参数来避免 Hugo 生成一个普通页面。因为我们是一个连接到外部的 URL，生成页面是没有意义的。

Hugo 中可以通过命令来快速生成一个外部链接的文件，在创建新的外部链接是，只需要指定 `-k external` 即可。这让生成外部链接文章变得更简单。

```shell
hugo new -k external posts/my-post.md
```

### 简单页面

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

Blowfish 包含了一个用于简单页面的布局。简单布局是一个全宽的模板，并仅仅展示 Markdown 中的内容，不包含任何主题中的特性。

简单布局中唯一可用的特性是面包屑导航和分享链接。这个行为也是通过 [扉页参数]({{< ref "front-matter" >}}) 来控制。

如果想在特定页面上启用简单布局，添加 `layout` 扉页参数，并设置为 `"simple"`：

```yaml
---
title: "我的着陆页"
date: 2022-03-08
layout: "simple"
---
这个页面的内容是全宽的。
```

## 自定义布局

Hugo 的其中一个好处就是它让整个站点、单独内容或页面创建自定义布局变得容易。

自定义布局遵循所有 Hugo 的模板规则，更多信息可以在 [Hugo 官方文档](https://gohugo.io/templates/introduction/) 中找到。

### 覆盖默认布局

上面讨论的每种内容类型都列出了其对应的布局文件。如果你在本地项目中创建了这个文件，它将覆盖主题的默认模板，由此可以来自定义网站的样式布局。

例如，创建一个 `layouts/_default/single.html` 文件，此文件将允许用户完全自定义叶子页面的布局。

### 自定义部分布局

如果你想为个别内容创建自定义布局也很简单。这在使用特定样式列出某种类型内容时会非常有效。

让我们简单看一个例子，来了解如何为"Projects"页面创建自定义的特殊布局。

为了做到这一点，使用常规的Hugo规则来在 `content` 目录下组织你的内容。此外，在和 `layout` 目录中创建和内容部分相同的目录结构，并在此目录下添加一个 `list.html` 文件，此文件是 "projects" 内容的一个新的列表页布局。

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

`list.html` 文件将会覆盖默认的模板，但只会作用在 `projects` 部分。我们先看看 `_index.md` 文件的内容。

```yaml
---
title: "Blowfish"
date: 2021-08-11
icon: "github"
description: "用Tailwind CSS构建的Hugo主题。"
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/nunocoracao/blowfish/"
---
```

_在这个例子中，我们为每个项目添加了一些参数，然后我们在列表模板中可以使用他们。虽然这个例子没有页面的内容，但这并不组织你添加内容。这是自己的的自定义模板，完全可以随心所欲！_

定义了项目内容后，现在我们可以创建一个列表模板来输出项目中的信息。
```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

尽管这是一个比较简单的例子，但你可以看到这里的 `list.html` 文件遍历了本节中的所有子页面，然后输出了每个页面的 HTML 链接 和图标。每个项目的扉页参数被用来确定显示哪些信息。
Although this is quite a straightforward example, you can see that it steps through each of the pages in this section (ie. each project), and then outputs HTML links to each project alongside an icon. The metadata in the front matter for each project is used to determine which information is displayed.

请记住，构建网站的时候需要重新编译 Tailwind CSS，一定要确保相关的样式和类可用。这在[高级定制]({{< ref "advanced-customisation" >}})部分有更详细的说明。

当尝试使用自定义模板时，请务必先了解默认的 Blowfish 模板是如何工作的，然后将其作为指南或模板。补充一点，[Hugo 文档](https://gohugo.io/templates/introduction/) 也是学习创建自定义模板的宝贵资源。
