import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
const BackButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={router.back}>
        <Image
          style={styles.image}
          source={require("@/assets/images/ProductInfo/prod-back.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    height: 33,
    width: 35,
  },
});
