import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity, Animated, Touchable, ScrollView, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');



export default class NPW extends Component {

    makeBoxes = () => {
        let npArray = [];
        

        npArray.push(

        <TouchableOpacity onPress={() => alert('Easter Egg!')} style = {styles.boxContainer}>
            <View>
                <Text style = {styles.text}>
                    Name: Jack{"\n"}Gender: Male{"\n"}Age: 19{"\n"}Pronouns: He/Him/His{"\n"}City: Chino Hills
                    
                </Text>
            </View>
        </TouchableOpacity>
        );

        npArray.push(

            <TouchableOpacity onPress={() => alert('Easter Egg!')} style = {styles.boxContainer}>
                <View>
                    <Text style = {styles.text}>
                        Name: Harchet{"\n"}Gender: Male{"\n"}Age: 18{"\n"}Pronouns: He/Him/His{"\n"}City: Chino Hills
                        
                    </Text>
                </View>
            </TouchableOpacity>
            );

            
            npArray.push(

                <TouchableOpacity onPress={() => alert('Easter Egg!')} style = {styles.boxContainer}>
                    <View>
                        <Text style = {styles.text}>
                            Name: Ricky{"\n"}Gender: Male{"\n"}Age: 19{"\n"}Pronouns: He/Him/His{"\n"}City: Chino Hills
                            
                        </Text>
                    </View>
                </TouchableOpacity>
                );
        
            npArray.push(

                    <TouchableOpacity onPress={() => alert('Easter Egg!')} style = {styles.boxContainer}>
                        <View>
                            <Text style = {styles.text}>
                                Name: Sun{"\n"}Gender: Male{"\n"}Age: 19{"\n"}Pronouns: He/Him/His{"\n"}City: Chino Hills
                                
                            </Text>
                        </View>
                    </TouchableOpacity>
                    );
            
        
        return npArray
    }

render(){
    return(
        
        <View>
            {this.makeBoxes()}
        </View>
        
        


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

    text: {
        color: "#3E5AF5",
        //textAlign: "center",
        paddingBottom: 15,
        paddingLeft: 20,
        fontSize: 25,

    }






})

