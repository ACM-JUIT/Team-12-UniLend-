import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

import { StyleSheet, Text } from "react-native";
import BrowseItems from "./BrowseItems";
import UserInteractables from "./UserInteractables";

import { ItemPostInput } from "@/src/api/firestore/post";

interface Item extends ItemPostInput {
  id: string;
}

const fetchItemsByCategory = async (
  firestore: any,
  category?: string,
  orderByField: string = "createdAt",
  limitCount: number = 7
): Promise<Item[]> => {
  let q;

  if (category) {
    q = query(
      collection(firestore, "Items"),
      where("category", "==", category),
      orderBy(orderByField, "desc"),
      limit(limitCount)
    );
  } else {
    q = query(
      collection(firestore, "Items"),
      orderBy(orderByField, "desc"),
      limit(limitCount)
    );
  }

  try {
    const querySnapshot = await getDocs(q);
    const items: Item[] = [];

    querySnapshot.forEach((item) => {
      items.push({
        id: item.id,
        ...(item.data() as Omit<Item, "id">),
      });
    });
    return items;
  } catch (error: any) {
    console.log("The query was", category);
    console.error(error);
    throw new Error(error);
  }
};

export default function HomePageDefault() {
  const [newPosts, setNewPosts] = useState<Item[]>([]);
  const [popularPosts, setPopularPosts] = useState<Item[]>([]);
  const [electronicsPosts, setElectronicsPosts] = useState<Item[]>([]);
  const [booksPosts, setBooksPosts] = useState<Item[]>([]);
  useEffect(() => {
    const fetchCategorizedPosts = async () => {
      const firestore = getFirestore();
      console.log("test");
      const [newItems, popularItems, electronicsItems, booksItems] =
        await Promise.all([
          fetchItemsByCategory(firestore),
          fetchItemsByCategory(firestore, undefined, "viewcount"),
          fetchItemsByCategory(firestore, "Electronics"),
          fetchItemsByCategory(firestore, "Books"),
        ]);

      setNewPosts(newItems);
      setPopularPosts(popularItems);
      setElectronicsPosts(electronicsItems);
      setBooksPosts(booksItems);
    };
    fetchCategorizedPosts();
  }, []);

  return (
    <>
      <Text style={styles.heading1}>Library</Text>
      <UserInteractables
        setSelection={(category: any) => {
          console.log("User selected:", category.id);
        }}
      />

      <Text style={styles.heading1}>New Stuff</Text>
      <BrowseItems Items={newPosts} />

      <Text style={styles.heading1}>Popular Stuff</Text>
      <BrowseItems Items={popularPosts} />

      <Text style={styles.heading1}>Electronics ⚡</Text>
      <BrowseItems Items={electronicsPosts} />

      <Text style={styles.heading1}>Books 📕</Text>
      <BrowseItems Items={booksPosts} />
    </>
  );
}

const styles = StyleSheet.create({
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
