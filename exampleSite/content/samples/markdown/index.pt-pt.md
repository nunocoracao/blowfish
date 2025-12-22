---
title: "Markdown"
date: 2019-03-11
description: "Artigo de exemplo que apresenta a sintaxe básica de Markdown e formatação para elementos HTML."
tags: ["markdown", "css", "html", "exemplo"]
type: 'sample'
---

Este artigo oferece uma amostra da formatação básica de Markdown que pode ser utilizada no Blowfish, também mostra como alguns elementos HTML básicos são decorados.

<!--more-->

## Títulos

Os seguintes elementos HTML `<h1>`—`<h6>` representam seis níveis de títulos de secção. `<h1>` é o nível de secção mais elevado enquanto `<h6>` é o mais baixo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Parágrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Citações

O elemento blockquote representa conteúdo citado de outra fonte, opcionalmente com uma citação que deve estar dentro de um elemento `footer` ou `cite`, e opcionalmente com alterações em linha como anotações e abreviaturas.

### Citação sem atribuição

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota**: pode utilizar _sintaxe Markdown_ dentro de uma citação.

### Citação com atribuição

> Não comunique partilhando memória, partilhe memória comunicando.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima é um excerto da [palestra `sobre` nada](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante o Gopherfest, em 18 de novembro de 2015.

## Tabelas

As tabelas não fazem parte da especificação principal do Markdown, mas o Hugo suporta-as nativamente.

| Nome  | Idade |
| ----- | ----- |
| Bob   | 27    |
| Alice | 23    |

### Markdown em linha dentro de tabelas

| Itálico   | Negrito  | Código   |
| --------- | -------- | -------- |
| _itálico_ | **negrito** | `código` |

## Blocos de código

### Bloco de código geral

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

### Bloco de código com título e destaque de linhas

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

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista não ordenada

- Item da lista
- Outro item
- E mais um item

### Lista aninhada

- Frutas
  - Maçã
  - Laranja
  - Banana
- Lacticínios
  - Leite
  - Queijo

## Outros elementos — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Prima <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> para terminar a sessão.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, vermes e outras pequenas criaturas.

## Imagens

Para além do [Shortcode Figure]({{< ref "../../docs/shortcodes#figure" >}}), pode definir imagens utilizando a seguinte sintaxe Markdown:

```md
![Texto alternativo](image.jpg "Legenda da imagem")
```

![Texto alternativo](../../docs/shortcodes/abstract.jpg "Legenda da imagem")

Também pode utilizar os ['atributos Markdown'](https://gohugo.io/content-management/markdown-attributes/) do Hugo para adicionar atributos personalizados ao elemento HTML criado.
Por exemplo, para definir a largura de uma imagem para 50%:

```md
![Texto alternativo](image.jpg "Legenda da imagem")
{style="width:50%;"}
```

![Texto alternativo](../../docs/shortcodes/abstract.jpg "Legenda imagem metade da largura")
{style="width:50%;"}

Note que a funcionalidade de 'atributos Markdown' requer configuração do renderizador Goldmark.
Consulte a [documentação](https://gohugo.io/content-management/markdown-attributes/) do Hugo para mais informações.
