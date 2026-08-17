[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | Português (BR) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)
# Blowfish
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.162.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.162.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish foi projetado para ser um tema poderoso e leve para [Hugo](https://gohugo.io). É construído usando Tailwind CSS com um design limpo e minimalista que prioriza o seu conteúdo.

![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)


🌏 [Site de demonstração](https://blowfish.page/)
📑 [Documentação do tema](https://blowfish.page/docs/)
💎 [Loja de produtos](http://tee.pub/lic/qwSlWVBL5zc)
🐛 [Relatórios de bugs e problemas](https://github.com/nunocoracao/blowfish/issues)
💡 [Perguntas e solicitações de recursos](https://github.com/nunocoracao/blowfish/discussions)



<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>



## Recursos

- Layout totalmente responsivo construído com Tailwind CSS 3.0
- Múltiplos esquemas de cores (ou personalize completamente o seu próprio)
- Modo escuro (forçado ligado/desligado ou alternância automática com botão do usuário)
- Configuração altamente personalizável
- Integração com Firebase para suportar dados dinâmicos
- Contagem de visualizações e mecanismo de curtidas
- Artigos relacionados
- Múltiplos layouts de página inicial
- Múltiplos autores
- Séries de artigos
- Ordenação de artigos baseada em data e peso
- Modo zen para leitura de artigos
- Flexível com qualquer tipo de conteúdo, taxonomias e menus
- Menus de cabeçalho e rodapé
- Menus aninhados e menu de sub-navegação
- Índice com rolagem
- Suporte a conteúdo multilíngue incluindo suporte para idiomas RTL
- Capacidade de linkar para posts em sites de terceiros
- Suporte para vários shortcodes como Gallery, Timeline, GitHub cards e Carousels
- Sintaxe de alertas do GitHub, 15 tipos, suporte recolhível
- Integração com Buymeacoffee
- Busca no site do lado do cliente alimentada por Fuse.js
- Diagramas e visualizações usando Mermaid
- Gráficos usando Chart.js
- Integração com TypeIt
- Embeds do Youtube com melhorias de performance
- Notação matemática usando KaTeX
- Ícones SVG do FontAwesome 6
- Redimensionamento automático de imagens usando Hugo Pipes
- Âncoras de cabeçalho, Índices, Cópia de código, Botões, Badges e mais
- Suporte a HTML e Emoji em artigos 🎉
- SEO amigável com links para compartilhamento em redes sociais
- Suporte a Fathom Analytics e Google Analytics
- Suporte a feeds RSS, Favicons e comentários
- Personalização avançada usando definições simples de cores e estilos do Tailwind
- Otimizado para performance e acessibilidade com pontuações perfeitas no Lighthouse
- Totalmente documentado com atualizações regulares

---

![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

## Documentação

Blowfish possui [documentação extensa](https://blowfish.page/docs/) que cobre todos os aspectos do tema. Certifique-se de [ler a documentação](https://blowfish.page/docs/) para saber mais sobre como usar o tema e seus recursos.

---

## Instalação

Blowfish suporta vários métodos de instalação - como submódulo git, Hugo Module, ou como uma instalação completamente manual.

Instruções detalhadas para cada método podem ser encontradas na documentação de [Instalação](https://blowfish.page/docs/installation). Você deve consultar a documentação para a experiência de configuração mais simples. Abaixo está um guia de início rápido usando submódulos se você estiver usando git, ou Hugo modules se você já estiver confiante em instalar temas Hugo.

### Início rápido usando Blowfish Tools

> **Nota:** Certifique-se de ter **Node.js**, **Git** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.

Acabamos de lançar uma nova ferramenta CLI para ajudá-lo a começar com Blowfish. Ela criará um novo projeto Hugo, instalará o tema e configurará os arquivos de configuração do tema para você. Ainda está em beta, então por favor [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).

Instale a ferramenta CLI globalmente usando npm (ou outro gerenciador de pacotes):
```shell
npm i -g blowfish-tools
```

Em seguida, execute o comando `blowfish-tools` para iniciar uma execução interativa que o guiará pelos casos de uso de criação e configuração.
```shell
blowfish-tools
```

Você também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma vez. Verifique a ajuda da CLI para mais informações.
```shell
blowfish-tools new mynewsite
```

### Início rápido usando submódulos git

> **Nota:** Certifique-se de ter **Git** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.

1. Do diretório do seu projeto, inicialize o git:

   ```shell
   git init
   ```

2. Configure Blowfish como um submódulo git:

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. Na pasta raiz do seu site, exclua o arquivo `hugo.toml` que foi gerado pelo Hugo. Copie os arquivos de configuração `*.toml` do tema para sua pasta `config/_default/`.

   Você encontrará esses arquivos de configuração do tema no diretório de cache do Hugo, ou [baixe uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.

4. Siga as instruções de [Primeiros Passos](https://blowfish.page/docs/getting-started/) para configurar seu site.

### Início rápido usando Hugo

> **Nota:** Certifique-se de ter **Go** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.

1. Do diretório do seu projeto, inicialize os Hugo Modules:

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Crie `config/_default/module.toml` e adicione o seguinte:

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v3"
   ```

3. Inicie seu servidor usando `hugo server` e o tema será baixado automaticamente.

4. Na pasta raiz do seu site, exclua o arquivo `hugo.toml` que foi gerado pelo Hugo. Copie os arquivos de configuração `*.toml` do tema para sua pasta `config/_default/`.

   > **Nota:** Não sobrescreva o arquivo `module.toml` que você criou acima!

   Você encontrará esses arquivos de configuração do tema no diretório de cache do Hugo, ou [baixe uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.

5. Siga as instruções de [Primeiros Passos](https://blowfish.page/docs/getting-started/) para configurar seu site.

### Instalando atualizações do tema

À medida que novos lançamentos são publicados, você pode atualizar o tema usando Hugo. Simplesmente execute `hugo mod get -u` do diretório do seu projeto e o tema será atualizado automaticamente para a versão mais recente.

[Instruções detalhadas de atualização](https://blowfish.page/docs/installation/#installing-updates) estão disponíveis na documentação.

---

## Contribuindo

Blowfish deve evoluir ao longo do tempo. Pretendo continuar adicionando recursos e fazendo alterações conforme necessário.

Sinta-se à vontade para entrar em contato com quaisquer problemas ou sugestões de novos recursos que você gostaria de ver.

- 🐛 **Relatórios de bugs e problemas:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)
- 💡 **Ideias para novos recursos:** Abra uma discussão em [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)
- 🙋‍♀️ **Perguntas gerais:** Vá para [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)

Se você for capaz de corrigir um bug ou implementar um novo recurso, dou as boas-vindas a PRs para este propósito. Saiba mais nas [diretrizes de contribuição](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).

---

## Stargazers ao longo do tempo

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
