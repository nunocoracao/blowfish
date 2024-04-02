---
title: "Per iniziare"
date: 2020-08-15
draft: false
description: "Tutte le variabili del front matter sono disponibili in Blowfish.
slug: "per-iniziare"
tags: ["installazione", "documenti"]
series: ["Documentazione"]
series_order: 3
---

{{< alert >}}
Questa sezione presuppone che tu abbia già [installato il tema Blowfish]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
Abbiamo appena lanciato uno strumento CLI per aiutarvi a iniziare con Blowfish. Vi aiuterà con l'installazione e la configurazione. Installate lo strumento CLI a livello globale utilizzando:
```bash
npx blowfish-tools
```
{{< /alert >}}


I file di configurazione forniti con Blowfish contengono tutte le possibili impostazioni riconosciute dal tema. Per impostazione predefinita, molti di questi sono commentati ma puoi semplicemente decommentarli per attivare o modificare una funzionalità specifica.

## Configurazione di base

Prima di creare qualsiasi contenuto, è necessario impostare alcune cose per una nuova installazione. Iniziando dal file `config.toml`, imposta i parametri `baseURL` e `lingualCode`. Il `lingualCode` dovrebbe essere impostato sulla lingua principale che utilizzerai per creare i tuoi contenuti.

```toml
# config/_default/config.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

Il passo successivo è configurare le impostazioni della lingua. Sebbene Blowfish supporti le configurazioni multilingue, per ora basta configurare la lingua principale.

Individua il file "languages.en.toml" nella cartella di configurazione. Se la tua lingua principale è l'inglese puoi utilizzare questo file così com'è. Altrimenti, rinominalo in modo che includa il codice della lingua corretto nel nome del file. Ad esempio, per il francese, rinominare il file in "languages.fr.toml".

{{< alert >}}
Tieni presente che il codice della lingua nel nome del file di configurazione della lingua deve corrispondere all'impostazione "languageCode" in "config.toml".
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```
La configurazione `[author]` determina il modo in cui le informazioni sull'autore vengono visualizzate sul sito web. L'immagine deve essere posizionata nella cartella `assets/`. I link verranno visualizzati nell'ordine in cui sono elencati.

Se hai bisogno di ulteriori dettagli, ulteriori informazioni su ciascuna di queste opzioni di configurazione sono trattate nella sezione [Configurazione]({{< ref "configuration" >}}).

## Schemi di colori

Blowfish viene fornito con una serie di schemi di colori già pronti. Per cambiare lo schema, è sufficiente impostare il parametro del tema `colorScheme`. Le opzioni valide sono `blowfish` (default), `avocado`, `fire`, `ocean`, `forest`, `princess`, `neon`, `bloody`, `terminal`, `marvel`, `noir`, `autumn`, `congo`, and`slate`.

```toml
# config/_default/params.toml

colorScheme = "blowfish"
```
Blowfish definisce una palette di tre colori che viene utilizzata in tutto il tema. Ogni colore principale contiene dieci sfumature basate sui colori inclusi in [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference). I tre colori principali sono utilizzati per l'intestazione, il piè di pagina e i colori d'accento. Ecco i colori per ogni schema:

