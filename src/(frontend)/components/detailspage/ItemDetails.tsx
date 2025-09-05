import { Item } from "@/src/api/firestore/post";
import { getUserProfile } from "@/src/api/firestore/user";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const ItemDetails = ({ item }: { item: Item }) => {
  const [expanded, setExpanded] = useState(false);
  const [seller, setSeller ] = useState<any>();

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        console.log(item.ownerId)
        const seller = await getUserProfile(item.ownerId);
        setSeller(seller);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSeller();
  }, [item.ownerId])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.imgUploaded}
          source={{
            uri:
              "https://res.cloudinary.com/theowl/image/upload/q_auto/f_auto/" +
              item.images,
          }}
        />
        <View style={styles.texts}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.pub}>
            Seller: {seller?.username ? seller.username : "Rowlet"}
          </Text>
          <Text style={styles.itemtag}>{item.category}</Text>
          <TouchableHighlight
            style={{ flexDirection: "row" }}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <View style={{ gap: 2 }}>
              <Text style={styles.itemdisc} numberOfLines={expanded ? 0 : 2}>
                {item.description}
              </Text>
              <Text style={styles.readmore}>
                {expanded ? "Read less (click-me)" : "Read more (click-me)"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  imgUploaded: {
    height: 318,
    width: 207,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  title: {
    fontSize: 21,
    fontFamily: "Amiri",
    textAlign: "center",
    color: "#F5F5DC",
    textTransform: "capitalize",
    lineHeight: 26,
    width: 220,
  },
  pub: {
    textTransform: "uppercase",
    fontFamily: "Rosarivo",
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  texts: {
    alignItems: "center",
    gap: 4,
  },
  itemtag: {
    fontFamily: "Rosarivo",
    fontSize: 12,
    textTransform: "capitalize",
    lineHeight: 14,
    color: "#FFFFFF",
  },
  itemdisc: {
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
    textOverflow: "",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  readmore: {
    color: "beige",
    textAlign: "right",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
