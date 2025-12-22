---
title: "Layout da Página Inicial"
weight: 5
draft: false
description: "Configurando o layout da página inicial no tema Blowfish."
slug: "homepage-layout"
tags: ["página inicial", "layouts", "documentação"]
series: ["Documentação"]
series_order: 5
---

O Blowfish fornece um layout de página inicial totalmente flexível. Existem dois modelos principais para escolher com configurações adicionais para ajustar o design. Alternativamente, você também pode fornecer seu próprio modelo e ter controle total sobre o conteúdo da página inicial.

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


## Layout personalizado

Se os layouts de página inicial integrados não forem suficientes para suas necessidades, você tem a opção de fornecer seu próprio layout personalizado. Isso permite que você tenha controle total sobre o conteúdo da página e essencialmente lhe dá uma tela em branco para trabalhar.

Para habilitar o layout personalizado, defina `homepage.layout = "custom"` no arquivo de configuração `params.toml`.

Com o valor de configuração definido, crie um novo arquivo `custom.html` e coloque-o em `layouts/partials/home/custom.html`. Agora, o que estiver no arquivo `custom.html` será colocado na área de conteúdo da página inicial do site. Você pode usar qualquer HTML, Tailwind ou funções de template Hugo que desejar para definir seu layout.

Para incluir [artigos recentes](#artigos-recentes) no layout personalizado, use o partial `recent-articles/main.html`.

Como exemplo, a [página inicial]({{< ref "/" >}}) deste site usa o layout personalizado para permitir alternar entre os layouts de perfil e página. Visite o [repositório GitHub](https://github.com/nunocoracao/blowfish/blob/main/exampleSite/layouts/partials/home/custom.html) para ver como funciona.

## Artigos recentes

Todos os layouts de página inicial têm a opção de exibir artigos recentes abaixo do conteúdo principal da página. Para habilitar isso, basta definir a configuração `homepage.showRecent` como `true` no arquivo de configuração `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Os artigos listados nesta seção são derivados da configuração `mainSections` que permite quaisquer tipos de conteúdo que você esteja usando em seu site. Por exemplo, se você tiver seções de conteúdo para _posts_ e _projects_, você poderia definir esta configuração como `["posts", "projects"]` e todos os artigos nessas duas seções seriam usados para preencher a lista de recentes. O tema espera que esta configuração seja um array, então se você usar apenas uma seção para todo o seu conteúdo, você deve definir assim: `["blog"]`.

## Miniaturas

O Blowfish foi construído para facilitar a adição de suporte visual aos seus artigos. Se você está familiarizado com a estrutura de artigos do Hugo, basta colocar um arquivo de imagem (quase todos os formatos são suportados, mas recomendamos `.png` ou `.jpg`) que comece com `feature*` dentro da pasta do seu artigo. E é isso, o Blowfish poderá usar a imagem tanto como miniatura dentro do seu site quanto para cartões <a target="_blank" href="https://oembed.com/">oEmbed</a> em plataformas sociais.

[Aqui]({{< ref "thumbnails" >}}) há um guia com mais informações e um [exemplo]({{< ref "thumbnail_sample" >}}) se você quiser ver um exemplo.

## Galeria de cartões

O Blowfish também suporta exibir as listas padrão de artigos como galerias de cartões. Você pode configurar isso tanto para a seção de recentes na página inicial quanto para listas de artigos em todo o seu site. Para a página inicial, você pode usar `homepage.cardView` e `homepage.cardViewScreenWidth`; e para listas, use `list.cardView` e `list.cardViewScreenWidth`. Consulte a [documentação de configuração]({{< ref "configuration" >}}) para mais detalhes, e a página inicial para uma demonstração ao vivo.
