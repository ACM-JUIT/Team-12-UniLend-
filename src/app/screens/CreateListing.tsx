import NavBar from "@/src/components/ui/mainpage/Navbar";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const CreateListing = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <NavBar name="Add Listing" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 10,
  },
});

export default CreateListing;
