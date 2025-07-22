import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
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
        name="onboardingPage"
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
      <Drawer.Screen
        name="editProfile"
        options={{
          drawerLabel: "Profile Settings",
          title: "Profile",
        }}
      />
    </Drawer>
  );
}
