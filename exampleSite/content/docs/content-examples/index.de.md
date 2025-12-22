---
title: "Inhaltsbeispiele"
weight: 11
draft: false
description: "Alle verfügbaren Partials in Blowfish."
slug: "content-examples"
tags: ["inhalt", "beispiel"]
series: ["Dokumentation"]
series_order: 12
---

Wenn Sie die Dokumentation der Reihe nach gelesen haben, sollten Sie jetzt alle Funktionen und Konfigurationen kennen, die in Blowfish verfügbar sind. Diese Seite ist darauf ausgelegt, alles zusammenzuführen und einige ausgearbeitete Beispiele anzubieten, die Sie möglicherweise in Ihrem Hugo-Projekt verwenden möchten.

{{< alert >}}
**Tipp:** Wenn Sie neu bei Hugo sind, schauen Sie sich unbedingt die [offizielle Dokumentation](https://gohugo.io/content-management/page-bundles/) an, um mehr über das Konzept von Page Bundles und Ressourcen zu erfahren.
{{< /alert >}}

Die Beispiele auf dieser Seite können alle an verschiedene Szenarien angepasst werden, geben Ihnen aber hoffentlich einige Ideen, wie Sie die Formatierung eines bestimmten Inhaltselements für Ihr individuelles Projekt angehen können.

## Branch-Seiten

Branch Page Bundles in Hugo decken Elemente wie die Homepage, Abschnittslisten und Taxonomie-Seiten ab. Das Wichtigste bei Branch Bundles ist, dass der Dateiname für diesen Inhaltstyp **`_index.md`** ist.

Blowfish berücksichtigt die Front-Matter-Parameter, die in Branch-Seiten angegeben sind, und diese überschreiben die Standardeinstellungen für diese bestimmte Seite. Zum Beispiel ermöglicht das Setzen des `title`-Parameters in einer Branch-Seite das Überschreiben des Seitentitels.

### Homepage

|              |                      |
| ------------ | -------------------- |
| **Layout:**  | `layouts/index.html` |
| **Inhalt:** | `content/_index.md`  |

Die Homepage in Blowfish ist insofern besonders, als ihr übergreifendes Design durch den Homepage-Layout-Konfigurationsparameter gesteuert wird. Mehr darüber erfahren Sie im Abschnitt [Homepage-Layout]({{< ref "homepage-layout" >}}).

Wenn Sie dieser Seite benutzerdefinierten Inhalt hinzufügen möchten, müssen Sie einfach eine `content/_index.md`-Datei erstellen. Alles in dieser Datei wird dann auf Ihrer Homepage eingefügt.

**Beispiel:**

```yaml
---
title: "Willkommen bei Blowfish!"
description: "Dies ist eine Demo zum Hinzufügen von Inhalten zur Homepage."
---
Willkommen auf meiner Website! Ich freue mich sehr, dass Sie vorbeischauen.
```

_Dieses Beispiel setzt einen benutzerdefinierten Titel und fügt zusätzlichen Text zum Body der Seite hinzu. Jeder Markdown-formatierte Text ist akzeptabel, einschließlich Shortcodes, Bilder und Links._

### Listenseiten

|              |                              |
| ------------ | ---------------------------- |
| **Layout:**  | `layouts/_default/list.html` |
| **Inhalt:** | `content/../_index.md`       |

Listenseiten gruppieren alle Seiten innerhalb eines Abschnitts und bieten Besuchern eine Möglichkeit, jede Seite zu erreichen. Ein Blog oder Portfolio sind Beispiele für eine Listenseite, da sie Beiträge oder Projekte zusammenfassen.

Das Erstellen einer Listenseite ist so einfach wie das Erstellen eines Unterverzeichnisses im Content-Ordner. Um zum Beispiel einen "Projekte"-Abschnitt zu erstellen, würden Sie `content/projects/` erstellen. Dann erstellen Sie eine Markdown-Datei für jedes Ihrer Projekte.

Eine Listenseite wird standardmäßig generiert. Um den Inhalt jedoch anzupassen, sollten Sie auch eine `_index.md`-Seite in diesem neuen Verzeichnis erstellen.

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

Hugo generiert entsprechend URLs für die Seiten in Ihrem Projektordner.

Genau wie auf der Homepage wird der Inhalt der `_index.md`-Datei im generierten Listenindex ausgegeben. Blowfish listet dann alle Seiten in diesem Abschnitt unter dem Inhalt auf.

**Beispiel:**

```yaml
---
title: "Projekte"
description: "Erfahren Sie mehr über einige meiner Projekte."
cascade:
  showReadingTime: false
---
Dieser Abschnitt enthält alle meine aktuellen Projekte.
```

_In diesem Beispiel wird der spezielle `cascade`-Parameter verwendet, um die Lesezeit auf allen Unterseiten dieses Abschnitts auszublenden. Dadurch wird bei Projektseiten keine Lesezeit angezeigt. Dies ist eine großartige Möglichkeit, Standard-Theme-Parameter für einen ganzen Abschnitt zu überschreiben, ohne sie in jede einzelne Seite aufnehmen zu müssen._

Der [Samples-Abschnitt]({{< ref "samples" >}}) dieser Website ist ein Beispiel für eine Listenseite.

### Taxonomie-Seiten

|                  |                                  |
| ---------------- | -------------------------------- |
| **Listen-Layout:** | `layouts/_default/taxonomy.html` |
| **Term-Layout:** | `layouts/_default/term.html`     |
| **Inhalt:**     | `content/../_index.md`           |

Taxonomie-Seiten gibt es in zwei Formen - Taxonomie-Listen und Taxonomie-Terme. Listen zeigen eine Auflistung aller Terme innerhalb einer bestimmten Taxonomie an, während Terme eine Liste von Seiten anzeigen, die mit einem bestimmten Term verbunden sind.

Die Terminologie kann etwas verwirrend werden, also lassen Sie uns ein Beispiel mit einer Taxonomie namens `animals` untersuchen.

Zunächst müssen Taxonomien in Hugo konfiguriert werden, um sie zu verwenden. Dies geschieht durch Erstellen einer Konfigurationsdatei unter `config/_default/taxonomies.toml` und Definition des Taxonomie-Namens.

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

Hugo erwartet, dass Taxonomien mit ihrer Singular- und Pluralform aufgelistet werden, also fügen wir das Singular `animal` gleich dem Plural `animals` hinzu, um unsere Beispiel-Taxonomie zu erstellen.

Jetzt, da unsere `animals`-Taxonomie existiert, muss sie zu einzelnen Inhaltselementen hinzugefügt werden. Das ist so einfach wie das Einfügen in das Front Matter:

```yaml
---
title: "In der Höhle des Löwen"
description: "Diese Woche lernen wir über Löwen."
animals: ["lion", "cat"]
---
```

Dies hat nun zwei _Terme_ innerhalb unserer `animals`-Taxonomie erstellt - `lion` und `cat`.

Obwohl es zu diesem Zeitpunkt nicht offensichtlich ist, generiert Hugo jetzt Listen- und Term-Seiten für diese neue Taxonomie. Standardmäßig kann die Auflistung unter `/animals/` aufgerufen werden und die Term-Seiten sind unter `/animals/lion/` und `/animals/cat/` zu finden.

Die Listenseite listet alle Terme auf, die in der Taxonomie enthalten sind. In diesem Beispiel zeigt das Navigieren zu `/animals/` eine Seite mit Links zu "lion" und "cat", die Besucher zu den einzelnen Term-Seiten führen.

Die Term-Seiten listen alle Seiten auf, die in diesem Term enthalten sind. Diese Term-Listen sind im Wesentlichen die gleichen wie normale [Listenseiten](#listenseiten) und verhalten sich ähnlich.

Um benutzerdefinierten Inhalt zu Taxonomie-Seiten hinzuzufügen, erstellen Sie einfach `_index.md`-Dateien im Content-Ordner mit dem Taxonomie-Namen als Unterverzeichnisname.

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

Alles in diesen Inhaltsdateien wird nun auf den generierten Taxonomie-Seiten platziert. Wie bei anderen Inhalten können die Front-Matter-Variablen verwendet werden, um Standardwerte zu überschreiben. Auf diese Weise könnten Sie einen Tag namens `lion` haben, aber den `title` mit "Löwe" überschreiben.

Um zu sehen, wie das in der Realität aussieht, schauen Sie sich die [Tags-Taxonomie-Auflistung]({{< ref "tags" >}}) auf dieser Website an.

## Leaf-Seiten

|                           |                                 |
| ------------------------- | ------------------------------- |
| **Layout:**               | `layouts/_default/single.html`  |
| **Inhalt (eigenständig):** | `content/../page-name.md`       |
| **Inhalt (gebündelt):**    | `content/../page-name/index.md` |

Leaf-Seiten in Hugo sind im Grunde Standard-Inhaltsseiten. Sie werden als Seiten definiert, die keine Unterseiten enthalten. Dies könnten Dinge wie eine Über-uns-Seite oder ein einzelner Blogbeitrag sein, der im Blog-Bereich der Website lebt.

Das Wichtigste bei Leaf-Seiten ist, dass sie im Gegensatz zu Branch-Seiten `index.md` _ohne_ Unterstrich benannt werden sollten. Leaf-Seiten sind auch insofern besonders, als sie auf der obersten Ebene des Abschnitts gruppiert und mit einem eindeutigen Namen versehen werden können.

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

Wenn Assets wie ein Bild in eine Seite eingebunden werden sollen, sollte ein Page Bundle verwendet werden. Page Bundles werden mit einem Unterverzeichnis mit einer `index.md`-Datei erstellt. Das Gruppieren der Assets mit dem Inhalt in seinem eigenen Verzeichnis ist wichtig, da viele der Shortcodes und andere Theme-Logik davon ausgehen, dass Ressourcen zusammen mit Seiten gebündelt sind.

**Beispiel:**

```yaml
---
title: "Mein erster Blog-Beitrag"
date: 2022-01-25
description: "Willkommen auf meinem Blog!"
summary: "Erfahren Sie mehr über mich und warum ich diesen Blog starte."
tags: ["willkommen", "neu", "über", "erster"]
---
_Dies_ ist der Inhalt meines Blog-Beitrags.
```

Leaf-Seiten haben eine große Vielfalt an [Front-Matter]({{< ref "front-matter" >}})-Parametern, die verwendet werden können, um anzupassen, wie sie angezeigt werden.

### Externe Links

Blowfish hat eine spezielle Funktion, die es ermöglicht, Links zu externen Seiten neben Artikeln in den Artikellisten anzuzeigen. Dies ist nützlich, wenn Sie Inhalte auf Websites Dritter wie Medium haben oder wissenschaftliche Arbeiten, auf die Sie verlinken möchten, ohne den Inhalt auf Ihrer Hugo-Site zu replizieren.

Um einen externen Link-Artikel zu erstellen, müssen einige spezielle Front-Matter-Einstellungen vorgenommen werden:

```yaml
---
title: "Mein Medium-Beitrag"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "Ich habe einen Beitrag auf Medium geschrieben."
showReadingTime: false
build:
  render: "false"
  list: "local"
---
```

Zusammen mit den normalen Front-Matter-Parametern wie `title` und `summary` wird der Parameter `externalUrl` verwendet, um Blowfish mitzuteilen, dass dies kein gewöhnlicher Artikel ist. Die hier angegebene URL ist der Ort, zu dem Besucher weitergeleitet werden, wenn sie diesen Artikel auswählen.

Zusätzlich verwenden wir einen speziellen Hugo-Front-Matter-Parameter `build`, um zu verhindern, dass eine normale Seite für diesen Inhalt generiert wird - es macht keinen Sinn, eine Seite zu generieren, da wir auf eine externe URL verlinken!

Das Theme enthält einen Archetyp, der das Erstellen dieser externen Link-Artikel vereinfacht. Geben Sie einfach `-k external` an, wenn Sie neuen Inhalt erstellen.

```shell
hugo new -k external posts/my-post.md
```

### Einfache Seiten

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

Blowfish enthält auch ein spezielles Layout für einfache Seiten. Das einfache Layout ist eine Vorlage in voller Breite, die einfach Markdown-Inhalt auf der Seite platziert, ohne spezielle Theme-Funktionen.

Die einzigen Funktionen, die im einfachen Layout verfügbar sind, sind Breadcrumbs und Teilen-Links. Das Verhalten dieser kann jedoch weiterhin mit den normalen Seiten-[Front-Matter]({{< ref "front-matter" >}})-Variablen gesteuert werden.

Um das einfache Layout auf einer bestimmten Seite zu aktivieren, fügen Sie die `layout`-Front-Matter-Variable mit dem Wert `"simple"` hinzu:

```yaml
---
title: "Meine Landing Page"
date: 2022-03-08
layout: "simple"
---
Der Inhalt dieser Seite ist jetzt in voller Breite.
```

## Benutzerdefinierte Layouts

Einer der Vorteile von Hugo ist, dass es einfach ist, benutzerdefinierte Layouts für die gesamte Website, einzelne Abschnitte oder Seiten zu erstellen.

Layouts folgen allen normalen Hugo-Templating-Regeln und weitere Informationen finden Sie in der [offiziellen Hugo-Dokumentation](https://gohugo.io/templates/introduction/).

### Überschreiben von Standard-Layouts

Jeder der oben besprochenen Inhaltstypen listet die Layout-Datei auf, die zur Generierung jedes Seitentyps verwendet wird. Wenn diese Datei in Ihrem lokalen Projekt erstellt wird, überschreibt sie die Theme-Vorlage und kann somit verwendet werden, um den Standardstil der Website anzupassen.

Zum Beispiel ermöglicht das Erstellen einer `layouts/_default/single.html`-Datei die vollständige Anpassung des Layouts von Leaf-Seiten.

### Benutzerdefinierte Abschnitt-Layouts

Es ist auch einfach, benutzerdefinierte Layouts für einzelne Inhaltsabschnitte zu erstellen. Dies ist nützlich, wenn Sie einen Abschnitt erstellen möchten, der eine bestimmte Art von Inhalt mit einem bestimmten Stil auflistet.

Lassen Sie uns ein Beispiel durchgehen, das eine benutzerdefinierte "Projekte"-Seite erstellt, die Projekte mit einem speziellen Layout auflistet.

Strukturieren Sie dazu Ihren Inhalt nach den normalen Hugo-Inhaltsregeln und erstellen Sie einen Abschnitt für Ihre Projekte. Erstellen Sie zusätzlich ein neues Layout für den Projektabschnitt, indem Sie denselben Verzeichnisnamen wie den Inhalt verwenden und eine `list.html`-Datei hinzufügen.

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

Diese `list.html`-Datei überschreibt nun die Standard-Listenvorlage, aber nur für den `projects`-Abschnitt. Bevor wir uns diese Datei ansehen, schauen wir uns zunächst die einzelnen Projektdateien an.

```yaml
---
title: "Blowfish"
date: 2021-08-11
icon: "github"
description: "Ein Theme für Hugo, erstellt mit Tailwind CSS."
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/nunocoracao/blowfish/"
---
```

_In diesem Beispiel weisen wir jedem Projekt einige Metadaten zu, die wir dann in unserer Listenvorlage verwenden können. Es gibt keinen Seiteninhalt, aber nichts hindert Sie daran, ihn hinzuzufügen. Es ist schließlich Ihre eigene benutzerdefinierte Vorlage!_

Mit den definierten Projekten können wir jetzt eine Listenvorlage erstellen, die die Details jedes Projekts ausgibt.

```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

Obwohl dies ein ziemlich einfaches Beispiel ist, können Sie sehen, dass es durch jede der Seiten in diesem Abschnitt (d.h. jedes Projekt) geht und dann HTML-Links zu jedem Projekt zusammen mit einem Symbol ausgibt. Die Metadaten im Front Matter für jedes Projekt werden verwendet, um zu bestimmen, welche Informationen angezeigt werden.

Beachten Sie, dass Sie sicherstellen müssen, dass die relevanten Stile und Klassen verfügbar sind, was möglicherweise eine Neukompilierung des Tailwind CSS erfordert. Dies wird im Abschnitt [Erweiterte Anpassung]({{< ref "advanced-customisation" >}}) ausführlicher besprochen.

Beim Erstellen benutzerdefinierter Vorlagen wie dieser ist es immer am einfachsten, einen Blick darauf zu werfen, wie die Standard-Blowfish-Vorlage funktioniert, und diese dann als Leitfaden zu verwenden. Denken Sie daran, dass die [Hugo-Dokumentation](https://gohugo.io/templates/introduction/) auch eine großartige Ressource ist, um mehr über das Erstellen von Vorlagen zu erfahren.
