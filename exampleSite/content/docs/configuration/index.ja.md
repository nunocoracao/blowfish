---
title: "設定"
weight: 4
draft: false
description: "Blowfish で使用可能なすべての設定変数"
slug: "configuration"
tags: ["config", "docs"]
series: ["Documentation"]
series_order: 4
---

Blowfish は高度にカスタマイズ可能なテーマであり、最新の Hugo 機能を使用して設定方法をシンプルにしています。

このテーマには、基本的なブログまたは静的 Web サイトをすぐに立ち上げて実行できるデフォルト設定が付属しています。

{{< alert "fire" >}}
Blowfish を簡単に使い始められるように、新しい CLI ツールをリリースしました。インストールと設定に役立ちます。 グローバルに CLI ツールをインストールするには、以下を使用します。

```bash
npx blowfish-tools
```

{{< /alert >}}

> テーマにバンドルされている設定ファイルは、デフォルトの Hugo 構文である TOML 形式で提供されています。必要に応じて、設定を YAML または JSON に変換できます。

デフォルトのテーマ設定は各ファイルに記載されているため、必要に応じて設定を自由に調整できます。

{{< alert >}}
[インストール手順]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}) で概説されているように、Hugo プロジェクトの `config/_default/` フォルダ内のファイルを修正し、プロジェクトルートの `config.toml` ファイルを削除することで、テーマ設定を調整する必要があります。
{{< /alert >}}

## サイト設定

テーマ全体で標準の Hugo 設定変数が適用されますが、最適なエクスペリエンスを得るために設定する必要がある特定の事項があります。

サイト設定は `config/_default/config.toml` ファイルで管理されます。 下の表は、Blowfish が活用するすべての設定の概要を示しています。

この表で提供されている変数名は、TOML データ構造を簡素化するためにドット表記を使用していることに注意してください（つまり、 `outputs.home` は `[outputs] home` を指します）。

