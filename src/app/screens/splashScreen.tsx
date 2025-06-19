import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

export default function SplashScreen() {
    return(
        <ImageBackground source={{uri: "https://drive.google.com/uc?export=view&id=1mrJ_KZrZBTLFk0gkrgvQwhxqOLg2r-DK"}} resizeMode="cover" style={styles.container}>
            <Text style={styles.text1}>
                UniLend
            </Text>
        </ImageBackground> 
     )

}

const styles=StyleSheet.create({
    container:{
        width: "auto",
        height: "auto",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text1:{
        width: "auto",
        height: "auto",
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 48,
        fontFamily: 'Amiri-Bold.ttf',
        fontWeight: "bold",
        textAlign: "center",
        
    }
})
