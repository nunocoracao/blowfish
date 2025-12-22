---
title: "Erste Schritte"
weight: 3
draft: false
description: "Alle in Blowfish verfügbaren Front-Matter-Variablen."
slug: "getting-started"
tags: ["installation", "dokumentation"]
series: ["Dokumentation"]
series_order: 3
---

{{< alert >}}
Dieser Abschnitt setzt voraus, dass Sie das [Blowfish-Theme bereits installiert]({{< ref "docs/installation" >}}) haben.
{{< /alert >}}

</br>
{{< alert "fire" >}}
Wir haben gerade ein CLI-Tool veröffentlicht, das Ihnen beim Einstieg mit Blowfish hilft. Es unterstützt Sie bei Installation und Konfiguration. Installieren Sie das CLI-Tool global mit:
```bash
npx blowfish-tools
```
{{< /alert >}}

Die mit Blowfish gelieferten Konfigurationsdateien enthalten alle möglichen Einstellungen, die das Theme erkennt. Standardmäßig sind viele davon auskommentiert, aber Sie können sie einfach einkommentieren, um eine bestimmte Funktion zu aktivieren oder zu ändern.

## Grundkonfiguration

Bevor Sie Inhalte erstellen, sollten Sie für eine neue Installation einige Dinge festlegen. Beginnen Sie in der Datei `hugo.toml` und setzen Sie die Parameter `baseURL` und `languageCode`. Der `languageCode` sollte auf die Hauptsprache eingestellt werden, in der Sie Ihre Inhalte verfassen werden.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "de"
```

Der nächste Schritt ist die Konfiguration der Spracheinstellungen. Obwohl Blowfish mehrsprachige Setups unterstützt, konfigurieren Sie vorerst nur die Hauptsprache.

Suchen Sie die Datei `languages.en.toml` im Konfigurationsordner. Wenn Ihre Hauptsprache Englisch ist, können Sie diese Datei so verwenden, wie sie ist. Andernfalls benennen Sie sie um, sodass sie den richtigen Sprachcode im Dateinamen enthält. Für Deutsch benennen Sie die Datei beispielsweise in `languages.de.toml` um.

{{< alert >}}
Beachten Sie, dass der Sprachcode im Dateinamen der Sprachkonfiguration mit der Einstellung `languageCode` in `hugo.toml` übereinstimmen sollte.
{{< /alert >}}

```toml
# config/_default/languages.de.toml

title = "Meine tolle Website"

[params.author]
name = "Mein Name"
image = "img/author.jpg"
headline = "Ein grundsätzlich toller Mensch"
bio = "Ein bisschen über mich"
links = [
  { twitter = "https://twitter.com/username" }
]
```

Die `[params.author]`-Konfiguration bestimmt, wie die Autoreninformationen auf der Website angezeigt werden. Das Bild sollte im `assets/`-Ordner der Website platziert werden. Links werden in der Reihenfolge angezeigt, in der sie aufgelistet sind.

Wenn Sie mehr Details benötigen, werden weitere Informationen zu jeder dieser Konfigurationsoptionen im Abschnitt [Konfiguration]({{< ref "configuration" >}}) behandelt.

## Farbschemata

Blowfish wird mit einer Reihe von Farbschemata geliefert. Sie können die integrierten Schemata unten ausprobieren:

{{< theme-switcher >}}

Jedes Farbschema in Blowfish basiert auf einer Drei-Farben-Palette, die konsistent im gesamten Theme verwendet wird. Jede dieser Hauptfarben basiert auf den Zehn-Stufen-Farbpaletten, die in [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) enthalten sind.

Obwohl dies die Standardschemata sind, können Sie auch Ihre eigenen erstellen. Weitere Details finden Sie im Abschnitt [Erweiterte Anpassung]({{< ref "advanced-customisation#colour-schemes" >}}).

## Inhalte organisieren

Standardmäßig zwingt Blowfish Sie nicht, einen bestimmten Inhaltstyp zu verwenden. So können Sie Ihre Inhalte nach Belieben definieren. Sie bevorzugen vielleicht _Seiten_ für eine statische Website, _Beiträge_ für einen Blog oder _Projekte_ für ein Portfolio.

Hier ist ein kurzer Überblick über ein grundlegendes Blowfish-Projekt. Alle Inhalte werden im Ordner `content` platziert:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

Es ist wichtig, ein gutes Verständnis davon zu haben, wie Hugo erwartet, dass Inhalte organisiert werden, da das Theme darauf ausgelegt ist, die Hugo-Seitenbündel voll auszunutzen. Lesen Sie unbedingt die [offizielle Hugo-Dokumentation](https://gohugo.io/content-management/organization/) für weitere Informationen.

Blowfish ist auch flexibel, wenn es um Taxonomien geht. Einige Leute bevorzugen _Tags_ und _Kategorien_, um ihre Inhalte zu gruppieren, andere bevorzugen _Themen_.

Hugo verwendet standardmäßig Posts, Tags und Kategorien, und das funktioniert gut, wenn das ist, was Sie möchten. Wenn Sie dies jedoch anpassen möchten, können Sie dies tun, indem Sie eine `taxonomies.toml`-Konfigurationsdatei erstellen:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

Dies ersetzt die Standard-_Tags_ und _Kategorien_ durch _Themen_. Weitere Informationen zur Benennung von Taxonomien finden Sie in der [Hugo-Taxonomie-Dokumentation](https://gohugo.io/content-management/taxonomies/).

Wenn Sie eine neue Taxonomie erstellen, müssen Sie die Navigationslinks auf der Website anpassen, um auf die richtigen Abschnitte zu verweisen, was unten behandelt wird.

## Menüs

Blowfish hat zwei Menüs, die angepasst werden können, um dem Inhalt und Layout Ihrer Website zu entsprechen. Das `main`-Menü erscheint in der Kopfzeile der Website und das `footer`-Menü erscheint unten auf der Seite, direkt über dem Copyright-Hinweis.

Beide Menüs werden in der Datei `menus.de.toml` konfiguriert. Ähnlich wie bei der Sprachkonfigurationsdatei können Sie diese Datei umbenennen und `de` durch den Sprachcode ersetzen, den Sie verwenden möchten, wenn Sie eine andere Sprache verwenden möchten.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Themen"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Datenschutz"
  url = "https://external-link"
```

