import moreButton from "@/assets/images/backArrow.png";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type WPProps = {
  item: any;
};

const WidePreview = (props: WPProps) => {
  return (
    <View style={styles.container}>
      <Image source={props.item.image} style={styles.image} />
      <View style={styles.infobox}>
        <Text style={styles.texttitle}>{props.item.title}</Text>
        <Text style={styles.textmiddle}>{props.item.middletxt}</Text>
        <Text style={styles.textbottom}>{props.item.bottomtxt}</Text>
      </View>
      <TouchableOpacity style={styles.morebut} onPress={props.item.callback}>
        <Image style={styles.morebutimg} source={moreButton} />
      </TouchableOpacity>
    </View>
  );
};

export default WidePreview;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderColor: "#FAF3DD",
    borderWidth: 1,
    borderRadius: 17,
    backgroundColor: "#1C161E",
    gap: 20,
  },
  image: {
    width: 68,
    height: 105,
    borderRadius: 7,
    borderColor: "#000000",
    borderWidth: 0.5,
    shadowColor: "black",
    shadowRadius: 2,
  },
  infobox: {
    flexDirection: "column",
    width: 140,
    justifyContent: "center",
    gap: 5,
  },
  texttitle: {
    color: "#F5F5DC",
    fontFamily: "Amiri",
    fontSize: 16,
    lineHeight: 18,
    textShadowOffset: { height: 2, width: 2 },
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  textmiddle: {
    color: "white",
    fontFamily: "Amiri",
    fontSize: 12,
    lineHeight: 12,
    textShadowOffset: { height: 2, width: 2 },
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  textbottom: {
    color: "white",
    fontFamily: "Amiri",
    fontSize: 12,
    lineHeight: 12,
    textShadowOffset: { height: 2, width: 2 },
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  morebut: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
  morebutimg: {
    height: 24,
    width: 14,
    alignSelf: "center",
  },
});
