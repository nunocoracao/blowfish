---
title: "Firebase: Views & Likes"
weight: 15
draft: false
description: "Learn how to integrate Firebase and get dynamic data for views and likes."
slug: "firebase-views"
tags: ["firebase", "views", likes]
series: ["Documentation"]
series_order: 15
---

In order to be able to support dynamic data across your website we've added the support to integrate Firebase. This will allow you to use the views feature across lists and posts. 

1. Go to <a target="_blank" href="https://firebase.com">Firebase website</a> and create an account for free
2. Create a new project
3. Select analytics location
4. Setup firebase in Blowfish by getting the variables for your project and setting them inside `params.toml` file. More details can be found in <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">this page</a>. You can find an example of the file Firebase will provide below, notice the parameters within the FirebaseConfig object.

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5tqlqDky77Vb4Tc4apiHV4hRZI18KGiY",
  authDomain: "blowfish-21fff.firebaseapp.com",
  projectId: "blowfish-21fff",
  storageBucket: "blowfish-21fff.appspot.com",
  messagingSenderId: "60108104191",
  appId: "1:60108104191:web:039842ebe1370698b487ca",
  measurementId: "G-PEDMYR1V0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

5. Setup Firestore - Select Build and open Firestore. Create a new database and choose to start in production mode. Select server location and wait. Once that is started you need to configure the rules. Just copy and paste the file below and press publish.
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
6. Enable anonymous authorization - Select Build and open Authentication. Select get started, click Anonymous and turn it on, save.
7. Enjoy - you can now activate views and likes on Blowfish for all (or specific) articles.
