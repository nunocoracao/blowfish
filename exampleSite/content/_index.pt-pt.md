---
title: "Crie um site que seja inconfundivelmente seu."
description: "Um tema Hugo moderno e flexível para blogs, documentação, portefólios e muito mais."
lastmod: 2026-08-30
heroLead: "O Blowfish oferece layouts expressivos, predefinições bem pensadas e blocos de conteúdo práticos, para que se concentre no que quer dizer."
heroButtons:
  - label: "Começar"
    url: "/pt-pt/docs/installation/"
  - label: "Explorar a documentação"
    url: "/pt-pt/docs/"
    style: "outline"
  - label: "Dê uma estrela no GitHub"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="Layouts de página inicial" >}}Escolha a estrutura ideal para o site que está a criar.{{< /stat >}}
{{< stat value="40+" label="Shortcodes" >}}Componha conteúdo expressivo sem manter templates à medida.{{< /stat >}}
{{< stat value="100%" label="O seu conteúdo" >}}Markdown portátil, configuração familiar do Hugo e sem dependências.{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="Torne-o seu" url="/pt-pt/docs/configuration/" >}}
Um sistema coerente de layouts, cores, tipografia e controlos de conteúdo.
{{< /feature >}}
{{< feature icon="code" title="Componha mais depressa" url="/pt-pt/docs/shortcodes/" label="Ver shortcodes" >}}
Componentes úteis para histórias mais ricas, documentação mais clara e menos código à medida.
{{< /feature >}}
{{< feature icon="heart" title="Feito abertamente" url="/pt-pt/users/" >}}
Explore sites reais, contribuições da comunidade e padrões que resistem em produção.
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="Feito para agentes de IA" url="/pt-pt/docs/installation/#skill-para-agentes" label="Instalar a skill" >}}
O Blowfish inclui uma skill que ensina o Claude Code e outros agentes de programação a instalar, configurar e trabalhar com o tema.
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**O Blowfish v3.5 está disponível.** Crie um novo site com `npx blowfish-tools new <site>` ou [atualize um site existente]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).

**Trabalha com um agente de programação?** No Claude Code, execute `/plugin marketplace add nunocoracao/blowfish` e depois `/plugin install blowfish@blowfish`. Para outro agente que leia skills do projeto, copie a [pasta da skill `blowfish`](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) para `.claude/skills/blowfish/` no seu site.
{{< /alert >}}
