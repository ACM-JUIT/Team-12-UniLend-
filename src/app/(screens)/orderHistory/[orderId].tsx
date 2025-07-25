// to open specific book page using bookid
import ItemDetails from "@/src/(frontend)/components/detailspage/ItemDetails";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import {
  fetchOrderItem,
} from "@/src/api/firestore/items";
import { addOrder } from "@/src/api/firestore/order";
import { Item } from "@/src/api/firestore/post";
import { useAuth } from "@/src/context/AuthContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const buyItem = async (item: Item, userId: string) => {
  try {
    await addOrder(item, userId);
    Alert.alert(
      "Success",
      "Order successfully added. You can view the orders page"
    );
  } catch (error) {
    Alert.alert("Error", String(error));
  }
};

export default function OrderPage() {
  const { orderId } = useLocalSearchParams();
  const [item, setItem] = useState<Item | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    const handleFetch = async () => {
      console.log("testing")
      if (!user) {
        console.error("User isn't signed up");
        return;
      }
      try {
        const itemDetails = await fetchOrderItem(orderId as string);
        console.log(itemDetails)
        setItem(itemDetails);
      } catch (e) {
        console.error("Error getting item details", e);
      }
    };
    handleFetch();
  }, [orderId, user]);


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
        <ItemDetails item={item} />
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
