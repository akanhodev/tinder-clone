import * as firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUeAqo5hr1HYmxXO_XSbjlg8AXHz_7rdo",
    authDomain: "tinder-clone-7dca0.firebaseapp.com",
    projectId: "tinder-clone-7dca0",
    storageBucket: "tinder-clone-7dca0.appspot.com",
    messagingSenderId: "903188434847",
    appId: "1:903188434847:web:16b8f3bac30c337850f7aa",
    measurementId: "G-XVC0WT1596"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const database = firebaseApp.firestore() ;
  export default  database ;
