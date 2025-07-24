import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import Browse from "@/src/(frontend)/components/userprofile/Browse";
import ProfileImg from "@/src/(frontend)/components/userprofile/pfp";
import UserInfo from "@/src/(frontend)/components/userprofile/userinfo";
import { getUserProfile } from "@/src/api/firestore/user";
import { getAuth } from "@react-native-firebase/auth";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function UserProfile() {
  const user = getAuth().currentUser;

  const [profile, setProfile] = useState({
    name: "",
    username: "",
    sales: 0,
    hostel: "",
    mobile: "",
    email: "",
    photoURL: "",
  });

  useFocusEffect(
    useCallback(() => {
      const fetchprofile = async () => {
        if (!user) return;
        try {
          const data = await getUserProfile(user.uid);
          if (!data) {
            console.error("No user profile found");
            return;
          }
          console.log(data);
          setProfile({
            name: typeof data?.name === "string" ? data?.name : "",
            username: typeof data?.username === "string" ? data?.username : "",
            sales: typeof data?.sales === "number" ? data?.sales : 0,
            hostel: typeof data?.hostel === "string" ? data?.hostel : "Not added",
            mobile: typeof data?.mobile === "string" ? data?.mobile : "Not added",
            email: typeof data?.email === "string" ? data?.email : "",
            photoURL:
              typeof data?.photoURL === "string" && data?.photoURL
                ? data?.photoURL
                : "https://cdn.wallpapersafari.com/34/0/NrOWJ1.jpg",
          });
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      };

      fetchprofile();
    }, [])
  );
  return (
    <View style={styles.container}>
      <NavBar title={profile.name || "Your profile"} />
      <BackButton />
      {/* Use the image prop below to push the user image, it has a default image */}
      <ProfileImg image={profile.photoURL} />
      <UserInfo data={profile} />
      <Browse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 10,
    gap: 10,
  },
});

let datatest = {
  name: "Lakshya Walia",
  username: "lakshyawalia01",
  sales: 4,
  hostel: "H10-R4",
  mobile: "+46465455X",
  email: "lakshya2332@juitsolan.in",
};