#### Blowfish (default)
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Avocado
{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Fire
{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Forest
{{< swatches "#658c86" "#3bf5df" "#06d45c" >}}

#### Princess
{{< swatches "#8c658c" "#f53bf2" "#7706d4" >}}

#### Neon
{{< swatches "#8338ec" "#ff006e" "#3a86ff" >}}

#### Bloody
{{< swatches "#d90429" "#8d99ae" "#457b9d" >}}

#### Terminal
{{< swatches "#004b23" "#38b000" "#1a759f" >}}

#### Marvel
{{< swatches "#2541b2" "#d81159" "#ffbc42" >}}

#### Noir
{{< swatches "#5c6b73" "#9db4c0" "#00a5cf" >}}

#### Autumn
{{< swatches "#0a9396" "#ee9b00" "#bb3e03" >}}

#### Congo
{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Slate
{{< swatches "#6B7280" "#64748b" "#6B7280" >}}


Sebbene questi siano gli schemi predefiniti, è possibile crearne di propri. Per maggiori informazioni, consultare la sezione [Personalizzazione avanzata]({{< ref "advanced-customisation#colour-schemes" >}}).

## Organizzazione dei contenuti

Per impostazione predefinita, Blowfish non obbliga a utilizzare un particolare tipo di contenuto. In questo modo si è liberi di definire il contenuto come si desidera. Potreste preferire _pages_ per un sito statico, _posts_ per un blog o _projects_ per un portfolio.

Ecco una rapida panoramica di un progetto base di Blowfish. Tutti i contenuti sono inseriti nella cartella `content`:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```
È importante avere una conoscenza approfondita di come Hugo si aspetta che il contenuto sia organizzato, poiché il tema è progettato per sfruttare appieno i pacchetti di pagine di Hugo. Si consiglia di leggere i [documentazione ufficiale di Hugo](https://gohugo.io/content-management/organization/) per maggiori informazioni.


Blowfish è flessibile anche per quanto riguarda le tassonomie. Alcuni preferiscono usare _tags_ e _categories_ per raggruppare i loro contenuti, altri preferiscono usare _topics_.

Hugo usa di default post, tag e categorie e questo funziona bene se è quello che vuoi. Tuttavia, se desideri personalizzare questo aspetto, è possibile farlo creando un file di configurazione `taxonomies.toml`:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

This will replace the default _tags_ and _categories_ with _topics_. Refer to the [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) for more information on naming taxonomies.

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the correct sections, which is covered below.

## Menus

Blowfish has two menus that can be customised to suit the content and layout of your site. The `main` menu appears in the site header and the `footer` menu appears at the bottom of the page just above the copyright notice.

Both menus are configured in the `menus.en.toml` file. Similarly to the languages config file, if you wish to use another language, rename this file and replace `en` with the language code you wish to use.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Privacy"
  url = "https://external-link"
```

The `name` parameter specifies the text that is used in the menu link. You can also optionally provide a `title` which fills the HTML title attribute for the link.

The `pageRef` parameter allows you to easily reference Hugo content pages and taxonomies. It is the quickest way to configure the menu as you can simply refer to any Hugo content item and it will automatically build the correct link. To link to external URLs, the `url` parameter can be used.

The `pre` parameter allows you to place an icon from [Blowfish's icon set]({{< ref "samples/icons" >}}) on the menu entry. This parameter can be used with `name` parameter or by itself. If you want to use multiple menu entries with just icons please set the `identifier`parameter otherwise Hugo will default to the naming tag as the id and probably not display all the menu entries.

Menu links will be sorted from lowest to highest `weight`, and then alphabetically by `name`.

Both menus are completely optional and can be commented out if not required. Use the template provided in the file as a guide.

### Nested menus

The theme also supports nested menus. In order to use them you just need to define a parent entry in `menu.toml` and its sub-menus using the `parent` parameter to reference the parent. All properties can be used for sub-menus. `pageRef` and `url` can also be used in the parent entry. Nested menus are only available in the main menu not for the footer.

```toml
# config/_default/menus.toml

[[main]]
  name = "Parent"
  weight = 20

[[main]]
  name = "sub-menu 1"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 2"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 3"
  parent = "Parent"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Sub-Navigation menu

Additionally, you can also configure a sub-navigation menu. Just define new menu entries as `subnavigation` in `menus.toml`.
This will render a second line with sub-categories below the main header menu.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "An interesting topic"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "My Awesome Category"
  pageRef = "categories/awesome"
  weight = 20
```

The default `name` is the `pageRef` title cased.

## Thumbnails & Backgrounds

Blowfish was built so it would be easy to add visual support to your articles. If your familiar with Hugo article structure, you just need to place an image file (almost all formats are supported but we recommend `.png` or `.jpg`) that starts with `feature*` inside your article folder. And that's it, Blowfish will then be able to both use the image as a thumbnail within your website as well as for <a target="_blank" href="https://oembed.com/">oEmbed</a> cards across social platforms. 

[Here]({{< ref "thumbnails" >}}) is also a guide with more info and a [sample]({{< ref "thumbnail_sample" >}}) if you want to see how you can do it.

Additionally, Blowfish also supports background hero images in articles and lists. In order to use a different image than the featured one, add an image file in which the name starts with `background*`.

## Detailed configuration

The steps above are the bare minimum configuration. If you now run `hugo server` you will be presented with a blank Blowfish website. Detailed configuration is covered in the [Configuration]({{< ref "configuration" >}}) section.
