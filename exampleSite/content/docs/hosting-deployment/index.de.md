---
title: "Hosting & Bereitstellung"
weight: 14
draft: false
description: "Erfahren Sie, wie Sie eine Blowfish-Website bereitstellen."
slug: "hosting-deployment"
tags: ["dokumentation", "hosting", "bereitstellung", "github", "netlify", "render"]
series: ["Dokumentation"]
series_order: 14
---

Es gibt viele Möglichkeiten, Ihre mit Blowfish erstellte Hugo-Website bereitzustellen. Das Theme ist so konzipiert, dass es in fast jedem Bereitstellungsszenario flexibel einsetzbar ist.

Blowfish verwendet durchgehend relative URLs im gesamten Theme. Dies ermöglicht es, Websites einfach in Unterordnern und auf Hosts wie GitHub Pages bereitzustellen. Normalerweise ist keine spezielle Konfiguration erforderlich, solange der `baseURL`-Parameter in der `hugo.toml`-Datei korrekt konfiguriert wurde.

Die offizielle Hugo [Hosting und Bereitstellung](https://gohugo.io/hosting-and-deployment/) Dokumentation ist der beste Ort, um zu lernen, wie Sie Ihre Website bereitstellen. Die folgenden Abschnitte enthalten einige spezifische Theme-Konfigurationsdetails, die Ihnen helfen können, bei bestimmten Anbietern reibungslos zu deployen.

**Wählen Sie Ihren Anbieter:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [Shared Hosting, VPS oder privater Webserver](#shared-hosting-vps-oder-privater-webserver)

---

## GitHub Pages

GitHub ermöglicht das Hosting auf [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) mit Actions. Um diese Funktionalität zu aktivieren, aktivieren Sie Pages in Ihrem Repository und erstellen Sie einen neuen Actions-Workflow, um Ihre Website zu erstellen und bereitzustellen.

Die Datei muss im YAML-Format sein, im Verzeichnis `.github/workflows/` Ihres GitHub-Repositories platziert und mit der Erweiterung `.yml` benannt werden.

{{< alert >}}
**Wichtig:** Stellen Sie sicher, dass Sie den korrekten Branch-Namen unter `branches` und im Deploy-Schritt-`if`-Parameter auf den Quell-Branch setzen, der in Ihrem Projekt verwendet wird.
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-24.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

Pushen Sie die Konfigurationsdatei zu GitHub und die Action sollte automatisch ausgeführt werden. Sie könnte beim ersten Mal fehlschlagen, und Sie müssen den Abschnitt **Settings > Pages** Ihres GitHub-Repos besuchen, um zu überprüfen, ob die Quelle korrekt ist. Sie sollte auf den `gh-pages`-Branch eingestellt sein.

{{< screenshot src="github-pages-source.jpg" alt="Screenshot der GitHub Pages Quelle" >}}

Sobald die Einstellungen konfiguriert sind, führen Sie die Action erneut aus und die Website sollte korrekt erstellt und bereitgestellt werden. Sie können die Actions-Logs einsehen, um zu überprüfen, ob alles erfolgreich bereitgestellt wurde.

## Netlify

Um auf [Netlify](https://www.netlify.com) bereitzustellen, erstellen Sie eine neue Continuous Deployment-Site und verknüpfen Sie sie mit Ihrem Quellcode. Die Build-Einstellungen können in der Netlify-UI leer gelassen werden. Sie müssen nur die Domain konfigurieren, die Sie verwenden werden.

{{< screenshot src="netlify-build-settings.jpg" alt="Screenshot der Netlify Build-Einstellungen" >}}

Erstellen Sie dann im Root-Verzeichnis Ihres Site-Repositories eine `netlify.toml`-Datei:

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # Auf bevorzugte Zeitzone setzen

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

Diese Konfiguration geht davon aus, dass Sie Blowfish als Hugo-Modul bereitstellen. Wenn Sie das Theme mit einer anderen Methode installiert haben, ändern Sie den Build-Befehl einfach zu `hugo --gc --minify -b $URL`.

Wenn Sie die Konfigurationsdatei in Ihr Repository pushen, sollte Netlify Ihre Website automatisch bereitstellen. Sie können die Deploy-Logs in der Netlify-UI überprüfen, um nach Fehlern zu suchen.

## Render

Die Bereitstellung auf [Render](https://render.com) ist sehr unkompliziert und die gesamte Konfiguration erfolgt über die Render-UI.

Erstellen Sie eine neue **Static Site** und verknüpfen Sie sie mit dem Code-Repository Ihres Projekts. Konfigurieren Sie dann einfach den Build-Befehl als `hugo --gc --minify` und das Publish-Verzeichnis als `public`.

{{< screenshot src="render-settings.jpg" alt="Screenshot der Render-Einstellungen" >}}

Die Website wird automatisch erstellt und bereitgestellt, wenn Sie eine Änderung in Ihr Repository pushen.

## Cloudflare Pages

Cloudflare bietet den [Pages](https://pages.cloudflare.com/)-Dienst an, der Hugo-Blogs hosten kann. Er erstellt die Website aus einem Git-Repository und hostet sie dann auf dem CDN von Cloudflare. Folgen Sie deren [Hugo-Bereitstellungsanleitung](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site), um loszulegen.

Die von Cloudflare angebotene Rocket Loader™-Funktion versucht, das Rendering von Webseiten mit JavaScript zu beschleunigen, aber sie unterbricht den Erscheinungsbild-Umschalter im Theme. Sie kann auch ein störendes Hell-/Dunkel-Bildschirmflackern beim Durchsuchen Ihrer Website verursachen, da Skripte in der falschen Reihenfolge geladen werden.

Dieses Problem kann behoben werden, indem Sie es deaktivieren:

- Gehen Sie zum [Cloudflare Dashboard](https://dash.cloudflare.com)
- Klicken Sie auf Ihren Domainnamen in der Liste
- Klicken Sie auf _Optimization_ im Abschnitt _Speed_
- Scrollen Sie nach unten zu _Rocket Loader™_ und deaktivieren Sie es

Hugo-Websites, die mit Blowfish erstellt wurden, laden auch mit deaktivierter Funktion immer noch sehr schnell.

## Shared Hosting, VPS oder privater Webserver

Die Verwendung von traditionellem Webhosting oder die Bereitstellung auf Ihrem eigenen Webserver ist so einfach wie das Erstellen Ihrer Hugo-Website und das Übertragen der Dateien auf Ihren Host.

Stellen Sie sicher, dass der `baseURL`-Parameter in `hugo.toml` auf die vollständige URL zum Root Ihrer Website gesetzt ist (einschließlich aller Subdomains oder Unterordner).

Erstellen Sie dann Ihre Website mit `hugo` und kopieren Sie den Inhalt des Ausgabeverzeichnisses in das Root-Verzeichnis Ihres Webservers und Sie sind bereit. Standardmäßig heißt das Ausgabeverzeichnis `public`.

_Wenn Sie einen Hosting-Anbieter benötigen, schauen Sie sich [Vultr](https://www.vultr.com/?ref=8957394-8H) oder [DigitalOcean](https://m.do.co/c/36841235e565) an. Die Anmeldung über diese Affiliate-Links gibt Ihnen bis zu 100 $ kostenloses Guthaben, damit Sie den Service ausprobieren können._
