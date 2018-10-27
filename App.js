import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { questoes, questao2, questao3, questao4, questao5, questao6, questao7,
  questao8, questao9, questao10, questao11, questao12, questao13, questao14, questao15, questao16, questao17, resultados, menu } from './components';

class App extends Component{
  static navigationOptions = {
    title:'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('./img/bg_principal.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <TouchableOpacity style={styles.button} onPress={()=> navigate('menu')}>
          <Text style={styles.texto}>
            Iniciar
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
export default App;

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
    questao14: {screen: questao14},
    questao15: {screen: questao15},
    questao16: {screen: questao16},
    questao17: {screen: questao17},
    resultados: {screen: resultados},
    menu: {screen: menu},
})

AppRegistry.registerComponent('ProjetoPI', () => tela);
