---
title: "設定"
weight: 4
draft: false
description: "Blowfish で使用可能なすべての設定変数"
slug: "configuration"
tags: ["config", "docs"]
series: ["Documentation"]
series_order: 4
---

Blowfish は高度にカスタマイズ可能なテーマであり、最新の Hugo 機能を使用して設定方法をシンプルにしています。

このテーマには、基本的なブログまたは静的 Web サイトをすぐに立ち上げて実行できるデフォルト設定が付属しています。

{{< alert "fire" >}}
Blowfish を簡単に使い始められるように、新しい CLI ツールをリリースしました。インストールと設定に役立ちます。 グローバルに CLI ツールをインストールするには、以下を使用します。

```bash
npx blowfish-tools
```

{{< /alert >}}

> テーマにバンドルされている設定ファイルは、デフォルトの Hugo 構文である TOML 形式で提供されています。必要に応じて、設定を YAML または JSON に変換できます。

デフォルトのテーマ設定は各ファイルに記載されているため、必要に応じて設定を自由に調整できます。

{{< alert >}}
[インストール手順]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}) で概説されているように、Hugo プロジェクトの `config/_default/` フォルダ内のファイルを修正し、プロジェクトルートの `config.toml` ファイルを削除することで、テーマ設定を調整する必要があります。
{{< /alert >}}

## サイト設定

テーマ全体で標準の Hugo 設定変数が適用されますが、最適なエクスペリエンスを得るために設定する必要がある特定の事項があります。

サイト設定は `config/_default/config.toml` ファイルで管理されます。 下の表は、Blowfish が活用するすべての設定の概要を示しています。

この表で提供されている変数名は、TOML データ構造を簡素化するためにドット表記を使用していることに注意してください（つまり、 `outputs.home` は `[outputs] home` を指します）。

