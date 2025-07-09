// to open specific book page using bookid
import BottomButtons from "@/src/(frontend)/components/detailspage/bottomButtons";
import ItemDetails from "@/src/(frontend)/components/detailspage/ItemDetails";
import TopActions from "@/src/(frontend)/components/detailspage/TopActions";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import { fetchItem } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { useAuth } from "@/src/context/AuthContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Productpage() {
  const { itemId } = useLocalSearchParams();
  const [item, setItem] = useState<Item | null>(null);

  const {user} = useAuth()

  useEffect(() => {
    const handleFetch = async () => {
      if (!user) {
        console.error("User isn't signed up");
        return;
      }
      try {
        const itemDetails = await fetchItem(itemId as string);
        setItem(itemDetails);
      } catch (e) {
        console.error("Error getting item details", e);
      }
    };
    handleFetch();
  }, [itemId, user]);

  if (typeof itemId === "object") {
    return (
      <SafeAreaView style={styles.container}>
        <Text className="text-white text-2xl text-center">
          Only pass 1 itemId in URL
        </Text>
      </SafeAreaView>
    );
  }

  if (!item || !user) {
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
        <TopActions userId={user.uid} itemId={itemId} />
        <ItemDetails item={item} />
        <BottomButtons callbfunc={() => alert("Hello")} />
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
