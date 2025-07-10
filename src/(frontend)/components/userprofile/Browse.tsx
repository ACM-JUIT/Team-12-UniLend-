import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Browse() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse Products</Text>
      {/* Add the flatlist here using whatever thing you do to sort things :P */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    fontFamily: "Rosarivo",
    fontSize: 20,
    fontWeight: "regular",
    letterSpacing: 0.5,
    lineHeight: 28,
    color: "#FFFFFF",
  },
});
