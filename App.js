import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/login/login'
import Register from './src/components/register/register'
import RegAddress from './src/components/regAddress/regAddress'
import Name from './src/components/name/name'

export default function App() {
  return (
    
      //<Register/>
      //<Login />

      //<RegAddress/>

    <Name/>
      
    
   
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
