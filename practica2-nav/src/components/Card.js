import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { globalStyles } from "../styles"
import Fonts from "../constants/Fonts"
import Favoritos from "./Favoritos/Favoritos"
import { useNavigation } from "@react-navigation/native"

export default function Card(props) {
  const { characters } = props
  const navigation = useNavigation()

  const goToPersonaje = () => {
    navigation.navigate("Detail", {
      id: characters.id,
      name: characters.name,
      status: characters.status,
      species: characters.species,
      type: characters.type,
      image: characters.image,
      gender: characters.gender,
      origin: characters.origin.name,
    })
  }

  return (
    <TouchableOpacity
      onPress={goToPersonaje}
      // style={{ backgroundColor: "purple" }}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: characters.image }}
          style={styles.characterImage}
        />
        <Text style={styles.characterName}>{characters.name}</Text>
        <Favoritos id={characters.id} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    height: "100%",
    padding: 10,
    margin: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 10,
    padding: 10,
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  characterName: {
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weigth.bold,
  },
})
