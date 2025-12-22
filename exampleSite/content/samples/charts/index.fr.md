---
title: "Graphiques"
date: 2019-03-06
description: "Guide d'utilisation de Chart.js dans Blowfish"
summary: "Blowfish inclut Chart.js pour des graphiques et visualisations de données puissants."
tags: ["graphique", "exemple", "diagramme", "shortcodes"]
showDate: false
type: 'sample'
---

Blowfish prend en charge Chart.js via le shortcode `chart`. Enveloppez simplement le markup du graphique dans le shortcode. Blowfish adapte automatiquement les thèmes des graphiques au paramètre `colorScheme` configuré, mais les couleurs peuvent être personnalisées avec la syntaxe normale de Chart.js.

Consultez la documentation du [shortcode chart]({{< ref "docs/shortcodes#chart" >}}) pour plus de détails.

Les exemples ci-dessous sont une petite sélection tirée de la [documentation officielle de Chart.js](https://www.chartjs.org/docs/latest/samples). Vous pouvez également [voir le code source de la page](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md) sur GitHub.

## Graphique à barres

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
  datasets: [{
    label: 'Mon premier dataset',
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

## Graphique linéaire

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
  datasets: [{
    label: 'Mon premier dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Graphique en anneau

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Rouge', 'Bleu', 'Jaune'],
  datasets: [{
    label: 'Mon premier dataset',
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
