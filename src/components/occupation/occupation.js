import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import OccupationForm from './occupationForm';
import '../../config/global.js'

export default class Occupation extends Component {
    render(){
        return (
             <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <OccupationForm/>
                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                    <Button
                    //style = {styles.buttonContainer}
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
        backgroundColor: '#C3FDCB',
    },
 
   
 
 });