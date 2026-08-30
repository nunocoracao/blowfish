---
title: "Benvenuti a Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Crea un sito Hugo veloce ed espressivo con layout flessibili, strumenti per contenuti ricchi e un flusso di lavoro pronto per gli agenti."
lastmod: 2026-08-30
tags: ["novità", "documenti"]
series: ["Documentazione"]
series_order: 1
---

{{< lead >}}
Blowfish 3 è un tema Hugo moderno per blog, documentazione, portfolio e siti che non rientrano in un modello rigido.
{{< /lead >}}

{{< alert >}}
Crea un nuovo sito con `npx blowfish-tools new <site>`, quindi segui la [guida all'installazione]({{< ref "docs/installation" >}}). I siti Blowfish esistenti possono passare a v3 senza modifiche incompatibili alla configurazione.
{{< /alert >}}

## Crea il sito che hai in mente

Blowfish offre una solida base di partenza senza fissare il risultato. Scegli layout homepage profilo, landing, hero, a schede o con sfondo. Imposta colori, tipografia, navigazione, modalità scura e presentazione degli articoli dalla configurazione del sito. Usa il front matter quando una pagina deve essere diversa.

I contenuti restano Hugo portabile: Markdown, page bundle, tassonomie, menu e file di configurazione nel tuo repository. Non ci sono editor proprietari né vincoli di piattaforma.

## Pubblica contenuti più ricchi con meno codice

Scrivi in Markdown e usa gli [oltre 40 shortcode]({{< ref "docs/shortcodes" >}}) quando servono. Aggiungi pulsanti, avvisi, icone, schede, gallerie, grafici, diagrammi, card GitHub, video ed esempi di codice senza mantenere template specifici.

Blowfish gestisce anche ciò che circonda il contenuto: immagini e miniature responsive, ricerca, strumenti di lettura, indici, metadati social e SEO, dati strutturati, controlli di accessibilità e analytics, commenti oppure visualizzazioni e like Firebase opzionali.

## Per ogni lettore

Crea siti multilingue con contenuti tradotti, menu specifici per lingua e traduzioni dell'interfaccia incluse. Blowfish supporta lingue RTL e LTR nello stesso progetto, con selettore dell'aspetto, navigazione responsive e ricerca utilizzabile da tastiera.

Sotto il cofano, Blowfish usa funzionalità attuali di Hugo e Tailwind CSS 4, mantenendo un modello di configurazione e contenuti semplice da capire e sotto il tuo controllo.

## Dai al tuo agente il contesto giusto

Blowfish include una [skill per agenti](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) per agenti di programmazione IA come Claude Code. Insegna dove collocare la configurazione, come funzionano layout e front matter, quali shortcode esistono e come creare un sito Blowfish senza supposizioni.

Installala in Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Puoi anche copiare la skill in `.claude/skills/blowfish/` nel tuo progetto. L'agente potrà così aiutare con configurazione, struttura dei contenuti, design delle pagine e implementazione consapevole del tema, mentre il sito resta nel tuo repository.

## Scegli il prossimo passo

- Sei nuovo su Blowfish? Inizia da [Installazione]({{< ref "docs/installation" >}}).
- Vuoi dare forma al sito? Leggi [Per iniziare]({{< ref "docs/getting-started" >}}) e [Configurazione]({{< ref "docs/configuration" >}}).
- Vuoi vedere le possibilità? Esplora [Shortcode]({{< ref "docs/shortcodes" >}}), [Esempi]({{< ref "samples" >}}) e la [Galleria]({{< ref "examples" >}}).
- Stai migrando un sito esistente? Segui la [guida di aggiornamento a Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
