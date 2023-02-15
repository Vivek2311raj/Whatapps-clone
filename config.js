const firebaseapp=require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCpqj9P1fs1GZ8_iLnRcsBoHmjsFlIQs6s",
    authDomain: "watapps-clone.firebaseapp.com",
    projectId: "watapps-clone",
    storageBucket: "watapps-clone.appspot.com",
    messagingSenderId: "680358456835",
    appId: "1:680358456835:web:f67921e280be1c79622836",
    measurementId: "G-H8YV0R8DDK"
  };
  firebaseConfig.initializeApp(firebaseConfig)
  const db=firebase.firestore()
  const User=db.collection("User")
  Module.exports =User;