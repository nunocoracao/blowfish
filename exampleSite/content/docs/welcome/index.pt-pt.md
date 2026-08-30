---
title: "Bem-vindo ao Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Crie um site Hugo rápido e expressivo com layouts flexíveis, ferramentas de conteúdo rico e um fluxo de trabalho preparado para agentes."
lastmod: 2026-08-30
tags: ["novo", "documentação"]
series: ["Documentação"]
series_order: 1
---

{{< lead >}}
O Blowfish 3 é um tema Hugo moderno para blogs, documentação, portefólios e sites que não cabem num modelo rígido.
{{< /lead >}}

{{< alert >}}
Crie um novo site com `npx blowfish-tools new <site>` e siga o [guia de instalação]({{< ref "docs/installation" >}}). Sites Blowfish existentes podem passar para a v3 sem alterações incompatíveis na configuração.
{{< /alert >}}

## Crie o site que imagina

O Blowfish oferece uma base sólida sem determinar o resultado. Escolha layouts de página inicial de perfil, landing, hero, cartões ou fundo. Defina cores, tipografia, navegação, modo escuro e apresentação de artigos na configuração do site. Use front matter quando uma página precisar de ser diferente.

O seu conteúdo continua a ser Hugo portátil: Markdown, page bundles, taxonomias, menus e ficheiros de configuração no repositório. Não há editor proprietário nem dependência de plataforma.

## Publique conteúdo mais rico com menos código

Escreva em Markdown e use os [mais de 40 shortcodes]({{< ref "docs/shortcodes" >}}) quando precisar. Adicione botões, alertas, ícones, separadores, galerias, gráficos, diagramas, cartões GitHub, vídeos e exemplos de código sem manter templates pontuais.

O Blowfish também trata do que está à volta do conteúdo: imagens de destaque e miniaturas responsivas, pesquisa, ferramentas de leitura, índices, metadados sociais e de SEO, dados estruturados, controlos de acessibilidade e analytics, comentários ou visualizações e gostos Firebase opcionais.

## Para cada leitor

Crie sites multilingues com conteúdo traduzido, menus por idioma e traduções de interface incluídas. O Blowfish suporta idiomas RTL e LTR no mesmo projeto, além de alternância de aparência, navegação responsiva e pesquisa acessível por teclado.

Por baixo do capô, o Blowfish usa recursos atuais do Hugo e Tailwind CSS 4, mantendo o modelo de conteúdo e configuração claro e sob o seu controlo.

## Dê ao seu agente o contexto necessário

O Blowfish inclui uma [skill para agentes](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) para agentes de programação com IA como o Claude Code. Ensina onde fica a configuração, como funcionam layouts e front matter, que shortcodes existem e como criar um site Blowfish sem adivinhar.

Instale-a no Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Também pode copiar a skill para `.claude/skills/blowfish/` no seu projeto. O agente poderá ajudar com configuração, estrutura de conteúdo, design de páginas e implementação consciente do tema, enquanto o seu site continua no repositório.

## Escolha o próximo passo

- Novo no Blowfish? Comece pela [Instalação]({{< ref "docs/installation" >}}).
- Quer dar forma ao site? Leia [Primeiros passos]({{< ref "docs/getting-started" >}}) e [Configuração]({{< ref "docs/configuration" >}}).
- Quer ver as possibilidades? Explore [Shortcodes]({{< ref "docs/shortcodes" >}}), [Amostras]({{< ref "samples" >}}) e a [Galeria]({{< ref "examples" >}}).
- Vai migrar um site existente? Siga o [guia de atualização para o Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
