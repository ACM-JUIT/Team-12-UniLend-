import React from "react";
import { StyleSheet, View } from "react-native";

const Line = () => {
  return <View style={styles.container}></View>;
};

export default Line;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
