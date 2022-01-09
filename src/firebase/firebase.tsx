import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0Tugv36n5EaEVBxhhowmeN1-zr6CW6os",
  authDomain: "cats-community.firebaseapp.com",
  projectId: "cats-community",
  storageBucket: "cats-community.appspot.com",
  messagingSenderId: "1071648525756",
  appId: "1:1071648525756:web:0a1295a0246a45ec9cafb9",
  measurementId: "G-2NQ0LM586G",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
