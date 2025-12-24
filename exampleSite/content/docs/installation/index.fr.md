---
title: "Installation"
weight: 2
draft: false
description: "Comment installer le thème Blowfish."
slug: "installation"
tags: ["installation", "documentation"]
series: ["Documentation"]
series_order: 2
---

Suivez simplement la procédure standard Hugo [Démarrage Rapide](https://gohugo.io/getting-started/quick-start/) pour être opérationnel rapidement.

Des instructions d'installation détaillées sont disponibles ci-dessous. Des instructions pour [mettre à jour le thème](#installation-des-mises-à-jour) sont également disponibles.

## Installation

Ces instructions vous permettront de démarrer avec Hugo et Blowfish à partir d'un état complètement vierge. La plupart des dépendances mentionnées dans ce guide peuvent être installées à l'aide du gestionnaire de paquets de votre choix pour votre plateforme.

### Installer Hugo

Si vous n'avez jamais utilisé Hugo auparavant, vous devrez [l'installer sur votre machine locale](https://gohugo.io/getting-started/installing). Vous pouvez vérifier s'il est déjà installé en exécutant la commande `hugo version`.

{{< alert >}}
Assurez-vous d'utiliser **Hugo version 0.141.0** ou ultérieure car le thème tire parti de certaines des dernières fonctionnalités de Hugo.
{{< /alert >}}

Vous pouvez trouver des instructions d'installation détaillées pour votre plateforme dans la [documentation Hugo](https://gohugo.io/getting-started/installing).

### Blowfish Tools (recommandé)

Nous venons de lancer un nouvel outil CLI pour vous aider à démarrer avec Blowfish. Il créera un nouveau projet Hugo, installera le thème et configurera les fichiers de configuration du thème pour vous. Il est encore en bêta, veuillez donc [signaler tout problème que vous rencontrez](https://github.com/nunocoracao/blowfish-tools).

Installez l'outil CLI globalement en utilisant npm (ou un autre gestionnaire de paquets) :
```shell
npx blowfish-tools
```
ou

```shell
npm i -g blowfish-tools
```

Exécutez ensuite la commande `blowfish-tools` pour démarrer une exécution interactive qui vous guidera à travers les cas d'utilisation de création et de configuration.
```shell
blowfish-tools
```

Vous pouvez également exécuter la commande `blowfish-tools new` pour créer un nouveau projet Hugo et installer le thème en une seule fois. Consultez l'aide CLI pour plus d'informations.
```shell
blowfish-tools new mynewsite
```

Voici une courte vidéo montrant à quelle vitesse vous pouvez démarrer avec Blowfish en utilisant l'outil CLI :

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Installation sans CLI

#### Créer un nouveau site

Exécutez la commande `hugo new site mywebsite` pour créer un nouveau site Hugo dans un répertoire nommé `mywebsite`.

Notez que vous pouvez nommer le répertoire du projet comme vous le souhaitez, mais les instructions ci-dessous supposent qu'il s'appelle `mywebsite`. Si vous utilisez un autre nom, assurez-vous de le remplacer en conséquence.

#### Télécharger le thème Blowfish

Il existe plusieurs façons d'installer le thème Blowfish dans votre site Hugo. De la plus facile à la plus difficile à installer et à maintenir, ce sont :

- [Sous-module Git](#installation-avec-git) (recommandé)
- [Module Hugo](#installation-avec-hugo)
- [Copie manuelle des fichiers](#installation-manuelle)

Si vous n'êtes pas sûr, choisissez la méthode du sous-module Git.

#### Installation avec Git

Cette méthode est la plus rapide et la plus facile pour maintenir le thème à jour. En plus de **Hugo** et **Go**, vous devez également vous assurer que **Git** est installé sur votre machine locale.

Accédez au répertoire de votre site Hugo (que vous avez créé ci-dessus), initialisez un nouveau dépôt `git` et ajoutez Blowfish comme sous-module.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Continuez ensuite à [configurer les fichiers de configuration du thème](#configurer-les-fichiers-de-configuration-du-thème).

#### Installation avec Hugo

Pour cette méthode, vous utiliserez Hugo pour gérer vos thèmes. Hugo utilise **Go** pour initialiser et gérer les modules, assurez-vous donc d'avoir `go` installé avant de continuer.

1. [Téléchargez](https://golang.org/dl/) et installez Go. Vous pouvez vérifier s'il est déjà installé en utilisant la commande `go version`.

   {{< alert >}}
   Assurez-vous d'utiliser **Go version 1.12** ou ultérieure car Hugo l'exige pour que les modules fonctionnent correctement.
   {{< /alert >}}

2. Depuis le répertoire de votre projet Hugo (que vous avez créé ci-dessus), initialisez les modules pour votre site :

   ```shell
   # Si vous gérez votre projet sur GitHub
   hugo mod init github.com/<username>/<repo-name>

   # Si vous gérez votre projet localement
   hugo mod init my-project
   ```

3. Ajoutez le thème à votre configuration en créant un nouveau fichier `config/_default/module.toml` et en ajoutant ce qui suit :

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Démarrez votre serveur en utilisant `hugo server` et le thème sera téléchargé automatiquement.
5. Continuez à [configurer les fichiers de configuration du thème](#configurer-les-fichiers-de-configuration-du-thème).

#### Installation manuelle

1. Téléchargez la dernière version du code source du thème.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Télécharger depuis Github{{< /button >}}

2. Extrayez l'archive, renommez le dossier en `blowfish` et déplacez-le dans le répertoire `themes/` à l'intérieur du dossier racine de votre projet Hugo.
3. Continuez à [configurer les fichiers de configuration du thème](#configurer-les-fichiers-de-configuration-du-thème).

#### Configurer les fichiers de configuration du thème

Dans le dossier racine de votre site, supprimez le fichier `hugo.toml` qui a été généré par Hugo. Copiez les fichiers de configuration `*.toml` du thème dans votre dossier `config/_default/`. Cela garantira que vous avez tous les paramètres de thème corrects et vous permettra de personnaliser facilement le thème selon vos besoins.

{{< alert >}}
**Note :** Vous ne devez pas écraser le fichier `module.toml` si un existe déjà dans votre projet !
{{< /alert >}}

Selon la façon dont vous avez installé le thème, vous trouverez les fichiers de configuration du thème à différents endroits :

- **Modules Hugo :** Dans le répertoire de cache Hugo, ou [téléchargez une copie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) depuis GitHub
- **Sous-module Git ou installation manuelle :** `themes/blowfish/config/_default`

Une fois que vous avez copié les fichiers, votre dossier de configuration devrait ressembler à ceci :

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # si vous avez installé en utilisant les modules Hugo
└─ params.toml
```

{{< alert >}}
**Important :** Si vous n'avez pas utilisé les modules Hugo pour installer Blowfish, vous devez ajouter la ligne `theme = "blowfish"` en haut de votre fichier `hugo.toml`.
{{< /alert >}}

### Étapes suivantes

L'installation de base de Blowfish est maintenant terminée. Continuez vers la section [Premiers Pas]({{< ref "getting-started" >}}) pour en savoir plus sur la configuration du thème.

---

## Installation des mises à jour

De temps en temps, de [nouvelles versions](https://github.com/nunocoracao/blowfish/releases) seront publiées avec des corrections de bugs et de nouvelles fonctionnalités pour le thème. Pour profiter de ces changements, vous devrez mettre à jour les fichiers du thème sur votre site.

La façon de procéder dépendra de la méthode d'installation que vous avez choisie lors de l'installation initiale du thème. Les instructions pour chaque méthode sont disponibles ci-dessous.

- [Sous-module Git](#mise-à-jour-avec-git)
- [Module Hugo](#mise-à-jour-avec-hugo)
- [Copie manuelle des fichiers](#mise-à-jour-manuelle)

### Mise à jour avec Git

Les sous-modules Git peuvent être mis à jour en utilisant la commande `git`. Exécutez simplement la commande suivante et la dernière version du thème sera téléchargée dans votre dépôt local :

```shell
git submodule update --remote --merge
```

Une fois le sous-module mis à jour, reconstruisez votre site et vérifiez que tout fonctionne comme prévu.

### Mise à jour avec Hugo

Hugo rend la mise à jour des modules super facile. Accédez simplement à votre répertoire de projet et exécutez la commande suivante :

```shell
hugo mod get -u
```

Hugo mettra automatiquement à jour tous les modules requis pour votre projet. Il le fait en inspectant vos fichiers `module.toml` et `go.mod`. Si vous avez des problèmes avec la mise à jour, vérifiez que ces fichiers sont toujours configurés correctement.

Reconstruisez ensuite simplement votre site et vérifiez que tout fonctionne comme prévu.

### Mise à jour manuelle

La mise à jour manuelle de Blowfish nécessite de télécharger la dernière copie du thème et de remplacer l'ancienne version dans votre projet.

{{< alert >}}
Notez que toutes les personnalisations locales que vous avez apportées aux fichiers du thème seront perdues au cours de ce processus.
{{< /alert >}}

1. Téléchargez la dernière version du code source du thème.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Télécharger depuis Github{{< /button >}}

2. Extrayez l'archive, renommez le dossier en `blowfish` et déplacez-le dans le répertoire `themes/` à l'intérieur du dossier racine de votre projet Hugo. Vous devrez écraser le répertoire existant pour remplacer tous les fichiers du thème.

3. Reconstruisez votre site et vérifiez que tout fonctionne comme prévu.
