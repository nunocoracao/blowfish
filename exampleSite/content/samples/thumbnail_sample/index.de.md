---
title: "Thumbnails"
date: 2022-09-26
draft: false
description: "Aktivieren Sie Thumbnails für Ihre Artikel."
slug: "thumbnail_sample"
tags: ["thumbnail", "beispiel"]
summary: "Ein kurzes Beispiel, wie Sie Thumbnails in Ihren Artikeln verwenden können."
type: 'sample'
---

Ein kurzes Beispiel, wie Sie Thumbnails in Ihren Artikeln verwenden können.

Wenn Ihr typisches Verzeichnis für einen Artikel so aussieht:

```shell
content
└── awesome_article.md
```

Müssen Sie es von einer einzelnen Markdown-Datei in einen Ordner ändern. Erstellen Sie ein Verzeichnis mit dem gleichen Namen wie der Artikel und erstellen Sie darin eine `index.md`-Datei. Sie erhalten eine Struktur ähnlich der unten gezeigten.

```shell
content
└── awesome_article
    └── featured.png
```

Im Artikel können Sie jetzt eine Bilddatei hinzufügen (fast alle Formate werden unterstützt, aber wir empfehlen `.png` oder `.jpg`), die mit `feature*` beginnt. Beispiel unten.

```shell
content
└── awesome_article
    ├── index.md
    └── featured.png
```

Dies teilt Blowfish mit, dass dieser Artikel ein Feature-Bild hat, das sowohl als Thumbnail auf Ihrer Website als auch für <a target="_blank" href="https://oembed.com/">oEmbed</a>-Karten auf sozialen Plattformen verwendet werden kann. Als Beispiel können Sie versuchen, die URL dieses Artikels in eine Plattform zu kopieren, die oEmbeds anzeigt (z.B. Twitter, WhatsApp, Telegram usw.) und sehen, was angezeigt wird.
