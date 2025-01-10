---
title: "インストール"
weight: 2
draft: false
description: "Blowfish テーマのインストール方法"
slug: "installation"
tags: ["installation", "docs"]
series: ["Documentation"]
series_order: 2
---

Hugo の[クイックスタートガイド](https://gohugo.io/getting-started/quick-start/)に従うだけで、簡単に使い始めることができます。

詳細なインストール手順は以下に記載されています。[テーマのアップデート方法](#テーマのアップデート方法)についても説明しています。

## インストール

以下の手順では、全くの新規状態から Hugo と Blowfish を使用してウェブサイトを立ち上げる方法を説明します。このガイドで紹介するツールのほとんどは、お使いのプラットフォームに対応したパッケージマネージャーからインストール可能です。

### Hugo のインストール

Hugo を初めて使用する場合は、[公式サイトの手順](https://gohugo.io/getting-started/installing)に従って、ローカルマシンにインストールしてください。すでにインストールされているかどうかは、コマンド `hugo version` を実行して確認できます。

{{< alert >}}
テーマは最新の Hugo の機能を活用しているため、**Hugo バージョン 0.87.0 以降**を使用していることを確認してください。
{{< /alert >}}

お使いのプラットフォームに合わせた詳細なインストール手順は、[Hugo の公式ドキュメント](https://gohugo.io/getting-started/installing)に記載されています。

### Blowfish Tools (推奨)

Blowfish を簡単に使い始められるよう、新しく CLI ツールをリリースしました。このツールは、新しい Hugo プロジェクトの作成、テーマのインストール、そしてテーマ設定ファイルのセットアップを自動的に行います。まだベータ版ですので、[問題を発見した場合は報告にご協力ください](https://github.com/nunocoracao/blowfish-tools)。

npm (または他のパッケージマネージャー) を使用して、CLI ツールをグローバルにインストールします。
```shell
npx blowfish-tools
```
または

```shell
npm i -g blowfish-tools
```

次に、コマンド `blowfish-tools` を実行すると、対話形式でプロジェクトの作成と設定をガイドしてくれます。
```shell
blowfish-tools
```

また、コマンド `blowfish-tools new` を実行すれば、新しい Hugo プロジェクトの作成とテーマのインストールを一度に行うこともできます。詳細は、CLI のヘルプを参照してください。
```shell
blowfish-tools new mynewsite
```

CLI ツールを使って Blowfish を迅速に使い始める方法を、以下の動画でご覧いただけます。

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SgXhGb-7QbU?si=ce44baicuQ6zMeXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### CLI を使用しないインストール

#### 新しいサイトの作成

コマンド `hugo new site mywebsite` を実行して、`mywebsite` という名前のディレクトリに新しい Hugo サイトを作成します。

プロジェクトディレクトリには任意の名前を付けることができますが、以降の手順では `mywebsite` という名前を想定して説明します。別の名前を使用する場合は、適宜読み替えてください。

#### Blowfish テーマのダウンロード

Hugo ウェブサイトに Blowfish テーマをインストールするには、いくつかの方法があります。インストールとメンテナンスが簡単な方法から難しい方法まで、以下の通りです。

- [Git サブモジュールを使用する](#git-を使用してインストールする) (推奨)
- [Hugo モジュールを使用する](#hugo-を使用してインストールする)
- [手動でファイルをコピーする](#手動でインストールする)

どの方法を選べば良いか分からない場合は、Git サブモジュール方式を選択することをお勧めします。

#### Git を使用してインストールする

この方法は、テーマを最新の状態に保つための最も迅速で簡単な方法です。**Hugo** と **Go** に加えて、ローカルマシンに **Git** がインストールされていることも確認してください。

(上記で作成した) Hugo ウェブサイトのディレクトリに移動し、新しい `git` リポジトリを初期化して、Blowfish をサブモジュールとして追加します。

```bash
cd mywebsite
git init
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

次に、[テーマ設定ファイルを作成する](#テーマ設定ファイルを作成する)に進みます。

#### Hugo を使用してインストールする

この方法では、Hugo を使用してテーマを管理します。Hugo は **Go** を使用してモジュールを初期化および管理するため、続行する前に `go` がインストールされていることを確認する必要があります。

1. Go を[ダウンロード](https://golang.org/dl/)してインストールします。コマンド `go version` を使用して、すでにインストールされているかどうかを確認できます。

   {{< alert >}}
   Hugo ではモジュールが正しく動作するために **Go バージョン 1.12 以降** が必要です。必ず対応バージョンを使用してください。
   {{< /alert >}}

2. (上記で作成した) Hugo プロジェクトディレクトリから、ウェブサイトのモジュールを初期化します。

   ```shell
   # プロジェクトを GitHub で管理している場合
   hugo mod init github.com/<ユーザー名>/<リポジトリ名>

   # プロジェクトをローカルで管理している場合
   hugo mod init my-project
   ```

3. 新しいファイル `config/_default/module.toml` を作成し、以下を記述して、テーマを設定に追加します。

   ```toml
   [[imports]]
   disable = false
   path = "github.com/nunocoracao/blowfish/v2"
   ```

4. `hugo server` を実行してサーバーを起動すると、テーマが自動的にダウンロードされます。
5. [テーマ設定ファイルを作成する](#テーマ設定ファイルを作成する)に進みます。

#### 手動でインストールする

1. テーマソースコードの最新リリースをダウンロードします。

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}GitHub からダウンロード{{< /button >}}

2. アーカイブを解凍し、フォルダ名を `blowfish` に変更して、Hugo プロジェクトのルートフォルダ内の `themes/` ディレクトリに移動します。
3. [テーマ設定ファイルを作成する](#テーマ設定ファイルを作成する)に進みます。

#### テーマ設定ファイルを作成する

ウェブサイトのルートフォルダで、Hugo によって自動生成された `hugo.toml` ファイルを削除します。`*.toml` 設定ファイルをテーマから `config/_default/` フォルダにコピーします。これにより、必要なテーマ設定がすべて適用され、テーマを簡単にカスタマイズできるようになります。

{{< alert >}}
**注意:** プロジェクトに `module.toml` ファイルがすでに存在する場合は、上書きしないでください。
{{< /alert >}}

テーマのインストール方法によって、テーマ設定ファイルの場所は異なります。

- **Hugo モジュール:** Hugo キャッシュディレクトリ、または GitHub から [設定ファイルのコピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) します
- **Git サブモジュールまたは手動インストール:** `themes/blowfish/config/_default`

ファイルをコピーしたら、設定フォルダは次のようになります。

```shell
config/_default/
├─ hugo.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
├─ module.toml  # Hugo モジュールを使用してインストールした場合
└─ params.toml
```

{{< alert >}}
**重要:** Hugo モジュールを使用せずに Blowfish をインストールした場合は、`hugo.toml` ファイルの先頭に `theme = "blowfish"` という行を追加する必要があります。
{{< /alert >}}

### 次のステップ

これで Blowfish の基本的なインストールは完了です。[始める]({{< ref "getting-started" >}})セクションに進んで、テーマの設定についてさらに詳しく学びましょう。

---

## テーマのアップデート方法

不具合の修正や新機能の追加を含む[新しいリリース](https://github.com/nunocoracao/blowfish/releases)が随時公開されます。これらの変更を反映するには、ウェブサイトのテーマファイルをアップデートする必要があります。

アップデート方法は、最初にテーマをインストールした方法によって異なります。各方法の手順は以下に記載されています。

- [Git サブモジュール](#git-を使用してアップデートする)
- [Hugo モジュール](#hugo-を使用してアップデートする)
- [手動でファイルをコピー](#手動でアップデートする)

### Git を使用してアップデートする

Git サブモジュールは、`git` コマンドを使用してアップデートできます。次のコマンドを実行するだけで、テーマの最新バージョンがローカルリポジトリにダウンロードされます。

```shell
git submodule update --remote --merge
```

サブモジュールがアップデートされたら、サイトを再びビルドし、すべてが期待通りに動作することを確認してください。

### Hugo を使用してアップデートする

Hugo を使用すると、モジュールのアップデートが非常に簡単になります。プロジェクトディレクトリに移動して、次のコマンドを実行するだけです。

```shell
hugo mod get -u
```

Hugo は、プロジェクトに必要なモジュールを自動的にアップデートします。これは、`module.toml` ファイルと `go.mod` ファイルを調べることで行われます。アップデートに問題がある場合は、これらのファイルが正しく設定されていることを確認してください。

その後、サイトを再びビルドし、すべてが期待通りに動作することを確認してください。

### 手動でアップデートする

Blowfish を手動でアップデートするには、テーマの最新コピーをダウンロードして、プロジェクトの古いバージョンを置き換える必要があります。

{{< alert >}}
この処理を行うと、テーマファイルに加えたローカルの変更はすべて失われるので注意してください。
{{< /alert >}}

1. テーマソースコードの最新リリースをダウンロードします。

   {{< button href="https://github.com/nunocoracao/blowfish/releases/latest" target="_blank" >}}GitHub からダウンロード{{< /button >}}

2. アーカイブを解凍し、フォルダ名を `blowfish` に変更して、Hugo プロジェクトのルートフォルダ内の `themes/` ディレクトリに移動します。すべてのテーマファイルを置き換えるには、既存のディレクトリを上書きする必要があります。

3. サイトを再びビルドし、すべてが期待通りに動作することを確認してください。
