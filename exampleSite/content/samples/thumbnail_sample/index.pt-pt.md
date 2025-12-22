---
title: "Miniaturas"
date: 2022-09-26
draft: false
description: "Ative miniaturas para os seus artigos."
slug: "thumbnail_sample"
tags: ["miniatura", "exemplo"]
summary: "Um exemplo rápido de como começar a utilizar miniaturas nos seus artigos."
type: 'sample'
---

Um exemplo rápido de como começar a utilizar miniaturas nos seus artigos.

Se o seu diretório médio para um artigo se parece com isto:

```shell
content
└── awesome_article.md
```

Precisa de o mudar de um único ficheiro markdown para uma pasta. Crie um diretório com o mesmo nome do artigo, e dentro crie um ficheiro `index.md`. Terá uma estrutura semelhante à abaixo.

```shell
content
└── awesome_article
    └── featured.png
```

Dentro do artigo pode agora adicionar um ficheiro de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*`. Exemplo abaixo.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Isto dirá ao Blowfish que este artigo tem uma imagem de destaque que pode ser utilizada tanto como miniatura no seu site como para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais. Como exemplo, pode tentar copiar e colar o URL deste artigo numa plataforma que apresenta oEmbeds (por exemplo Twitter, WhatsApp, Telegram, etc.) e ver o que é apresentado.
