import JsonDb from 'simple-json-db'
import { Plan } from "../types/plan";


export class StubDatabase {
  private data = new JsonDb('database.json')


  private wait() {
    return new Promise((res) => {
      setTimeout(() => {
        res(null)
      }, 100);
    })
  }
  public async save(plan: Plan) {
    this.data.set(plan.userId, plan)
    await this.wait()
  }

  public async get(userId: string) {
    return this.data.get(userId)
  }
}


const database = new StubDatabase()

export default database
