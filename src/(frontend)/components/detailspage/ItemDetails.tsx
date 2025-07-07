import { Item } from "@/src/api/firestore/post";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ItemDetails = ({ item }: { item: Item }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imgUploaded}
          source={{
            uri:
              "https://res.cloudinary.com/theowl/image/upload/q_auto/f_auto/" +
              item.images,
          }}
        />
        <View style={styles.texts}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.pub}>
            {item.ownerId}
          </Text>
          <Text numberOfLines={1} style={styles.itemtag}>
            {item.category}
          </Text>
          <Text style={styles.itemdisc} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  imgUploaded: {
    height: 318,
    width: 207,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "black",
  },
  title: {
    fontSize: 21,
    fontFamily: "Amiri",
    textAlign: "center",
    color: "#F5F5DC",
    textTransform: "capitalize",
    lineHeight: 26,
  },
  pub: {
    textTransform: "uppercase",
    fontFamily: "Rosarivo",
    fontSize: 16,
    color: "#F5F5DC",
    lineHeight: 16,
  },
  texts: {
    alignItems: "center",
    gap: 2,
  },
  itemtag: {
    fontFamily: "Rosarivo",
    fontSize: 12,
    textTransform: "capitalize",
    lineHeight: 12,
    color: "#FFFFFF",
  },
  itemdisc: {
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
    textOverflow: "",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
