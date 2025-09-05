import { Tag } from "@/src/api/firestore/tags";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const CatScrollImage = ({
  categories,
  setSelection,
}: {
  categories: Tag[];
  setSelection: any;
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableWithoutFeedback
            key={category.id}
            onPress={() => {
              setSelection(category.slug);
            }}
          >
            <View>
              {category.imageUrl && (
                <Image source={{ uri: category.imageUrl }} style={styles.box} />
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  box: {
    borderColor: "#f5f5dc53",
    borderWidth: 1,
    borderRadius: 10,
    color: "#F5F5DC",
    width: 309,
    height: 150,
    resizeMode: "cover",
    marginRight: 10,
  },
});
