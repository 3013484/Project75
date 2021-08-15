import firebase from 'firebase'
require("@firebase/firestore")


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD1G5b4el3WZlNaD2S98BXqrpdg6AKn0OU",
  authDomain: "project71-a8fbf.firebaseapp.com",
  projectId: "project71-a8fbf",
  storageBucket: "project71-a8fbf.appspot.com",
  messagingSenderId: "588853585465",
  appId: "1:588853585465:web:e496d85240067659980fe8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
