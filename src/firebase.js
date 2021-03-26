import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxZ0E74-WND2kD0oPnbfftcQFfn6_Q4kY",
  authDomain: "clone-5f739.firebaseapp.com",
  projectId: "clone-5f739",
  storageBucket: "clone-5f739.appspot.com",
  messagingSenderId: "843423887278",
  appId: "1:843423887278:web:9659b418ae5f4e4543e23f",
  measurementId: "G-2TZF5EQFZS",
});

const auth = firebase.auth();

export { auth };
