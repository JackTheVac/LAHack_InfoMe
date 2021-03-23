import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
import * as firebase from 'firebase';

export default class RegisterForm extends Component {

    constructor(props){
            super(props)
            this.state = ({
                email:'',
                password:'',
                confirmpassword:''
                })
        }

    registerAcc = (email, password, confirmpassword) =>{
        try{
            if (this.state.password == this.state.confirmpassword){
                firebase.auth().createUserWithEmailAndPassword(email, password)
            }
            else{
                console.log('confirm same password entered')
            }
            }
        catch(error){
            console.log(error.toString())
            }
    }


    render() {
        return (
          
            <View style = {styles.container}>
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
                    //onSubmitEditing = { () => this.setState({confirmpassword})}
                    //ref={(input) => this.setState({confirmpassword})}
                    onChangeText={(confirmpassword)=>this.setState({confirmpassword})}
                    style = {styles.input}
                    />

            <Button //touchable opacity styling?
                    style = {styles.buttonContainer}
                    title = "REGISTER"
                    color = "#3C6435"
                    onPress={()=> this.registerAcc(this.state.email, this.state.password, this.state.confirmpassword)} >
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </Button>
            
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10

    },
    buttonContainer: {
        backgroundColor: '#3C6435',
        paddingVertical: 15,
    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }

});