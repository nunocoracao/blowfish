---
title: "Konfiguration"
weight: 4
draft: false
description: "Alle in Blowfish verfügbaren Konfigurationsvariablen."
slug: "configuration"
tags: ["konfiguration", "dokumentation"]
series: ["Dokumentation"]
series_order: 4
---

Blowfish ist ein hochgradig anpassbares Theme und nutzt einige der neuesten Hugo-Funktionen, um die Konfiguration zu vereinfachen.

Das Theme wird mit einer Standardkonfiguration geliefert, die Sie mit einem einfachen Blog oder einer statischen Website zum Laufen bringt.

{{< alert "fire" >}}
Wir haben gerade ein CLI-Tool veröffentlicht, das Ihnen beim Einstieg mit Blowfish hilft. Es unterstützt Sie bei Installation und Konfiguration. Installieren Sie das CLI-Tool global mit:

```bash
npx blowfish-tools
```

{{< /alert >}}

> Die mit dem Theme gelieferten Konfigurationsdateien werden im TOML-Format bereitgestellt, da dies die Standard-Hugo-Syntax ist. Sie können Ihre Konfiguration bei Bedarf in YAML oder JSON konvertieren.

Die Standard-Theme-Konfiguration ist in jeder Datei dokumentiert, sodass Sie die Einstellungen frei an Ihre Bedürfnisse anpassen können.

{{< alert >}}
Wie in den [Installationsanweisungen]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}) beschrieben, sollten Sie Ihre Theme-Konfiguration anpassen, indem Sie die Dateien im Ordner `config/_default/` Ihres Hugo-Projekts ändern und die Datei `hugo.toml` im Projektstammverzeichnis löschen.
{{< /alert >}}

## Website-Konfiguration

Standard-Hugo-Konfigurationsvariablen werden im gesamten Theme berücksichtigt, es gibt jedoch einige spezifische Dinge, die für die beste Erfahrung konfiguriert werden sollten.

Die Website-Konfiguration wird über die Datei `config/_default/hugo.toml` verwaltet. Die folgende Tabelle zeigt alle Einstellungen, die Blowfish nutzt.

Beachten Sie, dass die in dieser Tabelle angegebenen Variablennamen die Punktnotation verwenden, um die TOML-Datenstruktur zu vereinfachen (d.h. `outputs.home` bezieht sich auf `[outputs] home`).

