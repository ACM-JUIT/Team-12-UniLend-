import React from "react";
import { StyleSheet, Text, View } from "react-native";

type UIProps = {
  data: any;
};

const UserInfo = (props: UIProps) => {
  return (
    <View>
      <Text style={styles.text}>@{props.data.username}</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Sold/Lent: {props.data.sales}</Text>
        <Text style={styles.text}>Mobile: {props.data.mobile}</Text>
        <Text style={styles.text}>Email: {props.data.email}</Text>
        <Text style={styles.text}>Hostel: {props.data.hostel}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#rgba(245, 245, 220, 0.2)",
    borderRadius: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "Amiri",
    lineHeight: 20,
    fontWeight: "regular",
    color: "#ffffff9a",
    fontSize: 16,
  },
});
