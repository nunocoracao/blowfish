---
title: "欢迎来到 Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "借助灵活的布局、丰富的内容工具和面向智能体的工作流，构建快速且富有表现力的 Hugo 网站。"
lastmod: 2026-08-30
tags: ["新手", "文档"]
series: ["部署教程"]
series_order: 1
---

{{< lead >}}
Blowfish 3 是一款现代 Hugo 主题，适用于博客、文档、作品集，以及不适合套用固定模板的网站。
{{< /lead >}}

{{< alert >}}
使用 `npx blowfish-tools new <site>` 创建新网站，然后按照[安装指南]({{< ref "docs/installation" >}})操作。现有 Blowfish 网站可以在不进行破坏性配置更改的情况下迁移到 v3。
{{< /alert >}}

## 构建你心中的网站

Blowfish 提供了坚实的起点，但不会替你决定最终效果。你可以选择个人资料、落地页、Hero、卡片、背景等首页布局，并从站点配置中设置配色、排版、导航、深色模式和文章呈现方式。单个页面需要不同效果时，可以使用 front matter。

你的内容仍然是可移植的 Hugo 内容：Markdown、页面包、分类法、菜单和配置文件都保存在你的仓库中。没有专有编辑器，也没有平台锁定。

## 用更少自定义代码发布更丰富的内容

用 Markdown 写作，需要时使用[40 多个短代码]({{< ref "docs/shortcodes" >}})。无需维护一次性模板，就能添加按钮、提示、图标、标签页、画廊、图表、流程图、GitHub 卡片、视频和代码示例。

Blowfish 也处理内容周边的工作：响应式特色图片和缩略图、搜索、阅读工具、目录、社交与 SEO 元数据、结构化数据、无障碍控制，以及可选的分析、评论或 Firebase 驱动的浏览量和点赞。

## 为每位读者而建

你可以构建包含翻译内容、语言专属菜单和内置界面翻译的多语言网站。Blowfish 支持在同一项目中混合 RTL 和 LTR 语言，同时提供外观切换、响应式导航和键盘友好的搜索。

在底层，Blowfish 使用当前 Hugo 功能和 Tailwind CSS 4，同时保持清晰、可检查且完全由你掌控的配置与内容模型。

## 给编程智能体所需的上下文

Blowfish 附带一个面向 Claude Code 等 AI 编程智能体的[智能体技能](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish)。它会告诉智能体配置应放在哪里、布局和 front matter 如何工作、有哪些短代码，以及如何无需猜测地构建和定制 Blowfish 网站。

在 Claude Code 中安装：

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

你也可以将该技能复制到项目的 `.claude/skills/blowfish/`。之后，智能体可以协助完成设置、配置、内容结构、页面设计和理解主题的实现，而你的网站始终保留在仓库中。

## 选择下一步

- 初次使用 Blowfish？从[安装]({{< ref "docs/installation" >}})开始。
- 准备塑造网站？阅读[快速开始]({{< ref "docs/getting-started" >}})和[配置]({{< ref "docs/configuration" >}})。
- 想了解各种可能性？浏览[短代码]({{< ref "docs/shortcodes" >}})、[示例]({{< ref "samples" >}})和[展示案例]({{< ref "examples" >}})。
- 要迁移现有网站？请按照 [Blowfish 3 升级指南]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}})操作。
