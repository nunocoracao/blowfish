---
title: "Hospedagem e implantação"
weight: 14
draft: false
description: "Aprenda como implantar um site Blowfish."
slug: "hosting-deployment"
tags: ["documentação", "hospedagem", "implantação", "github", "netlify", "render"]
series: ["Documentação"]
series_order: 14
---

Existem muitas formas de implantar seu site Hugo construído com Blowfish. O tema é projetado para ser flexível em quase qualquer cenário de implantação.

O Blowfish usa URLs relativas em todo o tema. Isso permite que sites sejam facilmente implantados em subpastas e hosts como GitHub Pages. Normalmente não há configuração especial necessária, desde que o parâmetro `baseURL` tenha sido configurado no arquivo `hugo.toml`.

A documentação oficial do Hugo [Hospedagem e Implantação](https://gohugo.io/hosting-and-deployment/) é o melhor lugar para aprender como implantar seu site. As seções abaixo contêm alguns detalhes de configuração específicos do tema que podem ajudá-lo a implantar sem problemas com certos provedores.

**Escolha seu provedor:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [Hospedagem compartilhada, VPS ou servidor web privado](#hospedagem-compartilhada-vps-ou-servidor-web-privado)

---

## GitHub Pages

O GitHub permite hospedagem no [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) usando Actions. Para habilitar essa funcionalidade, ative o Pages em seu repositório e crie um novo workflow de Actions para construir e implantar seu site.

O arquivo precisa estar no formato YAML, colocado dentro do diretório `.github/workflows/` do seu repositório GitHub e nomeado com extensão `.yml`.

{{< alert >}}
**Importante:** Certifique-se de definir o nome correto da branch em `branches` e no parâmetro `if` da etapa de implantação para a branch de origem usada em seu projeto.
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-24.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

Envie o arquivo de configuração para o GitHub e a action deve ser executada automaticamente. Pode falhar na primeira vez e você precisará visitar a seção **Settings > Pages** do seu repositório GitHub para verificar se a origem está correta. Ela deve estar configurada para usar a branch `gh-pages`.

{{< screenshot src="github-pages-source.jpg" alt="Captura de tela da origem do GitHub Pages" >}}

Uma vez que as configurações estejam definidas, execute novamente a action e o site deve ser construído e implantado corretamente. Você pode consultar os logs das actions para verificar se tudo foi implantado com sucesso.

## Netlify

Para implantar no [Netlify](https://www.netlify.com), crie um novo site de implantação contínua e vincule-o ao seu código-fonte. As configurações de build podem ser deixadas em branco na interface do Netlify. Você só precisará configurar o domínio que usará.

{{< screenshot src="netlify-build-settings.jpg" alt="Captura de tela das configurações de build do Netlify" >}}

Em seguida, na raiz do repositório do seu site, crie um arquivo `netlify.toml`:

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # Definir para o fuso horário preferido

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

Esta configuração assume que você está implantando o Blowfish como um módulo Hugo. Se você instalou o tema usando outro método, altere o comando de build simplesmente para `hugo --gc --minify -b $URL`.

Quando você enviar o arquivo de configuração para seu repositório, o Netlify deve implantar automaticamente seu site. Você pode verificar os logs de implantação na interface do Netlify para quaisquer erros.

## Render

Implantar no [Render](https://render.com) é muito simples e toda a configuração é feita através da interface do Render.

Crie um novo **Static Site** e vincule-o ao repositório de código do seu projeto. Em seguida, simplesmente configure o comando de build como `hugo --gc --minify` e o diretório de publicação como `public`.

{{< screenshot src="render-settings.jpg" alt="Captura de tela das configurações do Render" >}}

O site será construído e implantado automaticamente sempre que você enviar uma alteração para seu repositório.

## Cloudflare Pages

A Cloudflare oferece o serviço [Pages](https://pages.cloudflare.com/) que pode hospedar blogs Hugo. Ele constrói o site a partir de um repositório git e o hospeda no CDN da Cloudflare. Siga o [guia de implantação Hugo](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site) deles para começar.

O recurso Rocket Loader™ oferecido pela Cloudflare tenta acelerar a renderização de páginas web com JavaScript, mas ele quebra o seletor de aparência no tema. Também pode causar um flash irritante de tela clara/escura ao navegar em seu site devido aos scripts carregando na ordem errada.

Este problema pode ser corrigido desativando-o:

- Vá para o [painel da Cloudflare](https://dash.cloudflare.com)
- Clique no nome do seu domínio na lista
- Clique em _Optimization_ na seção _Speed_
- Role até _Rocket Loader™_ e desative-o

Sites Hugo construídos com Blowfish ainda carregam muito rápido, mesmo com este recurso desativado.

## Hospedagem compartilhada, VPS ou servidor web privado

Usar hospedagem web tradicional, ou implantar em seu próprio servidor web, é tão simples quanto construir seu site Hugo e transferir os arquivos para seu host.

Certifique-se de que o parâmetro `baseURL` em `hugo.toml` esteja definido para a URL completa para a raiz do seu site (incluindo quaisquer subdomínios ou subpastas).

Em seguida, construa seu site usando `hugo` e copie o conteúdo do diretório de saída para a raiz do seu servidor web e você estará pronto. Por padrão, o diretório de saída é chamado `public`.

_Se você precisa de um provedor de hospedagem, confira [Vultr](https://www.vultr.com/?ref=8957394-8H) ou [DigitalOcean](https://m.do.co/c/36841235e565). Cadastrar-se usando esses links de afiliado lhe dará até $100 em crédito grátis para que você possa experimentar o serviço._
