---
title: "Benvenuti a Blowfish"
weight: 1
draft: false
description: "Scopri le novità della versione 2.0 di Blowfish."
tags: ["novità", "documenti"]
series: ["Documentazione"]
series_order: 1
---

{{< lead >}}
Blowfish è ricco di tantissime funzionalità.
{{< /lead >}}

Lo scopo originale di Blowfish era quello di sviluppare un tema semplice e leggero. Il tema è un fork del <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> e ne espande la visione iniziale.

## Tailwind CSS 3.0

Tailwind CSS è il cuore di Blowfish e questa versione contiene l'ultima [Tailwind CSS versione 3](https://tailwindcss.com/blog/tailwindcss-v3). Porta con sé ottimizzazioni delle prestazioni e supporto per alcune nuove fantastiche funzionalità CSS.

{{< youtube "TmWIrBPE6Bc" >}}

## Supporto multilingue

Blowfish è ora multilingue! Una funzionalità molto richiesta. Se pubblichi i tuoi contenuti in più lingue, il sito verrà realizzato con tutte le traduzioni disponibili.

<div class="text-2xl text-center" style="font-size: 2.8rem">:gb: :de: :fr: :es: :cn: :brazil: :tr: :bangladesh:</div>

Grazie ai contributi della community, Blowfish è già stato tradotto in [ventisei lingue](https://github.com/nunocoracao/blowfish/tree/main/i18n) e altre verranno aggiunte nel tempo. A proposito, le [richieste pull](https://github.com/nunocoracao/blowfish/pulls) per nuove lingue sono sempre benvenute!

## Supporto per la lingua RTL

Uno dei vantaggi delle nuove funzionalità Tailwind e Multilingual è la possibilità di aggiungere il supporto della lingua RTL. Se abilitato, l'intero sito ridiscorrerà i contenuti da destra a sinistra. Ogni elemento del tema è stato ridisegnato per garantire che abbia un bell'aspetto in questa modalità che aiuta gli autori che desiderano generare contenuti nelle lingue RTL. 

RTL è controllato in base alla lingua, quindi puoi mescolare e abbinare sia il contenuto RTL che LTR nei tuoi progetti e il tema risponderà di conseguenza.

## Ridimensionamento automatico delle immagini

Un grande cambiamento in Blowfish 2.0 è l'aggiunta del ridimensionamento automatico delle immagini. Utilizzando la potenza di Hugo Pipes, le immagini nei contenuti Markdown vengono ora ridimensionate automaticamente in diverse dimensioni di output. Questi vengono poi presentati utilizzando gli attributi HTML "srcset" che consentono di offrire dimensioni di file ottimizzate ai visitatori del tuo sito.

![](image-resizing.png)

```html
<!-- Markdown: ![My image](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w,
    /image_1270x0_resize_q75_box.jpg 2x"
  src="/image_635x0_resize_q75_box.jpg"
  alt="My image"
/>
```

La cosa interessante è che non c'è nulla che devi cambiare! Inserisci semplicemente la sintassi standard dell'immagine Markdown e lascia che il tema faccia il resto. Se desideri un po' più di controllo, lo shortcode `figure` è stato completamente riscritto per fornire gli stessi vantaggi di ridimensionamento.


## Ricerca nel sito

Basata su [Fuse.js](https://fusejs.io), la ricerca sul sito consente ai visitatori di trovare rapidamente e facilmente i tuoi contenuti. Tutte le ricerche vengono eseguite lato client, il che significa che non c'è nulla da configurare sul server e le query vengono eseguite molto velocemente. Abilita semplicemente la funzione nella configurazione del tuo sito e tutto è pronto. Oh, e supporta anche la navigazione completa tramite tastiera!

## Sommario

Una funzionalità molto richiesta, Blowfish ora supporta i sommari nelle pagine degli articoli. Puoi vedere come funziona in questa pagina. I contenuti sono completamente reattivi e si adatteranno per sfruttare lo spazio disponibile con diverse risoluzioni dello schermo. 

Disponibile su base globale o per articolo, il sommario può essere completamente personalizzato utilizzando i valori di configurazione Hugo standard, consentendoti di adattare il comportamento al tuo progetto.

## Miglioramenti dell'accessibilità

Dall'aggiunta di descrizioni ARIA a più elementi o semplicemente dalla regolazione del contrasto di alcuni elementi di testo, questa versione è la più accessibile finora. 

La versione 2 introduce anche i collegamenti "salta al contenuto" e "scorri verso l'alto" che consentono una navigazione rapida. Ci sono anche scorciatoie da tastiera per abilitare elementi come la ricerca senza raggiungere il mouse. 

Le nuove funzionalità di ridimensionamento delle immagini forniscono inoltre il pieno controllo sugli elementi "alt" e "titolo" consentendo un'esperienza accessibile a tutti i visitatori.

## Molto altro ancora

Ci sono innumerevoli altre funzioni da esplorare. Dalla possibilità di visualizzare tassonomie su articoli e pagine di elenchi, all'uso del nuovo parametro autore `headline` per personalizzare la propria homepage. Sono stati inoltre migliorati i dati strutturati JSON-LD, che ottimizzano ulteriormente le prestazioni SEO.