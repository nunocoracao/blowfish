---
title: "Bienvenido a Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Crea un sitio Hugo rápido y expresivo con layouts flexibles, herramientas de contenido enriquecido y un flujo preparado para agentes."
lastmod: 2026-08-30
tags: ["nuevo", "documentación"]
series: ["Documentación"]
series_order: 1
---

{{< lead >}}
Blowfish 3 es un tema Hugo moderno para blogs, documentación, portafolios y sitios que no encajan en una plantilla rígida.
{{< /lead >}}

{{< alert >}}
Crea un sitio nuevo con `npx blowfish-tools new <site>` y sigue la [guía de instalación]({{< ref "docs/installation" >}}). Los sitios Blowfish existentes pueden pasar a v3 sin cambios incompatibles de configuración.
{{< /alert >}}

## Crea el sitio que tienes en mente

Blowfish ofrece un punto de partida sólido sin fijar el resultado. Elige layouts de portada de perfil, landing, hero, tarjetas o fondo. Configura colores, tipografía, navegación, modo oscuro y presentación de artículos desde el sitio. Usa front matter cuando una página necesite ser diferente.

Tu contenido sigue siendo Hugo portátil: Markdown, page bundles, taxonomías, menús y archivos de configuración en tu repositorio. No hay editor propietario ni dependencia de plataforma.

## Publica contenido más rico con menos código

Escribe en Markdown y usa los [más de 40 shortcodes]({{< ref "docs/shortcodes" >}}) cuando lo necesites. Añade botones, avisos, iconos, pestañas, galerías, gráficos, diagramas, tarjetas de GitHub, vídeos y ejemplos de código sin mantener plantillas puntuales.

Blowfish también resuelve lo que rodea al contenido: imágenes destacadas y miniaturas responsivas, búsqueda, herramientas de lectura, tablas de contenido, metadatos sociales y SEO, datos estructurados, controles de accesibilidad y análisis, comentarios o vistas y reacciones con Firebase opcionales.

## Para cada lector

Crea sitios multilingües con contenido traducido, menús específicos por idioma y traducciones de interfaz incluidas. Blowfish admite idiomas RTL y LTR en el mismo proyecto, además de selector de apariencia, navegación responsiva y búsqueda accesible por teclado.

Bajo el capó, Blowfish usa capacidades actuales de Hugo y Tailwind CSS 4, manteniendo un modelo de contenido y configuración claro y bajo tu control.

## Da a tu agente el contexto que necesita

Blowfish incluye un [skill para agentes](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) para agentes de programación con IA como Claude Code. Le enseña dónde va la configuración, cómo funcionan los layouts y el front matter, qué shortcodes existen y cómo crear un sitio Blowfish sin adivinar.

Instálalo en Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

También puedes copiar el skill a `.claude/skills/blowfish/` en tu proyecto. Así, el agente puede ayudarte con la configuración, estructura de contenido, diseño de páginas e implementación consciente del tema, mientras el sitio sigue en tu repositorio.

## Elige tu siguiente paso

- ¿Eres nuevo en Blowfish? Empieza con [Instalación]({{< ref "docs/installation" >}}).
- ¿Quieres dar forma al sitio? Lee [Primeros pasos]({{< ref "docs/getting-started" >}}) y [Configuración]({{< ref "docs/configuration" >}}).
- ¿Quieres ver las posibilidades? Explora [Shortcodes]({{< ref "docs/shortcodes" >}}), [Muestras]({{< ref "samples" >}}) y la [Galería]({{< ref "examples" >}}).
- ¿Vas a migrar un sitio existente? Sigue la [guía de actualización a Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
