import NavBar from "@/src/(frontend)/components/standard/Navbar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const tradeHist = () => {
  return (
    <View style={styles.container}>
      <NavBar title={"Trade History"} />
      <Text>tradeHist</Text>
    </View>
  );
};

export default tradeHist;

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "#1C161E" },
});
