import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao45 from '.';

class questao44 extends Component{
  static navigationOptions = {
    title:'questao44',
  }
  constructor(props){
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground  source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
             Quantos numeros pares a nesta sequencia?
          </Text>
          <Image  source={require('../img/atividades-8-9/quetao44.png')} />
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao45')}>
            <Image  style={styles.imagem} source={require('../img/atividades-8-9/a.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <Image style={styles.imagem} source={require('../img/atividades-8-9/b.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <Image style={styles.imagem} source={require('../img/atividades-8-9/c.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <Image style={styles.imagem} source={require('../img/atividades-8-9/d1.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao44;
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
    //backgroundColor:'#fff',
    height: "65%",
    borderStyle:"solid",
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth:4,
    borderColor:"purple",
  },
  alternativas: {
    marginLeft: "10%",
    marginRight: "10%",

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  player: {
    width:"100%",
    height:"100%"
  },
  play: {
    width:"39%",
    height:"39%",
    flex: 1,
    flexDirection: "row",
    marginLeft:"28%"
   },

});
