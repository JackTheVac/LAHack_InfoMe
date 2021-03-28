import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity, Touchable, TextInput} from 'react-native';
import NameForm from './nameForm';
import {db} from '../../config/global.js'

export default class Name extends Component {
    constructor(props){
        super(props)
        this.state = ({
            name:'',
            nickname:''
        })
    }

    recordName = (recname, recnickname) => {
        db.doc(user.email).set({
            nameID: recname,
            nicknameID: recnickname},
            { merge: true });
        this.props.navigation.navigate('Gender');
    }

   render(){
       return (
       <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
           <View style = {styles.formContainer}>
                <View style = {styles.nameFormContainer}>
                    <TextInput
                        placeholder = "Full Name"
                        returnKeyType = "next"
                        //ref={(input) => this.fullNameInput = input}
                        //onSubmitEditing = { () => this.preferredNameInput.focus()}
                        onChangeText={(name)=>this.setState({name})}
                        style = {styles.input}
                        autoCapitalize = "words"
                        autoCorrect = {false}
                    />

                    <TextInput
                        placeholder = "Preferred Name"
                        returnKeyType = "go"
                        ref={(input) => this.preferredNameInput = input}
                        onChangeText={(nickname)=>this.setState({nickname})}
                        style = {styles.input}
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                </View>

                <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
                <Button
                    style = {styles.buttonContainer}

                    title = "Next"
                    color = "#3C6435"
                    onPress={() => this.recordName(this.state.name, this.state.nickname)}
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
       backgroundColor: '#BCF4F5',
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
    paddingVertical: 30,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
    },

    nameFormContainer: {
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