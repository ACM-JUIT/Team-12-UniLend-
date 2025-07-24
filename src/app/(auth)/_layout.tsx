import { useAuth } from "@/src/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { user, loading } = useAuth();
  if (user) {
    return <Redirect href="/(screens)/homeScreen" />;
  }

  return (
    <>
    
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="./onBoarding" />
        <Stack.Screen name="./login_page" />
        <Stack.Screen name="./signup_page" />
      </Stack>
    </>
  );
}
