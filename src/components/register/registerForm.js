import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
import * as firebase from 'firebase';

export default class RegisterForm extends Component {
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
                firebase.auth().createUserWithEmailAndPassword(email, password)
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