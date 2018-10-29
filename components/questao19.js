import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao20 from '.';

class questao19 extends Component{
  static navigationOptions = {
    title:'questao19',
  }
  constructor(props){
    super(props)
    this.state = { numero19:this.props.navigation.state.params.numero18 }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
          Quantos números, dos apresentados a seguir, são menores que 10?
          </Text>
          <View>
            <Image source={require('../img/atividades-6-7/atividade19/menores_8.jpg')} />
          </View>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao20', {numero19:this.state.numero19 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade19/quatro.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao20', {numero19:this.state.numero19 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade19/um.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao20', {numero19:this.state.numero19 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade19/dois.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao20', {numero19:this.state.numero19 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade19/tres.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao19;
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
