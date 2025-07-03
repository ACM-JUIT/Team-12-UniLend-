import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <View className="flex-1 justify-center items-center bg-white p-5">
        <Text className="font-bold text-red-600 mb-4 text-9xl">404</Text>
        <Text className="text-xl text-gray-700 text-center mb-6">
          Page Not Found
        </Text>
        <Text className="text-gray-500 text-center mb-8">
          Probably lakshya did something wrong. here's some lorem for you till
          he fixes it (he wont)
        </Text>
        <Text className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          iste delectus, in iusto ullam provident necessitatibus non saepe culpa
          similique odit aspernatur, sequi ut, dignissimos labore. Repellat at
          doloribus ad dolor voluptatem. Aliquid harum nobis voluptatibus
          doloremque itaque pariatur ratione autem optio eveniet tenetur, quas,
          quo, reprehenderit repellat. Ipsam reprehenderit temporibus alias
          deleniti ratione asperiores explicabo dicta esse excepturi
          exercitationem eos veritatis aspernatur doloribus eligendi
          voluptatibus vero tenetur consectetur fugit, ipsum nemo officia
          quibusdam assumenda placeat iure! Ex provident laboriosam ipsa vero
          saepe, expedita adipisci? Tempore reprehenderit aspernatur libero
          maiores, consequuntur quo? Hic fugiat minima doloremque voluptatum cum
          ducimus corporis eos?
        </Text>
      </View>
    </>
  );
}
