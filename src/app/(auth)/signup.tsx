import {
    createUserWithEmailAndPassword,
    getAuth,
} from "@react-native-firebase/auth";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("")

  async function signUp() {
    try {
      const account = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      console.log("User account created & signed in!");
      setEmail("");
      setPassword("")
      setUser(email)
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    }
  }
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="mb-4">
        <Text className="text-blue-600 text-4xl underline text-center font-bold mb-5">
          Sign UP {user}
        </Text>
      </View>
      <View className="w-96 h-96 p-5 border-[0.25em] border-blue-200 rounded-lg">
        <Image
          className="w-full flex-1 rounded-lg mb-4"
          source={{
            uri: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg",
          }}
        />
        <View>
          <TextInput
            className="p-2 my-5 border-2 rounded-lg "
            placeholder="Email"
            onChangeText={(newEmail) => setEmail(newEmail)}
            defaultValue={email}
          />
        </View>
        <View>
          <TextInput
            className="p-2 mb-5 border-2 rounded-lg"
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(newEmail) => setPassword(newEmail)}
            defaultValue={password}
          />
        </View>
        <Pressable
          className="bg-blue-500 px-6 py-3 rounded-md active:bg-blue-800"
          onPress={signUp}
        >
          <Text className="text-white font-bold text-center">
            Click to SignUp
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
