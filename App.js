import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export default function App() {
  return (
    
      <Register/>
      //<Login />

      //<RegAddress/>

      //<Name/>
      //<Occupation/>
      
      //<AddInfo/>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
