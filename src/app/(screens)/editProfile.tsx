import ActionButton from "@/src/(frontend)/components/profileEditor/ActionButton";
import ImgField from "@/src/(frontend)/components/profileEditor/ImageField";
import InputField from "@/src/(frontend)/components/profileEditor/InputField";
import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const editProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Edit Profile"} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollV}>
        <View style={styles.box}>
          <BackButton />
          {/* {Make this imgField use the prop image to push original user image} */}
          <ImgField />
          {/* Make the placeholders pull current user's data. */}
          <InputField
            placehldr="Lakshya Walia"
            heading="Username"
            callback={() => alert("Test1")}
          />
          <InputField
            placehldr="lakshya@catmail.gg"
            heading="Email"
            callback={() => alert("Test1")}
          />
          <InputField
            placehldr="9993030X"
            heading="Mobile"
            callback={() => alert("Test1")}
          />
          <InputField
            placehldr="H10-R4"
            heading="Hostel & Room No."
            callback={() => alert("Test1")}
          />
          <InputField
            placehldr="Why you wanna know"
            heading="Address"
            callback={() => alert("Test1")}
            multil={true}
          />
        </View>
      </ScrollView>
      <ActionButton />
    </SafeAreaView>
  );
};

export default editProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    padding: 20,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    gap: 5,
  },
  scrollV: {
    height: "100%",
    gap: 40,
  },
  box: {
    height: "100%",
    gap: 10,
  },
});
