import  firebase from 'firebase'
import 'firebase/database'
import 'firebase/storage'
// // import 'firebase/auth'




var firebaseConfig = {
    apiKey: "AIzaSyDtA_7_6fX-EKScMBW7HUSlvBQ5GWSuaNQ",
    authDomain: "olx-app-c9a82.firebaseapp.com",
    databaseURL: "https://olx-app-c9a82.firebaseio.com",
    projectId: "olx-app-c9a82",
    storageBucket: "olx-app-c9a82.appspot.com",
    messagingSenderId: "408326779947",
    appId: "1:408326779947:web:41e180d906aa78aac8e66e",
    measurementId: "G-85VBWFDR6C"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase