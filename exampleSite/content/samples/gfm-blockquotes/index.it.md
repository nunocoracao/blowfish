---
title: "GFM Blockquotes"
date: 2024-09-08
draft: false
description: "Esempio che dimostra gli avvisi in stile GitHub basati sui blockquote."
slug: "gfm-blockquotes"
tags: ["alerts", "blockquote", "markdown", "sample"]
type: 'sample'
---

Questa pagina dimostra i GFM blockquotes (callout in stile GitHub) utilizzando i blockquote Markdown. È un’alternativa più semplice e portabile rispetto allo shortcode `alert`. Consulta anche lo [shortcode alert]({{< ref "docs/shortcodes#alert" >}}).

<!--more-->

## Differenze: GitHub-style vs shortcode `alert`

- GitHub-style: solo Markdown; ampiamente usato (GitHub, Obsidian); nessuno shortcode da ricordare; alta portabilità; personalizzazione visiva limitata (tipo/titolo), aspetto gestito dal tema.
- Shortcode `alert`: configurazione più ricca (icon, cardColor, textColor, ...); controllo preciso dell’aspetto; minore portabilità; richiede sintassi dello shortcode.
- Coesistenza: possono convivere; scegli in base alle esigenze del contenuto e preferenze dell’autore.

## Panoramica della sintassi

Scrivi un blockquote Markdown in cui la prima riga inizi con `[!TYPE]`, opzionalmente seguito da un titolo personalizzato. I tipi supportati includono: NOTE, INFO, TIP, IMPORTANT, WARNING, CAUTION, DANGER, ERROR, SUCCESS, CHECK.

```md
> [!NOTE]
> Questa è una nota con il titolo predefinito.

> [!TIP] Suggerimento Pro
> Titolo personalizzato, stessa sintassi.
```

> [!NOTE]
> Questa è una nota con il titolo predefinito.

> [!TIP] Suggerimento Pro
> Titolo personalizzato, stessa sintassi.

## Avvisi comprimibili

Aggiungi `+` per espandere di default, oppure `-` per comprimere di default.

```md
> [!INFO]+
> Questo avviso è espanso per impostazione predefinita.

> [!WARNING]-
> Questo avviso è compresso per impostazione predefinita.
```

> [!INFO]+
> Questo avviso è espanso per impostazione predefinita.

> [!WARNING]-
> Questo avviso è compresso per impostazione predefinita.

## Tipi aggiuntivi

```md
> [!IMPORTANT]
> Informazioni importanti che spiccano.

> [!CAUTION]
> Fai attenzione ai passaggi seguenti.

> [!SUCCESS]
> Operazione completata con successo.
```

> [!IMPORTANT]
> Informazioni importanti che spiccano.

> [!CAUTION]
> Fai attenzione ai passaggi seguenti.

> [!SUCCESS]
> Operazione completata con successo.

## Contenuti misti

```md
> [!NOTE] Elenchi, formattazione e codice
> - Più paragrafi
> - Un elenco con elementi
> - **Grassetto** e *corsivo*
> - `codice inline`
>
> Un altro paragrafo alla fine.
```

> [!NOTE] Elenchi, formattazione e codice
> - Più paragrafi
> - Un elenco con elementi
> - **Grassetto** e *corsivo*
> - `codice inline`
>
> Un altro paragrafo alla fine.

## Citazione normale (invariata)

I blockquote standard senza l’intestazione `[!TYPE]` non cambiano e vengono renderizzati normalmente.

> Questa è una normale citazione, renderizzata normalmente.

> [!TIP] Suggerimento
> Titolo personalizzato, stessa sintassi.

> [!INFO]+
> Questo avviso è espanso di default.

> [!WARNING]-
> Questo avviso è compresso di default.
