import { Image, Pressable, Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="mb-4">
        <Text className="text-blue-600 text-4xl underline text-center font-bold mb-5">
          Hello Unilend!
        </Text>
      </View>
      <View className="w-96 h-96 p-5 border-[0.25em] border-blue-200 rounded-lg">
        <Image
          className="w-full flex-1 rounded-lg mb-4"
          source={{
        uri: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg",
          }}
        />
        <Pressable className="bg-blue-500 px-6 py-3 rounded-md active:bg-blue-800">
          <Text className="text-white font-bold text-center">Click to Login</Text>
        </Pressable>
      </View>
    </View>
  );
}