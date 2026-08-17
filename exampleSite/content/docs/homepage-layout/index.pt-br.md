---
title: "Layout da Página Inicial"
featureimage: "images/v3/homepage-layout.png"
weight: 5
draft: false
description: "Configurando o layout da página inicial no tema Blowfish."
slug: "homepage-layout"
tags: ["página inicial", "layouts", "documentação"]
series: ["Documentação"]
series_order: 5
---

O Blowfish fornece layouts flexíveis de página inicial com configurações para ajustar cada design. Alternativamente, você também pode fornecer seu próprio modelo e ter controle total sobre o conteúdo da página inicial.

O layout da página inicial é controlado pela configuração `homepage.layout` no arquivo de configuração `params.toml`. Além disso, todos os layouts têm a opção de incluir uma lista de [artigos recentes](#artigos-recentes).

## Layout Perfil

O layout padrão é o layout de perfil, que é ótimo para sites pessoais e blogs. Ele coloca os detalhes do autor em primeiro plano, fornecendo uma imagem e links para perfis sociais.

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

As informações do autor são fornecidas no arquivo de configuração de idiomas. Consulte as seções [Primeiros Passos]({{< ref "getting-started" >}}) e [Configuração de Idioma]({{< ref "configuration##language-and-i18n" >}}) para detalhes dos parâmetros.

Além disso, qualquer conteúdo Markdown fornecido no conteúdo da página inicial será colocado abaixo do perfil do autor. Isso permite flexibilidade extra para exibir uma biografia ou outro conteúdo personalizado usando shortcodes.

Para habilitar o layout Perfil, defina `homepage.layout = "profile"` no arquivo de configuração `params.toml`.

## Layout Página

O layout de página é simplesmente uma página de conteúdo normal que exibe seu conteúdo Markdown. É ótimo para sites estáticos e fornece muita flexibilidade.

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

Para habilitar o layout Página, defina `homepage.layout = "page"` no arquivo de configuração `params.toml`.

## Layout Hero

O layout hero combina ideias dos layouts de perfil e cartão. Este não apenas exibe informações sobre o autor do site, mas também carrega seu markdown abaixo dele.

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

Para habilitar o layout Hero, defina `homepage.layout = "hero"` e `homepage.homepageImage` no arquivo de configuração `params.toml`.

## Layout Fundo

O layout de fundo é uma versão mais suave do layout hero. Assim como no layout Hero, este também exibe informações sobre o autor do site e carrega seu markdown abaixo dele.

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

Para habilitar o layout Fundo, defina `homepage.layout = "background"` e `homepage.homepageImage` no arquivo de configuração `params.toml`.

## Layout Cartão

O layout de cartão é uma extensão do layout de página. Ele fornece o mesmo nível de flexibilidade, também exibindo seu conteúdo markdown e adiciona uma imagem de cartão para exibir conteúdo visual.

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

Para habilitar o layout Cartão, defina `homepage.layout = "card"` e `homepage.homepageImage` no arquivo de configuração `params.toml`.

## Layout Landing

O layout Landing foi projetado para sites de produtos, hubs de documentação e sites pessoais que precisam de uma abertura mais marcante. Ele começa com um hero espaçoso e editorial — legenda superior (eyebrow), título de impacto, parágrafo de destaque e botões de call-to-action — opcionalmente apoiado por uma imagem hero de largura total que se dissolve no plano de fundo global, com uma animação de entrada escalonada que é desativada automaticamente para visitantes que preferem movimento reduzido. Tudo abaixo do hero é Markdown padrão e shortcodes do Blowfish, então a página inteira permanece portátil e fácil de manter.

{{< figure src="img/home-landing.png" class="thumbnailshadow" >}}

Para habilitar o layout Landing, defina `homepage.layout = "landing"` no arquivo de configuração `params.toml`.

O hero é controlado pelo front matter de `content/_index.md`. Todos os campos são opcionais — qualquer campo que você omitir simplesmente não é renderizado:

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
| `heroCaption` | Pequena legenda em maiúsculas acima do título. O padrão é `params.Author.name`. |
| `heroLead` | Parágrafo de destaque renderizado abaixo do título. Suporta Markdown. |
| `heroButtons` | Lista de botões de call-to-action (`label`, `url` e `style` opcional). Usa o mesmo estilo do [shortcode `cta`]({{< ref "shortcodes#cta-button" >}}). |

O corpo Markdown de `_index.md` é renderizado abaixo do hero, então estatísticas, grades de recursos, passos e quaisquer outros shortcodes podem construir o restante da página. O layout Landing combina bem com a opção `backgroundCanvas` para todo o site, descrita na [documentação de configuração]({{< ref "configuration" >}}).


## Layout personalizado

Se os layouts de página inicial integrados não forem suficientes para suas necessidades, você tem a opção de fornecer seu próprio layout personalizado. Isso permite que você tenha controle total sobre o conteúdo da página e essencialmente lhe dá uma tela em branco para trabalhar.

Para habilitar o layout personalizado, defina `homepage.layout = "custom"` no arquivo de configuração `params.toml`.

Com o valor de configuração definido, crie um novo arquivo `custom.html` e coloque-o em `layouts/partials/home/custom.html`. Agora, o que estiver no arquivo `custom.html` será colocado na área de conteúdo da página inicial do site. Você pode usar qualquer HTML, Tailwind ou funções de template Hugo que desejar para definir seu layout.

Para incluir [artigos recentes](#artigos-recentes) no layout personalizado, use o partial `recent-articles/main.html`.

O site de exemplo incluído usa o layout Landing integrado e shortcodes de conteúdo padrão. Visite o [repositório GitHub](https://github.com/nunocoracao/blowfish/tree/main/exampleSite) para ver como ele está configurado.

## Artigos recentes

Todos os layouts de página inicial têm a opção de exibir artigos recentes abaixo do conteúdo principal da página. Para habilitar isso, basta definir a configuração `homepage.showRecent` como `true` no arquivo de configuração `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Os artigos listados nesta seção são derivados da configuração `mainSections` que permite quaisquer tipos de conteúdo que você esteja usando em seu site. Por exemplo, se você tiver seções de conteúdo para _posts_ e _projects_, você poderia definir esta configuração como `["posts", "projects"]` e todos os artigos nessas duas seções seriam usados para preencher a lista de recentes. O tema espera que esta configuração seja um array, então se você usar apenas uma seção para todo o seu conteúdo, você deve definir assim: `["blog"]`.

## Miniaturas

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se você está familiarizado com a estrutura de artigos do Hugo, basta colocar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá usar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se você quiser ver um exemplo.

## Galeria de cartões

O Blowfish também suporta exibir as listas padrão de artigos como galerias de cartões. Você pode configurar isso tanto para a seção de recentes na página inicial quanto para listas de artigos em todo o seu site. Para a página inicial, você pode usar `homepage.cardView` e `homepage.cardViewScreenWidth`; e para listas, use `list.cardView` e `list.cardViewScreenWidth`. Consulte a [documentação de configuração]({{< ref "configuration" >}}) para mais detalhes, e a página inicial para uma demonstração ao vivo.
