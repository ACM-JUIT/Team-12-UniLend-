import CatScrollImage from "@/src/components/ui/mainpage/CatScrollImages";
import CatScrollText from "@/src/components/ui/mainpage/CatScrollText";
import UserInteractables from "@/src/components/ui/mainpage/UserInteractables";
import { ScrollView, StyleSheet, Text } from "react-native";
import NavBar from "../../components/ui/mainpage/Navbar";

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <CatScrollText />
      <CatScrollImage />
      <Text style={styles.heading1}>Library</Text>
      <UserInteractables />
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
    fontSize: 16,
    marginTop: 10,
    textShadowRadius: 20,
    textShadowColor: "#11111192",
  },
});
