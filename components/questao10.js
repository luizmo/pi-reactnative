import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import resultados from '.';

class questao10 extends Component{
  static navigationOptions = {
    title:'questao10',
  }
  constructor(props){
    super(props)
    this.state = { numero10:this.props.navigation.state.params.numero9 }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Toque na resposta certa.
          </Text>
          <View>
            <Image source={require('../img/atividade10/p4.jpg')} />
          </View>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao11', {numero10:this.state.numero10 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividade10/mm.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao11', {numero10:this.state.numero10 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividade10/nn.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao11', {numero10:this.state.numero10 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividade10/oo.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao11', {numero10:this.state.numero10 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividade10/pp.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default questao10;

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
