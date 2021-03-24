import { styleSheets } from 'min-document';
import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, TouchableOpacity} from 'react-native';


export default class Home extends Component {
    state = {
        active: 0,
        xTabOne: 0, //x co-ordinate of tab one
        xTabTwo: 0, //x co-ordinate of tab two
    };
   render(){
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        marginBottom: 20,
                        height: 36
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#007aff",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabOne: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>
                            this.setState({ active: 0 })
                        }
                    >
                        <Text>
                            My Info
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#007aff",
                            borderRadius: 4,
                            borderLeftWidth: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                        }}
                        onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 })
                            }
                    >
                        <Text>
                            Neighbor Info
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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

   }
});