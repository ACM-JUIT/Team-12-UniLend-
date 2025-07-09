import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import forgetPassword from "@/src/api/auth/forgetPassword";
import logIn from "@/src/api/auth/login";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address. It should be of the form example@gmail.com"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type ValidationResult = { failed: true; error: string } | { failed: false };

function formValidation({
  email,
  password,
}: {
  email: string;
  password: string;
}): ValidationResult {
  const result = LoginSchema.safeParse({ email, password });

  if (!result.success) {
    const error = result.error.format();
    console.log(error);
    const firstError =
      error.email?._errors[0] || error.password?._errors[0] || "Invalid Input";
    return { failed: true, error: firstError };
  }
  return { failed: false };
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [formError, setFormError] = useState<{
    title: string;
    desc: string;
    active: boolean;
  }>({ title: "", desc: "", active: false });

  const input2Ref = useRef<TextInput>(null);

  const handleForgetPassword = async () => {
    if (!email) {
         setFormError({ title: "Error", desc: "Please enter your email address first.", active: true });
      return;
    }

    try {
      await forgetPassword(email);
         setFormError({ title: "Success", desc: "Password reset email sent to your mail.", active: true });
    } catch (error) {
      console.error("password reset error:", error);
      Alert.alert("error", "an error occured while sending reset email");
    }
  };

  const handleLogin = async () => {
    const validation = formValidation({ email, password });

    if (validation.failed) {
      setFormError({ title: "Error", desc: validation.error, active: true });
      return;
    }

    try {
      setLoading(true);
      await logIn({ email, password });
      router.replace("/(screens)/homeScreen");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert("Login Error", "An error occured");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/SignUp.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={router.back}>
        <Image
          source={require("../../../assets/images/backArrow.png")}
          style={styles.image1}
        />
      </TouchableWithoutFeedback>

      <Text style={styles.text1}>Log In</Text>

      <Text style={styles.text2}>Email</Text>

      <View style={{ height: 10 }}></View>
      <TextInput
        style={styles.input1}
        autoCapitalize="none"
        placeholder="email@unilend.com"
        placeholderTextColor="#efe3c87a"
        defaultValue={email}
        onChangeText={setEmail}
        onSubmitEditing={() => input2Ref.current?.focus()}
        returnKeyType="next"
      />
      <View style={{ height: 25 }}></View>

      <Text style={styles.text2}>Password</Text>

      <View style={{ height: 10 }}></View>
      <TextInput
        ref={input2Ref}
        autoCapitalize="none"
        secureTextEntry
        style={styles.input1}
        placeholder="lakshya<3cats1000"
        placeholderTextColor="#efe3c87a"
        defaultValue={password}
        onChangeText={setPassword}
        returnKeyType="done"
        onSubmitEditing={handleLogin}
      />
      <View style={{ height: 10 }}></View>

      <TouchableWithoutFeedback
        onPress={handleForgetPassword}
        style={{
          padding: 1,
          height: 13,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={styles.textSmallest}>Forgot Password?</Text>
        {/* <Text style={styles.textSmallestAlert}>
          Forgot Password? 
        </Text> */}
      </TouchableWithoutFeedback>
      <View style={{ height: 15 }}></View>

      <TouchableHighlight
        disabled={loading}
        underlayColor="#cfc7b5"
        onPress={handleLogin}
        style={styles.button1}
      >
        <View>
          <Text style={{ color: "#4A2B29", fontSize: 16, textAlign: "center" }}>
            {loading ? "Logging in..." : "Log in"}
          </Text>
        </View>
      </TouchableHighlight>

      <View style={{ height: 15 }}></View>

      <TouchableHighlight
        underlayColor="#cfc7b5"
        onPress={() => router.replace("/(auth)/signup_page")}
        style={styles.button2}
      >
        <View>
          <Text style={{ color: "#EFE3C8", fontSize: 16, textAlign: "center" }}>
            New here? Sign Up!
          </Text>
        </View>
      </TouchableHighlight>
      <StandardOverlay
        activated={formError.active}
        controller={(isActive: boolean) =>
          setFormError({ title: "", desc: "", active: isActive })
        }
        title={formError.title}
        text={formError.desc}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    height: "auto",
    padding: 35,
  },
  text1: {
    fontSize: 48,
    fontFamily: "Amiri",
    fontWeight: "bold",
    color: "#EFE3C8",
  },
  image1: {
    marginTop: 77,
  },
  text2: {
    fontSize: 16,
    color: "#F5F5DC",
    fontWeight: "bold",
  },
  input1: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 220, 0.2)",
    color: "#efe3c8",
  },
  textSmallest: {
    fontSize: 12,
    color: "#F5F5DC",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  textSmallestAlert: {
    fontSize: 12,
    color: "#F5F5DC",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  button1: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFE3C8",
    alignContent: "center",
    justifyContent: "center",
  },
  button2: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#efe3c800",
    alignContent: "center",
    justifyContent: "center",
  },
});
