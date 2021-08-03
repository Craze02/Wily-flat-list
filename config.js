import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDmGGAERol-bgsq-1_szRQ2zru5ChFLScc",
    authDomain: "wily-app-f207c.firebaseapp.com",
    projectId: "wily-app-f207c",
    storageBucket: "wily-app-f207c.appspot.com",
    messagingSenderId: "620737607602",
    appId: "1:620737607602:web:518dd2961d80743c3e56ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();