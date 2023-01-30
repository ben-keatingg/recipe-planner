import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { Plan } from '../types/plan'

const { BK_AWS_DEFAULT_REGION, BK_AWS_SECRET_ACCESS_KEY, BK_AWS_ACCESS_KEY_ID } = process.env

const TABLE_NAME = 'recipe-planner'

let credentials: any | undefined
if (BK_AWS_DEFAULT_REGION && BK_AWS_SECRET_ACCESS_KEY && BK_AWS_ACCESS_KEY_ID) {
  credentials = { accessKeyId: BK_AWS_ACCESS_KEY_ID, secretAccessKey: BK_AWS_SECRET_ACCESS_KEY }
}

const dynamoDb = new DynamoDBClient({
  region: BK_AWS_DEFAULT_REGION,
  credentials
})

const dynamoDbClient = DynamoDBDocument.from(dynamoDb)


export class StubDatabase {

  public async save(plan: Plan) {
    await dynamoDbClient.put({ 
      TableName: TABLE_NAME,
      Item: plan
    })
  }

  public async get(userId: string) {
    const res = await dynamoDbClient.get({ 
      TableName: TABLE_NAME,
      Key: {
        userId
      }
    })

    return res.Item as Plan | null
  }
}


const database = new StubDatabase()

export default database
