---
title: "Mettre à niveau un site Hugo existant vers Blowfish 3"
description: "Faites passer un site Blowfish existant à la version 3 sans modification incompatible de la configuration."
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 est rétrocompatible. Les sites existants peuvent être mis à niveau sans réécrire leur configuration ni leur contenu.
{{< /lead >}}

## Avant la mise à niveau

Validez l'état actuel de votre site et assurez-vous que votre version de Hugo est comprise dans la plage déclarée par Blowfish. Si vous avez des fichiers personnalisés dans le répertoire du thème, déplacez-les d'abord dans les répertoires `assets/` ou `layouts/` de votre site afin que les mises à niveau ne les écrasent pas.

## Mettre à niveau votre installation

### Module Hugo

Modifiez le chemin du module dans `config/_default/module.toml` pour inclure `/v3`, puis actualisez les dépendances :

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Sous-module Git

```shell
git submodule update --remote --merge
```

### Installation manuelle

Téléchargez la dernière version, remplacez `themes/blowfish/` et conservez la configuration de votre site dans `config/_default/`.

## Vérifier le résultat

Exécutez `hugo server`, vérifiez votre page d'accueil et un article représentatif, puis déployez comme d'habitude. Les nouvelles fonctionnalités de Blowfish 3 sont optionnelles, votre site existant devrait donc s'afficher comme auparavant.

Pour un nouveau site, utilisez plutôt `npx blowfish-tools new <site>` et suivez le [guide d'installation]({{< ref "docs/installation" >}}).
