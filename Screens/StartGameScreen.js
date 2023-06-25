import { useState } from 'react';
import {TextInput, View,StyleSheet,Text, Alert} from 'react-native'
import PrimaryButton from '../Components/UI/PrimaryButton';
import TitleComponent from '../Components/UI/TitleComponent';
import Colors from '../Constants/Colors'
function StartGameScreen({onPickNumber}){

    const [enterednNumber,setEnteredNumber] = useState('')

    function enteredNumberhandler(text){
        setEnteredNumber(text)
    }

    function confirmEnteredNumberhandler(text){
            const number = parseInt(enterednNumber)
                if(isNaN(number)|| number<=0 || number>99){

                        Alert.alert(
                                        'Valid Number',
                                         'number should be within 0 to 99',
                                         [{text:'OK',style:'destructive',onPress:resetEnteredNumberhandler}]
                                  );
     return;
}
            onPickNumber(number);
    }

    function resetEnteredNumberhandler(text){
        setEnteredNumber('')
    }


return(
<View style = {styles.rootContainerStyle}>
    <TitleComponent>Guess My Number</TitleComponent>
    <View style = {styles.inputContainerStyle}>
    <Text style = {styles.instructionStyle}> Enter Number </Text>
        <TextInput style={styles.numberInput} maxLength = {2} 
        keyboardType = 'number-pad'
            value= {enterednNumber}
            onChangeText={enteredNumberhandler}
        />
        <View style= {styles.buttonsContainerStyle}>
    <View style= {styles.buttonContainerStyle}>
        <PrimaryButton onPress = {resetEnteredNumberhandler}> Reset</PrimaryButton>
    </View>
    <View style= {styles.buttonContainerStyle}>
        <PrimaryButton onPress = {confirmEnteredNumberhandler}>  Confirm</PrimaryButton>
    </View>
        </View>
    </View>
    </View>
);
}


export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainerStyle:{
            flex:1 ,
            marginTop:100,
            alignItems:'center' 
    },
    inputContainerStyle:{
                 justifyContent:'center',
                 alignItems:'center',
                   marginTop:20,
                   marginHorizontal:24,
                     padding:16,
                     backgroundColor:Colors.PrimaryBGColor,
                     borderRadius:8,
                     elevation:4,
                     shadowColor:'black',
                     shadowOffset:{width:0,height:2},
                     shadowRadius:6,
                     shadowOpacity:0.25
                 },
                 numberInput:{
                    height:50,
                    fontSize:32,
                    borderBottomColor:Colors.SecondaryBGColor,
                    borderBottomWidth:2,
                    color:Colors.SecondaryBGColor,
                    marginVertical:8,
                    fontWeight:'bold',
                    width:40,
                    textAlign:'center'
                 },
                 buttonsContainerStyle:{
                    flexDirection:'row'
                 },
                 buttonContainerStyle:{
                    flex:1
                 },
                 instructionStyle:{
                    color:Colors.PrimaryButtonColor,
                    fontSize:20,
                    fontWeight:'bold'
                 }


})