import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import UserCityForm from './usercityForm';
import '../../config/global.js'

export default class UserCity extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <UserCityForm/>
                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                    <Button
                    style = {styles.buttonContainer}
                    title = "Finish"
                    color = "#3C6435"
                    onPress={() => this.props.navigation.navigate('Home')}
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