---
title: "Willkommen bei Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Erstelle eine schnelle, ausdrucksstarke Hugo-Website mit flexiblen Layouts, Werkzeugen für reichhaltige Inhalte und einem agentenfähigen Workflow."
lastmod: 2026-08-30
tags: ["neu", "dokumentation"]
series: ["Dokumentation"]
series_order: 1
---

{{< lead >}}
Blowfish 3 ist ein modernes Hugo-Theme für Blogs, Dokumentation, Portfolios und Websites, die in keine starre Vorlage passen.
{{< /lead >}}

{{< alert >}}
Starte eine neue Website mit `npx blowfish-tools new <site>` und folge dann der [Installationsanleitung]({{< ref "docs/installation" >}}). Bestehende Blowfish-Websites können ohne inkompatible Konfigurationsänderungen auf v3 wechseln.
{{< /alert >}}

## Erstelle die Website, die du im Kopf hast

Blowfish bietet einen starken Ausgangspunkt, ohne das Ergebnis festzulegen. Wähle zwischen Profil-, Landing-, Hero-, Karten- oder Hintergrund-Homepage-Layouts. Farben, Typografie, Navigation, Dark Mode und Artikelansicht steuerst du in der Konfiguration deiner Website. Für einzelne Seiten steht Front Matter bereit.

Deine Inhalte bleiben portable Hugo-Inhalte: Markdown, Page Bundles, Taxonomien, Menüs und Konfigurationsdateien in deinem Repository. Es gibt keinen proprietären Editor und keinen Lock-in.

## Reichhaltige Inhalte ohne viel eigenen Code

Schreibe in Markdown und nutze bei Bedarf [mehr als 40 Shortcodes]({{< ref "docs/shortcodes" >}}). Füge Buttons, Hinweise, Icons, Tabs, Galerien, Charts, Diagramme, GitHub-Karten, Videos und Codebeispiele hinzu, ohne eigene Templates pflegen zu müssen.

Blowfish übernimmt auch die Arbeit drumherum: responsive Feature-Bilder und Thumbnails, Suche, Lesewerkzeuge, Inhaltsverzeichnisse, Social- und SEO-Metadaten, strukturierte Daten, Accessibility-Einstellungen sowie optionale Analysen, Kommentare oder Firebase-basierte Aufrufe und Likes.

## Für alle Leserinnen und Leser

Erstelle mehrsprachige Websites mit übersetzten Inhalten, sprachspezifischen Menüs und integrierten UI-Übersetzungen. Blowfish unterstützt RTL- und LTR-Sprachen im selben Projekt. Hinzu kommen ein Darstellungsumschalter, responsive Navigation und tastaturfreundliche Suche.

Unter der Haube nutzt Blowfish aktuelle Hugo-Funktionen und Tailwind CSS 4. Das Konfigurations- und Inhaltsmodell bleibt dabei leicht verständlich und vollständig in deiner Hand.

## Gib deinem Coding-Agent den richtigen Kontext

Blowfish enthält einen [Agent-Skill](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish) für KI-Coding-Agents wie Claude Code. Er erklärt, wo die Konfiguration liegt, wie Layouts und Front Matter funktionieren, welche Shortcodes verfügbar sind und wie Blowfish-Websites ohne Raten angepasst werden.

Installiere ihn in Claude Code:

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

Oder kopiere den Skill nach `.claude/skills/blowfish/` in dein Projekt. Danach kann dein Agent bei Setup, Konfiguration, Inhaltsstruktur, Seitendesign und theme-bewusster Umsetzung helfen, während deine Website in deinem Repository bleibt.

## Dein nächster Schritt

- Neu bei Blowfish? Beginne mit der [Installation]({{< ref "docs/installation" >}}).
- Bereit zum Gestalten? Lies [Erste Schritte]({{< ref "docs/getting-started" >}}) und [Konfiguration]({{< ref "docs/configuration" >}}).
- Du möchtest Möglichkeiten sehen? Entdecke [Shortcodes]({{< ref "docs/shortcodes" >}}), [Samples]({{< ref "samples" >}}) und den [Showcase]({{< ref "examples" >}}).
- Du migrierst eine bestehende Website? Folge der [Upgrade-Anleitung für Blowfish 3]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}}).
