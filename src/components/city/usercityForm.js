import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';


export default class UserCityForm extends Component {
    render() {
        return (
            <View style = {styles.formContainer}>
                <TextInput 
                    placeholder = "Enter your home city"
                    returnKeyType = "next"
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                {/* <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>NEXT</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    formContainer: {
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