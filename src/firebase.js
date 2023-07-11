// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBugaeD9bO54pXDXJ-lJpLU2ZByL0uxFYc",
    authDomain: "sweet-gifts-38bb4.firebaseapp.com",
    projectId: "sweet-gifts-38bb4",
    storageBucket: "sweet-gifts-38bb4.appspot.com",
    messagingSenderId: "96283669697",
    appId: "1:96283669697:web:6ce48c6e0fa70adfaad040",
    measurementId: "G-QVKJ0BRQEX"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// initialize your provider as type google
const provider = new firebase.auth.GoogleAuthProvider();
// set your provider so that it asks the user to select "which Google account?"
provider.setCustomParameters({prompt: 'select_account'});
// and now export these settings to work as Sign-In-With-Popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// finally, export the firebase object
export default firebase;

export const db = getFirestore(app);