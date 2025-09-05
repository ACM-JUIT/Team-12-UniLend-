import { Item } from "@/src/api/firestore/post";
import React from "react";
import {
  FlatList,
  StyleSheet
} from "react-native";
import SmallPreview from "../standard/SmallPreview";


export const BrowseItems = ({items} : {items: Item[]}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      horizontal
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <SmallPreview itemId={item.id} title={item.title} price={item.price} images={item.images}/>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },
  box: {
    width: 135,
    height: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 12,
    marginRight: 10, 
  },
  box2: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    height: 39,
    width: 111,
    borderRadius: 10,
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  img: {
    width: 110,
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "black",
    alignSelf: "center",
    marginBottom: 6,
  },
  text: {
    fontFamily: "Rosarivo",
    fontSize: 14,
    textAlign: "center",
    color: "beige",
    textShadowColor: "black",
    textShadowRadius: 7,
    lineHeight: 14,
    marginBottom: 6,
  },
  text2: {
    fontSize: 14,
    textAlign: "left",
    color: "#FFFFFF",
    fontFamily: "Rosarivo",
  },
});
