---
title: "Miniaturas"
weight: 10
draft: false
description: "Ative miniaturas para seus artigos."
slug: "thumbnails"
tags: ["miniatura", "configuração", "documentação"]
series: ["Documentação"]
series_order: 6
---

## Miniaturas

O Blowfish foi aprimorado para facilitar adicionar suporte visual às suas postagens. Para fazer isso, você só precisa colocar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro do diretório principal do seu artigo, como mostrado no exemplo abaixo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Isso dirá ao Blowfish que este artigo tem uma imagem de destaque que pode ser usada tanto como miniatura em seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

## Estrutura de pastas

Se você está usando arquivos `.md` individuais para seus artigos e tem uma estrutura de arquivos semelhante a esta:

```shell
content
└── awesome_article.md
```

Você precisa mudar de um único arquivo Markdown para uma pasta. Crie um diretório com o mesmo nome do artigo, dentro crie um arquivo `index.md`. Você terá uma estrutura semelhante à abaixo.

```shell
content
└── awesome_article
    └── index.md
```

Então você só precisa adicionar uma imagem como explicado anteriormente. Se você quiser ver um exemplo disso, pode consultar [esta amostra]({{< ref "thumbnail_sample" >}}).

## Imagens hero

As miniaturas serão usadas por padrão como imagens hero dentro de cada artigo. Use o parâmetro global `article.showHero` ou o parâmetro front matter `showHero` para controlar este recurso em todo o site ou para cada postagem específica. Se você quiser substituir o estilo da imagem hero, pode criar um arquivo chamado `hero.html` em `./layouts/partials/` que substituirá o partial original do tema.
