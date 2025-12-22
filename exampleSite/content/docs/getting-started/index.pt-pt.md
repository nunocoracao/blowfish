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
Esta secção assume que já [instalou o tema Blowfish]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
Acabámos de lançar uma ferramenta CLI para o ajudar a começar com o Blowfish. Irá ajudá-lo com a instalação e configuração. Instale a ferramenta CLI globalmente utilizando:
```bash
npx blowfish-tools
```
{{< /alert >}}

Os ficheiros de configuração que acompanham o Blowfish contêm todas as definições possíveis que o tema reconhece. Por defeito, muitas delas estão comentadas, mas pode simplesmente descomentá-las para ativar ou alterar uma funcionalidade específica.

## Configuração básica

Antes de criar qualquer conteúdo, há algumas coisas que deve configurar para uma nova instalação. Começando no ficheiro `hugo.toml`, defina os parâmetros `baseURL` e `languageCode`. O `languageCode` deve ser definido para o idioma principal que utilizará para escrever o seu conteúdo.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "pt-pt"
```

O próximo passo é configurar as definições de idioma. Embora o Blowfish suporte configurações multilingues, por agora, apenas configure o idioma principal.

Localize o ficheiro `languages.en.toml` na pasta de configuração. Se o seu idioma principal for inglês, pode utilizar este ficheiro tal como está. Caso contrário, renomeie-o para incluir o código de idioma correto no nome do ficheiro. Por exemplo, para português europeu, renomeie o ficheiro para `languages.pt-pt.toml`.

{{< alert >}}
Note que o código de idioma no nome do ficheiro de configuração de idioma deve corresponder à definição `languageCode` em `hugo.toml`.
{{< /alert >}}

```toml
# config/_default/languages.pt-pt.toml

title = "O meu site fantástico"

[params.author]
name = "O meu nome"
image = "img/author.jpg"
headline = "Um ser humano geralmente fantástico"
bio = "Um pouco sobre mim"
links = [
  { twitter = "https://twitter.com/username" }
]
```

A configuração `[params.author]` determina como as informações do autor são apresentadas no site. A imagem deve ser colocada na pasta `assets/` do site. As ligações serão apresentadas na ordem em que estão listadas.

Se precisar de mais detalhes, informações adicionais sobre cada uma destas opções de configuração são cobertas na secção [Configuração]({{< ref "configuration" >}}).

## Esquemas de cores

O Blowfish vem com vários esquemas de cores prontos a usar. Pode experimentar os esquemas integrados abaixo:

{{< theme-switcher >}}

Cada esquema de cores no Blowfish é construído sobre uma paleta de três cores que é utilizada consistentemente em todo o tema. Cada uma destas cores principais é baseada nas paletas de cores de dez tons incluídas no [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

Embora estes sejam os esquemas predefinidos, também pode criar os seus próprios. Consulte a secção [Personalização Avançada]({{< ref "advanced-customisation#colour-schemes" >}}) para mais detalhes.

## Organização do conteúdo

Por defeito, o Blowfish não o obriga a utilizar um tipo de conteúdo específico. Ao fazê-lo, é livre de definir o seu conteúdo como desejar. Pode preferir _páginas_ para um site estático, _publicações_ para um blogue, ou _projetos_ para um portfólio.

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

O Blowfish também é flexível quando se trata de taxonomias. Algumas pessoas preferem utilizar _tags_ e _categorias_ para agrupar o seu conteúdo, outras preferem utilizar _tópicos_.

O Hugo utiliza por defeito posts, tags e categorias, e isso funcionará bem se é isso que pretende. Se desejar personalizar isto, no entanto, pode fazê-lo criando um ficheiro de configuração `taxonomies.toml`:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

Isto substituirá os _tags_ e _categorias_ predefinidos por _tópicos_. Consulte a [documentação de taxonomias do Hugo](https://gohugo.io/content-management/taxonomies/) para mais informações sobre como nomear taxonomias.

Quando cria uma nova taxonomia, precisará de ajustar as ligações de navegação no site para apontar para as secções corretas, o que é coberto abaixo.

## Menus

O Blowfish tem dois menus que podem ser personalizados para se adequar ao conteúdo e layout do seu site. O menu `main` aparece no cabeçalho do site e o menu `footer` aparece na parte inferior da página, logo antes do aviso de direitos de autor.

Ambos os menus são configurados no ficheiro `menus.pt-pt.toml`. De forma semelhante ao ficheiro de configuração de idiomas, se desejar utilizar outro idioma, renomeie este ficheiro e substitua `en` pelo código de idioma que deseja utilizar.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blogue"
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

O parâmetro `name` especifica o texto que é utilizado na ligação do menu. Também pode opcionalmente fornecer um `title` que preenche o atributo title HTML para a ligação.

O parâmetro `pageRef` permite-lhe fazer referência facilmente a páginas de conteúdo e taxonomias do Hugo. É a forma mais rápida de configurar o menu, pois pode simplesmente referir-se a qualquer item de conteúdo do Hugo e este construirá automaticamente a ligação correta. Para criar ligações para URLs externos, o parâmetro `url` pode ser utilizado.

O parâmetro `pre` permite-lhe colocar um ícone do [conjunto de ícones do Blowfish]({{< ref "samples/icons" >}}) na entrada do menu. Este parâmetro pode ser utilizado com o parâmetro `name` ou sozinho. Se quiser utilizar várias entradas de menu apenas com ícones, por favor defina o parâmetro `identifier`, caso contrário o Hugo utilizará por defeito a tag de nome como id e provavelmente não apresentará todas as entradas do menu.

As ligações do menu serão ordenadas do menor para o maior `weight`, e depois alfabeticamente por `name`.

Ambos os menus são completamente opcionais e podem ser comentados se não forem necessários. Utilize o modelo fornecido no ficheiro como guia.

### Menus aninhados

O tema também suporta menus aninhados. Para utilizá-los, só precisa de definir uma entrada pai em `menu.toml` e os seus submenus utilizando o parâmetro `parent` para referenciar o pai. Todas as propriedades podem ser utilizadas para submenus. `pageRef` e `url` também podem ser utilizados na entrada pai. Menus aninhados estão disponíveis apenas no menu principal, não para o rodapé.

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

Adicionalmente, também pode configurar um menu de sub-navegação. Basta definir novas entradas de menu como `subnavigation` em `menus.toml`.
Isto irá renderizar uma segunda linha com subcategorias abaixo do menu principal do cabeçalho.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "Um tópico interessante"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "A minha categoria fantástica"
  pageRef = "categories/awesome"
  weight = 20
```

O `name` predefinido é o `pageRef` em formato de título.

## Miniaturas e Fundos

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se está familiarizado com a estrutura de artigos do Hugo, basta colocar um ficheiro de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá então utilizar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) também há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se quiser ver como pode fazer isso.

Adicionalmente, o Blowfish também suporta imagens hero de fundo em artigos e listas. Para utilizar uma imagem diferente da destacada, adicione um ficheiro de imagem cujo nome comece com `background*`.

## Configuração detalhada

Os passos acima são a configuração mínima. Se agora executar `hugo server`, será apresentado um site Blowfish em branco. A configuração detalhada é coberta na secção [Configuração]({{< ref "configuration" >}}).
