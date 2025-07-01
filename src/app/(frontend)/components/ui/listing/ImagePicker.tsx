import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PickImage({handleUpload}: { handleUpload: (arg0: File | string) => void}) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleUpload(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.box}
        onPress={pickImage}
        pressRetentionOffset={10}
      >
        <Text style={styles.text1}> Upload file </Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
    padding: 5,
    alignItems: "flex-start",
  },
  box: {
    borderColor: "#F5F5DC",
    borderWidth: 1,
    borderRadius: 20,
    color: "#F5F5DC",
    fontFamily: "Rosarivo",
    backgroundColor: "rgba(245, 245, 220, 0.2)",
    padding: 10,
  },
  image: {
    width: 1080 / 6,
    height: 1920 / 6,
    borderRadius: 10,
  },
  text1: { color: "#cecdca" },
});
