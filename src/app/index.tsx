import { Link } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
        <Link href="/signup" className="text-white font-bold text-center bg-blue-500 px-6 py-3 rounded-md active:bg-blue-800">
       Go to Signup Page
        </Link>
    </View>
  );
}