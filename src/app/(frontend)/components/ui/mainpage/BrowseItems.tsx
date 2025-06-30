import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const HPImgTest = require("../../../../../../assets/images/harry-potter.png");
const BrowseItems = () => {
  const Items = [
    {
      id: 1,
      title: "Harry potter and sorcerer's stone",
      edit: "Lakshya's Version",
      img: HPImgTest,
    },
    {
      id: 2,
      title: "Harry potter and sorcerer's stone",
      edit: "Lakshya's Version",
      img: HPImgTest,
    },
    {
      id: 3,
      title: "Harry potter and sorcerer's stone",
      edit: "Lakshya's Version",
      img: HPImgTest,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        horizontal
        data={Items}
        renderItem={({ item }) => (
          <View style={styles.box} key={item.id}>
            <Pressable onPress={() => alert("Hi")}>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.text}>{item.title}</Text>
            </Pressable>
            <View style={styles.box2}>
              <Text style={styles.text2}>{item.id}00/m</Text>
              <Pressable onPress={() => alert("Watchlist")}>
                <Image
                  source={require("../../../../../../assets/images/watchlist.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  list: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },
  box: {
    width: 135,
    height: 230,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    marginRight: 19,
    padding: 12,
    gap: 5,
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
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    marginBottom: 3,
  },
  text: {
    fontFamily: "Rosarivo",
    fontSize: 14,
    textAlign: "left",
    color: "beige",
    textShadowColor: "black",
    textShadowRadius: 7,
  },
  text2: {
    fontSize: 16,
    textAlign: "left",
    color: "#FFFFFF",
  },
});
export default BrowseItems;
