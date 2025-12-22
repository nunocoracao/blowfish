---
title: "Diagramas y diagramas de flujo"
date: 2019-03-06
description: "Guía de uso de Mermaid en Blowfish"
summary: "Es fácil agregar diagramas y diagramas de flujo a los artículos usando Mermaid."
tags: ["mermaid", "ejemplo", "diagrama", "shortcodes"]
type: 'sample'
---

Los diagramas Mermaid son compatibles en Blowfish usando el shortcode `mermaid`. Simplemente envuelve el markup del diagrama dentro del shortcode. Blowfish adapta automáticamente los temas de los diagramas Mermaid al parámetro `colorScheme` configurado.

Consulta la documentación del [shortcode mermaid]({{< ref "docs/shortcodes#mermaid" >}}) para más detalles.

Los ejemplos siguientes son una pequeña selección tomada de la [documentación oficial de Mermaid](https://mermaid-js.github.io/mermaid/). También puedes [ver el código fuente de la página](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/diagrams-flowcharts/index.md) en GitHub.

## Diagrama de flujo

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

## Diagrama de secuencia

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

## Diagrama de clases

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

## Diagrama entidad-relación

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
