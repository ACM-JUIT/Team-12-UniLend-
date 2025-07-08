import testimage from "@/assets/images/harry-potter.png";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import WidePreview from "@/src/(frontend)/components/standard/WidePreview";
import React, {useEffect,useState }from "react";
import { Text,FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import auth from "@react-native-firebase/auth"
import {getItemDetails,getUserWatchList } from "@/src/api/firestore/watchlist";


type watchlistItem = {
  id: string;
  title: string;
  price: string;
  isForLending: boolean;
  lendDate: string;
  dueDate: string;
  purchaseDate: string;
  image?: string;
};

const itemWatchlist = () => {
  const [itemslist,setItemsList] = useState<any[]>([]);
  const [loading,setloading] = useState(true);

  useEffect (() => {
    const fetchwatchlist = async () => {
      try {
        const userId = auth().currentUser?.uid;
        if(!userId) throw new Error("User not Logged in");

        const itemId: string[] = await getUserWatchList(userId);

        const fetchedItems = await Promise.all(
          itemId.map(async(itemId) => {
            const data = await getItemDetails(itemId);
            if(!data) return null;

            let bottomtxt = "";
            if(data.isForLending) {
              const lendDate = data.lendDate || "N/A";
              const dueDate = data.dueDate;
              bottomtxt = `Lended on ${lendDate}`;

              if(dueDate) {
                const due = new Date(dueDate);
                const now = new Date();
                const diff = (due.getTime() - now.getTime()) / (1000*60*60*24);
                if(diff <= 3) {
                  bottomtxt += `. Due on ${dueDate}`;
                }
              }
            } else {
              bottomtxt = `Purchased on ${data.purchaseDate || "N/A"}`;
            }

            return {
              id: itemId,
              image: data.image || testimage,
              title: data.title,
              middletxt:`${data.price}/m`,
              bottomtxt,
              callback: () => alert(`Clicked on ${data.title}`),
            };
          })
        );

        setItemsList(fetchedItems);
        setloading(false);
      } catch(error) {
        console.error("Failed to fetch watchlist: ",error);
        setloading(false);
      }
    };
    fetchwatchlist();
  })
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Watchlist"} />
      {loading ? (
        <Text style = {{color:'white',textAlign:'center'}}>Loading...</Text>
      ):(
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={{ height: 10 }} />;
        }}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        data={itemslist}
        renderItem={({ item }) => <WidePreview item={item} />}
      />
      )}
    </SafeAreaView>
  );
};

export default itemWatchlist;

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
