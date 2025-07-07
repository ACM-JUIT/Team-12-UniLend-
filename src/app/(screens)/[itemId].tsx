// to open specific book page using bookid
import ItemDetails from "@/src/(frontend)/components/detailspage/ItemDetails";
import TopActions from "@/src/(frontend)/components/detailspage/TopActions";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import { fetchItem } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Productpage() {
  const { itemId } = useLocalSearchParams();
  const [item, setItem] = useState<Item | null>(null);
  const [SOopen, setSOopen] = useState<boolean>(false);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const itemDetails = await fetchItem(itemId as string);
        setItem(itemDetails);
      } catch (e) {
        console.error("Error getting item details", e);
      }
    };
    handleFetch();
  });
  if (!item) {
    return (
      <View>
        <Text className="text-white text-2xl text-center">Loading</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Like It?" />
      <TopActions backFunc={router.back} itemId={item} watchBut={setSOopen} />
      <ItemDetails item={item} />
      <StandardOverlay
        Activated={SOopen}
        Controller={setSOopen}
        title="Alert!"
        text={
          "This is a temporary alert, we will later make it run a function to watchlist item using the id."
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
});
