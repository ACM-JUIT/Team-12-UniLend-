import { Link, Stack } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={{
          uri: "https://drive.google.com/uc?export=view&id=1mrJ_KZrZBTLFk0gkrgvQwhxqOLg2r-DK",
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <Link href="/(screens)/homeScreen" style={styles.text1}>
          <Image source={require("../../../assets/images/logo.png")} />
        </Link>
        <Link href="/(auth)/login_page" style={styles.text1}>
          UniLend
        </Link>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    width: "auto",
    height: "auto",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 48,
    fontFamily: "Amiri",
    fontWeight: "bold",
    textAlign: "center",
    color: "#F5F5DC",
  },
  image1: {},
});
