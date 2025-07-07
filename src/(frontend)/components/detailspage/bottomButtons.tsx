import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type BB = {
  callbfunc: any;
  text?: any;
  image?: any;
};

const BottomButtons = (props: BB) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1} onPress={props.callbfunc}>
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
    backgroundColor: "#1C161E",
    width: "100%",
    paddingBottom: 20,
  },
  button1: {
    width: "100%",
    backgroundColor: "#F5F5DC",
    borderRadius: 10,
    alignItems: "center",
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 4,
  },
  buttxt1: {
    color: "#4A2B29",
    fontWeight: "500",
    fontSize: 16,
  },
  icon1: { height: 32, width: 32 },
});
