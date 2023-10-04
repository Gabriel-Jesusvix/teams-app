/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/configStorage'
import { type PLayerStorageDTO } from './PLayerStorageDTO'
import { playersGetBygroup } from './playersGetBygroup'
import { AppError } from '@utils/AppError'

export async function playerAddByGroup (newPlayer: PLayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetBygroup(group)

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)
    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já está adicionada no time.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
