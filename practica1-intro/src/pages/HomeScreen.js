import { View, Text } from "react-native"
import React from "react"
import Saludar from "../components/Saludar"
export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Saludar
        name="Alex"
        apellido="Arteaga"
      />
      <Saludar
        name="David"
        apellido="Santiago"
      />
      <Saludar
        name="Cesar"
        apellido="Escobar"
      />
    </View>
  )
}
