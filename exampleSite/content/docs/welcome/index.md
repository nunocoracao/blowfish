---
title: "Welcome to Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Build a fast, expressive Hugo site with flexible layouts, rich content tools, and an agent-ready workflow."
lastmod: 2026-08-30
tags: ["new", "docs"]
series: ["Documentation"]
series_order: 1
---

{{< lead >}}
Blowfish 3 is a modern Hugo theme for blogs, documentation, portfolios, and the sites that do not fit neatly into a template.
{{< /lead >}}

{{< alert >}}
Start a new site with `npx blowfish-tools new <site>`, then follow the [installation guide]({{< ref "docs/installation" >}}). Existing Blowfish sites can move to v3 without breaking configuration changes.
{{< /alert >}}

## Build the site you have in mind

Blowfish gives you a strong starting point without fixing the outcome for you. Choose from profile, landing, hero, card, background, and other homepage layouts. Set your colour scheme, typography, navigation, dark-mode behaviour, and article presentation from your site configuration. Use front matter when a single page needs to be different.

Your content remains portable Hugo content: Markdown, page bundles, taxonomies, menus, and configuration files that live in your repository. There is no proprietary editor or platform lock-in.

## Publish richer content with less custom code

Write in Markdown, then reach for [40+ shortcodes]({{< ref "docs/shortcodes" >}}) when the story needs more. Add buttons, callouts, icons, tabs, galleries, charts, diagrams, GitHub cards, videos, code examples, and more without maintaining one-off templates.

Blowfish also handles the work around the content: responsive feature images and thumbnails, search, reading tools, tables of contents, social and SEO metadata, structured data, accessibility controls, and optional analytics, comments, or Firebase-powered views and likes.

## Make it work for every reader

Build multilingual sites with translated content, language-specific menus, and built-in interface translations. Blowfish supports RTL and LTR languages in the same project, so the layout adapts with the content. Visitors can also use a site-wide appearance toggle, responsive navigation, and keyboard-friendly search.

Under the hood, Blowfish uses current Hugo capabilities and Tailwind CSS 4, while keeping the theme’s configuration and content model easy to inspect and own.

## Give your coding agent the context it needs

Blowfish ships an [agent skill](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) for AI coding agents such as Claude Code. It teaches the agent where configuration belongs, how layouts and front matter work, which shortcodes exist, and how to build and customize a Blowfish site without guessing.

Install it in Claude Code with:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Or copy the skill into your project at `.claude/skills/blowfish/`. From there, your agent can help with setup, configuration, content structure, page design, and theme-aware implementation while your site stays in your repository.

## Choose your next step

- New to Blowfish? Start with [Installation]({{< ref "docs/installation" >}}).
- Ready to shape the site? Read [Getting Started]({{< ref "docs/getting-started" >}}) and [Configuration]({{< ref "docs/configuration" >}}).
- Want to see what is possible? Explore [Shortcodes]({{< ref "docs/shortcodes" >}}), [Samples]({{< ref "samples" >}}), and the [Showcase]({{< ref "examples" >}}).
- Moving an existing site? Follow the [Blowfish 3 upgrade guide]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
