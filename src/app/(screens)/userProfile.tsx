import NavBar from "@/src/(frontend)/components/standard/Navbar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type upProps = {
  data: any;
};

let datatest = {
  name: "Lakshya Walia",
  username: "lakshyawalia01",
  sales: 4,
  hostel: "H10-R4",
  mobile: "+46465455X",
  email: "lakshya2332@juitsolan.in",
};

const userProfile = (props = datatest) => {
  return (
    <View style={styles.container}>
      <NavBar title={props.username} />
      <Text>userProfile</Text>
    </View>
  );
};

export default userProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
  },
});
