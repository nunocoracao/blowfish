---
title: "Markdown"
date: 2019-03-11
description: "基本的な Markdown 構文と HTML 要素のフォーマットを紹介するサンプル記事です。"
tags: ["markdown", "css", "html", "sample"]
type: 'sample'
---

この記事は Blowfish を利用した基本的な Markdown フォーマットのサンプルを提供し、また基本的な HTML 要素がどのように装飾できるのかを示しています。

<!--more-->

## 見出し

こちらは HTML の `<h1>`—`<h6>` 要素に相当する6種類の見出しを使用できます。 `<h1>` が最大の見出しで、 `<h6>` に近づくほど小さくなっていきます。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## ブロック引用

ブロック引用要素は、他の情報元から引用された内容を表します。 `footer` または `cite` 要素を使った引用や、注釈や省略形などの変更を伴うことも可能です。

### 出典なしのブロック引用

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **ノート** ブロック構文では、 _Markdown 構文_ を利用可能です。

### 出典ありのブロック引用

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上記の引用は、2015年11月18日に開催された Gopherfest での Rob Pike’s の [`講演`](https://www.youtube.com/watch?v=PAAkCSZUG1c) からの抜粋です。

## テーブル

テーブルは Markdown の仕様には含まれていません。しかし Hugp はテーブルをすぐに利用できるようサポートしています。

| 名前  | 年齢 |
| ----- | ---- |
| Bob   | 27   |
| Alice | 23   |

### テーブルないのインライン Markdown

| 斜体   | 太字     | コード   |
| ------ | -------- | -------- |
| _斜体_ | **太字** | `コード` |

## コードブロック

### バックチックによるコードブロック

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 資料の例</title>
  </head>
  <body>
    <p>テスト</p>
  </body>
</html>
```

### タイトルと行ハイライト機能付きのコードブロック

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

## リスト形式

### 順序のあるリスト

1. 1つ目のアイテム
2. 2つ目のアイテム
3. 3つ目のアイテム

### 順序がないリスト

- リストアイテム
- 他のアイテム
- 他のアイテム

### 入れ子型リスト

- 果実
  - りんご
  - オレンジ
  - バナナ
- 乳製品
  - 牛乳
  - チーズ

## その他の要素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> はビットマップ画像フォーマットです。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd>を押すことでセッションを終了出来ます。

多くの<mark>サラマンダー</mark>は夜行性で、昆虫やミミズ、その他の生物を狩ります。

## Images

In addition to the [Figure Shortcode]({{< ref "../../docs/shortcodes#figure" >}}), you can define images using the following Markdown syntax:

```md
![Alt text](image.jpg "Image caption")
```

![Alt text](../../docs/shortcodes/abstract.jpg "Image caption")

You can also leverage Hugos ['Markdown attributes'](https://gohugo.io/content-management/markdown-attributes/) feature to add custom attributes to the created HTML element.
For example, to set the width of an image to 50%:

```md
![Alt text](image.jpg "Image caption")
{style="width:50%;"}
```

![Alt text](../../docs/shortcodes/abstract.jpg "Half width image caption")
{style="width:50%;"}

Note that the 'Markdown attributes' feature requires configuration of the Goldmark renderer.
See the Hugo [documentation](https://gohugo.io/content-management/markdown-attributes/) for more information.
