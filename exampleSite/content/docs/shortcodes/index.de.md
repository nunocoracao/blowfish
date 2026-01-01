---
title: "Shortcodes"
weight: 6
draft: false
description: "Alle verfügbaren Shortcodes in Blowfish."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "dokumentation"]
series: ["Dokumentation"]
series_order: 8
---

Zusätzlich zu allen [Standard-Hugo-Shortcodes](https://gohugo.io/content-management/shortcodes/) fügt Blowfish einige zusätzliche für erweiterte Funktionalität hinzu.

## Alert

`alert` gibt seinen Inhalt als stilisierte Nachrichtenbox innerhalb Ihres Artikels aus. Es ist nützlich, um auf wichtige Informationen aufmerksam zu machen, die der Leser nicht übersehen sollte.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `icon` | **Optional.** Das Symbol, das auf der linken Seite angezeigt wird.<br>**Standard:** `triangle-exclamation` (Weitere Details zur Verwendung von Symbolen finden Sie im [Icon-Shortcode](#icon).) |
| `iconColor` | **Optional.** Die Farbe für das Symbol im einfachen CSS-Stil.<br>Kann entweder Hex-Werte (`#FFFFFF`) oder Farbnamen (`white`) sein<br>Standardmäßig basierend auf dem aktuellen Farbschema gewählt. |
| `cardColor` | **Optional.** Die Farbe für den Kartenhintergrund im einfachen CSS-Stil.<br>Kann entweder Hex-Werte (`#FFFFFF`) oder Farbnamen (`white`) sein<br>Standardmäßig basierend auf dem aktuellen Farbschema gewählt. |
| `textColor` | **Optional.** Die Farbe für den Text im einfachen CSS-Stil.<br>Kann entweder Hex-Werte (`#FFFFFF`) oder Farbnamen (`white`) sein<br>Standardmäßig basierend auf dem aktuellen Farbschema gewählt. |
<!-- prettier-ignore-end -->

Die Eingabe erfolgt in Markdown, sodass Sie sie nach Belieben formatieren können.

**Beispiel 1:** Keine Parameter

```md
{{</* alert */>}}
**Warnung!** Diese Aktion ist destruktiv!
{{</* /alert */>}}
```

{{< alert >}}
**Warnung!** Diese Aktion ist destruktiv!
{{< /alert >}}

**Beispiel 2:** Unbenannter Parameter

```md
{{</* alert "twitter" */>}}
Vergiss nicht, mir auf [Twitter](https://twitter.com/nunocoracao) zu folgen.
{{</* /alert */>}}
```

{{< alert "twitter" >}}
Vergiss nicht, mir auf [Twitter](https://twitter.com/nunocoracao) zu folgen.
{{< /alert >}}

**Beispiel 3:** Benannte Parameter

```md
{{</* alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" */>}}
Dies ist ein Fehler!
{{</* /alert */>}}
```

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
Dies ist ein Fehler!
{{< /alert >}}

<br/><br/><br/>

## Admonition

Admonitions ermöglichen es Ihnen, auffällige Hinweisboxen in Ihren Inhalt einzufügen.

Admonitions dienen einem ähnlichen Zweck wie der Alert-Shortcode, werden jedoch über Hugo-Render-Hooks implementiert. Der Hauptunterschied liegt in der Syntax: Admonitions verwenden Markdown-Syntax, was sie portabler über verschiedene Plattformen macht, während Shortcodes Hugo-spezifisch sind. Die Syntax ähnelt GitHub-Alerts:

```md
> [!NOTE]
> Eine Admonition vom Typ Note.

> [!TIP]+ Benutzerdefinierter Titel
> Eine einklappbare Admonition mit benutzerdefiniertem Titel.
```

> [!NOTE]
> Eine Admonition vom Typ Note.

> [!TIP]+ Benutzerdefinierter Titel
> Eine einklappbare Admonition mit benutzerdefiniertem Titel.

Das Alert-Zeichen (`+` oder `-`) ist optional, um zu steuern, ob die Admonition eingeklappt ist oder nicht. Beachten Sie, dass das Alert-Zeichen nur mit Obsidian kompatibel ist.

> [!INFO]- Unterstützte Typen
> Gültige Admonition-Typen umfassen [GitHub-Alert-Typen](https://github.blog/changelog/2023-12-14-new-markdown-extension-alerts-provide-distinctive-styling-for-significant-content/) und [Obsidian-Callout-Typen](https://help.obsidian.md/callouts). Die Typen sind nicht case-sensitiv.
>
> **GitHub-Typen:** `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`
> **Obsidian-Typen:** `note`, `abstract`, `info`, `todo`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`

<br/><br/><br/>

## Article

`Article` bettet einen einzelnen Artikel in eine Markdown-Datei ein. Der `link` zur Datei sollte der `.RelPermalink` der einzubettenden Datei sein. Beachten Sie, dass der Shortcode nichts anzeigt, wenn er auf seine übergeordnete Seite verweist. _Hinweis: Wenn Sie Ihre Website in einem Unterordner wie Blowfish ausführen (z.B. /blowfish/), fügen Sie diesen Pfad bitte in den Link ein._

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **Erforderlich.** Der `.RelPermalink` zum Zielartikel. |
| `showSummary` | **Optional.** Ein boolescher Wert, der angibt, ob die Artikelzusammenfassung angezeigt werden soll. Wenn nicht gesetzt, wird die Standardkonfiguration der Website verwendet. |
| `compactSummary` | **Optional.** Ein boolescher Wert, der angibt, ob die Zusammenfassung im kompakten Modus angezeigt werden soll. Standard ist false. |
<!-- prettier-ignore-end -->

**Beispiel:**

```md
{{</* article link="/docs/welcome/" showSummary=true compactSummary=true */>}}
```

{{< article link="/docs/welcome/" showSummary=true compactSummary=true >}}

<br/><br/><br/>

## Badge

`badge` gibt eine stilisierte Badge-Komponente aus, die für die Anzeige von Metadaten nützlich ist.

**Beispiel:**

```md
{{</* badge */>}}
Neuer Artikel!
{{</* /badge */>}}
```

{{< badge >}}
Neuer Artikel!
{{< /badge >}}

<br/><br/><br/>

## Button

`button` gibt eine stilisierte Button-Komponente aus, die verwendet werden kann, um eine primäre Aktion hervorzuheben. Es hat drei optionale Variablen `href`, `target` und `rel`, die verwendet werden können, um die URL, das Ziel und die Beziehung des Links anzugeben.

**Beispiel:**

```md
{{</* button href="#button" target="_self" */>}}
Handlungsaufforderung
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Handlungsaufforderung
{{< /button >}}

<br/><br/><br/>

## Carousel

`carousel` wird verwendet, um mehrere Bilder auf eine interaktive und visuell ansprechende Weise zu präsentieren. Dies ermöglicht es dem Benutzer, durch mehrere Bilder zu gleiten, während nur der vertikale Platz eines einzelnen Bildes beansprucht wird. Alle Bilder werden mit der vollen Breite der übergeordneten Komponente und dem von Ihnen festgelegten Seitenverhältnis angezeigt, mit einem Standard von `16:9`.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `images` | **Erforderlich.** Ein Regex-String zum Abgleichen von Bildnamen oder URLs. |
| `aspectRatio` | **Optional.** Das Seitenverhältnis für das Karussell. Standardmäßig auf `16-9` eingestellt. |
| `interval` | **Optional.** Das Intervall für das automatische Scrollen, angegeben in Millisekunden. Standard ist `2000` (2s) |
<!-- prettier-ignore-end -->

**Beispiel 1:** 16:9 Seitenverhältnis und ausführliche Bilderliste

```md
{{</* carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" */>}}
```

{{< carousel images="{https://cdn.pixabay.com/photo/2016/12/11/12/02/mountains-1899264_960_720.jpg,gallery/03.jpg,gallery/01.jpg,gallery/02.jpg,gallery/04.jpg}" >}}

**Beispiel 2:** 21:9 Seitenverhältnis und Regex-Bilderliste

```md
{{</* carousel images="gallery/*" aspectRatio="21-9" interval="2500" */>}}
```

{{< carousel images="gallery/*" aspectRatio="21-9" interval="2500" >}}

<br/><br/><br/>

## Chart

`chart` verwendet die Chart.js-Bibliothek, um Diagramme in Artikel mit einfach strukturierten Daten einzubetten. Es unterstützt eine Reihe von [verschiedenen Diagrammstilen](https://www.chartjs.org/docs/latest/samples/) und alles kann innerhalb des Shortcodes konfiguriert werden. Geben Sie einfach die Diagrammparameter zwischen den Shortcode-Tags an und Chart.js erledigt den Rest.

Für Details zur Syntax und unterstützten Diagrammtypen siehe die [offizielle Chart.js-Dokumentation](https://www.chartjs.org/docs/latest/general/).

**Beispiel:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomate', 'Blaubeere', 'Banane', 'Limette', 'Orange'],
  datasets: [{
    label: '# der Stimmen',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

Weitere Chart.js-Beispiele finden Sie auf der Seite [Diagramm-Beispiele]({{< ref "charts" >}}).

<br/><br/><br/>

## Code Importer

Dieser Shortcode ermöglicht das einfache Importieren von Code aus externen Quellen, ohne kopieren und einfügen zu müssen.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Erforderlich** URL zu einer extern gehosteten Code-Datei.     |
| `type`    | Code-Typ für die Syntaxhervorhebung.                 |
| `startLine` | **Optional** Die Zeilennummer, ab der der Import beginnen soll.    |
| `endLine` | **Optional** Die Zeilennummer, bei der der Import enden soll.        |

<!-- prettier-ignore-end -->

**Beispiel:**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" type="go" >}}

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18" */>}}

```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/config/_default/hugo.toml" type="toml" startLine="11" endLine="18">}}

<br/><br/>

## Codeberg Card

`codeberg` ermöglicht es Ihnen, schnell ein Codeberg-Repository über die Codeberg-API zu verlinken und dabei Echtzeit-Updates zu Statistiken wie Stars und Forks bereitzustellen.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] Codeberg-Repo im Format `benutzername/repo` |
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* codeberg repo="forgejo/forgejo" */>}}
```

{{< codeberg repo="forgejo/forgejo" >}}

<br/><br/><br/>

## Figure

Blowfish enthält einen `figure`-Shortcode zum Hinzufügen von Bildern zu Inhalten. Der Shortcode ersetzt die grundlegende Hugo-Funktionalität, um zusätzliche Leistungsvorteile zu bieten.

Wenn ein bereitgestelltes Bild eine Seitenressource ist, wird es mit Hugo Pipes optimiert und skaliert, um Bilder bereitzustellen, die für verschiedene Geräteauflösungen geeignet sind. Wenn ein statisches Asset oder eine URL zu einem externen Bild angegeben wird, wird es unverändert ohne Bildverarbeitung durch Hugo eingefügt.

Der `figure`-Shortcode akzeptiert sechs Parameter:

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `src` | **Erforderlich.** Der lokale Pfad/Dateiname oder die URL des Bildes. Bei Angabe eines Pfads und Dateinamens versucht das Theme, das Bild in folgender Reihenfolge zu finden: Zuerst als [Seitenressource](https://gohugo.io/content-management/page-resources/), die mit der Seite gebündelt ist; dann als Asset im Verzeichnis `assets/`; und schließlich als statisches Bild im Verzeichnis `static/`. |
| `alt` | [Alternativer Textbeschreibung](https://moz.com/learn/seo/alt-text) für das Bild. |
| `caption` | Markdown für die Bildunterschrift, die unter dem Bild angezeigt wird. |
| `class` | Zusätzliche CSS-Klassen, die auf das Bild angewendet werden sollen. |
| `href` | URL, mit der das Bild verlinkt werden soll. |
| `target` | Das Zielattribut für die `href`-URL. |
| `nozoom` | `nozoom=true` deaktiviert die Bild-"Zoom"-Funktionalität. Dies ist besonders nützlich in Kombination mit einem `href`-Link. |
| `default` | Spezieller Parameter, um zum Standard-Hugo-`figure`-Verhalten zurückzukehren. Geben Sie einfach `default=true` an und verwenden Sie dann die normale [Hugo-Shortcode-Syntax](https://gohugo.io/content-management/shortcodes/#figure). |
<!-- prettier-ignore-end -->

Blowfish unterstützt auch die automatische Konvertierung von Bildern, die mit Standard-Markdown-Syntax eingefügt werden. Verwenden Sie einfach das folgende Format und das Theme erledigt den Rest:

```md
![Alt-Text](image.jpg "Bildunterschrift")
```

**Beispiel:**

```md
{{</* figure
    src="abstract.jpg"
    alt="Abstraktes lila Kunstwerk"
    caption="Foto von [Jr Korpa](https://unsplash.com/@jrkorpa) auf [Unsplash](https://unsplash.com/)"
    */>}}

<!-- ODER -->

![Abstraktes lila Kunstwerk](abstract.jpg "Foto von [Jr Korpa](https://unsplash.com/@jrkorpa) auf [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Foto von [Jr Korpa](https://unsplash.com/@jrkorpa) auf [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

## Forgejo Card

`forgejo` ermöglicht es Ihnen, schnell ein Forgejo-Repository über die Forgejo-API zu verlinken und dabei Echtzeit-Updates zu Statistiken wie Stars und Forks bereitzustellen.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] Forgejo-Repo im Format `benutzername/repo`|
| `server`  | [String] Server-URL wie `https://v11.next.forgejo.org`|
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" */>}}
```

{{< forgejo server="https://v11.next.forgejo.org" repo="a/mastodon" >}}

<br/><br/><br/>

## Gallery

`gallery` ermöglicht es Ihnen, mehrere Bilder auf einmal in einer responsiven Weise mit vielfältigeren und interessanteren Layouts zu präsentieren.

Um Bilder zur Galerie hinzuzufügen, verwenden Sie `img`-Tags für jedes Bild und fügen Sie `class="grid-wXX"` hinzu, damit die Galerie die Spaltenbreite für jedes Bild identifizieren kann. Die standardmäßig verfügbaren Breiten beginnen bei 10% und gehen bis zu 100% in 5%-Schritten. Um beispielsweise die Breite auf 65% zu setzen, setzen Sie die Klasse auf `grid-w65`. Zusätzlich sind auch Breiten für 33% und 66% verfügbar, um Galerien mit 3 Spalten zu erstellen. Sie können auch Tailwinds responsive Indikatoren nutzen, um ein responsives Raster zu haben.

**Beispiel 1: Normale Galerie**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}

<br/><br/><br/>

**Beispiel 2: Responsive Galerie**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}

<br/><br/><br/>

## Gist

Der `gist`-Shortcode ermöglicht es Ihnen, ein GitHub Gist direkt in Ihren Inhalt einzubetten, indem Sie den Gist-Benutzer, die ID und optional eine bestimmte Datei angeben.

| Parameter      | Beschreibung                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | [String] GitHub-Benutzername                                           |
| `[1]`          | [String] Gist-ID                                                   |
| `[2]` (optional)| [String] Dateiname innerhalb des Gists zum Einbetten (optional)             |

**Beispiel 1: Gesamtes Gist einbetten**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
````

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**Beispiel 2: Bestimmte Datei aus Gist einbetten**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

## Gitea Card

`gitea` ermöglicht es Ihnen, schnell ein Gitea-Repository über die Gitea-API zu verlinken und dabei Echtzeit-Updates zu Statistiken wie Stars und Forks bereitzustellen.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                           |
| --------- | ----------------------------------------------------- |
| `repo`    | [String] Gitea-Repo im Format `benutzername/repo`  |
| `server`  | [String] Server-URL wie `https://git.fsfe.org`       |
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" */>}}
```

{{< gitea server="https://git.fsfe.org" repo="FSFE/fsfe-website" >}}

<br/><br/><br/>

## GitHub Card

`github` ermöglicht es Ihnen, schnell ein GitHub-Repository zu verlinken und dabei Statistiken wie die Anzahl der Stars und Forks in Echtzeit anzuzeigen und zu aktualisieren.

<!-- prettier-ignore-start -->
| Parameter       | Beschreibung                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | [String] GitHub-Repo im Format `benutzername/repo`         |
| `showThumbnail` | **Optional** [boolean] Zeigt ein Thumbnail für das Repository an |
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* github repo="nunocoracao/blowfish" showThumbnail=true */>}}
```

{{< github repo="nunocoracao/blowfish" showThumbnail=true >}}

<br/><br/><br/>

## GitLab Card

`gitlab` ermöglicht es Ihnen, schnell ein GitLab-Projekt (GitLabs Bezeichnung für Repository) zu verlinken.
Es zeigt Echtzeit-Statistiken wie die Anzahl der Stars und Forks an.
Im Gegensatz zu `github` kann es nicht die Hauptprogrammiersprache eines Projekts anzeigen.
Schließlich kann eine benutzerdefinierte GitLab-Instanz-URL angegeben werden, solange der Endpunkt `api/v4/projects/` verfügbar ist, was diesen Shortcode mit den meisten selbstgehosteten/Enterprise-Deployments kompatibel macht.

<!-- prettier-ignore-start -->
| Parameter   | Beschreibung                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `projectID` | [String] GitLab numerische Projekt-ID                                       |
| `baseURL`   | [String] optionale GitLab-Instanz-URL, Standard ist `https://gitlab.com/` |
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* gitlab projectID="278964" */>}}
```

{{< gitlab projectID="278964" >}}

<br/><br/><br/>

## Hugging Face Card

`huggingface` ermöglicht es Ihnen, schnell ein Hugging Face-Modell oder -Dataset zu verlinken und dabei Echtzeit-Informationen wie die Anzahl der Likes und Downloads sowie Typ und Beschreibung anzuzeigen.

| Parameter  | Beschreibung                                                    |
|------------|----------------------------------------------------------------|
| `model`    | [String] Hugging Face-Modell im Format `benutzername/modell` |
| `dataset`  | [String] Hugging Face-Dataset im Format `benutzername/dataset` |

**Hinweis:** Verwenden Sie entweder den Parameter `model` oder `dataset`, nicht beide.

**Beispiel 1 (Modell):**

```md
{{</* huggingface model="google-bert/bert-base-uncased" */>}}
```

{{< huggingface model="google-bert/bert-base-uncased" >}}

**Beispiel 2 (Dataset):**

```md
{{</* huggingface dataset="stanfordnlp/imdb" */>}}
```

{{< huggingface dataset="stanfordnlp/imdb" >}}

<br/><br/><br/>

## Icon

`icon` gibt ein SVG-Symbol aus und nimmt den Symbolnamen als einzigen Parameter. Das Symbol wird skaliert, um der aktuellen Textgröße zu entsprechen.

**Beispiel:**

```md
{{</* icon "github" */>}}
```

**Ausgabe:** {{< icon "github" >}}

Symbole werden mit Hugo-Pipelines gefüllt, was sie sehr flexibel macht. Blowfish enthält eine Reihe von integrierten Symbolen für soziale Netzwerke, Links und andere Zwecke. Auf der Seite [Symbol-Beispiele]({{< ref "samples/icons" >}}) finden Sie eine vollständige Liste der unterstützten Symbole.

Benutzerdefinierte Symbole können hinzugefügt werden, indem Sie Ihre eigenen Symbol-Assets im Verzeichnis `assets/icons/` Ihres Projekts bereitstellen. Das Symbol kann dann im Shortcode mit dem SVG-Dateinamen ohne die Erweiterung `.svg` referenziert werden.

Symbole können auch in Partials verwendet werden, indem Sie das [Icon-Partial]({{< ref "partials#icon" >}}) aufrufen.

<br/><br/><br/>

## KaTeX

Der `katex`-Shortcode kann verwendet werden, um mathematische Ausdrücke zum Artikelinhalt hinzuzufügen, indem das KaTeX-Paket verwendet wird. Für die verfügbare Syntax siehe die Online-Referenz der [unterstützten TeX-Funktionen](https://katex.org/docs/supported.html).

Um mathematische Ausdrücke in einen Artikel einzufügen, platzieren Sie den Shortcode einfach irgendwo im Inhalt. Er muss nur einmal pro Artikel eingefügt werden und KaTeX rendert automatisch jedes Markup auf dieser Seite. Sowohl Inline- als auch Block-Notation werden unterstützt.

Inline-Notation kann durch Einschließen des Ausdrucks in `\(` und `\)` Trennzeichen erzeugt werden. Alternativ kann Block-Notation mit `$$` Trennzeichen erzeugt werden.

**Beispiel:**

```md
{{</* katex */>}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

{{< katex >}}
\(f(a,b,c) = (a^2+b^2+c^2)^3\)

Weitere Beispiele finden Sie auf der Seite [Mathematische Notation-Beispiele]({{< ref "mathematical-notation" >}}).

<br/><br/><br/>

## Keyword

Die `keyword`-Komponente kann verwendet werden, um bestimmte wichtige Wörter oder Phrasen visuell hervorzuheben, z.B. berufliche Fähigkeiten usw. Der `keywordList`-Shortcode kann verwendet werden, um mehrere `keyword`-Elemente zu gruppieren. Jedes Element kann die folgenden Eigenschaften haben.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                             |
| --------- | --------------------------------------- |
| `icon`    | Optionales Symbol, das im Keyword verwendet werden soll |
<!-- prettier-ignore-end -->

Die Eingabe erfolgt in Markdown, sodass Sie sie nach Belieben formatieren können.

**Beispiel 1:**

```md
{{</* keyword */>}} *Super* Fähigkeit {{</* /keyword */>}}
```

{{< keyword >}} _Super_ Fähigkeit {{< /keyword >}}

**Beispiel 2:**

```md
{{</* keywordList */>}}
{{</* keyword icon="github" */>}} Lorem ipsum dolor. {{</* /keyword */>}}
{{</* keyword icon="code" */>}} **Wichtige** Fähigkeit {{</* /keyword */>}}
{{</* /keywordList */>}}

{{</* keyword */>}} *Eigenständige* Fähigkeit {{</* /keyword */>}}
```

{{< keywordList >}}
{{< keyword icon="github" >}} Lorem ipsum dolor {{< /keyword >}}
{{< keyword icon="code" >}} **Wichtige** Fähigkeit {{< /keyword >}}
{{< /keywordList >}}
{{< keyword >}} _Eigenständige_ Fähigkeit {{< /keyword >}}

<br/><br/><br/>

## Lead

`lead` wird verwendet, um den Anfang eines Artikels hervorzuheben. Es kann verwendet werden, um eine Einleitung zu gestalten oder um auf eine wichtige Information aufmerksam zu machen. Wickeln Sie einfach jeden Markdown-Inhalt in den `lead`-Shortcode ein.

**Beispiel:**

```md
{{</* lead */>}}
Wenn das Leben dir Zitronen gibt, mach Limonade daraus.
{{</* /lead */>}}
```

{{< lead >}}
Wenn das Leben dir Zitronen gibt, mach Limonade daraus.
{{< /lead >}}

<br/><br/><br/>

## List

`List` zeigt eine Liste der neuesten Artikel an. Dieser Shortcode erfordert einen Grenzwert, um die Liste zu beschränken. Zusätzlich unterstützt er ein `where` und einen `value`, um Artikel nach ihren Parametern zu filtern. Beachten Sie, dass dieser Shortcode seine übergeordnete Seite nicht anzeigt, sie aber für den Grenzwert zählt.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `limit` | **Erforderlich.** Die Anzahl der anzuzeigenden neuesten Artikel. |
| `title` | Optionaler Titel für die Liste, Standard ist `Recent` |
| `cardView` | Optionale Kartenansicht für die Liste aktiviert, Standard ist `false` |
| `where` | Die Variable, die für die Abfrage von Artikeln verwendet werden soll, z.B. `Type` |
| `value` | Der Wert, der dem in `where` definierten Parameter entsprechen muss, z.B. für `where` == `Type` könnte ein gültiger Wert `sample` sein |

{{< alert >}}
Die Werte `where` und `value` werden in der folgenden Abfrage `where .Site.RegularPages $where $value` im Code des Shortcodes verwendet. Weitere Informationen zu den verfügbaren Parametern finden Sie in den [Hugo-Dokumenten](https://gohugo.io/methods/page/).
{{</ alert >}}

<!-- prettier-ignore-end -->

**Beispiel #1:**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**Beispiel #2:**

```md
{{</* list title="Beispiele" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}

<br/><br/><br/>

## LTR/RTL

`ltr` und `rtl` ermöglichen es Ihnen, Ihre Inhalte zu mischen. Viele Benutzer von RTL-Sprachen möchten Teile des Inhalts in LTR einfügen. Mit diesem Shortcode können Sie das tun, und durch die Verwendung von `%` als äußerstes Trennzeichen im Shortcode [Hugo-Shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown) wird jeder Markdown darin normal gerendert.

**Beispiel:**

```md
- Dies ist eine Markdown-Liste.
- Standardmäßig LTR-Richtung
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- Dies ist eine Markdown-Liste.
- Standardmäßig LTR-Richtung
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## Markdown Importer

Dieser Shortcode ermöglicht es Ihnen, Markdown-Dateien aus externen Quellen zu importieren. Dies ist nützlich, um Inhalte aus anderen Repositories oder Websites einzubinden, ohne den Inhalt kopieren und einfügen zu müssen.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Erforderlich** URL zu einer extern gehosteten Markdown-Datei. |

<!-- prettier-ignore-end -->

**Beispiel:**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}

```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

## Mermaid

`mermaid` ermöglicht es Ihnen, detaillierte Diagramme und Visualisierungen mit Text zu zeichnen. Es verwendet Mermaid im Hintergrund und unterstützt eine große Vielfalt an Diagrammen, Charts und anderen Ausgabeformaten.

Schreiben Sie einfach Ihre Mermaid-Syntax innerhalb des `mermaid`-Shortcodes und lassen Sie das Plugin den Rest erledigen.

Für Details zur Syntax und unterstützten Diagrammtypen siehe die [offizielle Mermaid-Dokumentation](https://mermaid-js.github.io/).

**Beispiel:**

```md
{{</* mermaid */>}}
graph LR;
A[Zitronen]-->B[Limonade];
B-->C[Gewinn]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

Weitere Mermaid-Beispiele finden Sie auf der Seite [Diagramme und Flussdiagramme-Beispiele]({{< ref "diagrams-flowcharts" >}}).

<br/><br/><br/>

## Swatches

`swatches` gibt eine Reihe von bis zu drei verschiedenen Farben aus, um Farbelelemente wie eine Farbpalette zu präsentieren. Dieser Shortcode nimmt die `HEX`-Codes jeder Farbe und erstellt die visuellen Elemente für jede.

**Beispiel**

```md
{{</* swatches "#64748b" "#3b82f6" "#06b6d4" */>}}
```

**Ausgabe**
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

<br/><br/><br/>

## Tabs

Der `tabs`-Shortcode wird häufig verwendet, um verschiedene Varianten eines bestimmten Schritts zu präsentieren. Zum Beispiel kann er verwendet werden, um zu zeigen, wie VS Code auf verschiedenen Plattformen installiert wird.

**Beispiel**

`````md
{{</* tabs */>}}

    {{</* tab label="Windows" */>}}
    Installation mit Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    oder Installation mit WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{</* /tab */>}}

    {{</* tab label="macOS" */>}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{</* /tab */>}}

    {{</* tab label="Linux" */>}}
    Siehe [Dokumentation](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{</* /tab */>}}

{{</* /tabs */>}}
`````

**Ausgabe**

{{< tabs >}}

    {{< tab label="Windows" >}}
    Installation mit Chocolatey:

    ```pwsh
    choco install vscode.install
    ```

    oder Installation mit WinGet

    ```pwsh
    winget install -e --id Microsoft.VisualStudioCode
    ```
    {{< /tab >}}

    {{< tab label="macOS" >}}
    ```bash
    brew install --cask visual-studio-code
    ```
    {{< /tab >}}

    {{< tab label="Linux" >}}
    Siehe [Dokumentation](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux).
    {{< /tab >}}

{{< /tabs >}}

<br/><br/><br/>

## Timeline

Die `timeline` erstellt eine visuelle Zeitleiste, die für verschiedene Anwendungsfälle verwendet werden kann, z.B. berufliche Erfahrung, Projektmeilensteine usw. Der `timeline`-Shortcode basiert auf dem `timelineItem`-Unter-Shortcode, um jedes Element innerhalb der Hauptzeitleiste zu definieren. Jedes Element kann die folgenden Eigenschaften haben.

<!-- prettier-ignore-start -->
| Parameter   | Beschreibung                                  |
| ----------- | -------------------------------------------- |
| `md`        | Inhalt als Markdown rendern (true/false)  |
| `icon`      | Das Symbol, das in den Zeitleisten-Visuals verwendet werden soll  |
| `header`    | Überschrift für jeden Eintrag                        |
| `badge`     | Text, der im Badge oben rechts platziert werden soll     |
| `subheader` | Unterüberschrift des Eintrags                            |

<!-- prettier-ignore-end -->

**Beispiel:**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="Überschrift" badge="Badge-Test" subheader="Unterüberschrift" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}


{{</* timelineItem icon="code" header="Eine weitere großartige Überschrift" badge="Datum - heute" subheader="Großartige Unterüberschrift" */>}}
Mit HTML-Code
<ul>
  <li>Kaffee</li>
  <li>Tee</li>
  <li>Milch</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="FANTASTISCH" */>}}
Mit anderen Shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Eine weitere großartige Überschrift"*/>}}
{{</* github repo="nunocoracao/blowfish" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader">}}
Mit HTML-Code
<ul>
  <li>Kaffee</li>
  <li>Tee</li>
  <li>Milch</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
Mit anderen Shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{< /gallery >}}
{{</ timelineItem >}}
{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="nunocoracao/blowfish" >}}
{{</ timelineItem >}}
{{</ timeline >}}

<br/><br/><br/>

## TypeIt

[TypeIt](https://www.typeitjs.com) ist das vielseitigste JavaScript-Tool zur Erstellung von Schreibmaschineneffekten auf dem Planeten. Mit einer einfachen Konfiguration können Sie einzelne oder mehrere Strings eingeben, die Zeilen umbrechen, sich gegenseitig löschen und ersetzen, und es kann sogar Strings mit komplexem HTML verarbeiten.

Blowfish implementiert eine Teilmenge der TypeIt-Funktionen mit einem `Shortcode`. Schreiben Sie Ihren Text innerhalb des `typeit`-Shortcodes und verwenden Sie die folgenden Parameter, um das gewünschte Verhalten zu konfigurieren.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `tag` | [String] `html`-Tag, das zum Rendern der Strings verwendet wird. |
| `classList` | [String] Liste von `css`-Klassen, die auf das `html`-Element angewendet werden sollen. |
| `initialString` | [String] Anfangsstring, der geschrieben erscheint und ersetzt wird. |
| `speed` | [number] Tippgeschwindigkeit, gemessen in Millisekunden zwischen jedem Schritt. |
| `lifeLike` | [boolean] Macht das Tipptempo unregelmäßig, als ob eine echte Person es tut. |
| `startDelay` | [number] Die Zeit, bevor das Plugin nach der Initialisierung mit dem Tippen beginnt. |
| `breakLines` | [boolean] Ob mehrere Strings übereinander gedruckt werden (true) oder ob sie gelöscht und voneinander ersetzt werden (false). |
| `waitUntilVisible` | [boolean] Bestimmt, ob die Instanz beim Laden beginnt oder erst, wenn das Zielelement im Viewport sichtbar wird. Standard ist `true` |
| `loop` | [boolean] Ob Ihre Strings nach Abschluss kontinuierlich wiederholt werden |

<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* typeit */>}}
Lorem ipsum dolor sit amet
{{</* /typeit */>}}
```

{{< typeit >}}
Lorem ipsum dolor sit amet
{{< /typeit >}}

**Beispiel 2:**

```md
{{</* typeit
  tag=h1
  lifeLike=true
*/>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{</* /typeit */>}}
```

{{< typeit
  tag=h1
  lifeLike=true
>}}
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
{{< /typeit >}}

**Beispiel 3:**

```md
{{</* typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
*/>}}
"Ehrlich gesagt, meine Liebe, das ist mir egal." Vom Winde verweht (1939)
"Ich werde ihm ein Angebot machen, das er nicht ablehnen kann." Der Pate (1972)
"Toto, ich habe das Gefühl, wir sind nicht mehr in Kansas." Der Zauberer von Oz (1939)
{{</* /typeit */>}}
```

{{< typeit
  tag=h3
  speed=50
  breakLines=false
  loop=true
>}}
"Frankly, my dear, I don't give a damn." Gone with the Wind (1939)
"I'm gonna make him an offer he can't refuse." The Godfather (1972)
"Toto, I've a feeling we're not in Kansas anymore." The Wizard of Oz (1939)
{{< /typeit >}}

<br/><br/><br/>

## Video

Blowfish enthält einen `video`-Shortcode, um lokale oder externe Videos in Inhalte einzubetten. Der Shortcode rendert einen `<figure>`-Wrapper mit einem responsiven Videoplayer und einer optionalen Bildunterschrift.

Der `video`-Shortcode akzeptiert die folgenden Parameter:

<!-- prettier-ignore-start -->
| Parameter | Beschreibung |
| --- | --- |
| `src` | **Erforderlich.** Video-URL oder lokaler Pfad. Lokale Suchreihenfolge: Seitenressource → `assets/` → `static/`. |
| `poster` | Optionales Posterbild (URL oder lokaler Pfad). Wenn nicht gesetzt, versucht der Shortcode ein gleichnamiges Bild im Page Bundle zu finden. |
| `caption` | Optionale Markdown-Bildunterschrift unter dem Video. |
| `autoplay` | `true`/`false`. Aktiviert Autoplay, wenn `true`. Standard: `false`. |
| `loop` | `true`/`false`. Wiederholt bei `true`. Standard: `false`. |
| `muted` | `true`/`false`. Stumm, wenn `true`. Standard: `false`. |
| `controls` | `true`/`false`. Zeigt die standardmäßigen Browser-Steuerelemente, wenn `true`. Standard: `true`. |
| `playsinline` | `true`/`false`. Inline-Wiedergabe auf Mobilgeräten bei `true`. Standard: `true`. |
| `preload` | `metadata` (lädt Infos), `none` (spart Bandbreite) oder `auto` (lädt mehr vor). Standard: `metadata`. |
| `start` | Optionale Startzeit in Sekunden. |
| `end` | Optionale Endzeit in Sekunden. |
| `ratio` | Reserviertes Seitenverhältnis für den Player. Unterstützt `16/9`, `4/3`, `1/1` oder benutzerdefiniertes `W/H`. Standard: `16/9`. |
| `fit` | Wie das Video in das Verhältnis passt: `contain` (kein Zuschnitt), `cover` (füllend zuschneiden), `fill` (strecken). Standard: `contain`. |
<!-- prettier-ignore-end -->

Wenn der Browser das Video nicht abspielen kann, zeigt der Player einen kurzen englischen Hinweis mit einem Download-Link.

**Beispiel:**

```md
{{</* video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Public-Domain-Demo** — CC0-Video und Poster."
    loop=true
    muted=true
*/>}}
```

{{< video
  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
  caption="**Public-Domain-Demo** — CC0-Video und Poster."
  loop=true
  muted=true
>}}

<br/><br/><br/>

## Youtube Lite

Eine Verknüpfung zum Einbetten von YouTube-Videos mit der [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)-Bibliothek. Diese Bibliothek ist eine leichtgewichtige Alternative zu den Standard-YouTube-Einbettungen und wurde für Geschwindigkeit und Effizienz entwickelt.

<!-- prettier-ignore-start -->
| Parameter | Beschreibung                                  |
| --------- | -------------------------------------------- |
| `id`      | [String] YouTube-Video-ID zum Einbetten.          |
| `label`   | [String] Beschriftung für das Video                 |
| `params`  | [String] Zusätzliche Parameter für die Videowiedergabe |
<!-- prettier-ignore-end -->

**Beispiel 1:**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools Demo" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**Beispiel 2:**

Sie können alle [Player-Parameter](https://developers.google.com/youtube/player_parameters#Parameters) von YouTube für die Variable `params` verwenden, wie unten gezeigt:

> Dieses Video startet nach 130 Sekunden (2m10)

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools Demo" params="start=130" */>}}
```

> Dieses Video hat keine UI-Steuerelemente, startet bei 130 Sekunden und stoppt 10 Sekunden später.

Um mehrere Optionen wie unten gezeigt zu verketten, müssen Sie das Zeichen `&` zwischen ihnen hinzufügen.

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools Demo" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

Weitere Informationen finden Sie im [youtubeLite GitHub-Repo](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters) und auf der YouTube-Seite für [Player-Parameter](https://developers.google.com/youtube/player_parameters#Parameters).
