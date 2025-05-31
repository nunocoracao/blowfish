---
title: "ショートコード"
weight: 6
draft: false
description: "Blowfish で使えるすべてのショートコード"
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
series: ["Documentation"]
series_order: 8
---

[デフォルトの Hugo ショートコード](https://gohugo.io/content-management/shortcodes/)に加えて、Blowfish は機能拡張のためにいくつか独自のものを追加しています。

## アラート

`alert` ショートコードを使うと、記事の中にスタイリッシュなメッセージボックスを表示できます。読者に見逃してほしくない重要な情報を目立たせるのに便利です。

<!-- prettier-ignore-start -->
| パラメータ   | 説明                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`      | **オプション** 左端に表示するアイコン。<br>**デフォルト:** `exclamation triangle icon` (アイコンの使用方法の詳細については、[アイコンショートコード](#アイコン)をご覧ください。)                    |
| `iconColor` | **オプション** 基本的な CSS スタイルのアイコンの色。<br>HEX値 (`#FFFFFF`) または色の名前 (`white`) のいずれかで指定できます。<br>デフォルトでは、現在のカラースキームに基づいて選択されます。            |
| `cardColor` | **オプション** 基本的な CSS スタイルのカードの背景色。<br>HEX値 (`#FFFFFF`) または色の名前 (`white`) のいずれかを指定できます。<br>デフォルトでは、現在のカラースキームに基づいて選択されます。 |
| `textColor` | **オプション** 基本的な CSS スタイルのテキストの色。<br>HEX値 (`#FFFFFF`) または色の名前 (`white`) のいずれかを指定できます。<br>デフォルトでは、現在のカラースキームに基づいて選択されます。            |
<!-- prettier-ignore-end -->

入力は Markdown で記述されているため、自由にフォーマットできます。

**例1:** パラメータなし

```md
{{</* alert */>}}
**警告!** この行為は破壊的です!
{{</* /alert */>}}
```

{{< alert >}}
**警告!** この行為は破壊的です!
{{< /alert >}}

**例2:** 名前なしパラメータ

```md
{{</* alert "twitter" */>}}
Twitter で私を[フォロー](https://twitter.com/nunocoracao)するのを忘れないでください。
{{</* /alert */>}}
```

{{< alert "twitter" >}}
Twitter で私を[フォロー](https://twitter.com/nunocoracao)するのを忘れないでください。
{{< /alert >}}

**例3:** 名前付きパラメータ

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
これはエラーです!
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
これはエラーです!
{{< /alert >}}

<br/><br/><br/>

## 記事

`Article` は、1つの記事を Markdown ファイルに埋め込みます。埋め込むファイルへの `link` は、埋め込むファイルの `.RelPermalink` である必要があります。ショートコードは、親を参照している場合は何も表示しないことに注意してください。*注: Blowfish (/blowfish/ など) のようなサブフォルダでウェブサイトを実行している場合は、そのパスをリンクに含めてください。*

<!-- prettier-ignore-start -->
| パラメータ | 説明                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **必須** ターゲット記事への `.RelPermalink`。 |
<!-- prettier-ignore-end -->

**例:**

```md
{{</* article link="/docs/welcome/" */>}}
```

{{< article link="/docs/welcome/" >}}

<br/><br/><br/>

## バッジ

`badge` は、メタデータを表示するのに役立つ、スタイリッシュなバッジを出力します。

**例:**

```md
{{</* badge */>}}
新しい記事!
{{</* /badge */>}}
```

{{< badge >}}
新しい記事!
{{< /badge >}}

<br/><br/><br/>

## ボタン

`button` は、主要なアクションを強調するために使用できる、スタイリッシュなボタンコンポーネントを出力します。リンクの URL、ターゲット、および関係を指定するために使用できる、3 つのオプション変数 `href`、`target`、`rel` があります。

**例:**

```md
{{</* button href="#button" target="_self" */>}}
アクションを呼び出す
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
アクションを呼び出す
{{< /button >}}

<br/><br/><br/>

## カルーセル

`carousel` は、複数の画像をインタラクティブで魅力的に表示するために使用されます。これにより、ユーザーは画像1枚分の縦方向のスペースのみを使って、複数の画像をスライドさせながら表示できます。すべての画像は、親コンポーネントの幅いっぱいに表示され、`16:9`、`21:9`、または `32:9` の事前に決められたアスペクト比のいずれかを使用して表示されます。

<!-- prettier-ignore-start -->
| パラメータ     | 説明                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `images`      | **必須** 画像名または URL に一致する正規表現文字列。                                                        |
| `aspectRatio` | **オプション** カルーセルのアスペクト比。`16-9`、`21-9`、または `32-9` のいずれか。デフォルトでは `16-9` に設定されています。 |
| `interval`    | **オプション** 自動スクロールの間隔。ミリ秒単位で指定します。デフォルトは `2000` (2秒) です。             |
<!-- prettier-ignore-end -->

**例1:** 16:9 のアスペクト比と冗長な画像のリスト

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg, gallery/03.jpg, gallery/01.jpg, gallery/02.jpg, gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**例2:** 21:9 のアスペクト比と正規表現による画像のリスト

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## チャート

`chart` は Chart.js ライブラリを使用して、シンプルな構造化データを使用して記事にチャートを埋め込みます。[さまざまなチャートスタイル](https://www.chartjs.org/docs/latest/samples/)をサポートしており、すべてをショートコード内から設定できます。ショートコードタグの間にチャートパラメータを指定するだけで、Chart.js が残りの処理を行います。

構文とサポートされているチャートタイプの詳細については、[公式 Chart.js ドキュメント](https://www.chartjs.org/docs/latest/general/)を参照してください。

**例:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['トマト', 'ブルーベリー', 'バナナ', 'ライム', 'オレンジ'],
  datasets: [{
    label: '# 投票数',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['トマト', 'ブルーベリー', 'バナナ', 'ライム', 'オレンジ'],
  datasets: [{
    label: '# 投票数',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

[チャートのサンプル]({{< ref "charts" >}})ページで、Chart.js の他の例を見ることができます。

<br/><br/><br/>

## コードインポーター

このショートコードは、コピーアンドペーストせずに外部ソースから簡単にコードをインポートするためのものです。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **必須** 外部でホストされているコードファイルへの URL。     |
| `type`    | 構文の強調表示に使用されるコードタイプ。                 |
| `startLine` | **オプション** インポートを開始する行番号。    |
| `endLine` | **オプション** インポートを終了する行番号。        |

<!-- prettier-ignore-end -->

**例:**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```
{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}


<br/><br/>

## Codeberg カード

`codeberg` を使用すると、Codeberg API を介して Codeberg リポジトリをすばやくリンクでき、スターやフォークなどの統計に関するリアルタイムの更新を提供できます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [文字列] `username/repo` 形式の Codeberg リポジトリ |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```
{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

Blowfish には、コンテンツに画像を追加するための `figure` ショートコードが含まれています。このショートコードは、追加のパフォーマンス上の利点を提供するために、基本の Hugo 機能を置き換えます。

提供された画像がページリソースである場合、Hugo Pipes を使用して最適化され、さまざまなデバイス解像度に適した画像を提供するために拡大縮小されます。静的アセットまたは外部画像への URL が提供された場合、Hugo による画像処理なしにそのまま含まれます。

`figure` ショートコードは、6つのパラメータを受け付けます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`     | **必須** 画像のローカルパス/ファイル名または URL。パスとファイル名を指定すると、テーマは次の優先順位を使用して画像の特定を試みます。まず、ページにバンドルされた[ページリソース](https://gohugo.io/content-management/page-resources/)として、次に `assets/` ディレクトリ内のアセット、最後に `static/` ディレクトリ内の静的画像。 |
| `alt`     | 画像の[代替テキスト](https://moz.com/learn/seo/alt-text)。                                                                                                                                                                                                                                                                                                         |
| `caption` | 画像の下に表示される画像キャプションの Markdown。                                                                                                                                                                                                                                                                                                                  |
| `class`   | 画像に適用する追加の CSS クラス。                                                                                                                                                                                                                                                                                                                                             |
| `href`    | 画像をリンクする URL。                                                                                                                                                                                                                                                                                                                                                   |
| `target`  | `href` URL のターゲット属性。                                                                                                                                                                                                                                                                                                                                                  |
| `nozoom`  | `nozoom=true` は、画像の「ズーム」機能を無効にします。これは、`href` リンクと組み合わせて使用​​するのが最も役立ちます。                                                                                                                                                                                                                                                                             |
| `default` | Hugoのデフォルトの `figure` の動作に戻すための特別なパラメータ。`default=true` を指定し、通常の [Hugo ショートコード構文](https://gohugo.io/content-management/shortcodes/#figure)を使用します。                                                                                                                                                                                       |
<!-- prettier-ignore-end -->

Blowfish も、標準の Markdown 構文を使用して含まれる画像の自動変換もサポートしています。次の形式を使用するだけで、テーマが処理してくれます。

```md
![代替テキスト](image.jpg "画像キャプション")
```

**例:**

```md
{{</* figure
    src="abstract.jpg"
    alt="抽象的な紫のアートワーク"
    caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)"
    */>}}

<!-- または -->

![抽象的な紫のアートワーク](abstract.jpg "Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="抽象的な紫のアートワーク" caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Forgejo カード

`forgejo` を使用すると、forgejo API を介して Forgejo リポジトリをすばやくリンクでき、スターやフォークなどの統計をリアルタイムで更新できます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [文字列] `username/repo` 形式の forgejo リポジトリ|
| `server`  | [文字列] `https://v8.next.forgejo.org` のようなサーバー URL|
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* forgejo server="https://v8.next.forgejo.org" repo="forgejo/forgejo" */>}}
```
{{< forgejo server="https://v8.next.forgejo.org" repo="forgejo/forgejo" >}}

<br/><br/><br/>

## ギャラリー

`gallery` を使用すると、複数の画像を一度に、レスポンシブな方法で、より多様で興味深いレイアウトで紹介できます。

ギャラリーに画像を追加するには、各画像に `img` タグを使用し、ギャラリーが各画像の列幅を識別できるように `class="grid-wXX"` を追加します。デフォルトで使用可能な幅は 10% から始まり、5% 刻みで最大 100% までです。たとえば、幅を 65% に設定するには、クラスを `grid-w65` に設定します。さらに、3列のギャラリーを構築するために、33% と 66% の幅も使用できます。また、tailwind +のレスポンシブインジケーターを活用して、レスポンシブグリッドを作成することもできます。

**例1: 通常のギャラリー**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>

**例2: レスポンシブギャラリー**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

`gist`ショートコードは、Gistのユーザー名、ID、必要に応じて特定のファイル名を指定することで、GitHub Gistをコンテンツに直接埋め込むことができます。

| パラメーター   | 説明                             |
| ------------ | -------------------------------- |
| `[0]`        | \[文字列] GitHubのユーザー名        |
| `[1]`        | \[文字列] GistのID                |
| `[2]`（オプション） | \[文字列] Gist内で埋め込む特定のファイル名（オプション） |

**例1：Gist全体を埋め込む**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
```

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**例2：Gistの特定ファイルを埋め込む**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

## Gitea カード

`gitea` を使用すると、gitea API を介して Gitea リポジトリをすばやくリンクでき、スターやフォークなどの統計に関するリアルタイムに更新できます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [文字列] `username/repo` 形式の gitea リポジトリ  |
| `server`  | [文字列] `https://git.fsfe.org` のようなサーバー URL       |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```
{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub カード

`github` を使用すると、github リポジトリをすばやくリンクでき、スター数やフォーク数などの統計情報をリアルタイムで表示および更新できます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [文字列] `username/repo` 形式の github リポジトリ |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* github repo="nunocoracao/blowfish" */>}}
```

{{< github repo="nunocoracao/blowfish" >}}

<br/><br/><br/>

## GitLab カード

`gitlab` を使用すると、GitLab プロジェクト (リポジトリの GitLab 用語) をすばやくリンクできます。
スター数やフォーク数などのリアルタイムの統計情報を表示します。
`github` とは異なり、プロジェクトの主要なプログラミング言語を表示することはできません。
最後に、`api/v4/projects/` エンドポイントが利用可能である限り、カスタム GitLab インスタンス URL を指定できるため、このショートコードはほとんどのセルフホスト/エンタープライズデプロイメントと互換性があります。

<!-- prettier-ignore-start -->
| パラメータ   | 説明                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `projectID` | [文字列] GitLab の数値 ProjectID                                       |
| `baseURL`   | [文字列] オプションの GitLab インスタンス URL。デフォルトは `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## アイコン

`icon` は SVG アイコンを出力し、アイコン名を唯一のパラメータとして受け取ります。アイコンは、現在のテキストサイズに合わせてスケーリングされます。

**例:**

```md
{{</* icon "github" */>}}
```

**出力:** {{< icon "github" >}}

アイコンは Hugo パイプラインを使用して設定されるため、非常に柔軟です。Blowfish には、ソーシャル、リンク、その他の目的のための組み込みアイコンが多数含まれています。サポートされているアイコンの完全なリストについては、[アイコンのサンプル]({{< ref "samples/icons" >}})ページを確認してください。

カスタムアイコンは、プロジェクトの `assets/icons/` ディレクトリに独自のアイコンアセットを提供することで追加できます。その後、`.svg` 拡張子なしで SVG ファイル名を使用して、ショートコードでアイコンを参照できます。

アイコンは、[アイコンパーシャル]({{< ref "partials#アイコン" >}})を呼び出すことで、パーシャルでも使用できます。

<br/><br/><br/>

## KaTeX

`katex` ショートコードを使用すると、KaTeX パッケージを使用して記事のコンテンツに数式を追加できます。利用可能な構文については、[サポートされている TeX 関数](https://katex.org/docs/supported.html)のオンラインリファレンスを参照してください。

記事に数式を含めるには、コンテンツを含むショートコードを任意の場所に配置するだけです。記事ごとに1回だけ含める必要があり、KaTeX はそのページのマークアップを自動的にレンダリングします。インライン表記とブロック表記の両方がサポートされています。

インライン表記は、式を `\(` と `\)` デリミタで囲むことで生成できます。また、ブロック表記は `$$` デリミタを使用して生成できます。

**例:**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

[数式表記のサンプル]({{< ref "mathematical-notation" >}})ページで、その他の例を確認できます。

<br/><br/><br/>

## キーワード

`keyword` コンポーネントは、特定の重要な単語やフレーズ、例えばプロフェッショナルスキルなどを視覚的に強調表示するために使用できます。`keywordList` ショートコードは、複数の `keyword` アイテムをグループ化するために使用できます。各アイテムには、次のプロパティを設定できます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                             |
| --------- | --------------------------------------- |
| `icon`    | キーワードで使用するオプションのアイコン |
<!-- prettier-ignore-end -->

入力は Markdown で記述されているため、自由にフォーマットできます。

**例1 :**

```md
{{</* keyword */>}} *スーパー* スキル {{</* /keyword */>}}
```

{{< keyword >}} *スーパー* スキル {{< /keyword >}}

**例2 :**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} **大事な** スキル {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} *スタンドアロン* スキル {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} **大事な** スキル {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} *スタンドアロン* スキル {{< /keyword >}}

<br/><br/><br/>

## リード文

`lead` は、記事の冒頭を強調するために使用されます。導入部分をスタイルしたり、重要な情報を呼び出したりするために使用できます。Markdown コンテンツを `lead` ショートコードで囲むだけです。

**例:**

```md
{{</* lead */>}}
ピンチはチャンス。
{{</* /lead */>}}
```

{{< lead >}}
ピンチはチャンス。
{{< /lead >}}

<br/><br/><br/> 

## リスト

`List` は、最近の記事のリストを表示します。このショートコードには、リストを制限するための制限値が必要です。さらに、記事をパラメータでフィルタリングするために、`where` と `value` をサポートしています。このショートコードは、その親ページを表示しませんが、制限値にはカウントされることに注意してください。

<!-- prettier-ignore-start -->
| パラメータ  | 説明                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`    | **必須** 表示する最近の記事の数。                                                                                                 |
| `title`    | オプションのリストのタイトル。デフォルトは `Recent` です。                                                                                                        |
| `cardView` | オプションのカードビュー。リストに対して有効化されます。デフォルトは `false` です。                                                                                             |
| `where`    | 記事のクエリに使用される変数。例: `Type`                                                                                           |
| `value`    | `where` で定義されたパラメータに一致する必要がある値。記事のクエリに使用されます。例: `where` == `Type` の場合、有効な値は `sample` です。 |

{{< alert >}}
`where` と `value` の値は、ショートコードのコードで次のクエリ `where .Site.RegularPages $where $value` で使用されます。使用可能なパラメータの詳細については、[Hugo ドキュメント](https://gohugo.io/methods/page/)を確認してください。
{{</ alert >}}

<!-- prettier-ignore-end -->

**例 #1:**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**例 #2:**

```md
{{</* list title="サンプル" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="サンプル" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## LTR/RTL

`ltr` と `rtl` を使用すると、それぞれのコンテンツを混在させることができます。多くの RTL 言語ユーザーは、コンテンツの一部に LTR を含めたいと考えています。このショートコードを使用するとそれを行うことができ、[Hugo ショートコード](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown)の最も外側の要素として `%` を活用することで、内部のマークダウンは通常どおりレンダリングされます。

**例:**

```md
- これは Markdown のリストです。
- デフォルトでは LTR 方向です。
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- これは Markdown のリストです。
- デフォルトでは LTR 方向です。
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown インポーター

このショートコードを使用すると、外部のソースからマークダウンファイルをインポートできます。これは、コンテンツをコピー&ペーストすることなく、他のリポジトリやウェブサイトからコンテンツを含めるのに役立ちます。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **必須** 外部でホストされている Markdown ファイルへの URL。 |

<!-- prettier-ignore-end -->

**例:**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

## Mermaid

`mermaid` を使用すると、テキストを使用して詳細な図や視覚化を描画できます。内部で Mermaid を使用し、さまざまな図、チャート、その他の出力形式をサポートしています。

`mermaid` ショートコード内に Mermaid 構文を記述するだけで、プラグインが残りの処理を行います。

構文とサポートされている図の種類の詳細については、[公式 Mermaid ドキュメント](https://mermaid-js.github.io/)を参照してください。

**例:**

```md
{{</* mermaid */>}}
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
{{< /mermaid >}}

[図とフローチャートのサンプル]({{< ref "diagrams-flowcharts" >}})ページで、Mermaid の追加の例を見ることができます。

<br/><br/><br/>

## 色の見本

`swatches` は、カラーパレットなどのカラー要素を紹介するために、最大3つの異なる色のセットを出力します。このショートコードは、各色の `HEX` コードを受け取り、それぞれの視覚要素を作成します。

**例**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**出力**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## タイムライン

`timeline` は、さまざまなユースケース (例: 職務経歴、プロジェクトの成果など) で使用できる視覚的なタイムラインを作成します。`timeline` ショートコードは、メインタイムライン内の各アイテムを定義するために `timelineItem` サブショートコードに依存しています。各アイテムには、次のプロパティを設定できます。

<!-- prettier-ignore-start -->
| パラメータ   | 説明                                  |
| ----------- | -------------------------------------------- |
| `icon`      | タイムラインのビジュアルで使用するアイコン |
| `header`    | 各エントリのヘッダーー                        |
| `badge`     | 右上のバッジ内に配置するテキスト     |
| `subheader` | エントリのサブヘッダー                            |

<!-- prettier-ignore-end -->

**例:**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="ヘッダー" badge="バッジテスト" subheader="サブヘッダー" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus. 
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="もう1つの素晴らしいヘッダー" badge="日付 - 現在" subheader="素晴らしいサブヘッダー" */>}}
HTML コード付き
<ul>
  <li>コーヒー</li>
  <li>紅茶</li>
  <li>牛乳</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="ショートコード" badge="素晴らしい" */>}}
他のショートコード付き
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="もう1つの素晴らしいヘッダー"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="ヘッダー" badge="バッジテスト" subheader="サブヘッダー" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus. 
{{< /timelineItem >}}

{{< timelineItem icon="code" header="もう1つの素晴らしいヘッダー" badge="日付 - 現在" subheader="素晴らしいサブヘッダー">}}
HTML コード付き
<ul>
  <li>コーヒー</li>
  <li>紅茶</li>
  <li>牛乳</li>
</ul>
{{< /timelineItem >}}

{{< timelineItem icon="star" header="ショートコード" badge="素晴らしい" >}}
他のショートコード付き
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}
{{< timelineItem icon="code" header="もう1つの素晴らしいヘッダー">}}
{{< github repo="nunocoracao/blowfish" >}}
{{< /timelineItem >}}
{{< /timeline >}}

<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) は、この地球上で最も用途の広い、タイプライターエフェクトを作成するための JavaScript ツールです。簡単な設定で、行を分割したり、相互に削除および置換したりする単一または複数の文字列を入力でき、複雑な HTML を含む文字列も処理できます。

Blowfish は、`shortcode` を使用して TypeIt 機能のサブセットを実装しています。`typeit` ショートコード内にテキストを記述し、次のパラメータを使用して、必要な動作を設定します。

<!-- prettier-ignore-start -->
| パラメータ          | 説明                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tag`              | [文字列] 文字列のレンダリングに使用される `html` タグ。                                                                                       |
| `classList`        | [文字列] `html` 要素に適用する `css` クラスのリスト。                                                                                     |
| `initialString`    | [文字列] 書き込まれて表示され、置き換えられる初期文字列。                                                                             |
| `speed`            | [数値] 各ステップ間のミリ秒単位で測定されるタイピング速度。                                                                                 |
| `lifeLike`         | [ブール値] 実際の人間が行っているかのように、タイピングのペースを不規則にします。                                                                        |
| `startDelay`       | [数値] プラグインが初期化されてからタイピングを開始するまでの時間。                                                               |
| `breakLines`       | [ブール値] 複数の文字列が互いに上に印刷されるか (true)、削除されて互いに置き換えられるか (false)。              |
| `waitUntilVisible` | [ブール値] インスタンスがロードされたときに開始するか、ターゲット要素がビューポートに表示されたときにのみ開始するかを決定します。デフォルトは `true` です。 |
| `loop`             | [ブール値] 文字列が完了後に継続的にループするかどうか。                                                                             |

<!-- prettier-ignore-end -->

**例1:**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet 
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**例2:**

```md
{{</* typeit 
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**例3:**

```md
{{</* typeit 
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
"正直言って、俺の知ったこっちゃない。" 風と共に去りぬ (1939)
"イヤとは言わせない。" ゴッドファーザー (1972)
"トト、私たちもうカンザスにいないみたい。" オズの魔法使い (1939)
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"正直言って、俺の知ったこっちゃない。" 風と共に去りぬ (1939)
"イヤとは言わせない。" ゴッドファーザー (1972)
"トト、私たちもうカンザスにいないみたい。" オズの魔法使い (1939)
{{< /typeit >}}

<br/><br/><br/>

## Youtube Lite

[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) ライブラリを使用して YouTube 動画を埋め込むためのショートカット。このライブラリは、標準の YouTube 埋め込みの軽量な代替手段であり、より高速で効率的になるように設計されています。

<!-- prettier-ignore-start -->
| パラメータ | 説明                                  |
| --------- | -------------------------------------------- |
| `id`      | [文字列] 埋め込む YouTube 動画の ID。          |
| `label`   | [文字列] 動画のラベル                 |
| `params`  | [文字列] 動画再生のための追加パラメータ |
<!-- prettier-ignore-end -->

**例1:**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**例2:**

以下に示すように、`params` 変数に Youtube のすべての[プレーヤーパラメータ](https://developers.google.com/youtube/player_parameters#Parameters)を使用できます。

> この動画は130秒(2分10秒)後に開始されます。

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130" */>}}
```

> この動画には UI コントロールがなく、130秒後に再生が開始され、10秒後に停止します。

以下に示すように複数のオプションを連結するには、それらの間に `&` 文字を追加する必要があります。

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

詳細については、[youtubeLite GitHub リポジトリ](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters)および Youtube の[プレーヤーパラメータ](https://developers.google.com/youtube/player_parameters#Parameters)ページを参照してください。
