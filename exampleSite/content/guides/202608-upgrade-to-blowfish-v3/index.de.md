---
title: "Eine bestehende Hugo-Website auf Blowfish 3 aktualisieren"
description: "Migrieren Sie eine bestehende Blowfish-Website auf Version 3, ohne die Konfiguration ändern zu müssen."
featureimage: "featured.png"
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 ist abwärtskompatibel. Bestehende Websites können aktualisiert werden, ohne Konfiguration oder Inhalte neu schreiben zu müssen.
{{< /lead >}}

## Vor dem Upgrade

Committen Sie den aktuellen Stand Ihrer Website und stellen Sie sicher, dass Ihre Hugo-Version innerhalb des von Blowfish angegebenen Bereichs liegt. Falls Sie eigene Dateien im Theme-Verzeichnis haben, verschieben Sie diese zuerst in die Verzeichnisse `assets/` oder `layouts/` Ihrer Website, damit sie bei Updates nicht überschrieben werden.

## Installation aktualisieren

### Hugo-Modul

Ergänzen Sie den Modulpfad in `config/_default/module.toml` um `/v3` und aktualisieren Sie anschließend die Abhängigkeiten:

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Git-Submodul

```shell
git submodule update --remote --merge
```

### Manuelle Installation

Laden Sie das neueste Release herunter, ersetzen Sie `themes/blowfish/` und behalten Sie Ihre Website-Konfiguration in `config/_default/`.

## Ergebnis überprüfen

Führen Sie `hugo server` aus, prüfen Sie Ihre Homepage und einen repräsentativen Artikel und veröffentlichen Sie anschließend wie gewohnt. Neue Funktionen von Blowfish 3 sind optional, daher sollte Ihre bestehende Website unverändert dargestellt werden.

Für eine neue Website verwenden Sie stattdessen `npx blowfish-tools new <site>` und folgen der [Installationsanleitung]({{< ref "docs/installation" >}}).
