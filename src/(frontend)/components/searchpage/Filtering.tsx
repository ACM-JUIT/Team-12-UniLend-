import filterimg from "@/assets/images/search-page/filter-icon.png";
import sortimg from "@/assets/images/search-page/sort-icon.png";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Filtering = ({
  handleTypeDropDown,
}: {
  handleTypeDropDown: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={sortimg} style={styles.img} />
        <Text style={styles.txt}>Sort by</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTypeDropDown}>
        <Image source={filterimg} style={styles.img} />
        <Text style={styles.txt}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filtering;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#rgba(217, 217, 217, 0.2)",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  img: {
    height: 32,
    width: 32,
  },
  txt: {
    fontFamily: "Rosarivo",
    fontWeight: "bold",
    color: "white",
  },
});
