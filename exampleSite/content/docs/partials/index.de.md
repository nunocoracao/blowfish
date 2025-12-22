---
title: "Partials"
weight: 9
draft: false
description: "Alle verfügbaren Partials in Blowfish."
slug: "partials"
tags: ["partials", "analytics", "datenschutz", "kommentare", "favicons", "icon", "dokumentation"]
series: ["Dokumentation"]
series_order: 9
---

## Analytics

Blowfish bietet integrierte Unterstützung für Fathom Analytics, Google Analytics und Umami Analytics. Fathom ist eine kostenpflichtige Alternative zu Google Analytics, die die Privatsphäre der Benutzer respektiert.

### Fathom Analytics

Um die Fathom Analytics-Unterstützung zu aktivieren, geben Sie einfach Ihren Fathom-Site-Code in der Datei `config/_default/params.toml` an. Wenn Sie auch die benutzerdefinierte Domain-Funktion von Fathom verwenden und deren Skript von Ihrer Domain bereitstellen möchten, können Sie zusätzlich den Konfigurationswert `domain` angeben. Wenn Sie keinen `domain`-Wert angeben, wird das Skript direkt von Fathom DNS geladen.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

Die Google Analytics-Unterstützung wird über das interne Hugo-Partial bereitgestellt. Geben Sie einfach den `googleAnalytics`-Schlüssel in der Datei `config/_default/hugo.toml` an und das Skript wird automatisch hinzugefügt.

Sowohl Version 3 (analytics.js) als auch Version 4 (gtag.js) werden unterstützt, basierend auf dem angegebenen Konfigurationswert:

```toml
# config/_default/hugo.toml

# Version 3
googleAnalytics = "UA-PROPERTY_ID"
# Version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

Um die Umami Analytics-Unterstützung zu aktivieren, geben Sie einfach Ihren [Umami-Tracking-Code](https://umami.is/docs/collect-data) in der Datei `config/_default/params.toml` an.
Wenn Sie auch die benutzerdefinierte Domain-Funktion von Umami verwenden und deren Skript von Ihrer Domain bereitstellen möchten, können Sie zusätzlich den Konfigurationswert `domain` angeben. Wenn Sie keinen `domain`-Wert angeben, wird das Skript direkt von Umami DNS (analytics.umami.is) geladen.
Wenn Sie möchten, dass der Tracker nur auf bestimmten Domains ausgeführt wird, können Sie den Konfigurationswert `dataDomains` angeben. Wenn Sie keinen `dataDomains`-Wert angeben, wird das Skript auf jeder Website ausgeführt, bei der `domain` und `websiteid` übereinstimmen. Wenn die Umgebungsvariable `TRACKER_SCRIPT_NAME` konfiguriert ist, können Sie einen benutzerdefinierten Skriptnamen `scriptName` angeben. Wenn sie nicht konfiguriert ist, kommentieren Sie sie entweder aus oder verwenden Sie den Standard `script.js`.

{{< alert >}}
**Hinweis:** Wenn Sie Umami Analytics aktivieren, unterstützt Blowfish [Umami Track Event](https://umami.is/docs/track-events) automatisch. Wenn Sie Track Event nicht unterstützen möchten, muss der Parameter `enableTrackEvent` auf `false` gesetzt werden.
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

Um die Seline Analytics-Unterstützung zu aktivieren, geben Sie einfach Ihren [Seline-Token](https://seline.so/docs/install-seline) in der Datei `config/_default/params.toml` an.

{{< alert >}}
**Hinweis:** Wenn Sie Seline Analytics aktivieren, unterstützt Blowfish [Seline Track Event](https://seline.so/docs/custom-events) automatisch. Wenn Sie Track Event nicht unterstützen möchten, muss der Parameter `enableTrackEvent` auf `false` gesetzt werden.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Benutzerdefinierte Analytics-Anbieter

Wenn Sie einen anderen Analytics-Anbieter auf Ihrer Website verwenden möchten, können Sie auch das Analytics-Partial überschreiben und Ihr eigenes Skript bereitstellen. Erstellen Sie einfach die Datei `layouts/partials/extend-head.html` in Ihrem Projekt und sie wird automatisch in den `<head>` der Website eingefügt.

## Kommentare

Um Kommentare zu Ihren Artikeln hinzuzufügen, enthält Blowfish Unterstützung für ein Kommentar-Partial, das am Ende jeder Artikelseite eingefügt wird. Stellen Sie einfach eine `layouts/partials/comments.html` bereit, die den Code enthält, der zum Anzeigen Ihrer gewählten Kommentare erforderlich ist.

Sie können entweder die integrierte Hugo Disqus-Vorlage verwenden oder Ihren eigenen benutzerdefinierten Code bereitstellen. Weitere Informationen finden Sie in der [Hugo-Dokumentation](https://gohugo.io/content-management/comments/).

Sobald das Partial bereitgestellt wurde, wird die feinere Kontrolle darüber, wo Kommentare angezeigt werden, über den Parameter `showComments` verwaltet. Dieser Wert kann auf Theme-Ebene in der `params.toml` [Konfigurationsdatei]({{< ref "configuration#theme-parameters" >}}) oder pro Artikel durch Einbeziehung in das [Front Matter]({{< ref "front-matter" >}}) festgelegt werden. Der Parameter ist standardmäßig `false`, daher muss er an einem dieser Orte auf `true` gesetzt werden, damit Kommentare angezeigt werden.

## Favicons

Blowfish stellt einen Standardsatz leerer Favicons zum Einstieg bereit, aber Sie können Ihre eigenen Assets bereitstellen, um sie zu überschreiben. Der einfachste Weg, neue Favicon-Assets zu erhalten, ist die Generierung über einen Drittanbieter wie [favicon.io](https://favicon.io).

Icon-Assets sollten direkt im `static/`-Ordner Ihrer Website platziert und wie in der folgenden Auflistung benannt werden. Wenn Sie [favicon.io](https://favicon.io) verwenden, werden dies die Dateinamen sein, die automatisch für Sie generiert werden, aber Sie können Ihre eigenen Assets bereitstellen, wenn Sie möchten.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternativ können Sie auch das Standard-Favicon-Verhalten vollständig überschreiben und Ihre eigenen Favicon-HTML-Tags und Assets bereitstellen. Erstellen Sie einfach eine `layouts/partials/favicons.html`-Datei in Ihrem Projekt und diese wird anstelle der Standard-Assets in den `<head>` der Website eingefügt.

## Icon

Ähnlich wie beim [Icon-Shortcode]({{< ref "shortcodes#icon" >}}) können Sie Icons in Ihren eigenen Templates und Partials einbinden, indem Sie Blowfishs `icon.html`-Partial verwenden. Das Partial nimmt einen Parameter entgegen, der der Name des einzufügenden Icons ist.

**Beispiel:**

```go
  {{ partial "icon.html" "github" }}
