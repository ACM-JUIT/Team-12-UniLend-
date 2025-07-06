import CatScrollImage from "@/src/(frontend)/components/mainpage/CatScrollImages";
import CatScrollText from "@/src/(frontend)/components/mainpage/CatScrollText";
import HomePageCategory from "@/src/(frontend)/components/mainpage/HomePageCategory";
import HomePageDefault from "@/src/(frontend)/components/mainpage/HomePageDefault";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import NavBar from "../../(frontend)/components/standard/Navbar";

export default function HomePage() {
  const [category, setCategory] = useState<string>("Home");

  const handleCategory = (newCategory: string) => {
    setCategory(newCategory)
  }
  return (
    <ScrollView style={styles.container}>
      <NavBar title="UniLend" />
      <CatScrollText
        setSelection={handleCategory}
      />
      {category === "Home" ? (
        <>
          <CatScrollImage
            setSelection={handleCategory}
          />
          <HomePageDefault />
        </>
      ) : (
        <HomePageCategory category={category}/>
      )}
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
