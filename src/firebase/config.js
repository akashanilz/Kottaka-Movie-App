import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCqsrMvniyMEcMClv0ZU1w6lFpFY8T3KmU",
    authDomain: "kottaka-28b2f.firebaseapp.com",
    projectId: "kottaka-28b2f",
    storageBucket: "kottaka-28b2f.appspot.com",
    messagingSenderId: "83877317348",
    appId: "1:83877317348:web:1ed6b889b846008153faf1",
    measurementId: "G-M5FSXE69JG"
  };
  export default firebase.initializeApp(firebaseConfig)