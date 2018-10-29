import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import resultados from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao20 extends Component{
  static navigationOptions = {
    title:'questao20',
  }
  constructor(props){
    super(props)
    this.state = { numero20:this.props.navigation.state.params.numero19, pause: false}
  }

  componentWillMount(){
    song = new SoundPlayer('questao20.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
      
        
        <View style = {styles.alternativas}>
          <TouchableOpacity style = {styles.options}  onPress={()=> navigate('resultados', {numero20:this.state.numero20 + 1})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade20/vogais1.jpg')} />
          </TouchableOpacity >
        </View>

        <View style = {styles.alternativas}>
          <TouchableOpacity style = {styles.options}  onPress={()=> navigate('resultados', {numero20:this.state.numero20 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade20/vogais2.jpg')} />
          </TouchableOpacity >
        </View>

        <View style = {styles.alternativas}>
          <TouchableOpacity style = {styles.options}  onPress={()=> navigate('resultados', {numero20:this.state.numero20 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade20/vogais3.jpg')} />
          </TouchableOpacity >
        </View>

        <View style = {styles.alternativas}>
          <TouchableOpacity style = {styles.options}  onPress={()=> navigate('resultados', {numero20:this.state.numero20 + 0})}>
            <Image  style={styles.imagem} source={require('../img/atividades-6-7/atividade20/vogais4.jpg')} />
          </TouchableOpacity >
        </View>


      </ImageBackground>
    );
  }
}
export default questao20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    color:'purple',
  },
  alternativas:{
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    color: "black"
  },
  options:{
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "purple",
    
  },
   imagem:{
    borderRadius: 12,
  },
  player: {
    width:"100%",
    height:"100%"
  },
  play: {
    width:"34%",
    height:"34%",
    alignSelf: "center",
   },
});
