---
title: "Séries"
weight: 12
draft: false
description: "Aprenda como agrupar artigos numa série."
slug: "series"
tags: ["séries", "documentação"]
series: ["Documentação"]
series_order: 11
seriesOpened: true
---

O Blowfish fornece uma funcionalidade para agrupar um conjunto de artigos sob uma "série". Colocar um artigo numa série apresentará os restantes artigos da série em cada página individual e fornecerá uma forma rápida de navegar entre eles. Pode ver um exemplo disso acima.

## Criar taxonomia
O primeiro passo para ativar séries é criar a taxonomia `series`. Para fazer isto, basta adicionar a taxonomia `series` à sua lista de taxonomias no `hugo.toml`.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## Marcar artigos

Depois só precisa de marcar cada artigo usando o parâmetro `series` e `series_order`. O parâmetro `series` será o identificador e nome da série na qual está a colocar o artigo (embora a variável seja um array, recomendamos manter cada artigo numa única série). E `series_order` define a ordem desse artigo dentro da série. No exemplo abaixo, o artigo é o número `11` na série `Documentation`.

```md
series: ["Documentation"]
series_order: 11
```

## Comportamento das séries
Marcar um artigo como parte de uma série apresentará automaticamente o módulo de séries como pode ver nesta página, por exemplo. Pode escolher se esse módulo começa aberto ou não usando a variável global `article.seriesOpened` em `params.toml` ou o parâmetro front matter `seriesOpened` para especificar uma substituição ao nível do artigo.
