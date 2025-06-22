import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <View className="flex-1 justify-center items-center bg-white p-5">
        <Text className="font-bold text-red-600 mb-4 text-9xl">404</Text>
        <Text className="text-xl text-gray-700 text-center mb-6">
          Page Not Found
        </Text>
        <Text className="text-gray-500 text-center mb-8">
          Probably lakshya did something wrong.
        </Text>
      </View>
    </>
  );
}