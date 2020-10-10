import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQHFqJC8RJVgjExb0472RKPDgXb5VQtr0",
  authDomain: "react-twitter-clone-6aa31.firebaseapp.com",
  databaseURL: "https://react-twitter-clone-6aa31.firebaseio.com",
  projectId: "react-twitter-clone-6aa31",
  storageBucket: "react-twitter-clone-6aa31.appspot.com",
  messagingSenderId: "853035841004",
  appId: "1:853035841004:web:04d9a9a459ae3729a13cc9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
