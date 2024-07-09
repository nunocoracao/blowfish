---
title: "Firebase: 阅读量 & 点赞量"
weight: 15
draft: false
description: "了解 Blowfish 如何集成 Firebase，并动态显示阅读量和点赞量。"
slug: "firebase-views"
tags: ["firebase", "阅读量", "点赞量"]
series: ["部署教程"]
series_order: 15
---

为了能够在网站中获取动态数据，我们支持了对 Firebase 的集成。这将允许你在列表和文章中使用阅读量功能。

1. 访问 <a target="_blank" href="https://firebase.com">Firebase</a> 并创建一个账户
2. 创建一个新项目
3. 选择分析位置 
4. Blowfish 是通过 `params.toml` 配置文件中的 firebase 相关参数，来和 firebase 集成的，更多的细节内容可以参考  <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">这个页面</a>。你可以在下面找到集成 firebase 的文件示例，请注意 FirebaseConfig 对象内的参数。

```
// 从你需要的 SDK 中导入所需的函数
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 你 Web 应用的 Firebase 配置
// 对于 Firebase JS SDK v7.20.0 以及更高版本，measurementId 参数是可选的
const firebaseConfig = {
  apiKey: "AIzaSyB5tqlqDky77Vb4Tc4apiHV4hRZI18KGiY",
  authDomain: "blowfish-21fff.firebaseapp.com",
  projectId: "blowfish-21fff",
  storageBucket: "blowfish-21fff.appspot.com",
  messagingSenderId: "60108104191",
  appId: "1:60108104191:web:039842ebe1370698b487ca",
  measurementId: "G-PEDMYR1V0K"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

5. 设置 Firestore - 选择 Build 并打开 Firestore. 创建一个数据库，并在生产环境中启动。选择服务器位置然后等待其部署完成。启动之后你需要配置规则。只需要复制并粘贴下面的内容，然后点击发布即可。
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
6. 开启匿名授权 - 选择 Build 并打开 Authentication。选择开始，点击 Anonymous 并开启，保存。
7. 享受 - 现在可以激活 Blowfish 中文章阅读量和点赞量的功能。
