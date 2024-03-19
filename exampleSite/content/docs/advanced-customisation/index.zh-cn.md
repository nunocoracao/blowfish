---
title: "高级定制"
date: 2020-08-08
draft: false
description: "了解如何手动构建 Blowfish。"
slug: "advanced-customisation"
tags: ["高级", "CSS", "文档"]
series: ["文档集"]
series_order: 13
---

你可以通过多种方法对 Blowfish 进行高级定制。阅读下文，了解更多可定制的内容以及最佳的实现方式。

如果需要更进一步的建议，请在 [GitHub 讨论](https://github.com/nunocoracao/blowfish/discussions) 上发布你的问题。

## Hugo 项目结构

在深入之前，首先快速了解一下 [Hugo 项目结构](https://gohugo.io/getting-started/directory-structure/)以及管理内容和主题定制的最佳实践。

{{< alert >}}
**总结：** 不要直接编辑主题文件。只在你的 Hugo 项目子目录中进行定制，而不是在主题目录。
{{< /alert >}}

Blowfish 充分利用了 Hugo 中所有标准特性。它允许针对主题所有内容进行定制和覆盖，同时无需担心更改任何核心的主题文件。这将允许无缝的升级体验，同时让你完全控制网站的外观。

为了实现这一点，你不应该直接调整任何主题本身的文件。无论你是通过 Hugo 模块、Git 子模块，或者是本地复制到`themes/`的安装方式，都应该保持主题文件本身的完整性。

调整主题行为的正确方法是通过使用 Hugo 强大的[文件查找顺序](https://gohugo.io/templates/lookup-order/)覆盖文件。总之，查找顺序确保了包含在你的项目目录中的文件都会优先于主题文件。

例如，如果你想覆盖 Blowfish 中所有文章的模板，只需要简单的创建 `layouts/_default/single.html` 文件并防止在项目的根目录中即可，该文件将覆盖 Blowfish 主题中定义的 `single.html` 且无需更改主题自身的文件。总之，文件查找顺序确保了包含在你项目目录中的任何文件的优先级都高于主题中对应的文件。

只要你遵循这个简单的实践，你将始终能够更新主题（或测试不同的主题版本），同时也无需担心会丢失任何自定义修改。

## 更改图像优化设置

Hugo 有很多内置方式来调整、裁剪和优化图像。

例如，在 `layouts/partials/article-link/card.html` 文件中有以下代码：

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

Hugo 在这里默认将图片调整为 600px，并保持比例。

值得注意的是，类似[锚点](https://gohugo.io/content-management/image-processing/#anchor)这种图片的默认配置也可以在你的[站点配置](https://gohugo.io/content-management/image-processing/#processing-options)以及模板本身中设置。

参考[Hugo 关于图像处理的文档](https://gohugo.io/content-management/image-processing/#image-processing-methods)来获取更多信息。

## 颜色方案

Blowfish 提供了多种颜色方案。如果你想在 Blowfish 提供的内置方案基础上更改颜色方案，你仅需要修改 `colorScheme` 参数即可。关于内置颜色方案可以参考[入门指南]({{< ref "getting-started#colour-schemes" >}})的内容。

除了默认方案之外，你还可以创建自己的颜色方案，并根据自己的喜好重新设计整个网站。可以通过在 `assets/css/schemes/` 目录中创建 `<scheme-name>.css` 文件来新建颜色方案。一旦文件被创建，只需要将主题配置中 `colorScheme` 参数设置为对应的名称即可。

{{< alert "github">}}
**注意：** 手动生成这些文件会比较困难，我构建了一个 `nodejs` 工具来帮助完成这项工作——[Fugu](https://github.com/nunocoracao/fugu)。总之，你只需要在调色板中选择三个主要颜色的 `hex` 值，程序将会输出一个可以直接导入到 Blowfish 主题的 CSS 文件。
{{< /alert >}}

Blowfish 主题定义了一个以三个主色调为核心的颜色方案，这三个主色调分别作为 `neutral`、`primary` 和 `secondary`，其中每一个主色调对应了10个具体的颜色。

由于 Tailwind CSS 3.0 会用不透明度来计算颜色的值，所以方案中指定的颜色需要[符合特定格式](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo)，即提供红色、绿色和蓝色的颜色值。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

上面这个例子定义了一个 `primary-500` 颜色的 CSS 变量，其中红色的值是`139`，绿色的值是`92`，蓝色的值是`246`.

你可以使用现有的颜色样式作为模板，自由地定制自己喜欢的颜色。但如果你需要一些定制颜色方案的灵感，可以查看官方的[Tailwind 颜色方案参考](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)。

## 覆盖样式表

如果你只是想添加自定义样式以设置 HTML 中某些元素的样式。Blowfish 允许你在自己的 CSS 样式表中覆盖默认样式。只需要在 `assets/css/` 目录下创建 `custom.css` 文件即可。

`custom.css` 文件将会被 Hugo 压缩，并在主题本身的样式之后自动加载，这意味着你设置的自定义文件将会覆盖主题自身的样式。

### 使用额外的字体

Blowfish 允许你轻松修改字体网站的字体。在 `assets/css/` 目录下创建完 `custom.css` 文件后，将你的字体文件放置到 `static/fonts/` 目录下。

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

这将使得字体在网站中可用。现在你只需要在 `custom.css` 文件中引用它，并在适当的地方替换即可。下面这个示例，展示了如何给整个 `html` 替换字体。

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

更改网站的字体大小，也是通过用覆盖默认样式实现的。Blowfish 在整个主题中使用了基于 HTML 字体大小，即 `font-size` 属性来控制字体大小的。Tailwind 将字体大小默认设置为 `12pt`，当然也可以更改成自己喜欢的值。

按照[上面所说]({{< ref "#overriding-the-stylesheet" >}})，创建一个 `custom.css` 并添加一下 CSS 声明：

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

只需要更改这一个值，网站上的所有字体就会调整到此值。因此如果想让字体更大，让此值大于 `12pt`；同理想让字体更小，小于 `12pt` 即可。

## 从源码构建主题CSS

如果你想进行重大更改，可以使用Tailwind CSS 的 JIT 编译器，并从头开始重建整个主题的CSS。如果你想调整 Tailwind 配置或者添加额外的 Tailwind 类，JIT 会非常有用，

{{< alert >}}
**注意：** 手动构建主题是为高级用户所准备的。
{{< /alert >}}

接下来让我们一步一步了解 Tailwind CSS 是如何构建和工作的。

### Tailwind 配置

为了生成只包含实际使用的 Tailwind 类的 CSS 文件，Blowfish 在主题的根目录中定义了 `tailwind.config.js` 文件，用来扫描所有 HTML 模板和 Markdown 内容文件，以检查被标记的样式。下面是 `tailwind.config.js` 中的内容：

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // 更多...
};
```

默认配置包含了以上路径，这里囊括了大部分内容文件。主要你遵循上面的项目结构，那么你无需修改 `tailwind.config.js` 就能轻松生成自己的 CSS 文件。但这样一来，需要你将 **Blowfish 作为子目录`themes/blowfish/` 放置在你的项目中**，Git子模块（推荐）和本地复制文件的安装方式可以做到这一点，但是 Hugo 模块的安装方式不适用。[安装文章]({{< ref "installation" >}})介绍了如何使用这三种安装方式。

### 项目结构

为了利用默认配置，你的项目应该看起来是这样：

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # 这是我们生成的文件
├── config  # 站点配置
│   └── _default
├── content  # site content
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # 站点的自定义布局
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # Git 子模块或本地复制安装
```

这个结构示例添加了一个`projects` 内容，并为其添加了自定义布局、自定义短代码和扩充文章链接的部分。遵循此项目的结构，需要做的就是重新编译 `main.css` 文件。

### 安装依赖

为了使编译过程正常运行，你需要进入 `themes/blowfish/` 目录并安装项目依赖。你需要在本地环境执行安装 [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)。

```shell
cd themes/blowfish
npm install
```

### 运行 Tailwind 编译器

安装完依赖后，接下来就是使用 [Tailwind CLI](https://v2.tailwindcss.com/docs/installation#using-tailwind-cli) 调用 JIT 编译器。回到你的 Hugo 项目根目录并执行以下命令：

```shell
cd ../..
./themes/blowfish/node_modules/tailwindcss/lib/cli.js -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

这个命令稍微有点复杂，因为涉及到几个路径。但本质上你是在调用 Tailwind CLI 并提供下面三个参数： 
- Tailwind 配置文件 `tailwind.config.js`
- 主题的 `main.css` 文件
- 编译产出后的 CSS 文件的位置 `assets/css/compiled/`

配置文件将自动检查你项目和主题中的所有内容和布局，并构建一个新的 CSS 文件，这个 CSS 文件包含了你的网站中需要的所有CSS。由于 Hugo 处理文件层次结构的方式，你项目中的 `main.css` 文件将自动覆盖主题中的 `main.css` 文件。

每次你对布局进行更改并需要新的 Tailwind CSS 样式时，都需要重新运行命令并生成新的 CSS 文件。为了简化步骤，你可以在命令的末尾添加 `-w` 来启用监视模式运行 JIT 编译器。

### 制作构建脚本

为了提供一个更加完整的方案，你可以为这些命令添加别名来简化整个过程，或者想我一样，在项目的根目录中添加一个包含脚本的 `package.json` 文件：

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

现在，当你想要设计网站时，可以调用 `npm run dev`，编译器会以监视模式运行。当你准备部署时，运行 `npm run build` 就可以得到一个简洁的 Tailwind CSS 构建。

🙋‍♀️如果你需要帮助，请随时在 [GitHub 讨论区](https://github.com/nunocoracao/blowfish/discussions)提出问题。

