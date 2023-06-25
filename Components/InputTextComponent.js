import {StyleSheet,TextInput,Text,View,Button} from 'react-native'


function InputTextComponent(){
    return (
<View style = {styles.mainContainerStyle}>
    <TextInput style = {styles.textStye} placeholder="Enter text" >   </TextInput>
    <Button title="add" color='red'></Button>
</View>
    );
}

export default InputTextComponent;

const styles = StyleSheet.create({
    mainContainerStyle:{
        backgroundColor:'gray'
    },
    
textStye:{
    borderRadius:10,
    borderWidth:1
}
});