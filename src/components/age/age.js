import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import AgeForm from './ageForm';
import {db} from '../../config/global.js'
import * as firebase from 'firebase';

export default class Age extends Component {
    constructor(props){
        super(props)
        this.state = ({
            age:''
        })
    }
    recordAge = (age) => {
        db.doc(user.email).set({
            ageID: age},
            { merge: true });
        
        this.props.navigation.navigate('Occupation');
        console.log("HERE!")
        
    }
    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <View style = {styles.ageFormContainer}>
                        <TextInput
                            placeholder = "Age"
                            returnKeyType = "go"
                            //ref={(input) => this.preferredGenderInput = input}
                            onChangeText={(age)=>this.setState({age})}
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                        <Button
                            //style = {styles.buttonContainer}
                            title = "Next"
                            color = "#3C6435"
                            onPress={() => this.recordAge(this.state.age)}
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

    ageFormContainer: {
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