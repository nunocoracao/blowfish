---
title: "Vorschaubilder"
weight: 10
draft: false
description: "Aktivieren Sie Vorschaubilder für Ihre Artikel."
slug: "thumbnails"
tags: ["vorschaubild", "konfiguration", "dokumentation"]
series: ["Dokumentation"]
series_order: 6
---

## Vorschaubilder

Blowfish wurde erweitert, um das Hinzufügen visueller Unterstützung zu Ihren Beiträgen einfach zu machen. Dazu müssen Sie lediglich eine Bilddatei (fast alle Formate werden unterstützt, aber wir empfehlen `.png` oder `.jpg`), die mit `feature*` beginnt, im Hauptverzeichnis Ihres Artikels platzieren, wie im folgenden Beispiel gezeigt.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Dies teilt Blowfish mit, dass dieser Artikel ein Feature-Bild hat, das sowohl als Vorschaubild auf Ihrer Website als auch für <a target="_blank" href="https://oembed.com/">oEmbed</a>-Karten in sozialen Plattformen verwendet werden kann.

## Ordnerstruktur

Wenn Sie einzelne `.md`-Dateien für Ihre Artikel verwenden und eine Dateistruktur ähnlich dieser haben:

```shell
content
└── awesome_article.md
```

Müssen Sie dies von einer einzelnen Markdown-Datei in einen Ordner ändern. Erstellen Sie ein Verzeichnis mit dem gleichen Namen wie der Artikel und erstellen Sie darin eine `index.md`-Datei. Sie erhalten eine Struktur ähnlich der unten stehenden.

```shell
content
└── awesome_article
    └── index.md
```

Dann müssen Sie nur noch ein Bild hinzufügen, wie zuvor erklärt. Wenn Sie ein Beispiel dafür sehen möchten, können Sie [dieses Beispiel]({{< ref "thumbnail_sample" >}}) konsultieren.

## Hero-Bilder

Vorschaubilder werden standardmäßig als Hero-Bilder in jedem Artikel verwendet. Verwenden Sie den globalen Parameter `article.showHero` oder den Front-Matter-Parameter `showHero`, um diese Funktion für die gesamte Website oder für jeden einzelnen Beitrag zu steuern. Wenn Sie den Stil des Hero-Bildes überschreiben möchten, können Sie eine Datei namens `hero.html` in `./layouts/partials/` erstellen, die das ursprüngliche Partial aus dem Theme überschreibt.
