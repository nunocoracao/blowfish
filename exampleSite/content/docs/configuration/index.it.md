---
date: 2020-08-14
title: "Configurazione"
weight: 4
draft: false
description: "Tutte le configurazioni disponibili in Blowfish."
slug: "configurazioni"
tags: ["config", "docs"]
series: ["Documentazione"]
series_order: 4
---

Blowfish è un tema altamente personalizzabile e utilizza alcune delle più recenti funzionalità di Hugo per semplificarne la configurazione.

Il tema viene fornito con una configurazione predefinita che ti consente di essere operativo con un blog di base o un sito Web statico.

{{< alert "fire" >}}
We just launched a CLI tool to help you get started with Blowfish. It will help you with installation and configuration. Install the CLI tool globally using:

```bash
npx blowfish-tools
```

{{< /alert >}}

> I file di configurazione forniti con il tema sono forniti in formato TOML dato che questa è la sintassi predefinita di Hugo. Sentiti libero di convertire la tua configurazione in YAML o JSON se lo desideri.

La configurazione predefinita del tema è documentata in ogni file in modo da poter regolare liberamente le impostazioni per soddisfare le proprie esigenze.

{{< alert >}}
As outlined in the [installation instructions]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), you should adjust your theme configuration by modifying the files in the `config/_default/` folder of your Hugo project and delete the `hugo.toml` file in your project root.
{{< /alert >}}

## Configurazioni del sito

Standard Hugo configuration variables are respected throughout the theme, however there are some specific things that should be configured for the best experience.

La configurazione del sito viene gestita tramite il file `config/_default/hugo.toml`. La tabella seguente descrive tutte le impostazioni di cui si avvale Blowfish.

Tieni presente che i nomi delle variabili forniti in questa tabella utilizzano il punto per semplificare la struttura dei dati TOML (ad esempio, "outputs.home" si riferisce a "[outputs] home").

