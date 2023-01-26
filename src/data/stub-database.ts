import JsonDb from 'simple-json-db'
import { Plan } from "../types/plan";


export class StubDatabase {
  private data = new JsonDb('database.json')

  public async save(plan: Plan) {
    this.data.set(plan.userId, plan)
  }

  public async get(userId: string) {
    return this.data.get(userId)
  }
}


const database = new StubDatabase()

export default database
