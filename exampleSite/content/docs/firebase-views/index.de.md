---
title: "Firebase: Aufrufe & Likes"
weight: 15
draft: false
description: "Erfahren Sie, wie Sie Firebase integrieren und dynamische Daten für Aufrufe und Likes erhalten."
slug: "firebase-views"
tags: ["firebase", "aufrufe", "likes"]
series: ["Dokumentation"]
series_order: 15
---

Um dynamische Daten auf Ihrer Website zu unterstützen, haben wir die Integration von Firebase hinzugefügt. Dies ermöglicht es Ihnen, die Aufrufe-Funktion über Listen und Beiträge hinweg zu nutzen.

1. Gehen Sie zur <a target="_blank" href="https://firebase.com">Firebase-Website</a> und erstellen Sie ein kostenloses Konto
2. Erstellen Sie ein neues Projekt
3. Wählen Sie den Analytics-Standort
4. Richten Sie Firebase in Blowfish ein, indem Sie die Variablen für Ihr Projekt abrufen und sie in der `params.toml`-Datei setzen. Weitere Details finden Sie auf <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">dieser Seite</a>. Unten finden Sie ein Beispiel der Datei, die Firebase bereitstellt. Beachten Sie die Parameter innerhalb des FirebaseConfig-Objekts.

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

5. Firestore einrichten - Wählen Sie Build und öffnen Sie Firestore. Erstellen Sie eine neue Datenbank und wählen Sie den Start im Produktionsmodus. Wählen Sie den Serverstandort und warten Sie. Sobald dies gestartet ist, müssen Sie die Regeln konfigurieren. Kopieren Sie einfach die Datei unten und drücken Sie Veröffentlichen. Diese Regeln stellen sicher, dass Aufrufe nur um 1 erhöht werden können und Likes nur um +1 oder -1 geändert werden können (und nie unter 0 fallen).
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
6. Anonyme Autorisierung aktivieren - Wählen Sie Build und öffnen Sie Authentication. Wählen Sie Erste Schritte, klicken Sie auf Anonym und aktivieren Sie es, speichern.
7. Fertig - Sie können jetzt Aufrufe und Likes in Blowfish für alle (oder bestimmte) Artikel aktivieren.
