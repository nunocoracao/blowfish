---
title: "图表"
date: 2019-03-06
description: "在Blowfish 中使用 Chart.js 指南"
summary: "Blowfish 包含 Chart.js，可实现强大的图表和数据可视化。"
tags: ["表格", "示例", "图片", "简码"]
showDate: false
type: 'sample'
---

Blowfish 使用 `chart` 简码来调用 Chart.js。Blowfish 会自动为图表设置主题以匹配配置的 `colorScheme` 参数，但是可以使用 Chart.js 语法来自定义图表颜色。

有关更多详细信息，请参阅 [图表简码]({{< ref "docs/shortcodes#chart" >}}) 文档。

下面的示例是从 [Chart.js 官方文档](https://www.chartjs.org/docs/latest/samples) 中选取的一小部分。您还可以在 GitHub 上[查看页面源代码](https://raw.githubusercontent.com/nunocoracao/blowfish/main/exampleSite/content/samples/charts/index.md) 查看书写方式。

## 柱形图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
  datasets: [{
    label: '我的第一组数据',
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

## 折线图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
  datasets: [{
    label: '我的第一组数据',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## 扇形图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['红', '蓝', '黄'],
  datasets: [{
    label: '我的第一组数据',
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
