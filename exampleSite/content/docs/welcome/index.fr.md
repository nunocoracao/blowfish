---
title: "Bienvenue sur Blowfish"
weight: 1
draft: false
description: "Découvrez les nouveautés de Blowfish version 2.0."
tags: ["nouveau", "documentation"]
series: ["Documentation"]
series_order: 1
---

{{< lead >}}
Blowfish regorge de fonctionnalités.
{{< /lead >}}

L'objectif initial de Blowfish était de développer un thème simple et léger. Le thème est un fork de <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> et étend sa vision initiale.

## Tailwind CSS 3.0

Tailwind CSS est au cœur de Blowfish et cette version contient la toute dernière [Tailwind CSS version 3](https://tailwindcss.com/blog/tailwindcss-v3). Elle apporte des optimisations de performances et la prise en charge de nouvelles fonctionnalités CSS intéressantes.

{{< youtube "TmWIrBPE6Bc" >}}

## Support multilingue

Une fonctionnalité très demandée : Blowfish est maintenant multilingue ! Si vous publiez votre contenu dans plusieurs langues, le site sera construit avec toutes les traductions disponibles.

<div class="text-2xl text-center" style="font-size: 2.8rem">🇬🇧 🇩🇪 🇫🇷 🇪🇸 🇨🇳 🇧🇷 🇹🇷 🇧🇩</div>

Grâce aux contributions de la communauté, Blowfish a déjà été traduit en [trente langues](https://github.com/nunocoracao/blowfish/tree/main/i18n), et d'autres seront ajoutées au fil du temps. D'ailleurs, les [pull requests](https://github.com/nunocoracao/blowfish/pulls) pour de nouvelles langues sont toujours les bienvenues !

## Support des langues RTL

L'un des avantages des nouvelles fonctionnalités Tailwind et multilingues est la possibilité d'ajouter le support des langues RTL. Lorsqu'elle est activée, tout le contenu du site sera réorganisé de droite à gauche. Chaque élément du thème a été restylé pour s'assurer qu'il a fière allure dans ce mode, ce qui aide les auteurs qui souhaitent générer du contenu dans des langues RTL.

Le RTL est contrôlé par langue, vous pouvez donc mélanger du contenu RTL et LTR dans vos projets et le thème répondra en conséquence.

## Redimensionnement automatique des images

Un grand changement dans Blowfish 2.0 est l'ajout du redimensionnement automatique des images. En utilisant la puissance de Hugo Pipes, les images dans le contenu Markdown sont maintenant automatiquement redimensionnées à différentes tailles de sortie. Celles-ci sont ensuite présentées en utilisant les attributs HTML `srcset`, permettant de servir des tailles de fichiers optimisées à vos visiteurs.

![Image avec texte alternatif](image-resizing.png)

```html
<!-- Markdown: ![Mon image](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w"
  src="/image_635x0_resize_q75_box.jpg"
  alt="Mon image"
/>
```

Le meilleur, c'est qu'il n'y a rien à changer ! Utilisez simplement la syntaxe d'image Markdown standard et laissez le thème faire le reste. Si vous voulez un peu plus de contrôle, le shortcode `figure` a été entièrement réécrit pour offrir les mêmes avantages de redimensionnement.


## Recherche sur le site

Alimentée par [Fuse.js](https://fusejs.io), la recherche sur le site permet aux visiteurs de trouver rapidement et facilement votre contenu. Toutes les recherches sont effectuées côté client, ce qui signifie qu'il n'y a rien à configurer sur le serveur et que les requêtes sont exécutées super rapidement. Activez simplement la fonctionnalité dans la configuration de votre site et c'est tout. Ah, et elle prend également en charge la navigation complète au clavier !

## Tables des matières

Une fonctionnalité très demandée : Blowfish prend maintenant en charge les tables des matières sur les pages d'articles. Vous pouvez la voir en action sur cette page. Le contenu est entièrement responsive et s'adaptera pour tirer parti de l'espace disponible à différentes résolutions d'écran.

Disponible globalement ou par article, la table des matières peut être entièrement personnalisée en utilisant les valeurs de configuration standard de Hugo, vous permettant d'adapter le comportement à votre projet.

## Améliorations de l'accessibilité

De l'ajout de descriptions ARIA à plus d'éléments au simple ajustement du contraste de certains éléments de texte, cette version est la plus accessible à ce jour.

La version 2 introduit également des liens "passer au contenu" et "retour en haut" qui permettent une navigation rapide. Il y a également des raccourcis clavier pour activer des éléments comme la recherche sans avoir à utiliser la souris.

Les nouvelles fonctionnalités de redimensionnement d'images offrent également un contrôle total sur les éléments `alt` et `title`, permettant une expérience accessible pour tous les visiteurs.

## Et bien plus encore

Il y a d'innombrables autres fonctionnalités à explorer. De la possibilité d'afficher des taxonomies sur les articles et les pages de liste, à l'utilisation du nouveau paramètre d'auteur `headline` pour personnaliser votre page d'accueil. Il y a également des données structurées JSON-LD améliorées qui optimisent davantage les performances SEO.
