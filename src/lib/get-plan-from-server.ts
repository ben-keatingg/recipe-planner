import { v4 as uuid } from 'uuid'
import database from '../data/stub-database'

const getPlanFromServer = async (userId?: string) => {
  if (!userId) {
    userId = uuid()
  }

  const planFromServer = await database.get(userId)

  console.log('got plan from server', JSON.stringify(planFromServer, null, 2))

  return { props: { userId, planFromServer: planFromServer || null } }  
}

export default getPlanFromServer
