import AsyncStorage from "@react-native-async-storage/async-storage"
import { ENV } from "../utils/constants"

const setToken = async (token) => {
  await AsyncStorage.setItem(ENV.STORGATE.TOKEN, token)
}

const getToken = async () => {
  return await AsyncStorage.getItem(ENV.STORGATE.TOKEN)
}

const removeToken = async () => {
  await AsyncStorage.removeItem(ENV.STORGATE.TOKEN)
}

export const storageController = {
  setToken,
  getToken,
  removeToken,
}
