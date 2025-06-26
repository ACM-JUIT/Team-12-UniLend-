import React from "react";
import { Modal, Text, View } from "react-native";

type SOProps = {
  text: string;
  Activated: boolean;
};

const StandardOverlay = (props: SOProps) => {
  return (
    <Modal visible={props.Activated}>
      <View>
        <Text>StandardOverlay {props.text}</Text>
      </View>
    </Modal>
  );
};

export default StandardOverlay;
