---
title: "Gráficos"
date: 2019-03-06
description: "Guía de uso de Chart.js en Blowfish"
summary: "Blowfish incluye Chart.js para gráficos y visualizaciones de datos potentes."
tags: ["gráfico", "ejemplo", "diagrama", "shortcodes"]
showDate: false
type: 'sample'
---

Blowfish soporta Chart.js usando el shortcode `chart`. Simplemente envuelve el markup del gráfico dentro del shortcode. Blowfish adapta automáticamente los temas de los gráficos al parámetro `colorScheme` configurado, aunque los colores pueden personalizarse usando la sintaxis normal de Chart.js.

Consulta la documentación del [shortcode chart]({{< ref "docs/shortcodes#chart" >}}) para más detalles.

Los ejemplos siguientes son una pequeña selección tomada de la [documentación oficial de Chart.js](https://www.chartjs.org/docs/latest/samples). También puedes [ver el código fuente de la página](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md) en GitHub.

## Gráfico de barras

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [{
    label: 'Mi primer dataset',
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

## Gráfico de líneas

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [{
    label: 'Mi primer dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Gráfico de anillo

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Rojo', 'Azul', 'Amarillo'],
  datasets: [{
    label: 'Mi primer dataset',
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