<!-- prettier-ignore-start -->
| Name | Standard | Beschreibung |
| --- | --- | --- |
| `theme` | `"blowfish"` | Bei Verwendung von Hugo-Modulen sollte dieser Konfigurationswert entfernt werden. Für alle anderen Installationstypen muss dies auf `blowfish` gesetzt werden, damit das Theme funktioniert. |
| `baseURL` | _Nicht gesetzt_ | Die URL zum Stammverzeichnis der Website. |
| `defaultContentLanguage` | `"en"` | Dieser Wert bestimmt die Standardsprache der Theme-Komponenten und Inhalte. Siehe den Abschnitt [Sprache und i18n](#sprache-und-i18n) unten für unterstützte Sprachcodes. |
| `enableRobotsTXT` | `true` | Wenn aktiviert, wird eine `robots.txt`-Datei im Website-Stammverzeichnis erstellt, die Suchmaschinen das Crawlen der gesamten Website ermöglicht. Wenn Sie Ihre eigene vorgefertigte `robots.txt` bereitstellen möchten, setzen Sie dies auf `false` und platzieren Sie Ihre Datei im `static`-Verzeichnis. Für vollständige Kontrolle können Sie ein [benutzerdefiniertes Layout]({{< ref "content-examples#custom-layouts" >}}) bereitstellen, um diese Datei zu generieren. |
| `pagination.pagerSize` | `10` | Die Anzahl der Artikel, die auf jeder Seite der Artikelliste angezeigt werden. |
| `summaryLength` | `0` | Die Anzahl der Wörter, die zur Generierung der Artikelzusammenfassung verwendet werden, wenn keine im [Front Matter]({{< ref "front-matter" >}}) angegeben ist. Ein Wert von `0` verwendet den ersten Satz. Dieser Wert hat keine Auswirkung, wenn Zusammenfassungen ausgeblendet sind. |
| `outputs.home` | `["HTML", "RSS", "JSON"]` | Die für die Website generierten Ausgabeformate. Blowfish benötigt HTML, RSS und JSON, damit alle Theme-Komponenten korrekt funktionieren. |
| `permalinks` | _Nicht gesetzt_ | Siehe die [Hugo-Dokumentation](https://gohugo.io/configuration/permalinks/) für die Permalink-Konfiguration. |
| `taxonomies` | _Nicht gesetzt_ | Siehe den Abschnitt [Inhalte organisieren]({{< ref "getting-started#organising-content" >}}) für die Taxonomie-Konfiguration. |
<!-- prettier-ignore-end -->

## Thumbnails

Blowfish wurde so entwickelt, dass es einfach ist, visuelle Unterstützung zu Ihren Artikeln hinzuzufügen. Wenn Sie mit der Hugo-Artikelstruktur vertraut sind, müssen Sie nur eine Bilddatei (fast alle Formate werden unterstützt, aber wir empfehlen `.png` oder `.jpg`) in Ihrem Artikelordner platzieren, die mit `feature*` beginnt. Das ist alles, Blowfish kann dann das Bild sowohl als Thumbnail innerhalb Ihrer Website als auch für <a target="_blank" href="https://oembed.com/">oEmbed</a>-Karten auf sozialen Plattformen verwenden.

[Hier]({{< ref "thumbnails" >}}) finden Sie auch einen Leitfaden mit mehr Informationen und ein [Beispiel]({{< ref "thumbnail_sample" >}}), wenn Sie sehen möchten, wie Sie es machen können.

## Sprache und i18n

Blowfish ist für vollständig mehrsprachige Websites optimiert und Theme-Assets sind standardmäßig in mehrere Sprachen übersetzt. Die Sprachkonfiguration ermöglicht es Ihnen, mehrere Versionen Ihres Inhalts zu generieren, um Ihren Besuchern ein angepasstes Erlebnis in ihrer Muttersprache zu bieten.

Das Theme unterstützt derzeit standardmäßig die folgenden Sprachen:

| Sprache | Code |
| --- | --- |
| Arabisch | `ar` |
| Bulgarisch | `bg` |
| Bengali | `bn` |
| Katalanisch | `ca` |
| Tschechisch | `cs` |
| Deutsch | `de` |
| Englisch | `en` |
| Esperanto | `eo` |
| Spanisch (Spanien) | `es` |
| Finnisch | `fi` |
| Französisch | `fr` |
| Galizisch | `gl` |
| Hebräisch | `he` |
| Kroatisch | `hr` |
| Ungarisch | `hu` |
| Indonesisch | `id` |
| Italienisch | `it` |
| Japanisch | `ja` |
| Koreanisch | `ko` |
| Niederländisch | `nl` |
| Persisch | `fa` |
| Polnisch | `pl` |
| Portugiesisch (Brasilien) | `pt-br` |
| Portugiesisch (Portugal) | `pt-pt` |
| Rumänisch | `ro` |
| Russisch | `ru` |
| Thai | `th` |
| Türkisch | `tr` |
| Vietnamesisch | `vi` |
| Vereinfachtes Chinesisch (China) | `zh-cn` |
| Traditionelles Chinesisch (Taiwan) | `zh-tw` |

Die Standardübersetzungen können überschrieben werden, indem Sie eine benutzerdefinierte Datei in `i18n/[code].yaml` erstellen, die die Übersetzungsstrings enthält. Sie können diese Methode auch verwenden, um neue Sprachen hinzuzufügen. Wenn Sie eine neue Übersetzung mit der Community teilen möchten, [öffnen Sie bitte einen Pull Request](https://github.com/nunocoracao/blowfish/pulls).

### Konfiguration

Um so flexibel wie möglich zu sein, muss für jede Sprache auf der Website eine Sprachkonfigurationsdatei erstellt werden. Standardmäßig enthält Blowfish eine englische Sprachkonfiguration unter `config/_default/languages.en.toml`.

Die Standarddatei kann als Vorlage verwendet werden, um zusätzliche Sprachen zu erstellen, oder umbenannt werden, wenn Sie Ihre Website in einer anderen Sprache als Englisch verfassen möchten. Benennen Sie die Datei einfach im Format `languages.[language-code].toml`.

{{< alert >}}
**Hinweis:** Stellen Sie sicher, dass der Parameter `defaultContentLanguage` in der [Website-Konfiguration](#website-konfiguration) mit dem Sprachcode in Ihrem Sprachkonfigurationsdateinamen übereinstimmt.
{{< /alert >}}

Detaillierte Informationen zu allen verfügbaren Konfigurationsparametern finden Sie in der englischen Dokumentation, da die Parameternamen technisch sind und im Original belassen werden.

## Theme-Parameter

Blowfish bietet eine große Anzahl von Konfigurationsparametern, die steuern, wie das Theme funktioniert. Die vollständige Liste aller verfügbaren Parameter finden Sie in der Datei `config/_default/params.toml`.

Viele der Artikel-Standardeinstellungen können auf Artikelebene überschrieben werden, indem sie im Front Matter angegeben werden. Weitere Details finden Sie im Abschnitt [Front Matter]({{< ref "front-matter" >}}).

## Weitere Konfigurationsdateien

Das Theme enthält auch eine `markup.toml`-Konfigurationsdatei. Diese Datei enthält einige wichtige Parameter, die sicherstellen, dass Hugo korrekt konfiguriert ist, um mit Blowfish erstellte Websites zu generieren.

Stellen Sie immer sicher, dass diese Datei im Konfigurationsverzeichnis vorhanden ist und dass die erforderlichen Werte gesetzt sind. Andernfalls können bestimmte Funktionen nicht korrekt funktionieren und es kann zu unbeabsichtigtem Verhalten kommen.
