---
title: Notação matemática
date: 2019-03-08
description: Uma breve amostra de notação matemática no Blowfish.
tags: ["exemplo", "katex", "matemática", "shortcodes"]
type: 'sample'
---

KaTeX pode ser usado para renderizar notação matemática dentro dos artigos.

<!--more-->

{{< katex >}}

O Blowfish só incluirá os assets do KaTeX no seu projeto se você usar notação matemática. Para que isso funcione, simplesmente inclua o [shortcode `katex`]({{< ref "docs/shortcodes#katex" >}}) dentro do artigo. Exemplo abaixo:

```md
{{</* katex */>}}
```
Qualquer sintaxe KaTeX nessa página será automaticamente renderizada. Use a referência online das [funções TeX suportadas](https://katex.org/docs/supported.html) para a sintaxe disponível.

## Notação em linha

A notação em linha pode ser gerada envolvendo a expressão com os delimitadores `\(` e `\)`.

**Exemplo:**

```tex
% Notação em linha KaTeX
Notação em linha: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
```

Notação em linha: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

## Notação em bloco

Alternativamente, a notação em bloco pode ser gerada usando delimitadores `$$`. Isso exibirá a expressão em seu próprio bloco HTML.

**Exemplo:**

```tex
% Notação em bloco KaTeX
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
