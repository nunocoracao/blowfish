---
title: "Getting Started"
weight: 3
draft: false
description: "All the front matter variables available in Blowfish."
slug: "getting-started"
tags: ["installation", "docs"]
series: ["Documentation"]
series_order: 3
---

{{< alert >}}
This section assumes you have already [installed the Blowfish theme]({{< ref "docs/installation" >}}).
{{< /alert >}}

</br>
{{< alert "fire" >}}
We just launched a CLI tool to help you get started with Blowfish. It will help you with installation and configuration. Install the CLI tool globally using:
```bash
npx blowfish-tools
```
{{< /alert >}}


The config files that ship with Blowfish contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

## Basic configuration

Before creating any content, there are a few things you should set for a new installation. Starting in the `hugo.toml` file, set the `baseURL` and `languageCode` parameters. The `languageCode` should be set to the main language that you will be using to author your content.

```toml
# config/_default/hugo.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

The next step is to configure the language settings. Although Blowfish supports multilingual setups, for now, just configure the main language.

Locate the `languages.en.toml` file in the config folder. If your main language is English you can use this file as is. Otherwise, rename it so that it includes the correct language code in the filename. For example, for French, rename the file to `languages.fr.toml`.

{{< alert >}}
Note that the language code in the language config filename should match the `languageCode` setting in `hugo.toml`.
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[params.author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```

The `[params.author]` configuration determines how the author information is displayed on the website. The image should be placed in the site's `assets/` folder. Links will be displayed in the order they are listed.

If you need extra detail, further information about each of these configuration options, is covered in the [Configuration]({{< ref "configuration" >}}) section.

## Colour schemes

Blowfish ships with a number of colour schemes out of the box. To change the scheme, simply set the `colorScheme` theme parameter. Valid options are `blowfish` (default), `avocado`, `fire`, `ocean`, `forest`, `princess`, `neon`, `bloody`, `terminal`, `marvel`, `noir`, `autumn`, `congo`, and`slate`.

```toml
# config/_default/params.toml

colorScheme = "blowfish"
```

Blowfish defines a three-colour palette that is used throughout the theme. Each main colour contains ten shades which are based upon the colours that are included in [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference). The three main colours are used for the header, footer, and accent colours. Here are the colors for each scheme:

