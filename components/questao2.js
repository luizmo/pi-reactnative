import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao3 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao2 extends Component{
  static navigationOptions = {
    title:'questao2',
  }
  constructor(props){
    super(props)
    this.state = {numero2:this.props.navigation.state.params.numero1, pause: false};
  }

  componentWillMount(){
    song = new SoundPlayer('questao2.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} >
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade2/e.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones} >
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade2/f.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
          <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao3', {numero2:this.state.numero2 + 1})}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade2/g.jpg')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icones}>
            <Image style={styles.imagem} source={require('../img/atividades-6-7/atividade2/h.jpg')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao2;

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
    width:"35%",
    height:"35%",
    flex: 1,
    flexDirection: "row",
    marginLeft:"28%"
   }

});
