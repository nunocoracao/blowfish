---
title: "Diagramme"
date: 2019-03-06
description: "Anleitung zur Chart.js-Nutzung in Blowfish"
summary: "Blowfish enthält Chart.js für leistungsstarke Diagramme und Datenvisualisierungen."
tags: ["diagramm", "beispiel", "grafik", "shortcodes"]
showDate: false
type: 'sample'
---

Blowfish unterstützt Chart.js durch den `chart`-Shortcode. Umschließen Sie einfach das Diagramm-Markup mit dem Shortcode. Blowfish passt Diagramme automatisch an den konfigurierten `colorScheme`-Parameter an, die Farben können jedoch mit normaler Chart.js-Syntax angepasst werden.

Weitere Details finden Sie in der [Chart-Shortcode]({{< ref "docs/shortcodes#chart" >}})-Dokumentation.

Die folgenden Beispiele sind eine kleine Auswahl aus der [offiziellen Chart.js-Dokumentation](https://www.chartjs.org/docs/latest/samples). Sie können auch [den Seitenquelltext](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md) auf GitHub einsehen.

## Balkendiagramm

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'],
  datasets: [{
    label: 'Mein erstes Dataset',
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

## Liniendiagramm

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'],
  datasets: [{
    label: 'Mein erstes Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Ringdiagramm

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Rot', 'Blau', 'Gelb'],
  datasets: [{
    label: 'Mein erstes Dataset',
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
