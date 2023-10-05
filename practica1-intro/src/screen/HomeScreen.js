import { View, Text, Button } from "react-native"
import React from "react"

export default function HomeScreen(props) {
  const { navigation } = props
  const goToAccount = () => {
    navigation.navigate("Account")
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={goToAccount}
        title="Ir a Account"
      />
    </View>
  )
}
