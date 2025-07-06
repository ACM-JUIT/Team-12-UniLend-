import CatScrollImage from "@/src/(frontend)/components/mainpage/CatScrollImages";
import CatScrollText from "@/src/(frontend)/components/mainpage/CatScrollText";
import HomePageDefault from "@/src/(frontend)/components/mainpage/HomePageDefault";
import { ScrollView, StyleSheet } from "react-native";
import NavBar from "../../(frontend)/components/standard/Navbar";

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <NavBar title="UniLend" />
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
      <HomePageDefault />
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
