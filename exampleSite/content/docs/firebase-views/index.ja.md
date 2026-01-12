---
title: "Firebase: 閲覧数といいね"
weight: 15
draft: false
description: "Firebase を統合して、閲覧数といいねの動的データを取得する方法を学びます。"
slug: "firebase-views"
tags: ["firebase", "views", "likes"]
series: ["Documentation"]
series_order: 15
---

ウェブサイト全体で動的データをサポートできるようにするために、Firebase を統合するサポートを追加しました。これにより、リストや投稿全体で閲覧数機能を使用できるようになります。

1. <a target="_blank" href="https://firebase.com">Firebase のウェブサイト</a>にアクセスして、無料のアカウントを作成します
2. 新規プロジェクトを作成します
3. 分析ロケーションを選択します
4. プロジェクトの変数を取得し、`params.toml` ファイル内で設定して、Blowfish で Firebase を設定します。詳細は、<a target="_blank" href="{{< ref "configuration/#テーマパラメーターtheme-parameters" >}}">このページ</a>をご覧ください。Firebase が提供するファイルの例を以下に示します。FirebaseConfig オブジェクト内のパラメータに注意してください。

```js
// 必要な SDK から必要な関数をインポートします
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: 使用する Firebase 製品の SDK を追加します
// https://firebase.google.com/docs/web/setup#available-libraries

// ウェブアプリの Firebase 設定
// Firebase JS SDK v7.20.0 以降では、measurementId はオプションです
const firebaseConfig = {
  apiKey: "AIzaSyB5tqlqDky77Vb4Tc4apiHV4hRZI18KGiY",
  authDomain: "blowfish-21fff.firebaseapp.com",
  projectId: "blowfish-21fff",
  storageBucket: "blowfish-21fff.appspot.com",
  messagingSenderId: "60108104191",
  appId: "1:60108104191:web:039842ebe1370698b487ca",
  measurementId: "G-PEDMYR1V0K"
};

// Firebase を初期化する
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

5. Firestore を設定する - 「ビルド」を選択して Firestore を開きます。新しいデータベースを作成し、本番モードで開始することを選択します。サーバーの場所を選択して待ちます。開始したら、ルールを設定する必要があります。以下のファイルをコピーして貼り付け、「公開」をクリックします。これらのルールは、閲覧数は1ずつのみ増加でき、いいねは+1または-1のみ変更可能（0未満にはならない）であることを保証します。
```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Views - read anyone, only increment by 1
    match /views/{document} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
                    && request.resource.data.keys().hasOnly(['views'])
                    && request.resource.data.views == 1;
      allow update: if request.auth != null
                    && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['views'])
                    && request.resource.data.views == resource.data.views + 1;
    }

    // Likes - read anyone, only +1 or -1
    match /likes/{document} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
                    && request.resource.data.keys().hasOnly(['likes'])
                    && request.resource.data.likes == 1;
      allow update: if request.auth != null
                    && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['likes'])
                    && (request.resource.data.likes == resource.data.likes + 1
                        || request.resource.data.likes == resource.data.likes - 1)
                    && request.resource.data.likes >= 0;
    }

    // Deny everything else
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```
6. 匿名認証を有効にする - 「ビルド」を選択して「認証」を開きます。「開始する」を選択し、「匿名」をクリックしてオンにし、保存します。
7. お楽しみください - すべて (または特定の) 記事に対して、Blowfish で閲覧数といいねを有効にできるようになりました。
