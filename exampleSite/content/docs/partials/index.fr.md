---
title: "Partials"
weight: 9
draft: false
description: "Tous les partials disponibles dans Blowfish."
slug: "partials"
tags: ["partials", "analytics", "confidentialité", "commentaires", "favicons", "icon", "documentation"]
series: ["Documentation"]
series_order: 9
---

## Analytics

Blowfish offre une prise en charge intégrée de Fathom Analytics, Google Analytics et Umami Analytics. Fathom est une alternative payante à Google Analytics qui respecte la vie privée des utilisateurs.

### Fathom Analytics

Pour activer la prise en charge de Fathom Analytics, fournissez simplement votre code de site Fathom dans le fichier `config/_default/params.toml`. Si vous utilisez également la fonctionnalité de domaine personnalisé de Fathom et souhaitez servir leur script depuis votre domaine, vous pouvez également fournir la valeur de configuration `domain`. Si vous ne fournissez pas de valeur `domain`, le script se chargera directement depuis le DNS de Fathom.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

La prise en charge de Google Analytics est fournie via le partial interne de Hugo. Fournissez simplement la clé `googleAnalytics` dans le fichier `config/_default/hugo.toml` et le script sera ajouté automatiquement.

Les versions 3 (analytics.js) et 4 (gtag.js) sont prises en charge, selon la valeur de configuration fournie :

```toml
# config/_default/hugo.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Pour activer la prise en charge d'Umami Analytics, fournissez simplement votre [code de suivi Umami](https://umami.is/docs/collect-data) dans le fichier `config/_default/params.toml`.
Si vous utilisez également la fonctionnalité de domaine personnalisé d'Umami et souhaitez servir leur script depuis votre domaine, vous pouvez également fournir la valeur de configuration `domain`. Si vous ne fournissez pas de valeur `domain`, le script se chargera directement depuis le DNS d'Umami (analytics.umami.is).
Si vous souhaitez que le tracker ne s'exécute que sur des domaines spécifiques, vous pouvez fournir la valeur de configuration `dataDomains`. Si vous ne fournissez pas de valeur `dataDomains`, le script s'exécutera sur tout site web où `domain` et `websiteid` correspondent. Si la variable d'environnement `TRACKER_SCRIPT_NAME` est configurée, vous pouvez spécifier un nom de script personnalisé `scriptName`. Si elle n'est pas configurée, commentez-la ou utilisez la valeur par défaut `script.js`.

{{< alert >}}
**Note :** Si vous activez Umami Analytics, Blowfish prendra en charge [Umami Track Event](https://umami.is/docs/track-events) automatiquement. Si vous ne souhaitez pas prendre en charge Track Event, le paramètre `enableTrackEvent` doit être défini sur `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

