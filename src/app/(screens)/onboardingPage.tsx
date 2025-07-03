import { router, Stack } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SplashScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={{
          uri: "https://drive.google.com/uc?export=view&id=1mrJ_KZrZBTLFk0gkrgvQwhxqOLg2r-DK",
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.box}>
            <Image
              style={styles.image1}
              source={require("../../../assets/images/logo.png")}
            />
            <Text style={styles.text1}>UniLend</Text>
          </View>
          <Text style={styles.textbottom}>
            Because Lending is the new mending
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signup_page")}
            style={styles.button1}
          >
            <Text style={styles.buttontxt1}>New in vibe? Sign Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login_page")}
            style={styles.button2}
          >
            <Text style={styles.buttontxt2}>Been here? Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 10,
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  box: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: "10",
    alignItems: "center",
  },
  text1: {
    alignSelf: "center",
    fontSize: 48,
    fontFamily: "Amiri",
    fontWeight: "bold",
    textAlign: "center",
    color: "#F5F5DC",
  },
  image1: {
    height: 58,
    width: 58,
    alignSelf: "center",
    justifyContent: "center",
  },
  textbottom: {
    color: "#F5F5DC",
    fontSize: 24,
    fontFamily: "Rosarivo",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
    alignSelf: "center",
    textAlign: "auto",
  },
  button1: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFE3C8",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  button2: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#efe3c800",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttontxt1: { color: "#4A2B29", fontSize: 16, textAlign: "center" },
  buttontxt2: { color: "#EFE3C8", fontSize: 16, textAlign: "center" },
});
