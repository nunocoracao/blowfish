---
title: "Markdown"
date: 2019-03-11
description: "Beispielartikel zur grundlegenden Markdown-Syntax und Formatierung für HTML-Elemente."
tags: ["markdown", "css", "html", "beispiel"]
type: 'sample'
---

Dieser Artikel bietet ein Beispiel für grundlegende Markdown-Formatierung, die in Blowfish verwendet werden kann, und zeigt auch, wie einige grundlegende HTML-Elemente gestaltet werden.

<!--more-->

## Überschriften

Die folgenden HTML-Elemente `<h1>`—`<h6>` repräsentieren sechs Ebenen von Abschnittsüberschriften. `<h1>` ist die höchste Abschnittsebene, während `<h6>` die niedrigste ist.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Absatz

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Zitate

Das Blockquote-Element repräsentiert Inhalte, die aus einer anderen Quelle zitiert werden, optional mit einer Quellenangabe, die innerhalb eines `footer`- oder `cite`-Elements stehen muss, und optional mit Inline-Änderungen wie Anmerkungen und Abkürzungen.

### Zitat ohne Quellenangabe

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Hinweis**: Sie können _Markdown-Syntax_ innerhalb eines Zitats verwenden.

### Zitat mit Quellenangabe

> Kommunizieren Sie nicht durch gemeinsamen Speicher, teilen Sie Speicher durch Kommunikation.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Das obige Zitat stammt aus Rob Pikes [Vortrag `über` nichts](https://www.youtube.com/watch?v=PAAkCSZUG1c) während des Gopherfest am 18. November 2015.

## Tabellen

Tabellen sind nicht Teil der Kern-Markdown-Spezifikation, aber Hugo unterstützt sie standardmäßig.

| Name  | Alter |
| ----- | ----- |
| Bob   | 27    |
| Alice | 23    |

### Inline-Markdown in Tabellen

| Kursiv    | Fett     | Code   |
| --------- | -------- | ------ |
| _kursiv_  | **fett** | `code` |

## Code-Blöcke

### Allgemeiner Code-Block

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

### Code-Block mit Titel und Zeilenhervorhebung

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

## Listentypen

### Geordnete Liste

1. Erstes Element
2. Zweites Element
3. Drittes Element

### Ungeordnete Liste

- Listenelement
- Weiteres Element
- Und noch ein Element

### Verschachtelte Liste

- Obst
  - Apfel
  - Orange
  - Banane
- Milchprodukte
  - Milch
  - Käse

## Andere Elemente — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> ist ein Bitmap-Bildformat.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Drücken Sie <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>Entf</kbd>, um die Sitzung zu beenden.

Die meisten <mark>Salamander</mark> sind nachtaktiv und jagen nach Insekten, Würmern und anderen kleinen Kreaturen.

## Bilder

Zusätzlich zum [Figure-Shortcode]({{< ref "../../docs/shortcodes#figure" >}}) können Sie Bilder mit der folgenden Markdown-Syntax definieren:

```md
![Alt-Text](image.jpg "Bildunterschrift")
```

![Alt-Text](../../docs/shortcodes/abstract.jpg "Bildunterschrift")

Sie können auch Hugos ['Markdown-Attribute'](https://gohugo.io/content-management/markdown-attributes/) nutzen, um benutzerdefinierte Attribute zum erstellten HTML-Element hinzuzufügen.
Um beispielsweise die Breite eines Bildes auf 50% zu setzen:

```md
![Alt-Text](image.jpg "Bildunterschrift")
{style="width:50%;"}
```

![Alt-Text](../../docs/shortcodes/abstract.jpg "Bildunterschrift halbe Breite")
{style="width:50%;"}

Beachten Sie, dass die 'Markdown-Attribute'-Funktion eine Konfiguration des Goldmark-Renderers erfordert.
Weitere Informationen finden Sie in der Hugo-[Dokumentation](https://gohugo.io/content-management/markdown-attributes/).
