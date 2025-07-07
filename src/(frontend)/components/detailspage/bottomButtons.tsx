import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Image
          source={require("../../../../assets/images/ProductInfo/prod-buy.png")}
          style={styles.icon1}
        ></Image>
        {/* here add a check for what kind of interaction it it and change text accordingly. */}
        <Text style={styles.buttxt1}>Buy Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  button1: {
    width: "100%",
    backgroundColor: "#F5F5DC",
    borderRadius: 10,
    alignItems: "center",
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    position: "absolute",
    gap: 4,
    bottom: 30,
  },
  buttxt1: {
    color: "#4A2B29",
    fontWeight: "500",
    fontSize: 16,
  },
  icon1: { height: 32, width: 32 },
});
