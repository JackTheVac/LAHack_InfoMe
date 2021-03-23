import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class RegisterForm extends Component {
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
                    />
                <TextInput
                    placeholder = "Password"
                    returnKeyType = "next"
                    onSubmitEditing = { () => this.comfirmPasswordInput.focus()}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    style = {styles.input}
                    />
                <TextInput
                    placeholder = "Confirm Password"
                    secureTextEntry
                    returnKeyType = "go"
                    ref={(input) => this.comfirmPasswordInput = input}
                    style = {styles.input}
                    />

            <TouchableOpacity style = {styles.buttonContainer}>
                <Text style = {styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
            
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
        backgroundColor: "#3C6435",
        paddingVertical: 15,
    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }

});