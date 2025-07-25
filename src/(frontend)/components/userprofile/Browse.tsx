import { fetchItemsByUser } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import SmallPreview from "../standard/SmallPreview";

export default function Browse({ userId }: { userId: string }) {
  const [items, setItems] = useState<Item[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchItems = async () => {
        try {
          const items = await fetchItemsByUser(userId);
          
          if (items.data) {
            setItems(items.data);
          } else {
            Alert.alert("Error occured", "error (development)")
          }
        } catch (error) {
          Alert.alert("Error", String(error));
        }
      };
      fetchItems();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse Products</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SmallPreview
            itemId={item.id}
            title={item.title}
            price={item.price}
            images={item.images}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    fontFamily: "Rosarivo",
    fontSize: 20,
    fontWeight: "regular",
    letterSpacing: 0.5,
    lineHeight: 28,
    color: "#FFFFFF",
  },
  list: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },
});