<!-- prettier-ignore-start -->
| Name | Default | Description |
|---|---|---|
| `theme` | `"blowfish"` | Hugo Modules を使用している場合は、この設定値を削除する必要があります。 他のすべてのインストールタイプでは、テーマが機能するためにこれを `blowfish` に設定する必要があります。 |
| `baseURL` | _設定なし_ | Webサイトのルートへの URL です。 |
| `defaultContentLanguage` | `"en"` | この値は、テーマコンポーネントとコンテンツのデフォルト言語を決定します。 サポートされている言語コードについては、以下の [言語と i18n](#language-and-i18n) セクションを参照してください。 |
| `enableRobotsTXT` | `true` | 有効にすると、検索エンジンがサイト全体をクロールできるようにする `robots.txt` ファイルがサイトルートに作成されます。 あらかじめ作成した独自の `robots.txt` を提供する場合は、`false` に設定し、ファイルを `static` ディレクトリに配置します。 完全に制御するには、このファイルを生成するための [カスタムレイアウト]({{< ref "content-examples#custom-layouts" >}}) を提供できます。 |
| `pagination.pagerSize` | `10` | 記事リストの各ページにリストされる記事の数です。 |
| `summaryLength` | `0` | [フロントマター]({{< ref "front-matter" >}}) で提供されていない場合に、記事の概要を生成するために使用される単語の数です。 値 `0` は最初の文を使用します。 概要が非表示になっている場合、この値は効果がありません。 |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | サイト用に生成される出力形式です。 Blowfish では、すべてのテーマコンポーネントが正しく機能するために HTML、RSS、JSON が必要です。 |
| `permalinks` | _設定なし_ | パーマリンクの設定については、[Hugo ドキュメント](https://gohugo.io/content-management/urls/#permalinks) を参照してください。 |
| `taxonomies` | _設定なし_ | 分類の設定については、[コンテンツの整理]({{< ref "getting-started#organising-content" >}}) セクションを参照してください。 |
<!-- prettier-ignore-end -->


## サムネイル

Blowfish は、記事に視覚的なサポートを簡単に追加できるように構築されています。Hugo の記事構造に慣れている場合は、記事フォルダ内に `feature*` で始まる画像ファイル（ほとんどすべての形式がサポートされていますが、`.png` または `.jpg` をお勧めします）を配置するだけです。これで、Blowfish は Webサイト内でサムネイルとして画像を使用したり、ソーシャルプラットフォーム全体で <a target="_blank" href="https://oembed.com/">oEmbed</a> カードに使用したりできます。

[Here]({{< ref "thumbnails" >}}) is also a guide with more info and a [sample]({{< ref "thumbnail_sample" >}}) if you want to see how you can do it.

## 言語と i18n

Blowfish は多言語 Webサイト向けに最適化されており、テーマアセットはすぐに使えるように複数の言語に翻訳されています。 言語設定を使用すると、コンテンツの複数のバージョンを生成して、訪問者に母国語でカスタマイズされたエクスペリエンスを提供できます。

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

デフォルトの翻訳は、翻訳文字列を含むカスタムファイル `i18n/[言語コード].yaml` を作成することでオーバーライドできます。 この方法を使用して新しい言語を追加することもできます。 新しい翻訳をコミュニティと共有したい場合は、[プルリクエストを開いて](https://github.com/nunocoracao/blowfish/pulls) ください。

### 設定

可能な限り柔軟に対応するために、Web サイトの各言語の言語設定ファイルを作成する必要があります。デフォルトでは、Blowfish には `config/_default/languages.en.toml` に英語の言語設定が含まれています。

デフォルトのファイルは、追加の言語を作成するためのテンプレートとして使用することも、英語以外の言語で Web サイトを作成する場合は名前を変更することもできます。`languages.[言語コード].toml` 形式を使用してファイルに名前を付けるだけです。

{{< alert >}}
**注:** [サイト設定](#site-configuration) の `defaultContentLanguage` パラメータが、言語設定ファイル名の言語コードと一致していることを確認してください。
{{< /alert >}}

#### グローバル

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `languageCode` | `"en"` | このファイルの Hugo 言語コードです。トップレベル言語（例： `en`）またはサブバリアント（例： `en-au`）にすることができ、ファイル名の言語コードと一致する必要があります。Hugo はこの値が常に小文字であることを想定しています。適切な HTML 準拠のために、大文字と小文字を区別する `isoCode` パラメータを設定します。 |
| `languageName` | `"English"` | 言語の名前です。 |
| `weight` | `1` | 重みは、多言語サイトを構築するときの言語の順序を決定します。 |
| `title` | `"Blowfish"` | Web サイトのタイトルです。これは、サイトのヘッダーとフッターに表示されます。 |
<!-- prettier-ignore-end -->

#### パラメーター

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `params.displayName` | `"EN"` | Web サイトに言語が表示されるときに使用される名前です。 |
| `params.isoCode` | `"en"` | HTML メタデータ用の ISO 言語コードです。トップレベル言語（例： `en`）またはサブバリアント（例： `en-AU`）にすることができます。 |
| `params.rtl` | `false` | これが RTL 言語かどうかです。`true` に設定すると、コンテンツが右から左に並べ替えられます。 Blowfish は RTL 言語と LTR 言語の同時使用を完全にサポートしており、両方に動的に調整されます。 |
| `params.dateFormat` | `"2 January 2006"` | この言語での日付のフォーマット方法です。使用できる形式については、[Hugo ドキュメント](https://gohugo.io/functions/format/#gos-layout-string) を参照してください。 |
| `params.logo` | _設定なし_ | `assets/` フォルダ内のサイトロゴファイルへの相対パスです。ロゴファイルは2倍の解像度で提供する必要があり、あらゆる画像サイズをサポートしています。 |
| `params.secondaryLogo` | _設定なし_ | `assets/` フォルダ内のセカンダリサイトロゴファイルへの相対パスです。 ロゴファイルは2倍の解像度で提供する必要があり、あらゆる画像サイズをサポートしています。 これは、`logo` とは反転/対照的なカラースキームである必要があります。設定されている場合、このロゴは、ユーザーが `defaultAppearance` モードから切り替えたときに表示されます。 |
| `params.description` | _設定なし_ | Web サイトの説明です。これはサイトのメタデータで使用されます。 |
| `params.copyright` | _設定なし_ | サイトフッターの著作権メッセージの Markdown 文字列には、プレースホルダ { year } を含めて現在の年を動的に挿入できます。指定されていない場合、Blowfish はサイト `title` を使用して著作権文字列を自動的に生成します。 |

<!-- prettier-ignore-end -->

#### 著者(Author)

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
|---|---|---|
| `author.name` | _設定なし_ | 著者の名前です。これは、記事のフッターと、プロフィールレイアウトが使用されている場合はホームページに表示されます。 |
| `author.image` | _設定なし_ | 著者の画像ファイルへのパスです。画像は縦横比 1:1 である必要があります。画像は、サイトの `assets/` フォルダに配置することも、外部 URL にすることもできます。 |
| `author.headline` | _設定なし_ | 著者の見出しを含む Markdown 文字列です。プロフィールホームページの著者の名前に下に表示されます。 |
| `author.bio` | _設定なし_ | 著者の略歴を含む Markdown 文字列です。記事のフッターに表示されます。 |
| `author.links` | _設定なし_ | 著者の詳細と一緒に表示するリンクです。設定ファイルには、コメントを外すだけで有効になるリンクの例が含まれています。リンクが表示される順序は、配列に表示される順序によって決まります。`assets/icons/` に対応する SVG アイコンアセットを提供することで、カスタムリンクを追加できます。 |
<!-- prettier-ignore-end -->

### メニュー(Menus)

Blowfish は、言語固有のメニュー設定もサポートしています。メニュー設定ファイルは、言語ファイルと同じ命名形式に従います。ファイル名に言語コードを指定するだけで、Hugo はファイルがどの言語に関連しているかを認識します。

メニュー設定ファイルの名前は、 `menus.[language-code].toml` 形式です。メニュー設定で使用される言語コードが言語設定と一致していることを常に確認してください。

[はじめに]({{< ref "getting-started#menus" >}}) セクションでは、このファイルの構造について詳しく説明しています。詳細な設定例については、[Hugo メニュー ドキュメント](https://gohugo.io/content-management/menus/) も参照できます。

## テーマパラメーター(Theme parameters)

Blowfish は、テーマの機能を制御する多数の設定パラメータを提供します。下の表は、`config/_default/params.toml` ファイルで使用可能なすべてのパラメータの概要を示しています。

ここにある記事のデフォルトの多くは、フロントマターで指定することで、記事ごとにオーバーライドできます。詳細については、[フロントマター]({{< ref "front-matter" >}}) セクションを参照してください。

<!-- prettier-ignore-start -->

### グローバル

| 名前 | デフォルト | 説明 |
|---|---|---|
| `colorScheme` | `"blowfish"` | 使用するテーマのカラーテーマです。有効な値は、`blowfish`（デフォルト）、`avocado`、`fire`、`ocean`、`forest`、`princess`、`neon`、`bloody`、`terminal`、`marvel`、`noir`、`autumn`、`congo`、`slate` です。詳細については、[カラーテーマ]({{< ref "getting-started#colour-schemes" >}}) セクションを参照してください。 |
| `defaultAppearance` | `"light"` | デフォルトのテーマの外観です。`light` または `dark` のいずれかです。 |
| `autoSwitchAppearance` | `true` | 訪問者のオペレーティングシステムの設定に基づいてテーマの外観を自動的に切り替えるかどうかです。`false` に設定すると、サイトは常に `defaultAppearance` を使用します。 |
| `enableSearch` | `false` | サイト内検索が有効かどうかです。`true` に設定すると、検索機能が有効になります。検索機能は、[サイト設定](#site-configuration) の `outputs.home` 設定が正しく設定されているかどうかに依存することに注意してください。 |
| `enableCodeCopy` | `false` | `<code>` ブロックのクリップボードへのコピーボタンを有効にするかどうかです。コードコピーが正しく機能するには、`highlight.noClasses` パラメータを `false` に設定する必要があります。以下の [その他の設定ファイル](#other-configuration-files) について読んでください。 |
| `mainSections` | _設定なし_ | 最近の記事リストに表示するセクションです。指定しない場合は、記事数が最も多いセクションが使用されます。 |
| `showViews` | _設定なし_ | 記事とリストの表示回数を表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `showLikes` | _設定なし_ | 記事とリストのいいねを表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `robots` | _設定なし_ | ロボットがサイトをどのように処理するかを示す文字列です。設定されている場合、ページヘッダーに出力されます。有効な値については、[Google のドキュメント](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) を参照してください。 |
| `disableImageZoom` | `false` | サイト内のすべての画像の画像ズーム機能を無効にします。 |
| `disableImageOptimization` | `false` | サイト内のすべての画像の画像サイズ変更と最適化機能を無効にします。 |
| `disableTextInHeader` | `false` | ヘッダーのテキストを無効にします。ロゴベースのヘッダーに役立ちます。 |
| `defaultBackgroundImage` | _設定なし_ | `background` ホームページレイアウトと `background` ヒーロースタイルの両方のデフォルトの背景画像です。 |
| `defaultFeaturedImage` | _設定なし_ | 記事全体のすべての `featured` 画像のデフォルトの背景画像です。ローカルの `featured` 画像によってオーバーライドされます。 |
| `highlightCurrentMenuArea` | _設定なし_ | メインメニューのメニュー項目が選択されているときにマークを付けます。 |
| `smartTOC` | _設定なし_ | スマート目次をアクティブにします。表示されている項目が強調表示されます。 |
| `smartTOCHideUnfocusedChildren` | _設定なし_ | スマート目次がオンになっている場合、フォーカスされていないときに、テーブルのより深いレベルが非表示になります。 |

### ヘッダー(Header)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `header.layout` | `"basic"` | サイト全体のヘッダーを定義します。サポートされている値は、`basic`、`fixed`、`fixed-fill`、`fixed-fill-blur` です。 |

### フッター(Footer)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `footer.showMenu` | `true` | フッターメニューを表示/非表示にします。これは、`config/_default/menus.en.toml` ファイルの `[[footer]]` セクションで設定できます。 |
| `footer.showCopyright` | `true` | サイトのフッターに著作権文字列を表示するかどうかです。文字列自体は、[言語設定](#language-and-i18n) の `copyright` パラメータを使用してカスタマイズできることに注意してください。 |
| `footer.showThemeAttribution` | `true` | サイトのフッターに「powered by」テーマの帰属を表示するかどうかです。このメッセージを無効にする場合は、サイトの他の場所（たとえば、about ページ）でテーマの帰属を検討してください。 |
| `footer.showAppearanceSwitcher` | `false` | サイトのフッターに外観スイッチャーを表示するかどうかです。 ブラウザのローカルストレージを使用して、訪問者の設定が保持されます。 |
| `footer.showScrollToTop` | `true` | `true` に設定すると、トップへスクロールの矢印が表示されます。 |

### ホームページ(Homepage)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `homepage.layout` | `"profile"` | ホームページのレイアウトです。有効な値は、`page`、`profile`、`hero`、`card`、`background`、`custom` です。`custom` に設定した場合、`/layouts/partials/home/custom.html` ファイルを作成して独自のレイアウトを提供する必要があります。詳細については、[ホームページレイアウト]({{< ref "homepage-layout" >}}) セクションを参照してください。 |
| `homepage.homepageImage` | _設定なし_ | `hero` レイアウトと `card` レイアウトで使用される画像です。アセットディレクトリからのローカル画像または外部画像 URL として設定できます。詳細については、[ホームページレイアウト]({{< ref "homepage-layout" >}}) セクションを参照してください。 |
| `homepage.showRecent` | `false` | ホームページに最近の記事リストを表示するかどうかです。 |
| `homepage.showRecentItems` | 5 | showRecent が true の場合に表示する記事の数です。変数が0に設定されている場合、または定義されていない場合は、システムはデフォルトで5つの記事に設定されます。 |
| `homepage.showMoreLink` | `false` | ユーザーを事前に定義された場所に移動する「もっと見る」リンクを投稿の最後に表示するかどうかです。 |
| `homepage.showMoreLinkDest` | `/posts` | 「もっと見る」ボタンの移動先です。 |
| `homepage.cardView` | `false` | 最近の記事をカードのギャラリーとして表示します。 |
| `homepage.cardViewScreenWidth` | `false` | 最近の記事カードギャラリーの幅を拡張して、利用可能な幅全体を使用します。 |
| `homepage.layoutBackgroundBlur` | `false` | ホームページレイアウトの背景画像をスクロールに合わせてぼかします。 |

### 記事(Article)

| 名前 | デフォルト | 説明 |
|---|---|---|
| `article.showDate` | `true` | 記事の日付を表示するかどうかです。 |
| `article.showViews` | `false` | 記事の表示回数を表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `article.showLikes` | `false` | 記事のいいねを表示するかどうかです。これには Firebase 統合を有効にする必要があります。以下をご覧ください。 |
| `article.showDateOnlyInArticle` | `false` | 記事リスト/カードに表示されていない場合でも、記事内に日付を表示します。 |
| `article.showDateUpdated` | `false` | 記事が更新された日付を表示するかどうかです。 |
| `article.showAuthor` | `true` | 記事のフッターに著者ボックスを表示するかどうかです。 |
| `article.showAuthorBottom` | `false` | 著者ボックスは、各ページの上部ではなく下部に表示されます。 |
| `article.showHero` | `false` | サムネイル画像を各記事ページ内でヒーロー画像として表示するかどうかです。 |
| `article.heroStyle` | _設定なし_ | ヒーロー画像を表示するスタイルです。有効なオプションは、`basic`、`big`、`background`、`thumbAndBackground` です。 |
| `article.layoutBackgroundBlur` | `true` | 背景記事 heroStyle の背景画像をスクロールに合わせてぼかします。 |
| `article.layoutBackgroundHeaderSpace` | `true` | ヘッダーと本文の間にスペースを追加します。 |
| `article.showBreadcrumbs` | `false` | 記事のヘッダーにパンくずリストを表示するかどうかです。 |
| `article.showDraftLabel` | `true` | サイトが `--buildDrafts` でビルドされたときに、記事の横にドラフトインジケータを表示するかどうかです。 |
| `article.showEdit` | `false` | 記事コンテンツを編集するためのリンクを表示するかどうかです。 |
| `article.editURL` | _設定なし_ | `article.showEdit` がアクティブな場合、編集リンクの URL です。 |
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
| `article.showAuthorsBadges` | `false` | `authors` タクソノミーを記事またはリストのヘッダーに表示するかどうかです。 これには、「複数の著者」と `authors` タクソノミーの設定が必要です。この機能の設定方法の詳細については、[このページ]({{< ref "multi-author" >}}) を確認してください。 |
| `article.showWordCount` | `false` | 記事の単語数を表示するかどうかです。 |
| `article.showComments` | `false` | 記事のフッターの後に [コメントパーシャル]({{< ref "partials#comments" >}}) を含めるかどうかです。 |
| `article.sharingLinks` | _設定なし_ | 各記事の最後に表示する共有リンクです。指定されていない場合、または `false` に設定されている場合、リンクは表示されません。使用可能な値は、"linkedin"、"bluesky"、"mastodon"、"twitter"、"reddit"、"pinterest"、"facebook"、"email"、"whatsapp"、"telegram" です。 |
| `article.showZenMode` | `false` | 記事のZenモードリーダー機能を有効にするフラグです。 |

### List

| Name                               | Default   | Description                                                                                                                                                                                                                                                    |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list.showHero`                    | `false`   | Whether the thumbnail image will be shown as a hero image within each list page.                                                                                                                                                                               |
| `list.heroStyle`                   | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.                                                                                                                                                        |
| `list.showBreadcrumbs`             | `false`   | Whether or not breadcrumbs are displayed in the header on list pages.                                                                                                                                                                                          |
| `list.layoutBackgroundBlur`        | `true`    | Makes the background image in the background list heroStyle blur with the scroll                                                                                                                                                                               |
| `list.layoutBackgroundHeaderSpace` | `true`    | Add space between the header and the body.                                                                                                                                                                                                                     |
| `list.showTableOfContents`         | `false`   | Whether or not the table of contents is displayed on list pages.                                                                                                                                                                                               |
| `list.showSummary`                 | `false`   | Whether or not article summaries are displayed on list pages. If a summary is not provided in the [front matter]({{< ref "front-matter" >}}), one will be auto generated using the `summaryLength` parameter in the [site configuration](#site-configuration). |
| `list.showViews`                   | `false`   | Whether or not list views are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                        |
| `list.showLikes`                   | `false`   | Whether or not list likes are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                        |
| `list.showCards`                   | `false`   | Whether or not each article is displayed as a card or as simple inline text.                                                                                                                                                                                   |
| `list.orderByWeight`               | `false`   | Whether or not articles are sorted by [weights](https://gohugo.io/methods/page/weight/).                                                                                                                                                                       |
| `list.groupByYear`                 | `true`    | Whether or not articles are grouped by year on list pages.                                                                                                                                                                                                     |
| `list.cardView`                    | `false`   | Display lists as a gallery of cards.                                                                                                                                                                                                                           |
| `list.cardViewScreenWidth`         | `false`   | Enhance the width of card galleries in lists to take the full width available.                                                                                                                                                                                 |
| `list.constrainItemsWidth`         | `false`   | Limit item width to `prose` to increase readability. Useful when no feature images are available.                                                                                                                                                              |
| `list.showTableOfContents`         | `false`   | Whether or not the table of contents is displayed on articles.                                                                                                                                                                                                 |

### Sitemap

| Name                    | Default                | Description                                                                                                                                                                                 |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sitemap.excludedKinds` | `["taxonomy", "term"]` | Kinds of content that should be excluded from the generated `/sitemap.xml` file. Refer to the [Hugo docs](https://gohugo.io/templates/section-templates/#page-kinds) for acceptable values. |

### Taxonomy

| Name                           | Default   | Description                                                                                                |
| ------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------- |
| `taxonomy.showTermCount`       | `true`    | Whether or not the number of articles within a taxonomy term is displayed on the taxonomy listing.         |
| `taxonomy.showHero`            | `false`   | Whether the thumbnail image will be shown as a hero image within each taxonomy page.                       |
| `taxonomy.heroStyle`           | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.    |
| `taxonomy.showBreadcrumbs`     | `false`   | Whether or not breadcrumbs are displayed in the taxonomy header.                                           |
| `taxonomy.showViews`           | `false`   | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showLikes`           | `false`   | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showTableOfContents` | `false`   | Whether or not the table of contents is displayed on taxonomies.                                           |
| `taxonomy.cardView`            | `false`   | Display lists as a gallery of cards.                                                                       |

### Term

| Name                       | Default   | Description                                                                                                |
| -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `term.showHero`            | `false`   | Whether the thumbnail image will be shown as a hero image within each term page.                           |
| `term.heroStyle`           | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.    |
| `term.showBreadcrumbs`     | `false`   | Whether or not breadcrumbs are displayed in the term header.                                               |
| `term.showViews`           | `false`   | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showLikes`           | `false`   | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showTableOfContents` | `false`   | Whether or not the table of contents is displayed on terms.                                                |
| `term.groupByYear`         | `false`   | Whether or not articles are grouped by year on term pages.                                                 |
| `term.cardView`            | `false`   | Display lists as a gallery of cards.                                                                       |
| `term.cardViewScreenWidth` | `false`   | Enhance the width of card galleries in lists to take the full width available.                             |

### Firebase

| Name                         | Default   | Description                                                                                                                                                                 |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firebase.apiKey`            | _Not set_ | Firebase apiKey, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.            |
| `firebase.authDomain`        | _Not set_ | Firebase authDomain, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.        |
| `firebase.projectId`         | _Not set_ | Firebase projectId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.         |
| `firebase.storageBucket`     | _Not set_ | Firebase storageBucket, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.     |
| `firebase.messagingSenderId` | _Not set_ | Firebase messagingSenderId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.appId`             | _Not set_ | Firebase appId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.             |
| `firebase.measurementId`     | _Not set_ | Firebase measurementId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.     |

### Fathom Analytics

| Name                     | Default   | Description                                                                                                                                    |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `fathomAnalytics.site`   | _Not set_ | The site code generated by Fathom Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `fathomAnalytics.domain` | _Not set_ | If using a custom domain with Fathom Analytics, provide it here to serve `script.js` from the custom domain.                                   |

### Umami Analytics

| Name                       | Default   | Description                                                                                                                                                                        |
| -------------------------- | --------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `umamiAnalytics.websiteid` | _Not set_ | The site code generated by Umami Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details.                                      |
| `umamiAnalytics.domain`    | _Not set_ | If using a custom domain with Umami Analytics, provide it here to serve `script.js` from the custom domain.                                                                        |
| `umamiAnalytics.dataDomains`    | _Not set_ | If you want the tracker to only run on specific domains, provide it for your tracker script. This is a comma delimited list of domain names. Such as "yoursite.com,yoursite2.com". |
| `umamiAnalytics.scriptName` | script.js | The name of the `script.js` used for anti-ad-blocking is configured by the environment variable `TRACKER_SCRIPT_NAME` |
| `umamiAnalytics.enableTrackEvent`    | true      | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`.                                                            |

### Seline Analytics

| Name                              | Default   | Description                                                                                                                               |
|-----------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `selineAnalytics.token`           | _Not set_ | The token generated by Seline Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `selineAnalytics.enableTrackEvent` | true      | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`.                          |

### BuyMeACoffee

| Name                                | Default   | Description                                                                 |
| ----------------------------------- | --------- | --------------------------------------------------------------------------- |
| `buymeacoffee.identifier`           | _Not set_ | The identifier to the target buymeacoffee account.                          |
| `buymeacoffee.globalWidget`         | _Not set_ | Activate the global buymeacoffee widget.                                    |
| `buymeacoffee.globalWidgetMessage`  | _Not set_ | Message what will be displayed the first time a new user lands on the site. |
| `buymeacoffee.globalWidgetColor`    | _Not set_ | Widget color in hex format.                                                 |
| `buymeacoffee.globalWidgetPosition` | _Not set_ | Position of the widget, i.e. "Left" or "Right"                              |

### Verifications

| Name                     | Default   | Description                                                                             |
| ------------------------ | --------- | --------------------------------------------------------------------------------------- |
| `verification.google`    | _Not set_ | The site verification string provided by Google to be included in the site metadata.    |
| `verification.bing`      | _Not set_ | The site verification string provided by Bing to be included in the site metadata.      |
| `verification.pinterest` | _Not set_ | The site verification string provided by Pinterest to be included in the site metadata. |
| `verification.yandex`    | _Not set_ | The site verification string provided by Yandex to be included in the site metadata.    |
<!-- prettier-ignore-end -->

## RSSNext

| Name                     | Default   | Description                                                                                                                          |
| ------------------------ | --------- |--------------------------------------------------------------------------------------------------------------------------------------|
| `rssnext.feedId`    | _Not set_ | The rss `feedId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own. |
| `rssnext.userId`      | _Not set_ | The rss `userId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own.     |

## Other configuration files

The theme also includes a `markup.toml` configuration file. This file contains some important parameters that ensure that Hugo is correctly configured to generate sites built with Blowfish.

Always ensure this file is present in the config directory and that the required values are set. Failure to do so may cause certain features to function incorrectly and could result in unintended behaviour.
