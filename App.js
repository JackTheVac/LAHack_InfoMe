import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {init, db} from "./src/config/global";


import Login from './src/components/login/login'
import loginForm from './src/components/login/loginForm'
import Register from './src/components/register/register'
//import UserCityForm from './src/components/register/registerForm'
import UserCity from './src/components/city/usercity'
import Name from './src/components/name/name'
import Occupation from './src/components/occupation/occupation'
import AddInfo from './src/components/addInfo/addInfo'
import Gender from './src/components/gender/gender'
import Age from './src/components/age/age'
import Home from './src/components/home/home'
import { render } from 'react-dom';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'


const AppColor = "#C1CBFC";


const AppStackNavigator = createStackNavigator(
{
  Login: {screen: Login, navigationOptions: {}},
  Register: {screen: Register, navigationOptions: {}},
  Name: {screen: Name, navigationOptions: {headerLeft: () => null}},
  Gender: {screen: Gender, navigationOptions: {}},
  Age: {screen: Age, navigationOptions: {headerLeft: () => null}},
  City: {screen: UserCity, navigationOptions: {}},
  Occupation: {screen: Occupation, navigationOptions: {}},
  Home: {screen: Home, navigationOptions: {headerLeft: () => null}}

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
    // console.log("hello", "edawdwa");

    init();

    console.log(db);
/*
    db.doc('47@time.com').get().then(doc => {
      console.log(doc.data().nameID);
     })

*/
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
