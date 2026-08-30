---
title: "Crie um site que seja inconfundivelmente seu."
description: "Um tema Hugo moderno e flexível para blogs, documentação, portfólios e muito mais."
lastmod: 2026-08-30
heroLead: "O Blowfish oferece layouts expressivos, padrões bem pensados e blocos de conteúdo práticos, para que você se concentre no que quer dizer."
heroButtons:
  - label: "Começar"
    url: "/pt-br/docs/installation/"
  - label: "Explorar a documentação"
    url: "/pt-br/docs/"
    style: "outline"
  - label: "Dê uma estrela no GitHub"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="Layouts de página inicial" >}}Escolha a estrutura ideal para o site que você está criando.{{< /stat >}}
{{< stat value="40+" label="Shortcodes" >}}Componha conteúdo expressivo sem manter templates sob medida.{{< /stat >}}
{{< stat value="100%" label="Seu conteúdo" >}}Markdown portátil, configuração familiar do Hugo e sem lock-in.{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="Deixe com a sua cara" url="/pt-br/docs/configuration/" >}}
Um sistema coerente de layouts, cores, tipografia e controles de conteúdo.
{{< /feature >}}
{{< feature icon="code" title="Componha mais rápido" url="/pt-br/docs/shortcodes/" label="Ver shortcodes" >}}
Componentes úteis para histórias mais ricas, documentação mais clara e menos código sob medida.
{{< /feature >}}
{{< feature icon="heart" title="Feito abertamente" url="/pt-br/users/" >}}
Explore sites reais, contribuições da comunidade e padrões que funcionam em produção.
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="Feito para agentes de IA" url="/pt-br/docs/installation/#skill-para-agentes" label="Instalar a skill" >}}
O Blowfish inclui uma skill que ensina o Claude Code e outros agentes de programação a instalar, configurar e trabalhar com o tema.
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**O Blowfish v3.5 está disponível.** Crie um novo site com `npx blowfish-tools new <site>` ou [atualize um site existente]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).

**Trabalha com um agente de programação?** No Claude Code, execute `/plugin marketplace add nunocoracao/blowfish` e depois `/plugin install blowfish@blowfish`. Para outro agente que leia skills do projeto, copie a [pasta da skill `blowfish`](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) para `.claude/skills/blowfish/` no seu site.
{{< /alert >}}
