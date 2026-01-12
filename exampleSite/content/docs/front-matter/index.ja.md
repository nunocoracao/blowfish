---
title: "フロントマター"
weight: 7
draft: false
description: "Blowfish で利用可能なすべてのフロントマター変数。"
slug: "front-matter"
tags: ["front matter", "config", "docs"]
series: ["Documentation"]
series_order: 7
---

[デフォルトの Hugo フロントマターパラメータ](https://gohugo.io/content-management/front-matter/#front-matter-variables)に加えて、Blowfish は個々の記事の表示をカスタマイズするための追加オプションを多数用意しています。利用可能なテーマのフロントマターパラメータをすべて以下に示します。

フロントマターパラメータのデフォルト値は、テーマの[基本設定]({{< ref "configuration" >}})から継承されるため、デフォルトを上書きしたい場合にのみ、フロントマターでこれらのパラメータを指定する必要があります。

<!-- prettier-ignore-start -->
| 名前 | デフォルト | 説明 |
| --- | --- | --- |
| `title` | _未設定_ | 記事の名前。 |
| `description` | _未設定_ | 記事のテキスト説明。HTML メタデータで使用されます。 |
| `externalUrl` | _未設定_ | この記事がサードパーティのウェブサイトで公開されている場合、この記事への URL。URL を指定すると、コンテンツページの生成が妨げられ、この記事への参照はすべてサードパーティのウェブサイトに直接リンクされます。 |
| `editURL` | `article.editURL` | `showEdit` がアクティブな場合の、編集リンクの URL。 |
| `editAppendPath` | `article.editAppendPath` | `showEdit` がアクティブな場合、現在の記事へのパスを `editURL` で設定された URL に追加するかどうか。 |
| `groupByYear` | `list.groupByYear` | リストページで記事を年別にグループ化するかどうか。 |
| `menu` | _未設定_ | 値を指定すると、この記事へのリンクが名前付きメニューに表示されます。有効な値は `main` または `footer` です。 |
| `robots` | _未設定_ | ロボットがこの記事をどのように処理するかを示す文字列。設定されている場合、ページヘッドに出力されます。有効な値については、[Google のドキュメント](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)を参照してください。 |
| `sharingLinks` | `article.sharingLinks` | この記事の最後に表示する共有リンク。指定されていない場合、または `false` に設定されている場合、リンクは表示されません。 |
| `showAuthor` | `article.showAuthor` | 記事のフッターにデフォルトの著者の著者ボックスを表示するかどうか。 |
| `showAuthorBottom` | `article.showAuthorBottom` | 著者ボックスは、各ページの上部ではなく下部に表示されます。 |
| `authors` | _未設定_ | 著者の値の配列。設定されている場合、ページまたはサイトの `showAuthor` 設定を上書きします。複数人の著者機能で使用されます。この機能の設定方法の詳細については、[このページ]({{< ref "multi-author" >}})をご覧ください。 |
| `showAuthorsBadges` | `article.showAuthorsBadges` | 記事またはリストヘッダーに `authors` タクソノミーを表示するかどうか。これには、`複数人の著者` と `authors` タクソノミーの設定が必要です。この機能の設定方法の詳細については、[このページ]({{< ref "multi-author" >}})をご覧ください。 |
| `featureimage` | _未設定_ | フィーチャー画像の外部リンク。 |
| `featureimagecaption` | _未設定_ | フィーチャー画像のキャプション。heroStyle `big` でのみ表示されます。 |
| `showHero` | `article.showHero` | 記事ページ内でサムネイル画像をヒーロー画像として表示するかどうか。 |
| `heroStyle` | `article.heroStyle` | ヒーロー画像の表示スタイル。有効なオプションは、`basic`、`big`、`background`、`thumbAndBackground` です。 |
| `imagePosition` | _未設定_ | `object-position` 属性を使用してフィーチャー画像の位置を設定します。有効な値は [MDN ドキュメント](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it) に記載されています。 |
| `showBreadcrumbs` | `article.showBreadcrumbs` <br/>または `list.showBreadcrumbs` | 記事またはリストヘッダーにパンくずリストを表示するかどうか。 |
| `showDate` | `article.showDate` | 記事の日付を表示するかどうか。日付は `date` パラメータを使用して設定されます。 |
| `showDateUpdated` | `article.showDateUpdated` | 記事が更新された日付を表示するかどうか。日付は `lastmod` パラメータを使用して設定されます。 |
| `showEdit` | `article.showEdit` | 記事コンテンツを編集するためのリンクを表示するかどうか。 |
| `showHeadingAnchors` | `article.showHeadingAnchors` | この記事の見出しの横に見出しアンカーリンクを表示するかどうか。 |
| `showPagination` | `article.showPagination` | 記事のフッターに次/前の記事へのリンクを表示するかどうか。 |
| `invertPagination` | `article.invertPagination` | 次/前の記事へのリンクの方向を反転するかどうか。 |
| `showReadingTime` | `article.showReadingTime` | 記事の閲覧時間を表示するかどうか。 |
| `showTaxonomies` | `article.showTaxonomies` | この記事に関連するタクソノミーを表示するかどうか。 |
| `showTableOfContents` | `article.showTableOfContents` | この記事に目次を表示するかどうか。 |
| `showWordCount` | `article.showWordCount` | 記事の単語数を表示するかどうか。 |
| `showComments` | `article.showComments` | 記事のフッターの後に[コメントパーシャル]({{< ref "partials#comments" >}})を含めるかどうか。 |
| `showSummary` | `list.showSummary` | リストページに記事の要約を表示するかどうか。 |
| `showViews` | `article.showViews` | リストと詳細ビューに記事の閲覧数を表示するかどうか。これには Firebase の統合が必要です。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})をご覧ください。 |
| `showLikes` | `article.showLikes` | リストと詳細ビューに記事のいいねを表示するかどうか。これには Firebase の統合が必要です。Firebase を Blowfish に統合する方法については、[このページ]({{< ref "firebase-views" >}})をご覧ください。 |
| `seriesOpened` | `article.seriesOpened` | シリーズモジュールをデフォルトで開いて表示するかどうか。 |
| `series` | _未設定_ | 記事が属するシリーズの配列。記事ごとに 1 つのシリーズのみを使用することをお勧めします。 |
| `series_order` | _未設定_ | シリーズ内の記事の番号。 |
| `summary` | `summaryLength` を使用して自動生成されます ([サイト設定]({{< ref "configuration#site-configuration" >}})を参照) | `showSummary` が有効な場合、この記事の要約として使用される Markdown 文字列。 |
| `xml` | `sitemap.excludedKinds` によって除外されない限り `true` | この記事が生成された `/sitemap.xml` ファイルに含まれるかどうか。 |
| `layoutBackgroundBlur` | `true` | background heroStyle の背景画像をスクロールでぼかします |
| `layoutBackgroundHeaderSpace` | `true` | ヘッダーと本文の間にスペースを追加します |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | マークダウン内の外部リンクを新しいタブで開くかどうかです。 |
<!-- prettier-ignore-end -->
