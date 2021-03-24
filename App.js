import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './src/config/global.js'


import Login from './src/components/login/login'
import loginForm from './src/components/login/loginForm'
import Register from './src/components/register/register'
import RegisterForm from './src/components/register/registerForm'
import RegAddress from './src/components/regAddress/regAddress'
import Name from './src/components/name/name'
import Occupation from './src/components/occupation/occupation'
import AddInfo from './src/components/addInfo/addInfo'
import Gender from './src/components/gender/gender'
import Age from './src/components/age/age'
import { render } from 'react-dom';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'


// export default class App extends Component {
//   render() {
//     return (
//       <AppStackNavigator />
//     );
//   }
// }
const AppStackNavigator = createStackNavigator(
{
  Login: Login,
  Register: Register,
  Name: Name,
  Gender: Gender,
  Age: Age,
  Address: RegAddress,
  Occupation: Occupation,
},
{
  initialRouteName: 'Login'
}

);

const TempApp = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return <TempApp/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
