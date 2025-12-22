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

O Blowfish fornece suporte integrado para Fathom Analytics, Google Analytics e Umami Analytics. O Fathom é uma alternativa paga ao Google Analytics que respeita a privacidade do usuário.

### Fathom Analytics

Para habilitar o suporte ao Fathom Analytics, simplesmente forneça seu código de site do Fathom no arquivo `config/_default/params.toml`. Se você também usa o recurso de domínio personalizado do Fathom e gostaria de servir o script deles do seu domínio, você também pode fornecer adicionalmente o valor de configuração `domain`. Se você não fornecer um valor `domain`, o script será carregado diretamente do DNS do Fathom.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

O suporte ao Google Analytics é fornecido através do partial interno do Hugo. Simplesmente forneça a chave `googleAnalytics` no arquivo `config/_default/hugo.toml` e o script será adicionado automaticamente.

Tanto a versão 3 (analytics.js) quanto a versão 4 (gtag.js) são suportadas, com base no valor de configuração fornecido:

```toml
# config/_default/hugo.toml

# versão 3
googleAnalytics = "UA-PROPERTY_ID"
# versão 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Para habilitar o suporte ao Umami Analytics, simplesmente forneça seu [código de rastreamento do Umami](https://umami.is/docs/collect-data) no arquivo `config/_default/params.toml`.
Se você também usa o recurso de domínio personalizado do Umami e gostaria de servir o script deles do seu domínio, você também pode fornecer adicionalmente o valor de configuração `domain`. Se você não fornecer um valor `domain`, o script será carregado diretamente do DNS do Umami (analytics.umami.is).
Se você quiser que o rastreador execute apenas em domínios específicos, você pode fornecer o valor de configuração `dataDomains`. Se você não fornecer um valor `dataDomains`, o script será executado em qualquer site onde `domain` e `websiteid` correspondam. Se a variável de ambiente `TRACKER_SCRIPT_NAME` estiver configurada, você pode especificar um nome de script personalizado `scriptName`. Se não estiver configurada, comente-a ou use o padrão `script.js`.

{{< alert >}}
**Nota:** Se você habilitar o Umami Analytics, o Blowfish suportará [Umami Track Event](https://umami.is/docs/track-events) automaticamente. Se você não quiser suportar Track Event, o parâmetro `enableTrackEvent` deve ser definido como `false`.
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

Para habilitar o suporte ao Seline Analytics, simplesmente forneça seu [token do Seline](https://seline.so/docs/install-seline) no arquivo `config/_default/params.toml`.

{{< alert >}}
**Nota:** Se você habilitar o Seline Analytics, o Blowfish suportará [Seline Track Event](https://seline.so/docs/custom-events) automaticamente. Se você não quiser suportar Track Event, o parâmetro `enableTrackEvent` deve ser definido como `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Provedores de analytics personalizados

Se você deseja usar um provedor de analytics diferente em seu site, você também pode sobrescrever o partial de analytics e fornecer seu próprio script. Simplesmente crie o arquivo `layouts/partials/extend-head.html` em seu projeto e ele será automaticamente incluído no `<head>` do site.

## Comentários

Para adicionar comentários aos seus artigos, o Blowfish inclui suporte para um partial de comentários que é incluído na base de cada página de artigo. Simplesmente forneça um `layouts/partials/comments.html` contendo o código necessário para exibir seus comentários escolhidos.

Você pode usar o template Disqus integrado do Hugo ou fornecer seu próprio código personalizado. Consulte a [documentação do Hugo](https://gohugo.io/content-management/comments/) para mais informações.

Uma vez que o partial foi fornecido, o controle mais fino sobre onde os comentários são exibidos é gerenciado usando o parâmetro `showComments`. Este valor pode ser definido no nível do tema no [arquivo de configuração]({{< ref "configuration#theme-parameters" >}}) `params.toml`, ou por artigo incluindo-o no [front matter]({{< ref "front-matter" >}}). O parâmetro é `false` por padrão, então deve ser definido como `true` em um desses locais para que os comentários sejam exibidos.

## Favicons

O Blowfish fornece um conjunto padrão de favicons em branco para começar, mas você pode fornecer seus próprios recursos para sobrescrevê-los. A maneira mais fácil de obter novos recursos de favicon é gerá-los usando um provedor de terceiros como [favicon.io](https://favicon.io).

Os recursos de ícones devem ser colocados diretamente na pasta `static/` do seu site e nomeados conforme a lista abaixo. Se você usar o [favicon.io](https://favicon.io), esses serão os nomes de arquivo que serão gerados automaticamente para você, mas você pode fornecer seus próprios recursos se desejar.

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

Alternativamente, você também pode sobrescrever completamente o comportamento padrão de favicon e fornecer suas próprias tags HTML de favicon e recursos. Simplesmente forneça um arquivo `layouts/partials/favicons.html` em seu projeto e ele será injetado no `<head>` do site no lugar dos recursos padrão.

## Icon

Similar ao [shortcode icon]({{< ref "shortcodes#icon" >}}), você pode incluir ícones em seus próprios templates e partials usando o partial `icon.html` do Blowfish. O partial recebe um parâmetro que é o nome do ícone a ser incluído.

**Exemplo:**

```go
  {{ partial "icon.html" "github" }}
```

Os ícones são preenchidos usando pipelines do Hugo, o que os torna muito flexíveis. O Blowfish inclui vários ícones integrados para redes sociais, links e outros propósitos. Confira a página de [exemplos de ícones]({{< ref "samples/icons" >}}) para uma lista completa dos ícones suportados.

Ícones personalizados podem ser adicionados fornecendo seus próprios recursos de ícones no diretório `assets/icons/` do seu projeto. O ícone pode então ser referenciado no partial usando o nome do arquivo SVG sem a extensão `.svg`.

Os ícones também podem ser usados no conteúdo de artigos chamando o [shortcode icon]({{< ref "shortcodes#icon" >}}).

## Extensões

O Blowfish também fornece vários partials de extensão que permitem expandir a funcionalidade base.

### Link de artigo

Se você deseja inserir código adicional após links de artigos, crie um arquivo `layouts/partials/extend-article-link.html`. Isso é especialmente poderoso quando combinado com o shortcode [`badge`]({{< ref "shortcodes#badge" >}}) que pode ser usado para destacar metadados de certos artigos.

### Head e Footer

O tema permite inserir código adicional diretamente nas seções `<head>` e `<footer>` do template. Estes podem ser úteis para fornecer scripts ou outra lógica que não faz parte do tema.

Simplesmente crie `layouts/partials/extend-head.html` ou `layouts/partials/extend-footer.html` e estes serão automaticamente incluídos na construção do seu site. Ambos os partials são injetados como os últimos itens em `<head>` e `<footer>`, para que possam ser usados para sobrescrever os padrões do tema.

### Extensão Head sem cache

O `extend-head.html` é [armazenado em cache](https://gohugo.io/functions/partials/includecached/), e o Blowfish também suporta uma extensão head sem cache para incluir **condicionalmente** scripts ou metadados com base em propriedades no nível da página. Para usar esse recurso, crie um arquivo `layouts/partials/extend-head-uncached.html` em seu projeto. Este arquivo será incluído na tag HTML `<head>`.

Isso é útil quando você precisa incluir elementos dinâmicos—como scripts ou metadados—com base em propriedades como shortcodes, flags de front matter ou outros dados específicos da página que não devem ser armazenados em cache entre builds.

Por exemplo, para carregar dinamicamente um arquivo JavaScript de CDN com base na aparição de um shortcode, você pode usar o método [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) dentro de `extend-head-uncached.html`.
