---
title: "Diagramas e fluxogramas"
date: 2019-03-06
description: "Guia de utilização do Mermaid no Blowfish"
summary: "É fácil adicionar diagramas e fluxogramas aos artigos utilizando Mermaid."
tags: ["mermaid", "exemplo", "diagrama", "shortcodes"]
type: 'sample'
---

Os diagramas Mermaid são suportados no Blowfish utilizando o shortcode `mermaid`. Simplesmente envolva o markup do diagrama dentro do shortcode. O Blowfish automaticamente tematiza os diagramas Mermaid para corresponder ao parâmetro `colorScheme` configurado.

Consulte a documentação do [shortcode mermaid]({{< ref "docs/shortcodes#mermaid" >}}) para mais detalhes.

Os exemplos abaixo são uma pequena seleção tirada da [documentação oficial do Mermaid](https://mermaid-js.github.io/mermaid/). Também pode [ver o código-fonte da página](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/diagrams-flowcharts/index.md) no GitHub.

## Fluxograma

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

## Diagrama de sequência

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

## Diagrama de classes

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

## Diagrama entidade-relação

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
