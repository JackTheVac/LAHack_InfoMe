import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import RegAddressForm from './regAddressForm';
import '../../config/global.js'

export default class RegAddress extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <RegAddressForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7CC480',
    },
});