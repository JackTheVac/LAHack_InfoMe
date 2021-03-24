import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import RegAddressForm from './regAddressForm';
import '../../config/global.js'

export default class RegAddress extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <RegAddressForm/>
                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                    <Button
                    style = {styles.buttonContainer}
                    title = "Next"
                    color = "#3C6435"
                    onPress={() => this.props.navigation.navigate('Occupation')}
                />
                </View>
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
    buttonContainer: {
        backgroundColor: "#3C6435",
        paddingVertical: 15,
    },
});