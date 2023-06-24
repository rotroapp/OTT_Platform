import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDsyWlrpGbnQu42njYBUO8SB0ExzTgOW_o",
    authDomain: "disneyplus-74930.firebaseapp.com",
    projectId: "disneyplus-74930",
    storageBucket: "disneyplus-74930.appspot.com",
    messagingSenderId: "209547785861",
    appId: "1:209547785861:web:8169f77e399b5d68539bec",
    measurementId: "G-9Z8KJ8KZ46"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider, storage};
  export default db;
