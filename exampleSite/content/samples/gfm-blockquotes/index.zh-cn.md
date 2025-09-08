---
title: "GFM 引用块"
date: 2024-09-08
draft: false
description: "演示通过 Markdown 引用块实现的 GitHub 风格警示框。"
slug: "gfm-blockquotes"
tags: ["alerts", "blockquote", "markdown", "sample"]
type: 'sample'
---

本页演示使用 Markdown 引用语法（`> [!TYPE]`）实现的 GFM 引用块（GitHub 风格 callout）。与内建的 `alert` shortcode 相比，这种写法更简单、更通用。另见：[alert shortcode]({{< ref "docs/shortcodes#alert" >}})。

<!--more-->

## 在 GFM 引用块与 alert shortcode 之间选择

- GitHub 风格：纯 Markdown；在 GitHub、Obsidian 等广泛使用；无需记忆 shortcode；跨平台可移植性强；外观定制较少（类型/标题），外观由主题统一控制。
- alert shortcode：配置更丰富（icon、cardColor、textColor 等）；视觉更可控；可移植性较弱；需要记忆 shortcode 语法。
- 共存：两者可以同时使用；可按内容场景与作者偏好灵活选择。

## 语法概览

编写一个 Markdown 引用，第一行以 `[!TYPE]` 开头，可选跟一个自定义标题。支持的类型包括：NOTE、INFO、TIP、IMPORTANT、WARNING、CAUTION、DANGER、ERROR、SUCCESS、CHECK。

```md
> [!NOTE]
> 这是一个 NOTE 示例（默认标题）。

> [!TIP] 自定义标题
> 这是一个 TIP 示例，带自定义标题。
```

> [!NOTE]
> 这是一个 NOTE 示例（默认标题）。

> [!TIP] 自定义标题
> 这是一个 TIP 示例，带自定义标题。

## 可折叠引用块

在类型后添加 `+` 表示默认展开，添加 `-` 表示默认收起。

```md
> [!INFO]+
> 该警示默认展开。

> [!WARNING]-
> 该警示默认收起。
```

> [!INFO]+
> 该警示默认展开。

> [!WARNING]-
> 该警示默认收起。

## 更多类型

```md
> [!IMPORTANT]
> 突出的重要信息。

> [!CAUTION]
> 执行以下步骤时请小心。

> [!SUCCESS]
> 操作已成功完成。
```

> [!IMPORTANT]
> 突出的重要信息。

> [!CAUTION]
> 执行以下步骤时请小心。

> [!SUCCESS]
> 操作已成功完成。

## 混合内容

```md
> [!NOTE] 列表、格式与代码
> - 多段落
> - 包含列表
> - **加粗** 与 *斜体*
> - `行内代码`
>
> 末尾还有一段文字。
```

> [!NOTE] 列表、格式与代码
> - 多段落
> - 包含列表
> - **加粗** 与 *斜体*
> - `行内代码`
>
> 末尾还有一段文字。

## 普通引用（保持不变）

不包含 `[!TYPE]` 头的普通引用保持不变，按原样渲染。

> 这是一个普通引用，将按原样渲染。
