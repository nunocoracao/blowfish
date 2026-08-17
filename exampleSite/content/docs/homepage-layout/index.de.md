---
title: "Homepage-Layout"
featureimage: "images/v3/homepage-layout.png"
weight: 5
draft: false
description: "Konfiguration des Homepage-Layouts im Blowfish-Theme."
slug: "homepage-layout"
tags: ["homepage", "layouts", "dokumentation"]
series: ["Dokumentation"]
series_order: 5
---

Blowfish bietet flexible Homepage-Layouts mit Einstellungen zur Anpassung jedes Designs. Alternativ können Sie auch Ihre eigene Vorlage bereitstellen und die vollständige Kontrolle über den Homepage-Inhalt haben.

Das Layout der Homepage wird durch die Einstellung `homepage.layout` in der Konfigurationsdatei `params.toml` gesteuert. Zusätzlich haben alle Layouts die Option, eine Liste der [neuesten Artikel](#neueste-artikel) einzuschließen.

## Profil-Layout

Das Standard-Layout ist das Profil-Layout, das sich hervorragend für persönliche Websites und Blogs eignet. Es stellt die Details des Autors in den Vordergrund, indem es ein Bild und Links zu sozialen Profilen bereitstellt.

{{< figure src="img/home-profile.png" class="thumbnailshadow" >}}

Die Autoreninformationen werden in der Sprachen-Konfigurationsdatei bereitgestellt. Weitere Details zu den Parametern finden Sie in den Abschnitten [Erste Schritte]({{< ref "getting-started" >}}) und [Sprachkonfiguration]({{< ref "configuration##language-and-i18n" >}}).

Zusätzlich wird jeder Markdown-Inhalt, der im Homepage-Inhalt bereitgestellt wird, unter dem Autorenprofil platziert. Dies ermöglicht zusätzliche Flexibilität für die Anzeige einer Biografie oder anderer benutzerdefinierter Inhalte mit Shortcodes.

Um das Profil-Layout zu aktivieren, setzen Sie `homepage.layout = "profile"` in der Konfigurationsdatei `params.toml`.

## Seiten-Layout

Das Seiten-Layout ist einfach eine normale Inhaltsseite, die Ihren Markdown-Inhalt anzeigt. Es eignet sich hervorragend für statische Websites und bietet viel Flexibilität.

{{< figure src="img/home-page.png" class="thumbnailshadow" >}}

Um das Seiten-Layout zu aktivieren, setzen Sie `homepage.layout = "page"` in der Konfigurationsdatei `params.toml`.

## Hero-Layout

Das Hero-Layout vereint Ideen aus den Profil- und Card-Layouts. Es zeigt nicht nur Informationen über den Autor der Website an, sondern lädt auch Ihren Markdown darunter.

{{< figure src="img/home-hero.png" class="thumbnailshadow" >}}

Um das Hero-Layout zu aktivieren, setzen Sie `homepage.layout = "hero"` und `homepage.homepageImage` in der Konfigurationsdatei `params.toml`.

## Hintergrund-Layout

Das Hintergrund-Layout ist eine flüssigere Version des Hero-Layouts. Wie beim Hero-Layout zeigt es sowohl Informationen über den Autor der Website an als auch Ihren Markdown darunter.

{{< figure src="img/home-background.png" class="thumbnailshadow" >}}

Um das Hintergrund-Layout zu aktivieren, setzen Sie `homepage.layout = "background"` und `homepage.homepageImage` in der Konfigurationsdatei `params.toml`.

## Card-Layout

Das Card-Layout ist eine Erweiterung des Seiten-Layouts. Es bietet das gleiche Maß an Flexibilität, indem es auch Ihren Markdown-Inhalt anzeigt und ein Card-Bild zur Anzeige visueller Inhalte hinzufügt.

{{< figure src="img/home-card.png" class="thumbnailshadow" >}}

Um das Card-Layout zu aktivieren, setzen Sie `homepage.layout = "card"` und `homepage.homepageImage` in der Konfigurationsdatei `params.toml`.

## Landing-Layout

Das Landing-Layout ist für Produkt-Websites, Dokumentations-Hubs und persönliche Websites gedacht, die ein stärkeres Eröffnungsstatement benötigen. Es beginnt mit einem großzügigen, redaktionellen Hero — Eyebrow, prägnante Headline, Lead-Absatz und Call-to-Action-Buttons — optional hinterlegt mit einem Hero-Bild in voller Breite, das in den globalen Hintergrund übergeht, mit einer gestaffelten Eingangsanimation, die für Besucher mit reduzierter Bewegungspräferenz automatisch deaktiviert wird. Alles unterhalb des Heros ist Standard-Markdown mit Blowfish-Shortcodes, sodass die gesamte Seite portabel und einfach zu pflegen bleibt.

{{< figure src="img/home-landing.png" class="thumbnailshadow" >}}

Um das Landing-Layout zu aktivieren, setzen Sie `homepage.layout = "landing"` in der Konfigurationsdatei `params.toml`.

Der Hero wird über das Front Matter von `content/_index.md` gesteuert. Alle Felder sind optional — alles, was Sie weglassen, wird einfach nicht gerendert:

```yaml
---
title: "Build a site that feels unmistakably yours."
heroCaption: "Blowfish" # eyebrow above the title; defaults to the author name
heroLead: "A short statement that expands on the title."
heroButtons:
  - label: "Get started"
    url: "/docs/installation/"
  - label: "Explore the docs"
    url: "/docs/"
    style: "outline" # "primary" (default) or "outline"
---
```

| Front Matter | Beschreibung |
| ------------ | ----------- |
| `heroCaption` | Kleiner Eyebrow-Text in Großbuchstaben über dem Titel. Standardmäßig `params.Author.name`. |
| `heroLead` | Lead-Absatz, der unter dem Titel gerendert wird. Unterstützt Markdown. |
| `heroButtons` | Liste von Call-to-Action-Buttons (`label`, `url` und optional `style`). Verwendet dasselbe Styling wie der [`cta`-Shortcode]({{< ref "shortcodes#cta-button" >}}). |

Der Markdown-Inhalt von `_index.md` wird unterhalb des Heros gerendert, sodass Statistiken, Feature-Grids, Schritte und beliebige andere Shortcodes den Rest der Seite gestalten können. Das Landing-Layout passt gut zur websiteweiten Option `backgroundCanvas`, die in der [Konfigurations-Dokumentation]({{< ref "configuration" >}}) beschrieben wird.


## Benutzerdefiniertes Layout

Wenn die integrierten Homepage-Layouts für Ihre Bedürfnisse nicht ausreichen, haben Sie die Möglichkeit, Ihr eigenes benutzerdefiniertes Layout bereitzustellen. Dies ermöglicht Ihnen die vollständige Kontrolle über den Seiteninhalt und gibt Ihnen im Wesentlichen eine leere Leinwand zum Arbeiten.

Um das benutzerdefinierte Layout zu aktivieren, setzen Sie `homepage.layout = "custom"` in der Konfigurationsdatei `params.toml`.

Nachdem der Konfigurationswert gesetzt ist, erstellen Sie eine neue Datei `custom.html` und platzieren Sie sie in `layouts/partials/home/custom.html`. Alles, was in der Datei `custom.html` steht, wird nun im Inhaltsbereich der Website-Homepage platziert. Sie können beliebiges HTML, Tailwind oder Hugo-Templating-Funktionen verwenden, um Ihr Layout zu definieren.

Um [neueste Artikel](#neueste-artikel) im benutzerdefinierten Layout einzuschließen, verwenden Sie das Partial `recent-articles/main.html`.

Die mitgelieferte Beispiel-Website verwendet das integrierte Landing-Layout und Standard-Inhalts-Shortcodes. Besuchen Sie das [GitHub-Repository](https://github.com/nunocoracao/blowfish/tree/main/exampleSite), um zu sehen, wie sie konfiguriert ist.

## Neueste Artikel

Alle Homepage-Layouts haben die Option, neueste Artikel unter dem Hauptseiteninhalt anzuzeigen. Um dies zu aktivieren, setzen Sie einfach die Einstellung `homepage.showRecent` auf `true` in der Konfigurationsdatei `params.toml`.

{{< figure src="img/home-list.png" class="thumbnailshadow" >}}

Die in diesem Abschnitt aufgelisteten Artikel werden von der Einstellung `mainSections` abgeleitet, die beliebige Inhaltstypen erlaubt, die Sie auf Ihrer Website verwenden. Wenn Sie beispielsweise Inhaltsabschnitte für _posts_ und _projects_ haben, könnten Sie diese Einstellung auf `["posts", "projects"]` setzen, und alle Artikel in diesen beiden Abschnitten würden verwendet, um die Liste der neuesten Artikel zu füllen. Das Theme erwartet, dass diese Einstellung ein Array ist, also wenn Sie nur einen Abschnitt für all Ihre Inhalte verwenden, sollten Sie dies entsprechend setzen: `["blog"]`.

## Thumbnails

Blowfish wurde so entwickelt, dass es einfach ist, visuelle Unterstützung zu Ihren Artikeln hinzuzufügen. Wenn Sie mit der Hugo-Artikelstruktur vertraut sind, müssen Sie nur eine Bilddatei (fast alle Formate werden unterstützt, aber wir empfehlen `.png` oder `.jpg`) in Ihrem Artikelordner platzieren, die mit `feature*` beginnt. Das ist alles, Blowfish kann dann das Bild sowohl als Thumbnail innerhalb Ihrer Website als auch für <a target="_blank" href="https://oembed.com/">oEmbed</a>-Karten auf sozialen Plattformen verwenden.

[Hier]({{< ref "thumbnails" >}}) finden Sie einen Leitfaden mit mehr Informationen und ein [Beispiel]({{< ref "thumbnail_sample" >}}), wenn Sie ein Beispiel sehen möchten.

## Card-Galerie

Blowfish unterstützt auch die Anzeige von Standard-Artikellisten als Card-Galerien. Sie können dies sowohl für den Bereich der neuesten Artikel auf der Homepage als auch für Artikellisten auf Ihrer gesamten Website konfigurieren. Für die Homepage können Sie `homepage.cardView` und `homepage.cardViewScreenWidth` verwenden; und für Listen verwenden Sie `list.cardView` und `list.cardViewScreenWidth`. Weitere Details finden Sie in der [Konfigurations-Dokumentation]({{< ref "configuration" >}}), und auf der Homepage gibt es eine Live-Demo.
