import CatScrollImage from "@/src/app/(frontend)/components/ui/mainpage/CatScrollImages";
import CatScrollText from "@/src/app/(frontend)/components/ui/mainpage/CatScrollText";
import UserInteractables from "@/src/app/(frontend)/components/ui/mainpage/UserInteractables";
import { ScrollView, StyleSheet, Text } from "react-native";
import BrowseItems from "../components/ui/mainpage/BrowseItems";
import NavBar from "../components/ui/mainpage/Navbar";

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <NavBar name="UniLend" />
      <CatScrollText
        setSelection={(category: any) => {
          console.log("User selected:", category.id);

          if (category.name === "Electronics") {
            console.log("Show electronics screen");
          }
        }}
      />
      <CatScrollImage
        setSelection={(category: any) => {
          console.log("User selected:", category.id);
        }}
      />

      <Text style={styles.heading1}>Library</Text>
      <UserInteractables
        setSelection={(category: any) => {
          console.log("User selected:", category.id);
        }}
      />

      <Text style={styles.heading1}>Browse</Text>
      <BrowseItems />

      <Text style={styles.heading1}>Novels</Text>
      <BrowseItems
        setSelect={(category: any) => {
          console.log("User selected:", category.id);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 10,
  },
  heading1: {
    margin: 5,
    borderRadius: 10,
    color: "#ffffff",
    fontFamily: "Rosarivo",
    fontSize: 20,
    marginTop: 25,
    textShadowRadius: 20,
    textShadowColor: "#11111192",
  },
});
