---
title: "Series"
weight: 12
draft: false
description: "Learn how to group articles under a series."
slug: "series"
tags: ["series", "docs"]
series: ["Documentation"]
series_order: 11
seriesOpened: true
---

Blowfish provides a feature to group a set of articles together under a "series". Placing an article under a series will display the rest of the series articles in each single page and provide a quick way to navigate amongst them. You can see an example of this above.

## Create Taxonomy
The first step to enable series is to create the `series` taxonomy. For doing this just add the `series` taxonomy to your taxonomy list in the `config.toml`.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## Mark Articles

Then you just need to mark each article using the `series` parameter and the `series_order`. The `series` parameter will be the id and name of the series you are placing the article into (even though the variable is an array we recommend keeping each article to a single series.). And the `series_order` defines the order of that article within the series. In the example below the article is number `11` in the `Documentation` series.

```md
series: ["Documentation"]
series_order: 11
```

## Series Behavior
Marking an article as part of a series will automatically display the series module as you see in this page for example. You can choose whether that module starts opened or not using the `article.seriesOpened` global variable in `params.toml` or the front-matter parameter `seriesOpened` to specify an override at the article level.