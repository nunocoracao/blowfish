---
title: "Exemples de contenu"
weight: 11
draft: false
description: "Tous les partials disponibles dans Blowfish."
slug: "content-examples"
tags: ["contenu", "exemple"]
series: ["Documentation"]
series_order: 12
---

Si vous avez lu la documentation dans l'ordre, vous devriez maintenant connaître toutes les fonctionnalités et configurations disponibles dans Blowfish. Cette page est conçue pour tout rassembler et offrir quelques exemples pratiques que vous pourriez vouloir utiliser dans votre projet Hugo.

{{< alert >}}
**Astuce :** Si vous êtes nouveau sur Hugo, assurez-vous de consulter la [documentation officielle](https://gohugo.io/content-management/page-bundles/) pour en savoir plus sur le concept de bundles de pages et de ressources.
{{< /alert >}}

Les exemples de cette page peuvent tous être adaptés à différents scénarios, mais ils vous donneront, espérons-le, quelques idées sur la façon d'aborder le formatage d'un élément de contenu particulier pour votre projet individuel.

## Pages de branche

Les bundles de pages de branche dans Hugo couvrent des éléments comme la page d'accueil, les listes de sections et les pages de taxonomie. La chose importante à retenir concernant les bundles de branche est que le nom de fichier pour ce type de contenu est **`_index.md`**.

Blowfish honorera les paramètres de front matter spécifiés dans les pages de branche et ceux-ci remplaceront les paramètres par défaut pour cette page particulière. Par exemple, définir le paramètre `title` dans une page de branche permettra de remplacer le titre de la page.

### Page d'accueil

|              |                      |
| ------------ | -------------------- |
| **Layout :**  | `layouts/index.html` |
| **Contenu :** | `content/_index.md`  |

La page d'accueil dans Blowfish est spéciale car son design global est contrôlé par le paramètre de configuration du layout de la page d'accueil. Vous pouvez en savoir plus à ce sujet dans la section [Layout de la page d'accueil]({{< ref "homepage-layout" >}}).

Si vous voulez ajouter du contenu personnalisé à cette page, vous devez simplement créer un fichier `content/_index.md`. Tout ce qui se trouve dans ce fichier sera alors inclus dans votre page d'accueil.

**Exemple :**

```yaml
---
title: "Bienvenue sur Blowfish !"
description: "Ceci est une démo d'ajout de contenu à la page d'accueil."
---
Bienvenue sur mon site web ! Je suis vraiment content que vous soyez passé.
```

_Cet exemple définit un titre personnalisé et ajoute du texte supplémentaire au corps de la page. Tout texte formaté en Markdown est acceptable, y compris les shortcodes, les images et les liens._

### Pages de liste

|              |                              |
| ------------ | ---------------------------- |
| **Layout :**  | `layouts/_default/list.html` |
| **Contenu :** | `content/../_index.md`       |

Les pages de liste regroupent toutes les pages d'une section et offrent un moyen aux visiteurs d'atteindre chaque page. Un blog ou un portfolio sont des exemples de pages de liste car ils regroupent des articles ou des projets.

Créer une page de liste est aussi simple que de créer un sous-répertoire dans le dossier content. Par exemple, pour créer une section "Projets", vous créeriez `content/projects/`. Ensuite, créez un fichier Markdown pour chacun de vos projets.

Une page de liste sera générée par défaut, cependant pour personnaliser le contenu, vous devriez également créer une page `_index.md` dans ce nouveau répertoire.

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

Hugo générera des URLs pour les pages de votre dossier projets en conséquence.

Tout comme la page d'accueil, le contenu du fichier `_index.md` sera affiché dans l'index de liste généré. Blowfish listera ensuite toutes les pages de cette section sous le contenu.

**Exemple :**

```yaml
---
title: "Projets"
description: "Découvrez certains de mes projets."
cascade:
  showReadingTime: false
---
Cette section contient tous mes projets actuels.
```

_Dans cet exemple, le paramètre spécial `cascade` est utilisé pour masquer le temps de lecture sur toutes les sous-pages de cette section. En faisant cela, les pages de projet n'afficheront pas leur temps de lecture. C'est un excellent moyen de remplacer les paramètres par défaut du thème pour une section entière sans avoir à les inclure dans chaque page individuelle._

La [section samples]({{< ref "samples" >}}) de ce site est un exemple de page de liste.

### Pages de taxonomie

|                  |                                  |
| ---------------- | -------------------------------- |
| **Layout liste :** | `layouts/_default/taxonomy.html` |
| **Layout terme :** | `layouts/_default/term.html`     |
| **Contenu :**     | `content/../_index.md`           |

Les pages de taxonomie se présentent sous deux formes - les listes de taxonomie et les termes de taxonomie. Les listes affichent une liste de chacun des termes dans une taxonomie donnée, tandis que les termes affichent une liste de pages qui sont liées à un terme donné.

La terminologie peut être un peu confuse, alors explorons un exemple utilisant une taxonomie nommée `animals`.

Tout d'abord, pour utiliser les taxonomies dans Hugo, elles doivent être configurées. Cela se fait en créant un fichier de configuration à `config/_default/taxonomies.toml` et en définissant le nom de la taxonomie.

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

Hugo s'attend à ce que les taxonomies soient listées en utilisant leurs formes singulière et plurielle, donc nous ajoutons le singulier `animal` égal au pluriel `animals` pour créer notre taxonomie d'exemple.

Maintenant que notre taxonomie `animals` existe, elle doit être ajoutée aux éléments de contenu individuels. C'est aussi simple que de l'insérer dans le front matter :

```yaml
---
title: "Dans la tanière du lion"
description: "Cette semaine, nous apprenons sur les lions."
animals: ["lion", "cat"]
---
```

Cela a maintenant créé deux _termes_ dans notre taxonomie `animals` - `lion` et `cat`.

Bien que ce ne soit pas évident à ce stade, Hugo génère maintenant des pages de liste et de terme pour cette nouvelle taxonomie. Par défaut, la liste peut être accessible à `/animals/` et les pages de terme peuvent être trouvées à `/animals/lion/` et `/animals/cat/`.

La page de liste listera tous les termes contenus dans la taxonomie. Dans cet exemple, naviguer vers `/animals/` affichera une page qui a des liens pour "lion" et "cat" qui amènent les visiteurs aux pages de terme individuelles.

Les pages de terme listeront toutes les pages contenues dans ce terme. Ces listes de termes sont essentiellement les mêmes que les [pages de liste](#pages-de-liste) normales et se comportent de la même manière.

Pour ajouter du contenu personnalisé aux pages de taxonomie, créez simplement des fichiers `_index.md` dans le dossier content en utilisant le nom de la taxonomie comme nom de sous-répertoire.

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

Tout ce qui se trouve dans ces fichiers de contenu sera maintenant placé sur les pages de taxonomie générées. Comme pour les autres contenus, les variables de front matter peuvent être utilisées pour remplacer les valeurs par défaut. De cette façon, vous pourriez avoir un tag nommé `lion` mais remplacer le `title` par "Lion".

Pour voir à quoi cela ressemble en réalité, consultez la [liste de taxonomie des tags]({{< ref "tags" >}}) sur ce site.

## Pages feuille

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout :**               | `layouts/_default/single.html`  |
| **Contenu (autonome) :** | `content/../page-name.md`       |
| **Contenu (groupé) :**    | `content/../page-name/index.md` |

Les pages feuille dans Hugo sont essentiellement des pages de contenu standard. Elles sont définies comme des pages qui ne contiennent aucune sous-page. Cela pourrait être des choses comme une page À propos, ou un article de blog individuel qui vit dans la section blog du site web.

La chose la plus importante à retenir concernant les pages feuille est que contrairement aux pages de branche, les pages feuille doivent être nommées `index.md` _sans_ tiret bas. Les pages feuille sont également spéciales car elles peuvent être regroupées au niveau supérieur de la section et nommées avec un nom unique.

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

Lors de l'inclusion d'assets dans une page, comme une image, un bundle de page doit être utilisé. Les bundles de page sont créés en utilisant un sous-répertoire avec un fichier `index.md`. Regrouper les assets avec le contenu dans son propre répertoire est important car de nombreux shortcodes et autres logiques du thème supposent que les ressources sont groupées avec les pages.

**Exemple :**

```yaml
---
title: "Mon premier article de blog"
date: 2022-01-25
description: "Bienvenue sur mon blog !"
summary: "Apprenez-en plus sur moi et pourquoi je lance ce blog."
tags: ["bienvenue", "nouveau", "à propos", "premier"]
---
_Voici_ le contenu de mon article de blog.
```

Les pages feuille ont une grande variété de paramètres de [front matter]({{< ref "front-matter" >}}) qui peuvent être utilisés pour personnaliser leur affichage.

### Liens externes

Blowfish a une fonctionnalité spéciale qui permet aux liens vers des pages externes d'apparaître à côté des articles dans les listes d'articles. C'est utile si vous avez du contenu sur des sites tiers comme Medium, ou des articles de recherche que vous souhaitez lier, sans répliquer le contenu dans votre site Hugo.

Pour créer un article de lien externe, un front matter spécial doit être défini :

```yaml
---
title: "Mon article Medium"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "J'ai écrit un article sur Medium."
showReadingTime: false
build:
  render: "false"
  list: "local"
---
```

En plus des paramètres de front matter normaux comme `title` et `summary`, le paramètre `externalUrl` est utilisé pour indiquer à Blowfish qu'il ne s'agit pas d'un article ordinaire. L'URL fournie ici sera l'endroit où les visiteurs seront dirigés lorsqu'ils sélectionneront cet article.

De plus, nous utilisons un paramètre de front matter Hugo spécial `build` pour empêcher la génération d'une page normale pour ce contenu - il n'y a pas d'intérêt à générer une page puisque nous lions vers une URL externe !

Le thème inclut un archétype pour simplifier la génération de ces articles de liens externes. Spécifiez simplement `-k external` lors de la création de nouveau contenu.

```shell
hugo new -k external posts/my-post.md
```

### Pages simples

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout :**       | `layouts/_default/simple.html` |
| **Front Matter :** | `layout: "simple"`             |

Blowfish inclut également un layout spécial pour les pages simples. Le layout simple est un template pleine largeur qui place simplement le contenu Markdown dans la page sans aucune fonctionnalité spéciale du thème.

Les seules fonctionnalités disponibles dans le layout simple sont les fils d'Ariane et les liens de partage. Cependant, le comportement de ceux-ci peut toujours être contrôlé en utilisant les variables de [front matter]({{< ref "front-matter" >}}) normales de la page.

Pour activer le layout simple sur une page particulière, ajoutez la variable de front matter `layout` avec la valeur `"simple"` :

```yaml
---
title: "Ma page d'atterrissage"
date: 2022-03-08
layout: "simple"
---
Le contenu de cette page est maintenant en pleine largeur.
```

## Layouts personnalisés

Un des avantages de Hugo est qu'il facilite la création de layouts personnalisés pour l'ensemble du site, des sections individuelles ou des pages.

Les layouts suivent toutes les règles normales de templating Hugo et plus d'informations sont disponibles dans la [documentation officielle de Hugo](https://gohugo.io/templates/introduction/).

### Remplacement des layouts par défaut

Chacun des types de contenu discutés ci-dessus liste le fichier de layout qui est utilisé pour générer chaque type de page. Si ce fichier est créé dans votre projet local, il remplacera le template du thème et peut donc être utilisé pour personnaliser le style par défaut du site web.

Par exemple, créer un fichier `layouts/_default/single.html` permettra de personnaliser complètement le layout des pages feuille.

### Layouts de section personnalisés

Il est également simple de créer des layouts personnalisés pour des sections de contenu individuelles. C'est utile lorsque vous voulez créer une section qui liste un certain type de contenu en utilisant un style particulier.

Parcourons un exemple qui crée une page "Projets" personnalisée qui liste les projets en utilisant un layout spécial.

Pour ce faire, structurez votre contenu en utilisant les règles de contenu Hugo normales et créez une section pour vos projets. De plus, créez un nouveau layout pour la section projets en utilisant le même nom de répertoire que le contenu et en ajoutant un fichier `list.html`.

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

Ce fichier `list.html` remplacera maintenant le template de liste par défaut, mais uniquement pour la section `projects`. Avant de regarder ce fichier, examinons d'abord les fichiers de projet individuels.

```yaml
---
title: "Blowfish"
date: 2021-08-11
icon: "github"
description: "Un thème pour Hugo construit avec Tailwind CSS."
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/nunocoracao/blowfish/"
---
```

_Dans cet exemple, nous attribuons des métadonnées à chaque projet que nous pouvons ensuite utiliser dans notre template de liste. Il n'y a pas de contenu de page, mais rien ne vous empêche d'en inclure. C'est votre propre template personnalisé après tout !_

Avec les projets définis, nous pouvons maintenant créer un template de liste qui affiche les détails de chaque projet.

```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

Bien qu'il s'agisse d'un exemple assez simple, vous pouvez voir qu'il parcourt chacune des pages de cette section (c'est-à-dire chaque projet), puis affiche des liens HTML vers chaque projet avec une icône. Les métadonnées dans le front matter de chaque projet sont utilisées pour déterminer quelles informations sont affichées.

Gardez à l'esprit que vous devrez vous assurer que les styles et classes pertinents sont disponibles, ce qui peut nécessiter la recompilation du CSS Tailwind. Ceci est discuté plus en détail dans la section [Personnalisation avancée]({{< ref "advanced-customisation" >}}).

Lors de la création de templates personnalisés comme celui-ci, il est toujours plus facile de regarder comment le template Blowfish par défaut fonctionne et ensuite de l'utiliser comme guide. N'oubliez pas que la [documentation Hugo](https://gohugo.io/templates/introduction/) est également une excellente ressource pour en savoir plus sur la création de templates.
