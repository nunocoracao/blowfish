---
title: "GFM Blockquotes"
date: 2024-09-08
draft: false
description: "Sample demonstrating GitHub-style blockquote alerts render-hook."
slug: "gfm-blockquotes"
tags: ["alerts", "blockquote", "markdown", "sample"]
type: 'sample'
---

This page demonstrates the GFM blockquotes (GitHub-style callouts) supported by this theme via the blockquote render-hook.

Compared to the built-in alert shortcode, this syntax is simpler and more portable because it uses plain Markdown blockquotes. See the shortcode alternative in the docs: {{< ref "docs/shortcodes#alert" >}}.

<!--more-->

## Choosing Between GFM Blockquotes and the alert shortcode

- GitHub-style alerts: pure Markdown; widely used (GitHub, Obsidian); no shortcode to remember; highly portable across platforms; limited visual customization (type/title), theme controls look.
- alert shortcode: richer configuration (icon, cardColor, textColor, etc.); precise visuals; less portable; requires shortcode syntax.
- Coexistence: both can be used together; choose per content needs and author preference.

## Syntax Overview

Write a Markdown blockquote where the first line starts with `[!TYPE]`, optionally followed by a custom title. Supported types include: NOTE, INFO, TIP, IMPORTANT, WARNING, CAUTION, DANGER, ERROR, SUCCESS, CHECK.

```md
> [!NOTE]
> This is a note with the default title.

> [!TIP] Pro Tip
> Custom title, same syntax.
```

> [!NOTE]
> This is a note with the default title.

> [!TIP] Pro Tip
> Custom title, same syntax.

## Collapsible Alerts

Add `+` to expand by default, or `-` to collapse by default.

```md
> [!INFO]+
> This alert is expanded by default.

> [!WARNING]-
> This alert is collapsed by default.
```

> [!INFO]+
> This alert is expanded by default.

> [!WARNING]-
> This alert is collapsed by default.

## Additional Types

```md
> [!IMPORTANT]
> Important information that stands out.

> [!CAUTION]
> Be careful with the following steps.

> [!SUCCESS]
> Operation completed successfully.
```

> [!IMPORTANT]
> Important information that stands out.

> [!CAUTION]
> Be careful with the following steps.

> [!SUCCESS]
> Operation completed successfully.

## Mixed Content

```md
> [!NOTE] Lists, formatting and code
> - Multiple paragraphs
> - A list with items
> - **Bold** and *italic* text
> - `inline code`
>
> Another paragraph at the end.
```

> [!NOTE] Lists, formatting and code
> - Multiple paragraphs
> - A list with items
> - **Bold** and *italic* text
> - `inline code`
>
> Another paragraph at the end.

## Regular Blockquote (Unchanged)

Standard blockquotes without the `[!TYPE]` header are unchanged and render normally.

> This is a regular blockquote that renders as usual.
