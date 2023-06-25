import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet,SafeAreaView } from 'react-native';
import InputTextComponent from './Components/InputTextComponent'
import NoteItem from './Components/UI/PrimaryButton'
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import Colors from './Constants/Colors';

export default function App() {
  const [userNumber,setUserNumber] = useState();

function userNumberHandler(userNumber){
  setUserNumber(userNumber)
 
}

let screen = <StartGameScreen onPickNumber={userNumberHandler}/>;
if(userNumber){
  screen = <GameScreen userNumber = {userNumber}/>
}

  return (
      <LinearGradient  colors={[Colors.PrimaryThemeColor, Colors.SecondaryThemeColor]}  style={styles.appContainer}>
      <ImageBackground source={require('./assets/Images/background.png')} resizeMode = 'cover'
                        style={styles.appContainer}
                  imageStyle ={styles.imageStyle}>
            <SafeAreaView  style={styles.appContainer} >
                   {screen}
            </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
  },
  imageStyle:{
    opacity:0.12
  }
});
