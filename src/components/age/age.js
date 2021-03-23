import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import AgeForm from './ageForm';

export default class Age extends Component {
   render(){
       return (
        
       <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
           <View style = {styles.formContainer}>
            <AgeForm />
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