```

Icons werden mit Hugo-Pipelines gefüllt, was sie sehr flexibel macht. Blowfish enthält eine Reihe von integrierten Icons für soziale Netzwerke, Links und andere Zwecke. Auf der Seite [Icon-Beispiele]({{< ref "samples/icons" >}}) finden Sie eine vollständige Liste der unterstützten Icons.

Benutzerdefinierte Icons können hinzugefügt werden, indem Sie Ihre eigenen Icon-Assets im Verzeichnis `assets/icons/` Ihres Projekts bereitstellen. Das Icon kann dann im Partial mit dem SVG-Dateinamen ohne die Erweiterung `.svg` referenziert werden.

Icons können auch im Artikelinhalt verwendet werden, indem Sie den [Icon-Shortcode]({{< ref "shortcodes#icon" >}}) aufrufen.

## Erweiterungen

Blowfish bietet auch eine Reihe von Erweiterungs-Partials, die eine Erweiterung der Basisfunktionalität ermöglichen.

### Artikel-Link

Wenn Sie zusätzlichen Code nach Artikel-Links einfügen möchten, erstellen Sie eine `layouts/partials/extend-article-link.html`-Datei. Dies ist besonders leistungsstark in Kombination mit dem [`badge`]({{< ref "shortcodes#badge" >}})-Shortcode, der verwendet werden kann, um Metadaten für bestimmte Artikel hervorzuheben.

### Head und Footer

Das Theme ermöglicht das Einfügen von zusätzlichem Code direkt in die `<head>`- und `<footer>`-Abschnitte der Vorlage. Diese können nützlich sein, um Skripte oder andere Logik bereitzustellen, die nicht Teil des Themes ist.

Erstellen Sie einfach entweder `layouts/partials/extend-head.html` oder `layouts/partials/extend-footer.html` und diese werden automatisch in Ihren Website-Build eingefügt. Beide Partials werden als letzte Elemente in `<head>` und `<footer>` eingefügt, sodass sie verwendet werden können, um Theme-Standardeinstellungen zu überschreiben.

### Nicht-gecachte Head-Erweiterung

Das `extend-head.html` wird [gecacht](https://gohugo.io/functions/partials/includecached/), und Blowfish unterstützt auch eine nicht-gecachte Head-Erweiterung zum **bedingten** Einbinden von Skripten oder Metadaten basierend auf Seiteneigenschaften. Um diese Funktion zu nutzen, erstellen Sie eine `layouts/partials/extend-head-uncached.html`-Datei in Ihrem Projekt. Diese Datei wird im `<head>`-HTML-Tag eingefügt.

Dies ist nützlich, wenn Sie dynamische Elemente—wie Skripte oder Metadaten—basierend auf Eigenschaften wie Shortcodes, Front-Matter-Flags oder anderen seitenspezifischen Daten einbinden müssen, die nicht über Builds hinweg gecacht werden sollten.

Zum Beispiel können Sie zum dynamischen Laden einer CDN-JavaScript-Datei basierend auf dem Erscheinen eines Shortcodes die [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article)-Methode innerhalb von `extend-head-uncached.html` verwenden.
