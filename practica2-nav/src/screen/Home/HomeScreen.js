import { View, Text, FlatList, StyleSheet } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../../components/Card"
export default function HomeScreen(props) {
  const { characters } = props
  console.log("Homescreen props ", characters)

  return (
    <>
      <SafeAreaView></SafeAreaView>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card characters={item} />}
      />
    </>
  )
}
