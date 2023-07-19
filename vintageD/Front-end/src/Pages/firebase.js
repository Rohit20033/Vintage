
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0WpoY0ZZRELEdNENoe4PSxVpzcIPEZfU",
  authDomain: "vintage-a9acc.firebaseapp.com",
  projectId: "vintage-a9acc",
  storageBucket: "vintage-a9acc.appspot.com",
  messagingSenderId: "470658234897",
  appId: "1:470658234897:web:ac7c7f1219319ccc620fb0",
  measurementId: "G-41MVBLC88Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;