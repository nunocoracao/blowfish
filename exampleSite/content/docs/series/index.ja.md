---
title: "シリーズ"
weight: 12
draft: false
description: "記事をシリーズの下にグループ化する方法を学びます。"
slug: "series"
tags: ["series", "docs"]
series: ["Documentation"]
series_order: 11
seriesOpened: true
---

Blowfish は、一連の記事を「シリーズ」でグループ化する機能を提供します。記事をシリーズの下に配置すると、残りのシリーズ記事が各ページに表示され、それらの間をすばやく移動できるようになります。この例は、上で確認できます。

## タクソノミーの作成
シリーズを有効にするにはまず、`series` タクソノミーを作成してください。具体的には、`hugo.toml` のタクソノミーリストに `series` タクソノミーを追加するだけです。

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## 記事をマークする

次に、`series` パラメータと `series_order` を使用して各記事をマークする必要があります。`series` パラメータは、記事を配置するシリーズの ID と名前になります (変数は配列ですが、各記事を単一のシリーズに保つことをお勧めします)。そして、`series_order` は、シリーズ内のその記事の順序を定義します。以下の例では、記事は `Documentation` シリーズの `11` 番です。

```md
series: ["Documentation"]
series_order: 11
```

## シリーズの動作
記事をシリーズの一部としてマークすると、このページでご覧いただけるように、シリーズモジュールが自動的に表示されます。そのモジュールを開始時に開くかどうかは、`params.toml` の `article.seriesOpened` グローバル変数、または記事レベルでオーバーライドを指定するフロントマターパラメータ `seriesOpened` を使用して選択できます。