Der Parameter `name` gibt den Text an, der im Menülink verwendet wird. Sie können optional auch einen `title` angeben, der das HTML-Title-Attribut für den Link füllt.

Der Parameter `pageRef` ermöglicht es Ihnen, einfach auf Hugo-Inhaltsseiten und Taxonomien zu verweisen. Es ist der schnellste Weg, das Menü zu konfigurieren, da Sie einfach auf jedes Hugo-Inhaltselement verweisen können und es automatisch den korrekten Link erstellt. Um auf externe URLs zu verlinken, kann der Parameter `url` verwendet werden.

Der Parameter `pre` ermöglicht es Ihnen, ein Icon aus [Blowfishs Icon-Set]({{< ref "samples/icons" >}}) im Menüeintrag zu platzieren. Dieser Parameter kann mit dem Parameter `name` oder allein verwendet werden. Wenn Sie mehrere Menüeinträge nur mit Icons verwenden möchten, setzen Sie bitte den Parameter `identifier`, da Hugo sonst den Namenstag als ID verwendet und wahrscheinlich nicht alle Menüeinträge anzeigt.

Menülinks werden vom niedrigsten zum höchsten `weight` sortiert und dann alphabetisch nach `name`.

Beide Menüs sind völlig optional und können auskommentiert werden, wenn sie nicht benötigt werden. Verwenden Sie die in der Datei bereitgestellte Vorlage als Leitfaden.

### Verschachtelte Menüs

Das Theme unterstützt auch verschachtelte Menüs. Um sie zu verwenden, müssen Sie nur einen übergeordneten Eintrag in `menu.toml` definieren und seine Untermenüs mit dem Parameter `parent` referenzieren. Alle Eigenschaften können für Untermenüs verwendet werden. `pageRef` und `url` können auch im übergeordneten Eintrag verwendet werden. Verschachtelte Menüs sind nur im Hauptmenü verfügbar, nicht für die Fußzeile.

```toml
# config/_default/menus.toml

[[main]]
  name = "Übergeordnet"
  weight = 20

[[main]]
  name = "Untermenü 1"
  parent = "Übergeordnet"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "Untermenü 2"
  parent = "Übergeordnet"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "Untermenü 3"
  parent = "Übergeordnet"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Unternavigationsmenü

Zusätzlich können Sie auch ein Unternavigationsmenü konfigurieren. Definieren Sie einfach neue Menüeinträge als `subnavigation` in `menus.toml`.
Dies rendert eine zweite Zeile mit Unterkategorien unter dem Hauptkopfzeilenmenü.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "Ein interessantes Thema"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "Meine tolle Kategorie"
  pageRef = "categories/awesome"
  weight = 20
```

Der Standard-`name` ist der `pageRef` in Titelschreibweise.

## Thumbnails & Hintergründe

Blowfish wurde so entwickelt, dass es einfach ist, visuelle Unterstützung zu Ihren Artikeln hinzuzufügen. Wenn Sie mit der Hugo-Artikelstruktur vertraut sind, müssen Sie nur eine Bilddatei (fast alle Formate werden unterstützt, aber wir empfehlen `.png` oder `.jpg`) in Ihrem Artikelordner platzieren, die mit `feature*` beginnt. Das ist alles, Blowfish kann dann das Bild sowohl als Thumbnail innerhalb Ihrer Website als auch für <a target="_blank" href="https://oembed.com/">oEmbed</a>-Karten auf sozialen Plattformen verwenden.

[Hier]({{< ref "thumbnails" >}}) finden Sie auch einen Leitfaden mit mehr Informationen und ein [Beispiel]({{< ref "thumbnail_sample" >}}), wenn Sie sehen möchten, wie Sie es machen können.

Zusätzlich unterstützt Blowfish auch Hintergrund-Heldenbilder in Artikeln und Listen. Um ein anderes Bild als das vorgestellte zu verwenden, fügen Sie eine Bilddatei hinzu, deren Name mit `background*` beginnt.

## Detaillierte Konfiguration

Die obigen Schritte sind die Mindestkonfiguration. Wenn Sie jetzt `hugo server` ausführen, wird Ihnen eine leere Blowfish-Website präsentiert. Die detaillierte Konfiguration wird im Abschnitt [Konfiguration]({{< ref "configuration" >}}) behandelt.
