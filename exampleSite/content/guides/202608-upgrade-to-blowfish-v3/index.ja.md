---
title: "既存の Hugo サイトを Blowfish 3 にアップグレードする"
description: "互換性を損なう設定変更なしに、既存の Blowfish サイトをバージョン 3 に移行します。"
date: 2026-08-30
lastmod: 2026-08-30
tags: ["blowfish", "hugo", "migration", "v3"]
showauthor: false
authors: ["nunocoracao"]
---

{{< lead >}}
Blowfish 3 は後方互換です。既存のサイトは設定やコンテンツを書き直すことなくアップグレードできます。
{{< /lead >}}

## アップグレード前に

現在のサイトをコミットし、Hugo のバージョンが Blowfish で指定された範囲内にあることを確認してください。テーマディレクトリ内に独自ファイルがある場合は、アップグレードで上書きされないよう、先にサイトの `assets/` または `layouts/` ディレクトリへ移動してください。

## インストールをアップグレードする

### Hugo モジュール

`config/_default/module.toml` のモジュールパスに `/v3` を追加し、依存関係を更新します。

```toml
[[imports]]
path = "github.com/nunocoracao/blowfish/v3"
```

```shell
hugo mod get -u
```

### Git サブモジュール

```shell
git submodule update --remote --merge
```

### 手動インストール

最新リリースをダウンロードして `themes/blowfish/` を置き換え、サイト固有の設定は `config/_default/` に残してください。

## 結果を確認する

`hugo server` を実行し、ホームページと代表的な記事を確認してから、通常どおりデプロイしてください。Blowfish 3 の新機能はオプトインのため、既存サイトは以前と同じように表示されるはずです。

新しいサイトを作る場合は、`npx blowfish-tools new <site>` を使い、[インストールガイド]({{< ref "docs/installation" >}})に従ってください。
