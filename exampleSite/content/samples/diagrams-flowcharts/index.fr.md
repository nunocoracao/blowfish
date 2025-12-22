---
title: "Diagrammes et organigrammes"
date: 2019-03-06
description: "Guide d'utilisation de Mermaid dans Blowfish"
summary: "Il est facile d'ajouter des diagrammes et organigrammes aux articles avec Mermaid."
tags: ["mermaid", "exemple", "diagramme", "shortcodes"]
type: 'sample'
---

Les diagrammes Mermaid sont pris en charge dans Blowfish via le shortcode `mermaid`. Enveloppez simplement le markup du diagramme dans le shortcode. Blowfish adapte automatiquement les thèmes des diagrammes Mermaid au paramètre `colorScheme` configuré.

Consultez la documentation du [shortcode mermaid]({{< ref "docs/shortcodes#mermaid" >}}) pour plus de détails.

Les exemples ci-dessous sont une petite sélection tirée de la [documentation officielle de Mermaid](https://mermaid-js.github.io/mermaid/). Vous pouvez également [voir le code source de la page](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/diagrams-flowcharts/index.md) sur GitHub.

## Organigramme

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

## Diagramme de séquence

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

## Diagramme de classes

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

## Diagramme entité-relation

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
