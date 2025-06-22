import { Image, StyleSheet, Text, View } from "react-native"

export default function NavBar(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/images/hamburger.png')} style={{flex:1,height:25,width:25,marginTop:8}}/>
            <Text style={styles.text} >
                UniLend
            </Text>
            <Image source={require("../../../assets/images/search.png")} style={{height: 25,width: 25, flex:2,}}/>
        </View>
        )
}
 
const styles=StyleSheet.create({
    container:{
        alignContent: "flex-start",
        width: "100%",
        height:"auto",
        flexDirection: "row",
        alignItems:"center",
        padding:20,
        borderColor:"red",
        borderWidth:3
    },
    text:{
        marginLeft: 10,
        fontSize: 32,
        fontFamily: "Amiri",
        color: "rgba(245, 245, 220, 1)",
        justifyContent:"center",
        fontWeight:"bold",
    }
}
)

