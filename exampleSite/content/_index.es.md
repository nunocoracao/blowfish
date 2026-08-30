---
title: "Crea un sitio que sea inconfundiblemente tuyo."
description: "Un tema de Hugo moderno y flexible para blogs, documentación, portafolios y más."
lastmod: 2026-08-30
heroLead: "Blowfish te ofrece layouts expresivos, valores predeterminados bien pensados y bloques de contenido prácticos, para que te concentres en lo que quieres contar."
heroButtons:
  - label: "Empezar"
    url: "/es/docs/installation/"
  - label: "Explorar la documentación"
    url: "/es/docs/"
    style: "outline"
  - label: "Dale una estrella en GitHub"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="Layouts de portada" >}}Elige la estructura que mejor se adapta al sitio que estás creando.{{< /stat >}}
{{< stat value="40+" label="Shortcodes" >}}Compón contenido expresivo sin mantener plantillas a medida.{{< /stat >}}
{{< stat value="100%" label="Tu contenido" >}}Markdown portable, configuración familiar de Hugo y sin ataduras.{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="Hazlo tuyo" url="/es/docs/configuration/" >}}
Un sistema coherente de layouts, colores, tipografía y controles de contenido.
{{< /feature >}}
{{< feature icon="code" title="Compón más rápido" url="/es/docs/shortcodes/" label="Ver shortcodes" >}}
Componentes útiles para historias más ricas, documentación más clara y menos código a medida.
{{< /feature >}}
{{< feature icon="heart" title="Hecho en abierto" url="/es/users/" >}}
Explora sitios reales, contribuciones de la comunidad y patrones que funcionan en producción.
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="Pensado para agentes de IA" url="/es/docs/installation/#skill-para-agentes" label="Instalar el skill" >}}
Blowfish incluye un skill que enseña a Claude Code y otros agentes de programación a instalar, configurar y trabajar con el tema.
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**Blowfish v3.5 ya está disponible.** Crea un sitio nuevo con `npx blowfish-tools new <site>` o [actualiza un sitio existente]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).

**¿Trabajas con un agente de programación?** En Claude Code, ejecuta `/plugin marketplace add nunocoracao/blowfish` y después `/plugin install blowfish@blowfish`. Para otro agente que lea skills del proyecto, copia la [carpeta del skill `blowfish`](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) a `.claude/skills/blowfish/` en tu sitio.
{{< /alert >}}
