---
title: "Front Matter"
weight: 7
draft: false
description: "Tutte le variabili in primo piano disponibili in Blowfish."
slug: "front-matter"
tags: ["front matter", "config", "docs"]
series: ["Documentazione"]
series_order: 7
---

Oltre ai [parametri predefiniti della parte frontale di Hugo](https://gohugo.io/content-management/front-matter/#front-matter-variables), Blowfish aggiunge una serie di opzioni aggiuntive per personalizzare la presentazione dei singoli articoli . Tutti i parametri disponibili per la parte frontale del tema sono elencati di seguito.

I valori predefiniti dei parametri del front metter vengono ereditati dalla [configurazione di base]({{< ref "configuration" >}}) del tema, quindi devi specificare questi parametri nella parte iniziale solo quando desideri sovrascrivere quelli predefiniti.

<!-- prettier-ignore-start -->
| Name | Default | Description |
| --- | --- | --- |
| `title` | _Not set_ | Il nome dell'articolo. |
| `description` | _Not set_ | La descrizione testuale dell'articolo. Viene utilizzato nei metadati HTML. |
| `externalUrl` | _Not set_ | Se questo articolo è pubblicato su un sito Web di terze parti, l'URL di questo articolo. Fornire un URL impedirà la generazione di una pagina di contenuto e qualsiasi riferimento a questo articolo si collegherà direttamente al sito Web di terze parti. |
| `editURL` | `article.editURL` | Quando "showEdit" è attivo, l'URL per il collegamento di modifica. |
| `editAppendPath` | `article.editAppendPath` | Quando "showEdit" è attivo, indica se il percorso dell'articolo corrente deve essere aggiunto o meno all'URL impostato in "editURL". |
| `groupByYear` | `list.groupByYear` | Se gli articoli sono raggruppati o meno per anno nelle pagine di elenco. |
| `menu` | _Not set_ | Quando viene fornito un valore, nei menu denominati verrà visualizzato un collegamento a questo articolo. I valori validi sono "main" o "footer". |
| `robots` | _Not set_ | Stringa che indica come i robots dovrebbero gestire questo articolo. Se impostato, verrà visualizzato nell'intestazione della pagina. Fare riferimento ai [documenti di Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) per i valori validi. |
| `sharingLinks` | `article.sharingLinks` | Quali link di condivisione visualizzare alla fine di questo articolo. Se non fornito o impostato su "false", non verrà visualizzato alcun collegamento. |
| `showAuthor` | `article.showAuthor` | Se la casella dell'autore predefinito viene visualizzata o meno nel piè di pagina dell'articolo. |
| `authors` | _Not set_ | Matrice di valori per gli autori, se impostata sovrascrive le impostazioni di "showAuthor" per la pagina o il sito. Utilizzato nella funzionalità per più autori, controlla [questa pagina]({{< ref "multi-author" >}}) per maggiori dettagli su come configurare tale funzionalità. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Se le tassonomie degli "autori" vengono visualizzate nell'articolo o nell'intestazione dell'elenco. Ciò richiede l'impostazione di "autori multipli" e la tassonomia degli "autori". Controlla [questa pagina]({{< ref "multi-author" >}}) per maggiori dettagli su come configurare questa funzione. |
| `featureimage` | _Not set_ | Link per l'immagine in primo piano |
| `featureimagecaption` | _Not set_ | Didascalia per l'immagine in primo piano. Visualizzato solo in heroStyle "big". |
| `showHero` | `article.showHero` | Se l'immagine in miniatura verrà mostrata come immagine hero all'interno della pagina dell'articolo. |
| `heroStyle` | `article.heroStyle` | Stile per visualizzare l'immagine hero, le opzioni valide sono: `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _Not set_ | Imposta la posizione dell'immagine in evidenza utilizzando l'attributo `object-position`. I valori validi sono specificati nella [documentazione MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `showBreadcrumbs` | `article.showBreadcrumbs` or `list.showBreadcrumbs` | Se i breadcrumb vengono visualizzati nell'articolo o nell'intestazione dell'elenco. |
| `showDate` | `article.showDate` | Se viene visualizzata o meno la data dell'articolo. La data viene impostata utilizzando il parametro "data". |
| `showDateUpdated` | `article.showDateUpdated` | Se viene visualizzata o meno la data di aggiornamento dell'articolo. La data viene impostata utilizzando il parametro "lastmod". |
| `showEdit` | `article.showEdit` | Se deve essere visualizzato o meno il collegamento per modificare il contenuto dell'articolo. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Se i collegamenti di ancoraggio dei titoli vengono visualizzati o meno insieme ai titoli all'interno di questo articolo. |
| `showPagination` | `article.showPagination` | Se i collegamenti all'articolo successivo/precedente vengono visualizzati o meno nel piè di pagina dell'articolo. |
| `invertPagination` | `article.invertPagination` | Se invertire o meno la direzione dei collegamenti all'articolo successivo/precedente. |
| `showReadingTime` | `article.showReadingTime` | Se viene visualizzato o meno il tempo di lettura dell'articolo. |
| `showTaxonomies` | `article.showTaxonomies` | Se vengono visualizzate o meno le tassonomie correlate a questo articolo. |
| `showTableOfContents` | `article.showTableOfContents` | Se il sommario viene visualizzato o meno in questo articolo. |
| `showWordCount` | `article.showWordCount` | Se viene visualizzato o meno il conteggio delle parole dell'articolo. |
| `showComments` | `article.showComments` | Se il [commenti parziali]({{< ref "partials#comments" >}}) è incluso o meno dopo il piè di pagina dell'articolo. |
| `showSummary` | `list.showSummary` | Se il riepilogo dell'articolo deve essere visualizzato o meno nelle pagine di elenco. |
| `showViews` | `article.showViews` | Se le visualizzazioni degli articoli devono essere visualizzate o meno negli elenchi e nella visualizzazione dettagliata. Ciò richiede un'integrazione Firebase. Controlla [questa pagina]({{< ref "firebase-views" >}}) per una guida su come integrare Firebase in Blowfish |
| `showLikes` | `article.showLikes` | Se l'articolo piace o meno deve essere visualizzato negli elenchi e nella vista dettagliata. Ciò richiede un'integrazione Firebase. Controlla [questa pagina]({{< ref "firebase-views" >}}) per una guida su come integrare Firebase in Blowfish |
| `seriesOpened` | `article.seriesOpened` | Se il modulo della serie verrà visualizzato aperto per impostazione predefinita o meno. |
| `series` | _Not set_ | Matrice di serie a cui appartiene l'articolo, si consiglia di utilizzare una sola serie per articolo. |
| `series_order` | _Not set_ | Numero dell'articolo all'interno della serie. |
| `summary` | Auto generated using `summaryLength` (see [site configuration]({{< ref "configuration#site-configuration" >}})) | Quando "showSummary" è abilitato, questa è la stringa Markdown da utilizzare come riepilogo per questo articolo. |
| `xml` | `true` unless excluded by `sitemap.excludedKinds` | Se questo articolo è incluso o meno nel file `/sitemap.xml` generato. |
| `layoutBackgroundBlur` | `true` | Rende l'immagine di sfondo sullo sfondo heroStyle sfocata con lo scorrimento. |
| `layoutBackgroundHeaderSpace` | `true` | Aggiungi spazio tra l'intestazione e il body. |
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
