---
title: "Blowfish へようこそ"
featureimage: "images/v3/welcome.png"
weight: 1
draft: false
description: "柔軟なレイアウト、豊かなコンテンツ機能、エージェント対応のワークフローで、高速で表現力ある Hugo サイトを作りましょう。"
lastmod: 2026-08-30
tags: ["new", "docs"]
series: ["Documentation"]
series_order: 1
---

{{< lead >}}
Blowfish 3 は、ブログ、ドキュメント、ポートフォリオ、そして決まったテンプレートに収まらないサイトのためのモダンな Hugo テーマです。
{{< /lead >}}

{{< alert >}}
`npx blowfish-tools new <site>` で新しいサイトを始め、[インストールガイド]({{< ref "docs/installation" >}})に進んでください。既存の Blowfish サイトは互換性を損なう設定変更なしに v3 へ移行できます。
{{< /alert >}}

## 思い描いたサイトを作る

Blowfish は結果を固定せず、しっかりした出発点を提供します。プロフィール、ランディング、ヒーロー、カード、背景などのホームページレイアウトを選べます。配色、タイポグラフィ、ナビゲーション、ダークモード、記事表示はサイト設定で制御し、個別ページはフロントマターで変更できます。

コンテンツはポータブルな Hugo コンテンツのままです。Markdown、ページバンドル、タクソノミー、メニュー、設定ファイルはすべてリポジトリに置かれます。専用エディタもプラットフォームへのロックインもありません。

## 少ない独自コードで豊かなコンテンツを公開する

Markdown で書き、必要に応じて[40 以上のショートコード]({{< ref "docs/shortcodes" >}})を使いましょう。ボタン、通知、アイコン、タブ、ギャラリー、グラフ、図、GitHub カード、動画、コード例を、単発のテンプレートを保守せずに追加できます。

Blowfish はコンテンツ周辺も支えます。レスポンシブなアイキャッチとサムネイル、検索、読書機能、目次、ソーシャル・SEO メタデータ、構造化データ、アクセシビリティ設定、任意の分析、コメント、Firebase による閲覧数といいねに対応します。

## すべての読者のために

翻訳コンテンツ、言語ごとのメニュー、組み込みの UI 翻訳を備えた多言語サイトを作れます。Blowfish は同じプロジェクトで RTL と LTR の言語をサポートし、表示切替、レスポンシブなナビゲーション、キーボードで使える検索を提供します。

Blowfish は現行の Hugo 機能と Tailwind CSS 4 を使いながら、設定とコンテンツのモデルを分かりやすく、自分で管理できる形に保ちます。

## コーディングエージェントに必要な文脈を渡す

Blowfish には、Claude Code などの AI コーディングエージェント向け[エージェントスキル](https://github.com/nunocoracao/blowfish/tree/main/.claude/skills/blowfish)が含まれています。設定の場所、レイアウトとフロントマターの仕組み、利用可能なショートコード、推測せずに Blowfish サイトを作る方法をエージェントに教えます。

Claude Code でインストールします。

```shell
/plugin marketplace add nunocoracao/blowfish
/plugin install blowfish@blowfish
```

または、プロジェクトの `.claude/skills/blowfish/` にコピーしてください。セットアップ、設定、コンテンツ構成、ページデザイン、テーマを理解した実装をエージェントに手伝わせながら、サイトはリポジトリで管理できます。

## 次の一歩を選ぶ

- Blowfish が初めてなら、[インストール]({{< ref "docs/installation" >}})から始めましょう。
- サイトを形にするなら、[はじめに]({{< ref "docs/getting-started" >}})と[設定]({{< ref "docs/configuration" >}})を読んでください。
- 可能性を見るなら、[ショートコード]({{< ref "docs/shortcodes" >}})、[サンプル]({{< ref "samples" >}})、[ショーケース]({{< ref "examples" >}})を探索してください。
- 既存サイトを移行するなら、[Blowfish 3 アップグレードガイド]({{< ref "guides/202608-upgrade-to-blowfish-v3" >}})に従ってください。
