import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type SOProps = {
  title: string;
  text: string;
  activated: boolean;
  controller: any;
  animation?: string;
};

const StandardOverlay = (props: SOProps) => {
  return (
    <Modal
      transparent
      visible={props.activated}
      onRequestClose={() => props.controller(false)}
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.controller(false)}>
              <Image
                style={styles.close}
                source={require("@/assets/images/Standard Overlay/Frame.png")}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <Text style={styles.text}>{props.text}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.controller(false)}
          >
            <Text style={styles.buttontext}> Close </Text>
          </TouchableOpacity>
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
    padding: 20,
  },
  box: {
    backgroundColor: "#1C161E",
    padding: 20,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 30,
    borderColor: "#EFE3C8",
    borderWidth: 1,
    width: "100%",
    gap: 25,
  },
  header: {
    flexDirection: "row",
    flex: 1,
  },
  close: {
    width: 32,
    height: 32,
    marginRight: 10,
    alignSelf: "flex-start",
  },
  title: {
    textAlign: "center",
    color: "#EFE3C8",
    fontFamily: "Rosarivo",
    fontSize: 24,
    alignSelf: "center",
  },
  text: {
    fontFamily: "Rosarivo",
    fontSize: 14,
    textAlign: "center",
    color: "#EFE3C8",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(239, 227, 200, 0.2)",
    padding: 6,
    borderWidth: 1,
    borderColor: "#EFE3C8",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontFamily: "Rosarivo",
    textAlignVertical: "center",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 15,
    color: "#F5F5DC",
  },
});
