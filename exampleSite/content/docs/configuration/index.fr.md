---
title: "Configuration"
weight: 4
draft: false
description: "Toutes les variables de configuration disponibles dans Blowfish."
slug: "configuration"
tags: ["configuration", "documentation"]
series: ["Documentation"]
series_order: 4
---

Blowfish est un thème hautement personnalisable et utilise certaines des dernières fonctionnalités de Hugo pour simplifier sa configuration.

Le thème est livré avec une configuration par défaut qui vous permet de démarrer avec un blog ou un site web statique de base.

{{< alert "fire" >}}
Nous venons de lancer un outil CLI pour vous aider à démarrer avec Blowfish. Il vous aidera avec l'installation et la configuration. Installez l'outil CLI globalement en utilisant :

```bash
npx blowfish-tools
```

{{< /alert >}}

> Les fichiers de configuration fournis avec le thème sont au format TOML car c'est la syntaxe Hugo par défaut. N'hésitez pas à convertir votre configuration en YAML ou JSON si vous le souhaitez.

La configuration par défaut du thème est documentée dans chaque fichier afin que vous puissiez librement ajuster les paramètres selon vos besoins.

{{< alert >}}
Comme indiqué dans les [instructions d'installation]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), vous devez ajuster la configuration de votre thème en modifiant les fichiers dans le dossier `config/_default/` de votre projet Hugo et supprimer le fichier `hugo.toml` à la racine de votre projet.
{{< /alert >}}

## Configuration du site

Les variables de configuration Hugo standard sont respectées dans tout le thème, cependant il y a certaines choses spécifiques qui doivent être configurées pour une meilleure expérience.

La configuration du site est gérée via le fichier `config/_default/hugo.toml`. Le tableau ci-dessous présente tous les paramètres que Blowfish utilise.

Notez que les noms de variables fournis dans ce tableau utilisent la notation pointée pour simplifier la structure de données TOML (c'est-à-dire que `outputs.home` fait référence à `[outputs] home`).

<!-- prettier-ignore-start -->
| Nom | Défaut | Description |
| --- | --- | --- |
| `theme` | `"blowfish"` | Lors de l'utilisation des modules Hugo, cette valeur de configuration doit être supprimée. Pour tous les autres types d'installation, cela doit être défini sur `blowfish` pour que le thème fonctionne. |
| `baseURL` | _Non défini_ | L'URL vers la racine du site web. |
| `defaultContentLanguage` | `"en"` | Cette valeur détermine la langue par défaut des composants du thème et du contenu. Consultez la section [langue et i18n](#langue-et-i18n) ci-dessous pour les codes de langue pris en charge. |
| `enableRobotsTXT` | `true` | Lorsqu'il est activé, un fichier `robots.txt` sera créé à la racine du site permettant aux moteurs de recherche d'explorer l'ensemble du site. Si vous préférez fournir votre propre `robots.txt` préfabriqué, définissez sur `false` et placez votre fichier dans le répertoire `static`. Pour un contrôle complet, vous pouvez fournir une [mise en page personnalisée]({{< ref "content-examples#custom-layouts" >}}) pour générer ce fichier. |
| `pagination.pagerSize` | `10` | Le nombre d'articles listés sur chaque page de la liste d'articles. |
| `summaryLength` | `0` | Le nombre de mots utilisés pour générer le résumé de l'article lorsqu'aucun n'est fourni dans le [front matter]({{< ref "front-matter" >}}). Une valeur de `0` utilisera la première phrase. Cette valeur n'a aucun effet lorsque les résumés sont masqués. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | Les formats de sortie générés pour le site. Blowfish nécessite HTML, RSS et JSON pour que tous les composants du thème fonctionnent correctement. |
| `permalinks` | _Non défini_ | Consultez la [documentation Hugo](https://gohugo.io/configuration/permalinks/) pour la configuration des permaliens. |
| `taxonomies` | _Non défini_ | Consultez la section [Organisation du contenu]({{< ref "getting-started#organising-content" >}}) pour la configuration des taxonomies. |
<!-- prettier-ignore-end -->

## Vignettes

Blowfish a été conçu pour qu'il soit facile d'ajouter un support visuel à vos articles. Si vous êtes familier avec la structure des articles Hugo, il vous suffit de placer un fichier image (presque tous les formats sont pris en charge mais nous recommandons `.png` ou `.jpg`) qui commence par `feature*` dans votre dossier d'article. Et c'est tout, Blowfish pourra alors utiliser l'image à la fois comme vignette sur votre site et pour les cartes <a target="_blank" href="https://oembed.com/">oEmbed</a> sur les plateformes sociales.

[Voici]({{< ref "thumbnails" >}}) également un guide avec plus d'informations et un [exemple]({{< ref "thumbnail_sample" >}}) si vous voulez voir comment faire.

## Langue et i18n

Blowfish est optimisé pour les sites web entièrement multilingues et les ressources du thème sont traduites dans plusieurs langues par défaut. La configuration de la langue vous permet de générer plusieurs versions de votre contenu pour offrir une expérience personnalisée à vos visiteurs dans leur langue maternelle.

Le thème prend actuellement en charge les langues suivantes par défaut :

| Langue | Code |
| --- | --- |
| Arabe | `ar` |
| Bulgare | `bg` |
| Bengali | `bn` |
| Catalan | `ca` |
| Tchèque | `cs` |
| Allemand | `de` |
| Anglais | `en` |
| Espéranto | `eo` |
| Espagnol (Espagne) | `es` |
| Finnois | `fi` |
| Français | `fr` |
| Galicien | `gl` |
| Hébreu | `he` |
| Croate | `hr` |
| Hongrois | `hu` |
| Indonésien | `id` |
| Italien | `it` |
| Japonais | `ja` |
| Coréen | `ko` |
| Néerlandais | `nl` |
| Persan | `fa` |
| Polonais | `pl` |
| Portugais (Brésil) | `pt-br` |
| Portugais (Portugal) | `pt-pt` |
| Roumain | `ro` |
| Russe | `ru` |
| Thaï | `th` |
| Turc | `tr` |
| Vietnamien | `vi` |
| Chinois simplifié (Chine) | `zh-cn` |
| Chinois traditionnel (Taïwan) | `zh-tw` |

Les traductions par défaut peuvent être remplacées en créant un fichier personnalisé dans `i18n/[code].yaml` contenant les chaînes de traduction. Vous pouvez également utiliser cette méthode pour ajouter de nouvelles langues. Si vous souhaitez partager une nouvelle traduction avec la communauté, veuillez [ouvrir une pull request](https://github.com/nunocoracao/blowfish/pulls).

### Configuration

Afin d'être aussi flexible que possible, un fichier de configuration de langue doit être créé pour chaque langue du site. Par défaut, Blowfish inclut une configuration de langue anglaise dans `config/_default/languages.en.toml`.

Le fichier par défaut peut être utilisé comme modèle pour créer des langues supplémentaires, ou renommé si vous souhaitez rédiger votre site dans une langue autre que l'anglais. Nommez simplement le fichier en utilisant le format `languages.[language-code].toml`.

{{< alert >}}
**Note :** Assurez-vous que le paramètre `defaultContentLanguage` dans la [configuration du site](#configuration-du-site) correspond au code de langue dans le nom de fichier de configuration de langue.
{{< /alert >}}

Pour des informations détaillées sur tous les paramètres de configuration disponibles, consultez la documentation en anglais car les noms de paramètres sont techniques et restent dans leur forme originale.

## Paramètres du thème

Blowfish fournit un grand nombre de paramètres de configuration qui contrôlent le fonctionnement du thème. La liste complète de tous les paramètres disponibles se trouve dans le fichier `config/_default/params.toml`.

De nombreuses valeurs par défaut des articles peuvent être remplacées article par article en les spécifiant dans le front matter. Consultez la section [Front Matter]({{< ref "front-matter" >}}) pour plus de détails.

## Autres fichiers de configuration

Le thème inclut également un fichier de configuration `markup.toml`. Ce fichier contient des paramètres importants qui garantissent que Hugo est correctement configuré pour générer des sites construits avec Blowfish.

Assurez-vous toujours que ce fichier est présent dans le répertoire de configuration et que les valeurs requises sont définies. Ne pas le faire peut entraîner un fonctionnement incorrect de certaines fonctionnalités et un comportement inattendu.
