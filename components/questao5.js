import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao6 from './questao6.js';

class questao5 extends Component{
  static navigationOptions = {
    title:'questao5',
  }
  constructor(props){
    super(props)
    this.state = { numero5:this.props.navigation.state.params.numero4 }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Toque no objeto que não fica na cozinha.
          </Text>
        </View>
        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao6', {numero5:this.state.numero5 + 0})}>
              <Image  style={styles.imagem} source={require('../img/atividade5/r.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao6', {numero5:this.state.numero5 + 1})}>
              <Image style={styles.imagem} source={require('../img/atividade5/s.jpg')} />
            </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao6', {numero5:this.state.numero5 + 0})}>
              <Image style={styles.imagem} source={require('../img/atividade5/t.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao6', {numero5:this.state.numero5 + 0})}>
              <Image style={styles.imagem} source={require('../img/atividade5/u.jpg')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao5;
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
    color:'purple',
  },
  icones: {
    width: "48%",
    height: "75%",
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
