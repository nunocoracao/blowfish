---
title: "Firebase : Vues & Likes"
weight: 15
draft: false
description: "Apprenez à intégrer Firebase et obtenir des données dynamiques pour les vues et les likes."
slug: "firebase-views"
tags: ["firebase", "vues", "likes"]
series: ["Documentation"]
series_order: 15
---

Afin de pouvoir prendre en charge les données dynamiques sur votre site web, nous avons ajouté le support pour intégrer Firebase. Cela vous permettra d'utiliser la fonctionnalité de vues sur les listes et les articles.

1. Allez sur le <a target="_blank" href="https://firebase.com">site web Firebase</a> et créez un compte gratuitement
2. Créez un nouveau projet
3. Sélectionnez l'emplacement des analytics
4. Configurez Firebase dans Blowfish en obtenant les variables pour votre projet et en les définissant dans le fichier `params.toml`. Plus de détails peuvent être trouvés sur <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">cette page</a>. Vous pouvez trouver un exemple du fichier que Firebase fournira ci-dessous, notez les paramètres dans l'objet FirebaseConfig.

```js
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

5. Configurer Firestore - Sélectionnez Build et ouvrez Firestore. Créez une nouvelle base de données et choisissez de démarrer en mode production. Sélectionnez l'emplacement du serveur et attendez. Une fois démarré, vous devez configurer les règles. Copiez et collez simplement le fichier ci-dessous et appuyez sur publier. Ces règles garantissent que les vues ne peuvent être incrémentées que de 1, et les likes ne peuvent être modifiés que de +1 ou -1 (et ne jamais descendre en dessous de 0).
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
6. Activer l'autorisation anonyme - Sélectionnez Build et ouvrez Authentication. Sélectionnez commencer, cliquez sur Anonyme et activez-le, enregistrez.
7. Profitez - vous pouvez maintenant activer les vues et les likes sur Blowfish pour tous (ou certains) articles.
