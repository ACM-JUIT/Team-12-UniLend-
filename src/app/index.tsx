import { getAuth } from "@react-native-firebase/auth";
import { Redirect } from "expo-router";
import OnBoarding from "./(auth)/onBoarding";

export default function RootLayout() {
  const user = getAuth().currentUser;
  if (user) {
    return <Redirect href="/(screens)/homeScreen" />
  }
  return <OnBoarding />;
}
