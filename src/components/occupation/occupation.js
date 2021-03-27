import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import OccupationForm from './occupationForm';
import {db} from '../../config/global.js'
import '../../config/global.js'

export default class Occupation extends Component {
    constructor(props){
        super(props)
        this.state = ({
            occupation:'',
            school:''
        })
    }

    recordOccupation = (occupation, school) => {
        db.doc(user.email).set({
            occupationID: occupation,
            schoolID: school},
            { merge: true });
        this.props.navigation.navigate('City');
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
                        autoCapitalize = "none"
                        onChangeText={(occupation)=>this.setState({occupation})}
                        autoCorrect = {false}
                        />
                        <TextInput
                        placeholder = "School (If Applicable)"
                        returnKeyType = "next"
                        style = {styles.input}
                        autoCapitalize = "none"
                        onChangeText={(school)=>this.setState({school})}
                        autoCorrect = {false}
                        />
                    </View>

                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                        <Button
                        //style = {styles.buttonContainer}
                        title = "Next"
                        color = "#3C6435"
                        onPress={()=> this.recordOccupation(this.state.occupation, this.state.school)}
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
    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10

    },
    formContainer: {
        padding: 20,
    },
 });