import { Tag } from "@/src/api/firestore/tags";
import { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const CatScrollText = ({
  categories,
  setSelection,
  selectedCategory,
}: {
  categories: Tag[];
  setSelection: any;
  selectedCategory: Tag["slug"] & "home";
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const selectedIndex = categories.findIndex((category) => category.slug === selectedCategory);

    if (selectedIndex !== -1 || selectedCategory === "home") {
      const itemWidth = 100;
      const offset = selectedIndex * itemWidth;
      scrollViewRef.current?.scrollTo({
        x: offset, 
        y: 0,
        animated: true
      })
    }
  }, [selectedCategory, categories])

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            setSelection("home");
          }}
        >
          <Text
            style={
              selectedCategory === "home"
                ? styles.boxClicked
                : styles.boxUnClick
            }
          >
            Home
          </Text>
        </TouchableWithoutFeedback>
        {categories.map((category) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setSelection(category.slug);
              }}
              key={category.id}
            >
              <Text
                style={
                  category.slug === selectedCategory
                    ? styles.boxClicked
                    : styles.boxUnClick
                }
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
