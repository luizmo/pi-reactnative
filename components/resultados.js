/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';


type Props = {};
export default class resultados extends Component<Props> {
  static navigationOptions = {
    title:'resultados',
  }
    constructor(props){
    super(props)
    this.state = {numero14:this.props.navigation.state.params.numero13}
}   
  render() {

    return (
      <ImageBackground source={require('../img/bg_secu.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>
      <View style={styles.pergunta}>
        <Text style={styles.texto}>
            Numero de acertos:
        </Text>
        <Text style={styles.texto}>
            {this.state.numero14}
        </Text>
       
      </View>
      
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    pergunta: {
      marginBottom: "10%",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius: 16,
      marginTop: "14%",
      marginRight: "8%",
      marginLeft: "8%",
      borderWidth:4,
      borderStyle:"solid",
      borderColor:"purple",
      borderRadius:40,
      paddingTop: "7%",
      paddingBottom: "7%",
      paddingLeft: "7%",
      paddingRight: "7%",
    },
    texto: {
      fontSize: 40,
      textAlign: "center",
      color:"purple",
    },
    icones: {
      width: "48%",
      height: "65%",
    },
    
});
