import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao50 from '.';

class questao49 extends Component{
  static navigationOptions = {
    title:'questao48',
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
            Coloque esses numeros em ordem Crescente:
          </Text>
          <Image style={styles.gabriel} source={require('../img/atividades-8-9/quetao48.png')} />
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao50')}>
            <View style={styles.imagem}>
              <Text style={styles.ga}> 10-11-23-10 </Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.ga} > 23-20-11-10 </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.ga} > 10-11-20-23</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.ga} > 10-23-11-20 </Text>

            </View>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao49;
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
    padding:10
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
   gabriel:{
     width: 290,
     borderRadius: 5,
   },
   ga:{
     fontWeight:"bold",
     fontSize:20,
     color:"#0b44f5"

   }

});
