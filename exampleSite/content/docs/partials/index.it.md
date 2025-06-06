---
title: "Partials"
weight: 9
draft: false
description: "All the partials available in Blowfish."
slug: "partials"
tags: ["partials", "analytics", "privacy", "comments", "favicons", "icon", "docs"]
series: ["Documentation"]
series_order: 9
---

## Analytics

Blowfish provides built-in support for Fathom Analytics and Google Analytics. Fathom is a paid alternative to Google Analytics that respects user privacy.

### Fathom Analytics

To enable Fathom Analytics support, simply provide your Fathom site code in the `config/_default/params.toml` file. If you also use the custom domain feature of Fathom and would like to serve their script from your domain, you can also additionally provide the `domain` configuration value. If you don't provide a `domain` value, the script will load directly from Fathom DNS.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

Google Analytics support is provided through the internal Hugo partial. Simply provide the `googleAnalytics` key in the `config/_default/config.toml` file and the script will be added automatically.

Both version 3 (analytics.js) and version 4 (gtag.js) are supported, based on the configuration value provided:

```toml
# config/_default/config.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Umami Analytics

To enable Umami Analytics support, simply provide your [Umami tracking code](https://umami.is/docs/collect-data) in the `config/_default/params.toml` file.
If you also use the custom domain feature of Umami and would like to serve their script from your domain, you can also additionally provide the `domain` configuration value. If you don't provide a `domain` value, the script will load directly from Umami DNS (analytics.umami.is).
If you want the tracker to only run on specific domains, you can provide the `dataDomains` configuration value. If you don't provide a `dataDomains` value, the script will run on any website where the `domain` and`websiteid` match. If the environment variable `TRACKER_SCRIPT_NAME` is configured, you can specify a custom script name `scriptName`. If it is not configured, either comment it out or use the default `script.js`.

{{< alert >}}
**Note:** If you enable Umami Analytics, Blowfish will support [Umami Track Event](https://umami.is/docs/track-events) automatically. If you do not want to support Track Event, the param `enableTrackEvent` must set to `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[umamiAnalytics]
  websiteid = "ABC12345"
  domain = "llama.yoursite.com"
  dataDomains = "yoursite.com,yoursite2.com"
  scriptName = "TRACKER_SCRIPT_NAME"
  enableTrackEvent = true
```

### Seline Analytics

To enable Seline Analytics support, simply provide your [Seline token](https://seline.so/docs/install-seline) in the `config/_default/params.toml` file.

{{< alert >}}
**Note:** If you enable Seline Analytics, Blowfish will support [Seline Track Event](https://seline.so/docs/custom-events) automatically. If you do not want to support Track Event, the param `enableTrackEvent` must set to `false`.
{{< /alert >}}

```toml
# config/_default/params.toml

[selineAnalytics]
  token = "XXXXXX"
  enableTrackEvent = true
```

### Custom analytics providers

If you wish to use a different analytics provider on your website you can also override the analytics partial and provide your own script. Simply create the file `layouts/partials/extend-head.html` in your project and it will automatically include it in the `<head>` of the website.

## Comments

To add comments to your articles, Blowfish includes support for a comments partial that is included at the base of each article page. Simply provide a `layouts/partials/comments.html` which contains the code required to display your chosen comments.

You can use either the built-in Hugo Disqus template, or provide your own custom code. Refer to the [Hugo docs](https://gohugo.io/content-management/comments/) for further information.

Once the partial has been provided, finer control over where comments are displayed is then managed using the `showComments` parameter. This value can be set at the theme level in the `params.toml` [config file]({{< ref "configuration#theme-parameters" >}}), or on a per-article basis by including it in the [front matter]({{< ref "front-matter" >}}). The parameter defaults to `false` so it must be set to `true` in one of these locations in order for comments to be displayed.

## Favicons

Blowfish provides a default set of blank favicons to get started but you can provide your own assets to override them. The easiest way to obtain new favicon assets is to generate them using a third-party provider like [favicon.io](https://favicon.io).

Icon assets should be placed directly in the `static/` folder of your website and named as per the listing below. If you use [favicon.io](https://favicon.io), these will be the filenames that are automatically generated for you, but you can provide your own assets if you wish.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternatively, you can also completely override the default favicon behaviour and provide your own favicon HTML tags and assets. Simply provide a `layouts/partials/favicons.html` file in your project and this will be injected into the site `<head>` in place of the default assets.

## Icon

Similar to the [icon shortcode]({{< ref "shortcodes#icon" >}}), you can include icons in your own templates and partials by using Blowfish's `icon.html` partial. The partial takes one parameter which is the name of the icon to be included.

**Example:**

```go
  {{ partial "icon.html" "github" }}
```

Icons are populated using Hugo pipelines which makes them very flexible. Blowfish includes a number of built-in icons for social, links and other purposes. Check the [icon samples]({{< ref "samples/icons" >}}) page for a full list of supported icons.

Custom icons can be added by providing your own icon assets in the `assets/icons/` directory of your project. The icon can then be referenced in the partial by using the SVG filename without the `.svg` extension.

Icons can also be used in article content by calling the [icon shortcode]({{< ref "shortcodes#icon" >}}).

## Extensions

Blowfish also provides for a number of extension partials that allow for expanding upon base functionality.

### Article link

If you wish to insert additional code after article links, create a `layouts/partials/extend-article-link.html` file. This is especially powerful when combined with the [`badge`]({{< ref "shortcodes#badge" >}}) shortcode which can be used to highlight metadata for certain articles.

### Head and Footer

The theme allows for inserting additional code directly into the `<head>` and `<footer>` sections of the template. These can be useful for providing scripts or other logic that isn't part of the theme.

Simply create either `layouts/partials/extend-head.html` or `layouts/partials/extend-footer.html` and these will automatically be included in your website build. Both partials are injected as the last items in `<head>` and `<footer>` so they can be used to override theme defaults.

### Uncached Head Extension

The `extend-head.html` is [cached](https://gohugo.io/functions/partials/includecached/), and Blowfish also supports an uncached head extension for **conditionally** including scripts or metadata based on page-level properties. To use this feature, create a `layouts/partials/extend-head-uncached.html` file in your project. This file will be included in `<head>` HTML tag.

This is useful when you need to include dynamic elements—such as scripts or metadata—based on properties like shortcodes, front matter flags, or other page-specific data that should not be cached across builds.

For example, to dynamically load a CDN JavaScript file base on the appearance of a shortcode, you can use the [HasShortcode](https://gohugo.io/methods/page/hasshortcode/#article) method within `extend-head-uncached.html`.
