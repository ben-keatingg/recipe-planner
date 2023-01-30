import { v4 as uuid } from 'uuid'
import database from '../data/stub-database'

const getPlanFromServer = async (userId?: string) => {
  if (!userId) {
    userId = uuid()
  }
  const planFromServer = await database.get(userId)

  return { userId, planFromServer }
}

export default getPlanFromServer
