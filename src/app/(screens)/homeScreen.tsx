import {
  collection,
  getDocs,
  getFirestore,
} from "@react-native-firebase/firestore";

import CatScrollImage from "@/src/(frontend)/components/mainpage/CatScrollImages";
import CatScrollText from "@/src/(frontend)/components/mainpage/CatScrollText";
import UserInteractables from "@/src/(frontend)/components/mainpage/UserInteractables";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import BrowseItems from "../../(frontend)/components/mainpage/BrowseItems";
import NavBar from "../../(frontend)/components/mainpage/Navbar";

export default function HomePage() {
  const [posts, setPosts] = useState<any>();
  useEffect(() => {
    const func = async () => {
      const firestore = getFirestore();
      const temp = await getDocs(collection(firestore, "Items"));

      const posts: any[] = [];

      temp.forEach((post) => {
        posts.push({
          id: post.id,
          ...post.data(),
        });
      });
      setPosts(posts);
      console.log(posts);
    };
    func();
  }, []);

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

      <Text style={styles.heading1}>Library</Text>
      <UserInteractables
        setSelection={(category: any) => {
          console.log("User selected:", category.id);
        }}
      />

      <Text style={styles.heading1}>Browse</Text>
      <BrowseItems Items={posts} />
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
