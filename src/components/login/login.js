import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {
   render(){
       return (
       <View style = {styles.container}>
           <View style = {styles.logoContainer}>
               <Image source = { require('../../../assets/InfoMeLogo.png') }/>
                <Text style = {styles.title}>Spread Awareness</Text>
           </View>
           <View style = {styles.formContainer}>
            <LoginForm />
           </View>

       </View>
       );
   }
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#7CC480',
   },

   logoContainer : {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
   },
   title : {
      color: '#fff',
      marginTop: 10,
      textAlign: 'center',
      opacity: 0.5,

   }



});