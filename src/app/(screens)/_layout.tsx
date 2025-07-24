import { useAuth } from "@/src/context/AuthContext";
import { getAuth, signOut } from "@react-native-firebase/auth";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Redirect, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

export default function RootLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (!user) {
    return <Redirect href="/(auth)/login_page" />;
  }

  return (
    <Drawer
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#1C161E",
          width: 280,
        },
        drawerActiveTintColor: "#efe3c8",
        drawerInactiveTintColor: "#ffffff",
        drawerActiveBackgroundColor: "rgba(239, 227, 200, 0.1)",
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: "Rosarivo",
          marginLeft: -16,
        },
        drawerItemStyle: {
          borderRadius: 8,
          marginHorizontal: 12,
          marginVertical: 4,
          paddingInline: 10,
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}
        >
          <DrawerItemList {...props} />
          <View style={{ flex: 1, marginTop: "auto" }}>
            <DrawerItem
              label={() => (
                <Text
                  style={{ color: "#ff4444", fontWeight: "bold", fontSize: 16 }}
                >
                  Sign Out
                </Text>
              )}
              onPress={async () => {
                await signOut(getAuth());
                router.replace("/(auth)/onBoarding");
              }}
              style={{
                backgroundColor: "rgba(255, 68, 68, 0.1)",
                borderRadius: 8,
                marginHorizontal: 12,
                marginVertical: 4,
                marginTop: "auto",
              }}
            />
          </View>
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="homeScreen"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="itemWatchlist"
        options={{
          drawerLabel: "Watchlist",
          title: "Watchlist",
        }}
      />
      <Drawer.Screen
        name="userProfile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="editProfile"
        options={{
          drawerLabel: "Profile Settings",
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="SearchPage"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="splashScreen"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="CreateListing"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="inventory/[itemId]"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="orderHistory/[orderId]"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="tradeHist"
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
