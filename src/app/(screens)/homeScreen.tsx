import {
  CatScrollImage,
  CatScrollText,
  HomePageCategory,
  HomePageDefault,
} from "@/src/(frontend)/components/mainpage";
import { getActiveTags, Tag } from "@/src/api/firestore/tags";
import { useFocusEffect } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler, ScrollView, StyleSheet } from "react-native";
import NavBar from "../../(frontend)/components/standard/Navbar";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Tag["slug"] & "home">("home");
  const [categories, setCategories] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await getActiveTags();
        setCategories(tags);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    };

    fetchTags();
  }, []);

  useFocusEffect(() => {
    const backAction = () => {
      if (selectedCategory !== "home") {
        setSelectedCategory("home");
        return true;
      } else {
        return false;
      }
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove()
  })

  const handleCategory = (newCategory: Tag["slug"] & "home") => {
    setSelectedCategory(newCategory);
  };
  return (
    <ScrollView style={styles.container}>
      <NavBar title="UniLend" />
      <CatScrollText categories={categories} setSelection={handleCategory} selectedCategory={selectedCategory}/>
      {selectedCategory === "home" ? (
        <>
          <CatScrollImage
            categories={categories}
            setSelection={handleCategory}
          />
          <HomePageDefault />
        </>
      ) : (
        <HomePageCategory
          selectedCategory={selectedCategory}
          categories={categories}
        />
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
