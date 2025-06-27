import NavBar from "@/src/components/ui/mainpage/Navbar";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  
} from "@/components/ui/select";
const CreateListing = () => {
  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <NavBar name="Add Listing" />

      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.heading1}>Item Name*</Text>
        <TextInput style={styles.input1} placeholder="eg. Lakshya" />

        <Text style={styles.heading1}>Model/Edition*</Text>
        <TextInput style={styles.input1} placeholder="eg. Manik Edition" />
        <Select>
          <SelectTrigger>
            <SelectInput />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Text style={styles.heading1}>Company/Publication*</Text>
        <TextInput style={styles.input1} placeholder="eg. Jaypee Cement" />

        <Text style={styles.heading1}>Item Type</Text>
        <TextInput style={styles.input1} placeholder="eg. Gun" />

        <Text style={styles.heading1}>Item Discription</Text>
        <TextInput
          multiline={true}
          style={styles.input1}
          placeholder="eg. A platform to sell books that is created by three people oh five people"
        />

        <Text style={styles.heading1}>Trade Type</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Engineering Mathematics"
        />
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
});

export default CreateListing;
