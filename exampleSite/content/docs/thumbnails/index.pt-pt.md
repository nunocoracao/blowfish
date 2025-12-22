---
title: "Miniaturas"
weight: 10
draft: false
description: "Ative miniaturas para os seus artigos."
slug: "thumbnails"
tags: ["miniatura", "configuração", "documentação"]
series: ["Documentação"]
series_order: 6
---

## Miniaturas

O Blowfish foi melhorado para facilitar adicionar suporte visual às suas publicações. Para fazer isso, só precisa de colocar um ficheiro de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro do diretório principal do seu artigo, como mostrado no exemplo abaixo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Isto dirá ao Blowfish que este artigo tem uma imagem de destaque que pode ser utilizada tanto como miniatura no seu website quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

## Estrutura de pastas

Se está a utilizar ficheiros `.md` individuais para os seus artigos e tem uma estrutura de ficheiros semelhante a esta:

```shell
content
└── awesome_article.md
```

Precisa de mudar de um único ficheiro Markdown para uma pasta. Crie um diretório com o mesmo nome do artigo, dentro crie um ficheiro `index.md`. Obterá uma estrutura semelhante à abaixo.

```shell
content
└── awesome_article
    └── index.md
```

Depois só precisa de adicionar uma imagem como explicado anteriormente. Se quiser ver um exemplo disto, pode consultar [esta amostra]({{< ref "thumbnail_sample" >}}).

## Imagens hero

As miniaturas serão utilizadas por predefinição como imagens hero dentro de cada artigo. Utilize o parâmetro global `article.showHero` ou o parâmetro front matter `showHero` para controlar esta funcionalidade em todo o site ou para cada publicação específica. Se quiser substituir o estilo da imagem hero, pode criar um ficheiro chamado `hero.html` em `./layouts/partials/` que substituirá o partial original do tema.