<!-- prettier-ignore-start -->
| Name | Default | Description |
|---|---|---|
| `theme` | `"blowfish"` | Hugo Modules を使用している場合は、この設定値を削除する必要があります。 他のすべてのインストールタイプでは、テーマが機能するためにこれを `blowfish` に設定する必要があります。 |
| `baseURL` | _設定なし_ | Webサイトのルートへの URL です。 |
| `defaultContentLanguage` | `"en"` | この値は、テーマコンポーネントとコンテンツのデフォルト言語を決定します。 サポートされている言語コードについては、以下の [言語と i18n](#language-and-i18n) セクションを参照してください。 |
| `enableRobotsTXT` | `true` | 有効にすると、検索エンジンがサイト全体をクロールできるようにする `robots.txt` ファイルがサイトルートに作成されます。 あらかじめ作成した独自の `robots.txt` を提供する場合は、`false` に設定し、ファイルを `static` ディレクトリに配置します。 完全に制御するには、このファイルを生成するための [カスタムレイアウト]({{< ref "content-examples#custom-layouts" >}}) を提供できます。 |
| `pagination.pagerSize` | `10` | 記事リストの各ページにリストされる記事の数です。 |
| `summaryLength` | `0` | [フロントマター]({{< ref "front-matter" >}}) で提供されていない場合に、記事の概要を生成するために使用される単語の数です。 値 `0` は最初の文を使用します。 概要が非表示になっている場合、この値は効果がありません。 |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | サイト用に生成される出力形式です。 Blowfish では、すべてのテーマコンポーネントが正しく機能するために HTML、RSS、JSON が必要です。 |
| `permalinks` | _設定なし_ | パーマリンクの設定については、[Hugo ドキュメント](https://gohugo.io/content-management/urls/#permalinks) を参照してください。 |
| `taxonomies` | _設定なし_ | タクソノミーの設定については、[コンテンツの整理]({{< ref "getting-started#organising-content" >}}) セクションを参照してください。 |
<!-- prettier-ignore-end -->


## Thumbnails

Blowfish was built so it would be easy to add visual support to your articles. If your familiar with Hugo article structure, you just need to place an image file (almost all formats are supported but we recommend `.png` or `.jpg`) that starts with `feature*` inside your article folder. And that's it, Blowfish will then able to both use the image as a thumbnail within your website as well as for <a target="_blank" href="https://oembed.com/">oEmbed</a> cards across social platforms.

[Here]({{< ref "thumbnails" >}}) is also a guide with more info and a [sample]({{< ref "thumbnail_sample" >}}) if you want to see how you can do it.

## Language and i18n

Blowfish is optimised for full multilingual websites and theme assets are translated into several languages out of the box. The language configuration allows you to generate multiple versions of your content to provide a customised experience to your visitors in their native language.

The theme currently supports the following languages by default:

| Language                     | Code    |
| ---------------------------- | ------- |
| Arabic                       | `ar`    |
| Bulgarian                    | `bg`    |
| Bengali                      | `bn`    |
| Catalan                      | `ca`    |
| Czech                        | `cs`    |
| German                       | `de`    |
| English                      | `en`    |
| Esperanto                    | `eo`    |
| Spanish (Spain)              | `es`    |
| Finnish                      | `fi`    |
| French                       | `fr`    |
| Hebrew                       | `he`    |
| Croatian                     | `hr`    |
| Hungarian                    | `hu`    |
| Indonesian                   | `id`    |
| Italian                      | `it`    |
| Japanese                     | `ja`    |
| Korean                       | `ko`    |
| Dutch                        | `nl`    |
| Polish                       | `pl`    |
| Portuguese (Brazil)          | `pt-br` |
| Portuguese (Portugal)        | `pt-pt` |
| Romanian                     | `ro`    |
| Russian                      | `ru`    |
| Turkish                      | `tr`    |
| Vietnamese                   | `vi`    |
| Simplified Chinese (China)   | `zh-cn` |
| Traditional Chinese (Taiwan) | `zh-tw` |

The default translations can be overridden by creating a custom file in `i18n/[code].yaml` that contains the translation strings. You can also use this method to add new languages. If you'd like to share a new translation with the community, please [open a pull request](https://github.com/nunocoracao/blowfish/pulls).

### Configuration

In order to be as flexible as possible, a language configuration file needs to be created for each language on the website. By default Blowfish includes an English language configuration at `config/_default/languages.en.toml`.

The default file can be used as a template to create additional languages, or renamed if you wish to author your website in a language other than English. Simply name the file using the format `languages.[language-code].toml`.

{{< alert >}}
**Note:** Ensure the `defaultContentLanguage` parameter in the [site configuration](#site-configuration) matches the language code in your language config filename.  
{{< /alert >}}

#### Global

<!-- prettier-ignore-start -->
| Name           | Default      | Description                                                                                                                                                                                                                                                                                            |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `languageCode` | `"en"`       | The Hugo language code for this file. It can be a top-level language (ie. `en`) or a sub-variant (ie. `en-au`) and should match the language code in the filename. Hugo expects this value to always be in lowercase. For proper HTML compliance, set the `isoCode` parameter which is case-sensitive. |
| `languageName` | `"English"`  | The name of the language.                                                                                                                                                                                                                                                                              |
| `weight`       | `1`          | The weight determines the order of languages when building multilingual sites.                                                                                                                                                                                                                         |
| `title`        | `"Blowfish"` | The title of the website. This will be displayed in the site header and footer.                                                                                                                                                                                                                        |
<!-- prettier-ignore-end -->

#### Params

<!-- prettier-ignore-start -->
| Name                   | Default            | Description                                                                                                                                                                                                                                                                                                                |
| ---------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params.displayName`   | `"EN"`             | The name used when the language appears on the website.                                                                                                                                                                                                                                                                    |
| `params.isoCode`       | `"en"`             | The ISO language code for HTML metadata purposes. It can be a top-level language (ie. `en`) or a sub-variant (ie. `en-AU`).                                                                                                                                                                                                |
| `params.rtl`           | `false`            | Whether or not this is a RTL language. Set to `true` to reflow content from right-to-left. Blowfish fully supports using RTL and LTR languages at the same time and will dynamically adjust to both.                                                                                                                       |
| `params.dateFormat`    | `"2 January 2006"` | How dates are formatted in this language. Refer to the [Hugo docs](https://gohugo.io/functions/format/#gos-layout-string) for acceptable formats.                                                                                                                                                                          |
| `params.logo`          | _Not set_          | The relative path to the site logo file within the `assets/` folder. The logo file should be provided at 2x resolution and supports any image dimensions.                                                                                                                                                                  |
| `params.secondaryLogo` | _Not set_          | The relative path to the secondary site logo file within the `assets/` folder. The logo file should be provided at 2x resolution and supports any image dimensions. This should have an inverted/contrasting colour scheme to `logo`. If set, this logo will be shown when users toggle from the `defaultAppearance` mode. |
| `params.description`   | _Not set_          | The website description. This will be used in the site metadata.                                                                                                                                                                                                                                                           |
| `params.copyright`     | _Not set_          | A Markdown string for the site footer copyright message can include the placeholder { year } to dynamically insert the current year. If none is provided, Blowfish will automatically generate a copyright string using the site `title`.                                                                                  |

<!-- prettier-ignore-end -->

#### Author

| Name              | Default   | Description                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `author.name`     | _Not set_ | The author's name. This will be displayed in article footers, and on the homepage when the profile layout is used.                                                                                                                                                                                                          |
| `author.image`    | _Not set_ | Path to the image file of the author. The image should be a 1:1 aspect ratio. The image can be placed in the site's `assets/` folder or can be external url.                                                                                                                                                                |
| `author.headline` | _Not set_ | A Markdown string containing the author's headline. It will be displayed on the profile homepage under the author's name.                                                                                                                                                                                                   |
| `author.bio`      | _Not set_ | A Markdown string containing the author's bio. It will be displayed in article footers.                                                                                                                                                                                                                                     |
| `author.links`    | _Not set_ | The links to display alongside the author's details. The config file contains example links which can simply be uncommented to enable. The order that the links are displayed is determined by the order they appear in the array. Custom links can be added by providing corresponding SVG icon assets in `assets/icons/`. |
<!-- prettier-ignore-end -->

### Menus

Blowfish also supports language-specific menu configurations. Menu config files follow the same naming format as the languages file. Simply provide the language code in the file name to tell Hugo which language the file relates to.

Menu config files are named with the format `menus.[language-code].toml`. Always ensure that the language code used in the menus configuration matches the languages configuration.

The [Getting Started]({{< ref "getting-started#menus" >}}) section explains more about the structure of this file. You can also refer to the [Hugo menu docs](https://gohugo.io/content-management/menus/) for more configuration examples.

## Theme parameters

Blowfish provides a large number of configuration parameters that control how the theme functions. The table below outlines every available parameter in the `config/_default/params.toml` file.

Many of the article defaults here can be overridden on a per article basis by specifying it in the front matter. Refer to the [Front Matter]({{< ref "front-matter" >}}) section for further details.

<!-- prettier-ignore-start -->

### Global

| Name                            | Default      | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorScheme`                   | `"blowfish"` | The theme colour scheme to use. Valid values are `blowfish` (default), `avocado`, `fire`, `ocean`, `forest`, `princess`, `neon`, `bloody`, `terminal`, `marvel`, `noir`, `autumn`, `congo`, and`slate`. Refer to the [Colour Schemes]({{< ref "getting-started#colour-schemes" >}}) section for more details. |
| `defaultAppearance`             | `"light"`    | The default theme appearance, either `light` or `dark`.                                                                                                                                                                                                                                                       |
| `autoSwitchAppearance`          | `true`       | Whether the theme appearance automatically switches based upon the visitor's operating system preference. Set to `false` to force the site to always use the `defaultAppearance`.                                                                                                                             |
| `enableSearch`                  | `false`      | Whether site search is enabled. Set to `true` to enable search functionality. Note that the search feature depends on the `outputs.home` setting in the [site configuration](#site-configuration) being set correctly.                                                                                        |
| `enableCodeCopy`                | `false`      | Whether copy-to-clipboard buttons are enabled for `<code>` blocks. The `highlight.noClasses` parameter must be set to `false` for code copy to function correctly. Read more about [other configuration files](#other-configuration-files) below.                                                             |
| `mainSections`                  | _Not set_    | The sections that should be displayed in the recent articles list. If not provided the section with the greatest number of articles is used.                                                                                                                                                                  |
| `showViews`                     | _Not set_    | Whether or not articles and list views are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                                                          |
| `showLikes`                     | _Not set_    | Whether or not articles and list likes are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                                                          |
| `robots`                        | _Not set_    | String that indicates how robots should handle your site. If set, it will be output in the page head. Refer to [Google's docs](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) for valid values.                                                                        |
| `disableImageZoom`              | `false`      | Disables image zoom feature across all the images in the site.                                                                                                                                                                                                                                                |
| `disableImageOptimization`      | `false`      | Disables image resize and optimization features across all the images in the site.                                                                                                                                                                                                                            |
| `disableTextInHeader`           | `false`      | Disables text in header, useful for logo based headers.                                                                                                                                                                                                                                                       |
| `defaultBackgroundImage`        | _Not set_    | Default background image for both `background` homepage layout and `background` hero style                                                                                                                                                                                                                    |
| `defaultFeaturedImage`          | _Not set_    | Default background image for all `featured` images across articles, will be overridden by a local `featured` image.                                                                                                                                                                                           |
| `highlightCurrentMenuArea`      | _Not set_    | Marks menu entries in the main menu when selected                                                                                                                                                                                                                                                             |
| `smartTOC`                      | _Not set_    | Activate smart Table of Contents, items in view will be highlighted.                                                                                                                                                                                                                                          |
| `smartTOCHideUnfocusedChildren` | _Not set_    | When smart Table of Contents is turned on, this will hide deeper levels of the table when they are not in focus.                                                                                                                                                                                              |

### Header

| Name            | Default   | Description                                                                                                         |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `header.layout` | `"basic"` | Defines the header for the entire site, supported values are `basic`, `fixed`, `fixed-fill`, and `fixed-fill-blur`. |

### Footer

| Name                            | Default | Description                                                                                                                                                                                                               |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `footer.showMenu`               | `true`  | Show/hide the footer menu, which can be configured in the `[[footer]]` section of the `config/_default/menus.en.toml` file.                                                                                               |
| `footer.showCopyright`          | `true`  | Whether or not to show the copyright string in the site footer. Note that the string itself can be customised using the `copyright` parameter in the [languages configuration](#language-and-i18n).                       |
| `footer.showThemeAttribution`   | `true`  | Whether or not to show the "powered by" theme attribution in the site footer. If you choose to disable this message, please consider attributing the theme somewhere else on your site (for example, on your about page). |
| `footer.showAppearanceSwitcher` | `false` | Whether or not to show the appearance switcher in the site footer. The browser's local storage is used to persist the visitor's preference.                                                                               |
| `footer.showScrollToTop`        | `true`  | When set to `true` the scroll to top arrow is displayed.                                                                                                                                                                  |

### Homepage

| Name                            | Default     | Description                                                                                                                                                                                                                                                                                                        |
| ------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `homepage.layout`               | `"profile"` | The layout of the homepage. Valid values are `page`, `profile`, `hero`, `card`, `background`, or `custom`. When set to `custom`, you must provide your own layout by creating a `/layouts/partials/home/custom.html` file. Refer to the [Homepage Layout]({{< ref "homepage-layout" >}}) section for more details. |
| `homepage.homepageImage`        | _Not set_   | Image to be used in `hero` and `card` layouts. Can be set as local image from asset directory or external image url. Refer to the [Homepage Layout]({{< ref "homepage-layout" >}}) section for more details.                                                                                                       |
| `homepage.showRecent`           | `false`     | Whether or not to display the recent articles list on the homepage.                                                                                                                                                                                                                                                |
| `homepage.showRecentItems`      | 5           | How many articles to display if showRecent is true. If variable is set to 0 or if it isn't defined the system will default to 5 articles.                                                                                                                                                                          |
| `homepage.showMoreLink`         | `false`     | Whether or not to display a show more link at the end of your posts that takes the user to a predefined place.                                                                                                                                                                                                     |
| `homepage.showMoreLinkDest`     | `/posts`    | The destination of the show more button.                                                                                                                                                                                                                                                                           |
| `homepage.cardView`             | `false`     | Display recent articles as a gallery of cards.                                                                                                                                                                                                                                                                     |
| `homepage.cardViewScreenWidth`  | `false`     | Enhance the width of the recent articles card gallery to take the full width available.                                                                                                                                                                                                                            |
| `homepage.layoutBackgroundBlur` | `false`     | Makes the background image in the homepage layout blur with the scroll                                                                                                                                                                                                                                             |

### Article

| Name                                  | Default   | Description                                                                                                                                                                                                                                                                                                            |
| ------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `article.showDate`                    | `true`    | Whether or not article dates are displayed.                                                                                                                                                                                                                                                                            |
| `article.showViews`                   | `false`   | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                                                                             |
| `article.showLikes`                   | `false`   | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                                                                             |
| `article.showDateOnlyInArticle`       | `false`   | Show date within article even if not displayed in article listings/cards.                                                                                                                                                                                                                                              |
| `article.showDateUpdated`             | `false`   | Whether or not the dates articles were updated are displayed.                                                                                                                                                                                                                                                          |
| `article.showAuthor`                  | `true`    | Whether or not the author box is displayed in the article footer.                                                                                                                                                                                                                                                      |
| `article.showAuthorBottom`            | `false`   | Author boxes are displayed at the bottom of each page instead of the top.                                                                                                                                                                                                                                              |
| `article.showHero`                    | `false`   | Whether the thumbnail image will be shown as a hero image within each article page.                                                                                                                                                                                                                                    |
| `article.heroStyle`                   | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.                                                                                                                                                                                                                |
| `article.layoutBackgroundBlur`        | `true`    | Makes the background image in the background article heroStyle blur with the scroll                                                                                                                                                                                                                                    |
| `article.layoutBackgroundHeaderSpace` | `true`    | Add space between the header and the body.                                                                                                                                                                                                                                                                             |
| `article.showBreadcrumbs`             | `false`   | Whether or not breadcrumbs are displayed in the article header.                                                                                                                                                                                                                                                        |
| `article.showDraftLabel`              | `true`    | Whether or not the draft indicator is shown next to articles when site is built with `--buildDrafts`.                                                                                                                                                                                                                  |
| `article.showEdit`                    | `false`   | Whether or not the link to edit the article content should be displayed.                                                                                                                                                                                                                                               |
| `article.editURL`                     | _Not set_ | When `article.showEdit` is active, the URL for the edit link.                                                                                                                                                                                                                                                          |
| `article.editAppendPath`              | `true`    | When `article.showEdit` is active, whether or not the path to the current article should be appended to the URL set at `article.editURL`.                                                                                                                                                                              |
| `article.seriesOpened`                | `false`   | Whether or not the series module will be displayed open by default or not.                                                                                                                                                                                                                                             |
| `article.showHeadingAnchors`          | `true`    | Whether or not heading anchor links are displayed alongside headings within articles.                                                                                                                                                                                                                                  |
| `article.showPagination`              | `true`    | Whether or not the next/previous article links are displayed in the article footer.                                                                                                                                                                                                                                    |
| `article.invertPagination`            | `false`   | Whether or not to flip the direction of the next/previous article links.                                                                                                                                                                                                                                               |
| `article.showReadingTime`             | `true`    | Whether or not article reading times are displayed.                                                                                                                                                                                                                                                                    |
| `article.showTableOfContents`         | `false`   | Whether or not the table of contents is displayed on articles.                                                                                                                                                                                                                                                         |
| `article.showRelatedContent`          | `false`   | Display related content for each post. Might required additional configuration to your `config.toml`. Please check the theme `config.toml` if you want to enable this feature and copy all the relevant _related_ entries. Also check [Hugo's docs](https://gohugo.io/content-management/related/) on related content. |
| `article.relatedContentLimit`         | `3`       | Limit of related articles to display if `showRelatedContent` is turned on.                                                                                                                                                                                                                                       |
| `article.showTaxonomies`              | `false`   | Whether or not the taxonomies related to this article are displayed.                                                                                                                                                                                                                                                   |
| `article.showAuthorsBadges`           | `false`   | Whether the `authors` taxonomies are are displayed in the article or list header. This requires the setup of `multiple authors` and the `authors` taxonomy. Check [this page]({{< ref "multi-author" >}}) for more details on how to configure that feature.                                                           |
| `article.showWordCount`               | `false`   | Whether or not article word counts are displayed.                                                                                                                                                                                                                                                                      |
| `article.showComments`                | `false`   | Whether or not the [comments partial]({{< ref "partials#comments" >}}) is included after the article footer.                                                                                                                                                                                                           |
| `article.sharingLinks`                | _Not set_ | Which sharing links to display at the end of each article. When not provided, or set to `false` no links will be displayed.  Available values are: "linkedin", "bluesky", "mastodon", "twitter", "reddit", "pinterest", "facebook", "email", "whatsapp", and "telegram"                                                                       |
| `article.showZenMode`                 | `false`   | Flag to activate Zen Mode reading feature for articles.                                                                                                                                                                                                                                                                |

### List

| Name                               | Default   | Description                                                                                                                                                                                                                                                    |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list.showHero`                    | `false`   | Whether the thumbnail image will be shown as a hero image within each list page.                                                                                                                                                                               |
| `list.heroStyle`                   | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.                                                                                                                                                        |
| `list.showBreadcrumbs`             | `false`   | Whether or not breadcrumbs are displayed in the header on list pages.                                                                                                                                                                                          |
| `list.layoutBackgroundBlur`        | `true`    | Makes the background image in the background list heroStyle blur with the scroll                                                                                                                                                                               |
| `list.layoutBackgroundHeaderSpace` | `true`    | Add space between the header and the body.                                                                                                                                                                                                                     |
| `list.showTableOfContents`         | `false`   | Whether or not the table of contents is displayed on list pages.                                                                                                                                                                                               |
| `list.showSummary`                 | `false`   | Whether or not article summaries are displayed on list pages. If a summary is not provided in the [front matter]({{< ref "front-matter" >}}), one will be auto generated using the `summaryLength` parameter in the [site configuration](#site-configuration). |
| `list.showViews`                   | `false`   | Whether or not list views are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                        |
| `list.showLikes`                   | `false`   | Whether or not list likes are displayed. This requires firebase integrations to be enabled, look below.                                                                                                                                                        |
| `list.showCards`                   | `false`   | Whether or not each article is displayed as a card or as simple inline text.                                                                                                                                                                                   |
| `list.orderByWeight`               | `false`   | Whether or not articles are sorted by [weights](https://gohugo.io/methods/page/weight/).                                                                                                                                                                       |
| `list.groupByYear`                 | `true`    | Whether or not articles are grouped by year on list pages.                                                                                                                                                                                                     |
| `list.cardView`                    | `false`   | Display lists as a gallery of cards.                                                                                                                                                                                                                           |
| `list.cardViewScreenWidth`         | `false`   | Enhance the width of card galleries in lists to take the full width available.                                                                                                                                                                                 |
| `list.constrainItemsWidth`         | `false`   | Limit item width to `prose` to increase readability. Useful when no feature images are available.                                                                                                                                                              |
| `list.showTableOfContents`         | `false`   | Whether or not the table of contents is displayed on articles.                                                                                                                                                                                                 |

### Sitemap

| Name                    | Default                | Description                                                                                                                                                                                 |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sitemap.excludedKinds` | `["taxonomy", "term"]` | Kinds of content that should be excluded from the generated `/sitemap.xml` file. Refer to the [Hugo docs](https://gohugo.io/templates/section-templates/#page-kinds) for acceptable values. |

### Taxonomy

| Name                           | Default   | Description                                                                                                |
| ------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------- |
| `taxonomy.showTermCount`       | `true`    | Whether or not the number of articles within a taxonomy term is displayed on the taxonomy listing.         |
| `taxonomy.showHero`            | `false`   | Whether the thumbnail image will be shown as a hero image within each taxonomy page.                       |
| `taxonomy.heroStyle`           | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.    |
| `taxonomy.showBreadcrumbs`     | `false`   | Whether or not breadcrumbs are displayed in the taxonomy header.                                           |
| `taxonomy.showViews`           | `false`   | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showLikes`           | `false`   | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showTableOfContents` | `false`   | Whether or not the table of contents is displayed on taxonomies.                                           |
| `taxonomy.cardView`            | `false`   | Display lists as a gallery of cards.                                                                       |

### Term

| Name                       | Default   | Description                                                                                                |
| -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `term.showHero`            | `false`   | Whether the thumbnail image will be shown as a hero image within each term page.                           |
| `term.heroStyle`           | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.    |
| `term.showBreadcrumbs`     | `false`   | Whether or not breadcrumbs are displayed in the term header.                                               |
| `term.showViews`           | `false`   | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showLikes`           | `false`   | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showTableOfContents` | `false`   | Whether or not the table of contents is displayed on terms.                                                |
| `term.groupByYear`         | `false`   | Whether or not articles are grouped by year on term pages.                                                 |
| `term.cardView`            | `false`   | Display lists as a gallery of cards.                                                                       |
| `term.cardViewScreenWidth` | `false`   | Enhance the width of card galleries in lists to take the full width available.                             |

### Firebase

| Name                         | Default   | Description                                                                                                                                                                 |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firebase.apiKey`            | _Not set_ | Firebase apiKey, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.            |
| `firebase.authDomain`        | _Not set_ | Firebase authDomain, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.        |
| `firebase.projectId`         | _Not set_ | Firebase projectId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.         |
| `firebase.storageBucket`     | _Not set_ | Firebase storageBucket, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.     |
| `firebase.messagingSenderId` | _Not set_ | Firebase messagingSenderId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.appId`             | _Not set_ | Firebase appId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.             |
| `firebase.measurementId`     | _Not set_ | Firebase measurementId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish.     |

### Fathom Analytics

| Name                     | Default   | Description                                                                                                                                    |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `fathomAnalytics.site`   | _Not set_ | The site code generated by Fathom Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `fathomAnalytics.domain` | _Not set_ | If using a custom domain with Fathom Analytics, provide it here to serve `script.js` from the custom domain.                                   |

### Umami Analytics

| Name                       | Default   | Description                                                                                                                                                                        |
| -------------------------- | --------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `umamiAnalytics.websiteid` | _Not set_ | The site code generated by Umami Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details.                                      |
| `umamiAnalytics.domain`    | _Not set_ | If using a custom domain with Umami Analytics, provide it here to serve `script.js` from the custom domain.                                                                        |
| `umamiAnalytics.dataDomains`    | _Not set_ | If you want the tracker to only run on specific domains, provide it for your tracker script. This is a comma delimited list of domain names. Such as "yoursite.com,yoursite2.com". |
| `umamiAnalytics.scriptName` | script.js | The name of the `script.js` used for anti-ad-blocking is configured by the environment variable `TRACKER_SCRIPT_NAME` |
| `umamiAnalytics.enableTrackEvent`    | true      | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`.                                                            |

### Seline Analytics

| Name                              | Default   | Description                                                                                                                               |
|-----------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `selineAnalytics.token`           | _Not set_ | The token generated by Seline Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `selineAnalytics.enableTrackEvent` | true      | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`.                          |

### BuyMeACoffee

| Name                                | Default   | Description                                                                 |
| ----------------------------------- | --------- | --------------------------------------------------------------------------- |
| `buymeacoffee.identifier`           | _Not set_ | The identifier to the target buymeacoffee account.                          |
| `buymeacoffee.globalWidget`         | _Not set_ | Activate the global buymeacoffee widget.                                    |
| `buymeacoffee.globalWidgetMessage`  | _Not set_ | Message what will be displayed the first time a new user lands on the site. |
| `buymeacoffee.globalWidgetColor`    | _Not set_ | Widget color in hex format.                                                 |
| `buymeacoffee.globalWidgetPosition` | _Not set_ | Position of the widget, i.e. "Left" or "Right"                              |

### Verifications

| Name                     | Default   | Description                                                                             |
| ------------------------ | --------- | --------------------------------------------------------------------------------------- |
| `verification.google`    | _Not set_ | The site verification string provided by Google to be included in the site metadata.    |
| `verification.bing`      | _Not set_ | The site verification string provided by Bing to be included in the site metadata.      |
| `verification.pinterest` | _Not set_ | The site verification string provided by Pinterest to be included in the site metadata. |
| `verification.yandex`    | _Not set_ | The site verification string provided by Yandex to be included in the site metadata.    |
<!-- prettier-ignore-end -->

## RSSNext

| Name                     | Default   | Description                                                                                                                          |
| ------------------------ | --------- |--------------------------------------------------------------------------------------------------------------------------------------|
| `rssnext.feedId`    | _Not set_ | The rss `feedId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own. |
| `rssnext.userId`      | _Not set_ | The rss `userId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own.     |

## Other configuration files

The theme also includes a `markup.toml` configuration file. This file contains some important parameters that ensure that Hugo is correctly configured to generate sites built with Blowfish.

Always ensure this file is present in the config directory and that the required values are set. Failure to do so may cause certain features to function incorrectly and could result in unintended behaviour.
