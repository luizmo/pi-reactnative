import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao7 from '.';

 class questao6 extends Component{
  static navigationOptions = {
    title:'questao6',
  }
  constructor(props){
    super(props)
    this.state = { numero6:this.props.navigation.state.params.numero5 }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Toque no objeto que não fica no banheiro.
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao7', {numero6:this.state.numero6 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade6/v.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao7', {numero6:this.state.numero6 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade6/w.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao7', {numero6:this.state.numero6 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade6/x.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao7', {numero6:this.state.numero6 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade6/y.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao6;

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
