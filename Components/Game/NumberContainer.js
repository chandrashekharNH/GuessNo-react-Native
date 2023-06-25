import {StyleSheet,View,Text} from 'react-native'
import Colors from '../../Constants/Colors';

function NumberContainer({children}){
    return(
        <View style = {styles.containerStyle}>
    <Text style = {styles.numberTxtStyle}>
        {children}
    </Text>
</View>
    );
}

export default NumberContainer;

const styles =  StyleSheet.create({
    containerStyle:{
        borderWidth: 4,
        margin:24,
        padding:24,
        borderColor:Colors.SecondaryButtonColor,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    numberTxtStyle:{
        fontSize:40,
        color:Colors.SecondaryButtonColor,
        fontWeight:'bold'
    }
});