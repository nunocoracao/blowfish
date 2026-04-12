---
title: "アイコン"
date: 2020-08-14
lastmod: 2022-03-09
draft: false
description: "Blowfish でサポートしているアイコン。"
slug: "icons"
tags: ["icons", "sample", "shortcodes"]
type: 'sample'
---

Blowfish はいくつもの [FontAwesome 6](https://fontawesome.com/icons) のアイコンを組み込み、サポートしています。これらは[アイコンパーシャル]({{< ref "docs/partials#icon" >}})または[アイコンショートコード]({{< ref "docs/shortcodes#icon" >}})のどちらかを利用してウェブサイトに含めることが出来ます。

加えて、カスタムアイコンも完全にサポートされています。プロジェクトのルートにある `assets/icons/` ディレクトリーに SVG アイコンアセットを置くだけです。アイコンディレクトリ内のアイコンはテーマ全体で利用可能になります。自動的に色を塗りつぶすために、すべての SVG パスは fill="currentColor" の XML 属性が必要です。

組み込んでいるアイコンと対応する名称の全リストは以下を参照してください。

{{< icon-ref >}}
