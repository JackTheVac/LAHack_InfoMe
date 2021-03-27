import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity, Animated, Touchable, ScrollView, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');



export default class NPW extends Component {

render(){
    return(

        
        <View style = {styles.boxContainer}>
            <View>
                <Text style = {styles.text}>
                    Name: Jack{"\n"}Gender: Jack{"\n"}Age: 19{"\n"}Occupation: Student{"\n"}City: Chino Hills
                    
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

