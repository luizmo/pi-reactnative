import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao40 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;
var song3 = null;
var song4 = null;
var song5 = null;

class questao39 extends Component{
  static navigationOptions = {
    title:'questao39',
  }
  constructor(props){
    super(props)
    this.state = { pause: false }
  }

  componentWillMount(){
    song = new SoundPlayer('questao39.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });

    song3 = new SoundPlayer('erro3.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });

    song4 = new SoundPlayer('erro4.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    });

    song5 = new SoundPlayer('erro5.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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

erro1() {
    if (song3 != null) {
      song3.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }

  erro2() {
    if (song4 != null) {
      song4.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }

  erro3() {
    if (song5 != null) {
      song5.play((success) =>{
        if(!success)
        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT); 
      });
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground onLoad={this.onPressButtonPlay.bind(this)} source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <TouchableOpacity style={styles.play} onPress={this.onPressButtonPlay.bind(this)}>
           <Image  style={styles.player} source={require('../img/player.png')} />
         </TouchableOpacity>


        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro1.bind(this)}>
            <Image  style={styles.imagem} source={require('../img/atividades-3-4/marrom.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={this.erro3.bind(this)}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/azul.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={this.erro2.bind(this)}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/vermelho.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao40')}>
            <Image style={styles.imagem} source={require('../img/atividades-3-4/roxo.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao39;
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
    backgroundColor:'#fff',
    height: "65%",
    borderStyle:"solid",
  },
  imagem: {
    width: "100%",
    height: "100%",

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
