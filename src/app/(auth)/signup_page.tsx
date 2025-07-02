import signUp from "@/src/api/auth/signup";
import { Checkbox } from "@futurejj/react-native-checkbox";
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
import StandardOverlay from "../(frontend)/components/ui/standard/StandardOverlay";
StandardOverlay;
const LoginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must of minimum 8 characters"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ValidationResult = { failed: true; error: string } | { failed: false };
function formValidation({
  username,
  email,
  password,
  privacyPolicy,
}: {
  username: string;
  email: string;
  password: string;
  privacyPolicy: boolean;
}): ValidationResult {
  const result = LoginSchema.safeParse({
    username,
    email,
    password,
    privacyPolicy,
  });

  if (!result.success) {
    const error = result.error.format();
    console.log(error);
    const firstError =
      error.username?._errors[0] ||
      error.email?._errors[0] ||
      error.password?._errors[0] ||
      error.privacyPolicy?._errors[0] ||
      "Invalid Input";

    return { failed: true, error: firstError };
  }
  return { failed: false };
}
export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);

  //Variable for privacy overlay
  const [POVisible, setPOVisible] = useState(false);
  const handleSignUp = async () => {
    const validate = formValidation({
      username: userName,
      email,
      password,
      privacyPolicy,
    });
    if (validate.failed) {
      Alert.alert("Error", validate.error);
      return;
    }
    try {
      await signUp({
        username: userName,
        email: email.toLowerCase(),
        password,
        privacyPolicy,
      });

      Alert.alert("Account created", "Account successfully created");
      // reset the login page
      setEmail("");
      setPassword("");
      setUserName("");
      setPrivacyPolicy(false);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Error", "That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "That email address is invalid!");
      }

      console.error(error);
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

      <Text style={styles.text1}>Sign Up</Text>

      <Text style={styles.text2}>Username</Text>

      <View style={{ height: 10 }}></View>
      <TextInput
        style={styles.input1}
        placeholder="typewriter"
        placeholderTextColor="#efe3c87a"
        defaultValue={userName}
        onChangeText={(username) => setUserName(username)}
        onSubmitEditing={() => input2Ref.current?.focus()}
        returnKeyType="next"
        submitBehavior="newline"
      />
      <View style={{ height: 10 }}></View>

      <Text style={styles.text2}>Email</Text>

      <View style={{ height: 10 }}></View>
      <TextInput
        ref={input2Ref}
        style={styles.input1}
        autoCapitalize="none"
        placeholder="email@unilend.com"
        placeholderTextColor="#efe3c87a"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        onSubmitEditing={() => input3Ref.current?.focus()}
        returnKeyType="next"
      />
      <View style={{ height: 10 }}></View>

      <Text style={styles.text2}>Password</Text>

      <View style={{ height: 10 }}></View>
      <TextInput
        ref={input3Ref}
        secureTextEntry
        autoCapitalize="none"
        style={styles.input1}
        placeholder="lakshya<3cats1000"
        placeholderTextColor="#efe3c87a"
        defaultValue={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        returnKeyType="done"
      />
      <View style={{ height: 10 }}></View>

      <TouchableWithoutFeedback
        style={{
          padding: 1,
          height: 13,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={styles.policySection}>
          <Checkbox
            color="#F5F5DC"
            uncheckedColor="#F5F5DC"
            status={privacyPolicy ? "checked" : "unchecked"}
            onPress={() => setPrivacyPolicy(!privacyPolicy)}
          />

          <TouchableWithoutFeedback
            onPress={() =>
              // alert(
              //   "Privacy is not your first priority, it is sending us cat pictures"
              // )
              setPOVisible(true)
            }
          >
            <Text style={styles.textSmallest}>
              I agree to your Privacy Policy
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ height: 10 }}></View>

      <TouchableHighlight
        underlayColor="#cfc7b5"
        onPress={handleSignUp}
        style={styles.button1}
      >
        <View>
          <Text style={{ color: "#4A2B29", fontSize: 16, textAlign: "center" }}>
            Sign Up
          </Text>
        </View>
      </TouchableHighlight>

      <View style={{ height: 15 }}></View>

      <TouchableHighlight
        underlayColor="#cfc7b5"
        onPress={() => router.replace("/(auth)/login_page")}
        style={styles.button2}
      >
        <View>
          <Text style={{ color: "#EFE3C8", fontSize: 16, textAlign: "center" }}>
            Been here before? Log In!
          </Text>
        </View>
      </TouchableHighlight>
      <StandardOverlay
        title="Privacy Policy"
        Activated={POVisible}
        text={
          "Hey so its been a while since i have wrote something without AI so hereis some writing practice by my sidehehe"
        }
        Controller={setPOVisible}
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
    color: "#EFE3C8",
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 220, 0.2)",
  },
  textSmallest: {
    fontSize: 12,
    color: "#F5F5DC",
    marginTop: 10,
    marginLeft: 5,
    justifyContent: "center",
    fontFamily: "Rosarivo",
  },
  policySection: {
    fontSize: 12,
    color: "#F5F5DC",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "space-evenly",
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
