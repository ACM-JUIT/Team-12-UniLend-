import { fetchItemsByCategory } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { Tag } from "@/src/api/firestore/tags";
import { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SmallPreview from "../standard/SmallPreview";

export function HomePageCategory({
  selectedCategory,
  categories,
  refreshing,
  onRefreshComplete,
}: {
  selectedCategory: string;
  categories: Tag[];
  refreshing: boolean;
  onRefreshComplete: (refreshComplete: boolean) => void;
}) {
  const [posts, setPosts] = useState<Item[]>([]);

  const selectedCategoryObj = categories.find(
    (c) => c.slug === selectedCategory
  );
  const categoryName = selectedCategoryObj?.name;
  const imageLink = selectedCategoryObj?.imageUrl;

  const fetchItems = useCallback(async () => {
    const categorySlug = selectedCategory
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
    const items = await fetchItemsByCategory(categorySlug, "createdAt", -1);
    setPosts(items);
  }, [selectedCategory]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    const refresh = async () => {
      try {
        await fetchItems();
        onRefreshComplete(true);
      } catch (error) {
        console.error("HomePageCategory refresh failed ", error);
      }
    };
    refresh();
  }, [refreshing, onRefreshComplete, fetchItems]);

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
          textDecorationLine: "underline",
          marginTop: 30,
          marginBottom: 50,
        }}
      >
        {imageLink ? (
          <Image source={{ uri: imageLink }} style={styles.box} />
        ) : (
          categoryName
        )}
      </Text>

      <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        {posts.length > 0 ? (
          posts.map((item) => {
            return (
              <SmallPreview
                key={item.id}
                itemId={item.id}
                title={item.title}
                images={item.images}
                price={item.price}
              />
            );
          })
        ) : (
          <View style={{ justifyContent: "center", width: "100%" }}>
            <Text
              style={{
                fontSize: 18,
                color: "beige",
                textAlign: "center",
                fontFamily: "Rosarivo",
                fontWeight: "semibold",
              }}
            >
              No items found :(
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
