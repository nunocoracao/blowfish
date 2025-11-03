---
title: "ホスティングとデプロイ"
weight: 14
draft: false
description: "Blowfish サイトのデプロイ方法について説明します。"
slug: "hosting-deployment"
tags: ["docs", "hosting", "deployment", "github", "netlify", "render"]
series: ["Documentation"]
series_order: 14
---

Blowfish で構築された Hugo ウェブサイトをデプロイする方法はたくさんあります。このテーマは、ほとんどすべてのデプロイシナリオで柔軟に対応できるように設計されています。

Blowfish は、テーマ全体で相対的な URL を使用して構築されています。これにより、サイトをサブフォルダや GitHub Pages などのホストに簡単にデプロイできます。`baseURL` パラメータが `hugo.toml` ファイルで設定されていれば、通常、これが機能するために特別な設定は必要ありません。

Hugo の公式[ホスティングとデプロイ](https://gohugo.io/hosting-and-deployment/)ドキュメントは、サイトのデプロイ方法を学ぶのに最適な場所です。以下のセクションには、特定のプロバイダーでスムーズにデプロイするのに役立つ、テーマ固有の設定の詳細が記載されています。

**プロバイダーを選択してください:**

- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Render](#render)
- [Cloudflare Pages](#cloudflare-pages)
- [共有ホスティング、VPS、またはプライベート Web サーバー](#共有ホスティングvpsまたはプライベート-web-サーバー)

---

## GitHub Pages

GitHub では、[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) でのアクションを使用したホスティングが可能です。この機能を有効にするには、リポジトリで Pages を有効にし、サイトをビルドしてデプロイするための新しいアクションワークフローを作成します。

ファイルは YAML 形式で、GitHub リポジトリの `.github/workflows/` ディレクトリ内に配置し、`.yml` 拡張子を付けて名前を付ける必要があります。

{{< alert >}}
**重要:** `branches` の下とデプロイステップの `if` パラメータに、プロジェクトで使用されているソースブランチの正しいブランチ名を設定してください。
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

設定ファイルを GitHub にプッシュすると、アクションが自動的に実行されます。最初は失敗する可能性があり、GitHub リポジトリの **Settings > Pages** セクションにアクセスして、ソースが正しいことを確認する必要があります。`gh-pages` ブランチを使用するように設定する必要があります。

{{< screenshot src="github-pages-source.jpg" alt="GitHub Pages ソースのスクリーンキャプチャ" >}}

設定が完了したら、アクションを再実行すると、サイトが正しくビルドおよびデプロイされます。すべてが正常にデプロイされたことを確認するには、アクションログを参照してください。

## Netlify

[Netlify](https://www.netlify.com) にデプロイするには、新しい継続的デプロイサイトを作成し、それをソースコードにリンクします。Netlify UI では、ビルド設定を空白のままにすることができます。使用するドメインを設定するだけで済みます。

{{< screenshot src="netlify-build-settings.jpg" alt="Netlify ビルド設定のスクリーンキャプチャ" >}}

次に、サイトリポジトリのルートに `netlify.toml` ファイルを作成します。

```toml
# netlify.toml

[build]
  command = "hugo mod get -u && hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  NODE_ENV = "production"
  GO_VERSION = "1.16"
  TZ = "UTC"  # 希望のタイムゾーンに設定

[context.production.environment]
  HUGO_VERSION = "0.104.1"
  HUGO_ENV = "production"

[context.deploy-preview.environment]
  HUGO_VERSION = "0.104.1"
```

この設定では、Blowfish を Hugo モジュールとしてデプロイすることを想定しています。別の方法でテーマをインストールした場合は、ビルドコマンドを単に `hugo --gc --minify -b $URL` に変更します。

設定ファイルをリポジトリにプッシュすると、Netlify は自動的にサイトをデプロイします。エラーがないか確認するには、Netlify UI のデプロイログを確認してください。

## Render

[Render](https://render.com) へのデプロイは非常に簡単で、すべての設定は Render UI を介して行います。

新しい **静的サイト** を作成し、それをプロジェクトのコードリポジトリにリンクします。次に、ビルドコマンドを `hugo --gc --minify` に、公開ディレクトリを `public` に設定するだけです。

{{< screenshot src="render-settings.jpg" alt="Render 設定のスクリーンキャプチャ" >}}

リポジトリに変更をプッシュするたびに、サイトが自動的にビルドおよびデプロイされます。

## Cloudflare Pages

Cloudflare は、Hugo ブログをホストできる [Pages](https://pages.cloudflare.com/) サービスを提供しています。これは、git リポジトリからサイトをビルドし、Cloudflare の CDN でホストします。[Hugo デプロイメントガイド](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site)に従って始めてください。

Cloudflare が提供する Rocket Loader™ 機能は、JavaScript を使用した Web ページのレンダリングを高速化しようとしますが、テーマの外観スイッチャーが壊れます。また、スクリプトが間違った順序で読み込まれるため、サイトの閲覧時に迷惑な明暗の画面のちらつきが発生する可能性があります。

この問題は、次のように無効にすることで修正できます。

- [Cloudflare ダッシュボード](https://dash.cloudflare.com)に移動します
- リストでドメイン名をクリックします
- _Speed_ セクションで _Optimization_ をクリックします
- _Rocket Loader™_ までスクロールして無効にします

Blowfish でビルドされた Hugo サイトは、この機能を無効にしても非常に高速に読み込まれます。

## 共有ホスティング、VPS、またはプライベート Web サーバー

従来の Web ホスティングを使用したり、独自の Web サーバーにデプロイしたりするのは、Hugo サイトをビルドしてファイルをホストに転送するのと同じくらい簡単です。

`hugo.toml` の `baseURL` パラメータが、ウェブサイトのルートへの完全な URL (サブドメインやサブフォルダを含む) に設定されていることを確認してください。

次に、`hugo` を使用してサイトをビルドし、出力ディレクトリの内容を Web サーバーのルートにコピーすると、準備完了です。デフォルトでは、出力ディレクトリの名前は `public` です。

_ホスティングプロバイダーが必要な場合は、[Vultr](https://www.vultr.com/?ref=8957394-8H) または [DigitalOcean](https://m.do.co/c/36841235e565) を確認してください。これらのアフィリエイトリンクを使用してサインアップすると、最大 $100 の無料クレジットが付与されるため、サービスを試すことができます。_
