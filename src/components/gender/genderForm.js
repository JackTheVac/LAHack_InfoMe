import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
//import { dimensions }
import * as firebase from 'firebase';

const userdata = firebase.firestore();
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
        userdata.collection("bk51SvrRN7eFslolmPi0Ck5IlCy1").doc("userInfo").set({
            genderID: gender
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                    placeholder = "Gender (i.e. Male, Female, Trans, Other, etc.)"
                    returnKeyType = "go"
                    onChangeText={(gender)=>this.setState({gender})}
                    //ref={(input) => this.preferredGenderInput = input}
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <Button //touchable opacity styling?
                    style = {styles.buttonContainer}
                    title = "Confirm and Proceed"
                    color = "#3C6435"
                    onPress={()=> this.recordGender(this.state.gender)}
                />
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