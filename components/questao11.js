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
import questao12 from './questao12';


type Props = {};
export default class questao11 extends Component<Props> {
  static navigationOptions = {
    title:'questao11',
  }
    constructor(props){
    super(props)
    this.state = {numero11:this.props.navigation.state.params.numero10}
}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>
      <View style={styles.pergunta}>
        <Text style={styles.texto}>
          Qual desses objetos é usado para observar o espaço sideral?
        </Text>
    
      </View>
      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao12', {numero11:this.state.numero11 + 0})}>
                <Image  style={styles.imagem} source={require('../img/atividade11/binoculos.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao12', {numero11:this.state.numero11 + 1})}>
                <Image style={styles.imagem} source={require('../img/atividade11/telescopio.jpg')} />
          </TouchableOpacity>
      </View>

      <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao12', {numero11:this.state.numero11 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade11/lupa.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao12', {numero11:this.state.numero11 + 0})}>
                <Image style={styles.imagem} source={require('../img/atividade11/microscopio.png')} />
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