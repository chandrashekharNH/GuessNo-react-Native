import{StyleSheet,Text} from 'react-native'

function TitleComponent({children}){
    return(
            <Text style= {styles.titleStyle}>{children} </Text>
    )
}

export default TitleComponent;

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:20,
        color:'#E14658',
        borderColor:'#E14658',
        borderWidth:2,
        padding:12,
        textAlign:'center',
        fontWeight:'bold',
        margin:50
    }

})