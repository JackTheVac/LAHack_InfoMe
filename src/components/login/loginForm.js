import React, { Component } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Button} from 'react-native';

export default class LoginForm extends Component {

    constructor(props){
        super(props)

        this.state = ({

            email: '',
            password: ''
        })
    }

    //signUpUser = (email,password) =>{

    //    try{

    //        if(this.state.password.length < 6){
    //    alert("Please enter atleast 6 characters")
    //    return;
    //    firebase.auth().createUserWithEmailAndPassword(email, password)
    //}
    //    }
    //    catch(error){
    //        console.log(error.toString())
    //     }

    // }

    loginUser = (email,password) =>{

        try{

            firebase.auth.signInWithEmailAndPassword(email,password).then(function(user){
                console.log(user)

            })
        }
        catch(error){
            console.log(error.toString())
        }

    }
    render() {
        return (
          
            <View style = {styles.container}>

                
                <TextInput 
                    placeholder = "Username or email"
                    returnKeyType = "next"
                    onSubmitEditing = { () => this.passwordInput.focus()}
                    keyboardType = "email-address"
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    onChangeText={(email) => this.setState({email})}
                    />
                <TextInput
                    placeholder = "Password"
                    secureTextEntry
                    returnKeyType = "go"
                    ref={(input) => this.passwordInput = input}
                    style = {styles.input}
                    onChangeText={(password) => this.setState({password})}
                    />
                
                
           
            <View style = {styles.buttonContainer}>
            <Button
                
                title = "Login"
                
                color = "#3C6435"
                
                onPress={()=> this.loginUser(this.state.email,this.state.password)}

            />
            </View>
            
            
            
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '60%',
        padding: 20,
        flex: 1,
        
        
    },

    input: {
        height: 40,
        backgroundColor: '#C5E3C6',
        marginBottom: 20,
        color: '#000000',
        paddingHorizontal: 10

    },
    buttonContainer: {
        
        
    justifyContent: 'flex-end'
        
        
    },

    buttonText:{
        textAlign: 'center',
        color : '#000000',
        fontWeight: '600',
    }

});
