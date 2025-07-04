import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Drawer = createDrawerNavigator();

type NavBarProps = {
  title: String;
};
export default function NavBar(props: NavBarProps) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert("wow")}>
        <Image
          source={require("../../../../assets/images/hamburger.png")}
          style={{ height: 25, width: 25, marginTop: 8 }}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{props.title}</Text>
      <TouchableWithoutFeedback
        style={{
          marginTop: 12,
          width: "100%",
          flexGrow: 1,
          alignItems: "flex-end",
        }}
        onPress={() => alert("wow")}
      >
        <Image
          source={require("../../../../assets/images/search.png")}
          style={{
            height: 25,
            width: 25,
            marginTop: 13,
            alignSelf: "center",
          }}
        />
      </TouchableWithoutFeedback>
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
    gap: 10,
  },
  text: {
    fontSize: 32,
    fontFamily: "Amiri",
    color: "rgba(245, 245, 220, 1)",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
