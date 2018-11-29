
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import menu from '.';

class questao60 extends Component{
  static navigationOptions = {
    title:'questao60',
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
            O alfabeto é composto por quantas letras?
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('menu')} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes}>26</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >20</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >29</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >23</Text>

            </View>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao60;
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
    alignItems:"center",
  
  },
  imagem: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center",
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
   img_questao:{
     width: 250,
     borderRadius: 5,
   },
   opcoes:{
     fontWeight:"bold",
     fontSize:35,
     color:"#0b44f5"
      
   }

});

