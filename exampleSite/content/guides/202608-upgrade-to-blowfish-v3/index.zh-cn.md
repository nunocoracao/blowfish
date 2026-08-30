---
title: "将现有 Hugo 网站升级到 Blowfish 3"
description: "无需进行破坏性配置更改，即可将现有 Blowfish 网站迁移到版本 3。"
featureimage: "featured.png"
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 向后兼容。现有网站无需重写配置或内容即可升级。
{{< /lead >}}

## 升级前准备

提交当前网站的更改，并确保 Hugo 版本处于 Blowfish 声明的支持范围内。如果主题目录中有自定义文件，请先将它们移至网站的 `assets/` 或 `layouts/` 目录，以免升级时被覆盖。

## 升级安装方式

### Hugo 模块

在 `config/_default/module.toml` 中更新模块路径以包含 `/v3`，然后刷新依赖：

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Git 子模块

```shell
git submodule update --remote --merge
```

### 手动安装

下载最新发行版，替换 `themes/blowfish/`，并将站点级配置保留在 `config/_default/` 中。

## 验证结果

运行 `hugo server`，检查主页和一篇有代表性的文章，然后照常部署。Blowfish 3 的新功能均为可选功能，因此现有网站应该和之前一样正常渲染。

如果要创建新网站，请使用 `npx blowfish-tools new <site>` 并按照[安装指南]({{< ref "docs/installation" >}})操作。
