import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATL0Db1_AEBknX6T1rBijZdiGKONBEr38",
    authDomain: "twitter-clone-89c0f.firebaseapp.com",
    databaseURL: "https://twitter-clone-89c0f.firebaseio.com",
    projectId: "twitter-clone-89c0f",
    storageBucket: "twitter-clone-89c0f.appspot.com",
    messagingSenderId: "525511611210",
    appId: "1:525511611210:web:e1ac2d9da1acb5e3c0e7b3",
    measurementId: "G-8D55V97SHK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;