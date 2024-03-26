---
title: "Installazione"
date: 2020-08-16
draft: false
description: "Come installare il tema Blowfish."
slug: "installation"
tags: ["installazione", "documenti"]
series: ["Documentazione"]
series_order: 2
---

Segui semplicemente la procedura standard [Avvio Rapido](https://gohugo.io/getting-started/quick-start/) di Hugo per iniziare subito.

Sono riportate le istruzioni dettagliate per l'installazione. Sono disponibili anche le istruzioni per [aggiornare il tema](#installazione-aggiornamenti).

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

### Installazione Manuale

#### Crea un novo sito

Esegui il comando `hugo new site mywebsite` per creare un nuovo sito di Hugo in una cartella chiamata `mywebsite`.

La cartella del progetto può essere chiamata come si vuole, ma le istruzioni che seguono presuppongono che si chiami `mywebsite`. Se si usa un nome diverso, sostituiscilo di conseguenza.

#### Scaricare il tema Blowfish

Esistono diversi modi per installare il tema Blowfish nel proprio sito web Hugo. Dal più facile al più difficile da installare e mantenere, sono:

- [Git submodule](#install-using-git) (recommended)
- [Hugo module](#install-using-hugo) 
- [Copia manuale dei file](#install-manually)

Se non sei sicuro, scegli il metodo Git submodule.

##### Installazione usando Git

Questo è il metodo piu facile e veloce per mantere il tema aggiornato. Oltre **Hugo** e **Go**, dovrai assicurarti di avere **Git** installato nel tuo local machine.

cambia la directory del tuo sito web Hugo (che hai creato sopra), inizializza un nuovo repository `git` e aggiungi Blowfish come sottomodulo.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

poi continua a [impostare i file di configurazione del tema](#set-up-theme-configuration-files).

##### Installazione usando Hugo

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
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Avvia il tuo server utilizzando `hugo server` e il tema verrà scaricato automaticamente.
5. Continua con [impostare i file di configurazione del tema](#set-up-theme-configuration-files).

##### Installazione manuale
1. Scarica l'ultima versione del codice sorgente del tema.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Scarica da Github{{< /button >}}

 "blowfish" e "themes/" 
2. Estrai l'archivio, rinomina la cartella in `blowfish`  spostala nella directory `themes/` all'interno della cartella principale del tuo progetto Hugo.
3. Continua con [impostare i file di configurazione del tema](#set-up-theme-configuration-files).

#### Imposta i file di configurazione del tema

Nella cartella principale del tuo sito web, elimina il file `config.toml` generato da Hugo. Copia i file di configurazione `*.toml` dal tema nella tua cartella `config/_default/`. Ciò ti garantirà di avere tutte le impostazioni corrette del tema e ti consentirà di personalizzare facilmente il tema in base alle tue esigenze.

Nella cartella principale del tuo sito web, elimina il file `config.toml` generato da Hugo. Copia i file di configurazione `*.toml` dal tema della tua cartella `config/_default/` folder. Ti garantirà di avere tutte le impostazioni corrette del tema e ti consentirà di personalizzare facilmente il tema in base alle tue esigenze.

{{< alert >}}
**Note:** Non dovresti sovrascrivere il file `module.toml` se ne esiste già uno nel tuo progetto!
{{< /alert >}}

A seconda di come hai installato il tema, troverai i file di configurazione del tema in posti diversi:

- **Hugo Modules:** In the Hugo cache directory, or [download a copy](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nunocoracao/blowfish/tree/main/config/_default) from GitHub
- **Git submodule or Manual install:** `themes/blowfish/config/_default`

Once you've copied the files, your config folder should look like this:

```shell
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # if you installed using Hugo Modules
└─ params.toml
```

{{< alert >}}
**Important:** If you didn't use Hugo Modules to install Blowfish, you must add the line `theme = "blowfish"` to the top of your `config.toml` file.
{{< /alert >}}

### Next steps

The basic Blowfish installation is now complete. Continue to the [Getting Started]({{< ref "getting-started" >}}) section to learn more about configuring the theme.

---

## Installing updates

From time to time there will be [new releases](https://github.com/nunocoracao/blowfish/releases) posted that apply fixes and add new functionality to the theme. In order to take advantage of these changes, you will need to update the theme files on your website.

How you go about this will depend on the installation method you chose when the theme was originally installed. Instructions for each method can be found below.

- [Git submodule](#update-using-git)
- [Hugo module](#update-using-hugo)
- [Manual file copy](#update-manually)

### Update using git

Git submodules can be updated using the `git` command. Simply execute the following command and the latest version of the theme will be downloaded into your local repository:

```shell
git submodule update --remote --merge
```

Once the submodule has been updated, rebuild your site and check everything works as expected.

### Update using Hugo

Hugo makes updating modules super easy. Simply change into your project directory and execute the following command:

```shell
hugo mod get -u
```

Hugo will automatically update any modules that are required for your project. It does this by inspecting your `module.toml` and `go.mod` files. If you have any issues with the update, check to ensure these files are still configured correctly.

Then simply rebuild your site and check everything works as expected.

### Update manually

Updating Blowfish manually requires you to download the latest copy of the theme and replace the old version in your project.

{{< alert >}}
Note that any local customisations you have made to the theme files will be lost during this process.
{{< /alert >}}

1. Download the latest release of the theme source code.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. Extract the archive, rename the folder to `blowfish` and move it to the `themes/` directory inside your Hugo project's root folder. You will need to overwrite the existing directory to replace all the theme files.

3. Rebuild your site and check everything works as expected.
