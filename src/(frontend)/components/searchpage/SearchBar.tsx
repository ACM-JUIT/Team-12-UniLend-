import back from "@/assets/images/ProductInfo/prod-back.png";
import srch from "@/assets/images/search.png";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = ({searchQuery, handleSearchQuery, handleSearchSubmit} : {searchQuery: string; handleSearchQuery: ((arg0: string) => void); handleSearchSubmit: () => void}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back}>
        <Image source={back} style={styles.backimg} />
      </TouchableOpacity>
      <View style={styles.srchbox}>
        <TextInput
          style={styles.srchinput}
          placeholder="Search items.."
          placeholderTextColor={"#F5F5DC"}
          value={searchQuery}
          onChangeText={handleSearchQuery}
          onSubmitEditing={handleSearchSubmit}
        />
        <TouchableOpacity onPress={handleSearchSubmit}>
          <Image source={srch} style={styles.srchimg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  backimg: {
    height: 32.7,
    width: 35.22,
  },
  srchimg: {
    height: 25,
    width: 25,
  },
  srchbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  srchinput: {
    color: "#F5F5DC",
    fontSize: 24,
    fontFamily: "Rosarivo",
    fontWeight: "bold",
  },
});
