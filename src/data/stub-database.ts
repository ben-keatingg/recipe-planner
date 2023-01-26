import { Plan } from "../types/plan";


export class StubDatabase {
  private data: Record<string, Plan> = {}

  public async save(plan: Plan) {
    this.data[plan.userId] = plan
  }

  public async get(userId: string) {
    return this.data[userId]
  }
}


const database = new StubDatabase()

export default database
