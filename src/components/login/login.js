import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import LoginForm from './loginForm';
import '../../config/global.js'


//import firestore from './react-native-firebase/firestore';

// const users = await firestore
//   .collection('Users')
//   .get();
// const user = await firestore()
//   .collection('Users')
//   .doc('ABC')
//   .get();

const BGCforAPP = '#C3FDCB'

export default class Login extends Component {

   render(){
       return (
        
       <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
           <View style = {styles.logoContainer}>
               <Image source = { require('../../../assets/InfoMeLogo.png') }/>
                <Text style = {styles.title}>Spread Awareness</Text>
           </View>
           <View style = {styles.formContainer}>
            <LoginForm />
            <Button
                style = {styles.buttonContainer}
                title = "New to InfoMe? Register here."
                onPress={() => this.props.navigation.navigate('Register')}
            />
           </View>

       
       </KeyboardAvoidingView>
       );
   }
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: BGCforAPP,
   },

   logoContainer : {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
   },

   title : {
      color: 'red',
      marginTop: 10,
      textAlign: 'center',
      opacity: 0.5,

   }
});