---
title: "安装和配置"
date: 2020-08-16
draft: false
description: "如何安装 Blowfish 主题。"
slug: "installation"
tags: ["安装", "文档"]
series: ["部署教程"]
series_order: 2
---

如果想快速上手，可以按照标准的 Hugo [快速启动](https://gohugo.io/getting-started/quick-start/) 文档。

更详细的安装如下，[更新主题](#installing-updates)的教程也可以看此文档。

## 前言

本文将一步一步指导你学会使用 Hugo 和 Blowfish。本文中提到的大多数依赖项都可以在任意你想使用的平台中使用和安装。

### 安装 Hugo

如果你之前没有使用过 Hugo，你首先需要了解[在本地机器安装 Hugo](https://gohugo.io/getting-started/installing)。你可以通过运行命令 `hugo version` 来检查是否安装完成。

{{< alert >}}
确保你使用 **Hugo 0.87.0** 或更高的版本，Blowfish 主题中使用了最新的 Hugo 特性。
{{< /alert >}}

你可以在 [Hugo 文档](https://gohugo.io/getting-started/installing) 中找到不同平台更加详细的安装指南。

### 使用 Blowfish-Tools 工具安装 (推荐)

我们刚刚推出了一个 CLI 工具，帮助你首次使用 Blowfish。该工具将会为你创建一个新的 Hugo 项目、安装 Blowfish 主题并设置配置文件。但目前该工具仍处于测试阶段，如果遇到任何问题，请随时[提交 issues](https://github.com/nunocoracao/blowfish-tools)。

使用 `npm` 包或其他的包管理器，在全局环境中安装 CLI：
```shell
npx blowfish-tools
```
或者
```shell
npm i -g blowfish-tools
```

然后运行 `blowfish-tools` 命令，它将引导你完成创建和配置用例。
```shell
blowfish-tools
```

你也可以运行 `blowfish-tools new` 命令来创建一个新的 Hugo 项目，并且一次性地安装主题。查看 CLI 帮助以获取更多信息。
```shell
blowfish-tools new mynewsite
```

下面是一个简短的视频，介绍了如何使用 CLI 工具快速构建 Blowfish：

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 无需 CLI 的安装

#### 创建新站点

运行 `hugo new site mywebsite` 命令，可以在`mywebsite`目录下创建一个新的 Hugo 站点。

下面会以 `mywebsite` 为例展开说明。当然你完全可以使用任何你喜欢的目录名称，但在阅读下面的内容时，请记得将`mywebsite`替换为此。

#### 下载 Blowfish 主题

有多种方法可以将 Blowfish 主题安装在 Hugo 站点中。下面我们由易到难逐一介绍：

- [使用 Git 子模块安装](#install-using-git) (推荐)
- [使用 Hugo 模块安装](#install-using-hugo)
- [手动文件复制](#install-manually)

如果你不确定用哪一个，请直接选择 Git 子模块的方式。

#### 使用 Git 子模块安装

这个方法可以保证主题简单且快速地安装和更新。除了 **Hugo** 和 **Go**，你还需要确保本地机器安装了 **Git**。

进入你刚才创建的网站目录 `mywebsite`，初始化一个新的  `git` 仓库并将 Blowfish 添加为子模块。

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

然后 [设置主题的配置文件](#set-up-theme-configuration-files)。

#### 使用 Hugo 模板安装

这种方法是使用 Hugo 来管理你的主题，Hugo 使用 **Go** 来初始化和管理模块，所以首先需要确保已经安装了`go`。

1. [下载](https://golang.org/dl/) 并安装 Go。你可以使用 `go version` 命令来检查是否安装。

   {{< alert >}}
   确保你使用 **Go 1.12** 或 更高的版本，Hugo 需要这个版本才能加载模块。
   {{< /alert >}}

2. 在你刚才创建的网站目录 `mywebsite`下，为你的网站初始化模块：

   ```shell
   # 如果你在 Github 上管理你的项目
   hugo mod init github.com/<username>/<repo-name>

   # 如果你在本地管理你的项目
   hugo mod init my-project
   ```

3. 创建一个新文件 `config/_default/module.toml`，并添加下面的内容来配置主题：

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. 使用`hugo server` 命令后，主题将会自动下载。
5. 然后 [设置主题的配置文件](#set-up-theme-configuration-files).

#### 手动复制文件

1. 下载最新的主题源码。

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}从 Github 下载{{< /button >}}

2. 解压缩, 并将文件夹重命名为  `blowfish`，将其移动到你的 Hugo 项目根目录下的 `themes/` 目录中。
3. 然后 [设置主题的配置文件](#set-up-theme-configuration-files).

#### 设置主题的配置文件

在你的网站根目录中，删除 Hugo 自动生成的 `hugo.toml` 文件。从主题中复制 `*.toml` 文件，粘贴到 `config/_default/` 目录中。这将确保你的主题设置准确无误，在此基础上你能够轻松地自定义主题。

{{< alert >}}
**注意:** 如果项目中已经存在 `module.toml` 文件，请不要覆盖它！
{{< /alert >}}

根据你安装主题的不同方式，你可以在以下地方找到主题的配置文件：

- **Hugo 模块:** 在 Hugo 的缓存目录, 或者从 Github [下载副本](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nunocoracao/blowfish/tree/main/config/_default) from GitHub
- **Git 子模块 或 本地复制文件:** `themes/blowfish/config/_default`

一旦你复制了这些文件，你的 config 目录看起来应该是这样：

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # 通过 Hugo 模块安装
└─ params.toml
```

{{< alert >}}
**重要:** 如果你没有使用 Hugo 模块安装 Blowfish，那么你必须在 `hugo.toml` 文件中添加 `theme = "blowfish"`。
{{< /alert >}}

### 下一步

基本的 Blowfish 安装已经完成。继续阅读 [入门指南]({{< ref "getting-started" >}})，了解更多关于主题配置的内容。

---

## 更新主题

经常会有 [新版本](https://github.com/nunocoracao/blowfish/releases) 的主题发布，这些版本主要是修复 bug 和添加新功能。如果想要用到新版本的功能，那么你需要更新网站的主题。

如何更新主题取决于最初安装主题时选择的安装方式，具体如下：

- [使用 Git 子模块安装](#update-using-git)
- [使用 Hugo 模块安装](#update-using-hugo)
- [手动文件复制](#update-manually)

### 利用 git 更新

Git 子模块的方式，可以使用 `git` 命令更新。只需执行以下命令，最新版的主题将会下载到你的本地仓库中：

```shell
git submodule update --remote --merge
```

一旦子模块更新完毕，请检查你的确实是否一切正常。

### Update using Hugo

Hugo 更新也十分容易。只需要进入网站根目录，并执行以下命令即可：

```shell
hugo mod get -u
```

Hugo 将自动更新项目中所需的任何模块。它通过检查 `module.toml` 和 `go.mod` 来实现的。如果你在更新过程中遇到任何问题，请确保这两个文件是正常配置的。

重建完毕后，请检查网站是否一切正常。

### 手动更新

手动更新 Blowfish 需要下载主题的最新副本，并替换项目中的旧版本。

{{< alert >}}
注意：在手动替换过程中，你对主题文件中所做的任何修改都会丢失。
{{< /alert >}}

1. 下载主题最新版本的源码。

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}从 Github 下载{{< /button >}}

2. 解压缩, 将文件夹重命名为 `blowfish`，并移动到根目录 `themes/` 目录下。你需要覆盖旧版以替换所有的主题文件。

3. 重建站点，并检查网站是否一切正常。
