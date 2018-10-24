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
  Image,
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import questoes from './questoes.js';


type Props = {};
export default class menu extends Component<Props> {
  static navigationOptions = {
    title:'menu',
  };


    constructor(props){
    super(props)
}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_menu.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>

      <View style={styles.opcoes}>
          <TouchableOpacity style={[styles.button,{marginTop:"40%"}]}>
              <Text style={styles.texto}>
                  4 e 5 anos
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> navigate('questoes')}>
               <Text style={styles.texto}>
                  6 e 7 anos
              </Text> 
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.button}>
              <Text style={styles.texto}>
                  8 e 9 anos
              </Text>          
          </TouchableOpacity>
      </View>
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    texto: {
      fontSize: 30,
      textAlign: "center",
      color:'purple',
    },
    opcoes: {
      marginLeft: "10%",
      marginRight: "10%",
      flex: 1,
      flexDirection: "column",
    },
    button: {
      marginBottom: "10%",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius: 30,
      marginRight: "10%",
      marginLeft: "10%",
      borderWidth:4,
      borderColor:"purple",
      paddingTop:"1%",
      paddingBottom:"1%",
    },
    
});