[English](https://github.com/nunocoracao/blowfish/blob/main/README.md) | [简体中文](https://github.com/nunocoracao/blowfish/blob/main/README.zh-cn.md) | 日本語
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
🐛 [バグレポート & issue](https://github.com/nunocoracao/blowfish/issues)  
💡 [質問 & 機能リクエスト](https://github.com/nunocoracao/blowfish/discussions)



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
- サードパーティーウェブサイトの投稿へのリンク
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

### gitサブモジュールを使ったクイックスタート

> **注意:**  **Git**、**Go**、**Hugo** がインストールされていること、そして先に進む前に新しい Hugo プロジェクトが作成されていることを確認してください。

1. プロジェクトディレクトリで、gitを初期化します。

   ```shell
   git init
   ```

2. Blowfishをgitサブモジュールとして設定します。

   ```shell
   git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
   ```

3. ウェブサイトのルートフォルダで、Hugoによって生成された `config.toml` ファイルを削除します。テーマから `*.toml` 設定ファイルをコピーして、`config/_default/` フォルダに保存します。

   これらのテーマ設定ファイルは、Hugoキャッシュディレクトリにあります。または、GitHubから[コピーをダウンロード](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip)できます。

4. [Getting Started](https://blowfish.page/docs/getting-started/) の手順に従って、ウェブサイトを設定します。

### Quick start using Hugo

> **Note:** Ensure you have **Go** and **Hugo** installed, and that you have created a new Hugo project before proceeding.

1. From your project directory, initialise Hugo Modules:

   ```shell
   hugo mod init github.com/<username>/<repo-name>
   ```

2. Create `config/_default/module.toml` and add the following:

   ```toml
   [[imports]]
   path = "github.com/nunocoracao/blowfish/v2"
   ```

3. Start your server using `hugo server` and the theme will be downloaded automatically.

4. In the root folder of your website, delete the `hugo.toml` file that was generated by Hugo. Copy the `*.toml` config files from the theme into your `config/_default/` folder.

   > **Note:** Do not overwrite the `module.toml` file you created above!

   You will find these theme config files in the Hugo cache directory, or [download a copy](https://github.com/nunocoracao/blowfish/releases/latest/download/config-default.zip) from GitHub.

5. Follow the [Getting Started](https://blowfish.page/docs/getting-started/) instructions to configure your website.

### Installing theme updates

As new releases are posted, you can update the theme using Hugo. Simply run `hugo mod get -u` from your project directory and the theme will automatically update to the latest release.

Detailed [update instructions](https://blowfish.page/docs/installation/#installing-updates) are available in the docs.

---

## Contributing

Blowfish is expected to evolve over time. I intend to keep adding features and making changes as required.

Feel free to get in touch with any issues or suggestions for new features you'd like to see.

- 🐛 **Bug reports & issues:** Use [GitHub Issues](https://github.com/nunocoracao/blowfish/issues)
- 💡 **Ideas for new features:** Open a discussion on [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)
- 🙋‍♀️ **General questions:** Head to [GitHub Discussions](https://github.com/nunocoracao/blowfish/discussions)

If you're able to fix a bug or implement a new feature, I welcome PRs for this purpose. Learn more in the [contributing guidelines](https://github.com/nunocoracao/blowfish/blob/main/CONTRIBUTING.md).

---

## Stargazers over time

[![Stargazers over time](https://starchart.cc/nunocoracao/blowfish.svg)](https://starchart.cc/nunocoracao/blowfish)

<a rel="me" href="https://masto.ai/@blowfish">Mastodon</a>
