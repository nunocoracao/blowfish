---
title: "Mehrere Autoren"
weight: 8
draft: false
description: "Konfigurieren Sie mehrere Autoren für Ihre Artikel."
slug: "multi-author"
tags: ["autoren", "konfiguration", "dokumentation"]
series: ["Dokumentation"]
series_order: 10
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---


Einige Websites haben mehr als einen Autor, der Inhalte beisteuert, und benötigen daher mehr als einen einzelnen Standardautor für die gesamte Website. Für diese Anwendungsfälle ermöglicht Blowfish den Benutzern, die Liste der Autoren mithilfe der Funktion für mehrere Autoren zu erweitern.

Um alles abwärtskompatibel zu halten, ermöglicht diese Funktion nur die Definition zusätzlicher Autoren und ändert in keiner Weise die vorherige Autorenfunktionalität, die über Konfigurationsdateien verwendet wird.


## Autoren erstellen

Der erste Schritt zum Erstellen neuer Autoren ist das Einrichten eines neuen Ordners in `./data/authors`. Dann können Sie einfach neue `json`-Dateien darin hinzufügen, eine für jeden neuen Autor. Der Name der Datei wird der `key` für diesen Autor sein, wenn Sie ihn in Ihren Artikeln referenzieren.

Lassen Sie uns als Beispiel eine Datei namens `nunocoracao.json` in `./data/authors` erstellen. Der Inhalt der Datei sollte dem unten stehenden ähneln. `name`, `image`, `bio` und `social` sind die 4 Parameter, die derzeit für Autoren unterstützt werden. Sie spiegeln die Konfigurationen wider, die für den Standardautor in den Konfigurationsdateien verfügbar sind.

_Hinweis: Der Schlüssel im Social-Objekt wird verwendet, um eines der Theme-Icons abzurufen. Sie können jedes der in Ihrer Installation verfügbaren Icons verwenden._

```json
{
    "name": "Nuno Coração",
    "image" : "img/nuno_avatar.jpg",
    "bio": "Theme Creator",
    "social": [
        { "linkedin": "https://linkedin.com/in/nunocoracao" },
        { "twitter": "https://twitter.com/nunocoracao" },
        { "instagram": "https://instagram.com/nunocoracao" },
        { "medium": "https://medium.com/@nunocoracao" },
        { "github": "https://github.com/nunocoracao" },
        { "goodreads": "http://goodreads.com/nunocoracao" },
        { "keybase": "https://keybase.io/nunocoracao" },
        { "reddit": "https://reddit.com/user/nunoheart" }
    ]
}
```


## Autoren in Artikeln referenzieren

Nachdem Sie einen Autor erstellt haben, ist der nächste Schritt, ihn in einem oder mehreren Artikeln zu referenzieren. Im folgenden Beispiel referenzieren wir den im vorherigen Schritt erstellten Autor mit seinem `key`.

Dies wird einen zusätzlichen Autor mit den in der `json`-Datei bereitgestellten Daten rendern. Diese Funktion ändert in keiner Weise den für die gesamte Website konfigurierten Standardautor, und daher können Sie beide separat steuern. Mit dem Parameter `showAuthor` können Sie konfigurieren, ob der Standardautor angezeigt werden soll - das ist der normale Anwendungsfall für einen Einzelautoren-Blog. Der neue Front-Matter-Parameter `authors` ermöglicht es Ihnen, Autoren speziell für einen Artikel zu definieren, und sie werden unabhängig von den Konfigurationen für den Standard-Website-Autor gerendert.

```md
---
title: "Multiple Authors"
date: 2020-08-10
draft: false
description: "Configure multiple authors for your articles."
slug: "multi-author"
tags: ["authors", "config", "docs"]
showAuthor: true
authors:
  - "nunocoracao"
showAuthorsBadges : false
---
```

Im Beispiel, das dem Markdown der aktuellen Seite entspricht, werden sowohl der Standardautor als auch der neue angezeigt. Sie können jetzt nach unten scrollen, um das Ergebnis zu sehen.

## Die Autoren-Taxonomie erstellen

Um Listen von Artikeln für jeden Ihrer Autoren zu erhalten, können Sie die `authors`-Taxonomie konfigurieren, die einige weitere interessante Konfigurationen eröffnet. Dies ist ein optionaler Schritt im Prozess, der nicht erforderlich ist, um die Autoren in Ihren Artikeln anzuzeigen.

Der erste Schritt ist die Konfiguration der `authors`-Taxonomie in Ihrer `hugo.toml`-Datei, wie im folgenden Beispiel. Obwohl `tag` und `category` standardmäßig mit Hugo definiert sind, müssen Sie sie erneut hinzufügen, sobald Sie einen spezifischen Taxonomie-Abschnitt hinzufügen, da die Website sie sonst nicht verarbeitet.

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```

Und das war's im Grunde. Jetzt haben Sie Seiten, die Ihre Autoren referenzieren und für jeden die entsprechende Liste von Artikeln anzeigen, an denen sie teilnehmen. Sie können auch `article.showAuthorsBadges` in der Konfigurationsdatei oder `showAuthorsBadges` in jedem Artikel verwenden, um zu wählen, ob die `authors`-Taxonomie als Badges in jedem Beitragselement angezeigt werden soll. Diese Dokumentation ist so konfiguriert, dass keine Autoren angezeigt werden, aber wenn Sie sich das unten referenzierte Beispiel ansehen, werden Sie die Autoren als Badges sehen.

Schließlich können Sie jeder Autorenseite mehr Details hinzufügen, sodass sie eine kleine Bio, Links oder andere Informationen anzeigt, die zu Ihrem Anwendungsfall passen. Um dies zu erreichen, erstellen Sie einen Ordner mit dem `key` für jeden Autor in `./content/authors` und platzieren Sie darin eine `_index.md`-Datei. Für das obige Beispiel würden wir mit einer Datei `.content/authors/nunocoracao/_index.md` enden. Darin können Sie den tatsächlichen Namen des Autors und den Inhalt seiner Seite konfigurieren. Autoren auf dieser Dokumentations-Website sind so konfiguriert, sodass Sie einen Blick darauf werfen können, indem Sie auf der Website herumspielen.

```md
---
title: "Nuno Coração"
---

Nuno's awesome dummy bio.

```

## Beispiel

Dieses Beispiel unten zeigt einen Fall, bei dem der Standard-Website-Autor deaktiviert ist und der Artikel mehrere Autoren hat.

{{< article link="/samples/multiple-authors/" >}}
