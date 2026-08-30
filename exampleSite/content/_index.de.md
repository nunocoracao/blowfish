---
title: "Baue eine Website, die unverwechselbar deine ist."
description: "Ein modernes, flexibles Hugo-Theme für Blogs, Dokumentation, Portfolios und mehr."
lastmod: 2026-08-30
heroLead: "Blowfish bietet ausdrucksstarke Layouts, durchdachte Voreinstellungen und praktische Bausteine für deine Inhalte — damit du dich auf das konzentrieren kannst, was du sagen möchtest."
heroButtons:
  - label: "Loslegen"
    url: "/de/docs/installation/"
  - label: "Dokumentation entdecken"
    url: "/de/docs/"
    style: "outline"
  - label: "Star auf GitHub"
    url: "https://github.com/nunocoracao/blowfish"
    style: "outline"
    github: "nunocoracao/blowfish"
heroImage: "images/v3/welcome.png"
---

{{< stats >}}
{{< stat value="5" label="Homepage-Layouts" >}}Wähle die Struktur, die zu deiner Website passt.{{< /stat >}}
{{< stat value="40+" label="Shortcodes" >}}Gestalte ausdrucksstarke Inhalte, ohne eigene Templates zu pflegen.{{< /stat >}}
{{< stat value="100%" label="Deine Inhalte" >}}Portables Markdown, vertraute Hugo-Konfiguration, kein Lock-in.{{< /stat >}}
{{< /stats >}}

{{< feature-grid >}}
{{< feature icon="list-check" title="Mach es zu deinem" url="/de/docs/configuration/" >}}
Ein stimmiges System aus Layouts, Farben, Typografie und Inhaltssteuerung.
{{< /feature >}}
{{< feature icon="code" title="Schneller gestalten" url="/de/docs/shortcodes/" label="Shortcodes durchstöbern" >}}
Nützliche Komponenten für reichere Geschichten, klarere Dokumentation und weniger Eigenbau.
{{< /feature >}}
{{< feature icon="heart" title="Offen entwickelt" url="/de/users/" >}}
Entdecke echte Websites, Community-Beiträge und Patterns, die sich in der Praxis bewähren.
{{< /feature >}}
{{< feature icon="wand-magic-sparkles" title="Gemacht für KI-Agents" url="/de/docs/installation/#agent-skill" label="Skill installieren" >}}
Blowfish enthält einen Agent-Skill, der Claude Code und anderen Coding-Agents beibringt, das Theme zu installieren, zu konfigurieren und damit zu arbeiten.
{{< /feature >}}
{{< /feature-grid >}}

{{< alert >}}
**Blowfish v3.5 ist verfügbar.** Starte eine neue Website mit `npx blowfish-tools new <site>` oder [aktualisiere eine bestehende Website]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).

**Du arbeitest mit einem Coding-Agent?** Führe in Claude Code `/plugin marketplace add nunocoracao/blowfish` und anschließend `/plugin install blowfish@blowfish` aus. Bei einem anderen Agent, der Projekt-Skills liest, kopiere den [`blowfish`-Skill-Ordner](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) in deine Website nach `.claude/skills/blowfish/`.
{{< /alert >}}
