---
title: Notación matemática
date: 2019-03-08
description: Una breve muestra de notación matemática en Blowfish.
tags: ["ejemplo", "katex", "matemáticas", "shortcodes"]
type: 'sample'
---

KaTeX se puede usar para renderizar notación matemática dentro de los artículos.

<!--more-->

{{< katex >}}

Blowfish solo incluirá los assets de KaTeX en tu proyecto si usas notación matemática. Para que esto funcione, simplemente incluye el [shortcode `katex`]({{< ref "docs/shortcodes#katex" >}}) dentro del artículo. Ejemplo a continuación:

```md
{{</* katex */>}}
```
Cualquier sintaxis KaTeX en esa página se renderizará automáticamente. Usa la referencia en línea de [funciones TeX soportadas](https://katex.org/docs/supported.html) para la sintaxis disponible.

## Notación en línea

La notación en línea se puede generar envolviendo la expresión con los delimitadores `\(` y `\)`.

**Ejemplo:**

```tex
% Notación en línea KaTeX
Notación en línea: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
```

Notación en línea: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)

## Notación en bloque

Alternativamente, la notación en bloque se puede generar usando delimitadores `$$`. Esto mostrará la expresión en su propio bloque HTML.

**Ejemplo:**

```tex
% Notación en bloque KaTeX
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
