---
title: "図表"
date: 2019-03-06
description: "Blowfish での Chart.js の利用方法のガイド"
summary: "Blowfish は強力な図表とデータの視覚化のために Chart.js を内蔵しています。"
tags: ["chart", "sample", "graph", "shortcodes"]
showDate: false
type: 'sample'
---

Blowfish は Chart.js の `chart` ショートコードを内蔵し、利用をサポートしています。ショートコードでグラフのマークアップを囲むだけです。 Blowfish は  `colorScheme` パラメータで自動的にグラフのテーマが適応されますが、通常の Chart.js 構文を利用して色をカスタマイズすることも可能です。

[グラフのショートコード]({{< ref "docs/shortcodes#chart" >}})資料で更に詳細を参照出来ます。

以下は [Chart.js 公式資料](https://www.chartjs.org/docs/latest/samples)から抜粋した例です。 GitHub でマークアップを[ページソースで見る](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md)ことができます。

## 棒グラフ

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
  datasets: [{
    label: '初めてのデータセット',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## 折れ線グラフ

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
  datasets: [{
    label: '初めてのデータセット',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## 円グラフ

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['赤色', '青色', '黄色'],
  datasets: [{
    label: '初めてのデータセット',
    data: [300, 50, 100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 205, 86, 0.7)'
    ],
    borderWidth: 0,
    hoverOffset: 4
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->
