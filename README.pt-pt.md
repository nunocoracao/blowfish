[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | Português (PT) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)
# Blowfish
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.162.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.162.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfish foi desenhado para ser um tema poderoso e leve para [Hugo](https://gohugo.io). É construído com Tailwind CSS com um design limpo e minimalista que prioriza o seu conteúdo.

![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)


🌏 [Site de demonstração](https://blowfish.page/)
📑 [Documentação do tema](https://blowfish.page/docs/)
🐛 [Relatórios de erros & problemas](https://github.com/nunocoracao/blowfish/issues)
💡 [Questões & pedidos de funcionalidades](https://github.com/nunocoracao/blowfish/discussions)


<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Funcionalidades

- Layout totalmente responsivo construído com Tailwind CSS 4
- Múltiplos esquemas de cores (ou personalize completamente o seu próprio)
- Modo escuro (forçado ligado/desligado ou alternância automática com seletor do utilizador)
- Múltiplos layouts de página inicial, incluindo uma landing page de estilo produto com imagem hero, estatísticas e grelhas de funcionalidades
- Cabeçalho flutuante com efeito de vidro e atalho de pesquisa ⌘K / Ctrl+K
- Tela de fundo global com secções hero que se dissolvem nela ao fazer scroll
- Barra de progresso de leitura para artigos
- Seletor interativo de layouts da página inicial para pré-visualizações em direto
- Skill de agente para que agentes de programação com IA (como o Claude Code) instalem e configurem o tema por si
- Páginas adequadas para impressão com estilos de impressão dedicados
- Configuração altamente personalizável
- Integração com Firebase para suportar dados dinâmicos
- Contagem de visualizações & mecanismo de gostos
- Artigos relacionados
- Múltiplos autores
- Séries de artigos
- Ordenação de artigos baseada em data e peso
- Modo Zen para leitura de artigos
- Flexível com qualquer tipo de conteúdo, taxonomias e menus
- Menus de cabeçalho e rodapé
- Menus aninhados & menu de sub-navegação
- Índice de conteúdos com scroll
- Suporte para conteúdo multilingue incluindo suporte para línguas RTL
- Capacidade de criar links para publicações em sites de terceiros
- Mais de 40 shortcodes incluindo Gallery, Timeline, GitHub cards, Carousels, Stats, grelhas de funcionalidades, Steps e botões CTA
- Sintaxe GitHub Alerts, 15 tipos, suporte para elementos expansíveis
- Integração Buymeacoffee
- Pesquisa no site do lado do cliente alimentada por Fuse.js
- Diagramas e visualizações usando Mermaid
- Gráficos usando Chart.js
- Integração TypeIt
- Embeds de Youtube com melhorias de desempenho
- Notação matemática usando KaTeX
- Ícones SVG do FontAwesome 6
- Redimensionamento automático de imagens usando Hugo Pipes
- Âncoras de cabeçalhos, Índices de Conteúdos, Cópia de código, Botões, Badges e mais
- Suporte HTML e Emoji em artigos 🎉
- Otimizado para SEO com links para partilha em redes sociais
- Suporte para Fathom Analytics e Google Analytics
- Feeds RSS, Favicons e suporte para comentários
- Personalização avançada usando definições simples de cores e estilos do Tailwind
- Otimizado para desempenho e acessibilidade com pontuações perfeitas no Lighthouse
- Totalmente documentado com atualizações regulares

---

![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

## Documentação

Blowfish tem [documentação extensa](https://blowfish.page/docs/) que cobre todos os aspetos do tema. Certifique-se de [ler a documentação](https://blowfish.page/docs/) para saber mais sobre como usar o tema e as suas funcionalidades.

---

## Instalação

Blowfish suporta vários métodos de instalação - como um submódulo git, um Módulo Hugo, ou como uma instalação completamente manual.

Instruções detalhadas para cada método podem ser encontradas na documentação de [Instalação](https://blowfish.page/docs/installation). Deve consultar a documentação para a experiência de configuração mais simples. Abaixo está um guia de início rápido usando submódulos se estiver a usar git, ou módulos Hugo se já está confiante na instalação de temas Hugo.

### Início rápido com um agente de IA

Blowfish inclui um [agent skill](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) que ensina agentes de programação com IA — como o Claude Code — a instalar, configurar e construir sites com o tema. Instale-o a partir do marketplace de plugins do Blowfish no Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Ou simplesmente copie a pasta do skill para o repositório do seu site em `.claude/skills/blowfish/` — os agentes detetam skills de projeto automaticamente. Depois peça ao seu agente para configurar o Blowfish por si.

### Início rápido usando Blowfish Tools

> **Nota:** Certifique-se de que tem **Node.js**, **Git** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.

Blowfish Tools é uma ferramenta CLI que o ajuda a começar com Blowfish. Ela irá criar um novo projeto Hugo, instalar o tema e configurar os ficheiros de configuração do tema para si. Por favor [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).

Instale a ferramenta CLI globalmente usando npm (ou outro gestor de pacotes):
```shell
npm i -g blowfish-tools
```

Depois execute o comando `blowfish-tools` para iniciar uma execução interativa que irá guiá-lo através da criação e casos de uso de configuração.
```shell
blowfish-tools
```

Também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma só vez. Consulte a ajuda da CLI para mais informações.
```shell
blowfish-tools new mynewsite
```

### Início rápido usando submódulos git

> **Nota:** Certifique-se de que tem **Git** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.

1. A partir do diretório do seu projeto, inicialize o git:

   ```shell
   git init
   ```

2. Configure Blowfish como um submódulo git:

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. Na pasta raiz do seu site, elimine o ficheiro `hugo.toml` que foi gerado pelo Hugo. Copie os ficheiros de configuração `*.toml` do tema para a sua pasta `config/_default/`.

   Irá encontrar estes ficheiros de configuração do tema no diretório de cache do Hugo, ou [descarregue uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.

4. Siga as instruções de [Introdução](https://blowfish.page/docs/getting-started/) para configurar o seu site.

### Início rápido usando Hugo

> **Nota:** Certifique-se de que tem **Go** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.

1. A partir do diretório do seu projeto, inicialize os Módulos Hugo:

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Crie `config/_default/module.toml` e adicione o seguinte:

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v3"
   ```

3. Inicie o seu servidor usando `hugo server` e o tema será descarregado automaticamente.

4. Na pasta raiz do seu site, elimine o ficheiro `hugo.toml` que foi gerado pelo Hugo. Copie os ficheiros de configuração `*.toml` do tema para a sua pasta `config/_default/`.

   > **Nota:** Não sobrescreva o ficheiro `module.toml` que criou acima!

   Irá encontrar estes ficheiros de configuração do tema no diretório de cache do Hugo, ou [descarregue uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.

5. Siga as instruções de [Introdução](https://blowfish.page/docs/getting-started/) para configurar o seu site.

### Instalar atualizações do tema

À medida que novas versões são publicadas, pode atualizar o tema usando Hugo. Simplesmente execute `hugo mod get -u` a partir do diretório do seu projeto e o tema será automaticamente atualizado para a versão mais recente.

[Instruções detalhadas de atualização](https://blowfish.page/docs/installation/#installing-updates) estão disponíveis na documentação.

### Atualização da v2 para a v3

Blowfish v3 é totalmente retrocompatível: todas as novas funcionalidades são opcionais e nenhuma opção de configuração ou template foi removida. As instalações por submódulo git e manuais atualizam-se como habitualmente, sem alterações; os utilizadores de módulos Hugo apenas precisam de alterar o caminho de importação em `config/_default/module.toml` de `github.com/nunocoracao/blowfish/v2` para `github.com/nunocoracao/blowfish/v3` e executar `hugo mod get -u`. Consulte as [instruções de atualização](https://blowfish.page/docs/installation/#upgrading-from-v2-to-v3) para mais detalhes.

---

## Contribuir

Espera-se que Blowfish evolua ao longo do tempo. Pretendo continuar a adicionar funcionalidades e fazer alterações conforme necessário.

Sinta-se à vontade para entrar em contacto com quaisquer problemas ou sugestões para novas funcionalidades que gostaria de ver.

- 🐛 **Relatórios de erros & problemas:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)
- 💡 **Ideias para novas funcionalidades:** Abra uma discussão em [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)
- 🙋‍♀️ **Questões gerais:** Dirija-se a [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)

Se conseguir corrigir um erro ou implementar uma nova funcionalidade, aceito PRs para este propósito. Saiba mais nas [diretrizes de contribuição](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).

---

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
