---
title: "Thumbnails"
date: 2022-09-26
draft: false
description: "Turn on thumbnails for your articles."
slug: "thumbnail_sample"
tags: ["thumbnail", "sample"]
summary: "A quick example of how to start using Thumbnails in your artciles."
type: 'sample'
---

A quick example of how to start using Thumbnails in your articles.

If your average directory for an article looks like this: 

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

Inside the article you can now add an image file (almost all formats are supported but we recommend `.png` or `.jpg`) that starts with `feature*`. Example below.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

This will tell Blowfish that this article has a feature image that can be used both as a thumbnail across your website as well as for <a target="_blank" href="https://oembed.com/">oEmbed</a> cards across social platforms. As an example, you can try copy pasting the URL of this article into a platform that shows oEmbeds (e.g. Twitter, WhatsApp, Telegram, etc) and see what is displayed.
