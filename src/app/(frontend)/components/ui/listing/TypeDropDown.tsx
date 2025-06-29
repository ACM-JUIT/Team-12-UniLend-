import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
const CatTextSelector = () => {
  const categories = [
    { id: 1, name: "Books" },
    { id: 2, name: "Calculators" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Lab Equipment" },
    { id: 6, name: "Room Essentials" },
    { id: 7, name: "Stationery" },
    { id: 8, name: "Apparel" },
    { id: 9, name: "Misc" },
  ];
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {categories.map((category) => {
          const [Clicked, setClicked] = useState(false);
          return (
            <TouchableWithoutFeedback
              onPress={() => setClicked(!Clicked)}
              key={category.id}
            >
              <Text
                key={category.id}
                style={Clicked ? styles.boxClicked : styles.boxUnClick}
              >
                {category.name}
              </Text>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CatTextSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  boxClicked: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderColor: "#F5F5DC",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#F5F5DC",
    fontFamily: "Rosarivo",
  },
  boxUnClick: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderColor: "#F5F5DC",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    color: "#F5F5DC",
    fontFamily: "Rosarivo",
  },
});
