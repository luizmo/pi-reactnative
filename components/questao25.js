import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import resultados from '.';

class questao25 extends Component{
  static navigationOptions = {
    title:'questao25',
  }
  constructor(props){
    super(props)
    this.state = {numero2:this.props.navigation.state.params.numero1}
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Qual desses animais vive na Zoo?
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados', {numero2:this.state.numero2 + 1})}>
            <Image  style={styles.imagem} source={require('../img/atividades-3-4/cobra.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados', {numero2:this.state.numero2 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/cao.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados', {numero2:this.state.numero2 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/galinha.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('resultados', {numero2:this.state.numero2 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/peixe.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pergunta: {
    marginBottom: "10%",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius: 16,
    marginTop: "8%",
    marginRight: "8%",
    marginLeft: "8%",
    borderWidth:4,
    borderColor:"purple",
  },
  texto: {
    fontSize: 35,
    textAlign: "center",
    color:"purple",
  },
  icones: {
    width: "48%",
    height: "65%",
    borderStyle:"solid",
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 65,
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
