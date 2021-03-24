import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import OccupationForm from './occupationForm';
import '../../config/global.js'

export default class Occupation extends Component {
    render(){
        return (
             <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <OccupationForm/>
                </View>


             </KeyboardAvoidingView>

        
        );
    }
 }

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#C3FDCB',
    },
 
   
 
 });