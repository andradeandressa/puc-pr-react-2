import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAcT6ZUsWnUjZafK-Gfctto67AWJhU4YhY",
  authDomain: "puc-pr-react-2.firebaseapp.com",
  projectId: "puc-pr-react-2",
  storageBucket: "puc-pr-react-2.appspot.com",
  messagingSenderId: "705992920338",
  appId: "1:705992920338:web:6be09fa0320def37fa77cb"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase;