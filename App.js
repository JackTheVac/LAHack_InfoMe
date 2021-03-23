import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/login/login'
import Register from './src/components/register/register'
import Name from './src/components/name/name'
import Gender from './src/components/gender/gender'
import Age from './src/components/age/age'

export default function App() {
  return (
    
      <Login/>
      //<Register />
      //<Name/>
      //<Gender/>
      //<Age/>




      
    
   
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
