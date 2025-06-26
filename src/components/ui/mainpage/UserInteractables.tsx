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
import libStar from "../../../../assets/images/lib-star.png";

const icons = [libStar, libHistory];
const UserInteractables = () => {
  const cards = [
    {
      id: 2,
      title: "Item Watchlist",
      icon: icons[0],
      press: "",
    },
    {
      id: 3,
      title: "Trade History",
      icon: icons[1],
      press: "",
    },
  ];
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {cards.map((props) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                alert("Hi");
              }}
            >
              <View key={props.id} style={styles.box}>
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
  },
  box: {
    height: 105,
    width: 95,
    backgroundColor: "rgba(112, 67, 65, 0.3)",
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    margin: 5,
  },
  txt: {
    fontFamily: "Rosarivo",
    fontSize: 16,
    color: "#EFE3C8",
    textAlign: "center",
    margin: 5,
  },
});
