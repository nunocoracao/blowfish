---
title: "Markdown"
date: 2019-03-11
description: "Article exemple présentant la syntaxe Markdown de base et le formatage des éléments HTML."
tags: ["markdown", "css", "html", "exemple"]
type: 'sample'
---

Cet article propose un exemple de formatage Markdown de base utilisable dans Blowfish, et montre également comment certains éléments HTML de base sont décorés.

<!--more-->

## Titres

Les éléments HTML `<h1>`—`<h6>` suivants représentent six niveaux de titres de section. `<h1>` est le niveau de section le plus élevé tandis que `<h6>` est le plus bas.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraphe

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Citations

L'élément blockquote représente du contenu cité d'une autre source, optionnellement avec une citation qui doit être dans un élément `footer` ou `cite`, et optionnellement avec des modifications en ligne telles que des annotations et des abréviations.

### Citation sans attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** : vous pouvez utiliser la _syntaxe Markdown_ dans une citation.

### Citation avec attribution

> Ne communiquez pas en partageant la mémoire, partagez la mémoire en communiquant.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La citation ci-dessus est extraite de la [conférence `sur` rien](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike lors du Gopherfest, le 18 novembre 2015.

## Tableaux

Les tableaux ne font pas partie de la spécification Markdown de base, mais Hugo les prend en charge nativement.

| Nom   | Âge |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

### Markdown en ligne dans les tableaux

| Italique  | Gras     | Code   |
| --------- | -------- | ------ |
| _italique_ | **gras** | `code` |

## Blocs de code

### Bloc de code général

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

### Bloc de code avec titre et surlignage de lignes

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

## Types de listes

### Liste ordonnée

1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liste non ordonnée

- Élément de liste
- Autre élément
- Et encore un autre

### Liste imbriquée

- Fruits
  - Pomme
  - Orange
  - Banane
- Produits laitiers
  - Lait
  - Fromage

## Autres éléments — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Appuyez sur <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Suppr</kbd> pour terminer la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, les vers et autres petites créatures.

## Images

En plus du [Shortcode Figure]({{< ref "../../docs/shortcodes#figure" >}}), vous pouvez définir des images avec la syntaxe Markdown suivante :

```md
![Texte alternatif](image.jpg "Légende de l'image")
```

![Texte alternatif](../../docs/shortcodes/abstract.jpg "Légende de l'image")

Vous pouvez également utiliser les ['attributs Markdown'](https://gohugo.io/content-management/markdown-attributes/) de Hugo pour ajouter des attributs personnalisés à l'élément HTML créé.
Par exemple, pour définir la largeur d'une image à 50% :

```md
![Texte alternatif](image.jpg "Légende de l'image")
{style="width:50%;"}
```

![Texte alternatif](../../docs/shortcodes/abstract.jpg "Légende image demi-largeur")
{style="width:50%;"}

Notez que la fonctionnalité 'attributs Markdown' nécessite une configuration du moteur de rendu Goldmark.
Consultez la [documentation](https://gohugo.io/content-management/markdown-attributes/) Hugo pour plus d'informations.
