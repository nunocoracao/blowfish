[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [Indonesian](https://github.com/nunocoracao/blowfish/blob/main/README.id.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | 日本語
# Blowfish
[![Deploy Production to Firebase](https://github.com/nunocoracao/blowfish/actions/workflows/firebase-production.yml/badge.svg)](https://github.com/nunocoracao/blowfish/actions/workflows/firebase-production.yml)
[![Deploy Production to GitHub pages](https://github.com/nunocoracao/blowfish/actions/workflows/pages.yml/badge.svg)](https://github.com/nunocoracao/blowfish/actions/workflows/pages.yml)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=0.87.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
[![GitHub](https://img.shields.io/github/license/nunocoracao/blowfish)](https://github.com/nunocoracao/blowfish/blob/main/LICENSE)
[![Blowfish](https://img.shields.io/badge/Hugo--Themes-@Blowfish-blue)](https://themes.gohugo.io/themes/blowfish/)
![code-size](https://img.shields.io/github/languages/code-size/nunocoracao/blowfish)

Blowfishは[Hugo](https://gohugo.io)のために設計された強力で軽量なテーマです。Tailwind CSS を使用し、コンテンツを優先したクリーンでミニマルなデザインでが特徴です。

![blowfish screenshot](https://github.com/nunocoracao/blowfish/blob/main/images/screenshot.png?raw=true)


🌏 [デモサイト](https://blowfish.page/)  
📑 [ドキュメント](https://blowfish.page/docs/)  
💎 [グッズストア](http://tee.pub/lic/qwSlWVBL5zc)  
🐛 [バグ報告と問題点](https://github.com/nunocoracao/blowfish/issues)  
💡 [質問と機能リクエスト](https://github.com/nunocoracao/blowfish/discussions)



<a href="https://www.buymeacoffee.com/nunocoracao" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
<a target="_blank" href="http://tee.pub/lic/qwSlWVBL5zc"><img class="nozoom" src="https://img.buymeacoffee.com/button-api/?text=Merch Store &emoji=💎&slug=nunocoracao&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>



## 機能

- Tailwind CSS 3.0 で構築された、完璧なレスポンシブデザイン
- 複数の配色 (または、自分で完全にカスタマイズ可能)
- ダークモード (強制オン/オフ か 自動選択・ユーザー切り替え)
- 高度なカスタマイズが可能な設定
- Firebase 連携で動的データをサポート
- 閲覧数といいね機能
- 関連記事
- 複数のホームページレイアウト
- 複数人の著者
- シリーズ記事
- 日付と価値付けによる記事の並べ替え
- 記事を読むための Zen モード
- あらゆるコンテンツタイプ、分類、メニューに柔軟に対応
- ヘッダー/フッターメニュー
- 階層化されたメニューとサブナビゲーションメニュー
- スクロール可能な目次
- RTL 言語を含む多言語コンテンツのサポート
- サードパーティー ウェブサイトの投稿へのリンク
- ギャラリー、タイムライン、GitHub カード、カルーセルなど、複数のショートコードに対応
- Buy Me a Coffee 連携
- Fuse.js を利用したクライアントサイドのサイト内検索
- Mermaid を使用したダイアグラムや視覚化
- Chart.js を使用したグラフ表示
- TypeIt 連携
- パフォーマンスを改善した YouTube 埋め込み
- KaTeX を使用した数式表現
- FontAwesome 6 の SVG アイコン
- Hugo Pipes を使用した画像の自動リサイズ
- アンカーリンク、目次、コードコピー、ボタン、バッジなど
- 記事内での HTML と絵文字のサポート 🎉
- ソーシャルメディアへの共有リンクを備えた SEO フレンドリーな設計
- Fathom Analytics と Google Analytics のサポート
- RSS フィード、ファビコン、コメント機能のサポート
- Tailwind の色定義とスタイルを使った高度なカスタマイズ
- Lighthouse で満点評価を獲得したパフォーマンスとアクセシビリティの最適化
- 充実したドキュメントと定期的なアップデート

---

![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

## ドキュメント

Blowfish には、テーマのあらゆる側面を網羅した[詳細なドキュメント](https://blowfish.page/docs/)があります。テーマの使い方や機能を詳しく知るために、必ず[ドキュメントを読んで](https://blowfish.page/docs/)ください。

---

## インストール

Blowfish は、git サブモジュール、Hugo モジュール、または完全な手動インストールなど、いくつかのインストール方法をサポートしています。

各方法の詳細な手順は、[インストール](https://blowfish.page/docs/installation)ドキュメントに記載されています。最も簡単なセットアップ方法については、ドキュメントを参照してください。以下にクイックスタートガイドを示します。git を使用している場合はサブモジュール、Hugo テーマのインストールに慣れている場合は Hugo モジュールを使用するのがおすすめです。

### Blowfish Tools を使ったクイックスタート

> **注意:**  **Node.js**、**Git**、**Go**、**Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。

Blowfish を使い始めるのに役立つ新しい CLI ツールをリリースしました。このツールは、新しい Hugo プロジェクトを作成し、テーマをインストールし、テーマ設定ファイルをセットアップします。まだベータ版なので、[問題を見つけたら報告してください](https://github.com/nunocoracao/blowfish-tools)。

npm（または他のパッケージマネージャー）を使って CLI ツールをグローバルにインストールします:
```shell
npm i -g blowfish-tools
```

`blowfish-tools` コマンドを実行すると、対話形式でプロジェクトの作成と設定をガイドするツールが起動します。
```shell
blowfish-tools
```

`blowfish-tools new` コマンドを実行すると、新しい Hugo プロジェクトを作成し、テーマを一度にインストールすることもできます。詳細については、CLI のヘルプを参照してください。
```shell
blowfish-tools new mynewsite
```

### git サブモジュールを使ったクイックスタート

> **注意:**  **Git**、**Go**、**Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。

1. プロジェクトディレクトリで、git を初期化します。

   ```shell
   git init
   ```

2. Blowfish を git サブモジュールとして設定します。

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. ウェブサイトのルートフォルダで、Hugo によって生成された `config.toml` ファイルを削除します。テーマから `*.toml` 設定ファイルをコピーして、`config/_default/` フォルダに保存します。

   これらのテーマ設定ファイルは、Hugo キャッシュディレクトリにあります。または、GitHub から[コピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)できます。

4. [Getting Started](https://blowfish.page/docs/getting-started/) の手順に従って、ウェブサイトを設定します。

### Hugo を使ったクイックスタート

> **注意:**  **Go** と **Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。

1. プロジェクトディレクトリから、Hugo Modules を初期化します。

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. `config/_default/module.toml` を作成し、以下を追加します。

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

3. `hugo server` を使用してサーバーを起動すると、テーマが自動的にダウンロードされます。

4. ウェブサイトのルートフォルダにある、Hugo によって生成された `config.toml` ファイルを削除します。テーマの `*.toml` 設定ファイルを `config/_default/` フォルダにコピーします。

   > **注意:** 上記で作成した `module.toml` ファイルを上書きしないでください！

   これらのテーマ設定ファイルは、Hugo のキャッシュディレクトリにあります。または、GitHub から[コピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)できます。

5. [Getting Started](https://blowfish.page/docs/getting-started/) の手順に従って、ウェブサイトを設定します。

### テーマのアップデートのインストール

新しいリリースが公開されたら、Hugo を使ってテーマをアップデートできます。プロジェクトディレクトリから `hugo mod get -u` を実行するだけで、テーマは自動的に最新リリースにアップデートされます。

詳細な[アップデート手順](https://blowfish.page/docs/installation/#installing-updates)はドキュメントに記載されています。

---

## 貢献

Blowfish は時間とともに進化していく予定です。必要に応じて機能の追加や変更を続けていく予定です。

問題や追加してほしい新機能の提案があれば、お気軽にご連絡ください。

- 🐛 **バグ報告と問題点:** [GitHub Issues](https://github.com/nunocoracao/blowfish/issues) を使用してください
- 💡 **新機能のアイデア:** [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) でディスカッションを開始してください
- 🙋‍♀️ **一般的な質問:** [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions) へ進んでください

バグ修正や新機能の実装ができる方は、Pull Request を歓迎します。詳しくは[貢献ガイドライン](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md)をご覧ください。

---

## スター数の推移

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
