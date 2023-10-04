/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/configStorage'
import { getAllGroups } from './getAllGroups'
import { AppError } from '@utils/AppError'

export async function groupCreate (groupName: string) {
  try {
    const storagedGroups = await getAllGroups()

    const groupAlreadyExists = storagedGroups.includes(groupName)
    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }
    const storage = JSON.stringify([...storagedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
