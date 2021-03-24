import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import RegisterForm from './registerForm';
import '../../config/global.js'
import * as firebase from 'firebase';

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = ({
            email:'',
            password:'',
            confirmPass:''
        })
    }

    registerAcc = (email, password, confirmPass) =>{
        try{
            if (this.state.password == this.state.confirmPass && this.state.password.length >= 6){
                firebase.auth().createUserWithEmailAndPassword(email, password);
                this.props.navigation.navigate('Name');
            }
            else if(this.state.password.length <= 6){
                alert("Please enter at least 6 characters")
                console.log('Please enter at least 6 characters')
            }
            else if(this.state.password != this.state.confirmPass) {
                alert("Ensure both passwords entered match!")
                console.log('Ensure both passwords entered match!')
            }
        }
        catch(exception){
            console.log(exception.toString())
            alert(exception.toString())
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
            <TextInput 
                    placeholder = "Email"
                    returnKeyType = "next"
                    //onSubmitEditing = { () => this.setState({email})}
                    onChangeText={(email)=>this.setState({email})}
                    keyboardType = "email-address"
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <TextInput
                    placeholder = "Password"
                    returnKeyType = "next"
                    // onSubmitEditing = { () => this.setState({password})}
                    onChangeText={(password)=>this.setState({password})}
                    secureTextEntry
                    //ref={(input) => this.passwordInput = input}
                    style = {styles.input}
                />

                <TextInput
                    placeholder = "Confirm Password"
                    secureTextEntry
                    returnKeyType = "go"
                    //onSubmitEditing = { () => this.setState({confirmPass})}
                    //ref={(input) => this.setState({confirmPass})}
                    onChangeText={(confirmPass)=>this.setState({confirmPass})}
                    style = {styles.input}
                />
                
                <Button //touchable opacity styling?
                    style = {styles.buttonContainer}
                    title = "REGISTER"
                    color = "#3C6435"
                    onPress={()=> this.registerAcc(this.state.email, this.state.password, this.state.confirmPass)} >
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </Button>
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
   },
   input: {
    height: 40,
    backgroundColor: '#C5E3C6',
    marginBottom: 20,
    color: '#000000',
    paddingHorizontal: 10
   },
   
});