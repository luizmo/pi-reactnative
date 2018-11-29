import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import questao55 from '.';

var SoundPlayer = require('react-native-sound');
var song = null;

class questao54 extends Component{
  static navigationOptions = {
    title:'questao54',
  }
  constructor(props){
    super(props)
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
           <Image style={styles.imagempergunta} source={require('../img/atividades-8-9/bruno/atividade5/inverno.jpg')} />
        </View>
        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image  style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade5/r.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> navigate('questao55')}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade5/s.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.alternativas}>
            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade5/t.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icones} onPress={()=> ({})}>
              <Image style={styles.imagem} source={require('../img/atividades-8-9/bruno/atividade5/u.png')} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default questao54;

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
