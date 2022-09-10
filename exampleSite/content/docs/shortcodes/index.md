---
title: "Shortcodes"
date: 2020-08-11
draft: false
description: "All the shortcodes available in Congo."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
---

In addition to all the [default Hugo shortcodes](https://gohugo.io/content-management/shortcodes/), Congo adds a few extras for additional functionality.

## Alert

`alert` outputs its contents as a stylised message box within your article. It's useful for drawing attention to important information that you don't want the reader to miss.

The input is written in Markdown so you can format it however you please.

By default, the alert is presented with an exclaimation triangle icon. To change the icon, include the icon name in the shortcode. Check out the [icon shortcode](#icon) for more details on using icons.

**Example:**

```md
{{</* alert */>}}
**Warning!** This action is destructive!
{{</* /alert */>}}

{{</* alert "twitter" */>}}
Don't forget to [follow me](https://twitter.com/jpanther) on Twitter.
{{</* /alert */>}}
```

{{< alert >}}
**Warning!** This action is destructive!
{{< /alert >}}
&nbsp;
{{< alert "twitter" >}}
Don't forget to [follow me](https://twitter.com/jpanther) on Twitter.
{{< /alert >}}

## Badge

`badge` outputs a styled badge component which is useful for displaying metadata.

**Example:**

```md
{{</* badge */>}}
New article!
{{</* /badge */>}}
```

{{< badge >}}
New article!
{{< /badge >}}

## Button

`button` outputs a styled button component which can be used to highlight a primary action. It has two optional variables `href` and `target` which can be used to specify the URL and target of the link.

**Example:**

```md
{{</* button href="#button" target="_self" */>}}
Call to action
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Call to action
{{< /button >}}

## Chart

`chart` uses the Chart.js library to embed charts into articles using simple structured data. It supports a number of [different chart styles](https://www.chartjs.org/docs/latest/samples/) and everything can be configured from within the shortcode. Simply provide the chart parameters between the shortcode tags and Chart.js will do the rest.

Refer to the [official Chart.js docs](https://www.chartjs.org/docs/latest/general/) for details on syntax and supported chart types.

**Example:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 2, 3],
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

You can see some additional Chart.js examples on the [charts samples]({{< ref "charts" >}}) page.

## Figure

Congo includes a `figure` shortcode for adding images to content. The shortcode replaces the base Hugo functionality in order to provide additional performance benefits.

When a provided image is a page resource, it will be optimised using Hugo Pipes and scaled in order to provide images appropriate to different device resolutions. If a static asset or URL to an external image is provided, it will be included as-is without any image processing by Hugo.

The `figure` shortcode accepts six parameters:

<!-- prettier-ignore-start -->
|Parameter|Description|
|---|---|
|`src`| **Required.** The local path/filename or URL of the image. When providing a path and filename, the theme will attempt to locate the image using the following lookup order: Firstly, as a [page resource](https://gohugo.io/content-management/page-resources/) bundled with the page; then an asset in the `assets/` directory; then finally, a static image in the `static/` directory.|
|`alt`|[Alternative text description](https://moz.com/learn/seo/alt-text) for the image.|
|`caption`|Markdown for the image caption, which will be displayed below the image.|
|`class`|Additional CSS classes to apply to the image.|
|`href`|URL that the image should be linked to.|
|`default`|Special parameter to revert to default Hugo `figure` behaviour. Simply provide `default=true` and then use normal [Hugo shortcode syntax](https://gohugo.io/content-management/shortcodes/#figure).|
<!-- prettier-ignore-end -->

Congo also supports automatic conversion of images included using standard Markdown syntax. Simply use the following format and the theme will handle the rest:

```md
![Alt text](image.jpg "Image caption")
```

**Example:**

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

## Icon

`icon` outputs an SVG icon and takes the icon name as its only parameter. The icon is scaled to match the current text size.

**Example:**

```md
{{</* icon "github" */>}}
```

**Output:** {{< icon "github" >}}

Icons are populated using Hugo pipelines which makes them very flexible. Congo includes a number of built-in icons for social, links and other purposes. Check the [icon samples]({{< ref "samples/icons" >}}) page for a full list of supported icons.

Custom icons can be added by providing your own icon assets in the `assets/icons/` directory of your project. The icon can then be referenced in the shortcode by using the SVG filename without the `.svg` extension.

Icons can also be used in partials by calling the [icon partial]({{< ref "partials#icon" >}}).

## Katex

The `katex` shortcode can be used to add mathematical expressions to article content using the KaTeX package. Refer to the online reference of [supported TeX functions](https://katex.org/docs/supported.html) for the available syntax.

To include mathematical expressions in an article, simply place the shortcode anywhere with the content. It only needs to be included once per article and KaTeX will automatically render any markup on that page. Both inline and block notation are supported.

Inline notation can be generated by wrapping the expression in `\\(` and `\\)` delimiters. Alternatively, block notation can be generated using `$$` delimiters.

**Example:**

```md
{{</* katex */>}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)
```

{{< katex >}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)

Check out the [mathematical notation samples]({{< ref "mathematical-notation" >}}) page for more examples.

## Lead

`lead` is used to bring emphasis to the start of an article. It can be used to style an introduction, or to call out an important piece of information. Simply wrap any Markdown content in the `lead` shortcode.

**Example:**

```md
{{</* lead */>}}
When life gives you lemons, make lemonade.
{{</* /lead */>}}
```

{{< lead >}}
When life gives you lemons, make lemonade.
{{< /lead >}}

## Mermaid

`mermaid` allows you to draw detailed diagrams and visualisations using text. It uses Mermaid under the hood and supports a wide variety of diagrams, charts and other output formats.

Simply write your Mermaid syntax within the `mermaid` shortcode and let the plugin do the rest.

Refer to the [official Mermaid docs](https://mermaid-js.github.io/) for details on syntax and supported diagram types.

**Example:**

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

You can see some additional Mermaid examples on the [diagrams and flowcharts samples]({{< ref "diagrams-flowcharts" >}}) page.
