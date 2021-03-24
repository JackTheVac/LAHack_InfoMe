import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import RegisterForm from './registerForm';
import '../../config/global.js'

export default class Register extends Component {
    render(){
        return (
        <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
            <View style = {styles.logoContainer}>
                <Image source = { require('../../../assets/InfoMeLogo.png') }/>
                <Text style = {styles.title}>Spread Awareness</Text>
            </View>

            <View style = {styles.formContainer}>
                <RegisterForm />
            </View>
        </KeyboardAvoidingView>
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