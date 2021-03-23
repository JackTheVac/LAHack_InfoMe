import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';


export default class AddInfoForm extends Component {
    render() {
        return (
         
            <View>
                <View style = {styles.container}>
                    <TextInput 
                        placeholder = "Enter any additional info you would like to add"
                        returnKeyType = "next"
                        style = {styles.input}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Finish</Text>
                    </TouchableOpacity>


                </View>
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
        width:'100%',
        height:40,
        //backgroundColor:'red', 
        alignItems:'center',
        justifyContent:'center'
       
    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }

});