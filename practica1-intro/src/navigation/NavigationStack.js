import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AccountScreen from "../screen/AccountScreen"
import HomeScreen from "../screen/HomeScreen"
import SettingsScreen from "../screen/SettingsScreen"

export default function NavigationStack() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  )
}
