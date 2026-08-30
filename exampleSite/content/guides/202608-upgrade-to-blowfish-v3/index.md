---
title: "Upgrade an existing Hugo site to Blowfish 3"
description: "Move an existing Blowfish site to version 3 with no breaking configuration changes."
featureimage: "featured.png"
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 is backwards compatible. Existing sites can upgrade without rewriting their configuration or content.
{{< /lead >}}

## Before you upgrade

Commit your current site and make sure your Hugo version is within the range declared by Blowfish. If you have custom files inside the theme directory, move them into your site's `assets/` or `layouts/` directories first so upgrades do not overwrite them.

## Upgrade your installation

### Hugo module

Update the module path in `config/_default/module.toml` to include `/v3`, then refresh dependencies:

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Git submodule

```shell
git submodule update --remote --merge
```

### Manual install

Download the latest release, replace `themes/blowfish/`, and keep your site-level configuration in `config/_default/`.

## Verify the result

Run `hugo server`, check your homepage and a representative article, then deploy as usual. New Blowfish 3 features are opt-in, so your existing site should render as before.

For a new site instead, use `npx blowfish-tools new <site>` and follow the [installation guide]({{< ref "docs/installation" >}}).
