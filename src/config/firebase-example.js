//rename this file to "firebase.js", and add your project credentials
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
const config = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxx"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;
