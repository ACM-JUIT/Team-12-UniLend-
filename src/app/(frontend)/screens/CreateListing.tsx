import { createBookPost } from "@/src/api/firestore/post";
import PickImage from "@/src/app/(frontend)/components/ui/listing/ImagePicker";
import CatTextSelector from "@/src/app/(frontend)/components/ui/listing/TypeDropDown";
import NavBar from "@/src/app/(frontend)/components/ui/mainpage/Navbar";
import { getAuth } from "@react-native-firebase/auth";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const [title,setTitle] = useState("");
const [price,setPrice] = useState("");
const [image,setImage] = useState<File | null>(null);
const [model,setModel] = useState("");
const [Company,setCompany] = useState("");
const [description,setDescription] = useState("");
const [type,setType] = useState("");
const [isForLending,setisForLending] = useState(false);
const [isforsale,setIsForSale] = useState(false);

const handlesubmit = async () => {
  if(!title || !price || !image) {
    alert("Please fill all fields")
    return;
  }

try{
  const user = getAuth().currentUser;
  const authToken = await user?.getIdToken();

  if(!authToken || !user)
    throw new Error("user not logged in");

  const postData = {
    title,
    model,
    Company,
    description,
    isForLending,
    isforsale,
    price: parseFloat(price),
    ownerId: user.uid,
    category: type,
    location: {
      city: "Delhi",
      state: "DL",
      country: "India",
      lat: 28.6139,
      lng: 77.2090,
    },
    images: [image],
    authToken,
  };

  await createBookPost(postData);
  alert("Book listed successfully!");
} catch(error) {
  alert(`Error: ${(error as Error).message}`);
}
};
const CreateListing = () => {
  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <NavBar name="Add Listing" />

      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.heading1}>Item Name*</Text>

        <TextInput
          style={styles.input1}
          placeholder= "Add Name"
          placeholderTextColor="#efe3c87a"
          onChangeText={(text) =>setTitle(text)}
        />

        <Text style={styles.heading1}>Product Image*</Text>
        <PickImage/>

        <Text style={styles.heading1}>Item Type*</Text>
        <CatTextSelector />

        <Text style={styles.heading1}>Model/Edition*</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Manik Edition"
          placeholderTextColor="#efe3c87a"
          onChangeText={(text) => setModel(text)}
        />

        <Text style={styles.heading1}>Company/Publication*</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Jaypee Cement"
          placeholderTextColor="#efe3c87a"
          onChangeText={(text) => setCompany(text)}
        />

        <Text style={styles.heading1}>Item Discription*</Text>
        <TextInput
          multiline={true}
          style={styles.input1}
          placeholder="(Min 10 words.) eg. A platform to sell books that is created by three people oh five people"
          placeholderTextColor="#efe3c87a"
          onChangeText={(text) => setDescription(text)} 
        />

        <text style={styles.input1}> Price </text>
        <TextInput
        placeholder="Enter price"
        value = {price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
        />
        <Text style={styles.heading1}>Trade Type*</Text>
        {/* <TradeType 
        // isforsale = {isforsale}
        // isForlending = {isForLending}
        ontogglesale ={() => setIsForSale((prev) => !prev)}
        ontogglelending = {() => setisForLending((prev) => !prev)}
        /> */}
  
        <TouchableWithoutFeedback onPress={() => alert("Hi")}>
          <View style={styles.button}>
            <Text
              style={{ color: "#4A2B29", fontSize: 16, textAlign: "center" }}
            >
              Submit
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handlesubmit}>
          <View style={styles.button2}>
            <Text style={styles.text2}>Cancel, nevermind!</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 5,
  },
  ScrollContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 5,
    gap: 20,
  },
  input1: {
    color: "#EFE3C8",
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 220, 0.2)",
  },
  heading1: {
    margin: 5,
    borderRadius: 10,
    color: "#ffffff",
    fontFamily: "Rosarivo",
    fontSize: 16,
    marginTop: 10,
    textShadowRadius: 20,
    textShadowColor: "#11111192",
  },
  button: {
    marginTop: 10,
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFE3C8",
    alignContent: "center",
    justifyContent: "center",
  },
  button2: {
    marginTop: 10,
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#efe3c800",
    alignContent: "center",
    justifyContent: "center",
  },
  text2: {
    fontSize: 16,
    color: "#F5F5DC",
    alignSelf: "center",
  },
});

export default CreateListing;
