/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { playersGetBygroup } from './playersGetBygroup'
import { PLAYER_COLLECTION } from '@storage/configStorage'

export async function playerRemoveByGroup (playerName: string, group: string) {
  try {
    const storage = await playersGetBygroup(group)

    const filteredPlayers = storage.filter(player => player.name !== playerName)
    const players = JSON.stringify(filteredPlayers)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}
