---
title: "多创作者模式"
weight: 8
draft: false
description: "为你的文章设置多个作者。"
slug: "multi-author"
tags: ["作者", "配置", "文档"]
series: ["部署教程"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false 
---

一个网站会有多个创作者共同贡献内容，所以需要再整个网站中默认使用多创作者。对于这种情况，Blowfish 允许用户使用多创作者功能拓展创作者列表。

为了保持向后兼容，这个功能仅允许定义额外的创作者，并不会以任何方式修改之前通过配置文件添加的创作者。

## 新建创作者

新建创作者的第一步是设置一个 `./data/authors` 文件夹。然后，你可以在里面简单的添加新创作者的 `json` 文件。文件的名称是你在文章引用该作者时需要指定的 `key`。

例如，在 `./data/authors` 文件夹中新建一个 `nunocoracao.json` 文件。文件的内容示例如下。`name`、`image`、`bio` 和 `social` 是目前创作者文件支持的4个参数，这与你在 `languages.[language-code].toml` 配置文件中的默认创作者配置类似。

_注意：社交参数中的 `key` 将会默认获取主题的图标 icon，当然你也可以在 `assests/icons` 文件夹中设置任何图标。_

```json
{
    "name": "Nuno Coração",
    "image" : "img/nuno_avatar.jpg",
    "bio": "Theme Creator",
    "social": [
        { "linkedin": "https://linkedin.com/in/nunocoracao" },
        { "twitter": "https://twitter.com/nunocoracao" },
        { "instagram": "https://instagram.com/nunocoracao" },
        { "medium": "https://medium.com/@nunocoracao" },
        { "github": "https://github.com/nunocoracao" },
        { "goodreads": "http://goodreads.com/nunocoracao" },
        { "keybase": "https://keybase.io/nunocoracao" },
        { "reddit": "https://reddit.com/user/nunoheart" }
    ]
}
```

## 在文章中引用创作者

你已经新建好了创作者，下一步让我们在文章中引用它。在下面的实例中，我们使用前面新建的创作者 `key` 来引用它。

Blowfish 将会使用额外创作者对应`json`文件中的数据，以帮助在文章中渲染此作者。这个功能不会以改变整个站点配置的默认作者，因此你可以分别控制他们。使用 `showAuthor` 参数，可以配置是否显示默认作者，这适用于单创作者的博客。扉页中的 `authors` 参数允许你为文章定义额外的创作者，这里的创作者将独立于整个站点中的默认创作者。

```md
---
title: "多创作者"
date: 2020-08-10
draft: false
description: "为你的文章设置多个作者。"
slug: "multi-author"
tags: ["authors", "config", "docs"]
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false 
---
```

上面这个示例和当前这个页面一样，将显示默认创作者和新创作者。你可以滚动此页面来查看实际效果。

## 新建创作者分类法

如果你想要获取每个作者的文章列表，需要配置 `authors` 分类，这会让你了解到一些更有趣的配置。这个是多创作者模式中的一个可选步骤。
To get lists of articles for each of your authors you can configure the `authors` taxonomy, which opens up some more configurations that might be interesting. This is an optional step in the process that is not required to display the authors in your articles.

第一步是在 `hugo.toml` 文件中配置 `authors` 分类法，如下所示。尽管 `tag` 和 `category` 默认是 Hugo 定义的，但只要你添加了一个特定的分类法，就需要显式添加 `tag` 和 `category`，否则基于 Hugo 的文件加载顺序，站点将不会处理 `tag` 和 `category`。

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

这样一来，你将会有一个所有创作者列表的页面，并且每个创作者都会显示他们参与创作的文章列表。如果你想在每个文章中以徽章的形式中展示作者，有两种方式：在全局配置文件添加 `article.showAuthorsBadges` 参数 或 在每篇文章的扉页参数中配置 `showAuthorsBadges`参数。

最后，你可以为每个创作者页面添加更多细节内容，以便显示简介、链接或者适合你需求的任何其他信息。为了实现这一点，需要在 `./content/authors` 文件夹中为每个创作者添加一个目录名为 `key` 的文件夹，并在文件夹中添加 `_index.md` 文件，对于上面的例子，我们会得到一个 `.content/authors/nunocoracao/_index.md` 文件。在这个文件中你可以添加创作者的实际姓名和他们自己的个人信息页面。本文档站点中的作者就是这么配置的，你可以在文档站点中查看实际效果。

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## 示例

下面这个示例，介绍了演示了如何关闭站点默认创作者，并在文章中添加多创作者。

{{< article link="/samples/multiple-authors/" >}}
