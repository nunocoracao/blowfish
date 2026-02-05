---
title: "Erweiterte Anpassung"
weight: 13
draft: false
description: "Erfahren Sie, wie Sie Blowfish manuell erstellen."
slug: "advanced-customisation"
tags: ["erweitert", "css", "dokumentation"]
series: ["Dokumentation"]
series_order: 13
---

Es gibt viele Möglichkeiten, erweiterte Änderungen an Blowfish vorzunehmen. Lesen Sie unten, um mehr darüber zu erfahren, was angepasst werden kann und wie Sie das gewünschte Ergebnis am besten erreichen.

Wenn Sie weitere Ratschläge benötigen, stellen Sie Ihre Fragen in den [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions).

## Hugo-Projektstruktur

Bevor wir loslegen, zunächst ein kurzer Hinweis zur [Hugo-Projektstruktur](https://gohugo.io/getting-started/directory-structure/) und bewährten Methoden zur Verwaltung Ihrer Inhalte und Theme-Anpassungen.

{{< alert >}}
**Zusammenfassung:** Bearbeiten Sie niemals direkt die Theme-Dateien. Nehmen Sie Anpassungen nur in den Unterverzeichnissen Ihres Hugo-Projekts vor, nicht im themes-Verzeichnis selbst.
{{< /alert >}}

Blowfish wurde entwickelt, um alle Standard-Hugo-Praktiken zu nutzen. Es ist so konzipiert, dass alle Aspekte des Themes angepasst und überschrieben werden können, ohne die Kern-Theme-Dateien zu ändern. Dies ermöglicht ein nahtloses Upgrade-Erlebnis und gibt Ihnen gleichzeitig die volle Kontrolle über das Aussehen und die Handhabung Ihrer Website.

Um dies zu erreichen, sollten Sie niemals manuell Theme-Dateien direkt anpassen. Ob Sie Hugo-Module verwenden, als Git-Submodul installieren oder das Theme manuell in Ihrem `themes/`-Verzeichnis einbinden, Sie sollten diese Dateien immer intakt lassen.

Der richtige Weg, Theme-Verhalten anzupassen, ist das Überschreiben von Dateien mithilfe der leistungsfähigen Hugo [Datei-Suchreihenfolge](https://gohugo.io/templates/lookup-order/). Zusammenfassend stellt die Suchreihenfolge sicher, dass alle Dateien, die Sie in Ihr Projektverzeichnis einbinden, automatisch Vorrang vor Theme-Dateien haben.

Wenn Sie beispielsweise das Hauptartikel-Template in Blowfish überschreiben möchten, können Sie einfach Ihre eigene `layouts/_default/single.html`-Datei erstellen und sie im Root Ihres Projekts platzieren. Diese Datei überschreibt dann die `single.html` aus dem Theme, ohne das Theme selbst zu ändern. Dies funktioniert für alle Theme-Dateien - HTML-Templates, Partials, Shortcodes, Konfigurationsdateien, Daten, Assets, etc.

Solange Sie diese einfache Praxis befolgen, können Sie das Theme immer aktualisieren (oder verschiedene Theme-Versionen testen), ohne sich Sorgen machen zu müssen, dass Sie Ihre benutzerdefinierten Änderungen verlieren.

## Bildoptimierungseinstellungen ändern

Hugo verfügt über verschiedene integrierte Methoden zum Ändern der Größe, Zuschneiden und Optimieren von Bildern.

Als Beispiel - in `layouts/partials/article-link/card.html` haben Sie folgenden Code:

```go
{{ with .Resize "600x" }}
<div class="w-full thumbnail_card nozoom" style="background-image:url({{ .RelPermalink }});"></div>
{{ end }}
```

Das Standardverhalten von Hugo hier ist, die Bildgröße auf 600px unter Beibehaltung des Seitenverhältnisses zu ändern.

Es ist erwähnenswert, dass Standard-Bildkonfigurationen wie der [Ankerpunkt](https://gohugo.io/content-management/image-processing/#anchor) auch in Ihrer [Site-Konfiguration](https://gohugo.io/content-management/image-processing/#processing-options) sowie im Template selbst festgelegt werden können.

Weitere Informationen finden Sie in den [Hugo-Dokumenten zur Bildverarbeitung](https://gohugo.io/content-management/image-processing/#image-processing-methods).

## Farbschemata

Blowfish wird mit einer Reihe von Farbschemata ausgeliefert. Um das grundlegende Farbschema zu ändern, können Sie den Theme-Parameter `colorScheme` festlegen. Lesen Sie den Abschnitt [Erste Schritte]({{< ref "getting-started#colour-schemes" >}}), um mehr über die integrierten Schemata zu erfahren.

Zusätzlich zu den Standardschemata können Sie auch eigene erstellen und die gesamte Website nach Ihren Wünschen gestalten. Schemata werden erstellt, indem Sie eine `<schema-name>.css`-Datei im Ordner `assets/css/schemes/` platzieren. Sobald die Datei erstellt ist, verweisen Sie einfach in der Theme-Konfiguration mit dem Namen darauf.

{{< alert "github">}}
**Hinweis:** Die manuelle Generierung dieser Dateien kann schwierig sein. Ich habe ein `nodejs`-Terminal-Tool entwickelt, um dabei zu helfen: [Fugu](https://github.com/nunocoracao/fugu). Im Wesentlichen übergeben Sie die drei Haupt-`hex`-Werte Ihrer Farbpalette und das Programm gibt eine CSS-Datei aus, die direkt in Blowfish importiert werden kann.
{{< /alert >}}

Blowfish definiert eine Drei-Farben-Palette, die im gesamten Theme verwendet wird. Die drei Farben sind als `neutral`, `primary` und `secondary` Varianten definiert, jeweils mit zehn Farbstufen.

Aufgrund der Art und Weise, wie Tailwind CSS 3.0 Farbwerte mit Deckkraft berechnet, müssen die im Schema angegebenen Farben einem [bestimmten Format entsprechen](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo), indem sie die Rot-, Grün- und Blau-Farbwerte angeben.

```css
:root {
  --clr-primary-500: rgb(139, 92, 246);
}
```

Dieses Beispiel definiert eine CSS-Variable für die `primary-500`-Farbe mit einem Rotwert von `139`, Grünwert von `92` und Blauwert von `246`.

Verwenden Sie eines der vorhandenen Theme-Stylesheets als Vorlage. Sie können Ihre eigenen Farben definieren, aber zur Inspiration schauen Sie sich die offizielle [Tailwind-Farbpaletten-Referenz](https://tailwindcss.com/docs/customizing-colors#color-palette-reference) an.

## Das Stylesheet überschreiben

Manchmal müssen Sie einen benutzerdefinierten Stil hinzufügen, um Ihre eigenen HTML-Elemente zu gestalten. Blowfish bietet diese Möglichkeit, indem Sie die Standardstile in Ihrem eigenen CSS-Stylesheet überschreiben können. Erstellen Sie einfach eine `custom.css`-Datei im Ordner `assets/css/` Ihres Projekts.

Die `custom.css`-Datei wird von Hugo minimiert und automatisch nach allen anderen Theme-Stilen geladen, was bedeutet, dass alles in Ihrer benutzerdefinierten Datei Vorrang vor den Standardeinstellungen hat.

### Zusätzliche Schriftarten verwenden

Blowfish ermöglicht es Ihnen, die Schriftart für Ihre Website einfach zu ändern. Nachdem Sie eine `custom.css`-Datei im Ordner `assets/css/` Ihres Projekts erstellt haben, platzieren Sie Ihre Schriftdatei in einem `fonts`-Ordner innerhalb des `static`-Root-Ordners.

```shell
.
├── assets
│   └── css
│       └── custom.css
...
└─── static
    └── fonts
        └─── font.ttf

```

Dies macht die Schriftart für die Website verfügbar. Jetzt kann die Schriftart einfach in Ihrer `custom.css` importiert und ersetzt werden, wo immer Sie es für richtig halten. Das folgende Beispiel zeigt, wie das Ersetzen der Schriftart für das gesamte `html` aussehen würde.

```css
@font-face {
    font-family: font;
    src: url('/fonts/font.ttf');
}

html {
    font-family: font;
}
```

### Schriftgröße anpassen

Das Ändern der Schriftgröße Ihrer Website ist ein Beispiel für das Überschreiben des Standard-Stylesheets. Blowfish macht dies einfach, da es im gesamten Theme skalierte Schriftgrößen verwendet, die von der Basis-HTML-Schriftgröße abgeleitet werden. Standardmäßig setzt Tailwind die Standardgröße auf `12pt`, aber sie kann auf jeden beliebigen Wert geändert werden.

Erstellen Sie eine `custom.css`-Datei gemäß den [obigen Anweisungen]({{< ref "#overriding-the-stylesheet" >}}) und fügen Sie die folgende CSS-Deklaration hinzu:

```css
/* Standardschriftgröße erhöhen */
html {
  font-size: 13pt;
}
```

Allein durch das Ändern dieses einen Wertes werden alle Schriftgrößen auf Ihrer Website an diese neue Größe angepasst. Um also die insgesamt verwendeten Schriftgrößen zu erhöhen, machen Sie den Wert größer als `12pt`. Um die Schriftgrößen zu verringern, machen Sie den Wert kleiner als `12pt`.

### Syntax-Highlighting-Theme ändern

Um das Syntax-Highlighting-Theme zu ändern, erstellen Sie `assets/css/custom.css` und fügen Sie Folgendes hinzu:

```css
.chroma,
.chroma *,
.chroma:is(.dark *),
.chroma:is(.dark *) * {
  color: unset;
  font-weight: unset;
  font-style: unset;
}
```

Dies löscht die Standard-Chroma-Stile. Der nächste Schritt ist, Chroma-Stile in Ihre CSS-Datei mit dem Befehl `hugo gen chromastyles` einzubinden:

```sh
# Mac/Linux
(echo 'html:not(.dark) {'; hugo gen chromastyles --style=emacs; echo '}') >> assets/css/custom.css
(echo 'html.dark {'; hugo gen chromastyles --style=evergarden; echo '}') >> assets/css/custom.css

# Windows PowerShell
# Dieser Befehl kann nicht in CMD ausgeführt werden; er muss in PowerShell ausgeführt werden
@("html:not(.dark) {"; (hugo gen chromastyles --style=emacs); "}") | Add-Content -Path "assets/css/custom.css"
@("html.dark {"; (hugo gen chromastyles --style=evergarden); "}") | Add-Content -Path "assets/css/custom.css"
```

Alle verfügbaren Stile finden Sie in [Hugos Dokumentation](https://gohugo.io/quick-reference/syntax-highlighting-styles/#styles).

## Das Theme-CSS aus dem Quellcode erstellen

Wenn Sie eine größere Änderung vornehmen möchten, können Sie den Tailwind CSS JIT-Compiler nutzen und das gesamte Theme-CSS von Grund auf neu erstellen. Dies ist nützlich, wenn Sie die Tailwind-Konfiguration anpassen oder zusätzliche Tailwind-Klassen zum Haupt-Stylesheet hinzufügen möchten.

{{< alert >}}
**Hinweis:** Das manuelle Erstellen des Themes ist für fortgeschrittene Benutzer gedacht.
{{< /alert >}}

Lassen Sie uns durchgehen, wie das Erstellen des Tailwind CSS funktioniert.

### Tailwind-Konfiguration

Um eine CSS-Datei zu generieren, die nur die Tailwind-Klassen enthält, die tatsächlich verwendet werden, muss der JIT-Compiler alle HTML-Templates und Markdown-Inhaltsdateien scannen, um zu überprüfen, welche Stile im Markup vorhanden sind. Der Compiler macht dies, indem er die Datei `tailwind.config.js` betrachtet, die im Root-Verzeichnis des Themes enthalten ist:

```js
// themes/blowfish/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/content/**/*.{html,md}",
  ],

  // und mehr...
};
```

Diese Standardkonfiguration enthält diese Inhaltspfade, damit Sie Ihre eigene CSS-Datei einfach generieren können, ohne sie ändern zu müssen, vorausgesetzt Sie folgen einer bestimmten Projektstruktur. Nämlich **müssen Sie Blowfish in Ihrem Projekt als Unterverzeichnis unter `themes/blowfish/` einbinden**. Dies bedeutet, dass Sie das Theme nicht einfach mit Hugo-Modulen installieren können und Sie müssen entweder den Git-Submodule-Weg (empfohlen) oder den manuellen Installationsweg gehen. Die [Installationsdokumentation]({{< ref "installation" >}}) erklärt, wie Sie das Theme mit einer dieser Methoden installieren.

### Projektstruktur

Um die Standardkonfiguration zu nutzen, sollte Ihr Projekt etwa so aussehen...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # dies ist die Datei, die wir generieren werden
├── config  # Site-Konfiguration
│   └── _default
├── content  # Site-Inhalt
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # benutzerdefinierte Layouts für Ihre Site
│   ├── partials
│   │   └── extend-article-link/simple.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── blowfish  # Git-Submodul oder manuelle Theme-Installation
```

Diese Beispielstruktur fügt einen neuen `projects`-Inhaltstyp mit eigenem benutzerdefinierten Layout zusammen mit einem benutzerdefinierten Shortcode und erweiterten Partial hinzu. Sofern das Projekt dieser Struktur folgt, muss nur die `main.css`-Datei neu kompiliert werden.

### Abhängigkeiten installieren

Damit dies funktioniert, müssen Sie in das Verzeichnis `themes/blowfish/` wechseln und die Projektabhängigkeiten installieren. Sie benötigen [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install) auf Ihrem lokalen Rechner für diesen Schritt.

```shell
cd themes/blowfish
npm install
```

### Tailwind-Compiler ausführen

Mit den installierten Abhängigkeiten bleibt nur noch, die [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli) zu verwenden, um den JIT-Compiler aufzurufen. Navigieren Sie zurück zum Root Ihres Hugo-Projekts und geben Sie folgenden Befehl ein:

```shell
cd ../..
node ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

Es ist ein etwas unschöner Befehl aufgrund der beteiligten Pfade, aber im Wesentlichen rufen Sie die Tailwind CLI auf und übergeben ihr den Speicherort der Tailwind-Konfigurationsdatei (die wir oben betrachtet haben), wo die `main.css`-Datei des Themes zu finden ist und wohin Sie die kompilierte CSS-Datei platzieren möchten (sie geht in den Ordner `assets/css/compiled/` Ihres Hugo-Projekts).

Die Konfigurationsdatei scannt automatisch alle Inhalte und Layouts in Ihrem Projekt sowie alle im Theme und erstellt eine neue CSS-Datei, die alle für Ihre Website erforderlichen CSS enthält. Aufgrund der Art, wie Hugo die Dateihierarchie handhabt, überschreibt diese Datei in Ihrem Projekt nun automatisch die, die mit dem Theme geliefert wird.

Jedes Mal, wenn Sie Änderungen an Ihren Layouts vornehmen und neue Tailwind CSS-Stile benötigen, können Sie einfach den Befehl erneut ausführen und die neue CSS-Datei generieren. Sie können auch `-w` am Ende des Befehls hinzufügen, um den JIT-Compiler im Watch-Modus auszuführen.

### Ein Build-Skript erstellen

Um diese ganze Lösung abzurunden, können Sie diesen gesamten Prozess vereinfachen, indem Sie Aliase für diese Befehle hinzufügen, oder tun Sie, was ich tue, und fügen Sie eine `package.json` zum Root Ihres Projekts hinzu, die die notwendigen Skripte enthält...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": cross-env "NODE_ENV=development ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": cross-env "NODE_ENV=production ./themes/blowfish/node_modules/@tailwindcss/cli/dist/index.mjs -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // und mehr...
}
```

Wenn Sie nun am Design Ihrer Site arbeiten möchten, können Sie `npm run dev` aufrufen und der Compiler wird im Watch-Modus ausgeführt. Wenn Sie bereit zur Bereitstellung sind, führen Sie `npm run build` aus und Sie erhalten einen sauberen Tailwind CSS-Build.

🙋‍♀️ Wenn Sie Hilfe benötigen, können Sie gerne eine Frage in den [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) stellen.
