---
title: "サムネイル"
date: 2022-09-26
draft: false
description: "記事のサムネイルを変更する。"
slug: "thumbnail_sample"
tags: ["thumbnail", "sample"]
summary: "A quick example of how to start using Thumbnails in your artciles."
type: 'sample'
---

記事でどのようにサムネイルを利用するかの簡単な例です。

記事の平均的なディレクトリが以下のようなものだとしたら: 

```shell
content
└── awesome_article.md
```

単一の markdown ファイルから、フォルダーに入っている形式に変更する必要があります。記事の名前と同一のディレクトリを作成し、その中に `index.md` ファイルを作成します。このようにすると、以下のような構成になります。

```shell
content
└── awesome_article
    └── featured.png
```

記事内に `feature*` から始まる名前の画像ファイル (ほとんどすべてのフォーマットに対応していますが、 `.png` か `.jpg` を推奨しています) を追加できます。以下が例です。

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

これによって Blowfish は、記事のサムネイルをウェブサイトまたは SNS の <a target="_blank" href="https://oembed.com/">oEmbed</a> カードの紹介画像として利用できます。例としては、この記事の URL を oEmbeds を表示するプラットフォーム (例: Twitter, WhatsApp, Telegram など) にコピーペーストどのように表示されるかをご覧ください。
