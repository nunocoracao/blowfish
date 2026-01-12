---
title: "Firebase: Vistas & Likes"
weight: 15
draft: false
description: "Aprende cómo integrar Firebase y obtener datos dinámicos para vistas y likes."
slug: "firebase-views"
tags: ["firebase", "vistas", "likes"]
series: ["Documentación"]
series_order: 15
---

Para poder soportar datos dinámicos en tu sitio web, hemos añadido soporte para integrar Firebase. Esto te permitirá usar la función de vistas en listas y publicaciones.

1. Ve al <a target="_blank" href="https://firebase.com">sitio web de Firebase</a> y crea una cuenta gratis
2. Crea un nuevo proyecto
3. Selecciona la ubicación de analytics
4. Configura Firebase en Blowfish obteniendo las variables para tu proyecto y configurándolas en el archivo `params.toml`. Más detalles se pueden encontrar en <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">esta página</a>. Puedes encontrar un ejemplo del archivo que Firebase proporcionará abajo, observa los parámetros dentro del objeto FirebaseConfig.

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

5. Configurar Firestore - Selecciona Build y abre Firestore. Crea una nueva base de datos y elige iniciar en modo producción. Selecciona la ubicación del servidor y espera. Una vez iniciado, necesitas configurar las reglas. Simplemente copia y pega el archivo de abajo y presiona publicar. Estas reglas aseguran que las vistas solo pueden incrementarse en 1, y los likes solo pueden cambiarse en +1 o -1 (y nunca bajar de 0).
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
6. Habilitar autorización anónima - Selecciona Build y abre Authentication. Selecciona comenzar, haz clic en Anónimo y actívalo, guarda.
7. Disfruta - ahora puedes activar vistas y likes en Blowfish para todos (o específicos) artículos.
