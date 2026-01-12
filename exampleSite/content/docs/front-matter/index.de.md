---
title: "Front Matter"
weight: 7
draft: false
description: "Alle in Blowfish verfügbaren Front-Matter-Variablen."
slug: "front-matter"
tags: ["front matter", "konfiguration", "dokumentation"]
series: ["Dokumentation"]
series_order: 7
---

Zusätzlich zu den [Standard-Hugo-Front-Matter-Parametern](https://gohugo.io/content-management/front-matter/#front-matter-variables) fügt Blowfish eine Reihe zusätzlicher Optionen hinzu, um die Darstellung einzelner Artikel anzupassen. Alle verfügbaren Theme-Front-Matter-Parameter sind unten aufgelistet.

Die Standardwerte der Front-Matter-Parameter werden von der [Basiskonfiguration]({{< ref "configuration" >}}) des Themes geerbt, sodass Sie diese Parameter nur in Ihrem Front Matter angeben müssen, wenn Sie die Standardwerte überschreiben möchten.

<!-- prettier-ignore-start -->
| Name | Standard | Beschreibung |
| --- | --- | --- |
| `title` | _Nicht gesetzt_ | Der Name des Artikels. |
| `description` | _Nicht gesetzt_ | Die Textbeschreibung für den Artikel. Wird in den HTML-Metadaten verwendet. |
| `externalUrl` | _Nicht gesetzt_ | Wenn dieser Artikel auf einer Drittanbieter-Website veröffentlicht wird, die URL zu diesem Artikel. Die Angabe einer URL verhindert die Generierung einer Inhaltsseite und alle Verweise auf diesen Artikel verlinken direkt zur Drittanbieter-Website. |
| `editURL` | `article.editURL` | Wenn `showEdit` aktiv ist, die URL für den Bearbeitungslink. |
| `editAppendPath` | `article.editAppendPath` | Wenn `showEdit` aktiv ist, ob der Pfad zum aktuellen Artikel an die unter `editURL` gesetzte URL angehängt werden soll. |
| `groupByYear` | `list.groupByYear` | Ob Artikel auf Listenseiten nach Jahr gruppiert werden. |
| `menu` | _Nicht gesetzt_ | Wenn ein Wert angegeben wird, erscheint ein Link zu diesem Artikel in den genannten Menüs. Gültige Werte sind `main` oder `footer`. |
| `robots` | _Nicht gesetzt_ | String, der angibt, wie Robots diesen Artikel behandeln sollen. Wenn gesetzt, wird er im Seitenkopf ausgegeben. Siehe [Googles Dokumentation](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) für gültige Werte. |
| `sharingLinks` | `article.sharingLinks` | Welche Teilen-Links am Ende dieses Artikels angezeigt werden. Wenn nicht angegeben oder auf `false` gesetzt, werden keine Links angezeigt. |
| `showAuthor` | `article.showAuthor` | Ob die Autorenbox für den Standardautor in der Artikelfußzeile angezeigt wird. |
| `showAuthorBottom` | `article.showAuthorBottom` | Autorenboxen werden am unteren Rand jeder Seite statt oben angezeigt. |
| `authors` | _Nicht gesetzt_ | Array von Werten für Autoren, überschreibt bei Angabe die `showAuthor`-Einstellungen für Seite oder Website. Wird für die Funktion mehrerer Autoren verwendet, siehe [diese Seite]({{< ref "multi-author" >}}) für Details zur Konfiguration. |
| `showAuthorsBadges` | `article.showAuthorsBadges` | Ob die `authors`-Taxonomien im Artikel- oder Listen-Header angezeigt werden. Dies erfordert die Einrichtung von `multiple authors` und der `authors`-Taxonomie. Siehe [diese Seite]({{< ref "multi-author" >}}) für Details. |
| `featureimage` | _Nicht gesetzt_ | Link zum Feature-Bild |
| `featureimagecaption` | _Nicht gesetzt_ | Bildunterschrift für das Feature-Bild. Wird nur im heroStyle `big` angezeigt |
| `showHero` | `article.showHero` | Ob das Thumbnail-Bild als Hero-Bild innerhalb der Artikelseite angezeigt wird. |
| `heroStyle` | `article.heroStyle` | Stil zur Anzeige des Hero-Bildes, gültige Optionen sind: `basic`, `big`, `background`, `thumbAndBackground`. |
| `imagePosition` | _Nicht gesetzt_ | Setzt die Position des Feature-Bildes mit dem `object-position`-Attribut. Gültige Werte sind wie in der [MDN-Dokumentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position#try_it) angegeben. |
| `showBreadcrumbs` | `article.showBreadcrumbs` oder `list.showBreadcrumbs` | Ob Breadcrumbs im Artikel- oder Listen-Header angezeigt werden. |
| `showDate` | `article.showDate` | Ob das Artikeldatum angezeigt wird. Das Datum wird mit dem Parameter `date` gesetzt. |
| `showDateUpdated` | `article.showDateUpdated` | Ob das Datum angezeigt wird, an dem der Artikel aktualisiert wurde. Das Datum wird mit dem Parameter `lastmod` gesetzt. |
| `showEdit` | `article.showEdit` | Ob der Link zum Bearbeiten des Artikelinhalts angezeigt werden soll. |
| `showHeadingAnchors` | `article.showHeadingAnchors` | Ob Überschriften-Anker-Links neben Überschriften in diesem Artikel angezeigt werden. |
| `showPagination` | `article.showPagination` | Ob die Links zum nächsten/vorherigen Artikel in der Artikelfußzeile angezeigt werden. |
| `invertPagination` | `article.invertPagination` | Ob die Richtung der Links zum nächsten/vorherigen Artikel umgekehrt werden soll. |
| `showReadingTime` | `article.showReadingTime` | Ob die Artikel-Lesezeit angezeigt wird. |
| `showTaxonomies` | `article.showTaxonomies` | Ob die mit diesem Artikel verbundenen Taxonomien angezeigt werden. |
| `showTableOfContents` | `article.showTableOfContents` | Ob das Inhaltsverzeichnis bei diesem Artikel angezeigt wird. |
| `showWordCount` | `article.showWordCount` | Ob die Artikel-Wortanzahl angezeigt wird. |
| `showComments` | `article.showComments` | Ob das [Kommentar-Partial]({{< ref "partials#comments" >}}) nach der Artikelfußzeile eingefügt wird. |
| `showSummary` | `list.showSummary` | Ob die Artikelzusammenfassung auf Listenseiten angezeigt werden soll. |
| `showViews` | `article.showViews` | Ob Artikelaufrufe in Listen und Detailansicht angezeigt werden sollen. Dies erfordert eine Firebase-Integration. Siehe [diese Seite]({{< ref "firebase-views" >}}) für eine Anleitung zur Firebase-Integration. |
| `showLikes` | `article.showLikes` | Ob Artikel-Likes in Listen und Detailansicht angezeigt werden sollen. Dies erfordert eine Firebase-Integration. Siehe [diese Seite]({{< ref "firebase-views" >}}) für eine Anleitung zur Firebase-Integration. |
| `seriesOpened` | `article.seriesOpened` | Ob das Serien-Modul standardmäßig geöffnet angezeigt wird oder nicht. |
| `series` | _Nicht gesetzt_ | Array von Serien, zu denen der Artikel gehört, wir empfehlen nur eine Serie pro Artikel. |
| `series_order` | _Nicht gesetzt_ | Nummer des Artikels innerhalb der Serie. |
| `summary` | Automatisch generiert mit `summaryLength` (siehe [Website-Konfiguration]({{< ref "configuration#site-configuration" >}})) | Wenn `showSummary` aktiviert ist, ist dies der Markdown-String, der als Zusammenfassung für diesen Artikel verwendet wird. |
| `xml` | `true` außer wenn durch `sitemap.excludedKinds` ausgeschlossen | Ob dieser Artikel in der generierten `/sitemap.xml`-Datei enthalten ist. |
| `excludeFromSearch` | `false` | Ob dieser Artikel von der Sitemap und dem Suchindex ausgeschlossen werden soll. Wenn `true`, erscheint die Seite nicht in `sitemap.xml` oder `index.json`. |
| `layoutBackgroundBlur` | `true` | Lässt das Hintergrundbild im background heroStyle beim Scrollen verschwimmen |
| `layoutBackgroundHeaderSpace` | `true` | Fügt Abstand zwischen Header und Body hinzu. |
| `externalLinkForceNewTab` | `article.externalLinkForceNewTab` | Sollen externe Links im Markdown in einem neuen Tab geöffnet werden? |
<!-- prettier-ignore-end -->
