---
title: "Bem-vindo ao Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Crie um site Hugo rápido e expressivo com layouts flexíveis, ferramentas de conteúdo rico e um fluxo de trabalho pronto para agentes."
lastmod: 2026-08-30
tags: ["novo", "documentação"]
series: ["Documentação"]
series_order: 1
---

{{< lead >}}
O Blowfish 3 é um tema Hugo moderno para blogs, documentação, portfólios e sites que não cabem em um modelo rígido.
{{< /lead >}}

{{< alert >}}
Crie um novo site com `npx blowfish-tools new <site>` e siga o [guia de instalação]({{< ref "docs/installation" >}}). Sites Blowfish existentes podem migrar para a v3 sem mudanças incompatíveis na configuração.
{{< /alert >}}

## Crie o site que você imagina

O Blowfish oferece uma base sólida sem determinar o resultado. Escolha layouts de página inicial de perfil, landing, hero, cartões ou fundo. Defina cores, tipografia, navegação, modo escuro e apresentação de artigos na configuração do site. Use front matter quando uma página precisar ser diferente.

Seu conteúdo continua sendo Hugo portátil: Markdown, page bundles, taxonomias, menus e arquivos de configuração no repositório. Não há editor proprietário ou dependência de plataforma.

## Publique conteúdo mais rico com menos código

Escreva em Markdown e use os [mais de 40 shortcodes]({{< ref "docs/shortcodes" >}}) quando precisar. Adicione botões, alertas, ícones, abas, galerias, gráficos, diagramas, cards do GitHub, vídeos e exemplos de código sem manter templates pontuais.

O Blowfish também cuida do que está ao redor do conteúdo: imagens de destaque e miniaturas responsivas, busca, ferramentas de leitura, índices, metadados sociais e de SEO, dados estruturados, controles de acessibilidade e analytics, comentários ou visualizações e curtidas com Firebase opcionais.

## Para cada leitor

Crie sites multilíngues com conteúdo traduzido, menus por idioma e traduções de interface incluídas. O Blowfish suporta idiomas RTL e LTR no mesmo projeto, além de alternância de aparência, navegação responsiva e busca acessível por teclado.

Por baixo do capô, o Blowfish usa recursos atuais do Hugo e Tailwind CSS 4, mantendo o modelo de conteúdo e configuração claro e sob seu controle.

## Dê ao seu agente o contexto necessário

O Blowfish inclui uma [skill para agentes](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) para agentes de programação com IA como o Claude Code. Ela ensina onde fica a configuração, como funcionam layouts e front matter, quais shortcodes existem e como criar um site Blowfish sem adivinhações.

Instale-a no Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Você também pode copiar a skill para `.claude/skills/blowfish/` no projeto. O agente poderá ajudar com configuração, estrutura de conteúdo, design de páginas e implementação consciente do tema, enquanto seu site continua no repositório.

## Escolha o próximo passo

- Novo no Blowfish? Comece pela [Instalação]({{< ref "docs/installation" >}}).
- Quer dar forma ao site? Leia [Primeiros passos]({{< ref "docs/getting-started" >}}) e [Configuração]({{< ref "docs/configuration" >}}).
- Quer ver as possibilidades? Explore [Shortcodes]({{< ref "docs/shortcodes" >}}), [Amostras]({{< ref "samples" >}}) e a [Galeria]({{< ref "examples" >}}).
- Vai migrar um site existente? Siga o [guia de atualização para o Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
