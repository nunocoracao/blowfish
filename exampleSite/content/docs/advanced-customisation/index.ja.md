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

ここで Hugo のデフォルトの動作は、比率を維持しながら画像のサイズを 600px に変更することです。

It is worth noting here that default image configurations such as [anchor point](https://gohugo.io/content-management/image-processing/#anchor) can also be set in your [site configuration](https://gohugo.io/content-management/image-processing/#processing-options) as well as in the template itself.

See the [Hugo docs on image processing](https://gohugo.io/content-management/image-processing/#image-processing-methods) for more info.

## Colour schemes

Blowfish ships with a number of colour schemes out of the box. To change the basic colour scheme, you can set the `colorScheme` theme parameter. Refer to the [Getting Started]({{< ref "getting-started#colour-schemes" >}}) section to learn more about the built-in schemes.

In addition to the default schemes, you can also create your own and re-style the entire website to your liking. Schemes are created by by placing a `<scheme-name>.css` file in the `assets/css/schemes/` folder. Once the file is created, simply refer to it by name in the theme configuration.

{{< alert "github">}}
**Note:** generating these files manually can be hard, I've built a `nodejs` terminal tool to help with that, [Fugu](https://github.com/nunocoracao/fugu). In a nutshell, you pass the main three `hex` values of your color palette and the program will output a css file that can be imported directly into Blowfish.
{{< /alert >}}


Blowfish defines a three-colour palette that is used throughout the theme. The three colours are defined as `neutral`, `primary` and `secondary` variants, each containing ten shades of colour.

Due to the way Tailwind CSS 3.0 calculates colour values with opacity, the colours specified in the scheme need to [conform to a particular format](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) by providing the red, green and blue colour values.

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

This example defines a CSS variable for the `primary-500` colour with a red value of `139`, green value of `92` and blue value of `246`.

Use one of the existing theme stylesheets as a template. You are free to define your own colours, but for some inspiration, check out the official [Tailwind colour palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

## Overriding the stylesheet

Sometimes you need to add a custom style to style your own HTML elements. Blowfish provides for this scenario by allowing you to override the default styles in your own CSS stylesheet. Simply create a `custom.css` file in your project's `assets/css/` folder.

The `custom.css` file will be minified by Hugo and loaded automatically after all the other theme styles which means anything in your custom file will take precedence over the defaults.

### Using additional fonts

Blowfish allows you to easily change the font for your site. After creating a `custom.css` file in your project's `assets/css/` folder, place you font file inside a `fonts` folder within the `static` root folder.

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

This makes the font available to the website. Now, the font can just import it in your `custom.css` and replaced wherever you see fit. The example below shows what replacing the font for the entire `html` would look like.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Adjusting the font size

Changing the font size of your website is one example of overriding the default stylesheet. Blowfish makes this simple as it uses scaled font sizes throughout the theme which are derived from the base HTML font size. By default, Tailwind sets the default size to `12pt`, but it can be changed to whatever value you prefer.

Create a `custom.css` file using the [instructions above]({{< ref "#overriding-the-stylesheet" >}}) and add the following CSS declaration:

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

Simply by changing this one value, all the font sizes on your website will be adjusted to match this new size. Therefore, to increase the overall font sizes used, make the value greater than `12pt`. Similarly, to decrease the font sizes, make the value less than `12pt`.

## Building the theme CSS from source

If you'd like to make a major change, you can take advantage of Tailwind CSS's JIT compiler and rebuild the entire theme CSS from scratch. This is useful if you want to adjust the Tailwind configuration or add extra Tailwind classes to the main stylesheet.

{{< alert >}}
**Note:** Building the theme manually is intended for advanced users.
{{< /alert >}}

Let's step through how building the Tailwind CSS works.

### Tailwind configuration

In order to generate a CSS file that only contains the Tailwind classes that are actually being used the JIT compiler needs to scan through all the HTML templates and Markdown content files to check which styles are present in the markup. The compiler does this by looking at the `tailwind.config.js` file which is included in the root of the theme directory:

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // and more...
};
```

This default configuration has been included with these content paths so that you can easily generate your own CSS file without needing to modify it, provided you follow a particular project structure. Namely, **you have to include Blowfish in your project as a subdirectory at `themes/blowfish/`**. This means you cannot easily use Hugo Modules to install the theme and you must go down either the git submodule (recommended) or manual install routes. The [Installation docs]({{< ref "installation" >}}) explain how to install the theme using either of these methods.

### Project structure

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
