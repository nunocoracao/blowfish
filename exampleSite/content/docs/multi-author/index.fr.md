---
title: "Auteurs multiples"
weight: 8
draft: false
description: "Configurez plusieurs auteurs pour vos articles."
slug: "multi-author"
tags: ["auteurs", "configuration", "documentation"]
series: ["Documentation"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---


Certains sites web ont plus d'un auteur contribuant au contenu et nécessitent donc plus qu'un seul auteur par défaut pour l'ensemble du site. Pour ces cas d'utilisation, Blowfish permet aux utilisateurs d'étendre la liste des auteurs en utilisant la fonctionnalité d'auteurs multiples.

Pour garder tout rétrocompatible, cette fonctionnalité permet uniquement la définition d'auteurs supplémentaires et ne change en rien la fonctionnalité d'auteur précédente qui est utilisée via les fichiers de configuration.


## Créer des auteurs

La première étape pour créer de nouveaux auteurs est de configurer un nouveau dossier dans `./data/authors`. Ensuite, vous pouvez simplement ajouter de nouveaux fichiers `json` à l'intérieur, un pour chaque nouvel auteur. Le nom du fichier sera la `clé` pour cet auteur lors de sa référence dans vos articles.

Par exemple, créons un fichier appelé `nunocoracao.json` dans `./data/authors`. Le contenu du fichier devrait être similaire à celui ci-dessous. `name`, `image`, `bio` et `social` sont les 4 paramètres actuellement supportés pour les auteurs. Ils reflètent les configurations disponibles pour l'auteur par défaut dans les fichiers de configuration.

_Note : la clé dans l'objet social sera utilisée pour récupérer l'une des icônes du thème, n'hésitez pas à utiliser n'importe quelle icône disponible dans votre installation._

```json
{
    "name": "Nuno Coração",
    "image" : "img/nuno_avatar.jpg",
    "bio": "Theme Creator",
    "social": [
        { "linkedin": "https://linkedin.com/in/nunocoracao" },
        { "twitter": "https://twitter.com/nunocoracao" },
        { "instagram": "https://instagram.com/nunocoracao" },
        { "medium": "https://medium.com/@nunocoracao" },
        { "github": "https://github.com/nunocoracao" },
        { "goodreads": "http://goodreads.com/nunocoracao" },
        { "keybase": "https://keybase.io/nunocoracao" },
        { "reddit": "https://reddit.com/user/nunoheart" }
    ]
}
```


## Référencer les auteurs dans les articles

Maintenant que vous avez créé un auteur, l'étape suivante est de le référencer dans un ou plusieurs articles. Dans l'exemple ci-dessous, nous référençons l'auteur créé à l'étape précédente en utilisant sa `clé`.

Cela affichera un auteur supplémentaire en utilisant les données fournies dans le fichier `json`. Cette fonctionnalité ne change en rien l'auteur par défaut configuré pour l'ensemble du site, et donc, vous pouvez contrôler les deux séparément. En utilisant le paramètre `showAuthor`, vous pouvez configurer s'il faut afficher l'auteur par défaut, c'est le cas d'utilisation normal pour un blog à auteur unique. Le nouveau paramètre front matter `authors` vous permet de définir des auteurs spécifiquement pour un article, et ils seront rendus indépendamment des configurations pour l'auteur du site par défaut.

```md
---
title: "Multiple Authors"
date: 2020-08-10
draft: false
description: "Configure multiple authors for your articles."
slug: "multi-author"
tags: ["authors", "config", "docs"]
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---
```

Dans l'exemple, qui correspond au markdown de la page actuelle, à la fois l'auteur par défaut et le nouveau seront affichés. Vous pouvez faire défiler vers le bas maintenant pour voir le résultat.

## Créer la taxonomie des auteurs

Pour obtenir des listes d'articles pour chacun de vos auteurs, vous pouvez configurer la taxonomie `authors`, qui ouvre quelques configurations supplémentaires qui pourraient être intéressantes. C'est une étape optionnelle dans le processus qui n'est pas requise pour afficher les auteurs dans vos articles.

La première étape est de configurer la taxonomie `authors` dans votre fichier `hugo.toml`, comme dans l'exemple ci-dessous. Même si `tag` et `category` sont définis par défaut avec Hugo, une fois que vous ajoutez une section taxonomies spécifique, vous devez les ajouter à nouveau sinon le site ne les traitera pas.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

Et c'est à peu près tout. Maintenant vous aurez des pages qui référencent vos auteurs et, pour chacun, affichent la liste respective d'articles où ils participent. Vous pouvez également utiliser `article.showAuthorsBadges` dans le fichier de configuration, ou `showAuthorsBadges` sur chaque article pour choisir d'afficher ou non la taxonomie `authors` comme badges dans chaque élément de publication. Par exemple, cette documentation est configurée pour ne pas afficher les auteurs mais si vous regardez l'exemple référencé ci-dessous, vous verrez les auteurs affichés comme badges.

Enfin, vous pouvez ajouter plus de détails à chaque page d'auteur pour qu'elle affiche une petite bio, des liens, ou toute information qui correspond à votre cas d'utilisation. Pour y parvenir, créez un dossier avec la `clé` pour chaque auteur dans `./content/authors` et placez à l'intérieur un fichier `_index.md`. Pour l'exemple ci-dessus, nous finirions avec un fichier `.content/authors/nunocoracao/_index.md`. À l'intérieur, vous pouvez configurer le nom réel de l'auteur et le contenu de sa page. Les auteurs sur ce site de documentation sont configurés ainsi, donc vous pouvez y jeter un œil en jouant avec le site.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Exemple

Cet exemple ci-dessous montre un cas où l'auteur du site par défaut est désactivé et l'article a plusieurs auteurs.

{{< article link="/samples/multiple-authors/" >}}
