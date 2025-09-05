import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = {
  heading: string;
  placehldr?: string;
  currentVal: string;
  callback: (text: string) => void;
  multil?: boolean;
};
const InputField: React.FC<Props> = ({
    heading,
  placehldr,
  currentVal,
  callback,
  multil,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <TextInput
        multiline={multil ?? false}
        style={styles.textbox}
        placeholder={placehldr || ""}
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
        value={currentVal}
        onChangeText={(text) => callback(text)}
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
    color: "white"
  },
});
