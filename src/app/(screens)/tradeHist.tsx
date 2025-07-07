import testimage from "@/assets/images/harry-potter.png";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import WidePreview from "@/src/(frontend)/components/standard/WidePreview";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

const tradeHist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Trade History"} />
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={{ height: 10 }} />;
        }}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        data={itemslist}
        renderItem={({ item }) => <WidePreview item={item} />}
      />
    </SafeAreaView>
  );
};

export default tradeHist;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1C161E",
    padding: 10,
  },
  scroll: {
    gap: 10,
  },
});

//Some test itemsss
const itemslist = [
  {
    id: 1,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 2,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 3,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 4,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 5,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 6,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 7,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
];
