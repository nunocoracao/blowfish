---
title: "托管和部署"
weight: 14
draft: false
description: "了解如何部署 Blowfish 网页。"
slug: "hosting-deployment"
tags: ["文档", "托管", "部署", "github", "netlify", "渲染器"]
series: ["部署教程"]
series_order: 14
---

有许多方法可以部署基于 Blowfish 主题的 Hugo 网站。这个主题几乎在任何部署场景中都很灵活。

Blowfish 主题是通过将目录转换成相对 URL 路径来构建的。这让网站可以轻松地将子文件夹部署到类似 GitHub Pages 的托管服务中。只要在 `hugo.toml` 文件中配置了 `baseURL` 参数即可，通常不需要其他特殊的配置就能正常工作。

Hugo 官方[托管与部署](https://gohugo.io/hosting-and-deployment/)文档是了解如何部署网站的最佳方案。下面会介绍详细介绍一些方案，希望能帮助你在以下平台顺利部署。

**选择你喜欢的服务商：**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [共享主机，VPS 或者 私有服务器](#共享主机vps-或者-私有服务器)

---

## GitHub Pages

GitHub 允许你使用 Actions 在 [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) 上托管静态网站。如果想要启用此功能，需要你在代码库中启用 Pages 并创建一个新的 Actions 工作流，以此来构建和部署你的网站。

工作流文件需要是 YAML 格式，放置在 GitHub 仓库的 `.github/workflows/` 目录下，并以 `.yml` 后缀命名即可。

{{< alert >}}
**重要：** 确保你需要部署的分支 `branches` 分支下和 YAML 的部署步骤中 `if` 参数一致，保证部署正确的分支。
{{< /alert >}}

```yaml
# .github/workflows/gh-pages.yml

name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-24.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: "latest"

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./public
```

将配置文件推动到 Github，Github 会自动运行工作流。你需要访问 Github 代码库的 **Settings > Pages** 部分，检查 YAML 配置是否正确。它应该被设置为使用 `gh-pages` 分支。

{{< screenshot src="github-pages-source.jpg" alt="Screen capture of GitHub Pages source" >}}

一旦配置完成后，重新运行 Actions 工作流，网站会正确构建和部署，你就可以查看 Actions 的日志来检查是否部署成功。

## Netlify

想要部署 [Netlify](https://www.netlify.com)，需要创建一个新的 CI 并关联到你的源码。在 Netlify UI 中，构建的设置可以置空，你只需要配置你要绑定的域名。

{{< screenshot src="netlify-build-settings.jpg" alt="Screen capture of Netlify build settings" >}}

然后在你的代码库根目录下创建一个 `netlify.toml` 文件，具体内容如下：

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # Set to preferred timezone

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

这个配置默认使用的是 Hugo module 的安装方式来加载 Blowfish 主题的。如果你是通过别的方式加载 Blowfish，请将构建命令改为 `hugo --gc --minify -b $URL`。

当你将配置文件推动到你的代码库时，Netlify 会自动触发并部署你的网站。你可以在 Netlify UI 中查看日志，以检查是否报错。

## Render

部署到 [Render](https://render.com) 非常地简单易懂，所有的配置都可以通过 Render UI 来完成。

创建一个 **静态网站** 并关联到你的代码库。然后只需要配置你的构建命令为 `hugo --gc --minify` 和发布目录为 `public` 即可。

{{< screenshot src="render-settings.jpg" alt="Screen capture of Render settings" >}}

当你更新你的代码库时，[Render](https://render.com) 总会自动构建并重新部署。

## Cloudflare Pages

Cloudflare 提供了 [Pages](https://pages.cloudflare.com/) 服务来托管 Hugo 站点。只需要从 Git 仓库构建并托管到 Cloudflare 的 CDN 即可。这部分可以参考 [Hugo 部署指南](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site)。

Cloudflare 提供的 Rocket Loader™ 可以通过 JavaScript 来加速网页渲染，但是会破坏 Blowfish 主题中的外观切换器，甚至还有可能因为错误的加载顺序导致网站出现或亮或暗的屏幕闪烁。

可以通过禁用它来解决：

- 点击 [Cloudflare 控制台](https://dash.cloudflare.com)
- 点击你的域名
- 点击 _Speed_ 中的 _Optimization_ 选项
- 滚动到 _Rocket Loader™_ 并禁用它

即使不需要这个功能，基于 Blowfish 主题的 Hugo 站点本身加载就比较快。

## 共享主机，VPS 或者 私有服务器

不论你是使用传统的网站托管，或是部署到你自己的服务器中，这和构建 Hugo 网站并传输文件到你的服务一样简单。

确保 `hugo.toml` 文件中的 `baseURL` 参数是你的网站根目录的完整 URL（包括任何子域名或子文件夹）。

然后使用 `hugo` 构建你的网站，并将输出目录复制到你的服务器根目录，至此你已经部署完毕了。需要注意的是，默认情况下构建好的网站目录是 `public`。

_如果你需要一个托管提供商，你可以尝试 [Vultr](https://www.vultr.com/?ref=8957394-8H) 或者 [DigitalOcean](https://m.do.co/c/36841235e565)。注册这些产品默认会给你100美元的免费额度，以便你托管服务。_
