/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { type PLayerStorageDTO } from './PLayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/configStorage'

export async function playersGetBygroup (group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: PLayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (error) {
    throw error
  }
}
