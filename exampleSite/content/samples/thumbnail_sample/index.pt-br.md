---
title: "Miniaturas"
date: 2022-09-26
draft: false
description: "Ative miniaturas para seus artigos."
slug: "thumbnail_sample"
tags: ["miniatura", "exemplo"]
summary: "Um exemplo rápido de como começar a usar miniaturas em seus artigos."
type: 'sample'
---

Um exemplo rápido de como começar a usar miniaturas em seus artigos.

Se seu diretório médio para um artigo se parece com isso:

```shell
content
└── awesome_article.md
```

Você precisa mudá-lo de um único arquivo markdown para uma pasta. Crie um diretório com o mesmo nome do artigo, e dentro crie um arquivo `index.md`. Você terá uma estrutura semelhante à abaixo.

```shell
content
└── awesome_article
    └── featured.png
```

Dentro do artigo você pode agora adicionar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*`. Exemplo abaixo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Isso dirá ao Blowfish que este artigo tem uma imagem de destaque que pode ser usada tanto como miniatura em seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais. Como exemplo, você pode tentar copiar e colar a URL deste artigo em uma plataforma que exibe oEmbeds (por exemplo Twitter, WhatsApp, Telegram, etc.) e ver o que é exibido.
