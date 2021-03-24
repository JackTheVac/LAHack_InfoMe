import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
//import { dimensions }

export default class AgeForm extends Component {
    render() {
        return (
            <View style = {styles.ageFormContainer}>
                <TextInput
                    placeholder = "Age"
                    returnKeyType = "go"
                    ref={(input) => this.preferredGenderInput = input}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    ageFormContainer: {
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
});