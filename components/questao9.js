import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao10 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao9 extends Component{
  static navigationOptions = {
    title:'questao9',
  }
  constructor(props){
    super(props)
    this.state = { numero9:this.props.navigation.state.params.numero8, pause: false}
  }

  componentWillMount(){
    song = new SoundPlayer('questaoconta.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
          <View  style={styles.conta}>
            <Image source={require('../img/atividades-6-7/atividade9/p3.jpg')} style={styles.contaimg}/>
          </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade9/ii.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade9/jj.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao10', {numero9:this.state.numero9 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade9/kk.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade9/ll.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 35,
    textAlign: "center",
    color:'purple',
  },
  icones: {
    width: "40%",
    height: "90%",
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
   conta: {
    width:"40%",
    marginLeft:"16%",
   },
   contaimg: {
    borderRadius: 16,
   }
});
