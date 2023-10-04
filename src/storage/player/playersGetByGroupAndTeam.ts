/* eslint-disable no-useless-catch */
import { playersGetBygroup } from './playersGetBygroup'

export async function playersGetByGroupAndTeam (group: string, team: string) {
  try {
    const storage = await playersGetBygroup(group)

    const players = storage.filter(player => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}
