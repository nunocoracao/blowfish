---
title: "Múltiplos autores"
weight: 8
draft: false
description: "Configure múltiplos autores para os seus artigos."
slug: "multi-author"
tags: ["autores", "configuração", "documentação"]
series: ["Documentação"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---


Alguns websites têm mais do que um autor a contribuir com conteúdo e, portanto, requerem mais do que um único autor predefinido para todo o site. Para esses casos de uso, o Blowfish permite aos utilizadores estender a lista de autores utilizando a funcionalidade de múltiplos autores.

Para manter tudo compatível com versões anteriores, esta funcionalidade apenas permite a definição de autores adicionais e não altera de nenhuma forma a funcionalidade de autor anterior que é utilizada através dos ficheiros de configuração.


## Criar autores

O primeiro passo para criar novos autores é configurar uma nova pasta em `./data/authors`. Depois pode simplesmente adicionar novos ficheiros `json` dentro, um para cada novo autor. O nome do ficheiro será a `chave` para esse autor ao referenciá-lo nos seus artigos.

Como exemplo, vamos criar um ficheiro chamado `nunocoracao.json` dentro de `./data/authors`. O conteúdo do ficheiro deve ser semelhante ao abaixo. `name`, `image`, `bio` e `social` são os 4 parâmetros suportados atualmente para autores. Eles espelham as configurações disponíveis para o autor predefinido nos ficheiros de configuração.

_Nota: a chave no objeto social será utilizada para obter um dos ícones do tema, sinta-se à vontade para utilizar qualquer um dos ícones disponíveis na sua instalação._

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

Agora que criou um autor, o próximo passo é referenciá-lo em um ou mais artigos. No exemplo abaixo, referenciamos o autor criado no passo anterior utilizando a sua `chave`.

Isto irá renderizar um autor adicional utilizando os dados fornecidos no ficheiro `json`. Esta funcionalidade não altera de nenhuma forma o autor predefinido configurado para o site geral, e portanto, pode controlar ambos separadamente. Utilizando o parâmetro `showAuthor`, pode configurar se deseja mostrar o autor predefinido, esse é o caso de uso normal para um blogue de autor único. O novo parâmetro front matter `authors` permite definir autores especificamente para um artigo, e eles serão renderizados independentemente das configurações para o autor predefinido do site.

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

No exemplo, que corresponde ao markdown da página atual, tanto o autor predefinido quanto o novo serão apresentados. Pode fazer scroll para baixo agora para ver o resultado.

## Criar a taxonomia de autores

Para obter listas de artigos para cada um dos seus autores, pode configurar a taxonomia `authors`, que abre algumas configurações mais que podem ser interessantes. Este é um passo opcional no processo que não é necessário para apresentar os autores nos seus artigos.

O primeiro passo é configurar a taxonomia `authors` no seu ficheiro `hugo.toml`, como no exemplo abaixo. Embora `tag` e `category` sejam definidos por predefinição com Hugo, assim que adiciona uma secção de taxonomias específica, precisa de adicioná-los novamente, caso contrário o site não os processará.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

E é basicamente isso. Agora terá páginas que referenciam os seus autores e, para cada um, mostram a respetiva lista de artigos onde participam. Também pode utilizar `article.showAuthorsBadges` no ficheiro de configuração, ou `showAuthorsBadges` em cada artigo para escolher se deseja apresentar a taxonomia `authors` como badges em cada item de publicação. Como exemplo, esta documentação está configurada para não apresentar autores, mas se olhar para a amostra referenciada abaixo, verá os autores apresentados como badges.

Por último, pode adicionar mais detalhes a cada página de autor para que apresente uma pequena bio, ligações ou qualquer informação que se adeque ao seu caso de uso. Para conseguir isso, crie uma pasta com a `chave` para cada autor dentro de `./content/authors` e dentro de cada pasta coloque um ficheiro `_index.md`. Para o exemplo acima, terminaríamos com um ficheiro `.content/authors/nunocoracao/_index.md`. Dentro, pode configurar o nome real do autor e o conteúdo da sua página. Os autores neste website de documentação estão configurados assim, portanto pode dar uma vista de olhos navegando pelo site.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Exemplo

Esta amostra abaixo mostra um exemplo onde o autor predefinido do site está desativado e o artigo tem múltiplos autores.

{{< article link="/samples/multiple-authors/" >}}
