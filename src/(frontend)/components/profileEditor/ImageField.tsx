import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type iFProps = {
  image?: any;
};
const ImgField = (props: iFProps) => {
  return (
    <TouchableOpacity onPress={() => alert("hey")}>
      <View style={styles.container}>
        <Image
          style={styles.pfp}
          source={{
            uri: "https://cdn.wallpapersafari.com/34/0/NrOWJ1.jpg",
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ImgField;

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
    overflow: "hidden"
  },
  pfp: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    objectFit: "cover",
  },
});
