<p align="center">
    <img src="docs/.vuepress/public/hero-title.svg?sanitize=true">
</p>

<p align="center">
    <a href="https://chartjs-plugin-datalabels.netlify.com/guide/getting-started.html"><img src="https://img.shields.io/github/release/chartjs/chartjs-plugin-datalabels.svg?style=flat-square&maxAge=600" alt="Downloads"></a>
    <a href="https://travis-ci.org/chartjs/chartjs-plugin-datalabels"><img src="https://img.shields.io/travis/chartjs/chartjs-plugin-datalabels.svg?style=flat-square&maxAge=600" alt="Builds"></a>
    <a href="https://codeclimate.com/github/chartjs/chartjs-plugin-datalabels"><img src="https://img.shields.io/codeclimate/c/chartjs/chartjs-plugin-datalabels.svg?style=flat-square&maxAge=600" alt="Coverage"></a>
    <a href="https://github.com/chartjs/awesome"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome"></a>
</p>

## Overview

Highly customizable [Chart.js](http://www.chartjs.org/) plugin that displays labels on data for any type of charts.

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **2.7.0** or later.

## Documentation

- [Introduction](https://chartjs-plugin-datalabels.netlify.com/guide/)
- [Getting Started](https://chartjs-plugin-datalabels.netlify.com/guide/getting-started.html)
- [Options](https://chartjs-plugin-datalabels.netlify.com/guide/options.html)
- [Labels](https://chartjs-plugin-datalabels.netlify.com/guide/labels.html)
- [Positioning](https://chartjs-plugin-datalabels.netlify.com/guide/positioning.html)
- [Formatting](https://chartjs-plugin-datalabels.netlify.com/guide/formatting.html)
- [Events](https://chartjs-plugin-datalabels.netlify.com/guide/events.html)
- [Samples](https://chartjs-plugin-datalabels.netlify.com/samples/)

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

    > npm install

The following commands will then be available from the repository root:

    > gulp build            // build dist files
    > gulp build --watch    // build and watch for changes
    > gulp test             // run all tests
    > gulp test --watch     // run all tests and watch for changes
    > gulp test --coverage  // run all tests and generate code coverage
    > gulp lint             // perform code linting
    > gulp package          // create an archive with dist files and samples
    > gulp docs             // generate documentation (`dist/docs`)
    > gulp docs --watch     // generate documentation and watch for changes

## License

`chartjs-plugin-datalabels` is available under the [MIT license](LICENSE.md).
