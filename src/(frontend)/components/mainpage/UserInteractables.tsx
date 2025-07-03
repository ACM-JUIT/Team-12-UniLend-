import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import libHistory from "../../../../assets/images/lib-history.png";
import libAdd from "../../../../assets/images/lib-listing.png";
import libStar from "../../../../assets/images/lib-star.png";
const icons = [libStar, libHistory, libAdd];
const UserInteractables = ({ setSelection }: { setSelection: any }) => {
  const cards = [
    {
      id: 1,
      title: "Item Watchlist",
      icon: icons[0],
      press: "",
    },
    {
      id: 2,
      title: "Trade History",
      icon: icons[1],
      press: "",
    },
    {
      id: 3,
      title: "Add Listing!",
      icon: icons[2],
      press: "",
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {cards.map((props) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                alert("Hi");
                setSelection(cards);
                router.replace("/(screens)/CreateListing");
              }}
              key={props.id}
            >
              <View style={styles.box}>
                <Text style={styles.txt}>{props.title}</Text>
                <Image style={styles.img} source={props.icon} />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default UserInteractables;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
    gap: 5,
  },
  box: {
    height: 105,
    width: 95,
    backgroundColor: "rgba(112, 67, 65, 0.3)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 3,
    borderColor: "beige",
    borderWidth: 0.1,
  },
  img: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    shadowRadius: 20,
    shadowColor: "black",
  },
  txt: {
    fontFamily: "Rosarivo",
    fontSize: 16,
    color: "#EFE3C8",
    textAlign: "center",
    margin: 5,
    textShadowColor: "black",
    textShadowRadius: 20,
  },
});
