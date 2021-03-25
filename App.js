import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {init, db} from "./src/config/global";


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


const AppColor = "#C1CBFC";


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
  initialRouteName: 'Login',

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: AppColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  },

 
},


);

const TempApp = createAppContainer(AppStackNavigator);

export default class App extends Component {
  componentDidMount(){
    console.log("hello", "edawdwa");

    init();

    console.log(db);

    db.collection('47@time.com').doc('userInfo').get().then(doc => {
      console.log(doc.data().nameID);
     })


  }




  render() {
    return (

      <TempApp/>
     
   
    );
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
