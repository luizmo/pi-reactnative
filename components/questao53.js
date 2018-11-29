import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao54 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao53 extends Component{
  static navigationOptions = {
    title:'questao53',
  }
  constructor(props){
    super(props)
    pause: false
  }

  componentWillMount(){
    song = new SoundPlayer('questao5.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
      <ImageBackground source={require('../img/bg_secu.png')} style={[styles.container,{width:"100%", height:"100%"}]}>
        <View style={styles.pergunta}>
           <Image style={styles.imagempergunta} source={require('../img/atividades-8-9/bruno/atividade4/verao.jpg')} />
        </View>
        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image  style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade4/m.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao54')}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade4/n.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade4/o.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade4/p.png')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao53;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pergunta: {
    width: "77%",
    height: "38%",
    marginBottom: "2%",
    alignItems:"center",
    marginTop: "4%",
    marginRight: "8%",
    marginLeft: "11%",
  },
  imagempergunta: {
    width: "100%",
    height: "100%",
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
