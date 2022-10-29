---
title: "Multiple Authors"
date: 2020-08-10
draft: false
description: "Configure multiple authors for your articles."
slug: "multi-author"
tags: ["authors", "config", "docs"]
series: ["Documentation"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false 
---


Some websites have more than one author contributing with content and therefore require more than a single default author across the entire website. For those use-cases, Blowfish allows users to extend the list of authors using the multiple authors feature. 

To keep everything backwards compatible, this feature only allows the definition of extra authors and does not change in any way the previous author functionality which is used via config files.  


## Create Authors

The first step to create new authors is to set up a new folder in `./data/authors`. Then you can simply add new `json` files inside, one for each new author. The name of the file will be the `key` for that author when referencing it in your articles. 

As an example, let’s create a file called `nunocoracao.json` within `./data/authors`. The contents of the file should be similar to the ones below. `name`, `image`, `bio`, and `social` are the 4 parameters supported right for authors. They mimic the configurations available for the default author in the config files.

_Note: the key in the social object will be used to fetch one of the theme’s icons, feel free to use any of the icons available in your setup._

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


## Reference Authors in Articles

Now that you created one author, the next step is to reference it in one or more articles. In the example below, we reference the author created in the previous step using its `key`.

This will render an extra author using the data provided in the `json` file. This feature does not change in any way the default author configured for the overall site, and therefore, you can control both separately. Using the `showAuthor` parameter, you can configure whether to show the default author, that is the normal use-case for a single author blog. The new `authors` front-matter parameter allows you to define authors specifically to an article, and they will be rendered independently of the configurations for the default site author.

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

In the example, which matches the markdown of the current page, both the default author and the new one will be displayed. You can scroll now to see the outcome.

## Create the Authors Taxonomy

To get lists of articles for each of your authors you can configure the `authors` taxonomy, which opens up some more configurations that might be interesting. This is an optional step in the process that is not required to display the authors in your articles.

First step is to configure the `authors` taxonomy in your `config.toml` file, like in the example below. Even though `tag` and `category` are defined by default with Hugo, once you add a specific taxonomies section you need to add them again otherwise the site will not process them.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

And that’s just about it. Now you will have pages that reference your authors and, for each, show the respective list of articles where they participate. You can also use the `article.showAuthorsBadges` on the config file, or `showAuthorsBadges` on each article to chose whether to display the `authors` taxonomy as badges in each post item. As an example, this doc is configured to not display authors but if you look at the sample referenced below you will see the authors displayed as badges.

Lastly, you can add more detail to each author page so that it displays a little bio, links, or whatever information fits your use-case. To achieve that, create a folder with the `key` to each author inside `./content/authors` and inside each folder place a `_index.md` file. For the example above, we would end up with a `.content/authors/nunocoracao/_index.md` file. Inside, you can configure the actual name of the author and the contents of their page. Authors in this documentation website are configured like this, so you can have a look by playing around with the site.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Sample

This sample sample below shows an example where the default site author is turned off and the article has multiple authors.

{{< article link="/samples/multiple-authors/" >}}