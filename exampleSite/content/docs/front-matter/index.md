---
title: "Front Matter"
weight: 7
draft: false
description: "All the front matter variables available in Blowfish."
slug: "front-matter"
tags: ["front matter", "config", "docs"]
series: ["Documentation"]
series_order: 7
---

In addition to the [default Hugo front matter parameters](https://gohugo.io/content-management/front-matter/#front-matter-variables), Blowfish adds a number of additional options to customise the presentation of individual articles. All the available theme front matter parameters are listed below.

Front matter parameter default values are inherited from the theme's [base configuration]({{< ref "configuration" >}}), so you only need to specify these parameters in your front matter when you want to override the default.

<!-- prettier-ignore-start -->
| Name | Default | Description |
| --- | --- | --- |
| `title` | _Not set_ | The name of the article. |
| `description` | _Not set_ | The text description for the article. It is used in the HTML metadata. |
| `externalUrl` | _Not set_ | If this article is published on a third-party website, the URL to this article. Providing a URL will prevent a content page being generated and any references to this article will link directly to the third-party website. |
| `editURL` | `article.editURL` | When `showEdit` is active, the URL for the edit link. |
| `editAppendPath` | `article.editAppendPath` | When `showEdit` is active, whether or not the path to the current article should be appended to the URL set at `editURL`. |
| `groupByYear` | `list.groupByYear` | Whether or not articles are grouped by year on list pages. |
| `menu` | _Not set_ | When a value is provided, a link to this article will appear in the named menus. Valid values are `main` or `footer`. |
| `robots` | _Not set_ | String that indicates how robots should handle this article. If set, it will be output in the page head. Refer to [Google's docs](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) for valid values. |
| `sharingLinks` | `article.sharingLinks` | Which sharing links to display at the end of this article. When not provided, or set to `false` no links will be displayed. |
| `showAuthor` | `article.showAuthor` | Whether or not the author box for the default author is displayed in the article footer. |
| `showAuthorBottom` | `article.showAuthorBottom` | Author boxes are displayed at the bottom of each page instead of the top. |
| `authors` | _Not set_ | Array of values for authors, if set it overrides `showAuthor` settings for page or site. Used on the multiple authors feature, check [this page]({{< ref "multi-author" >}}) for more details on how to configure that feature. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Whether the `authors` taxonomies are are displayed in the article or list header. This requires the setup of `multiple authors` and the `authors` taxonomy. Check [this page]({{< ref "multi-author" >}}) for more details on how to configure that feature. |
| `featureimage` | _Not set_ | External URL for feature image |
| `featureimagecaption` | _Not set_ | Caption for feature image. Only displayed in heroStyle `big` |
| `showHero` | `article.showHero` | Whether the thumbnail image will be shown as a hero image within the article page. |
| `heroStyle` | `article.heroStyle` | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`. |
| `showBreadcrumbs` | `article.showBreadcrumbs` or `list.showBreadcrumbs` | Whether the breadcrumbs are displayed in the article or list header. |
| `showDate` | `article.showDate` | Whether or not the article date is displayed. The date is set using the `date` parameter. |
| `showDateUpdated` | `article.showDateUpdated` | Whether or not the date the article was updated is displayed. The date is set using the `lastmod` parameter. |
| `showEdit` | `article.showEdit` | Whether or not the link to edit the article content should be displayed. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Whether or not heading anchor links are displayed alongside headings within this article. |
| `showPagination` | `article.showPagination` | Whether or not the next/previous article links are displayed in the article footer. |
| `invertPagination` | `article.invertPagination` | Whether or not to flip the direction of the next/previous article links. |
| `showReadingTime` | `article.showReadingTime` | Whether or not the article reading time is displayed. |
| `showTaxonomies` | `article.showTaxonomies` | Whether or not the taxonomies that relate to this article are displayed. |
| `showTableOfContents` | `article.showTableOfContents` | Whether or not the table of contents is displayed on this article. |
| `showWordCount` | `article.showWordCount` | Whether or not the article word count is displayed. |
| `showComments` | `article.showComments` | Whether or not the [comments partial]({{< ref "partials#comments" >}}) is included after the article footer. |
| `showSummary` | `list.showSummary` | Whether or not the article summary should be displayed on list pages. |
| `showViews` | `article.showViews` | Whether or not the article views should be displayed in lists and detailed view. This requires a firebase integration. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish |
| `showLikes` | `article.showLikes` | Whether or not the article likes should be displayed in lists and detailed view. This requires a firebase integration. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish |
| `seriesOpened` | `article.seriesOpened` | Whether or not the series module will be displayed open by default or not. |
| `series` | _Not set_ | Array of series the article belongs to, we recommend using only one series per article. |
| `series_order` | _Not set_ | Number of the article within the series. |
| `summary` | Auto generated using `summaryLength` (see [site configuration]({{< ref "configuration#site-configuration" >}})) | When `showSummary` is enabled, this is the Markdown string to be used as the summary for this article. |
| `xml` | `true` unless excluded by `sitemap.excludedKinds` | Whether or not this article is included in the generated `/sitemap.xml` file. |
| `layoutBackgroundBlur` | `true` | Makes the background image in the background heroStyle blur with the scroll |
| `layoutBackgroundHeaderSpace` | `true` | Add space between the header and the body. |
<!-- prettier-ignore-end -->
