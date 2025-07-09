// to open specific book page using bookid
import BottomButtons from "@/src/(frontend)/components/detailspage/bottomButtons";
import ItemDetails from "@/src/(frontend)/components/detailspage/ItemDetails";
import TopActions from "@/src/(frontend)/components/detailspage/TopActions";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import { fetchItem } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUserWatchList,addToWatchlist,removeFromWatchList } from "@/src/api/firestore/watchlist";
import auth from "@react-native-firebase/auth";

export default function Productpage() {
  const { itemId } = useLocalSearchParams();
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [SOopen, setSOopen] = useState<boolean>(false);
  const [isSaved,setIsSaved] = useState<boolean>(false);

  const userId = auth().currentUser?.uid;
  
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const itemDetails = await fetchItem(itemId as string);
        setItem(itemDetails);

        if(userId && itemId) {
          const saved = await getUserWatchList(userId);
          setIsSaved(true);
        }
      } catch (e) {
        console.error("Error getting item details", e);
      }
    };
    handleFetch();
  } ,[itemId,userId]);

  const toggleWatchList = async () => {
    if(!userId || !itemId ) return;

    try {
      if(isSaved) {
        await removeFromWatchList(userId,itemId as string);
        setIsSaved(false);
      } else {
        await addToWatchlist(userId, itemId as string);
        setIsSaved(true);
      }
    } catch (error) {
      console.error("Failed to toggle watchlist: ",error);
    }
  };
  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <Text className="text-white text-2xl text-center">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <NavBar title="Like It?" />
        <TopActions 
        backFunc={router.back} 
        itemId={itemId as string} 
        isSaved={isSaved}
        toggleWatchlist= {toggleWatchList}
        watchBut={setSOopen}
        />
        <ItemDetails item={item} />
        <BottomButtons callbfunc={() => alert("Hello")} />
        <StandardOverlay
          Activated={SOopen}
          Controller={setSOopen}
          title="Add to WatchList!"
          text={
            "Would you Like to add this to your watchlist?"
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
  },
});
