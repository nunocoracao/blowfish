---
title: "Gráficos"
date: 2019-03-06
description: "Guia de uso do Chart.js no Blowfish"
summary: "O Blowfish inclui Chart.js para gráficos e visualizações de dados poderosos."
tags: ["gráfico", "exemplo", "diagrama", "shortcodes"]
showDate: false
type: 'sample'
---

O Blowfish suporta Chart.js usando o shortcode `chart`. Simplesmente envolva o markup do gráfico dentro do shortcode. O Blowfish automaticamente tematiza os gráficos para corresponder ao parâmetro `colorScheme` configurado, mas as cores podem ser personalizadas usando a sintaxe normal do Chart.js.

Consulte a documentação do [shortcode chart]({{< ref "docs/shortcodes#chart" >}}) para mais detalhes.

Os exemplos abaixo são uma pequena seleção tirada da [documentação oficial do Chart.js](https://www.chartjs.org/docs/latest/samples). Você também pode [ver o código-fonte da página](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md) no GitHub.

## Gráfico de barras

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [{
    label: 'Meu primeiro dataset',
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

## Gráfico de linhas

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [{
    label: 'Meu primeiro dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Gráfico de rosca

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Vermelho', 'Azul', 'Amarelo'],
  datasets: [{
    label: 'Meu primeiro dataset',
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
