import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao52 from '.';

class questao51 extends Component{
  static navigationOptions = {
    title:'questao51',
  }
  constructor(props){
    super(props)
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
           <Image style={styles.imagempergunta} source={require('../img/atividades-8-9/atividade2/conta2.jpg')} />
        </View>
        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image  style={styles.imagem} source={require('../img/atividades-8-9/atividade2/e.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/atividade2/f.jpg')} />
            </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/atividade2/g.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao52')}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/atividade2/h.jpg')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao51;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pergunta: {
    marginBottom: "10%",
    alignItems:"center",
    marginTop: "8%",
    marginRight: "8%",
    marginLeft: "8%",
  },
  imagempergunta: {
    borderRadius: 16,
    borderWidth:4,
    borderColor:"purple",
  },
  icones: {
    width: "46%",
    height: "65%",
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
   }
});
