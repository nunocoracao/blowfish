---
title: "Alojamento e implementação"
weight: 14
draft: false
description: "Aprenda como implementar um site Blowfish."
slug: "hosting-deployment"
tags: ["documentação", "alojamento", "implementação", "github", "netlify", "render"]
series: ["Documentação"]
series_order: 14
---

Existem muitas formas de implementar o seu website Hugo construído com Blowfish. O tema é concebido para ser flexível em quase qualquer cenário de implementação.

O Blowfish utiliza URLs relativos em todo o tema. Isto permite que os sites sejam facilmente implementados em subpastas e hosts como GitHub Pages. Normalmente não é necessária nenhuma configuração especial desde que o parâmetro `baseURL` tenha sido configurado no ficheiro `hugo.toml`.

A documentação oficial do Hugo [Alojamento e Implementação](https://gohugo.io/hosting-and-deployment/) é o melhor local para aprender como implementar o seu site. As secções abaixo contêm alguns detalhes de configuração específicos do tema que podem ajudá-lo a implementar sem problemas com certos fornecedores.

**Escolha o seu fornecedor:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [Alojamento partilhado, VPS ou servidor web privado](#alojamento-partilhado-vps-ou-servidor-web-privado)

---

## GitHub Pages

O GitHub permite alojamento no [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) utilizando Actions. Para ativar esta funcionalidade, ative o Pages no seu repositório e crie um novo workflow de Actions para construir e implementar o seu site.

O ficheiro precisa de estar no formato YAML, colocado dentro do diretório `.github/workflows/` do seu repositório GitHub e nomeado com extensão `.yml`.

{{< alert >}}
**Importante:** Certifique-se de definir o nome correto da branch em `branches` e no parâmetro `if` da etapa de implementação para a branch de origem utilizada no seu projeto.
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

Envie o ficheiro de configuração para o GitHub e a action deve ser executada automaticamente. Pode falhar na primeira vez e precisará de visitar a secção **Settings > Pages** do seu repositório GitHub para verificar se a origem está correta. Deve estar configurada para utilizar a branch `gh-pages`.

{{< screenshot src="github-pages-source.jpg" alt="Captura de ecrã da origem do GitHub Pages" >}}

Assim que as definições estejam configuradas, execute novamente a action e o site deve ser construído e implementado corretamente. Pode consultar os logs das actions para verificar se tudo foi implementado com sucesso.

## Netlify

Para implementar no [Netlify](https://www.netlify.com), crie um novo site de implementação contínua e vincule-o ao seu código-fonte. As definições de build podem ser deixadas em branco na interface do Netlify. Só precisará de configurar o domínio que utilizará.

{{< screenshot src="netlify-build-settings.jpg" alt="Captura de ecrã das definições de build do Netlify" >}}

Em seguida, na raiz do repositório do seu site, crie um ficheiro `netlify.toml`:

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

Esta configuração assume que está a implementar o Blowfish como um módulo Hugo. Se instalou o tema utilizando outro método, altere o comando de build simplesmente para `hugo --gc --minify -b $URL`.

Quando enviar o ficheiro de configuração para o seu repositório, o Netlify deve implementar automaticamente o seu site. Pode verificar os logs de implementação na interface do Netlify para quaisquer erros.

## Render

Implementar no [Render](https://render.com) é muito simples e toda a configuração é feita através da interface do Render.

Crie um novo **Static Site** e vincule-o ao repositório de código do seu projeto. Em seguida, simplesmente configure o comando de build como `hugo --gc --minify` e o diretório de publicação como `public`.

{{< screenshot src="render-settings.jpg" alt="Captura de ecrã das definições do Render" >}}

O site será construído e implementado automaticamente sempre que enviar uma alteração para o seu repositório.

## Cloudflare Pages

A Cloudflare oferece o serviço [Pages](https://pages.cloudflare.com/) que pode alojar blogues Hugo. Constrói o site a partir de um repositório git e depois aloja-o na CDN da Cloudflare. Siga o [guia de implementação Hugo](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site) deles para começar.

A funcionalidade Rocket Loader™ oferecida pela Cloudflare tenta acelerar a renderização de páginas web com JavaScript, mas quebra o seletor de aparência no tema. Também pode causar um flash irritante de ecrã claro/escuro ao navegar no seu site devido aos scripts a carregar na ordem errada.

Este problema pode ser corrigido desativando-o:

- Vá ao [painel da Cloudflare](https://dash.cloudflare.com)
- Clique no nome do seu domínio na lista
- Clique em _Optimization_ na secção _Speed_
- Desloque-se até _Rocket Loader™_ e desative-o

Sites Hugo construídos com Blowfish ainda carregam muito rapidamente, mesmo com esta funcionalidade desativada.

## Alojamento partilhado, VPS ou servidor web privado

Utilizar alojamento web tradicional, ou implementar no seu próprio servidor web, é tão simples como construir o seu site Hugo e transferir os ficheiros para o seu host.

Certifique-se de que o parâmetro `baseURL` em `hugo.toml` está definido para o URL completo para a raiz do seu website (incluindo quaisquer subdomínios ou subpastas).

Em seguida, construa o seu site utilizando `hugo` e copie o conteúdo do diretório de saída para a raiz do seu servidor web e estará pronto. Por predefinição, o diretório de saída chama-se `public`.

_Se precisa de um fornecedor de alojamento, confira [Vultr](https://www.vultr.com/?ref=8957394-8H) ou [DigitalOcean](https://m.do.co/c/36841235e565). Registar-se utilizando estes links de afiliado dar-lhe-á até $100 em crédito grátis para que possa experimentar o serviço._
