import { ItemPostInput, createBookPost } from "@/src/api/firestore/post";

import PickImage from "@/src/(frontend)/components/listing/ImagePicker";
import CatTextSelector from "@/src/(frontend)/components/listing/TypeDropDown";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import { getAuth } from "@react-native-firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CreateListing = () => {
  const [formState, setFormState] = useState<
    Omit<ItemPostInput, "location" | "ownerId">
  >({
    title: "",
    images: null,
    type: null,
    category: "",
    model: "",
    company: "",
    description: "",
    price: 0,
  });

  const handleChange = (
    key: keyof Omit<ItemPostInput, "location" | "ownerId">,
    value: any
  ) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleSubmit = async (
    formState: Omit<ItemPostInput, "location" | "ownerId">
  ) => {
    const auth = getAuth().currentUser;
    const userId = await auth?.getIdToken();
    if (!userId) throw new Error("The user isn't authenticated");
    try {
      createBookPost({ ...formState, ownerId: userId, location: null });

      setFormState({
        title: "",
        images: null,
        type: null,
        category: "",
        model: "",
        company: "",
        description: "",
        price: 0,
      });
      Alert.alert("Success", "Item listed successfully!");
    } catch (error) {
      console.error("Error caught when submitting: " + error);
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <NavBar title="Add Listing" />

      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.heading1}>Item Name*</Text>

        <TextInput
          style={styles.input1}
          placeholder="Add Name"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.title}
          onChangeText={(text) => handleChange("title", text)}
        />

        <Text style={styles.heading1}>Product Image*</Text>
        <PickImage
          handleUpload={(image: File | string) => handleChange("images", image)}
        />

        <Text style={styles.heading1}>Item Type*</Text>
        <CatTextSelector
          handleClick={(category: string) => handleChange("category", category)}
        />

        <Text style={styles.heading1}>Model/Edition*</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Manik Edition"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.model}
          onChangeText={(model) => handleChange("model", model)}
        />

        <Text style={styles.heading1}>Company/Publication*</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Jaypee Cement"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.company}
          onChangeText={(company) => handleChange("company", company)}
        />

        <Text style={styles.heading1}>Item Discription*</Text>
        <TextInput
          multiline={true}
          style={styles.input1}
          placeholder="(Min 10 words.) eg. A platform to sell books that is created by three people oh five people"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.description}
          onChangeText={(description) =>
            handleChange("description", description)
          }
        />

        <Text style={styles.heading1}> Price </Text>
        <TextInput
          style={styles.input1}
          placeholder="Enter price"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.price.toString()}
          onChangeText={(price) => handleChange("price", price)}
          keyboardType="numeric"
        />
        <Text style={styles.heading1}>Trade Type*</Text>
        {/* <TradeType 
        // isforsale = {isforsale}
        // isForlending = {isForLending}
        ontogglesale ={() => setIsForSale((prev) => !prev)}
        ontogglelending = {() => setisForLending((prev) => !prev)}
        /> */}

        <TouchableWithoutFeedback
          onPress={() => {
            console.log("submitted");
            handleSubmit(formState);
          }}
        >
          <View style={styles.button}>
            <Text
              style={{ color: "#4A2B29", fontSize: 16, textAlign: "center" }}
            >
              Submit
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
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
