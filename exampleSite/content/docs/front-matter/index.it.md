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
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | Flag per aprire i link esterni nel markdown in una nuova scheda. |
<!-- prettier-ignore-end -->
