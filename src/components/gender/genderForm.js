import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
//import { dimensions }
import {db} from "../../config/global"



//consider not constant if publishing app for logging out function


export default class GenderForm extends Component {
    constructor(props){
        super(props)
        this.state = ({
            gender:''
        })
    }

    recordGender = (gender) => {
        //NOTE this adds to firebase data collection for thegamerguy321@gmail.com
        db.collection("bk51SvrRN7eFslolmPi0Ck5IlCy1").doc("userInfo").set({
            genderID: gender
        })
    }

    render() {
        return (
            <View style = {styles.textFormContainer}>
                <TextInput
                    placeholder = "Gender (i.e. Male, Female, Trans, Other, etc.)"
                    returnKeyType = "next"
                    onChangeText={(gender)=>this.setState({gender})}
                    //ref={(input) => this.preferredGenderInput = input}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
                <TextInput
                    placeholder = "Pronoun (i.e. He/Him/His, She/Her/Hers, They/Them/Their"
                    returnKeyType = "go"
                    //onChangeText={(gender)=>this.setState({gender})}
                    //ref={(input) => this.preferredGenderInput = input}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textFormContainer: {
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
});