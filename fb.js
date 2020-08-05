import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAnhH2FQLAWyEkhrKKlSheISXTdAFtnf0Y",
    authDomain: "fir-f8c64.firebaseapp.com",
    databaseURL: "https://fir-f8c64.firebaseio.com",
    projectId: "fir-f8c64",
    storageBucket: "fir-f8c64.appspot.com",
    messagingSenderId: "809131140416",
    appId: "1:809131140416:web:d04323f1d6a1ac9d7dc6a5",
    measurementId: "G-BCP9DWP2HF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase