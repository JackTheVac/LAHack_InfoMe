import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import AddInfoForm from './addInfoForm';

export default class AddInfo extends Component {
    render(){
        return (
             <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <AddInfoForm/>
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