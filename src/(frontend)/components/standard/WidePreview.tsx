import moreButton from "@/assets/images/backArrow.png";
import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WidePreview = ({
  title,
  middleText,
  bottomText,
  imageId,
  buttonLink,
}: {
  title: string;
  middleText: string;
  bottomText: string;
  imageId: string;
  buttonLink: RelativePathString;
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://res.cloudinary.com/theowl/image/upload/q_auto/f_auto/" +
            imageId,
        }}
        style={styles.image}
      />
      <View style={styles.infobox}>
        <Text style={styles.texttitle}>{title}</Text>
        <Text style={styles.textmiddle} numberOfLines={2}>
          {middleText}
        </Text>
        <Text style={styles.textbottom} numberOfLines={2}>
          {bottomText}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.morebut}
        onPress={() => {
          console.log(buttonLink)
          router.push(buttonLink);
        }}
      >
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
    backgroundColor: "#251d28a1",
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
    alignContent: "flex-end",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
  morebutimg: {
    height: 24,
    width: 14,
    alignSelf: "center",
  },
});