<!-- prettier-ignore-start -->
| Name | Default | Description |
| --- | --- | --- |
| `theme` | `"blowfish"` | Quando si utilizzano i moduli Hugo, questo valore di configurazione deve essere rimosso. Per tutti gli altri tipi di installazione, questo deve essere impostato su "blowfish" affinché il tema funzioni. |
| `baseURL` | _Not set_ | The URL to the root of the website. |
| `defaultContentLanguage` | `"en"` | This value determines the default language of theme components and content. Refer to the [language and i18n](#lingua-e-i18n) section below for supported language codes. |
| `enableRobotsTXT` | `true` | Se abilitato, verrà creato un file "robots.txt" nella radice del sito che consentirà ai motori di ricerca di eseguire la scansione dell'intero sito. Se preferisci fornire il tuo file `robots.txt` predefinito, impostalo su `false` e ​​posiziona il file nella directory `static`. Per un controllo completo, puoi fornire un [layout personalizzato]({{< ref "content-examples#custom-layouts" >}}) per generare questo file. |
| `pagination.pagerSize` | `10` | Il numero di articoli elencati in ciascuna pagina dell'elenco degli articoli. |
| `summaryLength` | `0` | Il numero di parole utilizzate per generare il riepilogo dell'articolo quando non ne viene fornita una nella [front matter]({{< ref "front-matter" >}}). Un valore pari a "0" utilizzerà la prima frase. Questo valore non ha effetto quando i riepiloghi sono nascosti. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | I formati di output generati per il sito. Blowfish richiede HTML, RSS e JSON affinché tutti i componenti del tema funzionino correttamente. |
| `permalinks` | _Not set_ | Fare riferimento alla [documentazione di Hugo](https://gohugo.io/configuration/permalinks/) per la configurazione del permalink. |
| `taxonomies` | _Not set_ | Fare riferimento alla sezione [Organizzazione dei contenuti]({{< ref "getting-started#organising-content" >}}) per la configurazione della tassonomia. |
<!-- prettier-ignore-end -->

## Thumbnails

Blowfish è stato creato in modo che sia facile aggiungere supporto visivo ai tuoi articoli. Se hai familiarità con la struttura degli articoli di Hugo, devi solo inserire un file immagine (quasi tutti i formati sono supportati ma consigliamo `.png` o `.jpg`) che inizi con `feature*` all'interno della cartella dell'articolo. E questo è tutto, Blowfish sarà quindi in grado di utilizzare l'immagine sia come miniatura all'interno del tuo sito web sia per le schede <a target="_blank" href="https://oembed.com/">oEmbed</a> su piattaforme sociali.

[Qui]({{< ref "thumbnails" >}}) c'è anche una guida con maggiori informazioni e un [esempio]({{< ref "thumbnail_sample" >}}) se vuoi vedere come puoi farlo.

## Lingua e i18n

Blowfish è ottimizzato per siti Web multilingue completi e le risorse tematiche sono tradotte in diverse lingue immediatamente. La configurazione della lingua ti consente di generare più versioni dei tuoi contenuti per fornire un'esperienza personalizzata ai tuoi visitatori nella loro lingua madre.

Il tema attualmente supporta le seguenti lingue per impostazione predefinita:

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
| Thai                         | `th`    |
| Turkish                      | `tr`    |
| Vietnamese                   | `vi`    |
| Ukrainian                    | `uk`    |
| Simplified Chinese (China)   | `zh-cn` |
| Traditional Chinese (Taiwan) | `zh-tw` |

Le traduzioni predefinite possono essere sovrascritte creando un file personalizzato in "i18n/[code].yaml" che contiene le stringhe di traduzione. Puoi anche utilizzare questo metodo per aggiungere nuove lingue. Se desideri condividere una nuova traduzione con la community, [apri una richiesta pull](https://github.com/nunocoracao/blowfish/pulls).

### Configurazione

Per essere il più flessibili possibile, è necessario creare un file di configurazione lingua per ciascuna lingua sul sito web. Per impostazione predefinita Blowfish include una configurazione della lingua inglese in `config/_default/linguals.en.toml`.

Il file predefinito può essere utilizzato come modello per creare lingue aggiuntive o rinominato se desideri creare il tuo sito web in una lingua diversa dall'inglese. Basta nominare il file utilizzando il formato "lingue.[language-code].toml".

{{< alert >}}
**Nota:** assicurati che il parametro `defaultContentLanguage` nella [configurazione del sito](#configurazioni-del-sito) corrisponda al codice della lingua nel nome del file di configurazione della lingua.  
{{< /alert >}}

#### Globale

<!-- prettier-ignore-start -->
| Name | Default | Description |
| --- | --- | --- |
| `languageCode` | `"en"` | Il codice della lingua Hugo per questo file. Può essere una lingua di livello superiore (ad esempio "en") o una variante secondaria (ad esempio "en-au") e deve corrispondere al codice della lingua nel nome del file. Hugo si aspetta che questo valore sia sempre in minuscolo. Per una corretta conformità HTML, imposta il parametro "isoCode" che fa distinzione tra maiuscole e minuscole. |
| `languageName` | `"English"` | Il nome della lingua. |
| `weight` | `1` | Il peso determina l'ordine delle lingue durante la creazione di siti multilingue. |
| `title` | `"Blowfish"` | Il titolo del sito web. Questo verrà visualizzato nell'intestazione e nel piè di pagina del sito. |
<!-- prettier-ignore-end -->

#### Parametri

<!-- prettier-ignore-start -->
| Name | Default | Description |
| --- | --- | --- |
| `params.displayName` | `"EN"` | Il nome utilizzato quando la lingua appare sul sito web. |
| `params.isoCode` | `"en"` | Il codice della lingua ISO per scopi di metadati HTML. Può essere una lingua di livello superiore (es. `en`) o una sottovariante (es. `en-AU`). |
| `params.rtl` | `false` | Se si tratta o meno di un linguaggio RTL. Imposta su "true" per ridisporre il contenuto da destra a sinistra. Blowfish supporta pienamente l'uso simultaneo dei linguaggi RTL e LTR e si adatterà dinamicamente ad entrambi. |
| `params.dateFormat` | `"2 January 2006"` | Come vengono formattate le date in questa lingua. Fare riferimento alla [documentazione di Hugo](https://gohugo.io/functions/time/format/#layout-string) per i formati accettabili. |
| `params.logo` | _Not set_ | Il percorso relativo al file del logo del sito all'interno della cartella "assets/". Il file del logo deve essere fornito con una risoluzione 2x e supporta qualsiasi dimensione dell'immagine. |
| `params.secondaryLogo` | _Not set_ | The relative path to the secondary site logo file within the `assets/` folder. The logo file should be provided at 2x resolution and supports any image dimensions. This should have an inverted/contrasting colour scheme to `logo`. If set, this logo will be shown when users toggle from the `defaultAppearance` mode. |
| `params.description` | _Not set_ | The website description. This will be used in the site metadata. |
| `params.copyright` | _Not set_ | A Markdown string for the site footer copyright message can include the placeholder { year } to dynamically insert the current year. If none is provided, Blowfish will automatically generate a copyright string using the site `title`. |

<!-- prettier-ignore-end -->

#### Author

| Name | Default | Description |
| --- | --- | --- |
| `author.name` | _Not set_ | The author's name. This will be displayed in article footers, and on the homepage when the profile layout is used. |
| `author.image` | _Not set_ | Path to the image file of the author. The image should be a 1:1 aspect ratio. The image can be placed in the site's `assets/` folder or can be external url. |
| `author.headline` | _Not set_ | A Markdown string containing the author's headline. It will be displayed on the profile homepage under the author's name. |
| `author.bio` | _Not set_ | A Markdown string containing the author's bio. It will be displayed in article footers. |
| `author.links` | _Not set_ | The links to display alongside the author's details. The config file contains example links which can simply be uncommented to enable. The order that the links are displayed is determined by the order they appear in the array. Custom links can be added by providing corresponding SVG icon assets in `assets/icons/`. |
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

| Name | Default | Description |
| --- | --- | --- |
| `colorScheme` | `"blowfish"` | The theme colour scheme to use. Valid values are `blowfish` (default), `avocado`, `fire`, `ocean`, `forest`, `princess`, `neon`, `bloody`, `terminal`, `marvel`, `noir`, `autumn`, `congo`, `slate`, `github`, and `one-light`. Refer to the [Colour Schemes]({{< ref "getting-started#colour-schemes" >}}) section for more details. |
| `defaultAppearance` | `"light"` | The default theme appearance, either `light` or `dark`. |
| `autoSwitchAppearance` | `true` | Whether the theme appearance automatically switches based upon the visitor's operating system preference. Set to `false` to force the site to always use the `defaultAppearance`. |
| `enableA11y`                   | `false`      | Whether to enable the accessibility toggle button. |
| `enableSearch` | `false` | Whether site search is enabled. Set to `true` to enable search functionality. Note that the search feature depends on the `outputs.home` setting in the [site configuration](#configurazioni-del-sito) being set correctly. |
| `enableCodeCopy` | `false` | Whether copy-to-clipboard buttons are enabled for `<code>` blocks. The `highlight.noClasses` parameter must be set to `false` for code copy to function correctly. Read more about [other configuration files](#other-configuration-files) below. |
| `enableStructuredBreadcrumbs` | `false` | Whether to add [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) for SEO. Do NOT enable this if your content path does not match the URL, i.e., complex [URL setting](https://gohugo.io/content-management/urls/). |
| `mainSections` | _Not set_ | The sections that should be displayed in the recent articles list. If not provided the section with the greatest number of articles is used. |
| `showViews` | _Not set_ | Whether or not articles and list views are displayed. This requires firebase integrations to be enabled, look below. |
| `showLikes` | _Not set_ | Whether or not articles and list likes are displayed. This requires firebase integrations to be enabled, look below. |
| `robots` | _Not set_ | String that indicates how robots should handle your site. If set, it will be output in the page head. Refer to [Google's docs](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) for valid values. |
| `disableImageZoom` | `false` | Disables image zoom feature across all the images in the site. |
| `disableImageOptimization` | `false` | Disables image resize and optimization features across all the images in the site, except images using markdown syntax (`![](image.jpg)`) |
| `disableImageOptimizationMD` | `false` | Disables image resize and optimization features only for images using markdown syntax (`![](image.jpg)`). |
| `disableTextInHeader` | `false` | Disables text in header, useful for logo based headers. |
| `defaultBackgroundImage` | _Not set_ | Default background image for both `background` homepage layout and `background` hero style |
| `defaultFeaturedImage` | _Not set_ | Default background image for all `featured` images across articles, will be overridden by a local `featured` image. |
| `defaultSocialImage` | _Not set_ | Default image for social media sharing (Open Graph and Twitter). Will be overridden by a local `feature` image if available. |
| `hotlinkFeatureImage` | `false` | Hotlink external images in article feature images and article cards. Those images will not be processed by Hugo. |
| `imagePosition` | _Not set_ | Sets the position of the default image using `object-position` attribute. Valid values are as specified in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `highlightCurrentMenuArea` | _Not set_ | Marks menu entries in the main menu when selected |
| `smartTOC` | _Not set_ | Activate smart Table of Contents, items in view will be highlighted. |
| `smartTOCHideUnfocusedChildren` | _Not set_ | When smart Table of Contents is turned on, this will hide deeper levels of the table when they are not in focus. |
| `fingerprintAlgorithm` | `"sha512"` | Hash algorithm for CSS/JS file fingerprinting to prevent browser caching issues. Valid values are `sha512` (default), `sha384`, `sha256`. |

### Header

| Name | Default | Description |
| --- | --- | --- |
| `header.layout` | `"basic"` | Defines the header for the entire site, supported values are `basic`, `fixed`, `fixed-fill`, and `fixed-fill-blur`. |

### Footer

| Name | Default | Description |
| --- | --- | --- |
| `footer.showMenu` | `true` | Show/hide the footer menu, which can be configured in the `[[footer]]` section of the `config/_default/menus.en.toml` file. |
| `footer.showCopyright` | `true` | Whether or not to show the copyright string in the site footer. Note that the string itself can be customised using the `copyright` parameter in the [languages configuration](#lingua-e-i18n). |
| `footer.showThemeAttribution` | `true` | Whether or not to show the "powered by" theme attribution in the site footer. If you choose to disable this message, please consider attributing the theme somewhere else on your site (for example, on your about page). |
| `footer.showAppearanceSwitcher` | `false` | Whether or not to show the appearance switcher in the site footer. The browser's local storage is used to persist the visitor's preference. |
| `footer.showScrollToTop` | `true` | When set to `true` the scroll to top arrow is displayed. |

### Homepage

| Name | Default | Description |
| --- | --- | --- |
| `homepage.layout` | `"profile"` | The layout of the homepage. Valid values are `page`, `profile`, `hero`, `card`, `background`, or `custom`. When set to `custom`, you must provide your own layout by creating a `/layouts/partials/home/custom.html` file. Refer to the [Homepage Layout]({{< ref "homepage-layout" >}}) section for more details. |
| `homepage.homepageImage` | _Not set_ | Image to be used in `hero` and `card` layouts. Can be set as local image from asset directory or external image url. Refer to the [Homepage Layout]({{< ref "homepage-layout" >}}) section for more details. |
| `homepage.showRecent` | `false` | Whether or not to display the recent articles list on the homepage. |
| `homepage.showRecentItems` | 5 | How many articles to display if showRecent is true. If variable is set to 0 or if it isn't defined the system will default to 5 articles. |
| `homepage.showMoreLink` | `false` | Whether or not to display a show more link at the end of your posts that takes the user to a predefined place. |
| `homepage.showMoreLinkDest` | `/posts` | The destination of the show more button. |
| `homepage.cardView` | `false` | Display recent articles as a gallery of cards. |
| `homepage.cardViewScreenWidth` | `false` | Enhance the width of the recent articles card gallery to take the full width available. |
| `homepage.layoutBackgroundBlur` | `false` | Makes the background image in the homepage layout blur with the scroll |
| `homepage.disableHeroImageFilter` | `false` | Whether to apply an image filter on the homepage background. |

### Article

| Name | Default | Description |
| --- | --- | --- |
| `article.showDate` | `true` | Whether or not article dates are displayed. |
| `article.showViews` | `false` | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `article.showLikes` | `false` | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `article.showDateOnlyInArticle` | `false` | Show date within article even if not displayed in article listings/cards. |
| `article.showDateUpdated` | `false` | Whether or not the dates articles were updated are displayed. |
| `article.showAuthor` | `true` | Whether or not the author box is displayed in the article footer. |
| `article.showAuthorBottom` | `false` | Author boxes are displayed at the bottom of each page instead of the top. |
| `article.showHero` | `false` | Whether the thumbnail image will be shown as a hero image within each article page. |
| `article.heroStyle` | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`. Effective only if `article.showHero = true`. |
| `article.layoutBackgroundBlur` | `true` | Makes the background image in the background article heroStyle blur with the scroll |
| `article.layoutBackgroundHeaderSpace` | `true` | Add space between the header and the body. |
| `article.showBreadcrumbs` | `false` | Whether or not breadcrumbs are displayed in the article header. |
| `article.showDraftLabel` | `true` | Whether or not the draft indicator is shown next to articles when site is built with `--buildDrafts`. |
| `article.showEdit` | `false` | Whether or not the link to edit the article content should be displayed. |
| `article.editURL` | _Not set_ | When `article.showEdit` is active, the URL for the edit link. |
| `article.editAppendPath` | `true` | When `article.showEdit` is active, whether or not the path to the current article should be appended to the URL set at `article.editURL`. |
| `article.seriesOpened` | `false` | Whether or not the series module will be displayed open by default or not. |
| `article.showHeadingAnchors` | `true` | Whether or not heading anchor links are displayed alongside headings within articles. |
| `article.showPagination` | `true` | Whether or not the next/previous article links are displayed in the article footer. |
| `article.invertPagination` | `false` | Whether or not to flip the direction of the next/previous article links. |
| `article.showReadingTime` | `true` | Whether or not article reading times are displayed. |
| `article.showTableOfContents` | `false` | Whether or not the table of contents is displayed on articles. |
| `article.showRelatedContent` | `false` | Display related content for each post. Might required additional configuration to your `hugo.toml`. Please check the theme `hugo.toml` if you want to enable this feature and copy all the relevant _related_ entries. Also check [Hugo's docs](https://gohugo.io/content-management/related/) on related content. |
| `article.relatedContentLimit` | `3` | Limit of related articles to display if `showRelatedContent` is turned on. |
| `article.showTaxonomies` | `false` | Whether or not the taxonomies related to this article are displayed. |
| `article.showAuthorsBadges` | `false` | Whether the `authors` taxonomies are are displayed in the article or list header. This requires the setup of `multiple authors` and the `authors` taxonomy. Check [this page]({{< ref "multi-author" >}}) for more details on how to configure that feature. |
| `article.showWordCount` | `false` | Whether or not article word counts are displayed. |
| `article.showComments` | `false` | Whether or not the [comments partial]({{< ref "partials#comments" >}}) is included after the article footer. |
| `article.sharingLinks` | _Not set_ | Which sharing links to display at the end of each article. When not provided, or set to `false` no links will be displayed. Available values are: "bluesky", "email", "facebook", "line", "linkedin", "mastodon", "pinterest", "reddit", "telegram", "twitter", and "whatsapp" |
| `article.showZenMode` | `false` | Flag to activate Zen Mode reading feature for articles. |
| `article.externalLinkForceNewTab` | `true` | Flag per aprire i link esterni nel markdown in una nuova scheda. |

### List

| Name | Default | Description |
| --- | --- | --- |
| `list.showHero` | `false` | Whether the thumbnail image will be shown as a hero image within each list page. |
| `list.heroStyle` | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`.  Effective only if `list.showHero = true`. |
| `list.showBreadcrumbs` | `false` | Whether or not breadcrumbs are displayed in the header on list pages. |
| `list.layoutBackgroundBlur` | `true` | Makes the background image in the background list heroStyle blur with the scroll |
| `list.layoutBackgroundHeaderSpace` | `true` | Add space between the header and the body. |
| `list.showTableOfContents` | `false` | Whether or not the table of contents is displayed on list pages. |
| `list.showSummary` | `false` | Whether or not article summaries are displayed on list pages. If a summary is not provided in the [front matter]({{< ref "front-matter" >}}), one will be auto generated using the `summaryLength` parameter in the [site configuration](#configurazioni-del-sito). |
| `list.showViews` | `false` | Whether or not list views are displayed. This requires firebase integrations to be enabled, look below. |
| `list.showLikes` | `false` | Whether or not list likes are displayed. This requires firebase integrations to be enabled, look below. |
| `list.showCards` | `false` | Whether or not each article is displayed as a card or as simple inline text. |
| `list.orderByWeight` | `false` | Whether or not articles are sorted by [weights](https://gohugo.io/methods/page/weight/). |
| `list.groupByYear` | `true` | Whether or not articles are grouped by year on list pages. |
| `list.cardView` | `false` | Display lists as a gallery of cards. |
| `list.cardViewScreenWidth` | `false` | Enhance the width of card galleries in lists to take the full width available. |
| `list.constrainItemsWidth` | `false` | Limit item width to `prose` to increase readability. Useful when no feature images are available. |
| `list.showTableOfContents` | `false` | Whether or not the table of contents is displayed on articles. |

### Sitemap

| Name | Default | Description |
| --- | --- | --- |
| `sitemap.excludedKinds` | `["taxonomy", "term"]` | Kinds of content that should be excluded from the generated `/sitemap.xml` file. Refer to the [Hugo docs](https://gohugo.io/methods/page/kind/) for acceptable values. |

### Taxonomy

| Name | Default | Description |
| --- | --- | --- |
| `taxonomy.showTermCount` | `true` | Whether or not the number of articles within a taxonomy term is displayed on the taxonomy listing. |
| `taxonomy.showHero` | `false` | Whether the thumbnail image will be shown as a hero image within each taxonomy page. |
| `taxonomy.heroStyle` | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`. Effective only if `article.taxonomy = true`. |
| `taxonomy.showBreadcrumbs` | `false` | Whether or not breadcrumbs are displayed in the taxonomy header. |
| `taxonomy.showViews` | `false` | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showLikes` | `false` | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `taxonomy.showTableOfContents` | `false` | Whether or not the table of contents is displayed on taxonomies. |
| `taxonomy.cardView` | `false` | Display lists as a gallery of cards. |

### Term

| Name | Default | Description |
| --- | --- | --- |
| `term.showHero` | `false` | Whether the thumbnail image will be shown as a hero image within each term page. |
| `term.heroStyle` | _Not set_ | Style to display the hero image, valid options are: `basic`, `big`, `background`, `thumbAndBackground`. Effective only if `term.showHero = true`. |
| `term.showBreadcrumbs` | `false` | Whether or not breadcrumbs are displayed in the term header. |
| `term.showViews` | `false` | Whether or not article views are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showLikes` | `false` | Whether or not article likes are displayed. This requires firebase integrations to be enabled, look below. |
| `term.showTableOfContents` | `false` | Whether or not the table of contents is displayed on terms. |
| `term.groupByYear` | `false` | Whether or not articles are grouped by year on term pages. |
| `term.cardView` | `false` | Display lists as a gallery of cards. |
| `term.cardViewScreenWidth` | `false` | Enhance the width of card galleries in lists to take the full width available. |

### Firebase

| Name | Default | Description |
| --- | --- | --- |
| `firebase.apiKey` | _Not set_ | Firebase apiKey, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.authDomain` | _Not set_ | Firebase authDomain, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.projectId` | _Not set_ | Firebase projectId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.storageBucket` | _Not set_ | Firebase storageBucket, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.messagingSenderId` | _Not set_ | Firebase messagingSenderId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.appId` | _Not set_ | Firebase appId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |
| `firebase.measurementId` | _Not set_ | Firebase measurementId, required to integrate against Firebase. Check [this page]({{< ref "firebase-views" >}}) for a guide on how to integrate Firebase into Blowfish. |

### Fathom Analytics

| Name | Default | Description |
| --- | --- | --- |
| `fathomAnalytics.site` | _Not set_ | The site code generated by Fathom Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `fathomAnalytics.domain` | _Not set_ | If using a custom domain with Fathom Analytics, provide it here to serve `script.js` from the custom domain. |

### Umami Analytics

| Name | Default | Description |
| --- | --- | --- |
| `umamiAnalytics.websiteid` | _Not set_ | The site code generated by Umami Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `umamiAnalytics.domain` | _Not set_ | If using a custom domain with Umami Analytics, provide it here to serve `script.js` from the custom domain. |
| `umamiAnalytics.dataDomains` | _Not set_ | If you want the tracker to only run on specific domains, provide it for your tracker script. This is a comma delimited list of domain names. Such as "yoursite.com,yoursite2.com". |
| `umamiAnalytics.scriptName` | script.js | The name of the `script.js` used for anti-ad-blocking is configured by the environment variable `TRACKER_SCRIPT_NAME` |
| `umamiAnalytics.enableTrackEvent` | true | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`. |

### Seline Analytics

| Name | Default | Description |
| --- | --- | --- |
| `selineAnalytics.token` | _Not set_ | The token generated by Seline Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details. |
| `selineAnalytics.enableTrackEvent` | true | When set to `true` track event will add automatically. If you do not want to add track event, set it to `false`. |

### BuyMeACoffee

| Name | Default | Description |
| --- | --- | --- |
| `buymeacoffee.identifier` | _Not set_ | The identifier to the target buymeacoffee account. |
| `buymeacoffee.globalWidget` | _Not set_ | Activate the global buymeacoffee widget. |
| `buymeacoffee.globalWidgetMessage` | _Not set_ | Message what will be displayed the first time a new user lands on the site. |
| `buymeacoffee.globalWidgetColor` | `#FFDD00` | Widget color in hex format. |
| `buymeacoffee.globalWidgetPosition` | _Not set_ | Position of the widget, i.e. "left" or "right" |

### Verifications

| Name | Default | Description |
| --- | --- | --- |
| `verification.google` | _Not set_ | The site verification string provided by Google to be included in the site metadata. |
| `verification.bing` | _Not set_ | The site verification string provided by Bing to be included in the site metadata. |
| `verification.pinterest` | _Not set_ | The site verification string provided by Pinterest to be included in the site metadata. |
| `verification.yandex` | _Not set_ | The site verification string provided by Yandex to be included in the site metadata. |
<!-- prettier-ignore-end -->

### RSSNext

| Name | Default | Description |
| --- | --- | --- |
| `rssnext.feedId` | _Not set_ | The rss `feedId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own. |
| `rssnext.userId` | _Not set_ | The rss `userId` string provided by [RSSNext/Follow](https://follow.is/) to be included in the `rss.xml`, which can helps to claim rss feed as your own. |

### Advertisement

| Name                     | Default   | Description |
| ------------------------ | --------- |-------------|
| `advertisement.adsense` | _Not set_ | Your Google AdSense Publisher ID (e.g. `ca-pub-1234567890abcdef`). Set this parameter to enable AdSense ads on your site. |

## Other configuration files

The theme also includes a `markup.toml` configuration file. This file contains some important parameters that ensure that Hugo is correctly configured to generate sites built with Blowfish.

Always ensure this file is present in the config directory and that the required values are set. Failure to do so may cause certain features to function incorrectly and could result in unintended behaviour.
