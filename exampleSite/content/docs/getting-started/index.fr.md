---
title: "Premiers Pas"
weight: 3
draft: false
description: "Toutes les variables front matter disponibles dans Blowfish."
slug: "getting-started"
tags: ["installation", "documentation"]
series: ["Documentation"]
series_order: 3
---

{{< alert >}}
Cette section suppose que vous avez déjà [installé le thème Blowfish]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
Nous venons de lancer un outil CLI pour vous aider à démarrer avec Blowfish. Il vous aidera avec l'installation et la configuration. Installez l'outil CLI globalement en utilisant :
```bash
npx blowfish-tools
```
{{< /alert >}}

Les fichiers de configuration livrés avec Blowfish contiennent tous les paramètres possibles que le thème reconnaît. Par défaut, beaucoup d'entre eux sont commentés, mais vous pouvez simplement les décommenter pour activer ou modifier une fonctionnalité spécifique.

## Configuration de base

Avant de créer du contenu, il y a quelques éléments à définir pour une nouvelle installation. En commençant par le fichier `hugo.toml`, définissez les paramètres `baseURL` et `languageCode`. Le `languageCode` doit être défini sur la langue principale que vous utiliserez pour rédiger votre contenu.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "fr"
```

L'étape suivante consiste à configurer les paramètres de langue. Bien que Blowfish prenne en charge les configurations multilingues, pour l'instant, configurez simplement la langue principale.

Localisez le fichier `languages.en.toml` dans le dossier de configuration. Si votre langue principale est l'anglais, vous pouvez utiliser ce fichier tel quel. Sinon, renommez-le pour qu'il inclue le code de langue correct dans le nom du fichier. Par exemple, pour le français, renommez le fichier en `languages.fr.toml`.

{{< alert >}}
Notez que le code de langue dans le nom du fichier de configuration de langue doit correspondre au paramètre `languageCode` dans `hugo.toml`.
{{< /alert >}}

```toml
# config/_default/languages.fr.toml

title = "Mon super site web"

[params.author]
name = "Mon nom"
image = "img/author.jpg"
headline = "Un être humain généralement génial"
bio = "Un peu sur moi"
links = [
  { twitter = "https://twitter.com/username" }
]
```

La configuration `[params.author]` détermine comment les informations de l'auteur sont affichées sur le site. L'image doit être placée dans le dossier `assets/` du site. Les liens seront affichés dans l'ordre où ils sont listés.

Si vous avez besoin de plus de détails, des informations supplémentaires sur chacune de ces options de configuration sont couvertes dans la section [Configuration]({{< ref "configuration" >}}).

## Schémas de couleurs

Blowfish est livré avec plusieurs schémas de couleurs prêts à l'emploi. Vous pouvez essayer les schémas intégrés ci-dessous :

{{< theme-switcher >}}

Chaque schéma de couleurs dans Blowfish est construit sur une palette de trois couleurs utilisée de manière cohérente dans tout le thème. Chacune de ces couleurs principales est basée sur les palettes de couleurs à dix nuances incluses dans [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

Bien que ce soient les schémas par défaut, vous pouvez également créer les vôtres. Consultez la section [Personnalisation avancée]({{< ref "advanced-customisation#colour-schemes" >}}) pour plus de détails.

## Organisation du contenu

Par défaut, Blowfish ne vous oblige pas à utiliser un type de contenu particulier. Ce faisant, vous êtes libre de définir votre contenu comme vous le souhaitez. Vous pourriez préférer des _pages_ pour un site statique, des _articles_ pour un blog, ou des _projets_ pour un portfolio.

Voici un aperçu rapide d'un projet Blowfish de base. Tout le contenu est placé dans le dossier `content` :

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

Il est important d'avoir une bonne compréhension de la façon dont Hugo s'attend à ce que le contenu soit organisé, car le thème est conçu pour tirer pleinement parti des bundles de pages Hugo. Assurez-vous de lire la [documentation officielle Hugo](https://gohugo.io/content-management/organization/) pour plus d'informations.

Blowfish est également flexible en ce qui concerne les taxonomies. Certaines personnes préfèrent utiliser des _tags_ et des _catégories_ pour regrouper leur contenu, d'autres préfèrent utiliser des _sujets_.

Hugo utilise par défaut les posts, tags et catégories, et cela fonctionnera bien si c'est ce que vous voulez. Si vous souhaitez personnaliser cela, vous pouvez le faire en créant un fichier de configuration `taxonomies.toml` :

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

Cela remplacera les _tags_ et _catégories_ par défaut par des _sujets_. Consultez la [documentation des taxonomies Hugo](https://gohugo.io/content-management/taxonomies/) pour plus d'informations sur la dénomination des taxonomies.

Lorsque vous créez une nouvelle taxonomie, vous devrez ajuster les liens de navigation sur le site pour pointer vers les bonnes sections, ce qui est couvert ci-dessous.

## Menus

Blowfish dispose de deux menus qui peuvent être personnalisés pour s'adapter au contenu et à la mise en page de votre site. Le menu `main` apparaît dans l'en-tête du site et le menu `footer` apparaît en bas de la page, juste avant la mention de copyright.

Les deux menus sont configurés dans le fichier `menus.fr.toml`. De même que pour le fichier de configuration de langue, si vous souhaitez utiliser une autre langue, renommez ce fichier et remplacez `en` par le code de langue que vous souhaitez utiliser.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Sujets"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Confidentialité"
  url = "https://external-link"
```

