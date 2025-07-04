// to open specific book page using bookid
import ItemDetails from "@/src/(frontend)/components/detailspage/ItemDetails";
import TopActions from "@/src/(frontend)/components/detailspage/TopActions";
import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UploadedImage from "../../../assets/images/harry-potter.png";
type dataInfo = {
  id: number;
  name: string;
  publorAuth: string;
  disc: string;
  tag: string;
  type: string;
  img: any;
};
const dataInfo = {
  id: 1,
  name: "Harry Potter and the phlosopher's stone",
  disc: "It follows Harry Potter, a young wizard Lakshya who discovers his magical heritage on his eleventh birthday when he receives a letter of acce Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, esse cumque, ipsam ex similique quisquam molestias dignissimos sapiente quae eos animi repudiandae vero blanditiis id fuga, ipsa pariatur ratione exercitationem.",
  tag: "Books/Novels",
  type: "Sell",
  img: UploadedImage,
  publorAuth: "JK Rowling",
};
const [SOopen, setSOopen] = useState(false);
export default function () {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavBar title="Like It?" /> */}
      <TopActions
        backFunc={router.back}
        itemId={dataInfo}
        watchBut={setSOopen}
      />
      <ItemDetails data={dataInfo} />

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
