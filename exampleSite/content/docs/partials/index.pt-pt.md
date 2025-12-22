---
title: "Partials"
weight: 9
draft: false
description: "Todos os partials disponíveis no Blowfish."
slug: "partials"
tags: ["partials", "analytics", "privacidade", "comentários", "favicons", "icon", "documentação"]
series: ["Documentação"]
series_order: 9
---

## Analytics

O Blowfish fornece suporte integrado para Fathom Analytics, Google Analytics e Umami Analytics. O Fathom é uma alternativa paga ao Google Analytics que respeita a privacidade do utilizador.

### Fathom Analytics

Para ativar o suporte ao Fathom Analytics, basta fornecer o seu código de site do Fathom no ficheiro `config/_default/params.toml`. Se também utiliza a funcionalidade de domínio personalizado do Fathom e gostaria de servir o script deles do seu domínio, pode também fornecer adicionalmente o valor de configuração `domain`. Se não fornecer um valor `domain`, o script será carregado diretamente do DNS do Fathom.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

O suporte ao Google Analytics é fornecido através do partial interno do Hugo. Basta fornecer a chave `googleAnalytics` no ficheiro `config/_default/hugo.toml` e o script será adicionado automaticamente.

Tanto a versão 3 (analytics.js) como a versão 4 (gtag.js) são suportadas, com base no valor de configuração fornecido:

```toml
# config/_default/hugo.toml

# versão 3
googleAnalytics = "UA-PROPERTY_ID"
# versão 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Para ativar o suporte ao Umami Analytics, basta fornecer o seu [código de rastreamento do Umami](https://umami.is/docs/collect-data) no ficheiro `config/_default/params.toml`.
Se também utiliza a funcionalidade de domínio personalizado do Umami e gostaria de servir o script deles do seu domínio, pode também fornecer adicionalmente o valor de configuração `domain`. Se não fornecer um valor `domain`, o script será carregado diretamente do DNS do Umami (analytics.umami.is).
Se quiser que o rastreador execute apenas em domínios específicos, pode fornecer o valor de configuração `dataDomains`. Se não fornecer um valor `dataDomains`, o script será executado em qualquer site onde `domain` e `websiteid` correspondam. Se a variável de ambiente `TRACKER_SCRIPT_NAME` estiver configurada, pode especificar um nome de script personalizado `scriptName`. Se não estiver configurada, comente-a ou utilize a predefinição `script.js`.

{{< alert >}}
**Nota:** Se ativar o Umami Analytics, o Blowfish suportará [Umami Track Event](https://umami.is/docs/track-events) automaticamente. Se não quiser suportar Track Event, o parâmetro `enableTrackEvent` deve ser definido como `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

