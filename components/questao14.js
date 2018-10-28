import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao15 from '.';

class questao14 extends Component{
  static navigationOptions = {
    title:'questao14',
  }
  constructor(props){
    super(props)
    this.state = { numero14:this.props.navigation.state.params.numero13 }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Qual das letras abaixo é uma vogal?
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao15', {numero14:this.state.numero14 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade14/letra_M.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao15', {numero14:this.state.numero14 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade14/letra_P.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao15', {numero14:this.state.numero14 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade14/letra_L.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao15', {numero14:this.state.numero14 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade14/letra_A.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao14;
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
    padding:10
  },
  texto: {
    fontSize: 25,
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
