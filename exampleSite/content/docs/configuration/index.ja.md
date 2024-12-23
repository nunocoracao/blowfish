---
title: "設定"
weight: 4
draft: false
description: "Blowfish で使えるすべての設定変数"
slug: "configuration"
tags: ["config", "docs"]
series: ["Documentation"]
series_order: 4
---

Blowfish は高度にカスタマイズ可能なテーマであり、最新の Hugo 機能を使用して設定方法をシンプルにしています。

このテーマには、基本的なブログまたは静的サイトをすぐに立ち上げて実行できるデフォルト設定が付属しています。

{{< alert "fire" >}}
Blowfish を簡単に使い始められるように、新しい CLI ツールをリリースしました。インストールと設定に役立ちます。 グローバルに CLI ツールをインストールするには、以下を使用します。

```bash
npx blowfish-tools
```

{{< /alert >}}

> テーマにバンドルされている設定ファイルは、デフォルトの Hugo 構文である TOML 形式で提供されています。必要に応じて、設定を YAML または JSON に変換できます。

デフォルトのテーマ設定は各ファイルに記載されているため、必要に応じて設定を自由に調整できます。

{{< alert >}}
[インストール手順]({{< ref "/docs/installation#set-up-theme-configuration-files" >}})で概説されているように、Hugo プロジェクトの `config/_default/` フォルダ内のファイルを修正し、プロジェクトルートの `config.toml` ファイルを削除することで、テーマ設定を調整する必要があります。
{{< /alert >}}

## サイト設定

テーマ全体で標準の Hugo 設定変数が適用されますが、最適なエクスペリエンスを得るために設定する必要がある特定の事項があります。

サイト設定は `config/_default/config.toml` ファイルで管理されます。 下の表は、Blowfish が活用するすべての設定の概要を示しています。

