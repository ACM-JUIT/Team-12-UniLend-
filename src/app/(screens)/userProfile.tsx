import BackButton from "@/src/(frontend)/components/standard/BackButton";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import Browse from "@/src/(frontend)/components/userprofile/Browse";
import ProfileImg from "@/src/(frontend)/components/userprofile/pfp";
import UserInfo from "@/src/(frontend)/components/userprofile/userinfo";
import React,{useEffect,useState} from "react";
import { StyleSheet, View,Alert,Button } from "react-native";
import { getUserProfile, updateUserProfile } from "@/src/api/firestore/user";
import { getAuth } from "@react-native-firebase/auth";
import { uploadImage } from "@/src/api/cloudinary";
import * as ImagePicker from "expo-image-picker";

export default function UserProfile() {
  const user = getAuth().currentUser;

  const [profile,setProfile] = useState({
    name: "",
    username: "",
    sales: 0,
    hostel: "",
    mobile: "",
    email: "",
    photoURL: "",
  });

  const [loading,setLoading] = useState(true);

    useEffect(() => {
      const fetchprofile = async () => {
        if(!user) return;
        try{
          const data = await getUserProfile(user.uid);
          setProfile({
          name: typeof data.name === "string" ? data.name : "",
          username: typeof data.username === "string" ? data.username : "",
          sales: typeof data.sales === "number" ? data.sales : 0,
          hostel: typeof data.hostel === "string" ? data.hostel : "",
          mobile: typeof data.mobile === "string" ? data.mobile : "",
          email: typeof data.email === "string" ? data.email : "",
          photoURL: typeof data.photoURL === "string" ? data.photoURL : "",
          });
        } catch (error) {
          console.error("Failed to fetch profile:",error);
        } finally {
          setLoading(false);
        }
      };

      fetchprofile();
    });

    const handeprofilepicture = async () => {
      try{
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(permissionResult.status !=="granted") {
          Alert.alert("permission denied","We need permission to access your photos.");
          return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
        
        if(pickerResult.canceled) {
          return;
        }

        const uploadedurl = await uploadImage(pickerResult);

        if(!uploadedurl) {
          Alert.alert("Upload failed","could not upload image.");
          return;
        }

        if(user) {
          await updateUserProfile(user.uid,{photoURL: uploadedurl});
          setProfile({...profile,photoURL: uploadedurl});
          Alert.alert("Success","Profile picture updated!");
        }
      } catch(error) {
        console.error("Failed to upload profile picture:",error);
        Alert.alert("Error","Something went wrong while uploading.");
      }
    };
  return (
    <View style={styles.container}>
      <NavBar title={profile.name || "Your profile"} />
      <BackButton />
      {/* Use the image prop below to push the user image, it has a default image */}
      <ProfileImg image = {profile.photoURL}/>
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