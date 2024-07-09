---
title: "Welcome to Blowfish"
weight: 1
draft: false
description: "Discover what's new in Blowfish version 2.0."
tags: ["new", "docs"]
series: ["Documentation"]
series_order: 1
---

{{< lead >}}
Blowfish is packed with tons of features.
{{< /lead >}}

The original aim of Blowfish was to develop a theme that was simple and lightweight. The theme is a fork of <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> and expands its initial vision.

## Tailwind CSS 3.0

Tailwind CSS is at the heart of Blowfish and this release contains the very latest [Tailwind CSS version 3](https://tailwindcss.com/blog/tailwindcss-v3). It brings with it performance optimisations and support for some great new CSS features.

{{< youtube "TmWIrBPE6Bc" >}}

## Multilingual support

A highly requested feature, Blowfish is now multilingual! If you publish your content in multiple languages, the site will be built with all the translations available.

<div class="text-2xl text-center" style="font-size: 2.8rem">:gb: :de: :fr: :es: :cn: :brazil: :tr: :bangladesh:</div>

Thanks to submissions from the community, Blowfish has already been translated into [twenty-six languages](https://github.com/nunocoracao/blowfish/tree/main/i18n) with more to be added over time. By the way, [pull requests](https://github.com/nunocoracao/blowfish/pulls) for new languages are always welcome!

## RTL language support

One of the benefits of the new Tailwind and Multilingual features is the ability to add RTL language support. When enabled, the entire site will reflow content from right-to-left. Every element in the theme has been restyled to ensure it looks great in this mode which aids authors who wish to generate content in RTL languages.

RTL is controlled on a per-language basis so you can mix and match both RTL and LTR content in your projects and the theme will respond accordingly.

## Automatic image resizing

A big change in Blowfish 2.0 is the addition of automatic image resizing. Using the power of Hugo Pipes, images in Markdown content are now automatically scaled to different output sizes. These are then presented using HTML `srcset` attributes enabling optimised file sizes to be served to your site visitors.

![](image-resizing.png)

```html
<!-- Markdown: ![My image](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w,
    /image_1270x0_resize_q75_box.jpg 2x"
  src="/image_635x0_resize_q75_box.jpg"
  alt="My image"
/>
```

Best of all there's nothing you need to change! Simply insert standard Markdown image syntax and let the theme do the rest. If you want a little more control, the `figure` shortcode has been completely rewritten to provide the same resizing benefits.


## Site search

Powered by [Fuse.js](https://fusejs.io), site search allows visitors to quickly and easily find your content. All searches are performed client-side meaning there's nothing to configure on the server and queries are performed super fast. Simply enable the feature in your site configuration and you're all set. Oh, and it also supports full keyboard navigation!

## Tables of contents

A highly requested feature, Blowfish now supports tables of contents on article pages. You can see it in action on this page. The contents are fully responsive and will adjust to take advantage of the space available at different screen resolutions.

Available on a global or per article basis, the table of contents can be fully customised using standard Hugo configuration values, allowing you to adjust the behaviour to suit your project.

## Accessibility improvements

From adding ARIA descriptions to more items or simply adjusting the contrast of certain text elements, this release is the most accessible yet.

Version 2 also introduces "skip to content" and "scroll to top" links that enable quick navigation. There's also keyboard shortcuts for enabling items like search without reaching for the mouse.

The new image resizing features also provide full control over `alt` and `title` elements enabling an accessible experience for all visitors.

## A whole lot more

There's countless other features to explore. From being able to display taxonomies on articles and list pages, to using the new `headline` author parameter to customise your homepage. There's also improved JSON-LD structured data which further optimises SEO performance. 