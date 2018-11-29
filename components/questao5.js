import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao6 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;
var song3 = null;
var song4 = null;
var song5 = null;

class questao5 extends Component{
  static navigationOptions = {
    title:'questao5',
  }
  constructor(props){
    super(props)
    this.state = { pause: false }
  }

  componentWillMount(){
    song = new SoundPlayer('questao5.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]} onLoad={this.onPressButtonPlay.bind(this)}>
        <TouchableOpacity style={styles.play} onPress={this.onPressButtonPlay.bind(this)}>
          <Image  style={styles.player} source={require('../img/player.png')} />
        </TouchableOpacity>
        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={this.erro2.bind(this)}>
              <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade5/r.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao6')}>
              <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade5/s.jpg')} />
            </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={this.erro3.bind(this)}>
              <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade5/t.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={this.erro1.bind(this)}>
              <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade5/u.jpg')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao5;
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
    color:'purple',
  },
  icones: {
    width: "46%",
    height: "75%",
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
