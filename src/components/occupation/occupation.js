import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import OccupationForm from './occupationForm';
import '../../config/global.js'
import * as firebase from 'firebase';

export default class Occupation extends Component {
    constructor(props){
        super(props)
        this.state = ({
            occupation:'',
            school:''
        })
    }
    recordOccupation = (occupation, school) => {
        firebase.firestore().collection(user.email).doc("userInfo").set({
            occupationID: occupation,
            schoolID: school},
            { merge: true });
        this.props.navigation.navigate('Age');
    }
    render(){
        return (
             <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <View style = {styles.formContainer}>
                        <TextInput
                            placeholder = "Enter Occupation/Job"
                            returnKeyType = "next"
                            style = {styles.input}
                            onChangeText={(occupation)=>this.setState({occupation})}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                        />

                        <TextInput
                            placeholder = "School (If Applicable)"
                            returnKeyType = "next"
                            style = {styles.input}
                            onChangeText={(school)=>this.setState({school})}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                        />

                        <TouchableOpacity
                        style = {styles.buttonContainer}
                        onPress={() => this.recordOccupation(this.state.occupation, this.state.school)}>
                            <Text style = {styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
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

    formContainer: {
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
    },

    buttonText:{
        textAlign: 'center',
        color : '#FFFFFF',
        fontWeight: '600',
    }
});