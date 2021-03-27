import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import GenderForm from './genderForm';
import {db} from '../../config/global.js'
import * as firebase from 'firebase';

export default class Gender extends Component {
    constructor(props){
        super(props)
        this.state = ({
            gender:''
        })
    }

    recordGender = (gender) => {
        db.collection(user.email).doc("userInfo").set({
            genderID: gender},
            { merge: true });
        this.props.navigation.navigate('Age');
    }

    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <View style = {styles.textFormContainer}>
                        <TextInput
                        placeholder = "Gender (i.e. Male, Female, Trans, Other, etc.)"
                        returnKeyType = "next"
                        onChangeText={(gender)=>this.setState({gender})}
                        //ref={(input) => this.preferredGenderInput = input}
                        style = {styles.input}
                        autoCapitalize = "words"
                        autoCorrect = {false}
                        />
                        <TextInput
                        placeholder = "Pronoun (i.e. He/Him/His, She/Her/Hers, They/Them/Their)"
                        returnKeyType = "go"
                        //onChangeText={(gender)=>this.setState({gender})}
                        //ref={(input) => this.preferredGenderInput = input}
                        style = {styles.input}
                        autoCapitalize = "words"
                        autoCorrect = {false}
                />
                    </View>

                    <View style={{ borderRadius:  20 ,width:  200, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                        <Button //touchable opacity styling?
                        style = {styles.buttonContainer}
                        title = "Next"
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
        backgroundColor: '#C3FDCB',
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
     textFormContainer: {
             padding: 20,
     },

     input: {
         height: 40,
         backgroundColor: 'white',
         marginBottom: 20,
         color: '#000000',
         paddingHorizontal: 10
     },
});