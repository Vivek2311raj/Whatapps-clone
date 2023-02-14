
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpqj9P1fs1GZ8_iLnRcsBoHmjsFlIQs6s",
  authDomain: "watapps-clone.firebaseapp.com",
  projectId: "watapps-clone",
  storageBucket: "watapps-clone.appspot.com",
  messagingSenderId: "680358456835",
  appId: "1:680358456835:web:f67921e280be1c79622836",
  measurementId: "G-H8YV0R8DDK"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;