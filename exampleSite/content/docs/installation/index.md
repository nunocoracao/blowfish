---
title: "Installation"
date: 2020-08-16
draft: false
description: "How to install the Blowfish theme."
slug: "installation"
tags: ["installation", "docs"]
series: ["Documentation"]
series_order: 2
---

Simply follow the standard Hugo [Quick Start](https://gohugo.io/getting-started/quick-start/) procedure to get up and running quickly.

Detailed installation instructions can be found below. Instructions for [updating the theme](#installing-updates) are also available.

## Installation

These instructions will get you up and running using Hugo and Blowfish from a completely blank state. Most of the dependencies mentioned in this guide can be installed using the package manager of choice for your platform.

### Install Hugo

If you haven't used Hugo before, you will need to [install it onto your local machine](https://gohugo.io/getting-started/installing). You can check if it's already installed by running the command `hugo version`.

{{< alert >}}
Make sure you are using **Hugo version 0.87.0** or later as the theme takes advantage of some of the latest Hugo features.
{{< /alert >}}

You can find detailed installation instructions for your platform in the [Hugo docs](https://gohugo.io/getting-started/installing).

### Blowfish Tools (recommended)

We just launched a new CLI tool to help you get started with Blowfish. It will create a new Hugo project, install the theme and set up the theme configuration files for you. It's still in beta so please [report any issues you find](https://github.com/nunocoracao/blowfish-tools).

Install the CLI tool globally using npm (or other package manager):
```shell
npx blowfish-tools
```
or

```shell
npm i -g blowfish-tools
```

Then run the command `blowfish-tools` to start an interactive run which will guide you through creation and configuration use-cases.
```shell
blowfish-tools
```

You can also run the command `blowfish-tools new` to create a new Hugo project and install the theme in one go. Check the CLI help for more information.
```shell
blowfish-tools new mynewsite
```

Here's a quick video of how fast it is to get started with Blowfish using the CLI tool:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Install without CLI

#### Create a new site

Run the command `hugo new site mywebsite` to create a new Hugo site in a directory named `mywebsite`.

Note that you can name the project directory whatever you choose, but the instructions below will assume it's named `mywebsite`. If you use a different name, be sure to substitute it accordingly.

#### Download the Blowfish theme

There several different ways to install the Blowfish theme into your Hugo website. From easiest to most difficult to install and maintain, they are:

- [Git submodule](#install-using-git) (recommended)
- [Hugo module](#install-using-hugo) 
- [Manual file copy](#install-manually)

If you're unsure, choose the Git submodule method. 

#### Install using git

This method is the quickest and easiest for keeping the theme up-to-date. Besides **Hugo** and **Go**, you'll also need to ensure you have **Git** installed on your local machine.

Change into the directory for your Hugo website (that you created above), initialise a new `git` repository and add Blowfish as a submodule.

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Then continue to [set up the theme configuration files](#set-up-theme-configuration-files).

#### Install using Hugo

For this method you'll use Hugo to manage your themes. Hugo uses **Go** to initialise and manage modules so you need to ensure you have `go` installed before proceeding.

1. [Download](https://golang.org/dl/) and install Go. You can check if it's already installed by using the command `go version`.

   {{< alert >}}
   Make sure you are using **Go version 1.12** or later as Hugo requires this for modules to work correctly.
   {{< /alert >}}

2. From your Hugo project directory (that you created above), initialise modules for your website:

   ```shell
   # If you're managing your project on GitHub
   hugo mod init github.com/<username>/<repo-name>

   # If you're managing your project locally
   hugo mod init my-project
   ```

3. Add the theme to your configuration by creating a new file `config/_default/module.toml` and adding the following:

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. Start your server using `hugo server` and the theme will be downloaded automatically.
5. Continue to [set up the theme configuration files](#set-up-theme-configuration-files).

#### Install manually

1. Download the latest release of the theme source code.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. Extract the archive, rename the folder to `blowfish` and move it to the `themes/` directory inside your Hugo project's root folder.
3. Continue to [set up the theme configuration files](#set-up-theme-configuration-files).

#### Set up theme configuration files

In the root folder of your website, delete the `hugo.toml` file that was generated by Hugo. Copy the `*.toml` config files from the theme into your `config/_default/` folder. This will ensure you have all the correct theme settings and will enable you to easily customise the theme to your needs.

{{< alert >}}
**Note:** You should not overwrite the `module.toml` file if one already exists in your project!
{{< /alert >}}

Depending on how you installed the theme you will find the theme config files in different places:

- **Hugo Modules:** In the Hugo cache directory, or [download a copy](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nunocoracao/blowfish/tree/main/config/_default) from GitHub
- **Git submodule or Manual install:** `themes/blowfish/config/_default`

Once you've copied the files, your config folder should look like this:

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # if you installed using Hugo Modules
└─ params.toml
```

{{< alert >}}
**Important:** If you didn't use Hugo Modules to install Blowfish, you must add the line `theme = "blowfish"` to the top of your `hugo.toml` file.
{{< /alert >}}

### Next steps

The basic Blowfish installation is now complete. Continue to the [Getting Started]({{< ref "getting-started" >}}) section to learn more about configuring the theme.

---

## Installing updates

From time to time there will be [new releases](https://github.com/nunocoracao/blowfish/releases) posted that apply fixes and add new functionality to the theme. In order to take advantage of these changes, you will need to update the theme files on your website.

How you go about this will depend on the installation method you chose when the theme was originally installed. Instructions for each method can be found below.

- [Git submodule](#update-using-git)
- [Hugo module](#update-using-hugo)
- [Manual file copy](#update-manually)

### Update using git

Git submodules can be updated using the `git` command. Simply execute the following command and the latest version of the theme will be downloaded into your local repository:

```shell
git submodule update --remote --merge
```

Once the submodule has been updated, rebuild your site and check everything works as expected.

### Update using Hugo

Hugo makes updating modules super easy. Simply change into your project directory and execute the following command:

```shell
hugo mod get -u
```

Hugo will automatically update any modules that are required for your project. It does this by inspecting your `module.toml` and `go.mod` files. If you have any issues with the update, check to ensure these files are still configured correctly.

Then simply rebuild your site and check everything works as expected.

### Update manually

Updating Blowfish manually requires you to download the latest copy of the theme and replace the old version in your project.

{{< alert >}}
Note that any local customisations you have made to the theme files will be lost during this process.
{{< /alert >}}

1. Download the latest release of the theme source code.

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. Extract the archive, rename the folder to `blowfish` and move it to the `themes/` directory inside your Hugo project's root folder. You will need to overwrite the existing directory to replace all the theme files.

3. Rebuild your site and check everything works as expected.
