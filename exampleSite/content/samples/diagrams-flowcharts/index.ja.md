---
title: "ダイアグラムとフローチャート"
date: 2019-03-06
description: "Blowfish での Mermaid の利用方法についてのガイド"
summary: "Mermaid を利用して簡単に図やフローチャートを記事に追加する方法。"
tags: ["mermaid", "sample", "diagram", "shortcodes"]
type: 'sample'
---

Mermaid 図は `mermaid` ショートコードを使うことで Blowfish でサポートされています。ダイヤグラムのマークアップをショートコードを囲むだけです。 Blowfish は設定された `colorScheme` パラメータに合うように自動T系に Mermaid ダイヤグラムをテーマ化します。

[mermaid ショートコード]({{< ref "docs/shortcodes#mermaid" >}})資料にてより詳細を参照できます。

以下の例は [Mermaid 公式資料](https://mermaid-js.github.io/mermaid/)から抜粋した一分です。GitHub の[ページソース](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/diagrams-flowcharts/index.md)でマークアップを確認することができます。

## フローチャート

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph TD
A[クリスマス] -->|収入| B(買い物にいく)
B --> C{考える}
B --> G[/他/]
C ==>|1| D[ノートパソコン]
C -->|2| E[iPhone]
C -->|3| F[車]
subgraph セクション
C
D
E
F
G
end
{{< /mermaid >}}
</div>

## 順序図

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
sequenceDiagram
autonumber
par 行動 1
アリス->>ジョン: こんにちはジョン、お元気ですか?
and 行動 2
アリス->>ボブ: こんにちはボブ、お元気ですか?
end
アリス->>+ジョン: こんにちはジョン、お元気ですか?
アリス->>+ジョン: ジョン、聞こえていますか?
ジョン-->>-アリス: こんにちはアリス、聞こえています!
Note right of ジョン: ジョンは察しがよい
ジョン-->>-アリス: とても気分がいいです!
loop 毎分
ジョン-->アリス: すばらしい!
end
{{< /mermaid >}}
</div>

## クラス図

<div style="background-color:white; padding: 20px">
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
</div>

## 主従関係図

<div style="background-color:white; padding: 20px">
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
</div>

