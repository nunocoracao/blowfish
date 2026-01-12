---
title: "Firebase: Visualizações & Curtidas"
weight: 15
draft: false
description: "Aprenda como integrar o Firebase e obter dados dinâmicos para visualizações e curtidas."
slug: "firebase-views"
tags: ["firebase", "visualizações", "curtidas"]
series: ["Documentação"]
series_order: 15
---

Para poder suportar dados dinâmicos em seu site, adicionamos suporte para integrar o Firebase. Isso permitirá que você use o recurso de visualizações em listas e posts.

1. Vá para o <a target="_blank" href="https://firebase.com">site do Firebase</a> e crie uma conta gratuitamente
2. Crie um novo projeto
3. Selecione a localização do analytics
4. Configure o Firebase no Blowfish obtendo as variáveis do seu projeto e configurando-as no arquivo `params.toml`. Mais detalhes podem ser encontrados <a target="_blank" href="{{< ref "configuration/#theme-parameters" >}}">nesta página</a>. Você pode encontrar um exemplo do arquivo que o Firebase fornecerá abaixo, observe os parâmetros dentro do objeto FirebaseConfig.

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

5. Configurar Firestore - Selecione Build e abra Firestore. Crie um novo banco de dados e escolha iniciar no modo produção. Selecione a localização do servidor e aguarde. Uma vez iniciado, você precisa configurar as regras. Basta copiar e colar o arquivo abaixo e pressionar publicar. Essas regras garantem que as visualizações só podem ser incrementadas em 1, e as curtidas só podem ser alteradas em +1 ou -1 (e nunca abaixo de 0).
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
6. Habilitar autorização anônima - Selecione Build e abra Authentication. Selecione começar, clique em Anônimo e ative, salve.
7. Aproveite - agora você pode ativar visualizações e curtidas no Blowfish para todos (ou específicos) artigos.
