<!--@nrg.languages=en,de,es,fr,id,ja,pt-br,pt-pt,zh-cn-->
<!--@nrg.defaultLanguage=en-->
English | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--en-->
# Blowfish<!--en-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--en-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--en-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--en-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--en-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--en-->
<!--en-->
Blowfish is designed to be a powerful, lightweight theme for [Hugo](https://gohugo.io). It's built using Tailwind CSS with a clean and minimalist design that prioritises to your content.<!--en-->
<!--en-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--en-->
<!--en-->
<!--en-->
🌏 [Demo site](https://blowfish.page/)  <!--en-->
📑 [Theme documentation](https://blowfish.page/docs/)  <!--en-->
💎 [Merch Store](http://tee.pub/lic/qwSlWVBL5zc)  <!--en-->
🐛 [Bug reports & issues](https://github.com/nunocoracao/blowfish/issues)  <!--en-->
💡 [Questions & feature requests](https://github.com/nunocoracao/blowfish/discussions)<!--en-->
<!--en-->
<!--en-->
<!--en-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--en-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--en-->
<!--en-->
<!--en-->
<!--en-->
## Features<!--en-->
<!--en-->
- Fully responsive layout built with Tailwind CSS 3.0<!--en-->
- Multiple colour schemes (or fully customise your own)<!--en-->
- Dark mode (forced on/off or auto-switching with user toggle)<!--en-->
- Highly customisable configuration<!--en-->
- Firebase integration to support dynamic data<!--en-->
- Views count & like mechanism<!--en-->
- Related articles<!--en-->
- Multiple homepage layouts<!--en-->
- Multiple authors<!--en-->
- Series of articles<!--en-->
- Date and weight based article sorting<!--en-->
- Zen mode for article reading<!--en-->
- Flexible with any content types, taxonomies and menus<!--en-->
- Header and footer menus<!--en-->
- Nested menus & sub-navigation menu<!--en-->
- Scrollable table of contents<!--en-->
- Multilingual content support including support for RTL languages<!--en-->
- Ability to link to posts on third-party websites<!--en-->
- Support for several shortcodes like Gallery, Timeline, GitHub cards, and Carousels<!--en-->
- GitHub Alerts syntax, 15 types, collapsible support<!--en-->
- Buymeacoffee integration<!--en-->
- Client-side site search powered by Fuse.js<!--en-->
- Diagrams and visualisations using Mermaid<!--en-->
- Charts using Chart.js<!--en-->
- TypeIt integration<!--en-->
- Youtube embeds with performance improvements<!--en-->
- Mathematical notation using KaTeX<!--en-->
- SVG icons from FontAwesome 6<!--en-->
- Automatic image resizing using Hugo Pipes<!--en-->
- Heading anchors, Tables of Contents, Code copy, Buttons, Badges and more<!--en-->
- HTML and Emoji support in articles 🎉<!--en-->
- SEO friendly with links for sharing to social media<!--en-->
- Fathom Analytics and Google Analytics support<!--en-->
- RSS feeds, Favicons and comments support<!--en-->
- Advanced customisation using simple Tailwind colour definitions and styles<!--en-->
- Optimised for performance and accessibility with perfect Lighthouse scores<!--en-->
- Fully documented with regular updates<!--en-->
<!--en-->
---<!--en-->
<!--en-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--en-->
<!--en-->
## Documentation<!--en-->
<!--en-->
Blowfish has [extensive documentation](https://blowfish.page/docs/) that covers all aspects of the theme. Be sure to [read the docs](https://blowfish.page/docs/) to learn more about how to use the theme and its features.<!--en-->
<!--en-->
---<!--en-->
<!--en-->
## Installation<!--en-->
<!--en-->
Blowfish supports several installation methods - as a git submodule, a Hugo Module, or as a completely manual install.<!--en-->
<!--en-->
Detailed instructions for each method can be found in the [Installation](https://blowfish.page/docs/installation) docs. You should consult the documentation for the simplest setup experience. Below is a quick start guide using submodules if you are using git, or Hugo modules if you're already confident installing Hugo themes.<!--en-->
<!--en-->
### Quick start using Blowfish Tools<!--en-->
<!--en-->
> **Note:** Ensure you have **Node.js**, **Git** and **Hugo** installed, and that you have created a new Hugo project before proceeding.<!--en-->
<!--en-->
We just launched a new CLI tool to help you get started with Blowfish. It will create a new Hugo project, install the theme and set up the theme configuration files for you. It's still in beta so please [report any issues you find](https://github.com/nunocoracao/blowfish-tools).<!--en-->
<!--en-->
Install the CLI tool globally using npm (or other package manager):<!--en-->
```shell<!--en-->
npm i -g blowfish-tools<!--en-->
```<!--en-->
<!--en-->
Then run the command `blowfish-tools` to start an interactive run which will guide you through creation and configuration use-cases.<!--en-->
```shell<!--en-->
blowfish-tools<!--en-->
```<!--en-->
<!--en-->
You can also run the command `blowfish-tools new` to create a new Hugo project and install the theme in one go. Check the CLI help for more information.<!--en-->
```shell<!--en-->
blowfish-tools new mynewsite<!--en-->
```<!--en-->
<!--en-->
### Quick start using git submodules<!--en-->
<!--en-->
> **Note:** Ensure you have **Git** and **Hugo** installed, and that you have created a new Hugo project before proceeding.<!--en-->
<!--en-->
1. From your project directory, initialise git:<!--en-->
<!--en-->
   ```shell<!--en-->
   git init<!--en-->
   ```<!--en-->
<!--en-->
2. Configure Blowfish as a git submodule:<!--en-->
<!--en-->
   ```shell<!--en-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--en-->
   ```<!--en-->
<!--en-->
3. In the root folder of your website, delete the `hugo.toml` file that was generated by Hugo. Copy the `*.toml` config files from the theme into your `config/_default/` folder.<!--en-->
<!--en-->
   You will find these theme config files in the Hugo cache directory, or [download a copy](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) from GitHub.<!--en-->
<!--en-->
4. Follow the [Getting Started](https://blowfish.page/docs/getting-started/) instructions to configure your website.<!--en-->
<!--en-->
### Quick start using Hugo<!--en-->
<!--en-->
> **Note:** Ensure you have **Go** and **Hugo** installed, and that you have created a new Hugo project before proceeding.<!--en-->
<!--en-->
1. From your project directory, initialise Hugo Modules:<!--en-->
<!--en-->
   ```shell<!--en-->
   hugo mod init github.com/<username>/<repo-name><!--en-->
   ```<!--en-->
<!--en-->
2. Create `config/_default/module.toml` and add the following:<!--en-->
<!--en-->
   ```toml<!--en-->
   [[imports]]<!--en-->
   path = "github.com/nunocoracao/blowfish/v2"<!--en-->
   ```<!--en-->
<!--en-->
3. Start your server using `hugo server` and the theme will be downloaded automatically.<!--en-->
<!--en-->
4. In the root folder of your website, delete the `hugo.toml` file that was generated by Hugo. Copy the `*.toml` config files from the theme into your `config/_default/` folder.<!--en-->
<!--en-->
   > **Note:** Do not overwrite the `module.toml` file you created above!<!--en-->
   <!--en-->
   You will find these theme config files in the Hugo cache directory, or [download a copy](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) from GitHub.<!--en-->
<!--en-->
5. Follow the [Getting Started](https://blowfish.page/docs/getting-started/) instructions to configure your website.<!--en-->
<!--en-->
### Installing theme updates<!--en-->
<!--en-->
As new releases are posted, you can update the theme using Hugo. Simply run `hugo mod get -u` from your project directory and the theme will automatically update to the latest release.<!--en-->
<!--en-->
Detailed [update instructions](https://blowfish.page/docs/installation/#installing-updates) are available in the docs.<!--en-->
<!--en-->
---<!--en-->
<!--en-->
## Contributing<!--en-->
<!--en-->
Blowfish is expected to evolve over time. I intend to keep adding features and making changes as required.<!--en-->
<!--en-->
Feel free to get in touch with any issues or suggestions for new features you'd like to see.<!--en-->
<!--en-->
- 🐛 **Bug reports & issues:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--en-->
- 💡 **Ideas for new features:** Open a discussion on [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--en-->
- 🙋‍♀️ **General questions:** Head to [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--en-->
<!--en-->
If you're able to fix a bug or implement a new feature, I welcome PRs for this purpose. Learn more in the [contributing guidelines](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--en-->
<!--en-->
---<!--en-->
<!--en-->
## Stargazers over time<!--en-->
<!--en-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--en-->
<!--en-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--en-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | Deutsch | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--de-->
# Blowfish<!--de-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--de-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--de-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--de-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--de-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--de-->
<!--de-->
Blowfish ist ein leistungsstarkes, schlankes Theme für [Hugo](https://gohugo.io). Es wurde mit Tailwind CSS entwickelt und bietet ein klares, minimalistisches Design, das Ihre Inhalte in den Vordergrund stellt.<!--de-->
<!--de-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--de-->
<!--de-->
<!--de-->
🌏 [Demo-Website](https://blowfish.page/)<!--de-->
📑 [Theme-Dokumentation](https://blowfish.page/docs/)<!--de-->
💎 [Merchandise-Shop](http://tee.pub/lic/qwSlWVBL5zc)<!--de-->
🐛 [Fehlerberichte & Issues](https://github.com/nunocoracao/blowfish/issues)<!--de-->
💡 [Fragen & Feature-Anfragen](https://github.com/nunocoracao/blowfish/discussions)<!--de-->
<!--de-->
<!--de-->
<!--de-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--de-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--de-->
<!--de-->
<!--de-->
<!--de-->
## Funktionen<!--de-->
<!--de-->
- Vollständig responsives Layout mit Tailwind CSS 3.0<!--de-->
- Mehrere Farbschemata (oder vollständig anpassbar)<!--de-->
- Dark Mode (erzwungen ein/aus oder automatisch mit Benutzerumschaltung)<!--de-->
- Hochgradig anpassbare Konfiguration<!--de-->
- Firebase-Integration zur Unterstützung dynamischer Daten<!--de-->
- Ansichtszähler & Like-Mechanismus<!--de-->
- Verwandte Artikel<!--de-->
- Mehrere Homepage-Layouts<!--de-->
- Mehrere Autoren<!--de-->
- Artikelserien<!--de-->
- Datums- und gewichtsbasierte Artikelsortierung<!--de-->
- Zen-Modus zum Lesen von Artikeln<!--de-->
- Flexibel mit beliebigen Inhaltstypen, Taxonomien und Menüs<!--de-->
- Kopf- und Fußzeilenmenüs<!--de-->
- Verschachtelte Menüs & Unternavigationsmenüs<!--de-->
- Scrollbares Inhaltsverzeichnis<!--de-->
- Mehrsprachige Inhaltsunterstützung einschließlich RTL-Sprachen<!--de-->
- Möglichkeit, auf Beiträge auf Websites von Drittanbietern zu verlinken<!--de-->
- Unterstützung für mehrere Shortcodes wie Gallery, Timeline, GitHub-Karten und Carousels<!--de-->
- GitHub Alerts-Syntax, 15 Typen, zusammenklappbar<!--de-->
- Buymeacoffee-Integration<!--de-->
- Clientseitige Website-Suche mit Fuse.js<!--de-->
- Diagramme und Visualisierungen mit Mermaid<!--de-->
- Charts mit Chart.js<!--de-->
- TypeIt-Integration<!--de-->
- Youtube-Einbettungen mit Leistungsverbesserungen<!--de-->
- Mathematische Notation mit KaTeX<!--de-->
- SVG-Icons von FontAwesome 6<!--de-->
- Automatische Bildgrößenanpassung mit Hugo Pipes<!--de-->
- Überschriften-Anker, Inhaltsverzeichnisse, Code-Kopieren, Buttons, Badges und mehr<!--de-->
- HTML- und Emoji-Unterstützung in Artikeln 🎉<!--de-->
- SEO-freundlich mit Links zum Teilen in sozialen Medien<!--de-->
- Unterstützung für Fathom Analytics und Google Analytics<!--de-->
- RSS-Feeds, Favicons und Kommentare<!--de-->
- Erweiterte Anpassung mit einfachen Tailwind-Farbdefinitionen und -Stilen<!--de-->
- Optimiert für Leistung und Barrierefreiheit mit perfekten Lighthouse-Scores<!--de-->
- Vollständig dokumentiert mit regelmäßigen Updates<!--de-->
<!--de-->
---<!--de-->
<!--de-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--de-->
<!--de-->
## Dokumentation<!--de-->
<!--de-->
Blowfish verfügt über eine [umfangreiche Dokumentation](https://blowfish.page/docs/), die alle Aspekte des Themes abdeckt. Lesen Sie unbedingt die [Dokumentation](https://blowfish.page/docs/), um mehr über die Verwendung des Themes und seiner Funktionen zu erfahren.<!--de-->
<!--de-->
---<!--de-->
<!--de-->
## Installation<!--de-->
<!--de-->
Blowfish unterstützt mehrere Installationsmethoden - als git submodule, als Hugo Module oder als vollständig manuelle Installation.<!--de-->
<!--de-->
Detaillierte Anweisungen für jede Methode finden Sie in der [Installations-Dokumentation](https://blowfish.page/docs/installation). Für die einfachste Einrichtung sollten Sie die Dokumentation konsultieren. Im Folgenden finden Sie eine Schnellstartanleitung mit Submodulen, wenn Sie git verwenden, oder Hugo Modules, wenn Sie bereits Erfahrung mit der Installation von Hugo-Themes haben.<!--de-->
<!--de-->
### Schnellstart mit Blowfish Tools<!--de-->
<!--de-->
> **Hinweis:** Stellen Sie sicher, dass Sie **Node.js**, **Git** und **Hugo** installiert haben und dass Sie ein neues Hugo-Projekt erstellt haben, bevor Sie fortfahren.<!--de-->
<!--de-->
Wir haben gerade ein neues CLI-Tool gestartet, das Ihnen beim Einstieg in Blowfish hilft. Es erstellt ein neues Hugo-Projekt, installiert das Theme und richtet die Theme-Konfigurationsdateien für Sie ein. Es befindet sich noch in der Beta-Phase, also [melden Sie bitte alle Probleme, die Sie finden](https://github.com/nunocoracao/blowfish-tools).<!--de-->
<!--de-->
Installieren Sie das CLI-Tool global mit npm (oder einem anderen Paketmanager):<!--de-->
```shell<!--de-->
npm i -g blowfish-tools<!--de-->
```<!--de-->
<!--de-->
Führen Sie dann den Befehl `blowfish-tools` aus, um eine interaktive Sitzung zu starten, die Sie durch Erstellungs- und Konfigurationsanwendungsfälle führt.<!--de-->
```shell<!--de-->
blowfish-tools<!--de-->
```<!--de-->
<!--de-->
Sie können auch den Befehl `blowfish-tools new` ausführen, um ein neues Hugo-Projekt zu erstellen und das Theme in einem Schritt zu installieren. Weitere Informationen finden Sie in der CLI-Hilfe.<!--de-->
```shell<!--de-->
blowfish-tools new mynewsite<!--de-->
```<!--de-->
<!--de-->
### Schnellstart mit git submodules<!--de-->
<!--de-->
> **Hinweis:** Stellen Sie sicher, dass Sie **Git** und **Hugo** installiert haben und dass Sie ein neues Hugo-Projekt erstellt haben, bevor Sie fortfahren.<!--de-->
<!--de-->
1. Initialisieren Sie git aus Ihrem Projektverzeichnis:<!--de-->
<!--de-->
   ```shell<!--de-->
   git init<!--de-->
   ```<!--de-->
<!--de-->
2. Konfigurieren Sie Blowfish als git submodule:<!--de-->
<!--de-->
   ```shell<!--de-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--de-->
   ```<!--de-->
<!--de-->
3. Löschen Sie im Stammordner Ihrer Website die von Hugo generierte Datei `hugo.toml`. Kopieren Sie die `*.toml` Konfigurationsdateien aus dem Theme in Ihren `config/_default/` Ordner.<!--de-->
<!--de-->
   Sie finden diese Theme-Konfigurationsdateien im Hugo-Cache-Verzeichnis oder [laden Sie eine Kopie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) von GitHub herunter.<!--de-->
<!--de-->
4. Folgen Sie den Anweisungen unter [Erste Schritte](https://blowfish.page/docs/getting-started/), um Ihre Website zu konfigurieren.<!--de-->
<!--de-->
### Schnellstart mit Hugo<!--de-->
<!--de-->
> **Hinweis:** Stellen Sie sicher, dass Sie **Go** und **Hugo** installiert haben und dass Sie ein neues Hugo-Projekt erstellt haben, bevor Sie fortfahren.<!--de-->
<!--de-->
1. Initialisieren Sie Hugo Modules aus Ihrem Projektverzeichnis:<!--de-->
<!--de-->
   ```shell<!--de-->
   hugo mod init github.com/<username>/<repo-name><!--de-->
   ```<!--de-->
<!--de-->
2. Erstellen Sie `config/_default/module.toml` und fügen Sie Folgendes hinzu:<!--de-->
<!--de-->
   ```toml<!--de-->
   [[imports]]<!--de-->
   path = "github.com/nunocoracao/blowfish/v2"<!--de-->
   ```<!--de-->
<!--de-->
3. Starten Sie Ihren Server mit `hugo server` und das Theme wird automatisch heruntergeladen.<!--de-->
<!--de-->
4. Löschen Sie im Stammordner Ihrer Website die von Hugo generierte Datei `hugo.toml`. Kopieren Sie die `*.toml` Konfigurationsdateien aus dem Theme in Ihren `config/_default/` Ordner.<!--de-->
<!--de-->
   > **Hinweis:** Überschreiben Sie nicht die oben erstellte Datei `module.toml`!<!--de-->
<!--de-->
   Sie finden diese Theme-Konfigurationsdateien im Hugo-Cache-Verzeichnis oder [laden Sie eine Kopie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) von GitHub herunter.<!--de-->
<!--de-->
5. Folgen Sie den Anweisungen unter [Erste Schritte](https://blowfish.page/docs/getting-started/), um Ihre Website zu konfigurieren.<!--de-->
<!--de-->
### Theme-Updates installieren<!--de-->
<!--de-->
Wenn neue Versionen veröffentlicht werden, können Sie das Theme mit Hugo aktualisieren. Führen Sie einfach `hugo mod get -u` aus Ihrem Projektverzeichnis aus und das Theme wird automatisch auf die neueste Version aktualisiert.<!--de-->
<!--de-->
Detaillierte [Update-Anweisungen](https://blowfish.page/docs/installation/#installing-updates) sind in der Dokumentation verfügbar.<!--de-->
<!--de-->
---<!--de-->
<!--de-->
## Mitwirken<!--de-->
<!--de-->
Blowfish wird sich voraussichtlich im Laufe der Zeit weiterentwickeln. Ich beabsichtige, weiterhin Funktionen hinzuzufügen und nach Bedarf Änderungen vorzunehmen.<!--de-->
<!--de-->
Melden Sie sich gerne mit Problemen oder Vorschlägen für neue Funktionen, die Sie gerne sehen würden.<!--de-->
<!--de-->
- 🐛 **Fehlerberichte & Issues:** Verwenden Sie [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--de-->
- 💡 **Ideen für neue Funktionen:** Eröffnen Sie eine Diskussion auf [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--de-->
- 🙋‍♀️ **Allgemeine Fragen:** Gehen Sie zu [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--de-->
<!--de-->
Wenn Sie in der Lage sind, einen Fehler zu beheben oder eine neue Funktion zu implementieren, sind Pull Requests zu diesem Zweck willkommen. Erfahren Sie mehr in den [Richtlinien für Mitwirkende](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--de-->
<!--de-->
---<!--de-->
<!--de-->
## Stargazers im Zeitverlauf<!--de-->
<!--de-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--de-->
<!--de-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--de-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | Español | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--es-->
# Blowfish<!--es-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--es-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--es-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--es-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--es-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--es-->
<!--es-->
Blowfish está diseñado para ser un tema potente y ligero para [Hugo](https://gohugo.io). Está construido usando Tailwind CSS con un diseño limpio y minimalista que prioriza tu contenido.<!--es-->
<!--es-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--es-->
<!--es-->
<!--es-->
🌏 [Sitio de demostración](https://blowfish.page/)<!--es-->
📑 [Documentación del tema](https://blowfish.page/docs/)<!--es-->
💎 [Tienda de merchandising](http://tee.pub/lic/qwSlWVBL5zc)<!--es-->
🐛 [Reportes de errores y problemas](https://github.com/nunocoracao/blowfish/issues)<!--es-->
💡 [Preguntas y solicitudes de funcionalidades](https://github.com/nunocoracao/blowfish/discussions)<!--es-->
<!--es-->
<!--es-->
<!--es-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--es-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--es-->
<!--es-->
<!--es-->
<!--es-->
## Características<!--es-->
<!--es-->
- Diseño totalmente responsive construido con Tailwind CSS 3.0<!--es-->
- Múltiples esquemas de color (o personaliza completamente el tuyo propio)<!--es-->
- Modo oscuro (forzado activado/desactivado o cambio automático con opción de usuario)<!--es-->
- Configuración altamente personalizable<!--es-->
- Integración con Firebase para soportar datos dinámicos<!--es-->
- Contador de vistas y mecanismo de likes<!--es-->
- Artículos relacionados<!--es-->
- Múltiples diseños de página de inicio<!--es-->
- Múltiples autores<!--es-->
- Series de artículos<!--es-->
- Ordenación de artículos basada en fecha y peso<!--es-->
- Modo zen para lectura de artículos<!--es-->
- Flexible con cualquier tipo de contenido, taxonomías y menús<!--es-->
- Menús de encabezado y pie de página<!--es-->
- Menús anidados y menú de sub-navegación<!--es-->
- Tabla de contenidos con desplazamiento<!--es-->
- Soporte de contenido multilingüe incluyendo idiomas RTL<!--es-->
- Capacidad de enlazar a publicaciones en sitios web de terceros<!--es-->
- Soporte para varios shortcodes como Gallery, Timeline, GitHub cards y Carousels<!--es-->
- Sintaxis de GitHub Alerts, 15 tipos, soporte plegable<!--es-->
- Integración con Buymeacoffee<!--es-->
- Búsqueda en el sitio del lado del cliente impulsada por Fuse.js<!--es-->
- Diagramas y visualizaciones usando Mermaid<!--es-->
- Gráficos usando Chart.js<!--es-->
- Integración con TypeIt<!--es-->
- Incrustaciones de Youtube con mejoras de rendimiento<!--es-->
- Notación matemática usando KaTeX<!--es-->
- Iconos SVG de FontAwesome 6<!--es-->
- Redimensionamiento automático de imágenes usando Hugo Pipes<!--es-->
- Anclajes de encabezados, Tablas de contenidos, Copia de código, Botones, Insignias y más<!--es-->
- Soporte de HTML y Emoji en artículos 🎉<!--es-->
- SEO amigable con enlaces para compartir en redes sociales<!--es-->
- Soporte para Fathom Analytics y Google Analytics<!--es-->
- Feeds RSS, Favicons y soporte de comentarios<!--es-->
- Personalización avanzada usando definiciones de colores y estilos simples de Tailwind<!--es-->
- Optimizado para rendimiento y accesibilidad con puntuaciones perfectas en Lighthouse<!--es-->
- Completamente documentado con actualizaciones regulares<!--es-->
<!--es-->
---<!--es-->
<!--es-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--es-->
<!--es-->
## Documentación<!--es-->
<!--es-->
Blowfish tiene [documentación extensa](https://blowfish.page/docs/) que cubre todos los aspectos del tema. Asegúrate de [leer la documentación](https://blowfish.page/docs/) para aprender más sobre cómo usar el tema y sus características.<!--es-->
<!--es-->
---<!--es-->
<!--es-->
## Instalación<!--es-->
<!--es-->
Blowfish soporta varios métodos de instalación - como submódulo de git, módulo de Hugo, o como una instalación completamente manual.<!--es-->
<!--es-->
Las instrucciones detalladas para cada método se pueden encontrar en la documentación de [Instalación](https://blowfish.page/docs/installation). Deberías consultar la documentación para obtener la experiencia de configuración más simple. A continuación se presenta una guía de inicio rápido usando submódulos si estás usando git, o módulos de Hugo si ya tienes confianza instalando temas de Hugo.<!--es-->
<!--es-->
### Inicio rápido usando Blowfish Tools<!--es-->
<!--es-->
> **Nota:** Asegúrate de tener **Node.js**, **Git** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.<!--es-->
<!--es-->
Acabamos de lanzar una nueva herramienta CLI para ayudarte a comenzar con Blowfish. Creará un nuevo proyecto Hugo, instalará el tema y configurará los archivos de configuración del tema por ti. Todavía está en beta, así que por favor [reporta cualquier problema que encuentres](https://github.com/nunocoracao/blowfish-tools).<!--es-->
<!--es-->
Instala la herramienta CLI globalmente usando npm (u otro gestor de paquetes):<!--es-->
```shell<!--es-->
npm i -g blowfish-tools<!--es-->
```<!--es-->
<!--es-->
Luego ejecuta el comando `blowfish-tools` para iniciar una ejecución interactiva que te guiará a través de los casos de uso de creación y configuración.<!--es-->
```shell<!--es-->
blowfish-tools<!--es-->
```<!--es-->
<!--es-->
También puedes ejecutar el comando `blowfish-tools new` para crear un nuevo proyecto Hugo e instalar el tema de una sola vez. Consulta la ayuda de CLI para más información.<!--es-->
```shell<!--es-->
blowfish-tools new mynewsite<!--es-->
```<!--es-->
<!--es-->
### Inicio rápido usando submódulos de git<!--es-->
<!--es-->
> **Nota:** Asegúrate de tener **Git** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.<!--es-->
<!--es-->
1. Desde el directorio de tu proyecto, inicializa git:<!--es-->
<!--es-->
   ```shell<!--es-->
   git init<!--es-->
   ```<!--es-->
<!--es-->
2. Configura Blowfish como un submódulo de git:<!--es-->
<!--es-->
   ```shell<!--es-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--es-->
   ```<!--es-->
<!--es-->
3. En la carpeta raíz de tu sitio web, elimina el archivo `hugo.toml` que fue generado por Hugo. Copia los archivos de configuración `*.toml` del tema en tu carpeta `config/_default/`.<!--es-->
<!--es-->
   Encontrarás estos archivos de configuración del tema en el directorio de caché de Hugo, o [descarga una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) desde GitHub.<!--es-->
<!--es-->
4. Sigue las instrucciones de [Primeros Pasos](https://blowfish.page/docs/getting-started/) para configurar tu sitio web.<!--es-->
<!--es-->
### Inicio rápido usando Hugo<!--es-->
<!--es-->
> **Nota:** Asegúrate de tener **Go** y **Hugo** instalados, y de haber creado un nuevo proyecto Hugo antes de continuar.<!--es-->
<!--es-->
1. Desde el directorio de tu proyecto, inicializa los Módulos de Hugo:<!--es-->
<!--es-->
   ```shell<!--es-->
   hugo mod init github.com/<username>/<repo-name><!--es-->
   ```<!--es-->
<!--es-->
2. Crea `config/_default/module.toml` y agrega lo siguiente:<!--es-->
<!--es-->
   ```toml<!--es-->
   [[imports]]<!--es-->
   path = "github.com/nunocoracao/blowfish/v2"<!--es-->
   ```<!--es-->
<!--es-->
3. Inicia tu servidor usando `hugo server` y el tema se descargará automáticamente.<!--es-->
<!--es-->
4. En la carpeta raíz de tu sitio web, elimina el archivo `hugo.toml` que fue generado por Hugo. Copia los archivos de configuración `*.toml` del tema en tu carpeta `config/_default/`.<!--es-->
<!--es-->
   > **Nota:** ¡No sobrescribas el archivo `module.toml` que creaste arriba!<!--es-->
<!--es-->
   Encontrarás estos archivos de configuración del tema en el directorio de caché de Hugo, o [descarga una copia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) desde GitHub.<!--es-->
<!--es-->
5. Sigue las instrucciones de [Primeros Pasos](https://blowfish.page/docs/getting-started/) para configurar tu sitio web.<!--es-->
<!--es-->
### Instalación de actualizaciones del tema<!--es-->
<!--es-->
A medida que se publiquen nuevas versiones, puedes actualizar el tema usando Hugo. Simplemente ejecuta `hugo mod get -u` desde el directorio de tu proyecto y el tema se actualizará automáticamente a la última versión.<!--es-->
<!--es-->
Las [instrucciones de actualización](https://blowfish.page/docs/installation/#installing-updates) detalladas están disponibles en la documentación.<!--es-->
<!--es-->
---<!--es-->
<!--es-->
## Contribuciones<!--es-->
<!--es-->
Se espera que Blowfish evolucione con el tiempo. Tengo la intención de seguir agregando características y haciendo cambios según sea necesario.<!--es-->
<!--es-->
Siéntete libre de ponerte en contacto con cualquier problema o sugerencia de nuevas características que te gustaría ver.<!--es-->
<!--es-->
- 🐛 **Reportes de errores y problemas:** Usa [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--es-->
- 💡 **Ideas para nuevas características:** Abre una discusión en [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--es-->
- 🙋‍♀️ **Preguntas generales:** Dirígete a [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--es-->
<!--es-->
Si puedes corregir un error o implementar una nueva característica, acepto PRs para este propósito. Aprende más en las [guías de contribución](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--es-->
<!--es-->
---<!--es-->
<!--es-->
## Stargazers a lo largo del tiempo<!--es-->
<!--es-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--es-->
<!--es-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--es-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | Français | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--fr-->
# Blowfish<!--fr-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--fr-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--fr-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--fr-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--fr-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--fr-->
<!--fr-->
Blowfish est conçu pour être un thème puissant et léger pour [Hugo](https://gohugo.io). Il est construit avec Tailwind CSS avec un design épuré et minimaliste qui donne la priorité à votre contenu.<!--fr-->
<!--fr-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--fr-->
<!--fr-->
<!--fr-->
🌏 [Site de démonstration](https://blowfish.page/)<!--fr-->
📑 [Documentation du thème](https://blowfish.page/docs/)<!--fr-->
💎 [Boutique de produits dérivés](http://tee.pub/lic/qwSlWVBL5zc)<!--fr-->
🐛 [Rapports de bugs et problèmes](https://github.com/nunocoracao/blowfish/issues)<!--fr-->
💡 [Questions et demandes de fonctionnalités](https://github.com/nunocoracao/blowfish/discussions)<!--fr-->
<!--fr-->
<!--fr-->
<!--fr-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--fr-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--fr-->
<!--fr-->
<!--fr-->
<!--fr-->
## Fonctionnalités<!--fr-->
<!--fr-->
- Disposition entièrement responsive construite avec Tailwind CSS 3.0<!--fr-->
- Plusieurs palettes de couleurs (ou personnalisez entièrement la vôtre)<!--fr-->
- Mode sombre (forcé activé/désactivé ou basculement automatique avec commutateur utilisateur)<!--fr-->
- Configuration hautement personnalisable<!--fr-->
- Intégration Firebase pour prendre en charge les données dynamiques<!--fr-->
- Compteur de vues et mécanisme de likes<!--fr-->
- Articles connexes<!--fr-->
- Plusieurs mises en page pour la page d'accueil<!--fr-->
- Plusieurs auteurs<!--fr-->
- Séries d'articles<!--fr-->
- Tri des articles basé sur la date et le poids<!--fr-->
- Mode Zen pour la lecture d'articles<!--fr-->
- Flexible avec tous les types de contenu, taxonomies et menus<!--fr-->
- Menus d'en-tête et de pied de page<!--fr-->
- Menus imbriqués et menu de sous-navigation<!--fr-->
- Table des matières défilable<!--fr-->
- Support du contenu multilingue incluant la prise en charge des langues RTL<!--fr-->
- Possibilité de lier des articles sur des sites web tiers<!--fr-->
- Prise en charge de plusieurs shortcodes comme Gallery, Timeline, GitHub cards et Carousels<!--fr-->
- Syntaxe GitHub Alerts, 15 types, support pliable<!--fr-->
- Intégration Buymeacoffee<!--fr-->
- Recherche côté client alimentée par Fuse.js<!--fr-->
- Diagrammes et visualisations utilisant Mermaid<!--fr-->
- Graphiques utilisant Chart.js<!--fr-->
- Intégration TypeIt<!--fr-->
- Intégrations Youtube avec améliorations de performance<!--fr-->
- Notation mathématique utilisant KaTeX<!--fr-->
- Icônes SVG de FontAwesome 6<!--fr-->
- Redimensionnement automatique des images utilisant Hugo Pipes<!--fr-->
- Ancres de titres, Tables des matières, Copie de code, Boutons, Badges et plus<!--fr-->
- Support HTML et Emoji dans les articles 🎉<!--fr-->
- SEO optimisé avec liens pour partage sur les réseaux sociaux<!--fr-->
- Support de Fathom Analytics et Google Analytics<!--fr-->
- Flux RSS, Favicons et support des commentaires<!--fr-->
- Personnalisation avancée utilisant de simples définitions de couleurs et styles Tailwind<!--fr-->
- Optimisé pour les performances et l'accessibilité avec des scores Lighthouse parfaits<!--fr-->
- Entièrement documenté avec des mises à jour régulières<!--fr-->
<!--fr-->
---<!--fr-->
<!--fr-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--fr-->
<!--fr-->
## Documentation<!--fr-->
<!--fr-->
Blowfish dispose d'une [documentation complète](https://blowfish.page/docs/) qui couvre tous les aspects du thème. Assurez-vous de [lire la documentation](https://blowfish.page/docs/) pour en savoir plus sur l'utilisation du thème et de ses fonctionnalités.<!--fr-->
<!--fr-->
---<!--fr-->
<!--fr-->
## Installation<!--fr-->
<!--fr-->
Blowfish prend en charge plusieurs méthodes d'installation - en tant que sous-module git, module Hugo, ou en tant qu'installation complètement manuelle.<!--fr-->
<!--fr-->
Des instructions détaillées pour chaque méthode se trouvent dans la documentation [Installation](https://blowfish.page/docs/installation). Vous devriez consulter la documentation pour l'expérience de configuration la plus simple. Ci-dessous se trouve un guide de démarrage rapide utilisant les sous-modules si vous utilisez git, ou les modules Hugo si vous êtes déjà à l'aise avec l'installation de thèmes Hugo.<!--fr-->
<!--fr-->
### Démarrage rapide avec Blowfish Tools<!--fr-->
<!--fr-->
> **Note :** Assurez-vous d'avoir **Node.js**, **Git** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.<!--fr-->
<!--fr-->
Nous venons de lancer un nouvel outil CLI pour vous aider à démarrer avec Blowfish. Il créera un nouveau projet Hugo, installera le thème et configurera les fichiers de configuration du thème pour vous. Il est encore en version bêta, veuillez donc [signaler tout problème que vous rencontrez](https://github.com/nunocoracao/blowfish-tools).<!--fr-->
<!--fr-->
Installez l'outil CLI globalement en utilisant npm (ou un autre gestionnaire de paquets) :<!--fr-->
```shell<!--fr-->
npm i -g blowfish-tools<!--fr-->
```<!--fr-->
<!--fr-->
Ensuite, exécutez la commande `blowfish-tools` pour démarrer une exécution interactive qui vous guidera à travers les cas d'utilisation de création et de configuration.<!--fr-->
```shell<!--fr-->
blowfish-tools<!--fr-->
```<!--fr-->
<!--fr-->
Vous pouvez également exécuter la commande `blowfish-tools new` pour créer un nouveau projet Hugo et installer le thème en une seule fois. Consultez l'aide du CLI pour plus d'informations.<!--fr-->
```shell<!--fr-->
blowfish-tools new mynewsite<!--fr-->
```<!--fr-->
<!--fr-->
### Démarrage rapide avec les sous-modules git<!--fr-->
<!--fr-->
> **Note :** Assurez-vous d'avoir **Git** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.<!--fr-->
<!--fr-->
1. Depuis le répertoire de votre projet, initialisez git :<!--fr-->
<!--fr-->
   ```shell<!--fr-->
   git init<!--fr-->
   ```<!--fr-->
<!--fr-->
2. Configurez Blowfish comme un sous-module git :<!--fr-->
<!--fr-->
   ```shell<!--fr-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--fr-->
   ```<!--fr-->
<!--fr-->
3. Dans le dossier racine de votre site web, supprimez le fichier `hugo.toml` qui a été généré par Hugo. Copiez les fichiers de configuration `*.toml` du thème dans votre dossier `config/_default/`.<!--fr-->
<!--fr-->
   Vous trouverez ces fichiers de configuration du thème dans le répertoire cache de Hugo, ou [téléchargez une copie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) depuis GitHub.<!--fr-->
<!--fr-->
4. Suivez les instructions [Pour commencer](https://blowfish.page/docs/getting-started/) pour configurer votre site web.<!--fr-->
<!--fr-->
### Démarrage rapide avec Hugo<!--fr-->
<!--fr-->
> **Note :** Assurez-vous d'avoir **Go** et **Hugo** installés, et d'avoir créé un nouveau projet Hugo avant de continuer.<!--fr-->
<!--fr-->
1. Depuis le répertoire de votre projet, initialisez les modules Hugo :<!--fr-->
<!--fr-->
   ```shell<!--fr-->
   hugo mod init github.com/<username>/<repo-name><!--fr-->
   ```<!--fr-->
<!--fr-->
2. Créez `config/_default/module.toml` et ajoutez ce qui suit :<!--fr-->
<!--fr-->
   ```toml<!--fr-->
   [[imports]]<!--fr-->
   path = "github.com/nunocoracao/blowfish/v2"<!--fr-->
   ```<!--fr-->
<!--fr-->
3. Démarrez votre serveur en utilisant `hugo server` et le thème sera téléchargé automatiquement.<!--fr-->
<!--fr-->
4. Dans le dossier racine de votre site web, supprimez le fichier `hugo.toml` qui a été généré par Hugo. Copiez les fichiers de configuration `*.toml` du thème dans votre dossier `config/_default/`.<!--fr-->
<!--fr-->
   > **Note :** Ne remplacez pas le fichier `module.toml` que vous avez créé ci-dessus !<!--fr-->
<!--fr-->
   Vous trouverez ces fichiers de configuration du thème dans le répertoire cache de Hugo, ou [téléchargez une copie](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) depuis GitHub.<!--fr-->
<!--fr-->
5. Suivez les instructions [Pour commencer](https://blowfish.page/docs/getting-started/) pour configurer votre site web.<!--fr-->
<!--fr-->
### Installation des mises à jour du thème<!--fr-->
<!--fr-->
Au fur et à mesure que de nouvelles versions sont publiées, vous pouvez mettre à jour le thème en utilisant Hugo. Exécutez simplement `hugo mod get -u` depuis le répertoire de votre projet et le thème se mettra automatiquement à jour vers la dernière version.<!--fr-->
<!--fr-->
Des [instructions de mise à jour](https://blowfish.page/docs/installation/#installing-updates) détaillées sont disponibles dans la documentation.<!--fr-->
<!--fr-->
---<!--fr-->
<!--fr-->
## Contribuer<!--fr-->
<!--fr-->
Blowfish est destiné à évoluer au fil du temps. J'ai l'intention de continuer à ajouter des fonctionnalités et à apporter des modifications selon les besoins.<!--fr-->
<!--fr-->
N'hésitez pas à me contacter pour tout problème ou suggestion de nouvelles fonctionnalités que vous aimeriez voir.<!--fr-->
<!--fr-->
- 🐛 **Rapports de bugs et problèmes :** Utilisez [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--fr-->
- 💡 **Idées de nouvelles fonctionnalités :** Ouvrez une discussion sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--fr-->
- 🙋‍♀️ **Questions générales :** Rendez-vous sur [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--fr-->
<!--fr-->
Si vous êtes en mesure de corriger un bug ou de mettre en œuvre une nouvelle fonctionnalité, j'accueille les PR à cette fin. Apprenez-en plus dans les [directives de contribution](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--fr-->
<!--fr-->
---<!--fr-->
<!--fr-->
## Évolution des stargazers<!--fr-->
<!--fr-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--fr-->
<!--fr-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--fr-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | Indonesian<!--id-->
<!--id-->
# Blowfish  <!--id-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--id-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--id-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--id-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--id-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--id-->
<!--id-->
Blowfish dirancang sebagai tema yang kuat dan ringan untuk [Hugo](https://gohugo.io). Tema ini dibuat menggunakan Tailwind CSS dengan desain yang bersih dan minimalis, yang mengutamakan konten Anda.  <!--id-->
<!--id-->
![Tangkapan layar Blowfish](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)  <!--id-->
<!--id-->
🌏 [Situs demo](https://blowfish.page/)  <!--id-->
📑 [Dokumentasi tema](https://blowfish.page/docs/)  <!--id-->
💎 [Toko Merch](http://tee.pub/lic/qwSlWVBL5zc)  <!--id-->
🐛 [Laporan bug & masalah](https://github.com/nunocoracao/blowfish/issues)  <!--id-->
💡 [Pertanyaan & permintaan fitur](https://github.com/nunocoracao/blowfish/discussions)  <!--id-->
<!--id-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Belikan Saya Kopi" style="height: 60px !important;width: 217px !important;" ></a>  <!--id-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Toko Merch &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>  <!--id-->
<!--id-->
## Fitur  <!--id-->
<!--id-->
- Tata letak responsif sepenuhnya dengan Tailwind CSS 3.0  <!--id-->
- Beragam skema warna (atau sesuaikan sendiri)  <!--id-->
- Mode gelap (paksa aktif/nonaktif atau otomatis dengan pengaturan pengguna)  <!--id-->
- Konfigurasi yang sangat dapat disesuaikan  <!--id-->
- Integrasi Firebase untuk mendukung data dinamis  <!--id-->
- Penghitung tampilan & mekanisme suka  <!--id-->
- Artikel terkait  <!--id-->
- Beragam tata letak halaman utama  <!--id-->
- Dukungan untuk banyak penulis  <!--id-->
- Seri artikel  <!--id-->
- Penyortiran artikel berdasarkan tanggal dan bobot  <!--id-->
- Mode Zen untuk membaca artikel  <!--id-->
- Fleksibel dengan berbagai jenis konten, taksonomi, dan menu  <!--id-->
- Menu header dan footer  <!--id-->
- Menu bersarang & sub-menu navigasi  <!--id-->
- Daftar isi yang dapat digulir  <!--id-->
- Dukungan untuk konten multibahasa termasuk bahasa RTL  <!--id-->
- Kemampuan untuk menautkan ke artikel di situs web pihak ketiga  <!--id-->
- Dukungan untuk beberapa shortcode seperti Galeri, Timeline, Kartu GitHub, dan Carousel<!--id-->
- Sintaks GitHub Alerts, 15 jenis, dukungan lipat<!--id-->
- Integrasi BuyMeACoffee  <!--id-->
- Pencarian situs berbasis klien dengan Fuse.js  <!--id-->
- Diagram dan visualisasi menggunakan Mermaid  <!--id-->
- Grafik menggunakan Chart.js  <!--id-->
- Integrasi TypeIt  <!--id-->
- Sematan YouTube dengan peningkatan kinerja  <!--id-->
- Notasi matematika menggunakan KaTeX  <!--id-->
- Ikon SVG dari FontAwesome 6  <!--id-->
- Pengubahan ukuran gambar otomatis menggunakan Hugo Pipes  <!--id-->
- Anchor heading, daftar isi, salin kode, tombol, lencana, dan lainnya  <!--id-->
- Dukungan HTML dan emoji dalam artikel 🎉  <!--id-->
- SEO-friendly dengan tautan berbagi ke media sosial  <!--id-->
- Dukungan untuk Fathom Analytics dan Google Analytics  <!--id-->
- Dukungan RSS feed, favicon, dan komentar  <!--id-->
- Kustomisasi tingkat lanjut dengan definisi warna dan gaya Tailwind yang sederhana  <!--id-->
- Dioptimalkan untuk kinerja dan aksesibilitas dengan skor Lighthouse sempurna  <!--id-->
- Dokumentasi lengkap dengan pembaruan rutin  <!--id-->
<!--id-->
---<!--id-->
<!--id-->
![Logo Blowfish](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)  <!--id-->
<!--id-->
## Dokumentasi  <!--id-->
<!--id-->
Blowfish memiliki [dokumentasi lengkap](https://blowfish.page/docs/) yang mencakup semua aspek tema. Pastikan untuk [membaca dokumentasi](https://blowfish.page/docs/) guna mempelajari cara menggunakan tema dan fiturnya.  <!--id-->
<!--id-->
---<!--id-->
<!--id-->
## Instalasi  <!--id-->
<!--id-->
Blowfish mendukung beberapa metode instalasi - sebagai submodul git, Modul Hugo, atau instalasi manual sepenuhnya.  <!--id-->
<!--id-->
Instruksi terperinci untuk setiap metode dapat ditemukan dalam [dokumentasi instalasi](https://blowfish.page/docs/installation).  <!--id-->
<!--id-->
### Instalasi Cepat Menggunakan Blowfish Tools  <!--id-->
<!--id-->
> **Catatan:** Pastikan Anda sudah menginstal **Node.js**, **Git**, dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  <!--id-->
<!--id-->
Kami baru saja meluncurkan alat CLI baru untuk membantu Anda memulai dengan Blowfish. Ini akan membuat proyek Hugo baru, menginstal tema, dan mengatur file konfigurasi tema untuk Anda.  <!--id-->
<!--id-->
Instal alat CLI secara global menggunakan npm (atau manajer paket lainnya):  <!--id-->
```shell<!--id-->
npm i -g blowfish-tools<!--id-->
```<!--id-->
<!--id-->
Kemudian jalankan perintah berikut untuk memulai interaksi yang akan memandu Anda melalui proses pembuatan dan konfigurasi:  <!--id-->
```shell<!--id-->
blowfish-tools<!--id-->
```<!--id-->
<!--id-->
Untuk membuat proyek Hugo baru dan menginstal tema sekaligus, gunakan:  <!--id-->
```shell<!--id-->
blowfish-tools new mynewsite<!--id-->
```<!--id-->
<!--id-->
### Instalasi Cepat Menggunakan Git Submodules  <!--id-->
<!--id-->
> **Catatan:** Pastikan Anda sudah menginstal **Git** dan **Hugo**, serta telah membuat proyek Hugo sebelum melanjutkan.  <!--id-->
<!--id-->
1. Dari direktori proyek Anda, inisialisasi git:  <!--id-->
   ```shell<!--id-->
   git init<!--id-->
   ```<!--id-->
<!--id-->
2. Konfigurasikan Blowfish sebagai submodul git:  <!--id-->
   ```shell<!--id-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--id-->
   ```<!--id-->
<!--id-->
3. Hapus file `hugo.toml` di root proyek dan salin file `*.toml` dari tema ke dalam folder `config/_default/`.  <!--id-->
<!--id-->
4. Ikuti petunjuk [Memulai](https://blowfish.page/docs/getting-started/) untuk mengonfigurasi situs web Anda.  <!--id-->
<!--id-->
### Memperbarui Tema  <!--id-->
<!--id-->
Untuk memperbarui tema ke rilis terbaru, cukup jalankan perintah berikut di direktori proyek Anda:  <!--id-->
```shell<!--id-->
hugo mod get -u<!--id-->
```<!--id-->
<!--id-->
Instruksi pembaruan selengkapnya tersedia dalam [dokumentasi instalasi](https://blowfish.page/docs/installation/#installing-updates).  <!--id-->
<!--id-->
---<!--id-->
<!--id-->
## Kontribusi  <!--id-->
<!--id-->
Blowfish akan terus berkembang seiring waktu. Jika Anda memiliki ide atau ingin melaporkan bug, silakan hubungi kami:  <!--id-->
<!--id-->
- 🐛 **Laporan bug & masalah:** Gunakan [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)  <!--id-->
- 💡 **Ide fitur baru:** Buat diskusi di [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  <!--id-->
- 🙋‍♀️ **Pertanyaan umum:** Kunjungi [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)  <!--id-->
<!--id-->
Jika Anda bisa memperbaiki bug atau menambahkan fitur baru, kontribusi dalam bentuk PR sangat dihargai. Pelajari lebih lanjut dalam [panduan kontribusi](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).  <!--id-->
<!--id-->
---<!--id-->
<!--id-->
## Grafik Stargazers  <!--id-->
<!--id-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)  <!--id-->
<!--id-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--id-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | 日本語 | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--ja-->
# Blowfish<!--ja-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--ja-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--ja-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--ja-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--ja-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--ja-->
<!--ja-->
Blowfishは[Hugo](https://gohugo.io)のために設計された強力で軽量なテーマです。Tailwind CSS を使用し、コンテンツを優先したクリーンでミニマルなデザインでが特徴です。<!--ja-->
<!--ja-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--ja-->
<!--ja-->
<!--ja-->
🌏 [デモサイト](https://blowfish.page/)  <!--ja-->
📑 [ドキュメント](https://blowfish.page/docs/)  <!--ja-->
💎 [グッズストア](http://tee.pub/lic/qwSlWVBL5zc)  <!--ja-->
🐛 [バグ報告と問題点](https://github.com/nunocoracao/blowfish/issues)  <!--ja-->
💡 [質問と機能リクエスト](https://github.com/nunocoracao/blowfish/discussions)<!--ja-->
<!--ja-->
<!--ja-->
<!--ja-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--ja-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--ja-->
<!--ja-->
<!--ja-->
<!--ja-->
## 機能<!--ja-->
<!--ja-->
- Tailwind CSS 3.0 で構築された、完璧なレスポンシブデザイン<!--ja-->
- 複数の配色 (または、自分で完全にカスタマイズ可能)<!--ja-->
- ダークモード (強制オン/オフ か 自動選択・ユーザー切り替え)<!--ja-->
- 高度なカスタマイズが可能な設定<!--ja-->
- Firebase 連携で動的データをサポート<!--ja-->
- 閲覧数といいね機能<!--ja-->
- 関連記事<!--ja-->
- 複数のホームページレイアウト<!--ja-->
- 複数人の著者<!--ja-->
- シリーズ記事<!--ja-->
- 日付と価値付けによる記事の並べ替え<!--ja-->
- 記事を読むための Zen モード<!--ja-->
- あらゆるコンテンツタイプ、分類、メニューに柔軟に対応<!--ja-->
- ヘッダー/フッターメニュー<!--ja-->
- 階層化されたメニューとサブナビゲーションメニュー<!--ja-->
- スクロール可能な目次<!--ja-->
- RTL 言語を含む多言語コンテンツのサポート<!--ja-->
- サードパーティー ウェブサイトの投稿へのリンク<!--ja-->
- ギャラリー、タイムライン、GitHub カード、カルーセルなど、複数のショートコードに対応<!--ja-->
- GitHub Alerts 構文、15 種類、折りたたみ対応<!--ja-->
- Buy Me a Coffee 連携<!--ja-->
- Fuse.js を利用したクライアントサイドのサイト内検索<!--ja-->
- Mermaid を使用したダイアグラムや視覚化<!--ja-->
- Chart.js を使用したグラフ表示<!--ja-->
- TypeIt 連携<!--ja-->
- パフォーマンスを改善した YouTube 埋め込み<!--ja-->
- KaTeX を使用した数式表現<!--ja-->
- FontAwesome 6 の SVG アイコン<!--ja-->
- Hugo Pipes を使用した画像の自動リサイズ<!--ja-->
- アンカーリンク、目次、コードコピー、ボタン、バッジなど<!--ja-->
- 記事内での HTML と絵文字のサポート 🎉<!--ja-->
- ソーシャルメディアへの共有リンクを備えた SEO フレンドリーな設計<!--ja-->
- Fathom Analytics と Google Analytics のサポート<!--ja-->
- RSS フィード、ファビコン、コメント機能のサポート<!--ja-->
- Tailwind の色定義とスタイルを使った高度なカスタマイズ<!--ja-->
- Lighthouse で満点評価を獲得したパフォーマンスとアクセシビリティの最適化<!--ja-->
- 充実したドキュメントと定期的なアップデート<!--ja-->
<!--ja-->
---<!--ja-->
<!--ja-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--ja-->
<!--ja-->
## ドキュメント<!--ja-->
<!--ja-->
Blowfish には、テーマのあらゆる側面を網羅した[詳細なドキュメント](https://blowfish.page/docs/)があります。テーマの使い方や機能を詳しく知るために、必ず[ドキュメントを読んで](https://blowfish.page/docs/)ください。<!--ja-->
<!--ja-->
---<!--ja-->
<!--ja-->
## インストール<!--ja-->
<!--ja-->
Blowfish は、git サブモジュール、Hugo モジュール、または完全な手動インストールなど、いくつかのインストール方法をサポートしています。<!--ja-->
<!--ja-->
各方法の詳細な手順は、[インストール](https://blowfish.page/docs/installation)ドキュメントに記載されています。最も簡単なセットアップ方法については、ドキュメントを参照してください。以下にクイックスタートガイドを示します。git を使用している場合はサブモジュール、Hugo テーマのインストールに慣れている場合は Hugo モジュールを使用するのがおすすめです。<!--ja-->
<!--ja-->
### Blowfish Tools を使ったクイックスタート<!--ja-->
<!--ja-->
> **注意:**  **Node.js**、**Git**、**Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。<!--ja-->
<!--ja-->
Blowfish を使い始めるのに役立つ新しい CLI ツールをリリースしました。このツールは、新しい Hugo プロジェクトを作成し、テーマをインストールし、テーマ設定ファイルをセットアップします。まだベータ版なので、[問題を見つけたら報告してください](https://github.com/nunocoracao/blowfish-tools)。<!--ja-->
<!--ja-->
npm（または他のパッケージマネージャー）を使って CLI ツールをグローバルにインストールします:<!--ja-->
```shell<!--ja-->
npm i -g blowfish-tools<!--ja-->
```<!--ja-->
<!--ja-->
`blowfish-tools` コマンドを実行すると、対話形式でプロジェクトの作成と設定をガイドするツールが起動します。<!--ja-->
```shell<!--ja-->
blowfish-tools<!--ja-->
```<!--ja-->
<!--ja-->
`blowfish-tools new` コマンドを実行すると、新しい Hugo プロジェクトを作成し、テーマを一度にインストールすることもできます。詳細については、CLI のヘルプを参照してください。<!--ja-->
```shell<!--ja-->
blowfish-tools new mynewsite<!--ja-->
```<!--ja-->
<!--ja-->
### git サブモジュールを使ったクイックスタート<!--ja-->
<!--ja-->
> **注意:**  **Git**、**Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。<!--ja-->
<!--ja-->
1. プロジェクトディレクトリで、git を初期化します。<!--ja-->
<!--ja-->
   ```shell<!--ja-->
   git init<!--ja-->
   ```<!--ja-->
<!--ja-->
2. Blowfish を git サブモジュールとして設定します。<!--ja-->
<!--ja-->
   ```shell<!--ja-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--ja-->
   ```<!--ja-->
<!--ja-->
3. ウェブサイトのルートフォルダで、Hugo によって生成された `hugo.toml` ファイルを削除します。テーマから `*.toml` 設定ファイルをコピーして、`config/_default/` フォルダに保存します。<!--ja-->
<!--ja-->
   これらのテーマ設定ファイルは、Hugo キャッシュディレクトリにあります。または、GitHub から[コピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)できます。<!--ja-->
<!--ja-->
4. [Getting Started](https://blowfish.page/docs/getting-started/) の手順に従って、ウェブサイトを設定します。<!--ja-->
<!--ja-->
### Hugo を使ったクイックスタート<!--ja-->
<!--ja-->
> **注意:**  **Go** と **Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。<!--ja-->
<!--ja-->
1. プロジェクトディレクトリから、Hugo Modules を初期化します。<!--ja-->
<!--ja-->
   ```shell<!--ja-->
   hugo mod init github.com/<username>/<repo-name><!--ja-->
   ```<!--ja-->
<!--ja-->
2. `config/_default/module.toml` を作成し、以下を追加します。<!--ja-->
<!--ja-->
   ```toml<!--ja-->
   [[imports]]<!--ja-->
   path = "github.com/nunocoracao/blowfish/v2"<!--ja-->
   ```<!--ja-->
<!--ja-->
3. `hugo server` を使用してサーバーを起動すると、テーマが自動的にダウンロードされます。<!--ja-->
<!--ja-->
4. ウェブサイトのルートフォルダにある、Hugo によって生成された `hugo.toml` ファイルを削除します。テーマの `*.toml` 設定ファイルを `config/_default/` フォルダにコピーします。<!--ja-->
<!--ja-->
   > **注意:** 上記で作成した `module.toml` ファイルを上書きしないでください！<!--ja-->
<!--ja-->
   これらのテーマ設定ファイルは、Hugo のキャッシュディレクトリにあります。または、GitHub から[コピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)できます。<!--ja-->
<!--ja-->
5. [Getting Started](https://blowfish.page/docs/getting-started/) の手順に従って、ウェブサイトを設定します。<!--ja-->
<!--ja-->
### テーマのアップデートのインストール<!--ja-->
<!--ja-->
新しいリリースが公開されたら、Hugo を使ってテーマをアップデートできます。プロジェクトディレクトリから `hugo mod get -u` を実行するだけで、テーマは自動的に最新リリースにアップデートされます。<!--ja-->
<!--ja-->
詳細な[アップデート手順](https://blowfish.page/docs/installation/#installing-updates)はドキュメントに記載されています。<!--ja-->
<!--ja-->
---<!--ja-->
<!--ja-->
## 貢献<!--ja-->
<!--ja-->
Blowfish は時間とともに進化していく予定です。必要に応じて機能の追加や変更を続けていく予定です。<!--ja-->
<!--ja-->
問題や追加してほしい新機能の提案があれば、お気軽にご連絡ください。<!--ja-->
<!--ja-->
- 🐛 **バグ報告と問題点:** [GitHub Issues](https://github.com/nunocoracao/blowfish/issues) を使用してください<!--ja-->
- 💡 **新機能のアイデア:** [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) でディスカッションを開始してください<!--ja-->
- 🙋‍♀️ **一般的な質問:** [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) へ進んでください<!--ja-->
<!--ja-->
バグ修正や新機能の実装ができる方は、Pull Request を歓迎します。詳しくは[貢献ガイドライン](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md)をご覧ください。<!--ja-->
<!--ja-->
---<!--ja-->
<!--ja-->
## スター数の推移<!--ja-->
<!--ja-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--ja-->
<!--ja-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--ja-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | Português (BR) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--pt-br-->
# Blowfish<!--pt-br-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--pt-br-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--pt-br-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--pt-br-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--pt-br-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--pt-br-->
<!--pt-br-->
Blowfish foi projetado para ser um tema poderoso e leve para [Hugo](https://gohugo.io). É construído usando Tailwind CSS com um design limpo e minimalista que prioriza o seu conteúdo.<!--pt-br-->
<!--pt-br-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--pt-br-->
<!--pt-br-->
<!--pt-br-->
🌏 [Site de demonstração](https://blowfish.page/)<!--pt-br-->
📑 [Documentação do tema](https://blowfish.page/docs/)<!--pt-br-->
💎 [Loja de produtos](http://tee.pub/lic/qwSlWVBL5zc)<!--pt-br-->
🐛 [Relatórios de bugs e problemas](https://github.com/nunocoracao/blowfish/issues)<!--pt-br-->
💡 [Perguntas e solicitações de recursos](https://github.com/nunocoracao/blowfish/discussions)<!--pt-br-->
<!--pt-br-->
<!--pt-br-->
<!--pt-br-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--pt-br-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--pt-br-->
<!--pt-br-->
<!--pt-br-->
<!--pt-br-->
## Recursos<!--pt-br-->
<!--pt-br-->
- Layout totalmente responsivo construído com Tailwind CSS 3.0<!--pt-br-->
- Múltiplos esquemas de cores (ou personalize completamente o seu próprio)<!--pt-br-->
- Modo escuro (forçado ligado/desligado ou alternância automática com botão do usuário)<!--pt-br-->
- Configuração altamente personalizável<!--pt-br-->
- Integração com Firebase para suportar dados dinâmicos<!--pt-br-->
- Contagem de visualizações e mecanismo de curtidas<!--pt-br-->
- Artigos relacionados<!--pt-br-->
- Múltiplos layouts de página inicial<!--pt-br-->
- Múltiplos autores<!--pt-br-->
- Séries de artigos<!--pt-br-->
- Ordenação de artigos baseada em data e peso<!--pt-br-->
- Modo zen para leitura de artigos<!--pt-br-->
- Flexível com qualquer tipo de conteúdo, taxonomias e menus<!--pt-br-->
- Menus de cabeçalho e rodapé<!--pt-br-->
- Menus aninhados e menu de sub-navegação<!--pt-br-->
- Índice com rolagem<!--pt-br-->
- Suporte a conteúdo multilíngue incluindo suporte para idiomas RTL<!--pt-br-->
- Capacidade de linkar para posts em sites de terceiros<!--pt-br-->
- Suporte para vários shortcodes como Gallery, Timeline, GitHub cards e Carousels<!--pt-br-->
- Sintaxe de alertas do GitHub, 15 tipos, suporte recolhível<!--pt-br-->
- Integração com Buymeacoffee<!--pt-br-->
- Busca no site do lado do cliente alimentada por Fuse.js<!--pt-br-->
- Diagramas e visualizações usando Mermaid<!--pt-br-->
- Gráficos usando Chart.js<!--pt-br-->
- Integração com TypeIt<!--pt-br-->
- Embeds do Youtube com melhorias de performance<!--pt-br-->
- Notação matemática usando KaTeX<!--pt-br-->
- Ícones SVG do FontAwesome 6<!--pt-br-->
- Redimensionamento automático de imagens usando Hugo Pipes<!--pt-br-->
- Âncoras de cabeçalho, Índices, Cópia de código, Botões, Badges e mais<!--pt-br-->
- Suporte a HTML e Emoji em artigos 🎉<!--pt-br-->
- SEO amigável com links para compartilhamento em redes sociais<!--pt-br-->
- Suporte a Fathom Analytics e Google Analytics<!--pt-br-->
- Suporte a feeds RSS, Favicons e comentários<!--pt-br-->
- Personalização avançada usando definições simples de cores e estilos do Tailwind<!--pt-br-->
- Otimizado para performance e acessibilidade com pontuações perfeitas no Lighthouse<!--pt-br-->
- Totalmente documentado com atualizações regulares<!--pt-br-->
<!--pt-br-->
---<!--pt-br-->
<!--pt-br-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--pt-br-->
<!--pt-br-->
## Documentação<!--pt-br-->
<!--pt-br-->
Blowfish possui [documentação extensa](https://blowfish.page/docs/) que cobre todos os aspectos do tema. Certifique-se de [ler a documentação](https://blowfish.page/docs/) para saber mais sobre como usar o tema e seus recursos.<!--pt-br-->
<!--pt-br-->
---<!--pt-br-->
<!--pt-br-->
## Instalação<!--pt-br-->
<!--pt-br-->
Blowfish suporta vários métodos de instalação - como submódulo git, Hugo Module, ou como uma instalação completamente manual.<!--pt-br-->
<!--pt-br-->
Instruções detalhadas para cada método podem ser encontradas na documentação de [Instalação](https://blowfish.page/docs/installation). Você deve consultar a documentação para a experiência de configuração mais simples. Abaixo está um guia de início rápido usando submódulos se você estiver usando git, ou Hugo modules se você já estiver confiante em instalar temas Hugo.<!--pt-br-->
<!--pt-br-->
### Início rápido usando Blowfish Tools<!--pt-br-->
<!--pt-br-->
> **Nota:** Certifique-se de ter **Node.js**, **Git** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.<!--pt-br-->
<!--pt-br-->
Acabamos de lançar uma nova ferramenta CLI para ajudá-lo a começar com Blowfish. Ela criará um novo projeto Hugo, instalará o tema e configurará os arquivos de configuração do tema para você. Ainda está em beta, então por favor [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).<!--pt-br-->
<!--pt-br-->
Instale a ferramenta CLI globalmente usando npm (ou outro gerenciador de pacotes):<!--pt-br-->
```shell<!--pt-br-->
npm i -g blowfish-tools<!--pt-br-->
```<!--pt-br-->
<!--pt-br-->
Em seguida, execute o comando `blowfish-tools` para iniciar uma execução interativa que o guiará pelos casos de uso de criação e configuração.<!--pt-br-->
```shell<!--pt-br-->
blowfish-tools<!--pt-br-->
```<!--pt-br-->
<!--pt-br-->
Você também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma vez. Verifique a ajuda da CLI para mais informações.<!--pt-br-->
```shell<!--pt-br-->
blowfish-tools new mynewsite<!--pt-br-->
```<!--pt-br-->
<!--pt-br-->
### Início rápido usando submódulos git<!--pt-br-->
<!--pt-br-->
> **Nota:** Certifique-se de ter **Git** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.<!--pt-br-->
<!--pt-br-->
1. Do diretório do seu projeto, inicialize o git:<!--pt-br-->
<!--pt-br-->
   ```shell<!--pt-br-->
   git init<!--pt-br-->
   ```<!--pt-br-->
<!--pt-br-->
2. Configure Blowfish como um submódulo git:<!--pt-br-->
<!--pt-br-->
   ```shell<!--pt-br-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--pt-br-->
   ```<!--pt-br-->
<!--pt-br-->
3. Na pasta raiz do seu site, exclua o arquivo `hugo.toml` que foi gerado pelo Hugo. Copie os arquivos de configuração `*.toml` do tema para sua pasta `config/_default/`.<!--pt-br-->
<!--pt-br-->
   Você encontrará esses arquivos de configuração do tema no diretório de cache do Hugo, ou [baixe uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.<!--pt-br-->
<!--pt-br-->
4. Siga as instruções de [Primeiros Passos](https://blowfish.page/docs/getting-started/) para configurar seu site.<!--pt-br-->
<!--pt-br-->
### Início rápido usando Hugo<!--pt-br-->
<!--pt-br-->
> **Nota:** Certifique-se de ter **Go** e **Hugo** instalados, e que você criou um novo projeto Hugo antes de prosseguir.<!--pt-br-->
<!--pt-br-->
1. Do diretório do seu projeto, inicialize os Hugo Modules:<!--pt-br-->
<!--pt-br-->
   ```shell<!--pt-br-->
   hugo mod init github.com/<username>/<repo-name><!--pt-br-->
   ```<!--pt-br-->
<!--pt-br-->
2. Crie `config/_default/module.toml` e adicione o seguinte:<!--pt-br-->
<!--pt-br-->
   ```toml<!--pt-br-->
   [[imports]]<!--pt-br-->
   path = "github.com/nunocoracao/blowfish/v2"<!--pt-br-->
   ```<!--pt-br-->
<!--pt-br-->
3. Inicie seu servidor usando `hugo server` e o tema será baixado automaticamente.<!--pt-br-->
<!--pt-br-->
4. Na pasta raiz do seu site, exclua o arquivo `hugo.toml` que foi gerado pelo Hugo. Copie os arquivos de configuração `*.toml` do tema para sua pasta `config/_default/`.<!--pt-br-->
<!--pt-br-->
   > **Nota:** Não sobrescreva o arquivo `module.toml` que você criou acima!<!--pt-br-->
<!--pt-br-->
   Você encontrará esses arquivos de configuração do tema no diretório de cache do Hugo, ou [baixe uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.<!--pt-br-->
<!--pt-br-->
5. Siga as instruções de [Primeiros Passos](https://blowfish.page/docs/getting-started/) para configurar seu site.<!--pt-br-->
<!--pt-br-->
### Instalando atualizações do tema<!--pt-br-->
<!--pt-br-->
À medida que novos lançamentos são publicados, você pode atualizar o tema usando Hugo. Simplesmente execute `hugo mod get -u` do diretório do seu projeto e o tema será atualizado automaticamente para a versão mais recente.<!--pt-br-->
<!--pt-br-->
[Instruções detalhadas de atualização](https://blowfish.page/docs/installation/#installing-updates) estão disponíveis na documentação.<!--pt-br-->
<!--pt-br-->
---<!--pt-br-->
<!--pt-br-->
## Contribuindo<!--pt-br-->
<!--pt-br-->
Blowfish deve evoluir ao longo do tempo. Pretendo continuar adicionando recursos e fazendo alterações conforme necessário.<!--pt-br-->
<!--pt-br-->
Sinta-se à vontade para entrar em contato com quaisquer problemas ou sugestões de novos recursos que você gostaria de ver.<!--pt-br-->
<!--pt-br-->
- 🐛 **Relatórios de bugs e problemas:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--pt-br-->
- 💡 **Ideias para novos recursos:** Abra uma discussão em [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--pt-br-->
- 🙋‍♀️ **Perguntas gerais:** Vá para [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--pt-br-->
<!--pt-br-->
Se você for capaz de corrigir um bug ou implementar um novo recurso, dou as boas-vindas a PRs para este propósito. Saiba mais nas [diretrizes de contribuição](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--pt-br-->
<!--pt-br-->
---<!--pt-br-->
<!--pt-br-->
## Stargazers ao longo do tempo<!--pt-br-->
<!--pt-br-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--pt-br-->
<!--pt-br-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--pt-br-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | Português (PT) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--pt-pt-->
# Blowfish<!--pt-pt-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--pt-pt-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--pt-pt-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--pt-pt-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--pt-pt-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--pt-pt-->
<!--pt-pt-->
Blowfish foi desenhado para ser um tema poderoso e leve para [Hugo](https://gohugo.io). É construído com Tailwind CSS com um design limpo e minimalista que prioriza o seu conteúdo.<!--pt-pt-->
<!--pt-pt-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--pt-pt-->
<!--pt-pt-->
<!--pt-pt-->
🌏 [Site de demonstração](https://blowfish.page/)<!--pt-pt-->
📑 [Documentação do tema](https://blowfish.page/docs/)<!--pt-pt-->
💎 [Loja de merchandising](http://tee.pub/lic/qwSlWVBL5zc)<!--pt-pt-->
🐛 [Relatórios de erros & problemas](https://github.com/nunocoracao/blowfish/issues)<!--pt-pt-->
💡 [Questões & pedidos de funcionalidades](https://github.com/nunocoracao/blowfish/discussions)<!--pt-pt-->
<!--pt-pt-->
<!--pt-pt-->
<!--pt-pt-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--pt-pt-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--pt-pt-->
<!--pt-pt-->
<!--pt-pt-->
<!--pt-pt-->
## Funcionalidades<!--pt-pt-->
<!--pt-pt-->
- Layout totalmente responsivo construído com Tailwind CSS 3.0<!--pt-pt-->
- Múltiplos esquemas de cores (ou personalize completamente o seu próprio)<!--pt-pt-->
- Modo escuro (forçado ligado/desligado ou alternância automática com seletor do utilizador)<!--pt-pt-->
- Configuração altamente personalizável<!--pt-pt-->
- Integração com Firebase para suportar dados dinâmicos<!--pt-pt-->
- Contagem de visualizações & mecanismo de gostos<!--pt-pt-->
- Artigos relacionados<!--pt-pt-->
- Múltiplos layouts de página inicial<!--pt-pt-->
- Múltiplos autores<!--pt-pt-->
- Séries de artigos<!--pt-pt-->
- Ordenação de artigos baseada em data e peso<!--pt-pt-->
- Modo Zen para leitura de artigos<!--pt-pt-->
- Flexível com qualquer tipo de conteúdo, taxonomias e menus<!--pt-pt-->
- Menus de cabeçalho e rodapé<!--pt-pt-->
- Menus aninhados & menu de sub-navegação<!--pt-pt-->
- Índice de conteúdos com scroll<!--pt-pt-->
- Suporte para conteúdo multilingue incluindo suporte para línguas RTL<!--pt-pt-->
- Capacidade de criar links para publicações em sites de terceiros<!--pt-pt-->
- Suporte para vários shortcodes como Gallery, Timeline, GitHub cards e Carousels<!--pt-pt-->
- Sintaxe GitHub Alerts, 15 tipos, suporte para elementos expansíveis<!--pt-pt-->
- Integração Buymeacoffee<!--pt-pt-->
- Pesquisa no site do lado do cliente alimentada por Fuse.js<!--pt-pt-->
- Diagramas e visualizações usando Mermaid<!--pt-pt-->
- Gráficos usando Chart.js<!--pt-pt-->
- Integração TypeIt<!--pt-pt-->
- Embeds de Youtube com melhorias de desempenho<!--pt-pt-->
- Notação matemática usando KaTeX<!--pt-pt-->
- Ícones SVG do FontAwesome 6<!--pt-pt-->
- Redimensionamento automático de imagens usando Hugo Pipes<!--pt-pt-->
- Âncoras de cabeçalhos, Índices de Conteúdos, Cópia de código, Botões, Badges e mais<!--pt-pt-->
- Suporte HTML e Emoji em artigos 🎉<!--pt-pt-->
- Otimizado para SEO com links para partilha em redes sociais<!--pt-pt-->
- Suporte para Fathom Analytics e Google Analytics<!--pt-pt-->
- Feeds RSS, Favicons e suporte para comentários<!--pt-pt-->
- Personalização avançada usando definições simples de cores e estilos do Tailwind<!--pt-pt-->
- Otimizado para desempenho e acessibilidade com pontuações perfeitas no Lighthouse<!--pt-pt-->
- Totalmente documentado com atualizações regulares<!--pt-pt-->
<!--pt-pt-->
---<!--pt-pt-->
<!--pt-pt-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--pt-pt-->
<!--pt-pt-->
## Documentação<!--pt-pt-->
<!--pt-pt-->
Blowfish tem [documentação extensa](https://blowfish.page/docs/) que cobre todos os aspetos do tema. Certifique-se de [ler a documentação](https://blowfish.page/docs/) para saber mais sobre como usar o tema e as suas funcionalidades.<!--pt-pt-->
<!--pt-pt-->
---<!--pt-pt-->
<!--pt-pt-->
## Instalação<!--pt-pt-->
<!--pt-pt-->
Blowfish suporta vários métodos de instalação - como um submódulo git, um Módulo Hugo, ou como uma instalação completamente manual.<!--pt-pt-->
<!--pt-pt-->
Instruções detalhadas para cada método podem ser encontradas na documentação de [Instalação](https://blowfish.page/docs/installation). Deve consultar a documentação para a experiência de configuração mais simples. Abaixo está um guia de início rápido usando submódulos se estiver a usar git, ou módulos Hugo se já está confiante na instalação de temas Hugo.<!--pt-pt-->
<!--pt-pt-->
### Início rápido usando Blowfish Tools<!--pt-pt-->
<!--pt-pt-->
> **Nota:** Certifique-se de que tem **Node.js**, **Git** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.<!--pt-pt-->
<!--pt-pt-->
Acabámos de lançar uma nova ferramenta CLI para ajudá-lo a começar com Blowfish. Ela irá criar um novo projeto Hugo, instalar o tema e configurar os ficheiros de configuração do tema para si. Ainda está em beta por isso [reporte quaisquer problemas que encontrar](https://github.com/nunocoracao/blowfish-tools).<!--pt-pt-->
<!--pt-pt-->
Instale a ferramenta CLI globalmente usando npm (ou outro gestor de pacotes):<!--pt-pt-->
```shell<!--pt-pt-->
npm i -g blowfish-tools<!--pt-pt-->
```<!--pt-pt-->
<!--pt-pt-->
Depois execute o comando `blowfish-tools` para iniciar uma execução interativa que irá guiá-lo através da criação e casos de uso de configuração.<!--pt-pt-->
```shell<!--pt-pt-->
blowfish-tools<!--pt-pt-->
```<!--pt-pt-->
<!--pt-pt-->
Também pode executar o comando `blowfish-tools new` para criar um novo projeto Hugo e instalar o tema de uma só vez. Consulte a ajuda da CLI para mais informações.<!--pt-pt-->
```shell<!--pt-pt-->
blowfish-tools new mynewsite<!--pt-pt-->
```<!--pt-pt-->
<!--pt-pt-->
### Início rápido usando submódulos git<!--pt-pt-->
<!--pt-pt-->
> **Nota:** Certifique-se de que tem **Git** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.<!--pt-pt-->
<!--pt-pt-->
1. A partir do diretório do seu projeto, inicialize o git:<!--pt-pt-->
<!--pt-pt-->
   ```shell<!--pt-pt-->
   git init<!--pt-pt-->
   ```<!--pt-pt-->
<!--pt-pt-->
2. Configure Blowfish como um submódulo git:<!--pt-pt-->
<!--pt-pt-->
   ```shell<!--pt-pt-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--pt-pt-->
   ```<!--pt-pt-->
<!--pt-pt-->
3. Na pasta raiz do seu site, elimine o ficheiro `hugo.toml` que foi gerado pelo Hugo. Copie os ficheiros de configuração `*.toml` do tema para a sua pasta `config/_default/`.<!--pt-pt-->
<!--pt-pt-->
   Irá encontrar estes ficheiros de configuração do tema no diretório de cache do Hugo, ou [descarregue uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.<!--pt-pt-->
<!--pt-pt-->
4. Siga as instruções de [Introdução](https://blowfish.page/docs/getting-started/) para configurar o seu site.<!--pt-pt-->
<!--pt-pt-->
### Início rápido usando Hugo<!--pt-pt-->
<!--pt-pt-->
> **Nota:** Certifique-se de que tem **Go** e **Hugo** instalados, e que criou um novo projeto Hugo antes de continuar.<!--pt-pt-->
<!--pt-pt-->
1. A partir do diretório do seu projeto, inicialize os Módulos Hugo:<!--pt-pt-->
<!--pt-pt-->
   ```shell<!--pt-pt-->
   hugo mod init github.com/<username>/<repo-name><!--pt-pt-->
   ```<!--pt-pt-->
<!--pt-pt-->
2. Crie `config/_default/module.toml` e adicione o seguinte:<!--pt-pt-->
<!--pt-pt-->
   ```toml<!--pt-pt-->
   [[imports]]<!--pt-pt-->
   path = "github.com/nunocoracao/blowfish/v2"<!--pt-pt-->
   ```<!--pt-pt-->
<!--pt-pt-->
3. Inicie o seu servidor usando `hugo server` e o tema será descarregado automaticamente.<!--pt-pt-->
<!--pt-pt-->
4. Na pasta raiz do seu site, elimine o ficheiro `hugo.toml` que foi gerado pelo Hugo. Copie os ficheiros de configuração `*.toml` do tema para a sua pasta `config/_default/`.<!--pt-pt-->
<!--pt-pt-->
   > **Nota:** Não sobrescreva o ficheiro `module.toml` que criou acima!<!--pt-pt-->
<!--pt-pt-->
   Irá encontrar estes ficheiros de configuração do tema no diretório de cache do Hugo, ou [descarregue uma cópia](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) do GitHub.<!--pt-pt-->
<!--pt-pt-->
5. Siga as instruções de [Introdução](https://blowfish.page/docs/getting-started/) para configurar o seu site.<!--pt-pt-->
<!--pt-pt-->
### Instalar atualizações do tema<!--pt-pt-->
<!--pt-pt-->
À medida que novas versões são publicadas, pode atualizar o tema usando Hugo. Simplesmente execute `hugo mod get -u` a partir do diretório do seu projeto e o tema será automaticamente atualizado para a versão mais recente.<!--pt-pt-->
<!--pt-pt-->
[Instruções detalhadas de atualização](https://blowfish.page/docs/installation/#installing-updates) estão disponíveis na documentação.<!--pt-pt-->
<!--pt-pt-->
---<!--pt-pt-->
<!--pt-pt-->
## Contribuir<!--pt-pt-->
<!--pt-pt-->
Espera-se que Blowfish evolua ao longo do tempo. Pretendo continuar a adicionar funcionalidades e fazer alterações conforme necessário.<!--pt-pt-->
<!--pt-pt-->
Sinta-se à vontade para entrar em contacto com quaisquer problemas ou sugestões para novas funcionalidades que gostaria de ver.<!--pt-pt-->
<!--pt-pt-->
- 🐛 **Relatórios de erros & problemas:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--pt-pt-->
- 💡 **Ideias para novas funcionalidades:** Abra uma discussão em [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--pt-pt-->
- 🙋‍♀️ **Questões gerais:** Dirija-se a [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--pt-pt-->
<!--pt-pt-->
Se conseguir corrigir um erro ou implementar uma nova funcionalidade, aceito PRs para este propósito. Saiba mais nas [diretrizes de contribuição](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--pt-pt-->
<!--pt-pt-->
---<!--pt-pt-->
<!--pt-pt-->
## Stargazers ao longo do tempo<!--pt-pt-->
<!--pt-pt-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--pt-pt-->
<!--pt-pt-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--pt-pt-->
[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Français](https://github.com/nunocoracao/blowfish/blob/main/README.fr.md) | [Deutsch](https://github.com/nunocoracao/blowfish/blob/main/README.de.md) | [Português (PT)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-pt.md) | [Português (BR)](https://github.com/nunocoracao/blowfish/blob/main/README.pt-br.md) | [Español](https://github.com/nunocoracao/blowfish/blob/main/README.es.md) | [日本語](https://github.com/nunocoracao/blowfish/blob/main/README.ja.md) | 简体中文 | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md)<!--zh-cn-->
# Blowfish<!--zh-cn-->
[![Netlify Status](https://api.netlify.com/api/v1/badges/6e5256d4-3148-4d69-879c-310341020fe9/deploy-status)](https://app.netlify.com/sites/snazzy-dango-efb2ec/deploys)<!--zh-cn-->
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.141.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.141.0)<!--zh-cn-->
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)<!--zh-cn-->
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)<!--zh-cn-->
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)<!--zh-cn-->
<!--zh-cn-->
Blowfish 是一个轻量有力的 Hugo 主题。它使用 Tailwind CSS 构建，洁净而富有极简主义，是你网站内容载体的不二之选。  <!--zh-cn-->
<!--zh-cn-->
![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)<!--zh-cn-->
<!--zh-cn-->
<!--zh-cn-->
🌏 [示例站点](https://blowfish.page/zh-cn/)  <!--zh-cn-->
📑 [主题文档](https://blowfish.page/zh-cn/docs/)  <!--zh-cn-->
💎 [周边商店](http://tee.pub/lic/qwSlWVBL5zc)  <!--zh-cn-->
🐛 [Bug 问题报告](https://github.com/nunocoracao/blowfish/issues)  <!--zh-cn-->
💡 [问答和功能需求](https://github.com/nunocoracao/blowfish/discussions)<!--zh-cn-->
<!--zh-cn-->
<!--zh-cn-->
<!--zh-cn-->
<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><!--zh-cn-->
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a><!--zh-cn-->
<!--zh-cn-->
<!--zh-cn-->
<!--zh-cn-->
## 特性<!--zh-cn-->
<!--zh-cn-->
- 使用 Tailwind CSS 3.0 构建全面响应式布局<!--zh-cn-->
- 多种配色方案，亦可完全由你定义<!--zh-cn-->
- 夜间模式支持（手动开启/关闭或根据用户设备自动切换）<!--zh-cn-->
- 高度自主的配置方式<!--zh-cn-->
- 集成 Firebase 以支持动态数据统计<!--zh-cn-->
- 集成浏览次数统计和点赞机制<!--zh-cn-->
- “相关文章”列表生成<!--zh-cn-->
- 多种主页布局<!--zh-cn-->
- 多作者模式支持<!--zh-cn-->
- 可将文章整理成选集列表<!--zh-cn-->
- 禅模式支持<!--zh-cn-->
- 可灵活定义各种内容类型、分类标准和菜单<!--zh-cn-->
- 页眉和页脚双重菜单可选<!--zh-cn-->
- 支持嵌套菜单和子导航菜单<!--zh-cn-->
- 支持多语言内容，包括 RTL 语言<!--zh-cn-->
- 可链接到第三方网站上的帖子<!--zh-cn-->
- 支持多种简码，如图库、时间轴、GitHub 卡片和图片灯箱<!--zh-cn-->
- 支持 GitHub Alerts 语法、15 种类型和可折叠功能<!--zh-cn-->
- 支持 Buymeacoffee<!--zh-cn-->
- 拥有由 Fuse.js 支持的客户端一侧网站搜索功能<!--zh-cn-->
- 植入了基于 Mermaid 的图表功能<!--zh-cn-->
- 植入了基于 Chart.js 的图表功能<!--zh-cn-->
- 集成逼真的自动打字效果<!--zh-cn-->
- 集成性能优化的 Youtube 卡片简码<!--zh-cn-->
- 集成 KaTeX 的公式<!--zh-cn-->
- 集成 FontAwesome 6 的矢量图标引用<!--zh-cn-->
- 使用 Hugo Pipes 自动调整图像大小<!--zh-cn-->
- 拥有标题锚点、目录、代码复制、按钮、分类徽章等功能<!--zh-cn-->
- 文章内部支持 HTML 和 Emoji 🎉<!--zh-cn-->
- 便于搜索引擎优化，文章可一键分享到社交媒体 <!--zh-cn-->
- 支持 Fathom Analytics 和 Google Analytics<!--zh-cn-->
- 支持 RSS 订阅、网站图标和评论功能<!--zh-cn-->
- 可使用简单的 Tailwind 对颜色和样式进行高级定制<!--zh-cn-->
- 优化了性能和可访问性，拥有极高的 Lighthouse 评分<!--zh-cn-->
- 文档齐全，定期更新<!--zh-cn-->
<!--zh-cn-->
---<!--zh-cn-->
<!--zh-cn-->
![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)<!--zh-cn-->
<!--zh-cn-->
## 文档<!--zh-cn-->
Blowfish 有 [全面的文档](https://blowfish.page/zh-cn/docs/)，覆盖主题的任何一个方面。 请确保 [阅读文档](https://blowfish.page/zh-cn/docs/) 以详细了解本主题有哪些功能。<!--zh-cn-->
<!--zh-cn-->
---<!--zh-cn-->
<!--zh-cn-->
## 安装<!--zh-cn-->
<!--zh-cn-->
Blowfish 支持多种安装方式，既能作为 git 子模块、Hugo 模块，也可完全手动安装。<!--zh-cn-->
<!--zh-cn-->
每种方法的详细说明都可以在 [安装](https://blowfish.page/zh-cn/docs/installation) 文档中找到。为了获得最简单的安装体验，请查阅文档。如果你使用的是 git，请阅读下面使用子模块的快速开始指南；如果你能安装 Hugo 主题，请阅读下面 Hugo 模块的快速开始指南。<!--zh-cn-->
<!--zh-cn-->
### 使用 Blowfish Tools 快速开始<!--zh-cn-->
<!--zh-cn-->
> **注：** 请确保你已安装 **Node.js**、 **Git** 和 **Hugo** ，且已经创建了一个 Hugo 工程。<!--zh-cn-->
<!--zh-cn-->
我们最新推出了一个新的 CLI 工具，帮助你开始使用 Blowfish。它将为你创建一个新的 Hugo 项目、安装主题并设置主题配置文件。它仍处于测试阶段，因此请 [报告你发现的任何问题](https://github.com/nunocoracao/blowfish-tools)。<!--zh-cn-->
<!--zh-cn-->
使用 npm（或其他软件包管理器）全局安装 CLI 工具：<!--zh-cn-->
```shell<!--zh-cn-->
npm i -g blowfish-tools<!--zh-cn-->
```<!--zh-cn-->
<!--zh-cn-->
然后运行 "blowfish-tools "命令，开启一个交互式进程，引导你完成创建和配置。<!--zh-cn-->
```shell<!--zh-cn-->
blowfish-tools<!--zh-cn-->
```<!--zh-cn-->
<!--zh-cn-->
你也可以运行命令 `blowfish-tools new` 来创建一个新的 Hugo 项目，并一次性安装主题。更多信息请查看 CLI 帮助。<!--zh-cn-->
```shell<!--zh-cn-->
blowfish-tools new mynewsite<!--zh-cn-->
```<!--zh-cn-->
<!--zh-cn-->
### 使用 git 子模块快速开始<!--zh-cn-->
<!--zh-cn-->
> **注：** 请确保你已安装 **Git** 和 **Hugo** ，且已经创建了一个 Hugo 工程。<!--zh-cn-->
<!--zh-cn-->
1. 从你工程的所在目录初始化 git 仓库<!--zh-cn-->
<!--zh-cn-->
   ```shell<!--zh-cn-->
   git init<!--zh-cn-->
   ```<!--zh-cn-->
<!--zh-cn-->
2. 配置 Blowfish 作为 git 子模块<!--zh-cn-->
<!--zh-cn-->
   ```shell<!--zh-cn-->
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish<!--zh-cn-->
   ```<!--zh-cn-->
<!--zh-cn-->
3. 在你网站的根目录中删除由 Hugo 自动生成的 `hugo.toml` 文件，并把主题文件夹中的 `*.toml` 配置文件复制到你的 `config/_default/` 文件夹中<!--zh-cn-->
<!--zh-cn-->
   你可在 Hugo 缓存目录中找到主题配置文件，或者也可以从[这里](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)下载一份。<!--zh-cn-->
<!--zh-cn-->
4. 按照[入门指南](https://blowfish.page/zh-cn/docs/getting-started/)来配置你的网站<!--zh-cn-->
<!--zh-cn-->
### 使用 Hugo 快速开始<!--zh-cn-->
<!--zh-cn-->
> **注：** 确保你已经安装了 **Go** 和 **Hugo**，且已创建了一个 Hugo 工程。<!--zh-cn-->
<!--zh-cn-->
1. 从你工程的所在目录初始化 Hugo 模块<!--zh-cn-->
<!--zh-cn-->
   ```shell<!--zh-cn-->
   hugo mod init github.com/<用户名>/<仓库名><!--zh-cn-->
   ```<!--zh-cn-->
<!--zh-cn-->
2. 新建 `config/_default/module.toml` 并写入以下内容:<!--zh-cn-->
<!--zh-cn-->
   ```toml<!--zh-cn-->
   [[imports]]<!--zh-cn-->
   path = "github.com/nunocoracao/blowfish/v2"<!--zh-cn-->
   ```<!--zh-cn-->
<!--zh-cn-->
3. 运行 `hugo server` 启动你的本地服务器，本主题就会自动下载。<!--zh-cn-->
<!--zh-cn-->
4. 在你网站的根目录中删除由 Hugo 自动生成的 `hugo.toml`文件，并把主题文件夹中的`*.toml`配置文件复制到你的 `config/_default/`文件夹中<!--zh-cn-->
<!--zh-cn-->
   > **注** 不要覆盖之前的 `module.toml` ！<!--zh-cn-->
<!--zh-cn-->
   你可在 Hugo 缓存目录中找到主题配置文件，或者也可以从[这里](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)下载一份。<!--zh-cn-->
<!--zh-cn-->
5. 按照[入门指南](https://blowfish.page/zh-cn/docs/getting-started/)来配置你的网站<!--zh-cn-->
<!--zh-cn-->
### Installing theme updates<!--zh-cn-->
<!--zh-cn-->
当新的主题版本发布，你可以在你网站的根目录使用 Hugo 命令`hugo mod get -u`来简单地把主题更新到最新版本。<!--zh-cn-->
<!--zh-cn-->
详细的[更新指南](https://blowfish.page/zh-cn/docs/installation/#%E6%9B%B4%E6%96%B0%E4%B8%BB%E9%A2%98)在文档中。<!--zh-cn-->
<!--zh-cn-->
---<!--zh-cn-->
<!--zh-cn-->
## 贡献<!--zh-cn-->
<!--zh-cn-->
Blowfish 将会持续进化。我打算不断增加功能，并按需进行修改。<!--zh-cn-->
<!--zh-cn-->
如有任何问题或对新功能的建议，请随时联系我。  <!--zh-cn-->
<!--zh-cn-->
- 🐛 **Bug 问题报告** 使用 [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)<!--zh-cn-->
- 💡 **发表关于新功能的想法：** 在 [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) 发起讨论<!--zh-cn-->
- 🙋‍♀️ **一般问题：** 查看 [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)<!--zh-cn-->
<!--zh-cn-->
如果你有能力修补 Bug 或者实现新功能，欢迎提交 PR。[了解更多](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).<!--zh-cn-->
<!--zh-cn-->
---<!--zh-cn-->
<!--zh-cn-->
## Star 数量统计<!--zh-cn-->
<!--zh-cn-->
[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)<!--zh-cn-->
<!--zh-cn-->
<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a><!--zh-cn-->
