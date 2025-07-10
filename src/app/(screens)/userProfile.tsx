import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import Browse from "@/src/(frontend)/components/userprofile/Browse";
import ProfileImg from "@/src/(frontend)/components/userprofile/pfp";
import UserInfo from "@/src/(frontend)/components/userprofile/userinfo";
import React from "react";
import { StyleSheet, View } from "react-native";

let datatest = {
  name: "Lakshya Walia",
  username: "lakshyawalia01",
  sales: 4,
  hostel: "H10-R4",
  mobile: "+46465455X",
  email: "lakshya2332@juitsolan.in",
};

const userProfile = () => {
  return (
    <View style={styles.container}>
      <NavBar title={datatest.name} />
      <BackButton />
      {/* Use the image prop below to push the user image, it has a default image */}
      <ProfileImg />
      <UserInfo data={datatest} />
      <Browse />
    </View>
  );
};

export default userProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 10,
    gap: 10,
  },
});
