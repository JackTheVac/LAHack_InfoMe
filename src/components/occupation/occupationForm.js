import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';


export default class OccupationForm extends Component {
    render() {
        return (
            <View style = {styles.formContainer}>
                <TextInput 
                    placeholder = "Enter Occupation/Job"
                    returnKeyType = "next"
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <TextInput 
                    placeholder = "School (If Applicable)"
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
        backgroundColor: 'white',
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