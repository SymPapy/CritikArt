import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHC3kmIX1tLnK1ZJGbmonJck7V3Ve5ghI",
    authDomain: "react-auth-critikart.firebaseapp.com",
//paramètres pour authentification
    databaseURL: "https://react-auth-critikart-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-auth-critikart",
    storageBucket: "react-auth-critikart.appspot.com",
    messagingSenderId: "879011904966",
    appId: "1:879011904966:web:8ce91ee67daefa324906c7"
//paramètres pour le CRUD
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;