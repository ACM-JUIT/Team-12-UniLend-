import { fetchItemsByCategory } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SmallPreview from "../standard/SmallPreview";

export function HomePageCategory({ category }: { category: string }) {
  const [posts, setPosts] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
        const categorySlug = category.split(" ").map(word => word.toLowerCase()).join("-")
      const items = await fetchItemsByCategory(categorySlug, "createdAt", -1);
      setPosts(items);
    };
    fetchItems();
  }, [category]);
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "white",
          textDecorationLine: "underline",
          marginBlock: 50
        }}
      >
        {category}
      </Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        {posts.length > 0 ? (
          posts.map((item) => {
            return (
              <SmallPreview
                key={item.id}
                title={item.title}
                images={item.images}
                price={item.price}
              />
            );
          })
        ) : (
        <Text style={{ fontSize: 38, color: "coral", borderColor: "coral", borderWidth: 2, padding: 10 }}>No items found :(</Text>
        )}
      </View>
    </View>
  );
}
