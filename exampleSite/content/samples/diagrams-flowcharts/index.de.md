---
title: "Diagramme und Flussdiagramme"
date: 2019-03-06
description: "Anleitung zur Mermaid-Nutzung in Blowfish"
summary: "Es ist einfach, Diagramme und Flussdiagramme zu Artikeln mit Mermaid hinzuzufügen."
tags: ["mermaid", "beispiel", "diagramm", "shortcodes"]
type: 'sample'
---

Mermaid-Diagramme werden in Blowfish mit dem `mermaid`-Shortcode unterstützt. Umschließen Sie einfach das Diagramm-Markup mit dem Shortcode. Blowfish passt Mermaid-Diagramme automatisch an den konfigurierten `colorScheme`-Parameter an.

Weitere Details finden Sie in der [Mermaid-Shortcode]({{< ref "docs/shortcodes#mermaid" >}})-Dokumentation.

Die folgenden Beispiele sind eine kleine Auswahl aus der [offiziellen Mermaid-Dokumentation](https://mermaid-js.github.io/mermaid/). Sie können auch [den Seitenquelltext](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/diagrams-flowcharts/index.md) auf GitHub einsehen.

## Flussdiagramm

{{< mermaid >}}
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
B --> G[/Another/]
C ==>|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[Car]
subgraph Section
C
D
E
F
G
end
{{< /mermaid >}}

## Sequenzdiagramm

{{< mermaid >}}
sequenceDiagram
autonumber
par Action 1
Alice->>John: Hello John, how are you?
and Action 2
Alice->>Bob: Hello Bob, how are you?
end
Alice->>+John: Hello John, how are you?
Alice->>+John: John, can you hear me?
John-->>-Alice: Hi Alice, I can hear you!
Note right of John: John is perceptive
John-->>-Alice: I feel great!
loop Every minute
John-->Alice: Great!
end
{{< /mermaid >}}

## Klassendiagramm

{{< mermaid >}}
classDiagram
Animal "1" <|-- Duck
Animal <|-- Fish
Animal <--o Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}
{{< /mermaid >}}

## Entity-Relationship-Diagramm

{{< mermaid >}}
erDiagram
CUSTOMER }|..|{ DELIVERY-ADDRESS : has
CUSTOMER ||--o{ ORDER : places
CUSTOMER ||--o{ INVOICE : "liable for"
DELIVERY-ADDRESS ||--o{ ORDER : receives
INVOICE ||--|{ ORDER : covers
ORDER ||--|{ ORDER-ITEM : includes
PRODUCT-CATEGORY ||--|{ PRODUCT : contains
PRODUCT ||--o{ ORDER-ITEM : "ordered in"
{{< /mermaid >}}
