---
title: "Markdown"
date: 2019-03-11
description: "Artículo de ejemplo que muestra la sintaxis básica de Markdown y el formato para elementos HTML."
tags: ["markdown", "css", "html", "ejemplo"]
type: 'sample'
---

Este artículo ofrece una muestra del formato básico de Markdown que se puede usar en Blowfish, también muestra cómo se decoran algunos elementos HTML básicos.

<!--more-->

## Encabezados

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto mientras que `<h6>` es el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Citas

El elemento blockquote representa contenido citado de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Cita sin atribución

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota**: puedes usar _sintaxis Markdown_ dentro de una cita.

### Cita con atribución

> No comuniques compartiendo memoria, comparte memoria comunicando.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior es un extracto de la [charla `sobre` nada](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, el 18 de noviembre de 2015.

## Tablas

Las tablas no son parte de la especificación principal de Markdown, pero Hugo las soporta de forma nativa.

| Nombre | Edad |
| ------ | ---- |
| Bob    | 27   |
| Alice  | 23   |

### Markdown en línea dentro de tablas

| Cursiva   | Negrita  | Código |
| --------- | -------- | ------ |
| _cursiva_ | **negrita** | `código` |

## Bloques de código

### Bloque de código general

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Bloque de código con título y resaltado de líneas

```html {title="example.html" lineNos=inline hl_lines=[4,"7-9"]}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## Tipos de listas

### Lista ordenada

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista no ordenada

- Elemento de lista
- Otro elemento
- Y otro elemento más

### Lista anidada

- Fruta
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso

## Otros elementos — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Supr</kbd> para terminar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras pequeñas criaturas.

## Imágenes

Además del [Shortcode Figure]({{< ref "../../docs/shortcodes#figure" >}}), puedes definir imágenes usando la siguiente sintaxis Markdown:

```md
![Texto alternativo](image.jpg "Pie de imagen")
```

![Texto alternativo](../../docs/shortcodes/abstract.jpg "Pie de imagen")

También puedes aprovechar los ['atributos Markdown'](https://gohugo.io/content-management/markdown-attributes/) de Hugo para agregar atributos personalizados al elemento HTML creado.
Por ejemplo, para establecer el ancho de una imagen al 50%:

```md
![Texto alternativo](image.jpg "Pie de imagen")
{style="width:50%;"}
```

![Texto alternativo](../../docs/shortcodes/abstract.jpg "Pie de imagen mitad de ancho")
{style="width:50%;"}

Ten en cuenta que la función de 'atributos Markdown' requiere configuración del renderizador Goldmark.
Consulta la [documentación](https://gohugo.io/content-management/markdown-attributes/) de Hugo para más información.
