import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao19 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao18 extends Component{
  static navigationOptions = {
    title:'questao18',
  }
  constructor(props){
    super(props)
    this.state = { pause: false}
  }

  componentWillMount(){
    song = new SoundPlayer('questao18.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}  onLoad={this.onPressButtonPlay.bind(this)}>
        <TouchableOpacity style={styles.play} onPress={this.onPressButtonPlay.bind(this)}>
          <Image  style={styles.player} source={require('../img/player.png')} />
        </TouchableOpacity>         
        <Image source={require('../img/atividades-6-7/atividade18/sequencia.jpg')} style={styles.exemplo}/>
        
        <View style = {styles.alternativas}>
          <TouchableOpacity style = {styles.options}  onPress={()=> ({})}>
            <Text style = {styles.optiontext}>  CRESCENTE  </Text>
          </TouchableOpacity >
          
          <TouchableOpacity style = {styles.options} onPress={()=> navigate('questao19')}>
          <Text style = {styles.optiontext}>DECRESCENTE</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>
    );
  }
}
export default questao18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 25,
    textAlign: "center",
    color:'purple',
  },
  alternativas:{
    alignSelf: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  options:{
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "purple",
    marginTop: 10,
  },
   optiontext:{
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 13,
    color: "purple",
    backgroundColor: "white",
    padding: 10,
  },
  player: {
    width:"100%",
    height:"100%"
  },
  play: {
    width:"34%",
    height:"34%",
    marginLeft:"28%"
   },
   exemplo: {
    alignSelf: "center",
    width:"70%",
    height:"10%",
    borderRadius: 10,
    borderWidth:4,
    borderColor:"purple"
   }
});
