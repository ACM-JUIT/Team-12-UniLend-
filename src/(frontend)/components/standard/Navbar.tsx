import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type NavBarProps = {
  title: string;
};
export default function NavBar(props: NavBarProps) {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={openDrawer}>
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
            justifyContent: "center",
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    width: "90%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  text: {
    fontSize: 32,
    fontFamily: "Amiri",
    color: "rgba(245, 245, 220, 1)",
    justifyContent: "flex-start",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
