import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(screens)/splashScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/homeScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/CreateListing"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/inventory/[itemId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/itemWatchlist"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/orderHistory/[orderId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/userProfile"
            options={{ headerShown: false }}
          />{" "}
          <Stack.Screen
            name="(screens)/editProfile"
            options={{ headerShown: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
