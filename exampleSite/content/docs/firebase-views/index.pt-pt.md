---
title: "Firebase: Visualizações & Gostos"
weight: 15
draft: false
description: "Aprenda como integrar o Firebase e obter dados dinâmicos para visualizações e gostos."
slug: "firebase-views"
tags: ["firebase", "visualizações", "gostos"]
series: ["Documentação"]
series_order: 15
---

Para poder suportar dados dinâmicos no seu website, adicionámos suporte para integrar o Firebase. Isto permitirá utilizar a funcionalidade de visualizações em listas e publicações.

1. Vá ao <a target="_blank" href="https://firebase.com">website do Firebase</a> e crie uma conta gratuitamente
2. Crie um novo projeto
3. Selecione a localização do analytics
4. Configure o Firebase no Blowfish obtendo as variáveis do seu projeto e configurando-as no ficheiro `params.toml`. Mais detalhes podem ser encontrados <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">nesta página</a>. Pode encontrar um exemplo do ficheiro que o Firebase fornecerá abaixo, observe os parâmetros dentro do objeto FirebaseConfig.

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

5. Configurar Firestore - Selecione Build e abra Firestore. Crie uma nova base de dados e escolha iniciar no modo produção. Selecione a localização do servidor e aguarde. Assim que estiver iniciado, precisa de configurar as regras. Basta copiar e colar o ficheiro abaixo e premir publicar. Estas regras garantem que as visualizações só podem ser incrementadas em 1, e os gostos só podem ser alterados em +1 ou -1 (e nunca abaixo de 0).
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
6. Ativar autorização anónima - Selecione Build e abra Authentication. Selecione começar, clique em Anónimo e ative, guarde.
7. Aproveite - agora pode ativar visualizações e gostos no Blowfish para todos (ou específicos) artigos.
