import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import HomeScreen from "./src/pages/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import NavigationStack from "./src/navigation/NavigationStack"
import "react-native-gesture-handler"

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
