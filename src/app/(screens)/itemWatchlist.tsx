import NavBar from "@/src/(frontend)/components/standard/Navbar";
import WidePreview from "@/src/(frontend)/components/standard/WidePreview";
import { fetchItem } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import {
  getUserWatchlist
} from "@/src/api/firestore/watchlist";
import { useAuth } from "@/src/context/AuthContext";
import { RelativePathString } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ItemWatchlist = () => {
  const {user} = useAuth()

  const [watchListItems, setWatchListItems] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWatchList = async () => {
      if (!user) {
        console.error("User not authenticated in fetchWatchList function")
        return
      }
      try {
        setLoading(true);
        const watchlist = await getUserWatchlist(user.uid);
        const items = await Promise.all(watchlist.map(id => fetchItem(id)));

        const validItems = items.filter((item) => item !== null); // the backend sends null for items that doesn't exist
        if (validItems.length === 0) {
          throw new Error("No watchlist exist!")
        }
        setWatchListItems(validItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching watchLists", error);
      }
    }
    fetchWatchList();
  }, [user])

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "white", textAlign: "center", marginTop: 50 }}>
          User not authenticated
        </Text>
      </SafeAreaView>
    );
  }



  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Watchlist"} />
      {loading ? (
        <Text style={{ color: "white", textAlign: "center" }}>Loading...</Text>
      ) : (
        <FlatList
          ItemSeparatorComponent={() => {
            return <View style={{ height: 10 }} />;
          }}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          data={watchListItems}
          renderItem={({ item }) => <WidePreview title={item.title} middleText={item.type === "sell" ?  item.price + "/-" : item.price + "/m"} bottomText="" imageId={item.images as string} buttonLink={`/inventory/${item.id }` as RelativePathString} />}
        />
      )}
    </SafeAreaView>
  );
};

export default ItemWatchlist;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1C161E",
    padding: 10,
  },
  scroll: {
    gap: 10,
  },
});