#### Blowfish (default)
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Avocado
{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Fire
{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean
{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Forest
{{< swatches "#658c86" "#3bf5df" "#06d45c" >}}

#### Princess
{{< swatches "#8c658c" "#f53bf2" "#7706d4" >}}

#### Neon
{{< swatches "#8338ec" "#ff006e" "#3a86ff" >}}

#### Bloody
{{< swatches "#d90429" "#8d99ae" "#457b9d" >}}

#### Terminal
{{< swatches "#004b23" "#38b000" "#1a759f" >}}

#### Marvel
{{< swatches "#2541b2" "#d81159" "#ffbc42" >}}

#### Noir
{{< swatches "#5c6b73" "#9db4c0" "#00a5cf" >}}

#### Autumn
{{< swatches "#0a9396" "#ee9b00" "#bb3e03" >}}

#### Congo
{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Slate
{{< swatches "#6B7280" "#64748b" "#6B7280" >}}


Although these are the default schemes, you can also create your own. Refer to the [Advanced Customisation]({{< ref "advanced-customisation#colour-schemes" >}}) section for details.

## Organising content

By default, Blowfish doesn't force you to use a particular content type. In doing so you are free to define your content as you wish. You might prefer _pages_ for a static site, _posts_ for a blog, or _projects_ for a portfolio.

Here's a quick overview of a basic Blowfish project. All content is placed within the `content` folder:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── blowfish
```

It's important to have a firm grasp of how Hugo expects content to be organised as the theme is designed to take full advantage of Hugo page bundles. Be sure to read the [official Hugo docs](https://gohugo.io/content-management/organization/) for more information.

Blowfish is also flexible when it comes to taxonomies. Some people prefer to use _tags_ and _categories_ to group their content, others prefer to use _topics_.

Hugo defaults to using posts, tags and categories out of the box and this will work fine if that's what you want. If you wish to customise this, however, you can do so by creating a `taxonomies.toml` configuration file:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

This will replace the default _tags_ and _categories_ with _topics_. Refer to the [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) for more information on naming taxonomies.

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the correct sections, which is covered below.

## Menus

Blowfish has two menus that can be customised to suit the content and layout of your site. The `main` menu appears in the site header and the `footer` menu appears at the bottom of the page just above the copyright notice.

Both menus are configured in the `menus.en.toml` file. Similarly to the languages config file, if you wish to use another language, rename this file and replace `en` with the language code you wish to use.

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20

[[main]]
  pre = "github"
  name = "GitHub"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 30

[[main]]
  identifier = "github2"
  pre = "github"
  url = "https://github.com/nunocoracao/blowfish"
  weight = 40

[[footer]]
  name = "Privacy"
  url = "https://external-link"
```

The `name` parameter specifies the text that is used in the menu link. You can also optionally provide a `title` which fills the HTML title attribute for the link.

The `pageRef` parameter allows you to easily reference Hugo content pages and taxonomies. It is the quickest way to configure the menu as you can simply refer to any Hugo content item and it will automatically build the correct link. To link to external URLs, the `url` parameter can be used.

The `pre` parameter allows you to place an icon from [Blowfish's icon set]({{< ref "samples/icons" >}}) on the menu entry. This parameter can be used with `name` parameter or by itself. If you want to use multiple menu entries with just icons please set the `identifier`parameter otherwise Hugo will default to the naming tag as the id and probably not display all the menu entries.

Menu links will be sorted from lowest to highest `weight`, and then alphabetically by `name`.

Both menus are completely optional and can be commented out if not required. Use the template provided in the file as a guide.

### Nested menus

The theme also supports nested menus. In order to use them you just need to define a parent entry in `menu.toml` and its sub-menus using the `parent` parameter to reference the parent. All properties can be used for sub-menus. `pageRef` and `url` can also be used in the parent entry. Nested menus are only available in the main menu not for the footer.

```toml
# config/_default/menus.toml

[[main]]
  name = "Parent"
  weight = 20

[[main]]
  name = "sub-menu 1"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 2"
  parent = "Parent"
  pageRef = "samples"
  weight = 20

[[main]]
  name = "sub-menu 3"
  parent = "Parent"
  pre = "github"
  pageRef = "samples"
  weight = 20
```

### Sub-Navigation menu

Additionally, you can also configure a sub-navigation menu. Just define new menu entries as `subnavigation` in `menus.toml`.
This will render a second line with sub-categories below the main header menu.

```toml
# config/_default/menus.toml

[[subnavigation]]
  name = "An interesting topic"
  pageRef = "tags/interesting-topic"
  weight = 10

[[subnavigation]]
  name = "My Awesome Category"
  pageRef = "categories/awesome"
  weight = 20
```

The default `name` is the `pageRef` title cased.

## Thumbnails & Backgrounds

Blowfish was built so it would be easy to add visual support to your articles. If your familiar with Hugo article structure, you just need to place an image file (almost all formats are supported but we recommend `.png` or `.jpg`) that starts with `feature*` inside your article folder. And that's it, Blowfish will then be able to both use the image as a thumbnail within your website as well as for <a target="_blank" href="https://oembed.com/">oEmbed</a> cards across social platforms. 

[Here]({{< ref "thumbnails" >}}) is also a guide with more info and a [sample]({{< ref "thumbnail_sample" >}}) if you want to see how you can do it.

Additionally, Blowfish also supports background hero images in articles and lists. In order to use a different image than the featured one, add an image file in which the name starts with `background*`.

## Detailed configuration

The steps above are the bare minimum configuration. If you now run `hugo server` you will be presented with a blank Blowfish website. Detailed configuration is covered in the [Configuration]({{< ref "configuration" >}}) section.
