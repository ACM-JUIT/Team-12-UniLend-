import ActionButton from "@/src/(frontend)/components/profileEditor/ActionButton";
import ImgField from "@/src/(frontend)/components/profileEditor/ImageField";
import InputField from "@/src/(frontend)/components/profileEditor/InputField";
import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import {
  getUserProfile,
  updateUserProfile,
  UserProfile,
} from "@/src/api/firestore/user";
import { getAuth } from "@react-native-firebase/auth";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function EditProfile() {
  const user = getAuth().currentUser;

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [hostel, setHostel] = useState("");
  const [address, setAddress] = useState("");

  useFocusEffect(
    useCallback(() => {
      const fetchUserProfile = async () => {
        if (!user) return;
        try {
          const profile: UserProfile = await getUserProfile(user.uid);
          setUserName(profile.username || "");
          setEmail(profile.email || "");
          setMobile(profile.mobile || "");
          setHostel(profile.hostel || "");
          setAddress(profile.address || "");
        } catch (error) {
          console.error("Failed to fetch profile: ", error);
        }
      };

      fetchUserProfile();
    }, [])
  );

  const handleSave = async () => {
    if (!user) return;
    try {
      await updateUserProfile(user.uid, {
        username,
        email,
        mobile,
        hostel,
        address,
      });
      Alert.alert("Success", "Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      Alert.alert("Error", "Could not update profile");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar title={"Edit Profile"} />
      <BackButton />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollV}>
        <View style={styles.box}>
          {/* {Make this imgField use the prop image to push original user image} */}
          <ImgField />
          {/* Make the placeholders pull current user's data. */}
          <InputField
            currentVal={username}
            heading="Username"
            callback={setUserName}
          />
          <InputField currentVal={email} heading="Email" callback={setEmail} />
          <InputField
            currentVal={mobile}
            heading="Mobile"
            callback={setMobile}
          />
          <InputField
            currentVal={hostel}
            heading="Hostel & Room No."
            callback={setHostel}
          />
          <InputField
            currentVal={address}
            heading="Address"
            callback={setAddress}
            multil={true}
          />
        </View>
      </ScrollView>
      <ActionButton callback={handleSave} />
    </SafeAreaView>
  );
}

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
