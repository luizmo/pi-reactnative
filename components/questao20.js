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
    this.state = { numero20:this.props.navigation.state.params.numero19 };
    this.state ={ pause: false, };
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
        <View style={styles.pergunta}>
          <Text style={styles.texto}>
            Toque na opção em que as vogais estão na ordem correta
          </Text>
        </View>
        
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
    width:"39%",
    height:"39%",
    flex: 1,
    flexDirection: "row",
    marginLeft:"28%"
   },
});
