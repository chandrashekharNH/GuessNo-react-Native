import {StyleSheet, View,Text, Pressable} from 'react-native'
import Colors  from '../../Constants/Colors';

function PrimaryButton({children,onPress}){

return(
    
<View style = {styles.buttonOutterContainerStyle}>
<Pressable  
style = {({pressed}) => pressed? [styles.buttonInnerContainerStyle,styles.pressed]: styles.buttonInnerContainerStyle}
                       onPress ={onPress}
                android_ripple = {{color:Colors.PrimaryColor1}}>
    <Text style = {styles.buttonTextStyle}>
{children}
    </Text>
    </Pressable>
</View>
  
);
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOutterContainerStyle:{
        margin:10,
        borderRadius:20,
        overflow:'hidden'
    },
    buttonInnerContainerStyle:{
        backgroundColor:'#72063c',
        paddingHorizontal:16,
        paddingVertical:6,
        elevation:2
    },
    buttonTextStyle:{
        color:'#ddb52f',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }

});