---
title: "始める"
weight: 3
draft: false
description: "Blowfish で利用可能なすべてのフロントマター変数。"
slug: "getting-started"
tags: ["installation", "docs"]
series: ["Documentation"]
series_order: 3
---

{{< alert >}}
このセクションでは、[Blowfish テーマをすでにインストールしている]({{< ref "docs/installation" >}})ことを前提としています。
{{< /alert >}}

</br>
{{< alert "fire" >}}
Blowfish の使用開始を支援する CLI ツールをリリースしました。インストールと設定に役立ちます。次のコマンドで CLI ツールをグローバルにインストールします。
```bash
npx blowfish-tools
```
{{< /alert >}}

Blowfish に同梱されている設定ファイルには、テーマが認識できるすべての設定が含まれています。デフォルトでは、これらの多くはコメントアウトされていますが、コメントを解除するだけで特定の機能を有効化または変更できます。

## 基本設定

コンテンツを作成する前に、新しいインストール用に設定する必要があるものがいくつかあります。まず、`hugo.toml` ファイルで、`baseURL` と `languageCode` パラメータを設定します。`languageCode` は、コンテンツの作成に使用する主要言語に設定する必要があります。

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "ja"
```

次のステップは、言語設定です。Blowfish は多言語設定をサポートしていますが、ここではまず主要言語を設定します。

設定フォルダで `languages.en.toml` ファイルを見つけます。主要言語が英語の場合は、このファイルをそのまま使用できます。それ以外の場合は、ファイル名に正しい言語コードが含まれるように名前を変更します。例えば日本語の場合は、`languages.ja.toml`にファイル名を変更します。

{{< alert >}}
言語設定ファイル名の言語コードは、`hugo.toml` の `languageCode` 設定と一致する必要があることに注意してください。
{{< /alert >}}

```toml
# config/_default/languages.ja.toml

title = "私の素晴らしいウェブサイト"

[params.author]
name = "私の名前"
image = "img/author.jpg"
headline = "一般的に素晴らしい人間"
bio = "私について少し"
links = [
  { twitter = "https://twitter.com/username" }
]
```

`[params.author]` 設定は、ウェブサイトに著者情報をどのように表示するかを決定します。画像はサイトの `assets/` フォルダに配置する必要があります。リンクはリストされている順序で表示されます。

これらの設定オプションの詳細については、[設定]({{< ref "configuration" >}})セクションで説明しています。

## カラースキーム

Blowfish には、すぐに使用できる多くのカラースキームが付属しています。スキームを変更するには、`colorScheme` テーマパラメータを設定するだけです。有効なオプションは、`blowfish` (デフォルト)、`avocado`、`fire`、`ocean`、`forest`、`princess`、`neon`、`bloody`、`terminal`、`marvel`、`noir`、`autumn`、`congo`、`slate` です。

```toml
# config/_default/params.toml

colorScheme = "blowfish"
```

Blowfish は、テーマ全体で使用される3色のパレットを定義しています。各メインカラーには、[Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) に含まれる色に基づいた10の色合いが含まれています。3つのメインカラーは、ヘッダー、フッター、およびアクセントカラーに使用されます。各スキームの色は次のとおりです。

#### Blowfish (デフォルト)
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Avocado
{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Fire
{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Forest
{{< swatches "#658c86" "#3bf5df" "#06d45c" >}}

#### Princess
{{< swatches "#8c658c" "#f53bf2" "#7706d4" >}}

#### Neon
{{< swatches "#8338ec" "#ff006e" "#3a86ff" >}}

#### Bloody
{{< swatches "#d90429" "#8d99ae" "#457b9d" >}}

#### Terminal
{{< swatches "#004b23" "#38b000" "#1a759f" >}}

#### Marvel
{{< swatches "#2541b2" "#d81159" "#ffbc42" >}}

#### Noir
{{< swatches "#5c6b73" "#9db4c0" "#00a5cf" >}}

#### Autumn
{{< swatches "#0a9396" "#ee9b00" "#bb3e03" >}}

#### Congo
{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Slate
{{< swatches "#6B7280" "#64748b" "#6B7280" >}}

これらはデフォルトのスキームですが、独自のスキームを作成することもできます。詳細については、[高度なカスタマイズ]({{< ref "advanced-customisation#colour-schemes" >}})セクションを参照してください。

## コンテンツの整理

デフォルトでは、Blowfish は特定のコンテンツタイプを使用することを強制しません。そのため、コンテンツを自由に定義できます。静的サイトの場合は _pages_、ブログの場合は _posts_、ポートフォリオの場合は _projects_ を使用することをお勧めします。

基本的な Blowfish プロジェクトの概要を簡単に説明します。すべてのコンテンツは `content` フォルダ内に配置されます。

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

このテーマは Hugo のページバンドルを最大限に活用するように設計されているため、Hugo がどのようにコンテンツを整理することを想定しているかをしっかりと把握することが重要です。詳細については、[Hugo 公式ドキュメント](https://gohugo.io/content-management/organization/)を参照してください。

Blowfish はタクソノミーに関しても柔軟です。_tags_ と _categories_ を使用してコンテンツをグループ化することを好む人もいれば、_topics_ を使用することを好む人もいます。

Hugo はデフォルトで posts、tags、categories を使用するように設定されており、これを希望する場合は問題なく動作します。ただし、これをカスタマイズしたい場合は、`taxonomies.toml` 設定ファイルを作成することでカスタマイズできます。

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

これにより、デフォルトの _tags_ と _categories_ が _topic_ に置き換えられます。タクソノミーの命名の詳細については、[Hugo タクソノミードキュメント](https://gohugo.io/content-management/taxonomies/)を参照してください。

新しいタクソノミーを作成する場合は、ウェブサイトのナビゲーションリンクを調整して、正しいセクションを指すようにする必要があります。これについては以下で説明します。

## メニュー

Blowfish には、サイトのコンテンツとレイアウトに合わせてカスタマイズできる2つのメニューがあります。`main` メニューはサイトヘッダーに表示され、`footer` メニューはページの下部、著作権表示のすぐ上に表示されます。

どちらのメニューも `menus.ja.toml` ファイルで設定できます。言語設定ファイルと同様に、別の言語を使用したい場合は、このファイルの名前を変更して、`en` を使用したい言語コードに置き換えます。

```toml
# config/_default/menus.ja.toml

[[main]]
  name = "ブログ"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "トピック"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "プライバシー"
  url = "https://external-link"
```

`name` パラメータは、メニューリンクで使用されるテキストを指定します。オプションで、リンクの HTML タイトル属性を設定する `title` を指定することもできます。

`pageRef` パラメータを使用すると、Hugo コンテンツページとタクソノミーを簡単に参照できます。これは、Hugo コンテンツアイテムを参照するだけで正しいリンクが自動的に作成されるため、メニューを設定する最も簡単な方法です。外部 URL にリンクするには、`url` パラメータを使用できます。

`pre` パラメータを使用すると、[Blowfish のアイコンセット]({{< ref "samples/icons" >}})からメニューエントリにアイコンを配置できます。このパラメータは、`name` パラメータと組み合わせて使用することも、単独で使用することもできます。アイコンのみを使用して複数のメニューエントリを使用する場合は、`identifier` パラメータを設定してください。そうしないと、Hugo はデフォルトで命名タグを ID として使用し、おそらくすべてのメニューエントリを表示しません。

メニューリンクは、`weight` が低い順に並べ替えられ、次に `name` でアルファベット順に並べ替えられます。

どちらのメニューも完全にオプションであり、不要な場合はコメントアウトできます。ファイルに記載されているテンプレートをガイドとして使用してください。

### ネストされたメニュー

テーマはネストされたメニューもサポートしています。これらを使用するには、`menu.toml` で親エントリを定義し、`parent` パラメータを使用し親を参照してサブメニューを定義するだけです。すべてのプロパティは、サブメニューに使用できます。`pageRef` と `url` は、親エントリでも使用できます。ネストされたメニューは、メインメニューでのみ使用でき、フッターでは使用できません。

```toml
# config/_default/menus.ja.toml

[[main]]
  name = "親"
  weight = 20

[[main]]
  name = "サブメニュー 1"
  parent = "親"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "サブメニュー 2"
  parent = "親"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "サブメニュー 3"
  parent = "親"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### サブナビゲーションメニュー

さらに、サブナビゲーションメニューを設定することもできます。`menus.toml` で新しいメニューエントリを `subnavigation` として定義するだけです。
これにより、メインヘッダーメニューの下に、サブカテゴリを含む2行目が表示されます。

```toml
# config/_default/menus.ja.toml

[[subnavigation]]
  name = "興味深いトピック"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "私の素晴らしいカテゴリ"
  pageRef = "categories/awesome"
  weight = 20
```

デフォルトの `name` は、`pageRef` のタイトルになります。

## サムネイルと背景

Blowfish は、記事に視覚的なサポートを簡単に追加できるように構築されました。Hugo の記事構造に慣れている場合は、記事フォルダ内に `feature*` で始まる画像ファイル (ほとんどすべての形式がサポートされていますが、`.png` または `.jpg` を推奨) を配置するだけです。それだけで、Blowfish はその画像をウェブサイト内のサムネイルとして使用したり、ソーシャルプラットフォーム全体の <a target="_blank" href="https://oembed.com/">oEmbed</a> カードに使用したりできるようになります。

詳細な情報と、設定方法を確認するための[サンプル]({{< ref "thumbnail_sample" >}})を含むガイドも[こちら]({{< ref "thumbnails" >}})にあります。

さらに、Blowfish は記事やリストの背景ヒーロー画像もサポートしています。フィーチャー画像とは異なる画像を使用するには、名前が `background*` で始まる画像ファイルを（記事フォルダに）追加します。

## 詳細設定

上記の手順は、最低限の設定です。`hugo server` を実行すると、空の Blowfish ウェブサイトが表示されます。詳細な設定については、[設定]({{< ref "configuration" >}})セクションで説明しています。
