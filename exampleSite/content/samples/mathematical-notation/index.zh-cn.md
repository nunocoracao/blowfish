---
title: 数学表达式
date: 2019-03-08
description: Blowfish 中数学表达式的简短示例。
tags: ["示例", "katex", "数学", "简码"]
type: 'sample'
---

KaTeX 可用于在文章中呈现数学表达式。

<!--more-->

{{< katex >}}

如果您想要使用数学符号，Blowfish 会将 KaTeX 自动加入到您的项目中。只需在文章中包含 [`katex` 短代码]({{< ref "docs/shortcodes#katex" >}}) 即可。参考下面的例子：

```md
{{</* katex */>}}
```
该页面上的任何 KaTeX 语法都会自动渲染。使用[支持的 TeX 函数](https://katex.org/docs/supported.html) 的在线参考来获取可用语法。

## 内联表示法

可以通过将表达式包装在 `\\(` 和 `\\)` 分隔符中来生成内联表示法。

**例如：**

```tex
% KaTeX inline notation
Inline notation: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)
```

Inline notation: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)

## 表达式块

可以使用 `$$` 分隔符生成表达式块。这将在其 HTML 块中输出表达式。

**例如：**

```tex
% KaTeX block notation
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
