---
title: "Per iniziare"
weight: 3
draft: false
description: "Tutte le variabili del front matter sono disponibili in Blowfish."
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
=======

```toml
# config/_default/hugo.toml

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

[params.author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```
La configurazione `[params.author]` determina il modo in cui le informazioni sull'autore vengono visualizzate sul sito web. L'immagine deve essere posizionata nella cartella `assets/`. I link verranno visualizzati nell'ordine in cui sono elencati.

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

Sostituirà i predefiniti _tags_ e _categorie_ con _topics_. Fare riferimento a [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) per ulteriori informazioni sulla denominazione delle tassonomie.

Quando crei una nuova tassonomia, è necessario sistemare i collegamenti di navigazione sul sito web per puntare alle sezioni corrette, come spiegato di seguito.

## Menu

Blowfish dispone di due menu che possono essere personalizzati per adattarsi al contenuto e al layout del sito. Il menu `main` appare nell'intestazione del sito e il menu `footer` appare in fondo alla pagina, appena sopra la nota di copyright.

Entrambi i menu sono configurati nel file `menus.en.toml`. Simile al file di configurazione delle lingue, se desideri utilizzare un'altra lingua, rinomina questo file e sostituisci `en` con il codice della lingua che si vuole utilizzare.


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

Il parametro `name` specifica il testo utilizzato nel collegamento al menu. Si può anche fornire facoltativamente un `title` che riempie l'attributo HTML title per il collegamento.

Il parametro `pageRef` consente di fare facilmente riferimento alle pagine di contenuto e alle tassonomie di Hugo. È il modo più rapido per configurare il menu, in quanto è sufficiente fare riferimento a qualsiasi elemento di contenuto di Hugo per creare automaticamente il collegamento corretto. Per collegarsi a URL esterni, si può usare il parametro `url`.

Il parametro `pre` consente di inserire un'icona dal [Set di icone di Blowfish] ({{< ref "samples/icons" >}}) nella voce di menu. Questo parametro può essere usato con il parametro `name` o da solo. Se si vogliono usare più voci di menu con le sole icone, imposta il parametro `identifier`, altrimenti Hugo sceglierà come id il tag di denominazione e probabilmente non visualizzerà tutte le voci di menu.

I collegamenti al menu saranno ordinati dal più basso al più alto `peso`, e poi in ordine alfabetico per `name`.

Entrambi i menu sono completamente opzionali e possono essere commentati se non sono necessari. Utilizzare il modello fornito nel file come guida.

### Nested Menu

Il tema supporta anche i menu nidificati. Per usarli devi solo definire una voce genitore in `menu.toml` e i suoi sottomenu utilizzando il parametro `parent` per fare riferimento al genitore. Tutte le proprietà possono essere utilizzate per i sottomenu. `pageRef` e `url` possono essere utilizzati anche nella voce principale. I menu nidificati sono disponibili solo nel menu principale e non nel footer.


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

### Menu di navigazione secondario

Inoltre, è possibile configurare un menu di sotto-navigazione. Basta definire nuove voci di menu come `subnavigation` in `menus.toml`.
Questo renderà una seconda riga con le sottocategorie sotto il menu principale dell'intestazione.

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

Il `name` predefinito è il titolo di `pageRef`, con le caselle.

## Thumbnails & Backgrounds

Blowfish è stato creato in modo che sia facile aggiungere supporto visivo ai tuoi articoli. Se hai familiarità con la struttura degli articoli di Hugo, devi solo inserire un file immagine (quasi tutti i formati sono supportati ma consigliamo `.png` o `.jpg`) che inizi con `feature*` all'interno della cartella dell'articolo. E questo è tutto, Blowfish sarà quindi in grado di utilizzare l'immagine sia come miniatura all'interno del tuo sito web sia per le schede <a target="_blank" href="https://oembed.com/">oEmbed</a> attraverso le piattaforme social.

[Qui]({{< ref "thumbnails" >}}) è anche una guida con maggiori informazioni e un [esempio]({{< ref "thumbnail_sample" >}}) se vuoi vedere come puoi farlo.

Additionally, Blowfish also supports background hero images in articles and lists. In order to use a different image than the featured one, add an image file in which the name starts with `background*`.
Inoltre, Blowfish supporta anche una background hero  image in articoli ed elenchi. Per utilizzare un'immagine diversa da quella in primo piano, aggiungi un file immagine il cui nome inizia con `background*`.

## Dettagli di configurazione

I passaggi precedenti rappresentano la configurazione minima. Se ora esegui `hugo server` ti verrà presentato un sito web Blowfish vuoto. La configurazione dettagliata è trattata nella sezione [Configurazione]({{< ref "configuration" >}}).
