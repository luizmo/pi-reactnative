import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { menu, questoes, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao9,
  questao10, questao11, questao12, questao13, questao14, questao15,questao16, questao17,questao18,
  questao19, questao20, questao21, questao22, questao23, questao24, questao25, questao26, questao27, questao28,
  questao29, questao30, questao31, questao32, questao33, questao34, questao36,questao35, questao37, questao38, questao39,questao40,
  questao41, questao42, questao43, questao50, questao51, questao52, questao53, questao54, resultados, resultados2 } from './components';

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
    questao18: {screen: questao18},
    questao19: {screen: questao19},
    questao20: {screen: questao20},
    questao21: {screen: questao21},
    questao22: {screen: questao22},
    questao23: {screen: questao23},
    questao24: {screen: questao24},
    questao25: {screen: questao25},
    questao26: {screen: questao26},
    questao27: {screen: questao27},
    questao28: {screen: questao28},
    questao29: {screen: questao29},
    questao30: {screen: questao30},
    questao31: {screen: questao31},
    questao32: {screen: questao32},
    questao33: {screen: questao33},
    questao34: {screen: questao34},
    questao35: {screen: questao35},
    questao36: {screen: questao36},
    questao37: {screen: questao37},
    questao38: {screen: questao38},
    questao39: {screen: questao39},
    questao40: {screen: questao40},
    questao41: {screen: questao41},
    questao42: {screen: questao42},
    questao43: {screen: questao43},
    questao50: {screen: questao50},
    questao51: {screen: questao51},
    questao52: {screen: questao52},
    questao53: {screen: questao53},
    questao54: {screen: questao54},
    resultados: {screen: resultados},

    resultados2: {screen: resultados2},
    menu: {screen: menu},
},
{
  headerMode: 'none',

});

AppRegistry.registerComponent('ProjetoPI', () => tela);
