import TypeDropDown from "@/src/(frontend)/components/listing/TypeDropDown";
import Filtering from "@/src/(frontend)/components/searchpage/Filtering";
import SearchBar from "@/src/(frontend)/components/searchpage/SearchBar";
import Line from "@/src/(frontend)/components/standard/Line";
import SmallPreview from "@/src/(frontend)/components/standard/SmallPreview";
import { fetchItemByQuery } from "@/src/api/firestore/items";
import { Item } from "@/src/api/firestore/post";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  const [showTypeDropdown, setShowTypeDropdown] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("");

  useEffect(() => {
    const resetStates = () => {
      setSearchQuery("");
      setSearchResults([]);
      setShowTypeDropdown(false);
      setFilterType("");
    };
    resetStates();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const { success, data, error } = await fetchItemByQuery(
        searchQuery,
        filterType
      );

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
      <Filtering
        handleTypeDropDown={() => {
          if (!showTypeDropdown === false) {
            setFilterType("");
          }
          setShowTypeDropdown(!showTypeDropdown);
        }}
      />

      <View
        style={{
          maxHeight: 40,
        }}
      >
        {showTypeDropdown && (
          <TypeDropDown
            handleClick={(categoryType: string) => {
              setFilterType(categoryType);
            }}
            selectedId={filterType}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
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
          <View
            style={{ justifyContent: "center", width: "100%", marginTop: 30 }}
          >
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
