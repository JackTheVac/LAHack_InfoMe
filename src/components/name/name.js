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
            <View style={{ borderRadius:  20 ,width:  120, height:  50, alignSelf: 'center'  , marginBottom:  20, backgroundColor:  'white' , borderWidth:  2, justifyContent:  'center', textAlign:  'center', margin:  10}}>
            <Button
                style = {styles.buttonContainer}
               
                title = "Next"
                color = "#3C6435"
                onPress={() => this.props.navigation.navigate('Gender')}
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

});