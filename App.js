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
import questoes from './components/questoes.js';
import questao2 from './components/questao2.js';
import questao3 from './components/questao3.js';
import questao4 from './components/questao4.js';
import questao5 from './components/questao5.js';
import questao6 from './components/questao6.js';
import questao7 from './components/questao7.js';
import questao8 from './components/questao8.js';
import questao9 from './components/questao9.js';
import questao10 from './components/questao10.js';
import questao11 from './components/questao11.js';
import questao12 from './components/questao12.js';
import questao13 from './components/questao13.js';
import resultados from './components/resultados.js';
import menu from './components/menu.js';


type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title:'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('./img/bg_principal.png')}
                    style={[styles.container,{width:"100%", height:"100%"}]}>
      
      <TouchableOpacity style={styles.button} onPress={()=> navigate('menu')}>
                <Text style={styles.texto}>
                  Iniciar
                </Text>
      </TouchableOpacity>  

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"flex-end",
    },
    button:{
      marginBottom:"10%",
      paddingTop:"2%", 
      paddingBottom:"2%",
      paddingRight:"5%",
      paddingLeft:"5%",
      width:"35%",
      backgroundColor:"white",
      borderWidth:4,
      borderStyle:"solid",
      borderColor:"purple",
      borderRadius:40,
    },
    texto:{
      textAlign:"center",
      fontSize:20,
      color:"purple",
    }
    
});

const tela = StackNavigator({
    Home: {screen: App},
    questoes: {screen: questoes},
    questao2: {screen: questao2},
    questao3: {screen: questao3},
    questao4: {screen: questao4},
    questao5: {screen: questao5},
    questao6: {screen: questao6},
    questao7: {screen: questao7},
    questao8: {screen: questao8},
    questao9: {screen: questao9},
    questao10: {screen: questao10},
    questao11: {screen: questao11},
    questao12: {screen: questao12},
    questao13: {screen: questao13},
    resultados: {screen: resultados},
    menu: {screen: menu},
})

AppRegistry.registerComponent('ProjetoPI', () => tela);