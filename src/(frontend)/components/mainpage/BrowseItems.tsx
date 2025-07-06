import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BrowserProps = {
  Items: any;
  Action?: any;
};

export const BrowseItems = (props: BrowserProps) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      horizontal
      data={props.Items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <Pressable
            onPress={() => {
              alert("Hi");
            }}
          >
            <Image
              source={{
                uri:
                  "https://res.cloudinary.com/theowl/image/upload/q_auto/f_auto/" +
                  item.images,
              }}
              style={styles.img}
            />
            <Text numberOfLines={2} style={styles.text}>
              {item.title}
            </Text>
          </Pressable>
          <View style={styles.box2}>
            <Text style={styles.text2}>{item.price}00/m</Text>
            <Pressable onPress={() => alert("Watchlist")}>
              <Image
                source={require("../../../../assets/images/watchlist.png")}
                style={{
                  width: 32,
                  height: 32,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              ></Image>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },
  box: {
    width: 135,
    height: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 12,
    marginRight: 10, 
  },
  box2: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    height: 39,
    width: 111,
    borderRadius: 10,
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  img: {
    width: 110,
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "black",
    alignSelf: "center",
    marginBottom: 6,
  },
  text: {
    fontFamily: "Rosarivo",
    fontSize: 14,
    textAlign: "center",
    color: "beige",
    textShadowColor: "black",
    textShadowRadius: 7,
    lineHeight: 14,
    marginBottom: 6,
  },
  text2: {
    fontSize: 14,
    textAlign: "left",
    color: "#FFFFFF",
    fontFamily: "Rosarivo",
  },
});
