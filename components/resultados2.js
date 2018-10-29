import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class resultados2 extends Component{
  static navigationOptions = {
    title:'resultados',
  }
  constructor(props){
    super(props)
    this.state = { numero41:this.props.navigation.state.params.numero40 }
  }
  render() {
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Numero de acertos:
          </Text>
          <Text style={styles.texto}>
            {this.state.numero41}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
export default resultados2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pergunta: {
    marginBottom: "10%",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius: 16,
    marginTop: "14%",
    marginRight: "8%",
    marginLeft: "8%",
    borderWidth:4,
    borderStyle:"solid",
    borderColor:"purple",
    borderRadius:40,
    paddingTop: "7%",
    paddingBottom: "7%",
    paddingLeft: "7%",
    paddingRight: "7%",
  },
  texto: {
    fontSize: 40,
    textAlign: "center",
    color:"purple",
  },
  icones: {
    width: "48%",
    height: "65%",
  }
});
