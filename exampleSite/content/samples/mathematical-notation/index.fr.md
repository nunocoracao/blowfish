---
title: Notation mathématique
date: 2019-03-08
description: Un bref aperçu de la notation mathématique dans Blowfish.
tags: ["exemple", "katex", "maths", "shortcodes"]
type: 'sample'
---

KaTeX peut être utilisé pour rendre la notation mathématique dans les articles.

<!--more-->

{{< katex >}}

Blowfish n'inclura les assets KaTeX dans votre projet que si vous utilisez la notation mathématique. Pour que cela fonctionne, incluez simplement le [shortcode `katex`]({{< ref "docs/shortcodes#katex" >}}) dans l'article. Exemple ci-dessous :

```md
{{</* katex */>}}
```
Toute syntaxe KaTeX sur cette page sera alors automatiquement rendue. Utilisez la référence en ligne des [fonctions TeX supportées](https://katex.org/docs/supported.html) pour la syntaxe disponible.

## Notation en ligne

La notation en ligne peut être générée en encadrant l'expression avec les délimiteurs `\(` et `\)`.

**Exemple :**

```tex
% Notation en ligne KaTeX
Notation en ligne : \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
```

Notation en ligne : \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

## Notation en bloc

Alternativement, la notation en bloc peut être générée en utilisant les délimiteurs `$$`. Cela affichera l'expression dans son propre bloc HTML.

**Exemple :**

```tex
% Notation en bloc KaTeX
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
