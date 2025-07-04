import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
type TAProps = {
  backFunc: any;
  itemId: any;
  watchBut: any;
};
// const [SOopen, setSOopen] = useState(false);
const TopActions = (props: TAProps) => {
  return (
    <View style={styles.topactions}>
      <TouchableOpacity onPress={props.backFunc}>
        <Image
          style={styles.backimage}
          source={require("../../../../assets/images/ProductInfo/prod-back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.watchBut(true)}>
        <Image
          style={styles.watchlist}
          source={require("../../../../assets/images/watchlist.png")}
        />
      </TouchableOpacity>
      {/* <StandardOverlay
        Activated={SOopen}
        Controller={setSOopen}
        title={"Alert!"}
        text={
          "This is a temporary alert, we will later make it run a function to watchlist item using the id."
        }
      /> */}
    </View>
  );
};

export default TopActions;

const styles = StyleSheet.create({
  topactions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backimage: {
    width: 35.2,
    height: 32.7,
  },
  watchlist: {
    width: 32,
    height: 32,
  },
});
