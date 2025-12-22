---
title: "Serien"
weight: 12
draft: false
description: "Erfahren Sie, wie Sie Artikel zu einer Serie gruppieren."
slug: "series"
tags: ["serien", "dokumentation"]
series: ["Dokumentation"]
series_order: 11
seriesOpened: true
---

Blowfish bietet eine Funktion, um mehrere Artikel unter einer "Serie" zu gruppieren. Das Platzieren eines Artikels in einer Serie zeigt die restlichen Artikel der Serie auf jeder Einzelseite an und ermöglicht eine schnelle Navigation zwischen ihnen. Sie können ein Beispiel dafür oben sehen.

## Taxonomie erstellen
Der erste Schritt zur Aktivierung von Serien ist das Erstellen der `series`-Taxonomie. Fügen Sie dazu einfach die `series`-Taxonomie zu Ihrer Taxonomie-Liste in der `hugo.toml` hinzu.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

## Artikel markieren

Dann müssen Sie jeden Artikel mit dem `series`-Parameter und `series_order` markieren. Der `series`-Parameter ist die ID und der Name der Serie, in die Sie den Artikel einordnen (obwohl die Variable ein Array ist, empfehlen wir, jeden Artikel nur einer Serie zuzuordnen). Und `series_order` definiert die Reihenfolge dieses Artikels innerhalb der Serie. Im folgenden Beispiel ist der Artikel Nummer `11` in der `Documentation`-Serie.

```md
series: ["Documentation"]
series_order: 11
```

## Serienverhalten
Das Markieren eines Artikels als Teil einer Serie zeigt automatisch das Serienmodul an, wie Sie es auf dieser Seite sehen können. Sie können wählen, ob dieses Modul standardmäßig geöffnet oder geschlossen ist, indem Sie die globale Variable `article.seriesOpened` in `params.toml` oder den Front-Matter-Parameter `seriesOpened` verwenden, um eine Überschreibung auf Artikelebene festzulegen.
