---
title: "Icons"
date: 2020-08-14
lastmod: 2022-03-09
draft: false
description: "Icon support in Blowfish."
slug: "icons"
tags: ["icons", "sample", "shortcodes"]
type: 'sample'
---

Blowfish has built-in support for a number of [FontAwesome 6](https://fontawesome.com/icons) icons. These can be included in your website through either the [icon partial]({{< ref "docs/partials#icon" >}}) or [icon shortcode]({{< ref "docs/shortcodes#icon" >}}).

Additionally, custom icons are also fully supported. Simply provide your own SVG icon assets by placing them in the `assets/icons/` directory in the root of your project. Any icons in the icons directory will then be available to use throughout the theme. In order to achieve automatic color filling, every SVG path needs the `fill="currentColor"` XML attribute.

The full list of built-in icons and their corresponding names can referenced below.

{{< icon-ref >}}