Para ativar o suporte ao Seline Analytics, basta fornecer o seu [token do Seline](https://seline.so/docs/install-seline) no ficheiro `config/_default/params.toml`.

{{< alert >}}
**Nota:** Se ativar o Seline Analytics, o Blowfish suportará [Seline Track Event](https://seline.so/docs/custom-events) automaticamente. Se não quiser suportar Track Event, o parâmetro `enableTrackEvent` deve ser definido como `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Fornecedores de analytics personalizados

Se deseja utilizar um fornecedor de analytics diferente no seu site, pode também substituir o partial de analytics e fornecer o seu próprio script. Basta criar o ficheiro `layouts/partials/extend-head.html` no seu projeto e será automaticamente incluído no `<head>` do site.

## Comentários

Para adicionar comentários aos seus artigos, o Blowfish inclui suporte para um partial de comentários que é incluído na base de cada página de artigo. Basta fornecer um `layouts/partials/comments.html` contendo o código necessário para apresentar os seus comentários escolhidos.

Pode utilizar o template Disqus integrado do Hugo ou fornecer o seu próprio código personalizado. Consulte a [documentação do Hugo](https://gohugo.io/content-management/comments/) para mais informações.

Uma vez que o partial foi fornecido, o controlo mais fino sobre onde os comentários são apresentados é gerido utilizando o parâmetro `showComments`. Este valor pode ser definido ao nível do tema no [ficheiro de configuração]({{< ref "configuration#theme-parameters" >}}) `params.toml`, ou por artigo incluindo-o no [front matter]({{< ref "front-matter" >}}). O parâmetro é `false` por predefinição, pelo que deve ser definido como `true` num destes locais para que os comentários sejam apresentados.

## Favicons

O Blowfish fornece um conjunto predefinido de favicons em branco para começar, mas pode fornecer os seus próprios recursos para substituí-los. A forma mais fácil de obter novos recursos de favicon é gerá-los utilizando um fornecedor de terceiros como [favicon.io](https://favicon.io).

Os recursos de ícones devem ser colocados diretamente na pasta `static/` do seu site e nomeados conforme a lista abaixo. Se utilizar o [favicon.io](https://favicon.io), estes serão os nomes de ficheiro que serão gerados automaticamente para si, mas pode fornecer os seus próprios recursos se desejar.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternativamente, pode também substituir completamente o comportamento predefinido de favicon e fornecer as suas próprias tags HTML de favicon e recursos. Basta fornecer um ficheiro `layouts/partials/favicons.html` no seu projeto e este será injetado no `<head>` do site em vez dos recursos predefinidos.

## Icon

Semelhante ao [shortcode icon]({{< ref "shortcodes#icon" >}}), pode incluir ícones nos seus próprios templates e partials utilizando o partial `icon.html` do Blowfish. O partial recebe um parâmetro que é o nome do ícone a incluir.

**Exemplo:**

```go
  {{ partial "icon.html" "github" }}
```

Os ícones são preenchidos utilizando pipelines do Hugo, o que os torna muito flexíveis. O Blowfish inclui vários ícones integrados para redes sociais, ligações e outros propósitos. Consulte a página de [exemplos de ícones]({{< ref "samples/icons" >}}) para uma lista completa dos ícones suportados.

Ícones personalizados podem ser adicionados fornecendo os seus próprios recursos de ícones no diretório `assets/icons/` do seu projeto. O ícone pode então ser referenciado no partial utilizando o nome do ficheiro SVG sem a extensão `.svg`.

Os ícones também podem ser utilizados no conteúdo de artigos chamando o [shortcode icon]({{< ref "shortcodes#icon" >}}).

## Extensões

O Blowfish também fornece vários partials de extensão que permitem expandir a funcionalidade base.

### Ligação de artigo

Se deseja inserir código adicional após ligações de artigos, crie um ficheiro `layouts/partials/extend-article-link.html`. Isto é especialmente poderoso quando combinado com o shortcode [`badge`]({{< ref "shortcodes#badge" >}}) que pode ser utilizado para destacar metadados de certos artigos.

### Head e Footer

O tema permite inserir código adicional diretamente nas secções `<head>` e `<footer>` do template. Estes podem ser úteis para fornecer scripts ou outra lógica que não faz parte do tema.

Basta criar `layouts/partials/extend-head.html` ou `layouts/partials/extend-footer.html` e estes serão automaticamente incluídos na construção do seu site. Ambos os partials são injetados como os últimos itens em `<head>` e `<footer>`, para que possam ser utilizados para substituir as predefinições do tema.

### Extensão Head sem cache

O `extend-head.html` é [armazenado em cache](https://gohugo.io/functions/partials/includecached/), e o Blowfish também suporta uma extensão head sem cache para incluir **condicionalmente** scripts ou metadados com base em propriedades ao nível da página. Para utilizar esta funcionalidade, crie um ficheiro `layouts/partials/extend-head-uncached.html` no seu projeto. Este ficheiro será incluído na tag HTML `<head>`.

Isto é útil quando precisa de incluir elementos dinâmicos—como scripts ou metadados—com base em propriedades como shortcodes, flags de front matter ou outros dados específicos da página que não devem ser armazenados em cache entre builds.

Por exemplo, para carregar dinamicamente um ficheiro JavaScript de CDN com base na aparição de um shortcode, pode utilizar o método [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) dentro de `extend-head-uncached.html`.
