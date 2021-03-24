import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity, Touchable} from 'react-native';
import NameForm from './nameForm';
import '../../config/global.js'

export default class Name extends Component {
   render(){
       return (
        
       <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
           <View style = {styles.formContainer}>
            <NameForm />
            <Button
                //style = {styles.buttonContainer}
                title = "Next"
                color = "#3C6435"
                onPress={() => this.props.navigation.navigate('Gender')}
            />
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
    //flex: 1,
    //justifyContent: 'flex-end',
    //marginBottom: 36
},

});