---
title: "Installation"
weight: 2
draft: false
description: "Wie man das Blowfish-Theme installiert."
slug: "installation"
tags: ["installation", "dokumentation"]
series: ["Dokumentation"]
series_order: 2
---

Folgen Sie einfach dem standardmäßigen Hugo [Schnellstart](https://gohugo.io/getting-started/quick-start/)-Verfahren, um schnell loszulegen.

Detaillierte Installationsanweisungen finden Sie unten. Anweisungen zum [Aktualisieren des Themes](#updates-installieren) sind ebenfalls verfügbar.

## Installation

Diese Anweisungen bringen Sie von einem komplett leeren Zustand mit Hugo und Blowfish zum Laufen. Die meisten der in diesem Leitfaden erwähnten Abhängigkeiten können mit dem Paketmanager Ihrer Wahl für Ihre Plattform installiert werden.

### Hugo installieren

Wenn Sie Hugo noch nicht verwendet haben, müssen Sie es [auf Ihrem lokalen Computer installieren](https://gohugo.io/getting-started/installing). Sie können überprüfen, ob es bereits installiert ist, indem Sie den Befehl `hugo version` ausführen.

{{< alert >}}
Stellen Sie sicher, dass Sie **Hugo Version 0.141.0** oder höher verwenden, da das Theme einige der neuesten Hugo-Funktionen nutzt.
{{< /alert >}}

Sie finden detaillierte Installationsanweisungen für Ihre Plattform in der [Hugo-Dokumentation](https://gohugo.io/getting-started/installing).

### Blowfish Tools (empfohlen)

Wir haben gerade ein neues CLI-Tool veröffentlicht, das Ihnen beim Einstieg mit Blowfish hilft. Es erstellt ein neues Hugo-Projekt, installiert das Theme und richtet die Theme-Konfigurationsdateien für Sie ein. Es befindet sich noch in der Beta-Phase, also [melden Sie bitte alle Probleme, die Sie finden](https://github.com/nunocoracao/blowfish-tools).

Installieren Sie das CLI-Tool global mit npm (oder einem anderen Paketmanager):
```shell
npx blowfish-tools
```
oder

```shell
npm i -g blowfish-tools
```

Führen Sie dann den Befehl `blowfish-tools` aus, um einen interaktiven Durchlauf zu starten, der Sie durch Erstellungs- und Konfigurationsanwendungsfälle führt.
```shell
blowfish-tools
```

Sie können auch den Befehl `blowfish-tools new` ausführen, um ein neues Hugo-Projekt zu erstellen und das Theme in einem Schritt zu installieren. Weitere Informationen finden Sie in der CLI-Hilfe.
```shell
blowfish-tools new mynewsite
```

Hier ist ein kurzes Video, das zeigt, wie schnell Sie mit dem CLI-Tool mit Blowfish starten können:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Installation ohne CLI

#### Eine neue Website erstellen

Führen Sie den Befehl `hugo new site mywebsite` aus, um eine neue Hugo-Website in einem Verzeichnis namens `mywebsite` zu erstellen.

Beachten Sie, dass Sie das Projektverzeichnis beliebig benennen können, aber die folgenden Anweisungen gehen davon aus, dass es `mywebsite` heißt. Wenn Sie einen anderen Namen verwenden, stellen Sie sicher, dass Sie ihn entsprechend ersetzen.

#### Das Blowfish-Theme herunterladen

Es gibt verschiedene Möglichkeiten, das Blowfish-Theme in Ihre Hugo-Website zu installieren. Von der einfachsten bis zur schwierigsten Installation und Wartung sind dies:

- [Git-Submodul](#installation-mit-git) (empfohlen)
- [Hugo-Modul](#installation-mit-hugo)
- [Manuelle Dateikopie](#manuelle-installation)

Wenn Sie unsicher sind, wählen Sie die Git-Submodul-Methode.

#### Installation mit Git

Diese Methode ist die schnellste und einfachste, um das Theme aktuell zu halten. Neben **Hugo** und **Go** müssen Sie auch sicherstellen, dass **Git** auf Ihrem lokalen Computer installiert ist.

Wechseln Sie in das Verzeichnis Ihrer Hugo-Website (das Sie oben erstellt haben), initialisieren Sie ein neues `git`-Repository und fügen Sie Blowfish als Submodul hinzu.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Fahren Sie dann mit dem [Einrichten der Theme-Konfigurationsdateien](#theme-konfigurationsdateien-einrichten) fort.

#### Installation mit Hugo

Für diese Methode verwenden Sie Hugo zur Verwaltung Ihrer Themes. Hugo verwendet **Go** zum Initialisieren und Verwalten von Modulen, stellen Sie also sicher, dass `go` installiert ist, bevor Sie fortfahren.

1. [Laden Sie](https://golang.org/dl/) Go herunter und installieren Sie es. Sie können überprüfen, ob es bereits installiert ist, indem Sie den Befehl `go version` verwenden.

   {{< alert >}}
   Stellen Sie sicher, dass Sie **Go Version 1.12** oder höher verwenden, da Hugo dies für die korrekte Funktion von Modulen benötigt.
   {{< /alert >}}

2. Initialisieren Sie von Ihrem Hugo-Projektverzeichnis (das Sie oben erstellt haben) Module für Ihre Website:

   ```shell
   # Wenn Sie Ihr Projekt auf GitHub verwalten
   hugo mod init github.com/<username>/<repo-name>

   # Wenn Sie Ihr Projekt lokal verwalten
   hugo mod init my-project
   ```

3. Fügen Sie das Theme zu Ihrer Konfiguration hinzu, indem Sie eine neue Datei `config/_default/module.toml` erstellen und Folgendes hinzufügen:

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Starten Sie Ihren Server mit `hugo server` und das Theme wird automatisch heruntergeladen.
5. Fahren Sie mit dem [Einrichten der Theme-Konfigurationsdateien](#theme-konfigurationsdateien-einrichten) fort.

#### Manuelle Installation

1. Laden Sie die neueste Version des Theme-Quellcodes herunter.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Von Github herunterladen{{< /button >}}

2. Entpacken Sie das Archiv, benennen Sie den Ordner in `blowfish` um und verschieben Sie ihn in das Verzeichnis `themes/` im Stammordner Ihres Hugo-Projekts.
3. Fahren Sie mit dem [Einrichten der Theme-Konfigurationsdateien](#theme-konfigurationsdateien-einrichten) fort.

#### Theme-Konfigurationsdateien einrichten

Löschen Sie im Stammordner Ihrer Website die von Hugo generierte Datei `hugo.toml`. Kopieren Sie die `*.toml`-Konfigurationsdateien aus dem Theme in Ihren Ordner `config/_default/`. Dadurch wird sichergestellt, dass Sie alle korrekten Theme-Einstellungen haben und das Theme einfach an Ihre Bedürfnisse anpassen können.

{{< alert >}}
**Hinweis:** Sie sollten die Datei `module.toml` nicht überschreiben, wenn in Ihrem Projekt bereits eine vorhanden ist!
{{< /alert >}}

Je nachdem, wie Sie das Theme installiert haben, finden Sie die Theme-Konfigurationsdateien an verschiedenen Stellen:

- **Hugo-Module:** Im Hugo-Cache-Verzeichnis oder [laden Sie eine Kopie herunter](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) von GitHub
- **Git-Submodul oder manuelle Installation:** `themes/blowfish/config/_default`

Nachdem Sie die Dateien kopiert haben, sollte Ihr Konfigurationsordner so aussehen:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # wenn Sie Hugo-Module zur Installation verwendet haben
└─ params.toml
```

{{< alert >}}
**Wichtig:** Wenn Sie Blowfish nicht mit Hugo-Modulen installiert haben, müssen Sie die Zeile `theme = "blowfish"` am Anfang Ihrer `hugo.toml`-Datei hinzufügen.
{{< /alert >}}

### Nächste Schritte

Die grundlegende Blowfish-Installation ist nun abgeschlossen. Fahren Sie mit dem Abschnitt [Erste Schritte]({{< ref "getting-started" >}}) fort, um mehr über die Konfiguration des Themes zu erfahren.

---

## Updates installieren

Von Zeit zu Zeit werden [neue Versionen](https://github.com/nunocoracao/blowfish/releases) veröffentlicht, die Fehlerbehebungen anwenden und neue Funktionen zum Theme hinzufügen. Um diese Änderungen zu nutzen, müssen Sie die Theme-Dateien auf Ihrer Website aktualisieren.

Wie Sie dabei vorgehen, hängt von der Installationsmethode ab, die Sie bei der ursprünglichen Installation des Themes gewählt haben. Anweisungen für jede Methode finden Sie unten.

- [Git-Submodul](#update-mit-git)
- [Hugo-Modul](#update-mit-hugo)
- [Manuelle Dateikopie](#manuelles-update)

### Update mit Git

Git-Submodule können mit dem `git`-Befehl aktualisiert werden. Führen Sie einfach den folgenden Befehl aus und die neueste Version des Themes wird in Ihr lokales Repository heruntergeladen:

```shell
git submodule update --remote --merge
```

Nachdem das Submodul aktualisiert wurde, erstellen Sie Ihre Website neu und überprüfen Sie, ob alles wie erwartet funktioniert.

### Update mit Hugo

Hugo macht das Aktualisieren von Modulen super einfach. Wechseln Sie einfach in Ihr Projektverzeichnis und führen Sie den folgenden Befehl aus:

```shell
hugo mod get -u
```

Hugo aktualisiert automatisch alle Module, die für Ihr Projekt erforderlich sind. Dies geschieht durch Überprüfung Ihrer `module.toml`- und `go.mod`-Dateien. Wenn Sie Probleme mit dem Update haben, überprüfen Sie, ob diese Dateien noch korrekt konfiguriert sind.

Erstellen Sie dann einfach Ihre Website neu und überprüfen Sie, ob alles wie erwartet funktioniert.

### Manuelles Update

Das manuelle Aktualisieren von Blowfish erfordert, dass Sie die neueste Kopie des Themes herunterladen und die alte Version in Ihrem Projekt ersetzen.

{{< alert >}}
Beachten Sie, dass alle lokalen Anpassungen, die Sie an den Theme-Dateien vorgenommen haben, bei diesem Vorgang verloren gehen.
{{< /alert >}}

1. Laden Sie die neueste Version des Theme-Quellcodes herunter.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Von Github herunterladen{{< /button >}}

2. Entpacken Sie das Archiv, benennen Sie den Ordner in `blowfish` um und verschieben Sie ihn in das Verzeichnis `themes/` im Stammordner Ihres Hugo-Projekts. Sie müssen das vorhandene Verzeichnis überschreiben, um alle Theme-Dateien zu ersetzen.

3. Erstellen Sie Ihre Website neu und überprüfen Sie, ob alles wie erwartet funktioniert.
