import testimage from "@/assets/images/harry-potter.png";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import WidePreview from "@/src/(frontend)/components/standard/WidePreview";
import React,{useEffect,useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { getFirestore,doc,getDoc,updateDoc,arrayUnion } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth"

export const addToTradeHistory = async (userId: string, itemId: string) => {
  const db = getFirestore();
  const userRef = doc(db, "Users", userId);
  await updateDoc(userRef, {
    tradeHistory: arrayUnion(itemId),
  });
};

const tradeHistory = () => {
  const [trades,setTrades] = useState<any[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetchTradeHistory();
  })

  const fetchTradeHistory = async () => {
    try{
      const userId = auth().currentUser?.uid;
      if(!userId) throw new Error("User not Logged in");

      const db = getFirestore();
      const userRef = doc(db,"Users",userId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      const tradeIds: string[] = userData?.tradeHistory || [];

      const fetchedTrades = await Promise.all(
        tradeIds.map(async (itemId) => {
          const itemRef = doc(db,"items",itemId);
          const itemSnap = await getDoc(itemRef);
          if(!itemSnap.exists()) return null;

          const data = itemSnap.data();
          if(!data) return null;

          const bottomtxt = data.isForLending
          ?`Lended on ${data.tradeDate ||"N/A"}`
          :`Purchased on ${data.tradeDate || "N/A"}`;

          return {
            id: itemId,
            title: data.title,
            image: data.image || testimage,
            middletxt: `${data.price}/m`,
            bottomtxt,
            callback: () => alert(`Viewing ${data.title}`),
          };
        })
      );

      setTrades(fetchedTrades.filter(Boolean));
    } catch(error) {
      console.error("Failed to fetch trade history:",error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Trade History"} />
      {loading ? (
        <text style = {styles.container}>Loading...</text>
      ) :  trades.length === 0 ? (
        <text style = {styles.container}>No Trade History Found </text>
      ) : (
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={{ height: 10 }} />;
        }}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        data={trades}
        renderItem={({ item }) => <WidePreview item={item} />}
        keyExtractor={(item) => item.id}
      />
       )}
    </SafeAreaView>
  );
};

export default tradeHistory;

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

//Some test itemsss
const itemslist = [
  {
    id: 1,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 2,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 3,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 4,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 5,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 6,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
  {
    id: 7,
    image: testimage,
    title: "Harry Potter and the philospher's stone",
    middletxt: "122/m",
    bottomtxt: "Lended on 12 November 2024",
    callback: () => alert("Hello"),
    // add a check here so that it can differentiate between is it a lending message or purchase, we can add a due message if item is due soon.
  },
];
