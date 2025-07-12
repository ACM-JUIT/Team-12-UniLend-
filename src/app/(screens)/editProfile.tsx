import ActionButton from "@/src/(frontend)/components/profileEditor/ActionButton";
import ImgField from "@/src/(frontend)/components/profileEditor/ImageField";
import InputField from "@/src/(frontend)/components/profileEditor/InputField";
import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import React,{useEffect,useState} from "react";
import { SafeAreaView, StyleSheet, View,Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth } from "@react-native-firebase/auth";
import { getUserProfile,updateUserProfile } from "@/src/api/firestore/user";


export default function EditProfile() {
  const user = getAuth().currentUser;

  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [hostel,setHostel] = useState("");
  const [address,setAddress] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if(!user) return;
      try{
        const profile = await getUserProfile(user.uid);
        setUserName(profile.username || "");
        setEmail(profile.email || "");
        setMobile(profile.mobile || "");
        setHostel(profile.hostel || "");
        setAddress(profile.address || "");
      } catch(error) {
        console.error("Failed to fetch profile: ",error);
      }
    };

    fetchUserProfile();
  });

  const handleSave = async () => {
    if(!user) return;
    try{
      await updateUserProfile(user.uid, {
        username,
        email,
        mobile,
        hostel,
        address,
      });
      Alert.alert("Success","Profile updated successfully!");
    } catch(error) {
      console.error("Error updating profile: ",error);
      Alert.alert("Error","Could not update profile");
    }
  };

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
            placehldr= {username}
            heading="Username"
            callback={setUserName}
          />
          <InputField
            placehldr={email}
            heading="Email"
            callback={setEmail}
          />
          <InputField
            placehldr={mobile}
            heading="Mobile"
            callback={setMobile}
          />
          <InputField
            placehldr= {hostel}
            heading="Hostel & Room No."
            callback={setHostel}
          />
          <InputField
            placehldr= {address}
            heading="Address"
            callback={setAddress}
            multil={true}
          />
        </View>
      </ScrollView>
      <ActionButton callback = {handleSave}/>
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
