import { useState } from "react";
import { Text ,StyleSheet, View} from "react-native";
import NumberContainer from "../Components/Game/NumberContainer";
import TitleComponent from "../Components/UI/TitleComponent"

function randomNumberGenerator(min,max,exclude){
    const num = Math.floor(Math.random()*(max-min))+min;
    if(num == exclude){
        return randomNumberGenerator(min,max,exclude);
    }else {
        console.log(num)
        console.log(exclude)
         return num
    }
}

function GameScreen({userNumber}){
    const initialGuess = randomNumberGenerator(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);

return(
    <View styles={styles.screenStye}>
        <TitleComponent> Opponent Guess! </TitleComponent>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
        <Text>Game Screen Over!</Text>
        </View>
    </View>
);
}

export default GameScreen;

const styles = StyleSheet.create({
screenStye:{
    flex:1,
    padding:30
}
});