この表で提供されている変数名は、TOML データ構造を簡素化するためにドット表記を使用していることに注意してください（つまり、 `outputs.home` は `[outputs] home` を指します）。

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `theme` | `"blowfish"` | Hugo Modules を使用している場合は、この設定値を削除する必要があります。 他のすべてのインストールタイプでは、テーマが機能するためにこれを `blowfish` に設定する必要があります。 |
| `baseURL` | _未設定_ | ウェブサイトのルートへの URL です。 |
| `defaultContentLanguage` | `"en"` | この値は、テーマコンポーネントとコンテンツのデフォルト言語を決定します。 サポートされている言語コードについては、以下の[言語と i18n](#言語と-i18n) セクションを参照してください。 |
| `enableRobotsTXT` | `true` | 有効にすると、検索エンジンがサイト全体をクロールできるようにする `robots.txt` ファイルがサイトルートに作成されます。 あらかじめ作成した独自の `robots.txt` を提供する場合は、`false` に設定し、ファイルを `static` ディレクトリに配置します。 完全に制御するには、このファイルを生成するための[カスタムレイアウト]({{< ref "content-examples#カスタムレイアウト" >}})を提供できます。 |
| `pagination.pagerSize` | `10` | 記事リストの各ページにリストされる記事の数です。 |
| `summaryLength` | `0` | [フロントマター]({{< ref "front-matter" >}})で提供されていない場合に、記事の概要を生成するために使用される単語の数です。 値 `0` は最初の文を使用します。 概要が非表示になっている場合、この値は効果がありません。 |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | サイト用に生成される出力形式です。 Blowfish では、すべてのテーマコンポーネントが正しく機能するために HTML、RSS、JSON が必要です。 |
| `permalinks` | _未設定_ | パーマリンクの設定については、[Hugo ドキュメント](https://gohugo.io/content-management/urls/#permalinks)を参照してください。 |
| `taxonomies` | _未設定_ | 分類の設定については、[コンテンツの整理]({{< ref "getting-started#コンテンツの整理" >}})セクションを参照してください。 |
<!-- prettier-ignore-end -->


## サムネイル

Blowfish は、記事に視覚的なサポートを簡単に追加できるように構築されています。Hugo の記事構造に慣れている場合は、記事フォルダ内に `feature*` で始まる画像ファイル（ほとんどすべての形式がサポートされていますが、`.png` または `.jpg` をお勧めします）を配置するだけです。これで、Blowfish はサイト内でサムネイルとして画像を使用したり、ソーシャルプラットフォーム全体で <a target="_blank" href="https://oembed.com/">oEmbed</a> カードに使用したりできます。

[こちら]({{< ref "thumbnails" >}})には、より詳細な情報と、どのように設定できるかを確認したい場合の[サンプル]({{< ref "thumbnail_sample" >}})を含むガイドもあります。

## 言語と i18n

Blowfish は多言語ウェブサイト向けに最適化されており、テーマアセットはすぐに使えるように複数の言語に翻訳されています。 言語設定を使用すると、コンテンツの複数のバージョンを生成して、訪問者に母国語でカスタマイズされたエクスペリエンスを提供できます。

このテーマは現在、デフォルトで次の言語をサポートしています:

| 言語 | コード |
|---|---|
| アラビア語 | `ar` |
| ブルガリア語 | `bg` |
| ベンガル語 | `bn` |
| カタロニア語 | `ca` |
| チェコ語 | `cs` |
| ドイツ語 | `de` |
| 英語 | `en` |
| エスペラント語 | `eo` |
| スペイン語（スペイン） | `es` |
| フィンランド語 | `fi` |
| フランス語 | `fr` |
| ヘブライ語 | `he` |
| クロアチア語 | `hr` |
| ハンガリー語 | `hu` |
| インドネシア語 | `id` |
| イタリア語 | `it` |
| 日本語 | `ja` |
| 韓国語 | `ko` |
| オランダ語 | `nl` |
| ポーランド語 | `pl` |
| ポルトガル語（ブラジル） | `pt-br` |
| ポルトガル語（ポルトガル） | `pt-pt` |
| ルーマニア語 | `ro` |
| ロシア語 | `ru` |
| トルコ語 | `tr` |
| ベトナム語 | `vi` |
| 中国語（簡体字） | `zh-cn` |
| 中国語（繁体字） | `zh-tw` |

デフォルトの翻訳は、翻訳文字列を含むカスタムファイル `i18n/[言語コード].yaml` を作成することでオーバーライドできます。 この方法を使用して新しい言語を追加することもできます。 新しい翻訳をコミュニティと共有したい場合は、[プルリクエストを開いて](https://github.com/nunocoracao/blowfish/pulls)ください。

### 設定

可能な限り柔軟に対応するために、ウェブサイトの各言語の言語設定ファイルを作成する必要があります。デフォルトでは、Blowfish には `config/_default/languages.en.toml` に英語の言語設定が含まれています。

デフォルトのファイルは、追加の言語を作成するためのテンプレートとして使用することも、英語以外の言語でウェブサイトを作成する場合は名前を変更することもできます。`languages.[言語コード].toml` 形式を使用してファイルに名前を付けるだけです。

{{< alert >}}
**注:** [サイト設定](#サイト設定)の `defaultContentLanguage` パラメータが、言語設定ファイル名の言語コードと一致していることを確認してください。
{{< /alert >}}

#### グローバル

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `languageCode` | `"en"` | このファイルの Hugo 言語コードです。トップレベル言語（例： `en`）またはサブバリアント（例： `en-au`）にすることができ、ファイル名の言語コードと一致する必要があります。Hugo はこの値が常に小文字であることを想定しています。適切な HTML 準拠のために、大文字と小文字を区別する `isoCode` パラメータを設定します。 |
| `languageName` | `"English"` | 言語の名前です。 |
| `weight` | `1` | 重みは、多言語サイトを構築するときの言語の順序を決定します。 |
| `title` | `"Blowfish"` | ウェブサイトのタイトルです。これは、サイトのヘッダーとフッターに表示されます。 |
<!-- prettier-ignore-end -->

#### パラメーター

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `params.displayName` | `"EN"` | ウェブサイトに言語が表示されるときに使用される名前です。 |
| `params.isoCode` | `"en"` | HTML メタデータ用の ISO 言語コードです。トップレベル言語（例： `en`）またはサブバリアント（例： `en-AU`）にすることができます。 |
| `params.rtl` | `false` | これが RTL 言語かどうかです。`true` に設定すると、コンテンツが右から左に並べ替えられます。 Blowfish は RTL 言語と LTR 言語の同時使用を完全にサポートしており、両方に動的に調整されます。 |
| `params.dateFormat` | `"2 January 2006"` | この言語での日付のフォーマット方法です。使用できる形式については、[Hugo ドキュメント](https://gohugo.io/functions/format/#gos-layout-string)を参照してください。 |
| `params.logo` | _未設定_ | `assets/` フォルダ内のサイトロゴファイルへの相対パスです。ロゴファイルは2倍の解像度で提供する必要があり、あらゆる画像サイズをサポートしています。 |
| `params.secondaryLogo` | _未設定_ | `assets/` フォルダ内のセカンダリサイトロゴファイルへの相対パスです。 ロゴファイルは2倍の解像度で提供する必要があり、あらゆる画像サイズをサポートしています。 これは、`logo` とは反転/対照的なカラースキームである必要があります。設定されている場合、このロゴは、ユーザーが `defaultAppearance` モードから切り替えたときに表示されます。 |
| `params.description` | _未設定_ | ウェブサイトの説明です。これはサイトのメタデータで使用されます。 |
| `params.copyright` | _未設定_ | サイトフッターの著作権メッセージの Markdown 文字列には、プレースホルダ { year } を含めて現在の年を動的に挿入できます。指定されていない場合、Blowfish はサイト `title` を使用して著作権文字列を自動的に生成します。 |

<!-- prettier-ignore-end -->

#### 著者(Author)

<!-- prettier-ignore-start -->
| 名前 | デフォルト　　　 | 説明 |
|---|---|---|
| `author.name` | _未設定_ | 著者の名前です。これは、記事のフッターと、プロフィールレイアウトが使用されている場合はホームページに表示されます。 |
| `author.image` | _未設定_ | 著者の画像ファイルへのパスです。画像は縦横比 1:1 である必要があります。画像は、サイトの `assets/` フォルダに配置することも、外部 URL にすることもできます。 |
| `author.headline` | _未設定_ | 著者の見出しを含む Markdown 文字列です。プロフィールホームページの著者の名前に下に表示されます。 |
| `author.bio` | _未設定_ | 著者の略歴を含む Markdown 文字列です。記事のフッターに表示されます。 |
| `author.links` | _未設定_ | 著者の詳細と一緒に表示するリンクです。設定ファイルには、コメントを外すだけで有効になるリンクの例が含まれています。リンクが表示される順序は、配列に表示される順序によって決まります。`assets/icons/` に対応する SVG アイコンアセットを提供することで、カスタムリンクを追加できます。 |
<!-- prettier-ignore-end -->

### メニュー(Menus)

Blowfish は、言語固有のメニュー設定もサポートしています。メニュー設定ファイルは、言語ファイルと同じ命名形式に従います。ファイル名に言語コードを指定するだけで、Hugo はファイルがどの言語に関連しているかを認識します。

メニュー設定ファイルの名前は、 `menus.[language-code].toml` 形式です。メニュー設定で使用される言語コードが言語設定と一致していることを常に確認してください。

[はじめに]({{< ref "getting-started#menus" >}})セクションでは、このファイルの構造について詳しく説明しています。詳細な設定例については、[Hugo メニュー ドキュメント](https://gohugo.io/content-management/menus/)も参照できます。

## テーマパラメーター(Theme parameters)

Blowfish は、テーマの機能を制御する多数の設定パラメータを提供します。下の表は、`config/_default/params.toml` ファイルで使用可能なすべてのパラメータの概要を示しています。

ここにある記事のデフォルトの多くは、フロントマターで指定することで、記事ごとにオーバーライドできます。詳細については、[フロントマター]({{< ref "front-matter" >}})セクションを参照してください。

<!-- prettier-ignore-start -->

### グローバル

| 名前 | デフォルト | 説明 |
|---|---|---|
| `colorScheme` | `"blowfish"` | 使用するテーマのカラースキームです。有効な値は、`blowfish`（デフォルト）、`avocado`、`fire`、`ocean`、`forest`、`princess`、`neon`、`bloody`、`terminal`、`marvel`、`noir`、`autumn`、`congo`、`slate` です。詳細については、[カラースキーム]({{< ref "getting-started#カラースキーム" >}})セクションを参照してください。 |
| `defaultAppearance` | `"light"` | デフォルトのテーマの外観です。`light` または `dark` のいずれかです。 |
| `autoSwitchAppearance` | `true` | 訪問者のオペレーティングシステムの設定に基づいてテーマの外観を自動的に切り替えるかどうかです。`false` に設定すると、サイトは常に `defaultAppearance` を使用します。 |
| `enableSearch` | `false` | サイト内検索が有効かどうかです。`true` に設定すると、検索機能が有効になります。検索機能は、[サイト設定](#サイト設定)の `outputs.home` 設定が正しく設定されているかどうかに依存することに注意してください。 |
| `enableCodeCopy` | `false` | `<code>` ブロックのクリップボードへのコピーボタンを有効にするかどうかです。コードコピーが正しく機能するには、`highlight.noClasses` パラメータを `false` に設定する必要があります。以下の[その他の設定ファイル](#その他の設定ファイル)について読んでください。 |
| `mainSections` | _未設定_ | 最近の記事リストに表示するセクションです。指定しない場合は、記事数が最も多いセクションが使用されます。 |
| `showViews` | _未設定_ | 記事とリストの表示回数を表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `showLikes` | _未設定_ | 記事とリストのいいねを表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `robots` | _未設定_ | ロボットがサイトをどのように処理するかを示す文字列です。設定されている場合、ページヘッダーに出力されます。有効な値については、[Google のドキュメント](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)を参照してください。 |
| `disableImageZoom` | `false` | サイト内のすべての画像の画像ズーム機能を無効にします。 |
| `disableImageOptimization` | `false` | サイト内のすべての画像の画像サイズ変更と最適化機能を無効にします。 |
| `disableTextInHeader` | `false` | ヘッダーのテキストを無効にします。ロゴベースのヘッダーに役立ちます。 |
| `defaultBackgroundImage` | _未設定_ | `background` ホームページレイアウトと `background` ヒーロースタイルの両方のデフォルトの背景画像です。 |
| `defaultFeaturedImage` | _未設定_ | 記事全体のすべての `featured` 画像のデフォルトの背景画像です。ローカルの `featured` 画像によってオーバーライドされます。 |
| `highlightCurrentMenuArea` | _未設定_ | メインメニューのメニュー項目が選択されているときにマークを付けます。 |
| `smartTOC` | _未設定_ | スマート目次をアクティブにします。表示されている項目が強調表示されます。 |
| `smartTOCHideUnfocusedChildren` | _未設定_ | スマート目次がオンになっている場合、フォーカスされていないときに、テーブルのより深いレベルが非表示になります。 |

### ヘッダー(Header)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `header.layout` | `"basic"` | サイト全体のヘッダーを定義します。サポートされている値は、`basic`、`fixed`、`fixed-fill`、`fixed-fill-blur` です。 |

### フッター(Footer)

| 名前 | デフォルト　　　 | 説明 |
|---|---|---|
| `footer.showMenu` | `true` | フッターメニューを表示/非表示にします。これは、`config/_default/menus.en.toml` ファイルの `[[footer]]` セクションで設定できます。 |
| `footer.showCopyright` | `true` | サイトのフッターに著作権文字列を表示するかどうかです。文字列自体は、[言語設定](#言語と-i18n) の `copyright` パラメータを使用してカスタマイズできることに注意してください。 |
| `footer.showThemeAttribution` | `true` | サイトのフッターに「powered by」というテーマの帰属を表示するかどうかです。このメッセージを無効にする場合は、サイトの他の場所（たとえば、about ページ）でテーマの帰属を検討してください。 |
| `footer.showAppearanceSwitcher` | `false` | サイトのフッターに外観スイッチャーを表示するかどうかです。 ブラウザのローカルストレージを使用して、訪問者の設定が保持されます。 |
| `footer.showScrollToTop` | `true` | `true` に設定すると、トップへスクロールの矢印が表示されます。 |

### ホームページ(Homepage)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `homepage.layout` | `"profile"` | ホームページのレイアウトです。有効な値は、`page`、`profile`、`hero`、`card`、`background`、`custom` です。`custom` に設定した場合、`/layouts/partials/home/custom.html` ファイルを作成して独自のレイアウトを提供する必要があります。詳細については、[ホームページレイアウト]({{< ref "homepage-layout" >}}) セクションを参照してください。 |
| `homepage.homepageImage` | _未設定_ | `hero` レイアウトと `card` レイアウトで使用される画像です。アセットディレクトリからのローカル画像または外部画像 URL として設定できます。詳細については、[ホームページレイアウト]({{< ref "homepage-layout" >}}) セクションを参照してください。 |
| `homepage.showRecent` | `false` | ホームページに最近の記事リストを表示するかどうかです。 |
| `homepage.showRecentItems` | 5 | showRecent が true の場合に表示する記事の数です。変数が0に設定されている場合、または定義されていない場合は、システムはデフォルトで5つの記事に設定されます。 |
| `homepage.showMoreLink` | `false` | ユーザーを事前に定義された場所に移動する「もっと見る」リンクを投稿の最後に表示するかどうかです。 |
| `homepage.showMoreLinkDest` | `/posts` | 「もっと見る」ボタンの移動先です。 |
| `homepage.cardView` | `false` | 最近の記事をカードのギャラリーとして表示します。 |
| `homepage.cardViewScreenWidth` | `false` | 最近の記事カードギャラリーの幅を拡張して、利用可能な幅全体を使用します。 |
| `homepage.layoutBackgroundBlur` | `false` | ホームページレイアウトの背景画像をスクロールに合わせてぼかします。 |

### 記事(Article)

| 名前 | デフォルト　　　　 | 説明 |
|---|---|---|
| `article.showDate` | `true` | 記事の日付を表示するかどうかです。 |
| `article.showViews` | `false` | 記事の表示回数を表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `article.showLikes` | `false` | 記事のいいねを表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `article.showDateOnlyInArticle` | `false` | 記事リスト/カードに表示されていない場合でも、記事内に日付を表示します。 |
| `article.showDateUpdated` | `false` | 記事が更新された日付を表示するかどうかです。 |
| `article.showAuthor` | `true` | 記事のフッターに著者ボックスを表示するかどうかです。 |
| `article.showAuthorBottom` | `false` | 著者ボックスは、各ページの上部ではなく下部に表示されます。 |
| `article.showHero` | `false` | サムネイル画像を各記事ページ内でヒーロー画像として表示するかどうかです。 |
| `article.heroStyle` | _未設定_ | ヒーロー画像を表示するスタイルです。有効なオプションは、`basic`、`big`、`background`、`thumbAndBackground` です。 |
| `article.layoutBackgroundBlur` | `true` | 背景記事 heroStyle の背景画像をスクロールに合わせてぼかします。 |
| `article.layoutBackgroundHeaderSpace` | `true` | ヘッダーと本文の間にスペースを追加します。 |
| `article.showBreadcrumbs` | `false` | 記事のヘッダーにパンくずリストを表示するかどうかです。 |
| `article.showDraftLabel` | `true` | サイトが `--buildDrafts` でビルドされたときに、記事の横にドラフトインジケータを表示するかどうかです。 |
| `article.showEdit` | `false` | 記事コンテンツを編集するためのリンクを表示するかどうかです。 |
| `article.editURL` | _未設定_ | `article.showEdit` がアクティブな場合、編集リンクの URL です。 |
| `article.editAppendPath` | `true` | `article.showEdit` がアクティブな場合、現在の記事へのパスを `article.editURL` で設定された URL に追加するかどうかです。 |
| `article.seriesOpened` | `false` | シリーズモジュールがデフォルトで開いた状態で表示されるかどうかです。 |
| `article.showHeadingAnchors` | `true` | 記事内の見出しの横にアンカーリンク見出しを表示するかどうかです。 |
| `article.showPagination` | `true` | 記事のフッターに次/前の記事リンクを表示するかどうかです。 |
| `article.invertPagination` | `false` | 次/前の記事リンクの方向を反転するかどうかです。 |
| `article.showReadingTime` | `true` | 記事の読了時間を表示するかどうかです。 |
| `article.showTableOfContents` | `false` | 記事に目次を表示するかどうかです。 |
| `article.showRelatedContent` | `false` | 各投稿の関連記事を表示します。`config.toml` に追加の設定が必要になる場合があります。この機能を有効にする場合は、テーマの `config.toml` を確認し、関連するすべての _related_ エントリをコピーしてください。また、関連記事については [Hugo のドキュメント](https://gohugo.io/content-management/related/) も確認してください。 |
| `article.relatedContentLimit` | `3` | `showRelatedContent` がオンになっている場合に表示する関連記事の上限です。 |
| `article.showTaxonomies` | `false` | この記事に関連するタクソノミーを表示するかどうかです。 |
| `article.showAuthorsBadges` | `false` | `authors` タクソノミーを記事またはリストのヘッダーに表示するかどうかです。これには、「複数の著者」と `authors` タクソノミーの設定が必要です。この機能の設定方法の詳細については、[このページ]({{< ref "multi-author" >}}) を確認してください。 |
| `article.showWordCount` | `false` | 記事の単語数を表示するかどうかです。 |
| `article.showComments` | `false` | 記事のフッターの後に [コメントパーシャル]({{< ref "partials#コメント" >}}) を含めるかどうかです。 |
| `article.sharingLinks` | _未設定_ | 各記事の最後に表示する共有リンクです。指定されていないか、`false` に設定されている場合、リンクは表示されません。使用可能な値は、<br>"linkedin"、"bluesky"、<br>"mastodon"、"twitter"、"reddit"、<br>"pinterest"、"facebook"、"email"、<br>"whatsapp"、"telegram" です。 |
| `article.showZenMode` | `false` | 記事のZenモードリーダー機能を有効にするフラグです。 |

### リスト(List)

| 名前                               | デフォルト　　　   | 説明                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list.showHero`                    | `false`   | 各リストページ内でサムネイル画像をヒーロー画像として表示するかどうか。                                                                                                                                                                                                                               |
| `list.heroStyle`                   | _未設定_ | ヒーロー画像の表示スタイル。有効なオプションは `basic`、`big`、`background`、`thumbAndBackground` です。                                                                                                                                                                                            |
| `list.showBreadcrumbs`             | `false`   | リストページのヘッダーにパンくずリストを表示するかどうか。                                                                                                                                                                                                                                        |
| `list.layoutBackgroundBlur`        | `true`    | `background` リストの heroStyle の背景画像をスクロールでぼかします。                                                                                                                                                                                                                              |
| `list.layoutBackgroundHeaderSpace` | `true`    | ヘッダーと本文の間にスペースを追加します。                                                                                                                                                                                                                                                          |
| `list.showTableOfContents`         | `false`   | リストページに目次を表示するかどうか。                                                                                                                                                                                                                                                            |
| `list.showSummary`                 | `false`   | リストページに記事の要約を表示するかどうか。[フロントマター]({{< ref "front-matter" >}}) で要約が提供されていない場合、[サイト設定](#site-configuration) の `summaryLength` パラメータを使用して自動的に生成されます。                                                                          |
| `list.showViews`                   | `false`   | リストの閲覧数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。                                                                                                                                                                              |
| `list.showLikes`                   | `false`   | リストのいいね数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。                                                                                                                                                                              |
| `list.showCards`                   | `false`   | 各記事をカードとして表示するか、シンプルなインラインテキストとして表示するかどうか。                                                                                                                                                                                                               |
| `list.orderByWeight`               | `false`   | 記事を[重み](https://gohugo.io/methods/page/weight/)で並べ替えるかどうか。                                                                                                                                                                                                                         |
| `list.groupByYear`                 | `true`    | リストページで記事を年別にグループ化するかどうか。                                                                                                                                                                                                                                                    |
| `list.cardView`                    | `false`   | リストをカードのギャラリーとして表示します。                                                                                                                                                                                                                                                      |
| `list.cardViewScreenWidth`         | `false`   | リスト内のカードギャラリーの幅を、利用可能な全幅を使用するように拡張します。                                                                                                                                                                                                                          |
| `list.constrainItemsWidth`         | `false`   | 読みやすくするために、アイテムの幅を `prose` に制限します。フィーチャー画像が利用できない場合に役立ちます。                                                                                                                                                                                         |
| `list.showTableOfContents`         | `false`   | 記事に目次を表示するかどうか。                                                                                                                                                                                                                                                                    |

### サイトマップ(Sitemap)

| 名前                    | デフォルト                | 説明                                                                                                                                                                                 |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sitemap.excludedKinds` | `["taxonomy", "term"]` | 生成された `/sitemap.xml` ファイルから除外するコンテンツの種類。許容される値については、[Hugo のドキュメント](https://gohugo.io/templates/section-templates/#page-kinds)を参照してください。 |

### タクソノミー(Taxonomy)

| 名前                           | デフォルト　　   | 説明                                                                                                              |
| ------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `taxonomy.showTermCount`       | `true`    | タクソノミーリストにタクソノミー用語内の記事数を表示するかどうか。                                                    |
| `taxonomy.showHero`            | `false`   | 各タクソノミーページ内でサムネイル画像をヒーロー画像として表示するかどうか。                                          |
| `taxonomy.heroStyle`           | _未設定_ | ヒーロー画像の表示スタイル。有効なオプションは `basic`、`big`、`background`、`thumbAndBackground` です。              |
| `taxonomy.showBreadcrumbs`     | `false`   | タクソノミーのヘッダーにパンくずリストを表示するかどうか。                                                            |
| `taxonomy.showViews`           | `false`   | 記事の閲覧数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。 |
| `taxonomy.showLikes`           | `false`   | 記事のいいね数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。 |
| `taxonomy.showTableOfContents` | `false`   | タクソノミーに目次を表示するかどうか。                                                                                |
| `taxonomy.cardView`            | `false`   | リストをカードのギャラリーとして表示します。                                                                          |

### ターム(Term)

| 名前                       | デフォルト　　   | 説明                                                                                                              |
| -------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `term.showHero`            | `false`   | 各タームページ内でサムネイル画像をヒーロー画像として表示するかどうか。                                            |
| `term.heroStyle`           | _未設定_ | ヒーロー画像の表示スタイル。有効なオプションは `basic`、`big`、`background`、`thumbAndBackground` です。              |
| `term.showBreadcrumbs`     | `false`   | タームのヘッダーにパンくずリストを表示するかどうか。                                                                  |
| `term.showViews`           | `false`   | 記事の閲覧数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。 |
| `term.showLikes`           | `false`   | 記事のいいね数を表示するかどうか。これを有効にするには、Firebase の統合を有効にする必要があります。以下をご覧ください。 |
| `term.showTableOfContents` | `false`   | タームに目次を表示するかどうか。                                                                                  |
| `term.groupByYear`         | `false`   | タームページで記事を年別にグループ化するかどうか。                                                                  |
| `term.cardView`            | `false`   | リストをカードのギャラリーとして表示します。                                                                          |
| `term.cardViewScreenWidth` | `false`   | リスト内のカードギャラリーの幅を、利用可能な全幅を使用するように拡張します。                                          |

### Firebase

| 名前                         | デフォルト　　　   | 説明                                                                                                                                                                               |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firebase.apiKey`            | _未設定_ | Firebase との統合に必要な Firebase API キー。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                       |
| `firebase.authDomain`        | _未設定_ | Firebase との統合に必要な Firebase 認証ドメイン。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                     |
| `firebase.projectId`         | _未設定_ | Firebase との統合に必要な Firebase プロジェクト ID。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                    |
| `firebase.storageBucket`     | _未設定_ | Firebase との統合に必要な Firebase ストレージバケット。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                  |
| `firebase.messagingSenderId` | _未設定_ | Firebase との統合に必要な Firebase メッセージング送信者 ID。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。              |
| `firebase.appId`             | _未設定_ | Firebase との統合に必要な Firebase アプリ ID。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                          |
| `firebase.measurementId`     | _未設定_ | Firebase との統合に必要な Firebase 測定 ID。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})を参照してください。                          |

### Fathom Analytics

| 名前                     | デフォルト　　　 | 説明                                                                                                                                                  |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fathomAnalytics.site`   | _未設定_ | ウェブサイト用に Fathom Analytics によって生成されたサイトコード。詳細については、[Analytics のドキュメント]({{< ref "partials#アナリティクス" >}})を参照してください。 |
| `fathomAnalytics.domain` | _未設定_ | Fathom Analytics でカスタムドメインを使用している場合、ここに指定して、`script.js` をカスタムドメインから配信します。                                         |

### Umami Analytics

| 名前 | デフォルト　　　 | 説明 |
|---|---|---|
| `umamiAnalytics.websiteid` | _未設定_ | ウェブサイト用に Umami Analytics によって生成されたサイトコード。詳細については、[Analytics のドキュメント]({{< ref "partials#アナリティクス" >}})を参照してください。 |
| `umamiAnalytics.domain` | _未設定_ | Umami Analytics でカスタムドメインを使用している場合、ここに指定して、`script.js` をカスタムドメインから配信します。 |
| `umamiAnalytics.dataDomains` | _未設定_ | トラッカーを特定のドメインでのみ実行したい場合は、トラッカースクリプトに指定します。これは、ドメイン名のカンマ区切りリストです。例えば "yoursite.com,yoursite2.com" のようになります。 |
| `umamiAnalytics.scriptName` | script.js | アンチ広告ブロックに使用される `script.js` の名前は、環境変数 `TRACKER_SCRIPT_NAME` で設定されます。 |
| `umamiAnalytics.enableTrackEvent` | `true` | `true` に設定すると、トラックイベントが自動的に追加されます。トラックイベントを追加したくない場合は、`false` に設定してください。 |

### Seline Analytics

| 名前                              | デフォルト　　　   | 説明                                                                                                                               |
|-----------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `selineAnalytics.token`           | _未設定_ | ウェブサイト用に Seline Analytics によって生成されたトークン。詳細については、[Analytics のドキュメント]({{< ref "partials#アナリティクス" >}})を参照してください。 |
| `selineAnalytics.enableTrackEvent` | `true`      | `true` に設定すると、トラックイベントが自動的に追加されます。トラックイベントを追加したくない場合は、`false` に設定してください。                          |

### BuyMeACoffee

| 名前                                | デフォルト　　   | 説明                                                                                   |
| ----------------------------------- | --------- | -------------------------------------------------------------------------------------- |
| `buymeacoffee.identifier`           | _未設定_ | ターゲットの buymeacoffee アカウントの識別子。                                           |
| `buymeacoffee.globalWidget`         | _未設定_ | グローバル buymeacoffee ウィジェットを有効にします。                                       |
| `buymeacoffee.globalWidgetMessage`  | _未設定_ | 新しいユーザーが初めてサイトにアクセスしたときに表示されるメッセージ。                     |
| `buymeacoffee.globalWidgetColor`    | _未設定_ | ウィジェットの色（16進数形式）。                                                        |
| `buymeacoffee.globalWidgetPosition` | _未設定_ | ウィジェットの位置。例えば "Left" または "Right"                                        |

### verification

| 名前                     | デフォルト　  | 説明                                                                                                    |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------- |
| `verification.google`    | _未設定_ | サイトメタデータに含まれる、Google が提供するサイト確認文字列。                                             |
| `verification.bing`      | _未設定_ | サイトメタデータに含まれる、Bing が提供するサイト確認文字列。                                               |
| `verification.pinterest` | _未設定_ | サイトメタデータに含まれる、Pinterest が提供するサイト確認文字列。                                          |
| `verification.yandex`    | _未設定_ | サイトメタデータに含まれる、Yandex が提供するサイト確認文字列。                                             |
<!-- prettier-ignore-end -->

## RSSNext

| 名前                     | デフォルト　　　   | 説明                                                                                                                                                             |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rssnext.feedId`    | _未設定_ | [RSSNext/Follow](https://follow.is/) によって提供される rss `feedId` 文字列。`rss.xml` に含まれ、rss フィードを自身のものとしてクレームするのに役立ちます。 |
| `rssnext.userId`      | _未設定_ | [RSSNext/Follow](https://follow.is/) によって提供される rss `userId` 文字列。`rss.xml` に含まれ、rss フィードを自身のものとしてクレームするのに役立ちます。 |

## その他の設定ファイル

このテーマには `markup.toml` 設定ファイルも含まれています。このファイルには、Hugo が Blowfish で構築されたサイトを正しく生成するために重要なパラメータがいくつか含まれています。

このファイルが常に config ディレクトリに存在し、必要な値が設定されていることを確認してください。そうしないと、特定の機能が正しく機能せず、意図しない動作を引き起こす可能性があります。
