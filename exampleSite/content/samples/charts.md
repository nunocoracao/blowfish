---
title: "Charts"
date: 2019-03-06
description: "Guide to Chart.js usage in Congo"
summary: "Congo includes Chart.js for powerful charts and data visualisations."
tags: ["chart", "sample", "graph", "shortcodes"]
---

Congo includes support for Chart.js using the `chart` shortcode. Simply wrap the chart markup within the shortcode. Congo automatically themes charts to match the configured `colorScheme` parameter, however the colours can be customised using normal Chart.js syntax.

Refer to the [chart shortcode]({{< ref "docs/shortcodes#chart" >}}) docs for more details.

The examples below are a small selection taken from the [official Chart.js docs](https://www.chartjs.org/docs/latest/samples). You can also [view the page source](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/charts.md) on GitHub to see the markup.

## Bar chart

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First Dataset',
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

## Line chart

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Doughnut chart

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
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
