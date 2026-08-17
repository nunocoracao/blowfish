---
title: "Layout da Página Inicial"
featureimage: "images/v3/homepage-layout.png"
weight: 5
draft: false
description: "Configuração do layout da página inicial no tema Blowfish."
slug: "homepage-layout"
tags: ["página inicial", "layouts", "documentação"]
series: ["Documentação"]
series_order: 5
---

O Blowfish fornece layouts de página inicial flexíveis, com definições para ajustar cada design. Alternativamente, também pode fornecer o seu próprio modelo e ter controlo total sobre o conteúdo da página inicial.

O layout da página inicial é controlado pela definição `homepage.layout` no ficheiro de configuração `params.toml`. Além disso, todos os layouts têm a opção de incluir uma lista de [artigos recentes](#artigos-recentes).

## Layout Perfil

O layout predefinido é o layout de perfil, que é ótimo para sites pessoais e blogues. Coloca os detalhes do autor em primeiro plano, fornecendo uma imagem e ligações para perfis sociais.

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

As informações do autor são fornecidas no ficheiro de configuração de idiomas. Consulte as secções [Primeiros Passos]({{< ref "getting-started" >}}) e [Configuração de Idioma]({{< ref "configuration##language-and-i18n" >}}) para detalhes dos parâmetros.

Além disso, qualquer conteúdo Markdown fornecido no conteúdo da página inicial será colocado abaixo do perfil do autor. Isto permite flexibilidade extra para apresentar uma biografia ou outro conteúdo personalizado utilizando shortcodes.

Para ativar o layout Perfil, defina `homepage.layout = "profile"` no ficheiro de configuração `params.toml`.

## Layout Página

O layout de página é simplesmente uma página de conteúdo normal que apresenta o seu conteúdo Markdown. É ótimo para sites estáticos e fornece muita flexibilidade.

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

Para ativar o layout Página, defina `homepage.layout = "page"` no ficheiro de configuração `params.toml`.

## Layout Hero

O layout hero combina ideias dos layouts de perfil e cartão. Este não só apresenta informações sobre o autor do site, mas também carrega o seu markdown abaixo.

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

Para ativar o layout Hero, defina `homepage.layout = "hero"` e `homepage.homepageImage` no ficheiro de configuração `params.toml`.

## Layout Fundo

O layout de fundo é uma versão mais suave do layout hero. Tal como no layout Hero, este também apresenta informações sobre o autor do site e carrega o seu markdown abaixo.

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

Para ativar o layout Fundo, defina `homepage.layout = "background"` e `homepage.homepageImage` no ficheiro de configuração `params.toml`.

## Layout Cartão

O layout de cartão é uma extensão do layout de página. Fornece o mesmo nível de flexibilidade, também apresentando o seu conteúdo markdown e adiciona uma imagem de cartão para apresentar conteúdo visual.

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

Para ativar o layout Cartão, defina `homepage.layout = "card"` e `homepage.homepageImage` no ficheiro de configuração `params.toml`.

## Layout Landing

O layout Landing foi pensado para sites de produto, hubs de documentação e sites pessoais que precisam de uma abertura mais marcante. Abre com um hero espaçoso e editorial — legenda (eyebrow), título de destaque, parágrafo introdutório e botões de call-to-action — opcionalmente apoiado por uma imagem hero de largura total que se dissolve no fundo global, com uma animação de entrada faseada que é automaticamente desativada para os visitantes que preferem movimento reduzido. Tudo o que está abaixo do hero é Markdown padrão e shortcodes do Blowfish, pelo que a página completa se mantém portátil e fácil de manter.

{{< figure src="img/home-landing.png" class="thumbnailshadow" >}}

Para ativar o layout Landing, defina `homepage.layout = "landing"` no ficheiro de configuração `params.toml`.

O hero é controlado pelo front matter de `content/_index.md`. Todos os campos são opcionais — tudo o que omitir simplesmente não é apresentado:

```yaml
---
title: "Build a site that feels unmistakably yours."
heroCaption: "Blowfish" # eyebrow above the title; defaults to the author name
heroLead: "A short statement that expands on the title."
heroButtons:
  - label: "Get started"
    url: "/docs/installation/"
  - label: "Explore the docs"
    url: "/docs/"
    style: "outline" # "primary" (default) or "outline"
---
```

| Front matter | Descrição |
| ------------ | ----------- |
| `heroCaption` | Pequena legenda (eyebrow) em maiúsculas acima do título. A predefinição é `params.Author.name`. |
| `heroLead` | Parágrafo introdutório apresentado sob o título. Suporta Markdown. |
| `heroButtons` | Lista de botões de call-to-action (`label`, `url` e `style` opcional). Utiliza o mesmo estilo do [shortcode `cta`]({{< ref "shortcodes#cta-button" >}}). |

O corpo Markdown de `_index.md` é apresentado abaixo do hero, pelo que estatísticas, grelhas de funcionalidades, passos e quaisquer outros shortcodes podem construir o resto da página. O layout Landing combina bem com a opção `backgroundCanvas` aplicada a todo o site, descrita na [documentação de configuração]({{< ref "configuration" >}}).


## Layout personalizado

Se os layouts de página inicial integrados não forem suficientes para as suas necessidades, tem a opção de fornecer o seu próprio layout personalizado. Isto permite-lhe ter controlo total sobre o conteúdo da página e essencialmente dá-lhe uma tela em branco para trabalhar.

Para ativar o layout personalizado, defina `homepage.layout = "custom"` no ficheiro de configuração `params.toml`.

Com o valor de configuração definido, crie um novo ficheiro `custom.html` e coloque-o em `layouts/partials/home/custom.html`. Agora, o que estiver no ficheiro `custom.html` será colocado na área de conteúdo da página inicial do site. Pode utilizar qualquer HTML, Tailwind ou funções de template Hugo que desejar para definir o seu layout.

Para incluir [artigos recentes](#artigos-recentes) no layout personalizado, utilize o partial `recent-articles/main.html`.

O site de exemplo incluído utiliza o layout Landing integrado e shortcodes de conteúdo padrão. Visite o [repositório GitHub](https://github.com/nunocoracao/blowfish/tree/main/exampleSite) para ver como está configurado.

## Artigos recentes

Todos os layouts de página inicial têm a opção de apresentar artigos recentes abaixo do conteúdo principal da página. Para ativar isto, basta definir a configuração `homepage.showRecent` como `true` no ficheiro de configuração `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Os artigos listados nesta secção são derivados da definição `mainSections` que permite quaisquer tipos de conteúdo que esteja a utilizar no seu site. Por exemplo, se tiver secções de conteúdo para _posts_ e _projects_, poderia definir esta configuração como `["posts", "projects"]` e todos os artigos nestas duas secções seriam utilizados para preencher a lista de recentes. O tema espera que esta definição seja um array, pelo que se utilizar apenas uma secção para todo o seu conteúdo, deve definir assim: `["blog"]`.

## Miniaturas

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se está familiarizado com a estrutura de artigos do Hugo, basta colocar um ficheiro de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá utilizar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se quiser ver um exemplo.

## Galeria de cartões

O Blowfish também suporta apresentar as listas padrão de artigos como galerias de cartões. Pode configurar isto tanto para a secção de recentes na página inicial quanto para listas de artigos em todo o seu site. Para a página inicial, pode utilizar `homepage.cardView` e `homepage.cardViewScreenWidth`; e para listas, utilize `list.cardView` e `list.cardViewScreenWidth`. Consulte a [documentação de configuração]({{< ref "configuration" >}}) para mais detalhes, e a página inicial para uma demonstração ao vivo.
