---
title: 进阶自定义
weight: 13
draft: false
description: "了解如何手动构建 Blowfish。"
slug: "advanced-customisation"
tags: ["高级", "CSS", "文档"]
series: ["部署教程"]
series_order: 13
---

您可以通过多种方式对 Blowfish 进行高级自定义。请阅读下文，了解更多可自定义的内容以及实现想要效果的最佳方法。

如果您需要更多指导，请在 [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) 上提问。

## Hugo 项目结构

在开始讨论之前，首先简要介绍一下 [Hugo 项目结构](https://gohugo.io/getting-started/directory-structure/) 以及管理内容和主题自定义的最佳方式。

{{< alert >}}
**总结：** 切勿直接编辑主题文件。一定要仅在 Hugo 项目的子目录中进行自定义，而不是在主题目录中进行自定义。
{{< /alert >}}

Blowfish 旨在利用所有标准的 Hugo 参数操作。它旨在允许在不更改任何核心主题文件的情况下自定义和覆盖主题的所有方面。这也给您提供了一种无缝升级的体验，同时让您完全控制网站的外观和感觉。

为了实现这一点，您永远不应该直接手动更改任何主题核心文件。无论你是使用 Hugo 模块安装，还是作为 git 子模块安装，还是手动将主题安装在 `themes/` 目录中，你都应该始终保持这些主题文件不变。

调整主题行为的正确方法是通过使用 Hugo 强大的[文件查找顺序](https://gohugo.io/templates/lookup-order/)覆盖文件。总之，查找顺序确保了包含在你的项目目录中的文件都会优先于主题文件。

例如，如果您想覆盖 Blowfish 中的主要文章模板， 您可以创建自己的 `layouts/_default/single.html` 文件并将其放在项目的根目录中。然后，此文件将覆盖主题文件中的 `single.html` 同时也不会对主题文件本身进行更改。 这适用于任何主题文件：HTML 模板、partials、shortcodes、config 文件、data、assets 等等。

只要您遵循这个方法，您将始终能够无缝更新主题（或测试不同的主题版本），而不必担心会丢失任何自定义更改。

## 修改图片优化设置

Hugo 有各种内置的方法来调整大小，裁剪和优化图像。

举个例子，如果在 `layouts/partials/article-link/card.html` 中，您有以下代码：

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

Hugo 将默认把图像大小调整为 600px 同时保持比例不变。

值得注意的是，默认的图像设置比如[锚点](https://gohugo.io/content-management/image-processing/#anchor) 也可以在你的 [站点配置](https://gohugo.io/content-management/image-processing/#processing-options) 中修改，就和修改模板一样。

想要了解更多信息，请再参考 [有关图像处理的 Hugo 文档](https://gohugo.io/content-management/image-processing/#image-processing-methods)。

## 配色方案

Blowfish 附带了多种开箱即用的配色方案。想要更改基本配色方案，您可以设置 `colorScheme` 主题参数。请参阅[快速上手#配色方案]({{< ref "getting-started#colour-schemes" >}}) 以了解更多内置方案。

除了默认方案之外，您还可以创建自己的方案并根据自己的喜好重新设计整个网站的样式。 通过在 `assets/css/schemes/` 中创建 `<scheme-name>.css` 文件可以创建新的配色方案。创建文件后，只需在主题配置中按名称引用它即可。

{{< alert "github">}}
**注意：** 手动生成这些文件可能会比较困难，我编写了一个 `nodejs` 工具 [Fugu](https://github.com/nunocoracao/fugu) 来帮助解决这个问题。简而言之，您只需要提供调色板的三个主要 `hex` 值，程序将生成一个可以直接导入到 Blowfish 中的 css 文件。
{{< /alert >}}

Blowfish 使用一种定义了整个主题中使用的三色调色板。这三种颜色被定义为 `neutral` 、 `primary` 和 `secondary` 颜色，每种颜色包含十种色调。

由于 Tailwind CSS 3.0 计算不透明度颜色值的方式，方案中指定的颜色需要通过提供红色、绿色和蓝色值来[符合特定格式](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo) 。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

此示例为一个 `primary-500` 的 CSS 颜色变量，红色值为 `139`，绿色值为 `92`，蓝色值为 `246`。

您可以使用现有主题样式表之一作为模板并自由配置自己的颜色。如果想要寻求一些灵感，请查看官方 [Tailwind 调色板参考](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) 。

## 覆盖样式

有时您需要添加自定义样式来设置您自己的 HTML 元素的样式。 Blowfish 允许您覆盖自己的 CSS 样式表中的默认样式来进行自定义。只需在项目的 `assets/css/` 文件夹中创建一个 `custom.css` 文件即可。

`custom.css` 文件将被 Hugo 优化并在所有其他主题样式之后自动加载，这意味着自定义文件中的任何内容都将优先于默认值。

### 使用附加字体

Blowfish 可以让您轻松更改网站的字体。在项目的 `assets/css/` 文件夹中创建 `custom.css` 文件后，将字体文件放入 `static/fonts` 文件夹中。

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

这样，该字体便可供网站使用。现在，可以将字体导入到您的 `custom.css` 中，并在您认为合适的地方进行替换。下面的示例展示了替换整个 `html` 字体的方法。

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### 调整字体大小

我们也提供更改网站的字体大小的示例。 Blowfish 使这一切变得简单，因为它在整个主题中使用源自基本 HTML 语言的缩放字体大小方法。默认情况下，Tailwind 将默认大小设置为 `12pt` ，但您可以将其更改为喜欢的大小。

参考[上面的说明]({{< ref "#overriding-the-stylesheet" >}}) 创建一个 `custom.css` 文件并添加以下 CSS 声明：

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

只需更改此值，您网站上的所有字体大小都将调整为此新大小。因此，要增加使用的整体字体大小，请将该值设置为大于 `12pt` 。同样，要减小字体大小，请将值设置为小于 `12pt` 。

### 更换语法高亮主题

要更换语法高亮主题，请创建 `assets/css/custom.css`，然后添加以下内容：

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

这会清除预设的 Chroma 样式，下一步我们使用 `hugo gen chromastyles` 指令将 Chroma 样式加入到您的 css 档案中：

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# 此命令不能在 CMD 中运行，必须在 PowerShell 中运行
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

在 [Hugo 文档](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles)中查看所有可用的样式。

## 从源码构建主题 CSS

如果你需要进行较大的改动，可以从零开始重新构建整个主题的 CSS。这在你希望调整 Tailwind 配置或向主样式表中添加额外的 Tailwind 类时非常有用。

> [!INFO]
> 手动构建主题仅适用于高级用户。

### 工作原理

Tailwind 会以纯文本方式[扫描你的项目文件](https://tailwindcss.com/docs/detecting-classes-in-source-files#which-files-are-scanned)，查找类似类名的标记，并只为它能够识别且实际出现在这些文件中的工具类生成 CSS。

接下来的步骤将重点介绍如何安装 Tailwind 并进行相关配置，以确保主题源码文件能够被正确纳入扫描范围。所有命令均以通过 [Git submodule]({{< ref "installation" >}}) 安装主题的用户为示例；如果你使用的是 Hugo Module，则需要先通过 `hugo mod vendor` 将主题源码 vendor 到 `_vendor` 目录中，并相应调整命令中的路径。

### 安装依赖项

为了使 Tailwind 正常工作，您需要更改终端工作目录为 `themes/blowfish/` 并安装项目依赖项。您需要安装 [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)。

```shell
cd themes/blowfish
npm install
```

### 运行 Tailwind 编译器

安装依赖项后，接下来可以使用 [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) 来调用 JIT 编译器。返回 Hugo 项目的根目录并在终端输入以下命令：

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

这个命令稍微有点复杂，因为涉及到几个路径。但本质上你是在调用 Tailwind CLI 并提供下面三个参数：

- Tailwind 配置文件 `tailwind.config.js`
- 主题的 `main.css` 文件
- 编译产出后的 CSS 文件的位置 `assets/css/compiled/main.css`

Tailwind 将自动检查项目中的所有内容和布局，并构建新的 `main.css`，其中包含网站所需的所有 CSS。由于 Hugo 处理文件层次结构的方式，此文件现在将自动覆盖主题附带的 `main.css`。

每次更改布局并需要新的 Tailwind CSS 样式时，您只需重新运行命令并生成新的 CSS 文件即可。您还可以在命令末尾添加 `-w` 以在监视模式下运行 JIT 编译器。

### 制作构建脚本

要完成此解决方案，您可以通过为这些命令添加别名来简化整个过程，或者参照我的操作，将该 `package.json` 添加到包含必要脚本的项目的根目录：

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
  // and more...
}
```

现在，当您想要设计站点时，可以调用 `npm run dev` ，编译器将以监视模式运行。当您准备好部署时，运行 `npm run build` ，您将生成一个编译好的 Tailwind CSS。

🙋‍♀️ 如果您需要帮助，请随时在 [GitHub Discusions](https://github.com/nunocoracao/blowfish/discussions) 上提问。
