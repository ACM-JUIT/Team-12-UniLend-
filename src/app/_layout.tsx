import { Stack } from 'expo-router';
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/splashScreen" options={{ headerShown: false }} />
      <Stack.Screen name="screens/homeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/signup" options={{ headerShown:false }} />
      <Stack.Screen name="(auth)/login_page" options={{ headerShown:false }} />
      <Stack.Screen name="(auth)/signup_page" options={{ headerShown:false }} />

    </Stack>
  );
}