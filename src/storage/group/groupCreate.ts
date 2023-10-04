/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/configStorage'
import { getAllGroups } from './getAllGroups'

export async function groupCreate (groupName: string) {
  try {
    const storagedGroups = await getAllGroups()
    const storage = JSON.stringify([...storagedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
