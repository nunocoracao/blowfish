---
title: Mathematische Notation
date: 2019-03-08
description: Eine kurze Übersicht über mathematische Notation in Blowfish.
tags: ["beispiel", "katex", "mathematik", "shortcodes"]
type: 'sample'
---

KaTeX kann verwendet werden, um mathematische Notation in Artikeln darzustellen.

<!--more-->

{{< katex >}}

Blowfish bündelt die KaTeX-Assets nur dann in Ihr Projekt, wenn Sie mathematische Notation verwenden. Damit dies funktioniert, fügen Sie einfach den [`katex`-Shortcode]({{< ref "docs/shortcodes#katex" >}}) in den Artikel ein. Beispiel unten:

```md
{{</* katex */>}}
```
Jede KaTeX-Syntax auf dieser Seite wird dann automatisch gerendert. Verwenden Sie die Online-Referenz der [unterstützten TeX-Funktionen](https://katex.org/docs/supported.html) für die verfügbare Syntax.

## Inline-Notation

Inline-Notation kann durch Umschließen des Ausdrucks mit `\(` und `\)` Trennzeichen erzeugt werden.

**Beispiel:**

```tex
% KaTeX Inline-Notation
Inline-Notation: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
```

Inline-Notation: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

## Block-Notation

Alternativ kann Block-Notation mit `$$` Trennzeichen erzeugt werden. Dies gibt den Ausdruck in einem eigenen HTML-Block aus.

**Beispiel:**

```tex
% KaTeX Block-Notation
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
