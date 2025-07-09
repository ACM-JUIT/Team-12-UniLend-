import check from "@/assets/images/brown-check.png";
import cross from "@/assets/images/red-cross.png";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActionButton = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.UpdateBut}
        onPress={() => alert("Submit")}
      >
        <Image style={styles.imgcheck} source={check} />
        <Text style={styles.textupd}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.DeleteBut}
        onPress={() => alert("Cannot be Undone or done yet too")}
      >
        <Image source={cross} style={styles.imgdelete} />
        <Text style={styles.txtdlt}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  Container: {
    alignSelf: "flex-start",
    gap: 5,
    padding: 5,
  },
  UpdateBut: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F5F5DC",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A2B29",
    width: "100%",
    paddingRight: 20,
  },
  imgcheck: {
    height: 27,
    width: 27,
  },
  textupd: {
    fontFamily: "Amiri",
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "bold",
  },
  DeleteBut: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(240, 25, 82, 0.3)",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF0000",
    paddingRight: 20,
  },
  imgdelete: {
    height: 27,
    width: 27,
  },
  txtdlt: {
    color: "#FF0000",
    fontFamily: "Amiri",
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "bold",
  },
});
