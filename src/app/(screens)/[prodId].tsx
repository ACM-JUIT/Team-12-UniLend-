// to open specific book page using bookid
import NavBar from "@/src/(frontend)/components/mainpage/Navbar";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView>
      <NavBar title="Like It?" />
      <Text></Text>
    </SafeAreaView>
  );
}
