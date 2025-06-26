import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Drawer = createDrawerNavigator();

export default function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert("wow")}>
        <Image
          source={require("../../../../assets/images/hamburger.png")}
          style={{ height: 25, width: 25, marginTop: 8 }}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>UniLend</Text>
      <View style={{ width: "45%", marginTop: 12 }}>
        <TouchableWithoutFeedback onPress={() => alert("wow")}>
          <Image
            source={require("../../../../assets/images/search.png")}
            style={{ height: 25, width: 25, alignSelf: "flex-end" }}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 32,
    fontFamily: "Amiri",
    color: "rgba(245, 245, 220, 1)",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
