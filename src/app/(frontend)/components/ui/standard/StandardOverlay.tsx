import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type SOProps = {
  header: string;
  text: string;
  Activated: boolean;
  Controller: any;
  Animation?: string;
};

const StandardOverlay = (props: SOProps) => {
  return (
    <Modal
      transparent
      visible={props.Activated}
      onRequestClose={() => props.Controller(false)}
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <View></View>
          <Text>{props.text}</Text>
          <Pressable onPress={() => props.Controller(false)}>
            <Text> Close </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default StandardOverlay;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  box: {
    backgroundColor: "beige",
    margin: 10,
    padding: 15,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 10,
    borderColor: "#0d0c06",
    borderWidth: 4,
    width: "70%",
  },
});
