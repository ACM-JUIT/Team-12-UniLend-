import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Image source={require("../../../../assets/images/ProductInfo/prod-buy.png")} style={styles.icon1}></Image>
        <Text style={styles.buttxt1}>Buy Today!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttxt2}>bottomButtons</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button1: {
    width: "100%",
    backgroundColor: "#F5F5DC",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  buttxt1: {
    color: "#4A2B29",
    fontWeight: "500",
    fontSize: 16,
  },
  icon1: {},
  button2: {},
  buttxt2: {},
});
