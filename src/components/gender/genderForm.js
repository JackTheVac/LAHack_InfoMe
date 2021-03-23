import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
//import { dimensions }

export default class GenderForm extends Component {
    render() {
        return (
          
            <View style = {styles.container}>
                <TextInput
                    placeholder = "Gender (i.e. Male, Female, Trans, Other, etc.)"
                    returnKeyType = "go"
                    ref={(input) => this.preferredGenderInput = input}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

            <TouchableOpacity style = {styles.buttonContainer}>
                <Text style = {styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            
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
        // position: 'absolute',
        // margin: 16,
        // right: 10,
        // bottom: 10,
        // //left: 0,
        // //marginTop: '170%',
        paddingVertical: 15
        // //marginBottom: '10%'
        


    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }

});