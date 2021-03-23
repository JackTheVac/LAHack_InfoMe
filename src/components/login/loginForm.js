import React, { Component } from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    placeholder = "Username or email"
                    style = {styles.input}
                    />
                <TextInput
                    placeholder = "Password"
                    style = {styles.input}
                    />
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

    }

});