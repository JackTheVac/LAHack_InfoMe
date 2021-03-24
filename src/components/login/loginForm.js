import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
import * as firebase from 'firebase';
import AppTemp from '../../../App'

export default class LoginForm extends Component {

    constructor(props){
        super(props)

        this.state = ({

            email: '',
            password: ''
        })
    }

    //signUpUser = (email,password) =>{

    //    try{

    //        if(this.state.password.length < 6){
    //    alert("Please enter atleast 6 characters")
    //    return;
    //    firebase.auth().createUserWithEmailAndPassword(email, password)
    //}
    //    }
    //    catch(error){
    //        console.log(error.toString())
    //     }

    // }

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
    render() {
        return (
            
            <View style = {styles.container}>

                
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

                
           
            <Button
                style = {styles.buttonContainer}
                title = "LOGIN"
                color = "#3C6435"
                onPress={()=> this.loginUser(this.state.email,this.state.password)}
            />
            
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginBottom: '60%',
        padding: 20,
        //flex: 1,


    },

    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
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
