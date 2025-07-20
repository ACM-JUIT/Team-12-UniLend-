import Filtering from "@/src/(frontend)/components/searchpage/Filtering";
import SearchBar from "@/src/(frontend)/components/searchpage/SearchBar";
import Line from "@/src/(frontend)/components/standard/Line";
import SmallPreview from "@/src/(frontend)/components/standard/SmallPreview";
import { fetchItemByQuery } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  useFocusEffect(
    useCallback(() => {
      const resetStates = () => {
        setSearchQuery("");
        setSearchResults([]);
      };
      resetStates();
    }, [])
  );

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const { success, data, error } = await fetchItemByQuery(searchQuery);

      if (success === false) {
        throw error;
      }

      if (!data) {
        return;
      }

      setSearchResults(data);
    } catch (error) {
      Alert.alert("Error", String(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearch}
      />
      <Line />
      <Filtering />
      <Line />
      <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        {searchResults.length > 0 ? (
          searchResults.map((item) => {
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
          <Text
            style={{
              fontSize: 38,
              color: "coral",
              borderColor: "coral",
              borderWidth: 2,
              padding: 10,
            }}
          >
            No items found :(
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 15,
  },
});
