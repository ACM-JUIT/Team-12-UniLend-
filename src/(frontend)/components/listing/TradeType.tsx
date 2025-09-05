import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface TradeOption {
  id: number;
  name: string;
  slug: "sell" | "lend" | "both";
}

const tradeOptions: TradeOption[] = [
  { id: 1, name: "Sell", slug: "sell" },
  { id: 2, name: "Lend", slug: "lend" },
  { id: 3, name: "Both", slug: "both" },
];
const TradeType = ({
  handleTypeChange,
  selectedType
}: {
  handleTypeChange: (type: string) => void;
  selectedType: TradeOption["slug"];
}) => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {tradeOptions.map((category) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                handleTypeChange(category.slug);
              }}
              key={category.id}
            >
              <Text
                style={
                  category.slug === selectedType
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

export default TradeType;

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
