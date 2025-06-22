import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";

export default function Login() {
  const [isWrong, setIsWrong] = useState(true);
  const router =useRouter();
  return (
    <ImageBackground source={require("../../../assets/images/SignUp.png")} style={styles.container} resizeMode="cover">
      
      <TouchableWithoutFeedback onPress={router.back}>
        <Image source={require("../../../assets/images/backArrow.png")} style={styles.image1}/>
      </TouchableWithoutFeedback>

      <Text style={styles.text1} >
        Log In 
      </Text>

      <Text style={styles.text2}>
        Email 
      </Text>

      <View style={{height: 10}}></View>
      <TextInput autoComplete="email" style={styles.input1} placeholder="Email"/>
      <View style={{height: 25}}></View>

      <Text style={styles.text2}>
        Password 
      </Text>

      <View style={{height:10 }}></View>
      <TextInput style={styles.input1} placeholder="Password" />
      <View style={{height:10 }}></View>

      <TouchableWithoutFeedback  onPress={()=> alert("Lakshya Is the Coolest Human")} style={{padding:1, height:13,justifyContent:"center", alignContent:"center"}}>
      <Text style={styles.textSmallest}>
          Forgot Password? 
        </Text>
      {/* <Text style={styles.textSmallestAlert}>
          Forgot Password? 
        </Text> */}
      </TouchableWithoutFeedback>
      <View style={{height: 15}}></View>

      <TouchableHighlight underlayColor="#cfc7b5" onPress={()=>alert("Hello")} style={styles.button1}>
          <View>
            <Text style={{color: "#4A2B29", fontSize: 16, textAlign: "center", }}>
              Log in 
            </Text>
          </View>
      </TouchableHighlight>

      <View style={{height: 15}}></View>

      <TouchableHighlight underlayColor="#cfc7b5" onPress={()=>router.push('/(auth)/signup_page')} style={styles.button2}>
        <View>
            <Text style={{color: "#EFE3C8", fontSize: 16, textAlign: "center", }}>
              New here? Sign Up! 
            </Text>
        </View>
      </TouchableHighlight>

    </ImageBackground>
  )
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    width: "auto",
    height: "auto",
    padding:35,
  },
  text1:{
    fontSize:48,
    fontFamily: "Amiri",
    fontWeight: "bold",
    color: "#EFE3C8",
  },
  image1:{
    marginTop: 77,
  },
  text2:{
    fontSize: 16,
    color: "#F5F5DC",
    fontWeight: "bold",
  },
  input1:{
    borderColor:"#EFE3C8",
    padding:10,
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: "rgba(245, 245, 220, 0.2)",
  },
  textSmallest:{
    fontSize: 12,
    color: "#F5F5DC",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign:"center"
  },
    textSmallestAlert:{
    fontSize: 12,
    color: "#F5F5DC",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign:"center"
  },
  button1: {
    borderColor:"#EFE3C8",
    padding:10,
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: "#EFE3C8",
    alignContent:"center",
    justifyContent:"center",
  },
    button2: {
    borderColor:"#EFE3C8",
    padding:10,
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: "#efe3c800",
    alignContent:"center",
    justifyContent:"center",
  }
}
)