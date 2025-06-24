import { Stack } from "expo-router";
import "../../global.css";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/splashScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screens/homeScreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
