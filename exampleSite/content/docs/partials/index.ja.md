---
title: "パーシャル"
weight: 9
draft: false
description: "Blowfish で利用可能なすべてのパーシャル。"
slug: "partials"
tags: ["partials", "analytics", "privacy", "comments", "favicons", "icon", "docs"]
series: ["Documentation"]
series_order: 9
---

## アナリティクス

Blowfish は、Fathom Analytics、Google アナリティクス、Umami Analytics のビルトインサポートを提供しています。Fathom は、ユーザーのプライバシーを尊重する Google アナリティクスの有料の代替手段です。

### Fathom Analytics

Fathom Analytics のサポートを有効にするには、`config/_default/params.toml` ファイルに Fathom サイトコードを指定するだけです。Fathom のカスタムドメイン機能を使用していて、ドメインからスクリプトを配信したい場合は、追加で `domain` 設定値を指定することもできます。`domain` 値を指定しない場合、スクリプトは Fathom DNS から直接ロードされます。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google アナリティクス

Google アナリティクスのサポートは、Hugo の内部パーシャルを介して提供されます。`config/_default/config.toml` ファイルに `googleAnalytics` キーを指定するだけで、スクリプトが自動的に追加されます。

指定された設定値に基づいて、バージョン 3 (analytics.js) とバージョン 4 (gtag.js) の両方がサポートされています。

```toml
# config/_default/config.toml

# バージョン 3
googleAnalytics = "UA-PROPERTY_ID"
# バージョン 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Umami Analytics のサポートを有効にするには、`config/_default/params.toml` ファイルに [Umami トラッキングコード](https://umami.is/docs/collect-data)を指定するだけです。
Umami のカスタムドメイン機能を使用していて、ドメインからスクリプトを配信したい場合は、追加で `domain` 設定値を指定することもできます。`domain` 値を指定しない場合、スクリプトは Umami DNS (analytics.umami.is) から直接ロードされます。
トラッカーを特定のドメインでのみ実行したい場合は、`dataDomains` 設定値を指定できます。`dataDomains` 値を指定しない場合、スクリプトは `domain` と `websiteid` が一致する任意のウェブサイトで実行されます。環境変数 `TRACKER_SCRIPT_NAME` が設定されている場合は、カスタムスクリプト名 `scriptName` を指定できます。設定されていない場合は、コメントアウトするか、デフォルトの `script.js` を使用してください。

{{< alert >}}
**注:** Umami Analytics を有効にすると、Blowfish は [Umami トラックイベント](https://umami.is/docs/track-events)を自動的にサポートします。トラックイベントをサポートしたくない場合は、パラメータ `enableTrackEvent` を `false` に設定する必要があります。
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

Seline Analytics のサポートを有効にするには、`config/_default/params.toml` ファイルに [Seline トークン](https://seline.so/docs/install-seline)を指定するだけです。

{{< alert >}}
**注:** Seline Analytics を有効にすると、Blowfish は [Seline トラックイベント](https://seline.so/docs/custom-events)を自動的にサポートします。トラックイベントをサポートしたくない場合は、パラメータ `enableTrackEvent` を `false` に設定する必要があります。
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### カスタムアナリティクスプロバイダー

ウェブサイトで別のアナリティクスプロバイダーを使用したい場合は、アナリティクスパーシャルをオーバーライドして、独自のスクリプトを提供することもできます。プロジェクトに `layouts/partials/extend-head.html` ファイルを作成するだけで、ウェブサイトの `<head>` に自動的に含まれます。

## コメント

記事にコメントを追加するために、Blowfish には、各記事ページの下部に含まれるコメントパーシャルのサポートが含まれています。選択したコメントを表示するために必要なコードを含む `layouts/partials/comments.html` を指定するだけです。

組み込みの Hugo Disqus テンプレートを使用するか、独自のカスタムコードを提供できます。詳細については、[Hugo ドキュメント](https://gohugo.io/content-management/comments/)を参照してください。

パーシャルが提供されると、コメントが表示される場所をより細かく制御するために、`showComments` パラメータを使用して管理されます。この値は、`params.toml` [設定ファイル]({{< ref "configuration#テーマパラメーターtheme-parameters" >}})のテーマレベルで設定するか、[フロントマター]({{< ref "front-matter" >}})に含めることで記事ごとに設定できます。パラメータはデフォルトで `false` であるため、コメントを表示するには、これらの場所のいずれかで `true` に設定する必要があります。

## ファビコン

Blowfish は、開始するための空白のファビコンのデフォルトセットを提供しますが、独自のアセットを提供してそれらを上書きできます。新しいファビコンアセットを取得する最も簡単な方法は、[favicon.io](https://favicon.io) などのサードパーティプロバイダーを使用してそれらを生成することです。

アイコンアセットは、ウェブサイトの `static/` フォルダに直接配置し、以下のリストに従って名前を付ける必要があります。[favicon.io](https://favicon.io) を使用する場合、これらは自動的に生成されるファイル名になりますが、必要に応じて独自のアセットを提供できます。

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

または、デフォルトのファビコンの動作を完全にオーバーライドして、独自のファビコン HTML タグとアセットを提供することもできます。プロジェクトに `layouts/partials/favicons.html` ファイルを提供するだけで、デフォルトのアセットの代わりにサイトの `<head>` に挿入されます。

## アイコン

[アイコンショートコード]({{< ref "shortcodes#アイコン" >}})と同様に、Blowfish の `icon.html` パーシャルを使用して、独自のテンプレートやパーシャルにアイコンを含めることができます。パーシャルは、含めるアイコンの名前である1つのパラメータを受け取ります。

**例:**

```go
  {{ partial "icon.html" "github" }}
