---
title: "Upgrading from Congo 1.x"
date: 2022-01-20
draft: false
description: "Discover what's new in Congo version 2.0."
tags: ["new", "docs"]
---

Although Congo 2.0 contains a large number of changes, the theme has been designed to minimise the effort required to upgrade to the latest release.

That said, there are some changes that require adjustments to existing sites that are built with Congo version 1.x. This guide will step you through the process and highlight things you need to consider.

## Step 1: Upgrade Hugo

{{< alert >}}
Congo 2.0 requires a minimum of **Hugo v0.87.0 or later**
{{< /alert >}}

Congo is built to take advantage of some of the latest Hugo features. You should regularly keep your Hugo installation up to date to avoid any issues.

You can check your current version using the command `hugo version`. Visit the [Hugo docs](https://gohugo.io/getting-started/installing/) for information on obtaining a newer release for your platform.

## Step 2: Upgrade Congo

The process for upgrading Congo will depend on how you include the theme in your project. Instructions for each method can be found below.

- [Upgrade using Hugo](#upgrade-using-hugo)
- [Upgrade using git](#upgrade-using-git)
- [Upgrade manually](#upgrade-manually)

### Upgrade using Hugo

To upgrade a go module to a new major release, the `modules.toml` and `go.mod` files need to be updated. In each file, update the path to the theme from `github.com/jpanther/congo` to `github.com/jpanther/congo/v2`.

Then change into your project directory and execute the following command:

```shell
hugo mod get -u
```

Note that in some circumstances there may be issues with this step due to the way that Hugo locally caches modules. If the command above doesn't work, try using `hugo mod clean` to clear out the local cache and re-download any modules.

Once the theme has been upgraded, continue to the [next section](#step-3-theme-configuration).

### Upgrade using git

Git submodules can be upgraded using the `git` command. Simply execute the following command and the latest version of the theme will be downloaded into your local repository:

```shell
git submodule update --remote --merge
```

Once the submodule has been upgraded, continue to the [next section](#step-3-theme-configuration).

### Upgrade manually

Updating Congo manually requires you to download the latest copy of the theme and replace the old version in your project.

{{< alert >}}
Note that any local customisations you have made to the theme files will be lost during this process.
{{< /alert >}}

1. Download the latest release of the theme source code.

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. Extract the archive, rename the folder to `congo` and move it to the `themes/` directory inside your Hugo project's root folder. You will need to overwrite the existing directory to replace all the theme files.

3. Continue to the [next section](#step-3-theme-configuration).

## Step 3: Theme configuration

Congo 2.0 introduces a number of new theme configuration parameters. Although the theme will adapt to existing version 1 configurations, in order to take advantage of some of the newer theme features, you will need to adjust your existing configuration.

The simplest way to do this is to take a copy of the theme's default configuration and compare it to your existing files. The process is outlined in greater detail below.

### Languages.toml

In order to provide multilingual support, language-specific theme parameters have been moved to a new config file `languages.[lang-code].toml`. The theme comes with a template `languages.en.toml` file which can be used as a guide.

{{< alert >}}
This step is optional if you do not need multilingual support, although completing it now will make future theme upgrades easier.
{{< /alert >}}

The languages config file follows this structure:

```toml
# config/_default/languagues.en.toml

languageCode = "en"
languageName = "English"
displayName = "EN"
htmlCode = "en"
weight = 1
rtl = false

# Language-specific parameters go here
```

Using your preferred language, simply create this new file in `config/_default/` and then move the language-specific parameters from any existing config files over to this new file. The table below outlines the parameters that need to be moved.

| Parameter     | Old location  |
| ------------- | ------------- |
| `title`       | `config.toml` |
| `description` | `params.toml` |
| `copyright`   | `config.toml` |
| `dateFormat`  | `params.toml` |
| `[author]`    | `config.toml` |

Once the values have been moved to the new location, these parameters should be deleted from their original locations.

### Menus.toml

As the theme is now aware of languages, the `menus.toml` file should also be renamed to include a language code. Rename the existing `menus.toml` to `menus.[lang-code].toml`, where the language code matches the code used in the `languages.toml` file in the previous section.

### Config.toml

The `config.toml` file now only contains base Hugo configuration values. Other than removing the language-specific strings above, there are only two changes to consider.

If you're using a language other than English, provide a `defaultContentLanguage` value that matches the language code in the config file you created for your language. Secondly, to take advange of the new site search in Congo 2.0, an `[outputs]` block needs to be provided.

```toml
# config/_default/config.toml

defaultContentLanguage = "en"

enableRobotsTXT = true
paginate = 10
summaryLength = 0

[outputs]
  home = ["HTML", "RSS", "JSON"]
```

### Markup.toml

Congo 2.0 adds support for tables of contents on article pages. Although Hugo ships with default settings for generating contents listings, you can adjust this behaviour by adding a new `[tableOfContents]` block to your `markup.toml` file.

The recommended settings are as follows, which includes any headings in the Markdown content at levels 2, 3 and 4:

```toml
# config/_default/markup.toml

[tableOfContents]
  startLevel = 2
  endLevel = 4
```

### Params.toml

A number of new theme parameters have been introduced in Congo 2.0. Some minor changes are requried to existing configurations. Remember, the theme will always revert to a sensible default if a parameter is not provided.

The way that dark mode works in Congo has been changed to allow greater flexibility around configuration. The old `darkMode` and `darkToggle` parameters have been **removed and replaced** by three new parameters. These new options operate independently of each other, making it possible to force the appearance while still allowing the user to override.

<!-- prettier-ignore-start -->
| New parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultAppearance` | String | `"light"` | Default theme appearance; either `light` or `dark`.<br>:warning: _Setting this to `light` replicates the old `darkMode = false` setting, while `dark` replicates `darkMode = true`._ |
| `autoSwitchAppearance` | Boolean | `true` | Whether the theme appearance automatically switches based upon the operating system preference. Set to `false` to force the site to always use the `defaultAppearance`. <br>:warning: _Setting this to `true` replicates the old `darkMode = "auto"` setting._ |
| `showAppearanceSwitcher` | Boolean | `false` | Whether the theme appearance switcher is dispalyed in the site footer. <br>:warning: _This parameter replaces `darkToggle`._ |
<!-- prettier-ignore-end -->

The following table outlines some other key **new parameters** that control new features in version 2:

| New parameter                 | Type    | Default |
| ----------------------------- | ------- | ------- |
| `enableSearch`                | Boolean | `false` |
| `showScrollToTop`             | Boolean | `true`  |
| `article.showTaxonomies`      | Boolean | `false` |
| `article.showTableOfContents` | Boolean | `false` |
| `list.showTableOfContents`    | Boolean | `false` |

For the full list of supported parameters, refer to the [Configuration]({{< ref "docs/configuration" >}}) docs.

## Step 4: Move assets

All site assets, with the exception of favicons, now use Hugo Pipes to build an optimised version of your project. In order for the theme to locate your files, any previously static theme assets need to be moved to the Hugo assets folder. Primarily this is the author image and site logo:

`static/me.jpg` **&rarr;** `assets/me.jpg`  
`static/logo.jpg` **&rarr;** `assets/logo.jpg`

If you have provided an author image or site logo, simply move these assets from `static/` to `assets/`. If you use the same directory structure the theme will know where to find these files automatically. If you would like to provide a new path, update the `logo` and `author.image` config values accordingly.

Note that this step does not apply to any assets in your project that are actually static. For example, a PDF file that you link directly to from within an article is a static asset. These files should remain in the `static/` directory to ensure they are copied to the output folder when Hugo builds the site.

## Step 5: Check content

The behavior of the `figure` shortcode is different in version 2. If you are using `figure` in your content and have advanced use cases, you may need to adjust the parameters you are providing.

Consult the [shortcode docs]({{< ref "docs/shortcodes#figure" >}}) to learn more about supported parameters.

## Step 6: Rebuild

Now that all the configuration changes are complete, it's time to rebuild the site. Run `hugo`, or your build command, and check that everything works as expected.

If you come across any errors, check the configuration is correct and refer to the [full documentation]({{< ref "docs" >}}) for further guidance. Remember, the example config files bundled with the theme contain all the default parameters and are a great starting point.

🙋‍♀️ If you still need help, feel free to ask your question on [GitHub Discussions](https://github.com/jpanther/congo/discussions).
