---
title: "Front Matter"
weight: 7
draft: false
description: "Toutes les variables front matter disponibles dans Blowfish."
slug: "front-matter"
tags: ["front matter", "configuration", "documentation"]
series: ["Documentation"]
series_order: 7
---

En plus des [paramètres front matter Hugo par défaut](https://gohugo.io/content-management/front-matter/#front-matter-variables), Blowfish ajoute un certain nombre d'options supplémentaires pour personnaliser la présentation des articles individuels. Tous les paramètres front matter du thème disponibles sont listés ci-dessous.

Les valeurs par défaut des paramètres front matter sont héritées de la [configuration de base]({{< ref "configuration" >}}) du thème, vous n'avez donc besoin de spécifier ces paramètres dans votre front matter que lorsque vous souhaitez remplacer la valeur par défaut.

<!-- prettier-ignore-start -->
| Nom | Défaut | Description |
| --- | --- | --- |
| `title` | _Non défini_ | Le nom de l'article. |
| `description` | _Non défini_ | La description textuelle de l'article. Elle est utilisée dans les métadonnées HTML. |
| `externalUrl` | _Non défini_ | Si cet article est publié sur un site tiers, l'URL vers cet article. Fournir une URL empêchera la génération d'une page de contenu et toutes les références à cet article pointeront directement vers le site tiers. |
| `editURL` | `article.editURL` | Lorsque `showEdit` est actif, l'URL du lien d'édition. |
| `editAppendPath` | `article.editAppendPath` | Lorsque `showEdit` est actif, si le chemin vers l'article actuel doit être ajouté à l'URL définie dans `editURL`. |
| `groupByYear` | `list.groupByYear` | Si les articles sont groupés par année sur les pages de liste. |
| `menu` | _Non défini_ | Lorsqu'une valeur est fournie, un lien vers cet article apparaîtra dans les menus nommés. Les valeurs valides sont `main` ou `footer`. |
| `robots` | _Non défini_ | Chaîne indiquant comment les robots doivent traiter cet article. Si défini, il sera affiché dans l'en-tête de la page. Consultez [la documentation Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) pour les valeurs valides. |
| `sharingLinks` | `article.sharingLinks` | Quels liens de partage afficher à la fin de cet article. Lorsque non fourni ou défini sur `false`, aucun lien ne sera affiché. |
| `showAuthor` | `article.showAuthor` | Si la boîte auteur pour l'auteur par défaut est affichée dans le pied de page de l'article. |
| `showAuthorBottom` | `article.showAuthorBottom` | Les boîtes auteur sont affichées en bas de chaque page au lieu du haut. |
| `authors` | _Non défini_ | Tableau de valeurs pour les auteurs, si défini, il remplace les paramètres `showAuthor` pour la page ou le site. Utilisé pour la fonctionnalité de multiples auteurs, consultez [cette page]({{< ref "multi-author" >}}) pour plus de détails sur la configuration. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Si les taxonomies `authors` sont affichées dans l'en-tête de l'article ou de la liste. Cela nécessite la configuration de `multiple authors` et de la taxonomie `authors`. Consultez [cette page]({{< ref "multi-author" >}}) pour plus de détails. |
| `featureimage` | _Non défini_ | Lien pour l'image mise en avant |
| `featureimagecaption` | _Non défini_ | Légende pour l'image mise en avant. Affichée uniquement dans le heroStyle `big` |
| `showHero` | `article.showHero` | Si l'image vignette sera affichée comme image hero dans la page de l'article. |
| `heroStyle` | `article.heroStyle` | Style d'affichage de l'image hero, les options valides sont : `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _Non défini_ | Définit la position de l'image mise en avant en utilisant l'attribut `object-position`. Les valeurs valides sont comme spécifié dans la [documentation MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it). |
| `showBreadcrumbs` | `article.showBreadcrumbs` ou `list.showBreadcrumbs` | Si les fils d'Ariane sont affichés dans l'en-tête de l'article ou de la liste. |
| `showDate` | `article.showDate` | Si la date de l'article est affichée. La date est définie avec le paramètre `date`. |
| `showDateUpdated` | `article.showDateUpdated` | Si la date de mise à jour de l'article est affichée. La date est définie avec le paramètre `lastmod`. |
| `showEdit` | `article.showEdit` | Si le lien pour éditer le contenu de l'article doit être affiché. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Si les liens d'ancrage des titres sont affichés à côté des titres dans cet article. |
| `showPagination` | `article.showPagination` | Si les liens article suivant/précédent sont affichés dans le pied de page de l'article. |
| `invertPagination` | `article.invertPagination` | Si la direction des liens article suivant/précédent doit être inversée. |
| `showReadingTime` | `article.showReadingTime` | Si le temps de lecture de l'article est affiché. |
| `showTaxonomies` | `article.showTaxonomies` | Si les taxonomies liées à cet article sont affichées. |
| `showTableOfContents` | `article.showTableOfContents` | Si la table des matières est affichée sur cet article. |
| `showWordCount` | `article.showWordCount` | Si le nombre de mots de l'article est affiché. |
| `showComments` | `article.showComments` | Si le [partial commentaires]({{< ref "partials#comments" >}}) est inclus après le pied de page de l'article. |
| `showSummary` | `list.showSummary` | Si le résumé de l'article doit être affiché sur les pages de liste. |
| `showViews` | `article.showViews` | Si les vues de l'article doivent être affichées dans les listes et la vue détaillée. Cela nécessite une intégration Firebase. Consultez [cette page]({{< ref "firebase-views" >}}) pour un guide sur l'intégration de Firebase. |
| `showLikes` | `article.showLikes` | Si les likes de l'article doivent être affichés dans les listes et la vue détaillée. Cela nécessite une intégration Firebase. Consultez [cette page]({{< ref "firebase-views" >}}) pour un guide sur l'intégration de Firebase. |
| `seriesOpened` | `article.seriesOpened` | Si le module de série sera affiché ouvert par défaut ou non. |
| `series` | _Non défini_ | Tableau des séries auxquelles l'article appartient, nous recommandons d'utiliser une seule série par article. |
| `series_order` | _Non défini_ | Numéro de l'article dans la série. |
| `summary` | Généré automatiquement avec `summaryLength` (voir [configuration du site]({{< ref "configuration#site-configuration" >}})) | Lorsque `showSummary` est activé, c'est la chaîne Markdown à utiliser comme résumé pour cet article. |
| `xml` | `true` sauf exclusion par `sitemap.excludedKinds` | Si cet article est inclus dans le fichier `/sitemap.xml` généré. |
| `excludeFromSearch` | `false` | Si cet article doit être exclu du sitemap et de l'index de recherche. Lorsque `true`, la page n'apparaîtra pas dans `sitemap.xml` ou `index.json`. |
| `layoutBackgroundBlur` | `true` | Fait flouter l'image d'arrière-plan dans le heroStyle background avec le défilement |
| `layoutBackgroundHeaderSpace` | `true` | Ajoute de l'espace entre l'en-tête et le corps. |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | Les liens externes dans le markdown doivent-ils s'ouvrir dans un nouvel onglet? |
<!-- prettier-ignore-end -->
