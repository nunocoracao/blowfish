# Detect browsers autofill

[![npm version](https://badge.fury.io/js/detect-autofill.svg)](https://badge.fury.io/js/detect-autofill) [![Build Status](https://travis-ci.org/matteobad/detect-autofill.svg?branch=master)](https://travis-ci.org/matteobad/detect-autofill/) ![David](https://img.shields.io/david/dev/matteobad/detect-autofill.svg) ![David](https://img.shields.io/david/matteobad/detect-autofill.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/matteobad/detect-autofill.svg)](https://greenkeeper.io/) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

* [Getting started](#getting-started)
* [Features](#features)
* [Browser support](#browser-support)
* [Demo](https://matteobad.github.io/focus-within-polyfill)

## TLDR

1. Import script in the head

```html
<head>
  ...
  <script src="https://unpkg.com/detect-autofill/dist/detect-autofill.js"></script>
  ...
</head>
```

2. add event listeners
3. do your things...

```js
document.addEventListener('onautocomplete', function(e) {
  e.target.hasAttribute('autocompleted'); // true or false
  e.preventDefault(); // prevent autocomplete
  // do you stuff...
})
```

## Getting Started

Small javascript library to detect browser autofill of form elements. Usefull for implementing floating labels or appling custom styles.

Modern browsers all have some ability to autocomplete the forms in a web page. It can be a login or a registration form, and the autofill can be triggered automatiaclly by the browser or manually by the user. In both cases **there is no native way to detect the autocomplete**. This is where this small library comes in handy.

Every browser has it's own way to autocomplete a form. Basically this library creates and triggers a `CustomEvent` called `autocomplete` every time this happends.

Furthermore this custom event can be prevented like all native events in order to block browser autofill using `e.preventDefault()`.

## Features

* Polyfill for CustomEvent integrated
* CustomEvent on `onautocomplete`
* CustomEvent on `onautocomplete` cancel
* Possibility to prevent `onautocomplete`

## Browser Support

| CustomEvent    | Edge | IE11  | Chrome | Firefox | Safari | Opera | iOS |
| -------------- |:----:|:-----:|:------:|:-------:|:------:|:-----:|:---:|
| `onautocomplete` | ✓    | ✓     | ✓      | ✓       | ✓      | ✓     | ✓   |

\* This script uses different technics to detect autofill based on the browser:

* **Chrome**, **Opera** and **Safari** uses the pseudo-class `:-webkit-autofill` to trigger a custom animation.
* **Firefox** uses input event on document and checks for a propriety `inputType` property of the event.
* **IE**, **Edge** and **iOS** uses the same input event but they have to check the `data` property.
* **Android** ha not yet been tested any help is welcomed.

## Demos

The [demos](https://github.com/matteobad/detect-autofill/tree/master/demos) can be tested on every browser. If something is not working properly, please open an issue or a PR.

| Title | Source code | Live demo |
| ----- | ----------- | --------- |
| Fake login page | [Code](demos/fake-login.html) | [Live](https://matteobad.github.io/detect-autofill/demos/fake-login.html) |
