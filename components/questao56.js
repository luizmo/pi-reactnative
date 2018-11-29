import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao57 from '.';

class questao56 extends Component{
    static navigationOptions = {
      title:'questao56',
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
          O monumento apresentado a seguir se encontra em qual país?
          </Text>
          <Image style={styles.img_questao} source={require('../img/atividades-8-9/taj-mahal.jpg')} />
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao57')}>
            <View style={styles.imagem}>
              <Text style={styles.opcoes}>Índia</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Argentina</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Uruguai</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <View style={styles.imagem}>
              <Text style={styles.opcoes} >Brasil</Text>

            </View>

          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao56;
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
    fontSize: 20,
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
     fontSize:25,
     color:"#0b44f5"
      
   }

});
