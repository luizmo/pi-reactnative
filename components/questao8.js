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
import questao9 from './questao9.js';


type Props = {};
export default class questao8 extends Component<Props> {
  static navigationOptions = {
    title:'questao8',
  }
    constructor(props){
    super(props)
    this.state = {numero8:this.props.navigation.state.params.numero7}
}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>
      <View style={styles.pergunta}>
        <Text style={styles.texto}>
          Toque na resposta certa.
        </Text>
      <View>
         <Image source={require('../img/atividade8/p2.jpg')} />
      </View>
      </View>
      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao9', {numero8:this.state.numero8 + 0})}>
                <Image  style={styles.imagem} source={require('../img/atividade8/dd.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao9', {numero8:this.state.numero8 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade8/ee.jpg')} />
          </TouchableOpacity>
      </View>

      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao9', {numero8:this.state.numero8 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade8/ff.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao9', {numero8:this.state.numero8 + 1})}>
                <Image style={styles.imagem} source={require('../img/atividade8/gg.jpg')} />
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
    pergunta: {
      marginBottom: "5%",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius: 16,
      marginTop: "2%",
      marginRight: "8%",
      marginLeft: "8%",
      borderWidth:4,
      borderColor:"purple",
    },
    texto: {
      fontSize: 35,
      textAlign: "center",
      color:'purple',
    },
    icones: {
      width: "40%",
      height: "90%",
      borderStyle:"solid",
    },
    imagem: {
      width: "100%",
      height: "100%",
      borderRadius: 45,
      borderWidth:4,
      borderColor:"purple",
    },
    alternativas: {
      marginLeft: "10%",
      marginRight: "10%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    }
    
});