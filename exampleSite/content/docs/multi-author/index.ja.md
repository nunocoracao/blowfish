---
title: "複数の著者"
weight: 8
draft: false
description: "記事に複数の著者を設定する。"
slug: "multi-author"
tags: ["authors", "config", "docs"]
series: ["Documentation"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false 
---


一部のウェブサイトでは、複数の著者がコンテンツを提供しているため、ウェブサイト全体で単一のデフォルト著者以上のものが必要になります。このようなユースケースのために、Blowfish では、複数著者機能を使用して著者リストを拡張できます。

すべての後方互換性を維持するために、この機能では追加の著者の定義のみを許可し、設定ファイルを介して使用される以前の著者機能を一切変更しません。

## 著者の作成

新しい著者を作成する最初のステップは、`./data/authors` に新しいフォルダを設定することです。次に、その中に新しい `json` ファイルを、新しい著者ごとに1つずつ追加できます。ファイルの名前は、記事で参照する際のその著者の `key` になります。

例として、`./data/authors` 内に `nunocoracao.json` というファイルを作成しましょう。ファイルの内容は以下のものと同様である必要があります。`name`、`image`、`bio`、および `social` は、著者に対して現在サポートされている4つのパラメータです。これらは、設定ファイルでデフォルトの著者に対して使用できる設定を模倣しています。

_注: ソーシャルオブジェクトのキーは、テーマのアイコンの1つを取得するために使用されます。セットアップで利用可能な任意のアイコンを自由に使用してください。_

```json
{
    "name": "Nuno Coração",
    "image" : "img/nuno_avatar.jpg",
    "bio": "テーマ作成者",
    "social": [
        { "linkedin": "https://linkedin.com/in/nunocoracao" },
        { "twitter": "https://twitter.com/nunocoracao" },
        { "instagram": "https://instagram.com/nunocoracao" },
        { "medium": "https://medium.com/@nunocoracao" },
        { "github": "https://github.com/nunocoracao" },
        { "goodreads": "http://goodreads.com/nunocoracao" },
        { "keybase": "https://keybase.io/nunocoracao" },
        { "reddit": "https://reddit.com/user/nunoheart" }
    ]
}
```

## 記事で著者を参照する

著者を作成したので、次のステップは1つ以上の記事でそれを参照することです。以下の例では、前のステップで作成した著者をその `key` を使用して参照しています。

これにより、`json` ファイルで提供されたデータを使用して追加の著者がレンダリングされます。この機能は、サイト全体に設定されたデフォルトの著者を一切変更しないため、両方を個別に制御できます。`showAuthor` パラメータを使用すると、デフォルトの著者を表示するかどうかを設定できます。これは、単一著者のブログの通常の使用例です。新しい `authors` フロントマターパラメータを使用すると、記事に固有の著者を定義でき、それらはデフォルトのサイト著者の設定とは独立してレンダリングされます。

```md
---
title: "複数の著者"
date: 2020-08-10
draft: false
description: "記事に複数の著者を設定する。"
slug: "multi-author"
tags: ["authors", "config", "docs"]
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false 
---
```

この例は、現在のページの Markdown と同じもので、デフォルトの著者と新しい著者の両方が表示されます。スクロールして結果を確認できます。

## 著者タクソノミーを作成する

著者ごとに記事のリストを取得するには、`authors` タクソノミーを設定できます。これにより、さらに興味深い設定がいくつか可能になります。これは、記事に著者を表示するために必要なプロセスではオプションのステップです。

最初のステップは、以下の例のように、`config.toml` ファイルで `authors` タクソノミーを設定することです。`tag` と `category` はデフォルトで Hugo で定義されていますが、一度特定のタクソノミーセクションを追加したら、再度追加する必要があります。そうしないと、サイトはそれらを処理しません。

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

これでほぼ完了です。著者を指定するページが作成され、それぞれに、参加している記事のリストが表示されます。設定ファイルで `article.showAuthorsBadges` を使用したり、各記事で `showAuthorsBadges` を使用したりして、各投稿アイテムに `authors` タクソノミーをバッジとして表示するかを選択できます。例として、このドキュメントでは著者を表示しないように設定されていますが、以下に参照されているサンプルを見ると、著者がバッジとして表示されていることがわかります。

最後に、各著者ページに詳細を追加して、ちょっとした経歴、リンク、または用途に合った情報を表示できます。これを実現するには、`./content/authors` 内に各著者への `key` を持つフォルダを作成し、各フォルダ内に `_index.md` ファイルを配置します。上記の例では、`.content/authors/nunocoracao/_index.md` ファイルが作成されます。この中で、著者の実際の名前とそのページの内容を設定できます。このドキュメントウェブサイトの著者はこのように設定されているため、サイトをいじって見てください。

```md
---
title: "Nuno Coração"
---

Nuno の素晴らしいダミー経歴。

```

## サンプル

以下のサンプルは、デフォルトのサイト作成者がオフになっており、記事に複数の作成者がいる例を示しています。

{{< article link="/samples/multiple-authors/" >}}