Le paramètre `name` spécifie le texte utilisé dans le lien du menu. Vous pouvez également fournir optionnellement un `title` qui remplit l'attribut title HTML pour le lien.

Le paramètre `pageRef` vous permet de référencer facilement les pages de contenu Hugo et les taxonomies. C'est le moyen le plus rapide de configurer le menu car vous pouvez simplement faire référence à n'importe quel élément de contenu Hugo et il construira automatiquement le lien correct. Pour créer des liens vers des URL externes, le paramètre `url` peut être utilisé.

Le paramètre `pre` vous permet de placer une icône du [jeu d'icônes de Blowfish]({{< ref "samples/icons" >}}) sur l'entrée de menu. Ce paramètre peut être utilisé avec le paramètre `name` ou seul. Si vous souhaitez utiliser plusieurs entrées de menu avec seulement des icônes, veuillez définir le paramètre `identifier` sinon Hugo utilisera par défaut le tag de nommage comme id et n'affichera probablement pas toutes les entrées de menu.

Les liens de menu seront triés du poids le plus bas au plus élevé, puis par ordre alphabétique de `name`.

Les deux menus sont entièrement optionnels et peuvent être commentés s'ils ne sont pas nécessaires. Utilisez le modèle fourni dans le fichier comme guide.

### Menus imbriqués

Le thème prend également en charge les menus imbriqués. Pour les utiliser, il vous suffit de définir une entrée parent dans `menu.toml` et ses sous-menus en utilisant le paramètre `parent` pour référencer le parent. Toutes les propriétés peuvent être utilisées pour les sous-menus. `pageRef` et `url` peuvent également être utilisés dans l'entrée parent. Les menus imbriqués ne sont disponibles que dans le menu principal, pas pour le pied de page.

```toml
# config/_default/menus.toml

[[main]]
  name = "Parent"
  weight = 20

[[main]]
  name = "sous-menu 1"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sous-menu 2"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sous-menu 3"
  parent = "Parent"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Menu de sous-navigation

De plus, vous pouvez également configurer un menu de sous-navigation. Définissez simplement de nouvelles entrées de menu comme `subnavigation` dans `menus.toml`.
Cela affichera une deuxième ligne avec des sous-catégories sous le menu d'en-tête principal.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "Un sujet intéressant"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "Ma catégorie géniale"
  pageRef = "categories/awesome"
  weight = 20
```

Le `name` par défaut est le `pageRef` en majuscules.

## Vignettes et arrière-plans

Blowfish a été conçu pour qu'il soit facile d'ajouter un support visuel à vos articles. Si vous êtes familier avec la structure des articles Hugo, il vous suffit de placer un fichier image (presque tous les formats sont pris en charge mais nous recommandons `.png` ou `.jpg`) qui commence par `feature*` dans votre dossier d'article. Et c'est tout, Blowfish pourra alors utiliser l'image à la fois comme vignette sur votre site et pour les cartes <a target="_blank" href="https://oembed.com/">oEmbed</a> sur les plateformes sociales.

[Voici]({{< ref "thumbnails" >}}) également un guide avec plus d'informations et un [exemple]({{< ref "thumbnail_sample" >}}) si vous voulez voir comment vous pouvez le faire.

De plus, Blowfish prend également en charge les images hero d'arrière-plan dans les articles et les listes. Pour utiliser une image différente de celle mise en avant, ajoutez un fichier image dont le nom commence par `background*`.

## Configuration détaillée

Les étapes ci-dessus sont la configuration minimale. Si vous exécutez maintenant `hugo server`, vous obtiendrez un site Blowfish vierge. La configuration détaillée est couverte dans la section [Configuration]({{< ref "configuration" >}}).
