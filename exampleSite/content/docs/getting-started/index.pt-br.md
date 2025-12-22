---
title: "Primeiros Passos"
weight: 3
draft: false
description: "Todas as variáveis de front matter disponíveis no Blowfish."
slug: "getting-started"
tags: ["instalação", "documentação"]
series: ["Documentação"]
series_order: 3
---

{{< alert >}}
Esta seção assume que você já [instalou o tema Blowfish]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
Acabamos de lançar uma ferramenta CLI para ajudá-lo a começar com o Blowfish. Ela ajudará com a instalação e configuração. Instale a ferramenta CLI globalmente usando:
```bash
npx blowfish-tools
```
{{< /alert >}}

Os arquivos de configuração que acompanham o Blowfish contêm todas as configurações possíveis que o tema reconhece. Por padrão, muitas delas estão comentadas, mas você pode simplesmente descomentá-las para ativar ou alterar uma funcionalidade específica.

## Configuração básica

Antes de criar qualquer conteúdo, há algumas coisas que você deve configurar para uma nova instalação. Começando no arquivo `hugo.toml`, defina os parâmetros `baseURL` e `languageCode`. O `languageCode` deve ser definido para o idioma principal que você usará para escrever seu conteúdo.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "pt-br"
```

O próximo passo é configurar as definições de idioma. Embora o Blowfish suporte configurações multilíngues, por enquanto, apenas configure o idioma principal.

Localize o arquivo `languages.en.toml` na pasta de configuração. Se seu idioma principal for inglês, você pode usar este arquivo como está. Caso contrário, renomeie-o para incluir o código de idioma correto no nome do arquivo. Por exemplo, para português brasileiro, renomeie o arquivo para `languages.pt-br.toml`.

{{< alert >}}
Note que o código de idioma no nome do arquivo de configuração de idioma deve corresponder à configuração `languageCode` em `hugo.toml`.
{{< /alert >}}

```toml
# config/_default/languages.pt-br.toml

title = "Meu site incrível"

[params.author]
name = "Meu nome"
image = "img/author.jpg"
headline = "Um ser humano geralmente incrível"
bio = "Um pouco sobre mim"
links = [
  { twitter = "https://twitter.com/username" }
]
```

A configuração `[params.author]` determina como as informações do autor são exibidas no site. A imagem deve ser colocada na pasta `assets/` do site. Os links serão exibidos na ordem em que estão listados.

Se você precisar de mais detalhes, informações adicionais sobre cada uma dessas opções de configuração são cobertas na seção [Configuração]({{< ref "configuration" >}}).

## Esquemas de cores

O Blowfish vem com vários esquemas de cores prontos para uso. Você pode experimentar os esquemas integrados abaixo:

{{< theme-switcher >}}

Cada esquema de cores no Blowfish é construído sobre uma paleta de três cores que é usada consistentemente em todo o tema. Cada uma dessas cores principais é baseada nas paletas de cores de dez tons incluídas no [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

Embora esses sejam os esquemas padrão, você também pode criar os seus próprios. Consulte a seção [Personalização Avançada]({{< ref "advanced-customisation#colour-schemes" >}}) para mais detalhes.

## Organizando conteúdo

Por padrão, o Blowfish não força você a usar um tipo de conteúdo específico. Ao fazer isso, você é livre para definir seu conteúdo como desejar. Você pode preferir _páginas_ para um site estático, _posts_ para um blog, ou _projetos_ para um portfólio.

Aqui está uma visão geral rápida de um projeto Blowfish básico. Todo o conteúdo é colocado dentro da pasta `content`:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

É importante ter uma compreensão firme de como o Hugo espera que o conteúdo seja organizado, pois o tema é projetado para aproveitar ao máximo os bundles de páginas do Hugo. Certifique-se de ler a [documentação oficial do Hugo](https://gohugo.io/content-management/organization/) para mais informações.

O Blowfish também é flexível quando se trata de taxonomias. Algumas pessoas preferem usar _tags_ e _categorias_ para agrupar seu conteúdo, outras preferem usar _tópicos_.

O Hugo usa por padrão posts, tags e categorias, e isso funcionará bem se é isso que você quer. Se você deseja personalizar isso, no entanto, pode fazê-lo criando um arquivo de configuração `taxonomies.toml`:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

Isso substituirá os _tags_ e _categorias_ padrão por _tópicos_. Consulte a [documentação de taxonomias do Hugo](https://gohugo.io/content-management/taxonomies/) para mais informações sobre como nomear taxonomias.

Quando você cria uma nova taxonomia, precisará ajustar os links de navegação no site para apontar para as seções corretas, o que é coberto abaixo.

## Menus

O Blowfish tem dois menus que podem ser personalizados para se adequar ao conteúdo e layout do seu site. O menu `main` aparece no cabeçalho do site e o menu `footer` aparece na parte inferior da página, logo antes do aviso de copyright.

Ambos os menus são configurados no arquivo `menus.pt-br.toml`. De forma semelhante ao arquivo de configuração de idiomas, se você deseja usar outro idioma, renomeie este arquivo e substitua `en` pelo código de idioma que deseja usar.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Tópicos"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Privacidade"
  url = "https://external-link"
```

