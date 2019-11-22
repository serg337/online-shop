import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHZIDwZjpNYEXGi-giGtnZSC-p-nvf1is",
  authDomain: "online-store-4692d.firebaseapp.com",
  databaseURL: "https://online-store-4692d.firebaseio.com",
  projectId: "online-store-4692d",
  storageBucket: "online-store-4692d.appspot.com",
  messagingSenderId: "1030921136909",
  appId: "1:1030921136909:web:cc25bf8a1ab9d247795e44",
  measurementId: "G-89RKNB6LV1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
