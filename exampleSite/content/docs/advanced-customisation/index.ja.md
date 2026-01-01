---
title: "高度なカスタマイズ"
weight: 13
draft: false
description: "Blowfishを手動でビルドする方法を学びましょう。"
slug: "advanced-customisation"
tags: ["advanced", "css", "docs"]
series: ["Documentation"]
series_order: 13
---

Blowfish には高度な変更を加えるための多くの方法があります。カスタマイズできる内容や、希望する結果を得るための最良の方法については、以下をご覧ください。

さらにアドバイスが必要な場合は、 [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) に質問を投稿してください。

## Hugo プロジェクトの構造

始める前に、[Hugo プロジェクトの構造](https://gohugo.io/getting-started/directory-structure/)と、コンテンツとテーマのカスタマイズを管理するためのベストプラクティスについて簡単に説明します。

{{< alert >}}
**簡単に言うと:** テーマファイルを直接編集してはいけません。カスタマイズは、テーマディレクトリ自体ではなく、Hugoプロジェクトのサブディレクトリ内でのみ行います。
{{< /alert >}}


Blowfish は、Hugo の標準的な実装をすべて活用できるように構築されています。コアのテーマファイルを変更することなく、テーマのあらゆる側面をカスタマイズしたりオーバーライドしたりできるように設計されています。これにより、ウェブサイトの見た目を完全にコントロールしながら、シームレスな改善が可能になります。

そのために、テーマファイルを手動で直接編集するのは避けてください。Hugo モジュール、git サブモジュール、または手動でテーマを `themes/` ディレクトリに格納するなど、どのインストール方法を使用する場合でも、これらのファイルは常にそのままにしておく必要があります。

テーマの動作を調整する正しい方法は、Hugo の強力な[ファイル優先順位](https://gohugo.io/templates/lookup-order/)を使用してファイルをオーバーライドすることです。要約すると、優先順位により、プロジェクトディレクトリに含めたファイルは、すべてのテーマファイルよりも自動的に優先されます。

たとえば、Blowfish のメイン記事テンプレートをオーバーライドしたい場合は、独自の `layouts/_default/single.html` ファイルを作成してプロジェクトのルートに配置するだけです。このファイルは、テーマ自体を変更することなく、テーマの `single.html` をオーバーライドします。これは、HTML テンプレート、パーシャル、ショートコード、設定ファイル、データ、アセットなど、すべてのテーマファイルで機能します。

この簡単なプラクティスに従う限り、カスタム変更が失われることを心配することなく、いつでもテーマを更新したり（または異なるテーマバージョンをテストしたり）することができます。

## 画像最適化設定の変更

Hugo には、画像のサイズ変更、トリミング、最適化を行うためのさまざまな組み込みメソッドがあります。

例として - `layouts/partials/article-link/card.html` には、次のコードがあります。

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

ここでの Hugo のデフォルトの動作は、比率を維持しながら画像のサイズを 600px に変更することです。

ここで、[アンカーポイント](https://gohugo.io/content-management/image-processing/#anchor)のようなデフォルトの画像設定は、テンプレート自体だけでなく、[サイト設定](https://gohugo.io/content-management/image-processing/#processing-options)でも設定できることに注意してください。

詳細については、[画像処理に関する Hugo ドキュメント](https://gohugo.io/content-management/image-processing/#image-processing-methods)を参照してください。

## カラースキーム

Blowfish には、すぐに使用できる多数のカラースキームが付属しています。基本的なカラースキームを変更するには、`colorScheme` テーマパラメータを設定します。 組み込みのスキームの詳細については、[はじめに]({{< ref "getting-started#カラースキーム" >}})セクションを参照してください。

デフォルトのスキームに加えて、独自のスキームを作成し、ウェブサイト全体を好みに合わせて再スタイルすることもできます。 スキームは、`assets/css/schemes/` フォルダに `<scheme-name>.css` ファイルを配置することで作成されます。ファイルが作成されたら、テーマ設定で名前で参照するだけです。

{{< alert "github">}}
**注:** これらのファイルを手動で生成するのは難しい場合があるため、それを支援する `nodejs` ターミナルツール [Fugu](https://github.com/nunocoracao/fugu) を作成しました。これは、カラーパレットの主要な3つの `hex` 値を渡すと、プログラムは Blowfish に直接インポートできる css ファイルを出力します。
{{< /alert >}}


Blowfish は、テーマ全体で使用される3色のパレットを定義します。3色は `neutral`、`primary`、`secondary` のバリエーションとして定義され、それぞれに10の色合いが含まれています。

Tailwind CSS 3.0 が不透明度で色の値を計算する方式のため、スキームで指定された色は、赤、緑、青の色の値を提供することにより、[特定の形式に準拠](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo)する必要があります。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

この例では、赤の値が `139`、緑の値が `92`、青の値が `246` の `primary-500` カラーの CSS 変数を定義しています。

既存のテーマスタイルシートの1つをテンプレートとして使用します。独自の色を自由に定義できますが、インスピレーションが必要な場合は、公式の [Tailwind カラーパレットリファレンス](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)を確認してください。

## スタイルシートのオーバーライド

独自の HTML 要素をスタイルするために、カスタムスタイルを追加する必要がある場合があります。Blowfish は、独自の CSS スタイルシートでデフォルトのスタイルをオーバーライドできるようにすることで、このシナリオに対応します。プロジェクトの `assets/css/` フォルダに `custom.css` ファイルを作成するだけです。

`custom.css` ファイルは Hugo によって縮小され、他のすべてのテーマスタイルの後に自動的にロードされます。つまり、カスタムファイルの内容はデフォルトよりも優先されます。

### 追加フォントの使用

Blowfishでは、サイトのフォントを簡単に変更することができます。プロジェクトの`assets/css/`フォルダ内に`custom.css`ファイルを作成した後、`static`ルートフォルダ内の`fonts`フォルダ内にフォントファイルを配置するだけです。

```shell
.
├── assets
│   └── css
│       └── custom.css
...
└─── static
    └── fonts
        └─── font.ttf

```

これにより、フォントをウェブサイトで使用できるようになります。すると、フォントを `custom.css` にインポートし、適切と思われる場所で置き換えることができます。以下の例は、`html` 全体のフォントを置き換える方法を示しています。

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### フォントサイズの調整

ウェブサイトのフォントサイズを変更することは、デフォルトのスタイルシートをオーバーライドする1つの例です。Blowfish は、テーマ全体で基本 HTML フォントサイズから派生したスケーリングされたフォントサイズを使用するため、これを簡単にします。デフォルトでは、Tailwind はデフォルトサイズを `12pt` に設定していますが、任意の値に変更できます。

[上記の手順]({{< ref "#スタイルシートのオーバーライド" >}}) を使用して `custom.css` ファイルを作成し、次の CSS 宣言を追加します。

```css
/* デフォルトのフォントサイズを大きくする */
html {
  font-size: 13pt;
}
```

この1つの値を変更するだけで、ウェブサイトのすべてのフォントサイズがこの新しいサイズに合わせて調整されます。なので、使用されるフォントサイズ全体を大きくするには、値を `12pt` より大きくすれば良いです。同様に、フォントサイズを小さくするには、値を `12pt` より小さくすれば良いです。

### シンタックスハイライトテーマの変更

構文ハイライトテーマを変更するには、`assets/css/custom.css` を作成し、次の内容を追加してください：

```css
.chroma,
.chroma *,
.chroma:is(.dark *),
.chroma:is(.dark *) * {
  color: unset;
  font-weight: unset;
  font-style: unset;
}
```

これによりデフォルトの Chroma スタイルがクリアされます。次に `hugo gen chromastyles` コマンドで CSS ファイルに Chroma スタイルを組み込みます:

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# このコマンドは CMD では実行できず PowerShell で実行する必要がある
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

すべての利用可能なスタイルは、[Hugo のドキュメント](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles)で確認できます。

## ソースからテーマ CSS をビルドする

大幅な変更を加えたい場合は、Tailwind CSS の JIT コンパイラを利用して、テーマ CSS 全体を最初から再構築できます。これは、Tailwind 設定を調整したり、メインスタイルシートに追加の Tailwind クラスを追加したりする場合に便利です。

{{< alert >}}
**注:** テーマの手動ビルドは上級者向けです。
{{< /alert >}}

Tailwind CSS のビルド方法を順番に説明します。

### Tailwind 設定

実際に使用されている Tailwind クラスのみを含む CSS ファイルを生成するために、JIT コンパイラはすべての HTML テンプレートと Markdown コンテンツファイルをスキャンして、マークアップにどのスタイルが存在するかを確認する必要があります。コンパイラは、テーマディレクトリのルートに含まれる `tailwind.config.js` ファイルを調べてこれを行います。

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // その他...
};
```

このデフォルト設定には、これらのコンテンツパスが含まれているため、特定のプロジェクト構造に従う限り、変更することなく独自の CSS ファイルを簡単に生成できます。つまり、**Blowfish を `themes/blowfish/` のサブディレクトリとしてプロジェクトに含める必要があります**。これは、Hugo Modules を使用してテーマを簡単にインストールできないことを意味し、git サブモジュール（推奨）または手動インストールルートのいずれかを選択する必要があります。[インストールドキュメント]({{< ref "installation" >}}) では、これらのいずれかの方法を使用してテーマをインストールする方法について説明しています。

### プロジェクト構造

デフォルト設定を利用するために、プロジェクトは次のようになります...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # これが生成するファイル
├── config  # サイト設定
│   └── _default
├── content  # サイトコンテンツ
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # サイトのカスタムレイアウト
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # git サブモジュールまたは手動テーマインストール
```

この例の構造では、独自のカスタムレイアウトを持つ新しい `projects` コンテンツタイプと、カスタムショートコードと拡張パーシャルが追加されています。プロジェクトがこの構造に従っている場合、必要なのは `main.css` ファイルを再コンパイルすることだけです。

### 依存関係のインストール

これが機能するには、`themes/blowfish/` ディレクトリに移動し、プロジェクトの依存関係をインストールする必要があります。この手順では、ローカルマシンに [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) が必要になります。

```shell
cd themes/blowfish
npm install
```

### Tailwind コンパイラを実行する

依存関係がインストールされたら、あとは [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) を使用して JIT コンパイラを呼び出すだけです。Hugo プロジェクトのルートに戻り、次のコマンドを実行します。

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

関係するパスのため少し見苦しいコマンドですが、基本的に Tailwind CLI を呼び出し、Tailwind 設定ファイルの場所（上で見たもの）、テーマの `main.css` ファイルの場所、そしてコンパイル済み CSS ファイルを配置する場所（Hugo プロジェクトの `assets/css/compiled/` フォルダ）を渡しています。

設定ファイルは、プロジェクト内のすべてのコンテンツとレイアウト、およびテーマ内のすべてのコンテンツとレイアウトを自動的にスキャンし、ウェブサイトに必要なすべての CSS を含む新しい CSS ファイルを作ります。Hugo のファイル階層を処理する方法のため、プロジェクト内のこのファイルは、テーマに付属のファイルを自動的にオーバーライドするようになります。

レイアウトに変更を加え、新しい Tailwind CSS スタイルが必要になるたびに、コマンドを再実行して新しい CSS ファイルを生成するだけです。 コマンドの最後に `-w` を追加して、JIT コンパイラをウォッチモードで実行することもできます。

### ビルドスクリプトを作成する

このソリューションを完全に完了するには、これらのコマンドのエイリアスを追加するか、私が行っているように、必要なスクリプトを含む `package.json` をプロジェクトのルートに追加することで、このプロセス全体を簡素化できます...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": cross-env "NODE_ENV=development ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": cross-env "NODE_ENV=production ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // その他...
}
```

これで、サイトの設計に取り組むときは、 `npm run dev` を呼び出すと、コンパイラがウォッチモードで実行されます。デプロイの準備ができたら、`npm run build` を実行すると、クリーンな Tailwind CSS ビルドが得られます。

🙋‍♀️ ご不明な点がありましたら、[GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) で気軽に質問してください。
