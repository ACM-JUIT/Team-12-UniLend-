import React from "react";
import { Image, StyleSheet, View } from "react-native";

type iFProps = {
  image?: any;
};

import defaultImg from "@/assets/images/profileDefault.png";
const ProfileImg = (props: iFProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.pfp} source={props.image ?? defaultImg} />
      </View>
    </View>
  );
};

export default ProfileImg;

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128,
    backgroundColor: "#rgba(245, 245, 220, 0.2)",
    borderRadius: 64,
    borderColor: "#F5F5DC",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  pfp: {
    height: 64,
    width: 64,
    alignSelf: "center",
  },
});
