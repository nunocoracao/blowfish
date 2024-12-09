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

始める前に、 [Hugo プロジェクトの構造](https://gohugo.io/getting-started/directory-structure/)と、コンテンツとテーマのカスタマイズを管理するためのベストプラクティスについて簡単に説明します。

{{< alert >}}
**簡単に言うと:** テーマファイルを直接編集してはいけません。 カスタマイズは、テーマディレクトリ自体ではなく、Hugoプロジェクトのサブディレクトリ内でのみ行います。
{{< /alert >}}


Blowfish は、Hugo の標準的な実装をすべて活用できるように構築されています。コアのテーマファイルを変更することなく、テーマのあらゆる側面をカスタマイズしたりオーバーライドしたりできるように設計されています。これにより、ウェブサイトの見た目を完全にコントロールしながら、シームレスな改善が可能になります。

そのために、テーマファイルを手動で直接編集するのは避けてください。Hugo モジュール、git サブモジュール、または手動でテーマを `themes/` ディレクトリに格納するなど、どのインストール方法を使用する場合でも、これらのファイルは常にそのままにしておく必要があります。

テーマの動作を調整する正しい方法は、Hugo の強力な [ファイル優先順位](https://gohugo.io/templates/lookup-order/) を使用してファイルをオーバーライドすることです。要約すると、優先順位により、プロジェクトディレクトリに含めたファイルは、すべてのテーマファイルよりも自動的に優先されます。

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

詳細については、[画像処理に関する Hugo ドキュメント](https://gohugo.io/content-management/image-processing/#image-processing-methods) を参照してください。

## カラーテーマ

Blowfish には、すぐに使用できる多数のカラーテーマが付属しています。基本的なカラーテーマを変更するには、`colorScheme` テーマパラメータを設定します。 組み込みのスキームの詳細については、[はじめに]({{< ref "getting-started#colour-schemes" >}}) セクションを参照してください。

デフォルトのスキームに加えて、独自のスキームを作成し、Web サイト全体を好みに合わせて再スタイルすることもできます。 スキームは、 `assets/css/schemes/` フォルダに `<scheme-name>.css` ファイルを配置することで作成されます。 ファイルが作成されたら、テーマ設定で名前で参照するだけです。

{{< alert "github">}}
**注:** これらのファイルを手動で生成するのは難しい場合があるため、それを支援する `nodejs` ターミナルツール [Fugu](https://github.com/nunocoracao/fugu) を作成しました。要するに、カラーパレットの主要な3つの `hex` 値を渡すと、プログラムは Blowfish に直接インポートできる css ファイルを出力します。
{{< /alert >}}


Blowfish は、テーマ全体で使用される3色のパレットを定義します。3色は `neutral`、`primary`、`secondary` のバリエーションとして定義され、それぞれに 10 の色合いが含まれています。

Tailwind CSS 3.0 が不透明度で色の値を計算する方式のため、スキームで指定された色は、赤、緑、青の色の値を提供することにより、[特定の形式に準拠](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo)する必要があります。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

この例では、赤の値が `139`、緑の値が `92`、青の値が `246` の `primary-500` カラーの CSS 変数を定義しています。

既存のテーマスタイルシートの1つをテンプレートとして使用します。独自の色を自由に定義できますが、インスピレーションが必要な場合は、公式の [Tailwind カラーパレットリファレンス](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) を確認してください。

## スタイルシートのオーバーライド

独自の HTML 要素をスタイルするために、カスタムスタイルを追加する必要がある場合があります。 Blowfish は、独自の CSS スタイルシートでデフォルトのスタイルをオーバーライドできるようにすることで、このシナリオに対応します。 プロジェクトの `assets/css/` フォルダに `custom.css` ファイルを作成するだけです。

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

これにより、フォントを Web サイトで使用できるようになります。すると、フォントを `custom.css` にインポートし、適切と思われる場所で置き換えることができます。以下の例は、`html` 全体のフォントを置き換える方法を示しています。

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

Web サイトのフォントサイズを変更することは、デフォルトのスタイルシートをオーバーライドする1つの例です。Blowfish は、テーマ全体で基本 HTML フォントサイズから派生したスケーリングされたフォントサイズを使用するため、これを簡単にします。デフォルトでは、Tailwind はデフォルトサイズを `12pt` に設定していますが、任意の値に変更できます。

[上記の手順]({{< ref "#スタイルシートのオーバーライド" >}}) を使用して `custom.css` ファイルを作成し、次の CSS 宣言を追加します。

```css
/* デフォルトのフォントサイズを大きくする */
html {
  font-size: 13pt;
}
```

この1つの値を変更するだけで、Web サイトのすべてのフォントサイズがこの新しいサイズに合わせて調整されます。なので、使用されるフォントサイズ全体を大きくするには、値を `12pt` より大きくすれば良いです。同様に、フォントサイズを小さくするには、値を `12pt` より小さくすれば良いです。

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

In order to take advantage of the default configuration, your project should look something like this...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # this is the file we will generate
├── config  # site config
│   └── _default
├── content  # site content
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # custom layouts for your site
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # git submodule or manual theme install
```

This example structure adds a new `projects` content type with its own custom layout along with a custom shortcode and extended partial. Provided the project follows this structure, all that's required is to recompile the `main.css` file.

### Install dependencies

In order for this to work you'll need to change into the `themes/blowfish/` directory and install the project dependencies. You'll need [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) on your local machine for this step.

```shell
cd themes/blowfish
npm install
```

### Run the Tailwind compiler

With the dependencies installed all that's left is to use [Tailwind CLI](https://v2.tailwindcss.com/docs/installation#using-tailwind-cli) to invoke the JIT compiler. Navigate back to the root of your Hugo project and issue the following command:

```shell
cd ../..
./themes/blowfish/node_modules/tailwindcss/lib/cli.js -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

It's a bit of an ugly command due to the paths involved but essentially you're calling Tailwind CLI and passing it the location of the Tailwind config file (the one we looked at above), where to find the theme's `main.css` file and then where you want the compiled CSS file to be placed (it's going into the `assets/css/compiled/` folder of your Hugo project).

The config file will automatically inspect all the content and layouts in your project as well as all those in the theme and build a new CSS file that contains all the CSS required for your website. Due to the way Hugo handles file hierarchy, this file in your project will now automatically override the one that comes with the theme.

Each time you make a change to your layouts and need new Tailwind CSS styles, you can simply re-run the command and generate the new CSS file. You can also add `-w` to the end of the command to run the JIT compiler in watch mode.

### Make a build script

To fully complete this solution, you can simplify this whole process by adding aliases for these commands, or do what I do and add a `package.json` to the root of your project which contains the necessary scripts...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": "NODE_ENV=development ./themes/blowfish/node_modules/tailwindcss/lib/cli.js -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": "NODE_ENV=production ./themes/blowfish/node_modules/tailwindcss/lib/cli.js -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // and more...
}
```

Now when you want to work on designing your site, you can invoke `npm run dev` and the compiler will run in watch mode. When you're ready to deploy, run `npm run build` and you'll get a clean Tailwind CSS build.

🙋‍♀️ If you need help, feel free to ask a question on [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).
