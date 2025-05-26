---
title: "Installazione"
weight: 2
draft: false
description: "Come installare il tema Blowfish."
slug: "installation"
tags: ["installazione", "documenti"]
series: ["Documentazione"]
series_order: 2
---

Segui semplicemente la procedura standard [Avvio Rapido](https://gohugo.io/getting-started/quick-start/) di Hugo per iniziare subito.

Sono riportate le istruzioni dettagliate per l'installazione. Sono disponibili anche le istruzioni per [aggiornare il tema](#installazione-degli-aggiornamenti).

## Installazione

Queste istruzioni ti consentiranno di iniziare a utilizzare Hugo e Blowfish partendo da uno stato completamente vuoto. La maggior parte delle dipendenze menzionate in questa guida possono essere installate utilizzando il gestore pacchetti corretti per la tua piattaforma.

### Installare Hugo

Se non hai mai utilizzato Hugo prima, dovrai [installarlo nella tua local machine] (https://gohugo.io/getting-started/installing).
Puoi verificare se hai già installato Hugo utilizzando il comando `hugo version`.

{{< alert >}}
Assicurati di usare la **versione 0.87.0 di Hugo** o successiva, poiché il tema sfrutta alcune delle ultime caratteristiche di Hugo.
{{< /alert >}}

Puoi trovare le istruzioni dettagliate sull'installazione per la propria piattaforma in [Documenti Hugo](https://gohugo.io/getting-started/installing).

### Strumenti Blowfish (raccomandato)

Abbiamo appena lanciato un nuovo strumento CLI per aiutarti a iniziare con Blowfish. Questo ti permette di creare un nuovo progetto Hugo, di installare il tema e di impostare i file di configurazione del tema per te. È ancora in fase beta, quindi per favore [segnala qualsiasi problema che riscontri] (https://github.com/nunocoracao/blowfish-tools).

Installa globalmente lo strumento CLI usando npm (o altri gestori di pacchetti):
```shell
npx blowfish-tools
```
oppure

```shell
npm i -g blowfish-tools
```

Poi esegui il comando `blowfish-tools` per avviare un'esecuzione interattiva che ti guiderà attraverso la creazione e la configurazione dei casi d'uso.
```shell
blowfish-tools
```
È anche possibile eseguire il comando `blowfish-tools new` per creare un nuovo progetto Hugo e installare il tema in una sola volta. Per ulteriori informazioni, consulta la guida del CLI.
```shell
blowfish-tools new mynewsite
```
Ecco un rapido video che ti mostra quanto sia veloce iniziare a utilizzare Blowfish con lo strumento CLI:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Installazione senza CLI

#### Crea un novo sito

Esegui il comando `hugo new site mywebsite` per creare un nuovo sito di Hugo in una cartella chiamata `mywebsite`.

La cartella del progetto può essere chiamata come si vuole, ma le istruzioni che seguono presuppongono che si chiami `mywebsite`. Se si usa un nome diverso, sostituiscilo di conseguenza.

#### Scaricare il tema Blowfish

Esistono diversi modi per installare il tema Blowfish nel proprio sito web Hugo. Dal più facile al più difficile da installare e mantenere, sono:

- [Git submodule](#installazione-usando-git) (recommended)
- [Hugo module](#installazione-usando-hugo)
- [Copia manuale dei file](#installazione-manuale)

Se non sei sicuro, scegli il metodo Git submodule.

#### Installazione usando Git

Questo è il metodo piu facile e veloce per mantere il tema aggiornato. Oltre **Hugo** e **Go**, dovrai assicurarti di avere **Git** installato nel tuo local machine.

cambia la directory del tuo sito web Hugo (che hai creato sopra), inizializza un nuovo repository `git` e aggiungi Blowfish come sottomodulo.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

poi continua a [impostare i file di configurazione del tema](#imposta-i-file-di-configurazione-del-tema).

#### Installazione usando Hugo

Per questo metodo utilizzerai Hugo per gestire i tuoi temi. Hugo utilizza **Go** per inizializzare e gestire i moduli, quindi assicurati di aver installato `go` prima di procedere.

1. [Scarica](https://golang.org/dl/) e installa Go. Puoi verificare se l'hai già installato utilizzando il comando `go version`.

   {{< alert >}}
   Assicurati di usare la **versione Go 1.12** o successive poiché Hugo lo richiede affinché i moduli funzionino correttamente.
   {{< /alert >}}

2. Dalla directory del tuo progetto Hugo (che hai creato sopra), inizializza i moduli per il tuo sito web:

   ```shell
   # Se gestisci il tuo progetto su GitHub
   Hugo mod init github.com/<nomeutente>/<nome-repo>

   # Se gestisci il tuo progetto localmente
   Hugo mod init my-project
   ```

3. Aggiungi il tema alla tua configurazione creando un nuovo file `config/_default/module.toml` e aggiungendo quanto segue:

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Avvia il tuo server utilizzando `hugo server` e il tema verrà scaricato automaticamente.
5. Continua con [impostare i file di configurazione del tema](#imposta-i-file-di-configurazione-del-tema).

#### Installazione manuale
1. Scarica l'ultima versione del codice sorgente del tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Scarica da Github{{< /button >}}

 "blowfish" e "themes/" 
2. Estrai l'archivio, rinomina la cartella in `blowfish`  spostala nella directory `themes/` all'interno della cartella principale del tuo progetto Hugo.
3. Continua con [impostare i file di configurazione del tema](#imposta-i-file-di-configurazione-del-tema).

#### Imposta i file di configurazione del tema

Nella cartella principale del tuo sito web, elimina il file `hugo.toml` generato da Hugo. Copia i file di configurazione `*.toml` dal tema nella tua cartella `config/_default/`. Ciò ti garantirà di avere tutte le impostazioni corrette del tema e ti consentirà di personalizzare facilmente il tema in base alle tue esigenze.

{{< alert >}}
**Note:** Non dovresti sovrascrivere il file `module.toml` se ne esiste già uno nel tuo progetto!
{{< /alert >}}

A seconda di come hai installato il tema, troverai i file di configurazione del tema in posti diversi:

- **Hugo modules:** Nella directory della cache di Hugo o [scarica una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip tree/main/config/_default) da GitHub
- **Git submodule o installazione manuale:** `themes/blowfish/config/_default`

Una volta che hai copiato i file, la tua cartella delle configurazioni dovrebbe essere cosi:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # se hai usato Hugo modules come installazione
└─ params.toml
```

{{< alert >}}
**Importante:** Se non hai utilizzato Hugo Modules per installare Blowfish, devi aggiungere la riga `theme = "blowfish"` all'inizio del tuo file `hugo.toml`.
{{< /alert >}}

### Passo successivo

L'installazione di base di Blowfish è ora completa. Continua alla sezione [Per iniziare]({{< ref "getting-started" >}}) per ulteriori informazioni sulla configurazione del tema.

---

## Installazione degli aggiornamenti

Di tanto in tanto verranno pubblicate [nuove versioni](https://github.com/nunocoracao/blowfish/releases) che applicano correzioni e aggiungono nuove funzionalità al tema. Per sfruttare questi cambiamenti, dovrai aggiornare i file del tema sul tuo sito web.

Il modo in cui procedere dipenderà dal metodo di installazione scelto al momento dell'installazione originale del tema. Le istruzioni per ciascun metodo sono disponibili di seguito.

- [Git submodule](#aggiornamento-utilizzando-git)
- [Hugo module](#aggiornamento-utilizzando-hugo)
- [Copia manuale del file](#aggiornamenti-manuali)

### Aggiornamento utilizzando Git

I sottomoduli Git possono essere aggiornati utilizzando il comando `git`. Esegui semplicemente il comando seguente e l'ultima versione del tema verrà scaricata nel tuo repository locale:

```shell
git submodule update --remote --merge
```

Una volta aggiornato il sottomodulo, riavvia il tuo sito e verifica che tutto funzioni come previsto.

### Aggiornamento utilizzando Hugo

Hugo rende l'aggiornamento dei moduli estremamente semplice. Basta passare alla directory del progetto ed eseguire il seguente comando:

```shell
hugo mod get -u
```

Hugo aggiornerà automaticamente tutti i moduli richiesti per il tuo progetto. Lo fa controllando i file `module.toml` e `go.mod`. In caso di problemi con l'aggiornamento, assicurati che questi file siano ancora configurati correttamente.

Quindi riavvia semplicemente il tuo sito e verifica che tutto funzioni come previsto.

### Aggiornamenti manuali

L'aggiornamento manuale di Blowfish richiede il download dell'ultima copia del tema e la sostituzione della vecchia versione nel progetto.

{{< alert >}}
Tieni presente che ogni personalizzazione locale apportata ai file del tema andranno perse durante questo processo.
{{< /alert >}}

1. Scarica l'ultima versione del codice sorgente del tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Scarica da Github{{< /button >}}

2. Estrai l'archivio, rinomina la cartella in "blowfish" e spostala nella directory "themes/" all'interno della cartella principale del tuo progetto Hugo. Dovrai sovrascrivere la directory esistente per sostituire tutti i file del tema.

3. Riavvia il tuo sito e verifica che tutto funzioni come previsto.
