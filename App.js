
import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View,
        TextInput,
        TouchableOpacity,
        ImageBackground} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      bg: "F",
      bg2: "U",
      bg3: "A",
      bg4: "L"
    }
  }

 

  render() {
    
    return (
      <ImageBackground source={require('./app/imagens/tela_perguntas.png')} style={styles.container}>
        <View style={styles.espacoPergunta}>
            <Text style={styles.pergunta}>Identifique quais letras abaixo são vogais: </Text>
        </View>

        <View style = {styles.resposta}>
          <TouchableOpacity style = {styles.options} onPress = {() => this.setState({bg: "F-Errou"})}>
            <Text style = {styles.optiontext}>{this.state.bg}</Text>
          </TouchableOpacity >
          
          <TouchableOpacity style = {styles.options} onPress = {() => this.setState({bg2:"U-Acertou"})}>
            <Text style = {styles.optiontext}>{this.state.bg2}</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.resposta}>  
          <TouchableOpacity style = {styles.options} onPress = {() => this.setState({bg3:"A-Acertou"})}>
            <Text style = {styles.optiontext}>{this.state.bg3}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style = {styles.options} onPress = {() => this.setState({bg4:"L-Errou"})}>
            <Text style = {styles.optiontext}>{this.state.bg4}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

resposta:{
  flexDirection:"row",
  justifyContent:"space-around",
},

pergunta:{
  alignSelf: "center",
  padding: 30,
  fontSize: 20,
  fontWeight: "bold",
  color: "black"
},

espacoPergunta: {
  backgroundColor: "white",
  width: "80%",
  alignSelf: "center",
  marginTop: 10,
  borderRadius: 10,
  borderWidth: 1.5,
  borderColor: "black"
},

options:{
  alignSelf: "center",
  borderRadius: 10,
  borderWidth: 1.5,
  borderColor: "black",
  marginTop: 15,
},

optiontext:{
  fontSize: 20,
  borderRadius: 10,
  fontWeight: "bold",
  color: "black",
  backgroundColor: "white",
  padding: 25,
},

optiontext2:{
  fontSize: 20,
  borderRadius: 10,
  fontWeight: "bold",
  color: "black",
  backgroundColor: "red",
  padding: 25,
},

});
