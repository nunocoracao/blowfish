---
title: "ホームページレイアウト"
weight: 5
draft: false
description: "Blowfish テーマのホームページレイアウト設定"
slug: "homepage-layout"
tags: ["homepage", "layouts", "docs"]
series: ["Documentation"]
series_order: 5
---

Blowfish は完全に柔軟なホームページレイアウトを提供します。2つのメインテンプレートから選択でき、追加設定でデザインを調整できます。または、独自のテンプレートを提供して、ホームページのコンテンツを完全に制御することもできます。

ホームページのレイアウトは、`params.toml` 設定ファイルの `homepage.layout` 設定によって制御されます。さらに、すべてのレイアウトには、[最新記事](#最新記事)のリストを含めるオプションがあります。

## プロフィールレイアウト (profile)

デフォルトのレイアウトはプロフィールレイアウトで、個人ウェブサイトやブログに最適です。画像とソーシャルプロファイルへのリンクを提供することで、著者の詳細を前面に押し出します。

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

著者情報は、言語設定ファイルで提供されます。パラメータの詳細については、[始める]({{< ref "getting-started" >}})と[言語設定]({{< ref "configuration#言語と-i18n" >}})セクションを参照してください。

さらに、ホームページのコンテンツで提供される Markdown コンテンツはすべて、著者プロファイルの下に配置されます。これにより、ショートコードを使用して経歴やその他のカスタムコンテンツを表示するための柔軟性が向上します。

プロフィールレイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "profile"` と設定します。

## ページレイアウト (page)

ページレイアウトは、Markdown コンテンツを表示する通常のコンテンツページです。静的ウェブサイトに最適で、高い柔軟性を提供します。

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

ページレイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "page"` を設定します。

## ヒーローレイアウト (hero)

ヒーローレイアウトは、プロフィールレイアウトとカードレイアウトのアイデアを組み合わせたものです。これは、サイトの著者に関する情報を表示するだけでなく、その下に Markdown をロードします。

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

ヒーローレイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "hero"` と `homepage.homepageImage` を設定します。

## 背景レイアウト (background)

背景レイアウトは、ヒーローレイアウトをより滑らかにしたバージョンです。ヒーローレイアウトと同様に、サイトの著者に関する情報を表示し、その下に Markdown をロードします。

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

背景レイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "background"` と `homepage.homepageImage` を設定します。

## カードレイアウト (card)

カードレイアウトは、ページレイアウトの拡張版です。Markdown コンテンツも表示することで同じレベルの柔軟性を提供し、ビジュアルコンテンツを表示するためのカード画像も追加します。

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

カードレイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "card"` と `homepage.homepageImage` を設定します。

## カスタムレイアウト

組み込みのホームページレイアウトがニーズに合わない場合は、独自のカスタムレイアウトを提供するオプションがあります。これにより、ページコンテンツを完全に制御でき、基本的に作業するための白紙の状態が得られます。

カスタムレイアウトを有効にするには、`params.toml` 設定ファイルで `homepage.layout = "custom"` を設定します。

設定値を設定したら、新しい `custom.html` ファイルを作成し、`layouts/partials/home/custom.html` に配置します。これで、`custom.html` ファイルの内容がサイトのホームページのコンテンツ領域に配置されます。レイアウトを定義するために、HTML、Tailwind、または Hugo テンプレート関数を自由に使用できます。

カスタムレイアウトに[最新記事](#最新記事)を含めるには、`recent-articles/main.html` パーシャルを使用します。

例として、このサイトの[ホームページ]({{< ref "/" >}})では、カスタムレイアウトを使用して、プロフィールレイアウトとページレイアウトを切り替えています。動作を確認するには、[GitHub リポジトリ](https://github.com/nunocoracao/blowfish/blob/main/exampleSite/layouts/partials/home/custom.html)にアクセスしてください。

## 最新記事

すべてのホームページレイアウトには、メインページコンテンツの下に最新記事を表示するオプションがあります。これを有効にするには、`params.toml` 設定ファイルで `homepage.showRecent` 設定を `true` に設定するだけです。

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

このセクションにリストされている記事は、`mainSections` 設定から派生したもので、ウェブサイトで使用しているコンテンツタイプを指定できます。たとえば、_posts_ と _projects_ のコンテンツセクションがある場合、この設定を `["posts", "projects"]` に設定すると、これら2つのセクションのすべての記事が最新リストに表示されます。テーマはこの設定を配列として想定しているため、すべてのコンテンツに1つのセクションのみを使用する場合は、それに応じて設定する必要があります: `["blog"]`。

## サムネイル

Blowfish は、記事にビジュアルサポートを簡単に追加できるように構築されています。Hugo の記事構造に慣れている場合は、記事フォルダ内に `feature*` で始まる画像ファイル (ほとんどすべての形式がサポートされていますが、`.png` または `.jpg` を推奨) を配置するだけです。それだけで、Blowfish はその画像をサイト内のサムネイルとして使用したり、ソーシャルプラットフォーム全体の <a target="_blank" href="https://oembed.com/">oEmbed</a> カードに使用したりできるようになります。

詳細情報と例を確認したい場合は、[こちら]({{< ref "thumbnails" >}})にガイドがあります。

## カードギャラリー

Blowfish は、記事の標準リストをカードギャラリーとして表示することもサポートしています。これは、ホームページの最新セクションとサイト全体の記事リストの両方で設定できます。ホームページの場合は `homepage.cardView` と `homepage.cardViewScreenWidth` を使用し、リストの場合は `list.cardView` と `list.cardViewScreenWidth` を使用します。詳細については、[設定ドキュメント]({{< ref "configuration" >}})を確認し、ライブデモについてはホームページを確認してください。
