import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACVDG40BrSBFW6mHghizK_rUlDa186qxU",
    authDomain: "inventory-management-3847a.firebaseapp.com",
    databaseURL: "https://inventory-management-3847a.firebaseio.com",
    projectId: "inventory-management-3847a",
    storageBucket: "inventory-management-3847a.appspot.com",
    messagingSenderId: "979036688621",
    appId: "1:979036688621:web:5f8fb7c7805fb9cc387ce4",
    measurementId: "G-62G5P7ZCKB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;