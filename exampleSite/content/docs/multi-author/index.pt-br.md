---
title: "Múltiplos autores"
weight: 8
draft: false
description: "Configure múltiplos autores para seus artigos."
slug: "multi-author"
tags: ["autores", "configuração", "documentação"]
series: ["Documentação"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---


Alguns sites têm mais de um autor contribuindo com conteúdo e, portanto, requerem mais de um único autor padrão para todo o site. Para esses casos de uso, o Blowfish permite aos usuários estender a lista de autores usando o recurso de múltiplos autores.

Para manter tudo compatível com versões anteriores, este recurso permite apenas a definição de autores adicionais e não altera de nenhuma forma a funcionalidade de autor anterior que é usada através dos arquivos de configuração.


## Criar autores

O primeiro passo para criar novos autores é configurar uma nova pasta em `./data/authors`. Então você pode simplesmente adicionar novos arquivos `json` dentro, um para cada novo autor. O nome do arquivo será a `chave` para aquele autor ao referenciá-lo em seus artigos.

Como exemplo, vamos criar um arquivo chamado `nunocoracao.json` dentro de `./data/authors`. O conteúdo do arquivo deve ser semelhante ao abaixo. `name`, `image`, `bio` e `social` são os 4 parâmetros suportados atualmente para autores. Eles espelham as configurações disponíveis para o autor padrão nos arquivos de configuração.

_Nota: a chave no objeto social será usada para buscar um dos ícones do tema, sinta-se à vontade para usar qualquer um dos ícones disponíveis em sua instalação._

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


## Referenciar autores em artigos

Agora que você criou um autor, o próximo passo é referenciá-lo em um ou mais artigos. No exemplo abaixo, referenciamos o autor criado no passo anterior usando sua `chave`.

Isso renderizará um autor adicional usando os dados fornecidos no arquivo `json`. Este recurso não altera de nenhuma forma o autor padrão configurado para o site geral, e portanto, você pode controlar ambos separadamente. Usando o parâmetro `showAuthor`, você pode configurar se deseja mostrar o autor padrão, esse é o caso de uso normal para um blog de autor único. O novo parâmetro front matter `authors` permite definir autores especificamente para um artigo, e eles serão renderizados independentemente das configurações para o autor padrão do site.

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

No exemplo, que corresponde ao markdown da página atual, tanto o autor padrão quanto o novo serão exibidos. Você pode rolar para baixo agora para ver o resultado.

## Criar a taxonomia de autores

Para obter listas de artigos para cada um de seus autores, você pode configurar a taxonomia `authors`, que abre algumas configurações mais que podem ser interessantes. Este é um passo opcional no processo que não é necessário para exibir os autores em seus artigos.

O primeiro passo é configurar a taxonomia `authors` em seu arquivo `hugo.toml`, como no exemplo abaixo. Embora `tag` e `category` sejam definidos por padrão com Hugo, uma vez que você adiciona uma seção de taxonomias específica, você precisa adicioná-los novamente, caso contrário o site não os processará.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

E é basicamente isso. Agora você terá páginas que referenciam seus autores e, para cada um, mostram a respectiva lista de artigos onde eles participam. Você também pode usar `article.showAuthorsBadges` no arquivo de configuração, ou `showAuthorsBadges` em cada artigo para escolher se deseja exibir a taxonomia `authors` como badges em cada item de postagem. Como exemplo, esta documentação está configurada para não exibir autores, mas se você olhar a amostra referenciada abaixo, verá os autores exibidos como badges.

Por último, você pode adicionar mais detalhes a cada página de autor para que ela exiba uma pequena bio, links ou qualquer informação que se adeque ao seu caso de uso. Para conseguir isso, crie uma pasta com a `chave` para cada autor dentro de `./content/authors` e dentro de cada pasta coloque um arquivo `_index.md`. Para o exemplo acima, terminaríamos com um arquivo `.content/authors/nunocoracao/_index.md`. Dentro, você pode configurar o nome real do autor e o conteúdo de sua página. Os autores neste site de documentação estão configurados assim, então você pode dar uma olhada jogando com o site.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Exemplo

Esta amostra abaixo mostra um exemplo onde o autor padrão do site está desativado e o artigo tem múltiplos autores.

{{< article link="/samples/multiple-authors/" >}}
