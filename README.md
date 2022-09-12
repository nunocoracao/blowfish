![blowfish logo](https://github.com/nunocoracao/blowfish/blob/main/logo.png?raw=true)

# Blowfish
Personal Website &amp; Blog Theme for Hugo

based on Congo

git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish

- only one header

Firebase
1. create account
2. create project
3. select analytics
4. Setup firebase

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

5. Setup Firestore - Build > Firestore - create database - start production mode - select server - wait - rules
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
5. Toggle guest authorization - Build > Authentication - Get Started - Anonymous - toggle - Save
6. Get values
7. copy into params.toml
8. Enjoy - activate views