```

アイコンは Hugo パイプラインを使用して設定されるため、非常に柔軟です。Blowfish には、ソーシャル、リンク、その他の目的のための組み込みアイコンが多数含まれています。サポートされているアイコンの完全なリストについては、[アイコンサンプル]({{< ref "samples/icons" >}})ページを確認してください。

カスタムアイコンは、プロジェクトの `assets/icons/` ディレクトリに独自のアイコンアセットを提供することで追加できます。その後、`.svg` 拡張子なしで SVG ファイル名を使用して、パーシャルでアイコンを参照できます。

アイコンは、[アイコンショートコード]({{< ref "shortcodes#アイコン" >}})を呼び出すことで、記事のコンテンツでも使用できます。

## 拡張機能

Blowfish は、基本機能を拡張できる多数の拡張パーシャルも提供しています。

### 記事リンク

記事リンクの後にコードを追加したい場合は、`layouts/partials/extend-article-link.html` ファイルを作成します。これは、特定の記事のメタデータを強調表示するために使用できる [`badge` ショートコード]({{< ref "shortcodes#バッジ" >}})と組み合わせると特に効果的です。

### ヘッダーとフッター

このテーマでは、テンプレートの `<head>` セクションと `<footer>` セクションに直接コードを追加できます。これらは、テーマの一部ではないスクリプトやその他のロジックを提供するのに役立ちます。

`layouts/partials/extend-head.html` または `layouts/partials/extend-footer.html` を作成するだけで、これらは自動的にウェブサイトのビルドに含まれます。どちらのパーシャルも `<head>` と `<footer>` の最後の項目として挿入されるため、テーマのデフォルトを上書きするために使用できます。

### 非キャッシュの head 拡張

`extend-head.html` は[キャッシュされる](https://gohugo.io/functions/partials/includecached/)が、Blowfish ではページ単位の条件に応じてスクリプトやメタデータを動的に含めるための、非キャッシュの head 拡張にも対応している。この機能を使うには、プロジェクト内に `layouts/partials/extend-head-uncached.html` ファイルを作成する。このファイルは HTML の `<head>` タグ内に読み込まれる。

これは、ショートコードや front matter のフラグなど、ビルド間でキャッシュされるべきでないページ固有の要素に基づいて、スクリプトやメタデータを動的に含めたい場合に有用。

たとえば、ショートコードの有無に応じて CDN の JavaScript ファイルを読み込むには、`extend-head-uncached.html` 内で [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) メソッドを使う。
