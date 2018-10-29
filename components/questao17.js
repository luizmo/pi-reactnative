import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao18 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao17 extends Component{
  static navigationOptions = {
    title:'questao17',
  }
  constructor(props){
    super(props)
    this.state = { numero17:this.props.navigation.state.params.numero16 };
    this.state ={ pause: false, };
  }

  componentWillMount(){
    song = new SoundPlayer('questao17.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });
  }

  onPressButtonPlay() {
    if (song != null) {
      song.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]} onLoad={this.onPressButtonPlay.bind(this)}>
        <TouchableOpacity style={styles.play} onPress={this.onPressButtonPlay.bind(this)}>
          <Image  style={styles.player} source={require('../img/player.png')} />
        </TouchableOpacity>
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Quantos números existem antes do numero 4?
          </Text>
        </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao18', {numero17:this.state.numero17 + 1})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade17/quatro.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao18', {numero17:this.state.numero17 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade17/tres.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao18', {numero17:this.state.numero17 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade17/dois.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao18', {numero17:this.state.numero17 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade17/um.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao17;
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
