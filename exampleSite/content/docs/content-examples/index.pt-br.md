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

Se você está lendo a documentação em ordem, agora deve conhecer todos os recursos e configurações disponíveis no Blowfish. Esta página foi projetada para reunir tudo e oferecer alguns exemplos práticos que você pode querer usar em seu projeto Hugo.

{{< alert >}}
**Dica:** Se você é novo no Hugo, certifique-se de conferir a [documentação oficial](https://gohugo.io/content-management/page-bundles/) para aprender mais sobre o conceito de bundles de página e recursos.
{{< /alert >}}

Os exemplos nesta página podem ser adaptados para diferentes cenários, mas esperamos que lhe deem algumas ideias sobre como abordar a formatação de um item de conteúdo específico para seu projeto individual.

## Páginas branch

Os bundles de página branch no Hugo cobrem itens como a página inicial, listagens de seções e páginas de taxonomia. O importante a lembrar sobre bundles branch é que o nome do arquivo para este tipo de conteúdo é **`_index.md`**.

O Blowfish respeitará os parâmetros de front matter especificados nas páginas branch e estes substituirão as configurações padrão para essa página específica. Por exemplo, definir o parâmetro `title` em uma página branch permitirá substituir o título da página.

### Página inicial

|              |                      |
| ------------ | -------------------- |
| **Layout:**  | `layouts/index.html` |
| **Conteúdo:** | `content/_index.md`  |

A página inicial no Blowfish é especial porque seu design geral é controlado pelo parâmetro de configuração do layout da página inicial. Você pode aprender mais sobre isso na seção [Layout da página inicial]({{< ref "homepage-layout" >}}).

Se você quiser adicionar conteúdo personalizado a esta página, simplesmente precisa criar um arquivo `content/_index.md`. Qualquer coisa neste arquivo será incluída em sua página inicial.

**Exemplo:**

```yaml
---
title: "Bem-vindo ao Blowfish!"
description: "Esta é uma demonstração de como adicionar conteúdo à página inicial."
---
Bem-vindo ao meu site! Fico muito feliz que você passou por aqui.
```

_Este exemplo define um título personalizado e adiciona algum texto adicional ao corpo da página. Qualquer texto formatado em Markdown é aceitável, incluindo shortcodes, imagens e links._

### Páginas de lista

|              |                              |
| ------------ | ---------------------------- |
| **Layout:**  | `layouts/_default/list.html` |
| **Conteúdo:** | `content/../_index.md`       |

As páginas de lista agrupam todas as páginas de uma seção e fornecem uma maneira para os visitantes alcançarem cada página. Um blog ou portfolio são exemplos de uma página de lista, pois agrupam posts ou projetos.

Criar uma página de lista é tão simples quanto criar um subdiretório na pasta de conteúdo. Por exemplo, para criar uma seção "Projetos", você criaria `content/projects/`. Em seguida, crie um arquivo Markdown para cada um dos seus projetos.

Uma página de lista será gerada por padrão, no entanto, para personalizar o conteúdo, você também deve criar uma página `_index.md` neste novo diretório.

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

O Hugo gerará URLs para as páginas na sua pasta de projetos de acordo.

Assim como a página inicial, o conteúdo no arquivo `_index.md` será exibido no índice de lista gerado. O Blowfish então listará quaisquer páginas nesta seção abaixo do conteúdo.

**Exemplo:**

```yaml
---
title: "Projetos"
description: "Conheça alguns dos meus projetos."
cascade:
  showReadingTime: false
---
Esta seção contém todos os meus projetos atuais.
```

_Neste exemplo, o parâmetro especial `cascade` está sendo usado para ocultar o tempo de leitura em quaisquer subpáginas dentro desta seção. Ao fazer isso, as páginas de projeto não mostrarão seu tempo de leitura. Esta é uma ótima maneira de substituir os parâmetros padrão do tema para uma seção inteira sem ter que incluí-los em cada página individual._

A [seção de amostras]({{< ref "samples" >}}) deste site é um exemplo de uma página de lista.

### Páginas de taxonomia

|                  |                                  |
| ---------------- | -------------------------------- |
| **Layout lista:** | `layouts/_default/taxonomy.html` |
| **Layout termo:** | `layouts/_default/term.html`     |
| **Conteúdo:**     | `content/../_index.md`           |

As páginas de taxonomia vêm em duas formas - listas de taxonomia e termos de taxonomia. As listas exibem uma listagem de cada um dos termos dentro de uma determinada taxonomia, enquanto os termos exibem uma lista de páginas que estão relacionadas a um determinado termo.

A terminologia pode ser um pouco confusa, então vamos explorar um exemplo usando uma taxonomia chamada `animals`.

Primeiro, para usar taxonomias no Hugo, elas devem ser configuradas. Isso é feito criando um arquivo de configuração em `config/_default/taxonomies.toml` e definindo o nome da taxonomia.

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

O Hugo espera que as taxonomias sejam listadas usando suas formas singular e plural, então adicionamos o singular `animal` igual ao plural `animals` para criar nossa taxonomia de exemplo.

Agora que nossa taxonomia `animals` existe, ela precisa ser adicionada aos itens de conteúdo individuais. É tão simples quanto inseri-la no front matter:

```yaml
---
title: "Na toca do leão"
description: "Esta semana estamos aprendendo sobre leões."
animals: ["lion", "cat"]
---
```

Isso criou agora dois _termos_ dentro de nossa taxonomia `animals` - `lion` e `cat`.

Embora não seja óbvio neste ponto, o Hugo agora estará gerando páginas de lista e termo para esta nova taxonomia. Por padrão, a listagem pode ser acessada em `/animals/` e as páginas de termo podem ser encontradas em `/animals/lion/` e `/animals/cat/`.

A página de lista listará todos os termos contidos dentro da taxonomia. Neste exemplo, navegar para `/animals/` mostrará uma página que tem links para "lion" e "cat" que levam os visitantes às páginas de termo individuais.

As páginas de termo listarão todas as páginas contidas dentro desse termo. Essas listas de termos são essencialmente as mesmas que as [páginas de lista](#páginas-de-lista) normais e se comportam da mesma maneira.

Para adicionar conteúdo personalizado às páginas de taxonomia, simplesmente crie arquivos `_index.md` na pasta de conteúdo usando o nome da taxonomia como o nome do subdiretório.

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

Qualquer coisa nesses arquivos de conteúdo será agora colocada nas páginas de taxonomia geradas. Como com outros conteúdos, as variáveis de front matter podem ser usadas para substituir valores padrão. Dessa forma, você poderia ter uma tag chamada `lion` mas substituir o `title` por "Leão".

Para ver como isso se parece na realidade, confira a [listagem de taxonomia de tags]({{< ref "tags" >}}) neste site.

## Páginas leaf

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout:**               | `layouts/_default/single.html`  |
| **Conteúdo (autônomo):** | `content/../page-name.md`       |
| **Conteúdo (agrupado):**    | `content/../page-name/index.md` |

As páginas leaf no Hugo são basicamente páginas de conteúdo padrão. Elas são definidas como páginas que não contêm nenhuma subpágina. Isso poderia ser coisas como uma página Sobre, ou uma postagem de blog individual que vive na seção de blog do site.

O mais importante a lembrar sobre páginas leaf é que, ao contrário das páginas branch, as páginas leaf devem ser nomeadas `index.md` _sem_ underscore. As páginas leaf também são especiais porque podem ser agrupadas no nível superior da seção e nomeadas com um nome único.

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

Ao incluir recursos em uma página, como uma imagem, um bundle de página deve ser usado. Os bundles de página são criados usando um subdiretório com um arquivo `index.md`. Agrupar os recursos com o conteúdo em seu próprio diretório é importante, pois muitos dos shortcodes e outras lógicas do tema assumem que os recursos estão agrupados junto com as páginas.

**Exemplo:**

```yaml
---
title: "Minha primeira postagem de blog"
date: 2022-01-25
description: "Bem-vindo ao meu blog!"
summary: "Saiba mais sobre mim e por que estou começando este blog."
tags: ["boas-vindas", "novo", "sobre", "primeiro"]
---
_Este_ é o conteúdo da minha postagem de blog.
```

As páginas leaf têm uma grande variedade de parâmetros de [front matter]({{< ref "front-matter" >}}) que podem ser usados para personalizar como são exibidas.

### Links externos

O Blowfish tem um recurso especial que permite que links para páginas externas apareçam ao lado dos artigos nas listagens de artigos. Isso é útil se você tem conteúdo em sites de terceiros como Medium, ou artigos de pesquisa que você gostaria de vincular, sem replicar o conteúdo em seu site Hugo.

Para criar um artigo de link externo, algum front matter especial precisa ser definido:

```yaml
---
title: "Minha postagem no Medium"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "Escrevi uma postagem no Medium."
showReadingTime: false
build:
  render: "false"
  list: "local"
---
```

Junto com os parâmetros normais de front matter como `title` e `summary`, o parâmetro `externalUrl` é usado para dizer ao Blowfish que este não é um artigo comum. A URL fornecida aqui será para onde os visitantes serão direcionados quando selecionarem este artigo.

Adicionalmente, usamos um parâmetro especial de front matter do Hugo `build` para evitar que uma página normal seja gerada para este conteúdo - não há sentido em gerar uma página já que estamos vinculando a uma URL externa!

O tema inclui um arquétipo para simplificar a geração desses artigos de link externo. Basta especificar `-k external` ao criar novo conteúdo.

```shell
hugo new -k external posts/my-post.md
```

### Páginas simples

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

O Blowfish também inclui um layout especial para páginas simples. O layout simples é um template de largura total que simplesmente coloca o conteúdo Markdown na página sem nenhum recurso especial do tema.

Os únicos recursos disponíveis no layout simples são breadcrumbs e links de compartilhamento. No entanto, o comportamento destes ainda pode ser controlado usando as variáveis normais de [front matter]({{< ref "front-matter" >}}) da página.

Para habilitar o layout simples em uma página específica, adicione a variável de front matter `layout` com o valor `"simple"`:

```yaml
---
title: "Minha página de destino"
date: 2022-03-08
layout: "simple"
---
O conteúdo desta página agora é de largura total.
```

## Layouts personalizados

Um dos benefícios do Hugo é que ele facilita a criação de layouts personalizados para todo o site, seções individuais ou páginas.

Os layouts seguem todas as regras normais de templates do Hugo e mais informações estão disponíveis na [documentação oficial do Hugo](https://gohugo.io/templates/introduction/).

### Substituindo layouts padrão

Cada um dos tipos de conteúdo discutidos acima lista o arquivo de layout que é usado para gerar cada tipo de página. Se este arquivo for criado em seu projeto local, ele substituirá o template do tema e, portanto, pode ser usado para personalizar o estilo padrão do site.

Por exemplo, criar um arquivo `layouts/_default/single.html` permitirá que o layout das páginas leaf seja completamente personalizado.

### Layouts de seção personalizados

Também é simples criar layouts personalizados para seções de conteúdo individuais. Isso é útil quando você quer fazer uma seção que lista um certo tipo de conteúdo usando um estilo específico.

Vamos percorrer um exemplo que cria uma página "Projetos" personalizada que lista projetos usando um layout especial.

Para fazer isso, estruture seu conteúdo usando as regras normais de conteúdo do Hugo e crie uma seção para seus projetos. Adicionalmente, crie um novo layout para a seção de projetos usando o mesmo nome de diretório que o conteúdo e adicionando um arquivo `list.html`.

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

Este arquivo `list.html` agora substituirá o template de lista padrão, mas apenas para a seção `projects`. Antes de olharmos para este arquivo, vamos primeiro olhar para os arquivos de projeto individuais.

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

_Neste exemplo, estamos atribuindo alguns metadados a cada projeto que podemos usar em nosso template de lista. Não há conteúdo de página, mas nada impede você de incluí-lo. É seu próprio template personalizado, afinal!_

Com os projetos definidos, agora podemos criar um template de lista que exibe os detalhes de cada projeto.

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

Embora este seja um exemplo bastante simples, você pode ver que ele percorre cada uma das páginas nesta seção (ou seja, cada projeto) e então exibe links HTML para cada projeto junto com um ícone. Os metadados no front matter de cada projeto são usados para determinar quais informações são exibidas.

Tenha em mente que você precisará garantir que os estilos e classes relevantes estejam disponíveis, o que pode exigir que o CSS do Tailwind seja recompilado. Isso é discutido com mais detalhes na seção [Personalização avançada]({{< ref "advanced-customisation" >}}).

Ao criar templates personalizados como este, é sempre mais fácil dar uma olhada em como o template padrão do Blowfish funciona e depois usá-lo como guia. Lembre-se, a [documentação do Hugo](https://gohugo.io/templates/introduction/) também é um ótimo recurso para aprender mais sobre a criação de templates.
