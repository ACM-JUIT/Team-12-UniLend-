import { fetchItemsByCategory } from "@/src/api/firestore/items";
import { useEffect, useState } from "react";

import { StyleSheet, Text } from "react-native";
import { BrowseItems } from "./BrowseItems";
import { UserInteractables } from "./UserInteractables";

import { Item } from "@/src/api/firestore/post";

export function HomePageDefault({
  refreshing,
  onRefreshComplete,
}: {
  refreshing: boolean;
  onRefreshComplete: (refreshComplete: boolean) => void;
}) {
  const [newPosts, setNewPosts] = useState<Item[]>([]);
  const [popularPosts, setPopularPosts] = useState<Item[]>([]);
  const [electronicsPosts, setElectronicsPosts] = useState<Item[]>([]);
  const [booksPosts, setBooksPosts] = useState<Item[]>([]);

  const fetchCategorizedPosts = async () => {
    const [newItems, popularItems, electronicsItems, booksItems] =
      await Promise.all([
        fetchItemsByCategory(),
        fetchItemsByCategory(undefined, "viewcount"),
        fetchItemsByCategory("electronics"),
        fetchItemsByCategory("books"),
      ]);

    setNewPosts(newItems);
    setPopularPosts(popularItems);
    setElectronicsPosts(electronicsItems);
    setBooksPosts(booksItems);
  };

  useEffect(() => {
    fetchCategorizedPosts();
  }, []);

  useEffect(() => {
    const refresh = async () => {
      try {
        await fetchCategorizedPosts();
        onRefreshComplete(true);
      } catch (error) {
        console.error("HomePageDefault refresh failed ", error);
      }
    };
    refresh();
  }, [refreshing, onRefreshComplete]);

  return (
    <>
      <Text style={styles.heading1}>Library</Text>
      <UserInteractables />

      <Text style={styles.heading1}>New Stuff</Text>
      <BrowseItems items={newPosts} />

      <Text style={styles.heading1}>Popular Stuff</Text>
      <BrowseItems items={popularPosts} />

      <Text style={styles.heading1}>Electronics</Text>
      <BrowseItems items={electronicsPosts} />

      <Text style={styles.heading1}>Books</Text>
      <BrowseItems items={booksPosts} />
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
