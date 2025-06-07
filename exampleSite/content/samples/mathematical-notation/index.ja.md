---
title: 数学的記法
date: 2019-03-08
description: Blowfish での数学的記法の簡単なサンプル。
tags: ["sample", "katex", "maths", "shortcodes"]
type: 'sample'
---

KaTeX は数学的記法を記事内にレンダリングする際に利用できます。

<!--more-->

{{< katex >}}

Blowfish は数学的記法を利用する場合のみ、 KaTeX アセットをプロジェクトにバンドルします。これを機能させるには、単に記事内に [`katex` ショートコード]({{< ref "docs/shortcodes#katex" >}}) を含ませてください。以下が例です:

```md
{{</* katex */>}}
```
ページ上のすべての KaTeX 構文は自動的にレンダリングされます。
利用可能な構文は[サポートしている TeX 機能](https://katex.org/docs/supported.html)のオンラインの文献を参照してください。

## インライン表記

インライン表記は `\(` と `\)` 記号で式を囲むことで生成できます。

**例:**

```tex
% KaTeX インライン表記
インライン表記: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
```

インライン表記: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

## ブロック表記

または、ブロック表記は `$$` 記号を利用することで生成できます。これによって、式が独自の HTML ブロックに出力されます。

**例:**

```tex
% KaTeX ブロック表記
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
