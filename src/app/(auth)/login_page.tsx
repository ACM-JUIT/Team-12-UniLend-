import { StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text className="thumb-rose-700 font-">
        Hi 
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:"center",
    alignContent:"center",
    justifyContent:"center"
  }
})