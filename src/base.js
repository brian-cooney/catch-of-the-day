import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoxlOnTXotLjUGO_gojLGAWBspr4DoN5w",
    authDomain: "catch-of-the-day-14355.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-14355.firebaseio.com",
    projectId: "catch-of-the-day-14355",
    storageBucket: "catch-of-the-day-14355.appspot.com",
    messagingSenderId: "753856632771"
  });

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
