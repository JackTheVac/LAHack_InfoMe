import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button} from 'react-native';
import GenderForm from './genderForm';
import '../../config/global.js'

export default class Gender extends Component {
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
        });
        this.props.navigation.navigate('Age');
    }

    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <GenderForm />
                    <View style={{ borderRadius:  20 ,width:  200, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                    <Button //touchable opacity styling?
                    style = {styles.buttonContainer}
                    title = "Confirm and Proceed"
                    color = "#3C6435"
                    onPress={()=> this.recordGender(this.state.gender)}
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
        justifyContent: 'center'
    },

    logoContainer : {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    title : {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.5,
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
});