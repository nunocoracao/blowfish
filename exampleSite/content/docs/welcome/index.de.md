---
title: "Willkommen bei Blowfish"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "Beginnen Sie mit der aktuellen Version von Blowfish, einem modernen Hugo-Theme für Blogs, Dokumentation, Portfolios und mehr."
lastmod: 2026-08-30
tags: ["neu", "dokumentation"]
series: ["Dokumentation"]
series_order: 1
---

{{< lead >}}
Blowfish 3 ist ein modernes Hugo-Theme für Blogs, Dokumentation, Portfolios und mehr.
{{< /lead >}}

{{< alert >}}
Sie möchten möglichst schnell eine neue Website erstellen? Führen Sie `npx blowfish-tools new <site>` aus und folgen Sie anschließend der [Installationsanleitung]({{< ref "docs/installation" >}}). Die folgenden Abschnitte dokumentieren die wichtigsten Funktionen aus Blowfish 2, die auch in der aktuellen Version verfügbar sind.
{{< /alert >}}

Das ursprüngliche Ziel von Blowfish war es, ein Theme zu entwickeln, das einfach und leichtgewichtig ist. Das Theme ist ein Fork von <a target="_blank" href="https://github.com/nunocoracao/congo">Congo</a> und erweitert dessen ursprüngliche Vision.

## Tailwind CSS 3.0

Tailwind CSS ist das Herzstück von Blowfish und diese Version enthält die neueste [Tailwind CSS Version 3](https://tailwindcss.com/blog/tailwindcss-v3). Sie bringt Leistungsoptimierungen und Unterstützung für einige großartige neue CSS-Funktionen mit sich.

{{< youtube "TmWIrBPE6Bc" >}}

## Mehrsprachige Unterstützung

Eine häufig angefragte Funktion: Blowfish ist jetzt mehrsprachig! Wenn Sie Ihre Inhalte in mehreren Sprachen veröffentlichen, wird die Website mit allen verfügbaren Übersetzungen erstellt.

<div class="text-2xl text-center" style="font-size: 2.8rem">🇬🇧 🇩🇪 🇫🇷 🇪🇸 🇨🇳 🇧🇷 🇹🇷 🇧🇩</div>

Dank der Beiträge aus der Community wurde Blowfish bereits in [dreißig Sprachen](https://github.com/nunocoracao/blowfish/tree/main/i18n) übersetzt, und weitere werden im Laufe der Zeit hinzugefügt. Übrigens sind [Pull Requests](https://github.com/nunocoracao/blowfish/pulls) für neue Sprachen immer willkommen!

## RTL-Sprachunterstützung

Einer der Vorteile der neuen Tailwind- und Mehrsprachigkeitsfunktionen ist die Möglichkeit, RTL-Sprachunterstützung hinzuzufügen. Wenn aktiviert, wird der gesamte Seiteninhalt von rechts nach links neu angeordnet. Jedes Element im Theme wurde umgestaltet, um in diesem Modus großartig auszusehen, was Autoren hilft, die Inhalte in RTL-Sprachen erstellen möchten.

RTL wird pro Sprache gesteuert, sodass Sie sowohl RTL- als auch LTR-Inhalte in Ihren Projekten mischen können und das Theme entsprechend reagiert.

## Automatische Bildgrößenanpassung

Eine große Änderung in Blowfish 2.0 ist die Hinzufügung der automatischen Bildgrößenanpassung. Mithilfe der Leistung von Hugo Pipes werden Bilder in Markdown-Inhalten jetzt automatisch auf verschiedene Ausgabegrößen skaliert. Diese werden dann mit HTML `srcset`-Attributen präsentiert, wodurch optimierte Dateigrößen an Ihre Websitebesucher geliefert werden.

![Bild mit alternativem Text](image-resizing.png)

```html
<!-- Markdown: ![Mein Bild](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w"
  src="/image_635x0_resize_q75_box.jpg"
  alt="Mein Bild"
/>
```

Das Beste daran ist, dass Sie nichts ändern müssen! Verwenden Sie einfach die Standard-Markdown-Bildsyntax und lassen Sie das Theme den Rest erledigen. Wenn Sie etwas mehr Kontrolle wünschen, wurde der `figure`-Shortcode komplett überarbeitet, um die gleichen Größenanpassungsvorteile zu bieten.


## Website-Suche

Angetrieben von [Fuse.js](https://fusejs.io) ermöglicht die Website-Suche Besuchern, Ihre Inhalte schnell und einfach zu finden. Alle Suchen werden clientseitig durchgeführt, was bedeutet, dass auf dem Server nichts konfiguriert werden muss und Abfragen superschnell ausgeführt werden. Aktivieren Sie einfach die Funktion in Ihrer Site-Konfiguration und schon kann es losgehen. Ach ja, und sie unterstützt auch die vollständige Tastaturnavigation!

## Inhaltsverzeichnisse

Eine häufig angefragte Funktion: Blowfish unterstützt jetzt Inhaltsverzeichnisse auf Artikelseiten. Sie können es auf dieser Seite in Aktion sehen. Die Inhalte sind vollständig responsiv und passen sich an, um den verfügbaren Platz bei verschiedenen Bildschirmauflösungen optimal zu nutzen.

Verfügbar auf globaler oder pro-Artikel-Basis, kann das Inhaltsverzeichnis mithilfe der Standard-Hugo-Konfigurationswerte vollständig angepasst werden, sodass Sie das Verhalten an Ihr Projekt anpassen können.

## Verbesserungen der Barrierefreiheit

Von der Hinzufügung von ARIA-Beschreibungen zu mehr Elementen bis hin zur einfachen Anpassung des Kontrasts bestimmter Textelemente ist diese Version die bisher barrierefreieste.

Version 2 führt auch "Zum Inhalt springen"- und "Nach oben scrollen"-Links ein, die eine schnelle Navigation ermöglichen. Es gibt auch Tastaturkürzel zum Aktivieren von Elementen wie der Suche, ohne zur Maus greifen zu müssen.

Die neuen Bildgrößenanpassungsfunktionen bieten auch volle Kontrolle über `alt`- und `title`-Elemente, was ein barrierefreies Erlebnis für alle Besucher ermöglicht.

## Und vieles mehr

Es gibt unzählige weitere Funktionen zu entdecken. Von der Möglichkeit, Taxonomien auf Artikeln und Listenseiten anzuzeigen, bis hin zur Verwendung des neuen `headline`-Autorenparameters zur Anpassung Ihrer Homepage. Es gibt auch verbesserte JSON-LD-strukturierte Daten, die die SEO-Leistung weiter optimieren.