O parâmetro `name` especifica o texto que é usado no link do menu. Você também pode opcionalmente fornecer um `title` que preenche o atributo title HTML para o link.

O parâmetro `pageRef` permite que você faça referência facilmente a páginas de conteúdo e taxonomias do Hugo. É a maneira mais rápida de configurar o menu, pois você pode simplesmente se referir a qualquer item de conteúdo do Hugo e ele automaticamente construirá o link correto. Para vincular a URLs externos, o parâmetro `url` pode ser usado.

O parâmetro `pre` permite que você coloque um ícone do [conjunto de ícones do Blowfish]({{< ref "samples/icons" >}}) na entrada do menu. Este parâmetro pode ser usado com o parâmetro `name` ou sozinho. Se você quiser usar várias entradas de menu apenas com ícones, por favor defina o parâmetro `identifier`, caso contrário o Hugo usará por padrão a tag de nome como id e provavelmente não exibirá todas as entradas do menu.

Os links do menu serão ordenados do menor para o maior `weight`, e depois alfabeticamente por `name`.

Ambos os menus são completamente opcionais e podem ser comentados se não forem necessários. Use o modelo fornecido no arquivo como guia.

### Menus aninhados

O tema também suporta menus aninhados. Para usá-los, você só precisa definir uma entrada pai em `menu.toml` e seus submenus usando o parâmetro `parent` para referenciar o pai. Todas as propriedades podem ser usadas para submenus. `pageRef` e `url` também podem ser usados na entrada pai. Menus aninhados estão disponíveis apenas no menu principal, não para o rodapé.

```toml
# config/_default/menus.toml

[[main]]
  name = "Pai"
  weight = 20

[[main]]
  name = "sub-menu 1"
  parent = "Pai"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 2"
  parent = "Pai"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 3"
  parent = "Pai"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Menu de sub-navegação

Adicionalmente, você também pode configurar um menu de sub-navegação. Basta definir novas entradas de menu como `subnavigation` em `menus.toml`.
Isso renderizará uma segunda linha com subcategorias abaixo do menu principal do cabeçalho.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "Um tópico interessante"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "Minha categoria incrível"
  pageRef = "categories/awesome"
  weight = 20
```

O `name` padrão é o `pageRef` em formato de título.

## Miniaturas e Fundos

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se você está familiarizado com a estrutura de artigos do Hugo, basta colocar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá então usar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) também há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se você quiser ver como pode fazer isso.

Adicionalmente, o Blowfish também suporta imagens hero de fundo em artigos e listas. Para usar uma imagem diferente da destacada, adicione um arquivo de imagem cujo nome comece com `background*`.

## Configuração detalhada

Os passos acima são a configuração mínima. Se você agora executar `hugo server`, será apresentado um site Blowfish em branco. A configuração detalhada é coberta na seção [Configuração]({{< ref "configuration" >}}).
