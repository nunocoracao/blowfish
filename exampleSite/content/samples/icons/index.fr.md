---
title: "Icônes"
date: 2020-08-14
lastmod: 2022-03-09
draft: false
description: "Support des icônes dans Blowfish."
slug: "icons"
tags: ["icônes", "exemple", "shortcodes"]
type: 'sample'
---

Blowfish prend en charge nativement un certain nombre d'icônes [FontAwesome 6](https://fontawesome.com/icons). Celles-ci peuvent être incluses dans votre site via le [partial icon]({{< ref "docs/partials#icon" >}}) ou le [shortcode icon]({{< ref "docs/shortcodes#icon" >}}).

De plus, les icônes personnalisées sont entièrement prises en charge. Fournissez simplement vos propres assets d'icônes SVG en les plaçant dans le répertoire `assets/icons/` à la racine de votre projet. Toutes les icônes du répertoire icons seront alors disponibles dans tout le thème. Pour obtenir le remplissage automatique des couleurs, chaque chemin SVG doit avoir l'attribut XML `fill="currentColor"`.

La liste complète des icônes intégrées et leurs noms correspondants est référencée ci-dessous.

{{< icon-ref >}}
