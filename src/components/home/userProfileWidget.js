import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity, Animated, Touchable, ScrollView, Dimensions} from 'react-native';
import '../../config/global.js';
import {db} from '../../config/global.js';
const { width } = Dimensions.get('window');



export default class UPW extends Component {
   state = {userEmail:{
        name: '',
        gender:'',
        age:'',
        pronouns:'',
        city:''}
    }
   constructor(props) {
       super(props);
       db.doc(user.email).get().then(doc => {
           console.log(doc.data().nameID);
           this.setState({userEmail: {
           name: doc.data().nameID,
           gender: doc.data().genderID,
           age: doc.data().ageID,
           pronouns: doc.data().pronounsID,
           city: doc.data().cityID
           }})
       })
   }

   render(){
       return(
           <TouchableOpacity onPress={() => alert('Easter Egg!')} style = {styles.boxContainer}>
               <View >
                   <Text style = {styles.textLeft}>
                       Name: {this.state.userEmail.name}{"\n"}Gender: {this.state.userEmail.gender} {"\n"}Age: {this.state.userEmail.age}{"\n"}Pronouns: {this.state.userEmail.pronouns}{"\n"}City: {this.state.userEmail.city}
                   </Text>
               </View>
           </TouchableOpacity>
       );
   }
}


const styles = StyleSheet.create({
    boxContainer:{
        justifyContent: "center",
        height: 200,
        width: 325,
        backgroundColor: "#E2E6FC", 
        borderRadius:  20 ,
        alignSelf: 'center'  , 
        borderWidth:  2, 
        margin:  10,
    },

    textLeft: {
        
        color: "#3E5AF5",
        //textAlign: "center",
        paddingBottom: 15,
        paddingLeft: 20,
        fontSize: 25,

    },

    





})

