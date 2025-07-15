import Filtering from "@/src/(frontend)/components/searchpage/Filtering";
import SearchBar from "@/src/(frontend)/components/searchpage/SearchBar";
import Line from "@/src/(frontend)/components/standard/Line";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
const SearchPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Line />
      <Filtering />
      <Line />
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 15,
  },
});
