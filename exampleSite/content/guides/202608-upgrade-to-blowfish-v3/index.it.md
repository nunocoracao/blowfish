---
title: "Aggiorna un sito Hugo esistente a Blowfish 3"
description: "Porta un sito Blowfish esistente alla versione 3 senza modifiche incompatibili alla configurazione."
featureimage: "featured.png"
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 è retrocompatibile. I siti esistenti possono essere aggiornati senza riscrivere la configurazione o i contenuti.
{{< /lead >}}

## Prima dell'aggiornamento

Esegui il commit del sito attuale e assicurati che la versione di Hugo rientri nell'intervallo dichiarato da Blowfish. Se hai file personalizzati nella directory del tema, spostali prima nelle directory `assets/` o `layouts/` del sito, così gli aggiornamenti non li sovrascriveranno.

## Aggiorna l'installazione

### Modulo Hugo

Aggiorna il percorso del modulo in `config/_default/module.toml` includendo `/v3`, quindi aggiorna le dipendenze:

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Sottomodulo Git

```shell
git submodule update --remote --merge
```

### Installazione manuale

Scarica l'ultima release, sostituisci `themes/blowfish/` e mantieni la configurazione del sito in `config/_default/`.

## Verifica il risultato

Esegui `hugo server`, controlla la homepage e un articolo rappresentativo, quindi pubblica come di consueto. Le nuove funzionalità di Blowfish 3 sono opzionali, quindi il sito esistente dovrebbe essere visualizzato come prima.

Per un nuovo sito, usa invece `npx blowfish-tools new <site>` e segui la [guida all'installazione]({{< ref "docs/installation" >}}).
