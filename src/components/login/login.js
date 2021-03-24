import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import LoginForm from './loginForm';
import '../../config/global.js'
import * as firebase from 'firebase';

const BGCforAPP = '#C3FDCB'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = ({
            email: '',
            password: ''
        })
    }

    loginUser = (email,password) =>{
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
                console.log(user)
            })
        }
        catch(error){
            console.log(error.toString())
        }
    }
   render(){
       return (
       <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
            <View style = {styles.logoContainer}>
               <Image source = { require('../../../assets/InfoMeLogo.png') }/>
               <Text style = {styles.title}>Spread Awareness</Text>
            </View>
            <View style = {styles.formContainer}>
            <View style = {styles.entryFormContainer}>
                <TextInput
                placeholder = "Username or email"
                returnKeyType = "next"
                onSubmitEditing = { () => this.passwordInput.focus()}
                keyboardType = "email-address"
                style = {styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                onChangeText={(email) => this.setState({email})}
                />

                <TextInput
                placeholder = "Password"
                secureTextEntry
                returnKeyType = "go"
                ref={(input) => this.passwordInput = input}
                style = {styles.input}
                onChangeText={(password) => this.setState({password})}
                />

                <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                    <Button
                    //style = {styles.buttonContainer}
                    title = "LOGIN"
                    color = "#3C6435"
                    onPress={()=> this.loginUser(this.state.email,this.state.password)}
                    />
                </View>
            </View>
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

   },
    entryFormContainer: {
        //marginBottom: '60%',
        padding: 20,
        //flex: 1,


    },

    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10

    },

    buttonContainer: {
        backgroundColor: "#3C6435",
        paddingVertical: 15,
        // paddingHorizontal: 15,
        // paddingBottom: 15,
        // marginBottom: 15,
        // marginTop: 15,
        // justifyContent: 'space-evenly'

    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }
});