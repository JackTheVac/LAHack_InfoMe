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
        occupation:'',
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
            occupation: doc.data().occupationID,
            city: doc.data().cityID
            }})
        })
    }
       // console.log(this.state.userEmail.name)


render(){
    return(

        
        <View style = {styles.boxContainer}>
            <View>
                <Text style = {styles.text}>
                    Name: {this.state.userEmail.name}{"\n"}Gender: {this.state.userEmail.gender} {"\n"}Age: {this.state.userEmail.age}{"\n"}Occupation: {this.state.userEmail.occupation}{"\n"}City:{this.state.userEmail.city}
                    
                </Text>
            </View>



        </View>
        

        
        

    );
}
  


}


const styles = StyleSheet.create({
    boxContainer:{
        justifyContent: "center",
        height: 200,
        width: 350,
        backgroundColor: "#E2E6FC", 
        borderRadius:  20 ,
        alignSelf: 'center'  , 
        borderWidth:  2, 
        margin:  10,
    },

    text: {
        color: "#3E5AF5",
        //textAlign: "center",
        paddingBottom: 15,
        paddingLeft: 20,
        fontSize: 25,

    }






})

