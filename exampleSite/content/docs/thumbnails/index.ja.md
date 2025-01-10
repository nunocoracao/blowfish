---
title: "サムネイル"
weight: 10
draft: false
description: "記事にサムネイル画像を設定する。"
slug: "thumbnails"
tags: ["thumbnail", "config", "docs"]
series: ["Documentation"]
series_order: 6
---

## サムネイル

Blowfish は、記事に視覚的な要素を簡単に追加できるように改良されました。サムネイル画像を設定するには、以下の例のように、記事のメインディレクトリ内に `feature*` で始まる画像ファイル (ほとんどすべての形式がサポートされていますが、`.png` または `.jpg` を推奨) を配置するだけです。

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

このように配置することで、Blowfish は記事にサムネイル画像があることを認識し、ウェブサイト全体でサムネイルとして使用したり、ソーシャルプラットフォームで共有する際の <a target="_blank" href="https://oembed.com/">oEmbed</a> カード用画像として使用したりできます。

## フォルダ構成

記事を単一の `.md` ファイルで管理していて、次のようなファイル構成になっている場合:

```shell
content
└── awesome_article.md
```

単一の Markdown ファイルからフォルダ形式に変更する必要があります。記事と同じ名前のディレクトリを作成し、その中に `index.md` ファイルを作成します。以下のような構成になります。

```shell
content
└── awesome_article
    └── index.md
```

あとは、前述のように画像を追加するだけです。設定例を確認したい場合は、[こちらのサンプル]({{< ref "thumbnail_sample" >}})をご覧ください。

## ヒーロー画像

サムネイル画像は、デフォルトで各記事のヒーロー画像としても使用されます。サイト全体、または特定の記事ごとにこの機能を設定するには、`config/_default/params.toml` 内の `article.showHero`、または各記事のフロントマターパラメータ `showHero` を使用します。ヒーロー画像のスタイルを変更したい場合は、`./layouts/partials/` に `hero.html` というファイルを作成することで、テーマの元のパーシャルを上書きできます。
