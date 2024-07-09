---
title: "系列"
weight: 12
draft: false
description: "了解如何将文章分组到系列中。"
slug: "series"
tags: ["系列", "文档"]
series: ["部署教程"]
series_order: 11
seriesOpened: true
---

Blowfish 提供了将一组文章分组到“系列”下的功能。将文章放在系列下将在每个页面中显示该系列文章的其余部分，并在它们之间提供快速导航。您可以在上面看到一个例子。

## 创建分类
启用系列的第一步是创建 `series` 分类法。为此，只需将 `series` 分类法添加到 `config.toml` 中的分类法列表中即可。

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## 标记文章

然后你只需要添加 `series` 和 `series_order` 参数。 `series` 参数将是您要将文章放入的系列名称。 `series_order` 定义了文章在该系列中的顺序。在下面的示例中，文章是 `Documentation` 系列中的第 `11` 篇文章。

```md
series: ["Documentation"]
series_order: 11
```

## 系列的表现形式

将文章标记为系列的一部分将自动显示系列模块，例如您在下方看到的这样。您可以使用 `params.toml` 中的 `article.seriesOpened` 全局变量或参数 `seriesOpened` 来选择该模块是否开始打开，以指定文章级别的覆盖。