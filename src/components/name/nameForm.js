import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
//import { dimensions }

export default class NameForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    placeholder = "Full Name"
                    returnKeyType = "next"
                    ref={(input) => this.fullNameInput = input}
                    onSubmitEditing = { () => this.preferredNameInput.focus()}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <TextInput
                    placeholder = "Preferred Name"
                    returnKeyType = "go"
                    ref={(input) => this.preferredNameInput = input}
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
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }
});