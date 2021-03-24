import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
//import { dimensions }

export default class NameForm extends Component {
    render() {
        return (
            <View style = {styles.nameFormContainer}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nameFormContainer: {
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
});