Pour activer la prise en charge de Seline Analytics, fournissez simplement votre [token Seline](https://seline.so/docs/install-seline) dans le fichier `config/_default/params.toml`.

{{< alert >}}
**Note :** Si vous activez Seline Analytics, Blowfish prendra en charge [Seline Track Event](https://seline.so/docs/custom-events) automatiquement. Si vous ne souhaitez pas prendre en charge Track Event, le paramètre `enableTrackEvent` doit être défini sur `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Fournisseurs d'analytics personnalisés

Si vous souhaitez utiliser un autre fournisseur d'analytics sur votre site web, vous pouvez également remplacer le partial analytics et fournir votre propre script. Créez simplement le fichier `layouts/partials/extend-head.html` dans votre projet et il sera automatiquement inclus dans le `<head>` du site web.

## Commentaires

Pour ajouter des commentaires à vos articles, Blowfish inclut la prise en charge d'un partial de commentaires qui est inclus en bas de chaque page d'article. Fournissez simplement un `layouts/partials/comments.html` contenant le code requis pour afficher vos commentaires choisis.

Vous pouvez utiliser soit le modèle Disqus intégré de Hugo, soit fournir votre propre code personnalisé. Consultez la [documentation Hugo](https://gohugo.io/content-management/comments/) pour plus d'informations.

Une fois le partial fourni, le contrôle plus fin de l'endroit où les commentaires sont affichés est ensuite géré via le paramètre `showComments`. Cette valeur peut être définie au niveau du thème dans le [fichier de configuration]({{< ref "configuration#theme-parameters" >}}) `params.toml`, ou par article en l'incluant dans le [front matter]({{< ref "front-matter" >}}). Le paramètre est par défaut `false`, il doit donc être défini sur `true` dans l'un de ces emplacements pour que les commentaires soient affichés.

## Favicons

Blowfish fournit un ensemble par défaut de favicons vides pour commencer, mais vous pouvez fournir vos propres ressources pour les remplacer. Le moyen le plus simple d'obtenir de nouvelles ressources favicon est de les générer à l'aide d'un fournisseur tiers comme [favicon.io](https://favicon.io).

Les ressources d'icônes doivent être placées directement dans le dossier `static/` de votre site web et nommées selon la liste ci-dessous. Si vous utilisez [favicon.io](https://favicon.io), ce seront les noms de fichiers qui seront automatiquement générés pour vous, mais vous pouvez fournir vos propres ressources si vous le souhaitez.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternativement, vous pouvez également remplacer complètement le comportement par défaut des favicons et fournir vos propres balises HTML favicon et ressources. Créez simplement un fichier `layouts/partials/favicons.html` dans votre projet et celui-ci sera injecté dans le `<head>` du site à la place des ressources par défaut.

## Icon

Similaire au [shortcode icon]({{< ref "shortcodes#icon" >}}), vous pouvez inclure des icônes dans vos propres templates et partials en utilisant le partial `icon.html` de Blowfish. Le partial prend un paramètre qui est le nom de l'icône à inclure.

**Exemple :**

```go
  {{ partial "icon.html" "github" }}
```

Les icônes sont remplies à l'aide des pipelines Hugo, ce qui les rend très flexibles. Blowfish inclut un certain nombre d'icônes intégrées pour les réseaux sociaux, les liens et d'autres usages. Consultez la page [exemples d'icônes]({{< ref "samples/icons" >}}) pour une liste complète des icônes prises en charge.

Des icônes personnalisées peuvent être ajoutées en fournissant vos propres ressources d'icônes dans le répertoire `assets/icons/` de votre projet. L'icône peut ensuite être référencée dans le partial en utilisant le nom du fichier SVG sans l'extension `.svg`.

Les icônes peuvent également être utilisées dans le contenu des articles en appelant le [shortcode icon]({{< ref "shortcodes#icon" >}}).

## Extensions

Blowfish fournit également un certain nombre de partials d'extension qui permettent d'étendre les fonctionnalités de base.

### Lien d'article

Si vous souhaitez insérer du code supplémentaire après les liens d'articles, créez un fichier `layouts/partials/extend-article-link.html`. C'est particulièrement puissant en combinaison avec le shortcode [`badge`]({{< ref "shortcodes#badge" >}}) qui peut être utilisé pour mettre en évidence les métadonnées de certains articles.

### Head et Footer

Le thème permet d'insérer du code supplémentaire directement dans les sections `<head>` et `<footer>` du template. Ceux-ci peuvent être utiles pour fournir des scripts ou d'autres logiques qui ne font pas partie du thème.

Créez simplement soit `layouts/partials/extend-head.html` soit `layouts/partials/extend-footer.html` et ceux-ci seront automatiquement inclus dans la construction de votre site web. Les deux partials sont injectés comme derniers éléments dans `<head>` et `<footer>`, ils peuvent donc être utilisés pour remplacer les valeurs par défaut du thème.

### Extension Head non mise en cache

Le `extend-head.html` est [mis en cache](https://gohugo.io/functions/partials/includecached/), et Blowfish prend également en charge une extension head non mise en cache pour inclure **conditionnellement** des scripts ou des métadonnées basées sur les propriétés au niveau de la page. Pour utiliser cette fonctionnalité, créez un fichier `layouts/partials/extend-head-uncached.html` dans votre projet. Ce fichier sera inclus dans la balise HTML `<head>`.

C'est utile lorsque vous devez inclure des éléments dynamiques—comme des scripts ou des métadonnées—basés sur des propriétés comme les shortcodes, les flags front matter, ou d'autres données spécifiques à la page qui ne devraient pas être mises en cache entre les builds.

Par exemple, pour charger dynamiquement un fichier JavaScript CDN basé sur l'apparition d'un shortcode, vous pouvez utiliser la méthode [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) dans `extend-head-uncached.html`.
