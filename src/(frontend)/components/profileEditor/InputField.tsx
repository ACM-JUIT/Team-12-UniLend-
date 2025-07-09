import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type ifProps = {
  heading: string;
  placehldr: string;
  callback: any;
  multil?: boolean;
};
const InputField = (props: ifProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <TextInput
        multiline={props.multil ?? false}
        style={styles.textbox}
        placeholder={props.placehldr}
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
      ></TextInput>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  heading: {
    fontFamily: "Amiri",
    fontSize: 16,
    color: "rgba(255, 255, 255, 1)",
    lineHeight: 24,
  },
  textbox: {
    backgroundColor: "rgba(245, 245, 220, 0.2)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F5F5DC",
    paddingLeft: 10,
  },
});
