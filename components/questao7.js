import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao8 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao7 extends Component{
  static navigationOptions = {
    title:'questao7',
  }
  constructor(props){
    super(props)
    this.state = { numero7:this.props.navigation.state.params.numero6 };
    this.state ={ pause: false, };
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
            <Image source={require('../img/atividades-6-7/atividade7/p1.jpg')} style={styles.contaimg}/>
          </View>
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao8', {numero7:this.state.numero7 + 1})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade7/z.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao8', {numero7:this.state.numero7 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade7/aa.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao8', {numero7:this.state.numero7 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade7/bb.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao8', {numero7:this.state.numero7 + 0})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade7/cc.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao7;

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
