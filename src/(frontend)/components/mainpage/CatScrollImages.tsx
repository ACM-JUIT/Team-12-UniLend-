import { getActiveTags, Tag } from "@/src/api/firestore/tags";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CatScrollImage = ({ setSelection }: { setSelection: any }) => {
  const [categories, setCategories] = useState<Tag[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await getActiveTags();
        setCategories(tags);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    };

    fetchTags();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableWithoutFeedback
            key={category.id}
            onPress={() => {
              setSelectedId(category.id);
              setSelection(category.name);
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

export default CatScrollImage;

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
