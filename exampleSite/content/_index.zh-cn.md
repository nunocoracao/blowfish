---
title: "打造一个独一无二、真正属于你的网站。"
description: "一款现代、灵活的 Hugo 主题，适用于博客、文档、作品集等。"
lastmod: 2026-08-30
heroLead: "Blowfish 提供富有表现力的布局、贴心的默认配置和实用的内容组件，让你专注于想要表达的内容。"
heroButtons:
  - label: "快速开始"
    url: "/zh-cn/docs/installation/"
  - label: "浏览文档"
    url: "/zh-cn/docs/"
    style: "outline"
  - label: "在 GitHub 上加星标"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="首页布局" >}}选择最适合你网站的结构。{{< /stat >}}
{{< stat value="40+" label="短代码" >}}无需维护一次性模板，即可创作富有表现力的内容。{{< /stat >}}
{{< stat value="100%" label="内容完全属于你" >}}可移植的 Markdown、熟悉的 Hugo 配置、没有锁定。{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="打造你的风格" url="/zh-cn/docs/configuration/" >}}
布局、配色、排版与内容控制浑然一体。
{{< /feature >}}
{{< feature icon="code" title="更快地创作" url="/zh-cn/docs/shortcodes/" label="浏览短代码" >}}
实用组件，让故事更丰富、文档更清晰、无需自制胶水代码。
{{< /feature >}}
{{< feature icon="heart" title="开放共建" url="/zh-cn/users/" >}}
探索真实网站、社区贡献以及经受住生产考验的模式。
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="为 AI 智能体而生" url="/zh-cn/docs/installation/#智能体技能" label="安装技能" >}}
Blowfish 附带一个智能体技能，教 Claude Code 等编程智能体安装、配置和使用本主题。
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**Blowfish v3.5 已发布。** 使用 `npx blowfish-tools new <site>` 创建新网站，或[升级现有网站]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}})。

**正在使用编程智能体？** 在 Claude Code 中运行 `/plugin marketplace add nunocoracao/blowfish`，然后运行 `/plugin install blowfish@blowfish`。对于会读取项目技能的其他智能体，将 [`blowfish` 技能文件夹](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish)复制到网站中的 `.claude/skills/blowfish/`。
{{< /alert >}}
