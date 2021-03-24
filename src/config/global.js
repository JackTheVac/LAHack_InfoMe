import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWFzFXweu4VL9uImTO-OQQTtoVvPfg9rA",
    authDomain: "infome-31dd7.firebaseapp.com",
    databaseURL: "https://infome-31dd7-default-rtdb.firebaseio.com",
    projectId: "infome-31dd7",
    storageBucket: "infome-31dd7.appspot.com",
    messagingSenderId: "266415670678",
    appId: "1:266415670678:web:7f3410360a27f232b249b7",
    measurementId: "G-TYLD1V2QHR"
};

firebase.initializeApp(firebaseConfig);

const userdata = firebase.firestore();

global.userdata = userdata;

global.user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    global.user = firebase.auth().currentUser;
  }
});