---
title: "Exemplos de conteúdo"
weight: 11
draft: false
description: "Todos os partials disponíveis no Blowfish."
slug: "content-examples"
tags: ["conteúdo", "exemplo"]
series: ["Documentação"]
series_order: 12
---

Se tem lido a documentação por ordem, agora deverá conhecer todas as funcionalidades e configurações disponíveis no Blowfish. Esta página foi concebida para reunir tudo e oferecer alguns exemplos práticos que poderá querer utilizar no seu projeto Hugo.

{{< alert >}}
**Dica:** Se é novo no Hugo, certifique-se de consultar a [documentação oficial](https://gohugo.io/content-management/page-bundles/) para saber mais sobre o conceito de bundles de página e recursos.
{{< /alert >}}

Os exemplos nesta página podem todos ser adaptados a diferentes cenários, mas esperamos que lhe deem algumas ideias sobre como abordar a formatação de um item de conteúdo específico para o seu projeto individual.

## Páginas branch

Os bundles de página branch no Hugo cobrem itens como a página inicial, listagens de secções e páginas de taxonomia. O importante a lembrar sobre bundles branch é que o nome do ficheiro para este tipo de conteúdo é **`_index.md`**.

O Blowfish respeitará os parâmetros de front matter especificados nas páginas branch e estes substituirão as definições predefinidas para essa página específica. Por exemplo, definir o parâmetro `title` numa página branch permitirá substituir o título da página.

### Página inicial

|              |                      |
| ------------ | -------------------- |
| **Layout:**  | `layouts/index.html` |
| **Conteúdo:** | `content/_index.md`  |

A página inicial no Blowfish é especial porque o seu design geral é controlado pelo parâmetro de configuração do layout da página inicial. Pode saber mais sobre isto na secção [Layout da página inicial]({{< ref "homepage-layout" >}}).

Se quiser adicionar conteúdo personalizado a esta página, basta criar um ficheiro `content/_index.md`. Tudo o que estiver neste ficheiro será incluído na sua página inicial.

**Exemplo:**

```yaml
---
title: "Bem-vindo ao Blowfish!"
description: "Esta é uma demonstração de como adicionar conteúdo à página inicial."
---
Bem-vindo ao meu site! Fico muito contente que tenha passado por cá.
```

_Este exemplo define um título personalizado e adiciona algum texto adicional ao corpo da página. Qualquer texto formatado em Markdown é aceitável, incluindo shortcodes, imagens e ligações._

### Páginas de lista

|              |                              |
| ------------ | ---------------------------- |
| **Layout:**  | `layouts/_default/list.html` |
| **Conteúdo:** | `content/../_index.md`       |

As páginas de lista agrupam todas as páginas de uma secção e fornecem uma forma para os visitantes alcançarem cada página. Um blogue ou portfólio são exemplos de uma página de lista, pois agrupam publicações ou projetos.

Criar uma página de lista é tão simples como criar um subdiretório na pasta de conteúdo. Por exemplo, para criar uma secção "Projetos", criaria `content/projects/`. Em seguida, crie um ficheiro Markdown para cada um dos seus projetos.

Uma página de lista será gerada por predefinição, no entanto, para personalizar o conteúdo, também deve criar uma página `_index.md` neste novo diretório.

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

O Hugo gerará URLs para as páginas na sua pasta de projetos em conformidade.

Tal como na página inicial, o conteúdo no ficheiro `_index.md` será apresentado no índice de lista gerado. O Blowfish listará então quaisquer páginas nesta secção abaixo do conteúdo.

**Exemplo:**

```yaml
---
title: "Projetos"
description: "Conheça alguns dos meus projetos."
cascade:
  showReadingTime: false
---
Esta secção contém todos os meus projetos atuais.
```

_Neste exemplo, o parâmetro especial `cascade` está a ser utilizado para ocultar o tempo de leitura em quaisquer subpáginas dentro desta secção. Ao fazer isto, as páginas de projeto não mostrarão o seu tempo de leitura. Esta é uma excelente forma de substituir os parâmetros predefinidos do tema para uma secção inteira sem ter de os incluir em cada página individual._

A [secção de amostras]({{< ref "samples" >}}) deste site é um exemplo de uma página de lista.

### Páginas de taxonomia

|                  |                                  |
| ---------------- | -------------------------------- |
| **Layout lista:** | `layouts/_default/taxonomy.html` |
| **Layout termo:** | `layouts/_default/term.html`     |
| **Conteúdo:**     | `content/../_index.md`           |

As páginas de taxonomia vêm em duas formas - listas de taxonomia e termos de taxonomia. As listas apresentam uma listagem de cada um dos termos dentro de uma determinada taxonomia, enquanto os termos apresentam uma lista de páginas que estão relacionadas com um determinado termo.

A terminologia pode ser um pouco confusa, então vamos explorar um exemplo utilizando uma taxonomia chamada `animals`.

Primeiro, para utilizar taxonomias no Hugo, estas devem ser configuradas. Isto é feito criando um ficheiro de configuração em `config/_default/taxonomies.toml` e definindo o nome da taxonomia.

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

O Hugo espera que as taxonomias sejam listadas utilizando as suas formas singular e plural, pelo que adicionamos o singular `animal` igual ao plural `animals` para criar a nossa taxonomia de exemplo.

Agora que a nossa taxonomia `animals` existe, precisa de ser adicionada aos itens de conteúdo individuais. É tão simples como inseri-la no front matter:

```yaml
---
title: "Na toca do leão"
description: "Esta semana estamos a aprender sobre leões."
animals: ["lion", "cat"]
---
```

Isto criou agora dois _termos_ dentro da nossa taxonomia `animals` - `lion` e `cat`.

Embora não seja óbvio neste ponto, o Hugo estará agora a gerar páginas de lista e termo para esta nova taxonomia. Por predefinição, a listagem pode ser acedida em `/animals/` e as páginas de termo podem ser encontradas em `/animals/lion/` e `/animals/cat/`.

A página de lista listará todos os termos contidos dentro da taxonomia. Neste exemplo, navegar para `/animals/` mostrará uma página que tem ligações para "lion" e "cat" que levam os visitantes às páginas de termo individuais.

As páginas de termo listarão todas as páginas contidas dentro desse termo. Estas listas de termos são essencialmente as mesmas que as [páginas de lista](#páginas-de-lista) normais e comportam-se da mesma forma.

Para adicionar conteúdo personalizado às páginas de taxonomia, basta criar ficheiros `_index.md` na pasta de conteúdo utilizando o nome da taxonomia como o nome do subdiretório.

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

Tudo o que estiver nestes ficheiros de conteúdo será agora colocado nas páginas de taxonomia geradas. Como com outros conteúdos, as variáveis de front matter podem ser utilizadas para substituir valores predefinidos. Desta forma, poderia ter uma tag chamada `lion` mas substituir o `title` por "Leão".

Para ver como isto se parece na realidade, consulte a [listagem de taxonomia de tags]({{< ref "tags" >}}) neste site.

## Páginas leaf

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout:**               | `layouts/_default/single.html`  |
| **Conteúdo (autónomo):** | `content/../page-name.md`       |
| **Conteúdo (agrupado):**    | `content/../page-name/index.md` |

As páginas leaf no Hugo são basicamente páginas de conteúdo padrão. São definidas como páginas que não contêm quaisquer subpáginas. Estas poderiam ser coisas como uma página Sobre, ou uma publicação de blogue individual que vive na secção de blogue do site.

O mais importante a lembrar sobre páginas leaf é que, ao contrário das páginas branch, as páginas leaf devem ser nomeadas `index.md` _sem_ underscore. As páginas leaf também são especiais porque podem ser agrupadas no nível superior da secção e nomeadas com um nome único.

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

Ao incluir recursos numa página, como uma imagem, deve ser utilizado um bundle de página. Os bundles de página são criados utilizando um subdiretório com um ficheiro `index.md`. Agrupar os recursos com o conteúdo no seu próprio diretório é importante, pois muitos dos shortcodes e outras lógicas do tema assumem que os recursos estão agrupados junto com as páginas.

**Exemplo:**

```yaml
---
title: "A minha primeira publicação de blogue"
date: 2022-01-25
description: "Bem-vindo ao meu blogue!"
summary: "Saiba mais sobre mim e porque estou a começar este blogue."
tags: ["boas-vindas", "novo", "sobre", "primeiro"]
---
_Este_ é o conteúdo da minha publicação de blogue.
```

As páginas leaf têm uma grande variedade de parâmetros de [front matter]({{< ref "front-matter" >}}) que podem ser utilizados para personalizar como são apresentadas.

### Ligações externas

O Blowfish tem uma funcionalidade especial que permite que ligações para páginas externas apareçam ao lado dos artigos nas listagens de artigos. Isto é útil se tem conteúdo em sites de terceiros como Medium, ou artigos de investigação que gostaria de ligar, sem replicar o conteúdo no seu site Hugo.

Para criar um artigo de ligação externa, algum front matter especial precisa de ser definido:

```yaml
---
title: "A minha publicação no Medium"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "Escrevi uma publicação no Medium."
showReadingTime: false
build:
  render: "false"
  list: "local"
---
```

Juntamente com os parâmetros normais de front matter como `title` e `summary`, o parâmetro `externalUrl` é utilizado para dizer ao Blowfish que este não é um artigo comum. O URL fornecido aqui será para onde os visitantes serão direcionados quando selecionarem este artigo.

Adicionalmente, utilizamos um parâmetro especial de front matter do Hugo `build` para evitar que uma página normal seja gerada para este conteúdo - não faz sentido gerar uma página já que estamos a ligar a um URL externo!

O tema inclui um arquétipo para simplificar a geração destes artigos de ligação externa. Basta especificar `-k external` ao criar novo conteúdo.

```shell
hugo new -k external posts/my-post.md
```

### Páginas simples

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

O Blowfish também inclui um layout especial para páginas simples. O layout simples é um template de largura total que simplesmente coloca o conteúdo Markdown na página sem nenhuma funcionalidade especial do tema.

As únicas funcionalidades disponíveis no layout simples são breadcrumbs e ligações de partilha. No entanto, o comportamento destes ainda pode ser controlado utilizando as variáveis normais de [front matter]({{< ref "front-matter" >}}) da página.

Para ativar o layout simples numa página específica, adicione a variável de front matter `layout` com o valor `"simple"`:

```yaml
---
title: "A minha página de destino"
date: 2022-03-08
layout: "simple"
---
O conteúdo desta página é agora de largura total.
```

## Layouts personalizados

Um dos benefícios do Hugo é que facilita a criação de layouts personalizados para todo o site, secções individuais ou páginas.

Os layouts seguem todas as regras normais de templates do Hugo e mais informações estão disponíveis na [documentação oficial do Hugo](https://gohugo.io/templates/introduction/).

### Substituir layouts predefinidos

Cada um dos tipos de conteúdo discutidos acima lista o ficheiro de layout que é utilizado para gerar cada tipo de página. Se este ficheiro for criado no seu projeto local, substituirá o template do tema e, portanto, pode ser utilizado para personalizar o estilo predefinido do site.

Por exemplo, criar um ficheiro `layouts/_default/single.html` permitirá que o layout das páginas leaf seja completamente personalizado.

### Layouts de secção personalizados

Também é simples criar layouts personalizados para secções de conteúdo individuais. Isto é útil quando quer fazer uma secção que lista um certo tipo de conteúdo utilizando um estilo específico.

Vamos percorrer um exemplo que cria uma página "Projetos" personalizada que lista projetos utilizando um layout especial.

Para fazer isto, estruture o seu conteúdo utilizando as regras normais de conteúdo do Hugo e crie uma secção para os seus projetos. Adicionalmente, crie um novo layout para a secção de projetos utilizando o mesmo nome de diretório que o conteúdo e adicionando um ficheiro `list.html`.

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

Este ficheiro `list.html` irá agora substituir o template de lista predefinido, mas apenas para a secção `projects`. Antes de olharmos para este ficheiro, vamos primeiro olhar para os ficheiros de projeto individuais.

```yaml
---
title: "Blowfish"
date: 2021-08-11
icon: "github"
description: "Um tema para Hugo construído com Tailwind CSS."
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/nunocoracao/blowfish/"
---
```

_Neste exemplo, estamos a atribuir alguns metadados a cada projeto que podemos depois utilizar no nosso template de lista. Não há conteúdo de página, mas nada o impede de o incluir. É o seu próprio template personalizado, afinal!_

Com os projetos definidos, agora podemos criar um template de lista que apresenta os detalhes de cada projeto.

```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

Embora este seja um exemplo bastante simples, pode ver que percorre cada uma das páginas nesta secção (ou seja, cada projeto) e depois apresenta ligações HTML para cada projeto juntamente com um ícone. Os metadados no front matter de cada projeto são utilizados para determinar que informações são apresentadas.

Tenha em mente que precisará de garantir que os estilos e classes relevantes estão disponíveis, o que pode exigir que o CSS do Tailwind seja recompilado. Isto é discutido com mais detalhe na secção [Personalização avançada]({{< ref "advanced-customisation" >}}).

Ao criar templates personalizados como este, é sempre mais fácil dar uma vista de olhos em como o template predefinido do Blowfish funciona e depois utilizá-lo como guia. Lembre-se, a [documentação do Hugo](https://gohugo.io/templates/introduction/) também é um excelente recurso para saber mais sobre a criação de templates.
