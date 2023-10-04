/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllGroups } from './getAllGroups'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/configStorage'

export async function removeGroupByName (group: string) {
  try {
    const storedGroups = await getAllGroups()
    const groups = storedGroups.filter(groupName => groupName !== group)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`)
  } catch (error) {
    throw error
  }
}
