---
title: "Bienvenue sur Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Créez un site Hugo rapide et expressif avec des layouts flexibles, des outils de contenu riche et un flux de travail prêt pour les agents."
lastmod: 2026-08-30
tags: ["nouveau", "documentation"]
series: ["Documentation"]
series_order: 1
---

{{< lead >}}
Blowfish 3 est un thème Hugo moderne pour les blogs, la documentation, les portfolios et les sites qui ne rentrent pas dans un modèle figé.
{{< /lead >}}

{{< alert >}}
Créez un nouveau site avec `npx blowfish-tools new <site>`, puis suivez le [guide d'installation]({{< ref "docs/installation" >}}). Les sites Blowfish existants peuvent passer à v3 sans changement de configuration incompatible.
{{< /alert >}}

## Créez le site que vous imaginez

Blowfish offre un point de départ solide sans imposer le résultat. Choisissez un accueil profil, landing, hero, cartes ou arrière-plan. Réglez les couleurs, la typographie, la navigation, le mode sombre et la présentation des articles depuis la configuration de votre site. Utilisez le front matter lorsqu'une page doit être différente.

Votre contenu reste du contenu Hugo portable : Markdown, page bundles, taxonomies, menus et fichiers de configuration dans votre dépôt. Il n'y a ni éditeur propriétaire ni dépendance à une plateforme.

## Publiez un contenu plus riche avec moins de code

Écrivez en Markdown, puis utilisez les [plus de 40 shortcodes]({{< ref "docs/shortcodes" >}}) lorsque le contenu le demande. Ajoutez des boutons, alertes, icônes, onglets, galeries, graphiques, diagrammes, cartes GitHub, vidéos et exemples de code sans entretenir de templates ponctuels.

Blowfish s'occupe aussi de l'environnement du contenu : images et miniatures responsives, recherche, outils de lecture, tables des matières, métadonnées sociales et SEO, données structurées, contrôles d'accessibilité, ainsi que commentaires, analytics ou vues et likes Firebase optionnels.

## Pour chaque lecteur

Créez des sites multilingues avec du contenu traduit, des menus par langue et des traductions d'interface intégrées. Blowfish prend en charge les langues RTL et LTR dans le même projet, avec sélecteur d'apparence, navigation responsive et recherche au clavier.

Sous le capot, Blowfish utilise les capacités actuelles de Hugo et Tailwind CSS 4, tout en conservant un modèle de contenu et de configuration simple à comprendre et à maîtriser.

## Donnez à votre agent le bon contexte

Blowfish propose un [skill pour agents](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) pour les agents de codage IA comme Claude Code. Il lui apprend où placer la configuration, comment fonctionnent les layouts et le front matter, quels shortcodes sont disponibles et comment créer un site Blowfish sans deviner.

Installez-le dans Claude Code :

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Vous pouvez aussi copier le skill dans `.claude/skills/blowfish/` de votre projet. L'agent peut alors aider à la configuration, à la structure du contenu, au design des pages et à une implémentation adaptée au thème, tandis que votre site reste dans votre dépôt.

## Choisissez la suite

- Nouveau sur Blowfish ? Commencez par l'[Installation]({{< ref "docs/installation" >}}).
- Prêt à façonner le site ? Lisez [Bien démarrer]({{< ref "docs/getting-started" >}}) et [Configuration]({{< ref "docs/configuration" >}}).
- Vous voulez voir les possibilités ? Explorez les [Shortcodes]({{< ref "docs/shortcodes" >}}), les [Exemples]({{< ref "samples" >}}) et la [Vitrine]({{< ref "examples" >}}).
- Vous migrez un site existant ? Suivez le [guide de mise à niveau vers Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
