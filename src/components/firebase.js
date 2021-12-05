import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0Tugv36n5EaEVBxhhowmeN1-zr6CW6os",
  authDomain: "cats-community.firebaseapp.com",
  projectId: "cats-community",
  storageBucket: "cats-community.appspot.com",
  messagingSenderId: "1071648525756",
  appId: "1:1071648525756:web:0a1295a0246a45ec9cafb9",
  measurementId: "G-2NQ0LM586G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, analytics, storage, auth };

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };
