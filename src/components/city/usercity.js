import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TextInput} from 'react-native';
import UserCityForm from './usercityForm';
import {db} from '../../config/global.js'
import '../../config/global.js'

export default class UserCity extends Component {
    constructor(props){
        super(props)
        this.state = ({
            city:''
        })
    }

    recordCity = (city) => {
        db.doc(user.email).set({
            cityID: city},
            { merge: true });
        this.props.navigation.navigate('Home');
    }

    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.formContainer}>
                    <View style = {styles.formContainer}>
                        <TextInput
                        placeholder = "Enter your home city"
                        returnKeyType = "next"
                        style = {styles.input}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        onChangeText={(city)=>this.setState({city})}

                        />
                    </View>

                    <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                        <Button
                        style = {styles.buttonContainer}
                        title = "Finish"
                        color = "#3C6435"
                        onPress={()=> this.recordCity(this.state.city)}
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
    
    },
    buttonContainer: {
        backgroundColor: "#3C6435",
        paddingVertical: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10
    },
    formContainer: {
        padding: 20,
    },
});