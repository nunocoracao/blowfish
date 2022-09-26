---
title: "Thumbnails"
date: 2020-08-12
draft: false
description: "Turn on thumbnails for your articles."
slug: "thumbnails"
tags: ["thumbnail", "config", "docs"]
---

## Thumbnails

Blowfish was enhanced in order to make it easy to add visual support to your posts. To do so, you just need to place an image file (almost all formats are supported bue we recommend `.png` or `.jpg`) that starts with `feature*` inside your article main directory as shown in the example below.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

This will tell Blowfish that this article has a feature image that can be used both as a thumbnail across your website as well as for <a target="_blank" href="https://oembed.com/">oEmbed</a> cards across social platforms. 

## Folder Strucutre

If you are using single `.md` files for your articles and have a file structure similar to this:

```shell
content
└── awesome_article.md
```

You need to change it from a single markdown file into a folder. Create a directory with the same name of the article, inside create a `index.md` file. You'll get a structure similar to what's below. 

```shell
content
└── awesome_article
    └── featured.png
```
The you just need to add an image like explain earlier. If you want to see a sample of this you can consult [this sample]({{< ref "thumbnail_sample" >}}).