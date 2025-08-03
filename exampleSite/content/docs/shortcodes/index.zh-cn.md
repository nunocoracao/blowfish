---
title: "简码"
weight: 6
draft: false
description: "所有 Blowfish 中可用的简码"
slug: "shortcodes"
tags: ["简码", "mermaid", "图标", "lead", "docs"]
series: ["部署教程"]
series_order: 8
---

除了所有[默认 Hugo 简码](https://gohugo.io/content-management/shortcodes/) 之外，Blowfish 还添加了一些额外的功能。

## Alert

`alert` 可以将其中内容输出为文章中的风格化消息框。它对于吸引读者注意您不想让读者错过的重要信息很有用。

<!-- prettier-ignore-start -->
| 参数        | 功能                                                                                                                             |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `icon`      | **可选** 显示在左侧的图标。<br>**默认：** `exclaimation triangle icon` (查看[图标简码](#图标)，了解有关使用图标的更多详细信息。) |
| `iconColor` | **可选** 基本 CSS 样式中图标的颜色。<br>可以是十六进制值 (`#FFFFFF`) 或颜色名称 (`white`)<br>默认情况下由当前配色方案决定。      |
| `cardColor` | **可选** 基本 CSS 样式中卡片背景的颜色。<br>可以是十六进制值 (`#FFFFFF`) 或颜色名称 (`white`)<br>默认情况下由当前配色方案决定。  |
| `textColor` | **可选** 基本 CSS 样式中文本的颜色。<br>可以是十六进制值 (`#FFFFFF`) 或颜色名称 (`white`)<br>默认情况下由当前配色方案决定。      |
<!-- prettier-ignore-end -->

输入内容是用 Markdown 语言编写的，因此您可以根据需要设置其格式。

**例1:** 无参数

```md
{{</* alert */>}}
**警告！**此操作具有破坏性！
{{</* /alert */>}}
```

{{< alert >}}
**警告！**此操作具有破坏性！
{{< /alert >}}

**例2:** 未命名参数

```md
{{</* alert "twitter" */>}}
Don't forget to [follow me](https://twitter.com/nunocoracao) on Twitter.
{{</* /alert */>}}
```

{{< alert "twitter" >}}
Don't forget to [follow me](https://twitter.com/nunocoracao) on Twitter.
{{< /alert >}}

**例3:** 命名参数

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
This is an error!
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
This is an error!
{{< /alert >}}

<br/><br/><br/>

## Article

`Article` 将把一篇文章嵌入到一个 markdown 文件中。 参数中的 `link`应该是要嵌入的文件的 `.RelPermalink`。请注意，如果简码引用其父级文件，则它不会显示任何内容。 *注意：如果您在 Blowfish（即 /blowfish/）等子文件夹中运行网站，请在链接中包含该路径。*

<!-- prettier-ignore-start -->
| 参数   | 功能                                  |
| ------ | ------------------------------------- |
| `link` | **必填** 要嵌入文章的 `.RelPermalink` |
| `showSummary` | **可选** 布尔值，指示是否显示文章摘要。如果未设置，将使用站点的默认配置。 |
| `compactSummary` | **可选** 布尔值，指示是否以紧凑模式显示摘要。默认为 false。 |
<!-- prettier-ignore-end -->

**例如：**

```md
{{</* article link="/zh-cn/docs/welcome/" showSummary=true compactSummary=true */>}}
```

{{< article link="/zh-cn/docs/welcome/" showSummary=true compactSummary=true >}}

<br/><br/><br/>

## Badge

`badge` 输出一个美观的徽章组件，该组件对于显示元数据很有用。

**例如：**

```md
{{</* badge */>}}
New article!
{{</* /badge */>}}
```

{{< badge >}}
New article!
{{< /badge >}}

<br/><br/><br/>

## Button

`button` 输出一个样式化的按钮组件，可用于突出显示主要操作。它有三个可选变量 `href`、`target` 和 `rel`，可用于指定链接的 URL、目标和关系。

**例如：**

```md
{{</* button href="#button" target="_self" */>}}
Call to action
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Call to action
{{< /button >}}

<br/><br/><br/>

## Carousel

`carousel` 用于生成可交互且具有视觉吸引力的方式展示多个图像的画廊。这允许用户滑动浏览多个图像，同时仅占用单个图像的垂直空间。 所有图像均使用父组件的完整宽度并使用预定义的宽高比 `16:9` 、 `21:9` 或 `32:9` 之一显示。

<!-- prettier-ignore-start -->
| 参数          | 功能                                                                  |
| ------------- | --------------------------------------------------------------------- |
| `images`      | **必填** 用于匹配图像名称的正则表达式或 URL。                         |
| `aspectRatio` | **可选** 画廊的纵横比。`16-9` 、`21-9` 或`32-9` 。默认设置为`16-9` 。 |
| `interval`    | **可选** 自动滚动的时间间隔，以毫秒为单位指定。默认为`2000`（2 秒）。 |
<!-- prettier-ignore-end -->

**例1:** 16:9 宽高比和 URL 图像列表

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg, gallery/03.jpg, gallery/01.jpg, gallery/02.jpg, gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**例2:** 21:9 宽高比和正则表达式图像列表

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## Chart

`chart` 使用 Chart.js 库将图表嵌入到使用简单结构化数据的文章中。它支持多种[不同的图表样式](https://www.chartjs.org/docs/latest/samples/)，并且所有内容都可以在简码中进行配置。只需在简码中提供图表参数，Chart.js 将完成剩下的工作。

有关语法和支持的图表类型的详细信息，请参阅 [Chart.js 官方文档](https://www.chartjs.org/docs/latest/general/)。

**例如：**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

您可以在 [图表示例]({{< ref "charts" >}}) 页面上查看一些更多 Chart.js 示例。

<br/><br/><br/>

## Code Importer

此短代码用于轻松从外部源导入代码，无需复制和粘贴

<!-- prettier-ignore-start -->
| Parameter | Description                        |
| --------- | ---------------------------------- |
| `url`     | **必需的** 外部托管代码文件的 URL. |
| `type`    | 用于语法突出显示的代码类型.        |
| `startLine` | **可选** 从代码文件中导入的起始行. |
| `endLine` | **可选** 从代码文件中导入的结束行. |


<!-- prettier-ignore-end -->


**Example:**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}


<br/><br/>

## Codeberg Card

`codeberg` 允许您通过 Codeberg API 快速链接 Codeberg 存储库，提供星号和分叉等统计信息的实时更新.

<!-- prettier-ignore-start -->
| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] Codeberg 存储库的格式为 `username/repo` |
<!-- prettier-ignore-end -->

**Example 1:**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```
{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

Blowfish 包含一个 `figure` 简码，用于将图像添加到内容中。该简码取代了基本的 Hugo 功能，且性能更好。

当提供的图像是页面资源时，将使用 Hugo Pipes 对其进行优化并缩放，以提供适合不同设备分辨率的图像。如果提供了静态资产或外部图像的 URL，它将按原样包含在内，而无需 Hugo 进行任何图像处理。

`figure` 简码接受六个参数：

<!-- prettier-ignore-start -->
| 参数      | 功能                                                                                                                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`     | **必填** 图像的本地路径/文件名或 URL。当提供路径和文件名时，主题将尝试使用以下查找顺序来查找图像：首先，作为与页面绑定的[页面资源](https://gohugo.io/content-management/page-resources/)；然后是 `assets/` 目录中的文件；最后是，`static/`目录中的文件。 |
| `alt`     | 图像的[替代文本描述](https://moz.com/learn/seo/alt-text)。                                                                                                                                                                                               |
| `caption` | Markdown 格式的图像标题，将显示在图像下方。                                                                                                                                                                                                              |
| `class`   | 应用于图像的其他 CSS 类。                                                                                                                                                                                                                                |
| `href`    | 图像应链接到的 URL。                                                                                                                                                                                                                                     |
| `target`  | `href` URL 的目标属性。                                                                                                                                                                                                                                  |
| `nozoom`  | `nozoom=true` 会禁用图像`缩放`功能。与 `href` 结合使用十分有用。                                                                                                                                                                                         |
| `default` | 用于恢复默认 Hugo `figure` 行为的特殊参数。只需提供`default=true`，然后使用正常的 [Hugo 简码语法](https://gohugo.io/content-management/shortcodes/#figure)。                                                                                             |
<!-- prettier-ignore-end -->

Blowfish 还支持使用标准 Markdown 语法自动转换图像。只需使用以下格式，主题将自动处理：

```md
![Alt text](image.jpg "Image caption")
```

## Forgejo Card

`forgejo` allows you to quickly link a Forgejo repository via the forgejo API, providing real-time updates on stats such as stars and forks.

<!-- prettier-ignore-start -->
| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] forgejo repo in the format of `username/repo`|
| `server`  | [String] server URL like `https://v11.next.forgejo.org`|
<!-- prettier-ignore-end -->

**Example 1:**

```md
{{</* forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" */>}}
```
{{< forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" >}}

<br/><br/><br/>


**例如：**

```md
{{</* figure
    src="abstract.jpg"
    alt="Abstract purple artwork"
    caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)"
    */>}}

<!-- OR -->

![Abstract purple artwork](abstract.jpg "Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Gallery

`gallery` 允许您以响应式一次展示多个图像，并具有更加多样化和有趣的布局的图库。

为了将图像添加到图库中，请为每个图像使用`img`标签并添加`class ="grid-wXX"`，以便图库能够识别每个图像的列宽。默认情况下可用的宽度从 10% 开始，以 5% 的增量一直达到 100%。例如，要将宽度设置为 65%，请将类设置为`grid-w65`。此外，还可以使用 33% 和 66% 的宽度来构建 3 列的画廊。您还可以利用 Tailwind 的响应指示器来构建响应网格。

**例1: 普通图库**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>


**例2: 响应式图库**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

`gist` 短代码允许你通过指定 Gist 用户名、ID 以及可选的特定文件，直接将 GitHub Gist 嵌入到内容中。

| 参数        | 描述                       |
| --------- | ------------------------ |
| `[0]`     | \[字符串] GitHub 用户名        |
| `[1]`     | \[字符串] Gist ID           |
| `[2]`（可选） | \[字符串] Gist 中要嵌入的文件名（可选） |

**示例 1：嵌入整个 Gist**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
```

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**示例 2：嵌入 Gist 中的特定文件**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>


## Gitea 卡片

`gitea` 允许你通过 gitea API 快速链接一个 Gitea 仓库，提供诸如 stars 和 forks 等统计数据的实时更新。

<!-- prettier-ignore-start -->
| 参数       | 描述                                      |
| -------- | --------------------------------------- |
| `repo`   | \[字符串] 以 `用户名/仓库名` 格式表示的 gitea 仓库       |
| `server` | \[字符串] 服务器 URL，如 `https://git.fsfe.org` |
<!-- prettier-ignore-end -->

**示例 1：**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```

{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub 卡片

`github` 允许您快速链接到 github Repo，同时显示和更新有关它的实时统计信息，例如它的 star 和 fork 数。

<!-- prettier-ignore-start -->
| 参数   | 功能                                           |
| ------ | ---------------------------------------------- |
| `repo` | [String] 格式为 `username/repo` 的 github repo |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* github repo="nunocoracao/blowfish" */>}}
```

{{< github repo="nunocoracao/blowfish" >}}

<br/><br/><br/>

## GitLab 卡片

`gitlab` 允许您快速链接 GitLab 项目（GitLab 的 Repo）。
显示有关的实时统计数据，例如它拥有的 star 和 fork 的数量。
与 `github` 不同，它无法显示项目的主要编程语言。
最后，只要 `api/v4/projects/` 可用，就可以提供自定义 GitLab 实例 URL，从而使此简码能够显示大多数自托管/企业组织。

<!-- prettier-ignore-start -->
| 参数        | 功能                                                        |
| ----------- | ----------------------------------------------------------- |
| `projectID` | [String] gitlab 数字项目ID                                  |
| `baseURL`   | [String] 可选 gitlab 实例 URL，默认为 `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## Hugging Face 卡片

`huggingface` 让您能够快速链接 Hugging Face 模型或数据集，显示实时信息如点赞数和下载量，以及类型和描述。

| 参数      | 描述                                                         |
|-----------|--------------------------------------------------------------|
| `model`   | [字符串] 格式为 `用户名/模型名` 的 Hugging Face 模型         |
| `dataset` | [字符串] 格式为 `用户名/数据集名` 的 Hugging Face 数据集     |

**注意：** 使用 `model` 或 `dataset` 参数中的一个，不要同时使用。

**示例1（模型）：**

```md
{{</* huggingface model="google-bert/bert-base-uncased" */>}}
```

{{< huggingface model="google-bert/bert-base-uncased" >}}

**示例2（数据集）：**

```md
{{</* huggingface dataset="stanfordnlp/imdb" */>}}
```

{{< huggingface dataset="stanfordnlp/imdb" >}}

<br/><br/><br/>

## 图标

`icon` 输出一个 SVG 图标并以图标名称作为其唯一参数。图标会自动缩放以匹配当前文本大小。

**例如：**

```md
{{</* icon "github" */>}}
```

**Output:** {{< icon "github" >}}

图标使用 Hugo Pipeline 填充，这使得它们非常灵活。 Blowfish 包含许多用于社交、链接和其他内置图标。参考 [图标示例]({{< ref "samples/icons" >}}) 页面以获取支持的图标的完整列表。

可以通过在项目的 `assets/icons/` 目录中提供您自己的图标来添加自定义图标。然后可以使用不带 `.svg` 扩展名的 SVG 文件名在简码中引用该图标。

还可以通过调用 [iconpartial]({{< ref "partials#icon" >}}) 在 partials 中使用图标。

<br/><br/><br/>

## KaTeX

`katex` 简码可用于使用 KaTeX 包向文章内容添加数学表达式。有关可用语法，请参阅[支持的 TeX 函数](https://katex.org/docs/supported.html) 的在线参考。

要在文章中加入数学表达式，只需将简码放在任意位置即可。每篇文章只需加入一次，KaTeX 将自动呈现该页面上的任何标记。支持内联和块表示法。

可以通过将表达式包装在 `\(` 和 `\)` 分隔符中来生成内联表示法。或者，可以使用 `$$` 分隔符生成块符号。

**例如：**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

查看 [数学符号示例]({{< ref "mathematical-notation" >}}) 页面以获取更多示例。

<br/><br/><br/>


## 重点突出


`keyword` 组件可用于在视觉上突出显示某些重要的单词或短语，例如专业技能等。 `keywordList` 简码可用于将多个 `keyword` 组合在一起。每个组件可以具有以下参数。


<!-- prettier-ignore-start -->
| 参数   | 功能                        |
| ------ | --------------------------- |
| `icon` | **可选** 关键字中使用的图标 |
<!-- prettier-ignore-end -->

输入内容是用 Markdown 编写的，因此您可以根据需要设置其格式。

**例1 :**

```md
{{</* keyword */>}} Super skill {{</* /keyword */>}}
```

{{< keyword >}} *Standalone* skill {{< /keyword >}}

**例2 :**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} **Important** skill {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} *Standalone* skill {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} **Important** skill {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} *Standalone* skill {{< /keyword >}}

<br/><br/><br/>

## Lead

`lead` 用于强调文章的开头。它可以用来设计介绍的样式，或者指出一条重要的信息。只需将任何 Markdown 内容包装在 `lead` 简码中即可。

**例如：**

```md
{{</* lead */>}}
When life gives you lemons, make lemonade.
{{</* /lead */>}}
```

{{< lead >}}
When life gives you lemons, make lemonade.
{{< /lead >}}

<br/><br/><br/> 

## 列表

`List` 将显示最近文章的列表。此简码需要一个限制值来约束列表。此外，它还支持输入 `where` 和 `value` ，以便按参数过滤文章。请注意，此简码不会显示其父页面，但会计入限制值。

<!-- prettier-ignore-start -->
| 参数       | 功能                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| `limit`    | **必填** 要显示的最近文章数量。                                                                        |
| `title`    | **可选** 列表标题，默认为 `Recent`                                                                     |
| `cardView` | **可选** 列表启用卡片视图，默认为 `false`                                                              |
| `where`    | 用于筛选文章的变量，例如 `Type`                                                                        |
| `value`    | 需要与 `where` 中定义的参数匹配的值，以进行文章查询，例如对于 `where` == `Type`，可以找到文章 `sample` |

{{< alert >}}
`where` 和 `value` 值用于简码中进行以下格式的查询 `where .Site.RegularPages $where $value` 。检查 [Hugo 文档](https://gohugo.io/methods/page/) 以了解有关可用参数的更多信息。
{{</ alert >}}

<!-- prettier-ignore-end -->

**例 1:**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**例 2:**

```md
{{</* list title="Samples" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## 文字书写方向 

`ltr` 和 `rtl` 允许您混排内容。许多从左往右书写语言的用户希望在文章中包含部分从右往左的书写内容。使用此简码可以让您做到这一点，并利用 `%` 作为简码中最外层的标识符 [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown)，其中任何 markdown 内容都会正常渲染。

**例如：**

```md
- This is an markdown list.
- Its per default a LTR direction
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- This is an markdown list.
- Its per default a LTR direction
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown 导入

此简码允许您从外部源导入 Markdown 文件。这对于包含来自其他仓库或网站的内容非常有用，而无需复制和粘贴内容。

<!-- prettier-ignore-start -->
| 参数  | 功能                                    |
| ----- | --------------------------------------- |
| `url` | **必填** 外部托管 Markdown 文件的 URL。 |


<!-- prettier-ignore-end -->


**例如：**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}


<br/><br/>

## Mermaid

`mermaid` 允许您使用文本绘制可视化的图表。底层使用 Mermaid，并支持各种图表、图表和其他输出格式。

只需在 `mermaid` 简码中编写您的 Mermaid 语法，然后让插件完成其余的工作。

有关语法和支持的图表类型的详细信息，请参阅[官方 Mermaid 文档](https://mermaid-js.github.io/)。

**例如：**

```md
{{</* mermaid */>}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

您可以在[图表和流程图示例]({{< ref "diagrams-flowcharts" >}}) 页面上看到一些其他 Mermaid 示例。

<br/><br/><br/>

## 色板

`swatches` 输出一组最多三种不同的颜色来展示颜色元素的调色板。该简码采用每种颜色的 `HEX` 码并为每种颜色创建预览。

**例**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**输出**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## 时间线

`timeline` 创建了一个可视化时间线，用于展示专业经验、项目成就等。 `timeline` 简码依赖于 `timelineItem` 子简码来定义主时间线中的每个项目。每个项目可以具有以下属性。

<!-- prettier-ignore-start -->
| 参数        | 功能                     |
| ----------- | ------------------------ |
| `icon`      | 要在时间线中使用的图标。 |
| `header`    | 每个条目的标题           |
| `badge`     | 放置在右上角徽章内的文本 |
| `subheader` | 每个条目的副标题         |

<!-- prettier-ignore-end -->

**例如：**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="header" badge="badge test" subheader="subheader" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus. 
{{</* /timelineItem */>}}


{{</* timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader" */>}}
With html code
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="AWESOME" */>}}
With other shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Another Awesome Header"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```


{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus. 
{{< /timelineItem >}}


{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader" >}}
With html code
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{{< /timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
With other shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="nunocoracao/blowfish" >}}
{{< /timelineItem >}}

{{< /timeline >}}


<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) 是用于创建打字机效果的最通用的 JavaScript 工具。通过简单的配置，它允许您键入单个或多个断行、删除和相互替换的字符串，甚至可以处理包含复杂 HTML 的字符串。

Blowfish 使用简码实现 TypeIt 功能的子集。在 `typeit` 简码中编写文本，并使用以下参数来配置您想要的行为。

<!-- prettier-ignore-start -->
| 参数               | 功能                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| `tag`              | [String] 将用于呈现字符串的 `html` 标签。                                 |
| `classList`        | [String] 应用于 `html` 元素的 `css` 类列表。                              |
| `initialString`    | [String] 将显示为先写入并将被替换的初始字符串。                           |
| `speed`            | [number] 每步之间的打字速度，以毫秒为单位。                               |
| `lifeLike`         | [boolean] 使打字速度不规律，就像真人在打字一样。                          |
| `startDelay`       | [number] 插件在初始化后到开始输入的延迟时间。                             |
| `breakLines`       | [boolean] 将多个字符串换行输出 (true)，或者将它们删除并替换 (false)。     |
| `waitUntilVisible` | [boolean] 决定脚本在网站加载时启动还是在目标元素可见时启动。默认为 `true` |
| `loop`             | [boolean] 字符串动画是否会循环                                            |

<!-- prettier-ignore-end -->

**例1:**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet 
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**例2:**

```md
{{</* typeit 
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**例3:**

```md
{{</* typeit 
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"Frankly, my dear, I don't give a damn." Gone with the Wind (1939)
"I'm gonna make him an offer he can't refuse." The Godfather (1972)
"Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz (1939)
{{< /typeit >}}


<br/><br/><br/>

## Youtube 嵌入播放器

使用 [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) 库嵌入 YouTube 视频的简码。该库是 YouTube 嵌入播放器的轻量级替代品，其设计速度更快、更高效。

<!-- prettier-ignore-start -->
| 参数    | 功能                                |
| ------- | ----------------------------------- |
| `id`    | [String] 要嵌入的 YouTube 视频 ID。 |
| `label` | [String] 视频的标签                 |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" */>}}

```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}
