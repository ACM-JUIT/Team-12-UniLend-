
import { Tag } from "@/src/api/firestore/tags";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const CatScrollText = ({ categories, setSelection }: { categories: Tag[], setSelection: any }) => {
  const [selectedId, setSelectedId] = useState<string>("home");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
         <TouchableWithoutFeedback
              onPress={() => {
                setSelectedId("home")
                setSelection("home");
              }}
            >
              <Text
                style={selectedId === "home" ? styles.boxClicked : styles.boxUnClick}
              >
                Home
              </Text>
            </TouchableWithoutFeedback>
        {categories.map((category) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setSelectedId(category.id)
                setSelection(category.slug);
              }}
              key={category.id}
            >
              <Text
                style={category.id === selectedId ? styles.boxClicked : styles.boxUnClick}
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
