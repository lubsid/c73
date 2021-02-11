import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCIYr0Wxa5EFMMOLLGejNojZJf8ZnUtzJQ",
  authDomain: "wily-app-9abc5.firebaseapp.com",
  projectId: "wily-app-9abc5",
  storageBucket: "wily-app-9abc5.appspot.com",
  messagingSenderId: "3240186669",
  appId: "1:3240186669:web:a7073a95bfb29e109579a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
