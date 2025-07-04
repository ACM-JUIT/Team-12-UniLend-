// to open specific book page using bookid
import TopActions from "@/src/(frontend)/components/detailspage/TopActions";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type data = {
  id: number;
  name: string;
};
const data = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
];
const [SOopen, setSOopen] = useState(false);
export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Like It?" />
      <TopActions backFunc={router.back} itemId={data} watchBut={setSOopen} />
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
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  topactions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backimage: {
    width: 35.2,
    height: 32.7,
  },
  watchlist: {
    width: 32,
    height: 32,
  },
});
