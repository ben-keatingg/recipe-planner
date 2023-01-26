import { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuid } from 'uuid'
import { handlePost } from "."
import database from "../../../data/stub-database"
import { Plan } from "../../../types/plan"

describe('POST /plan', () => {
  it('returns 400 if body is not valid', async () => {
    const mockReq = { method: 'POST', body: { foo: 'bar' }} as NextApiRequest
    const mockRes = { status: jest.fn(() => ({ send: jest.fn() })), send: jest.fn() } as unknown as NextApiResponse
    await handlePost(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(400)
  })

  it('Saves plan in database', async () => {
    const plan: Plan = {
      userId: uuid(),
      healthGoals: [],
      plannedDays: [],
      startDate: new Date().toISOString()
    }
    const mockReq = { method: 'POST', body: plan} as NextApiRequest
    const mockRes = { status: jest.fn(() => ({ send: jest.fn() })), send: jest.fn() } as unknown as NextApiResponse
    await handlePost(mockReq, mockRes)

    expect(mockRes.send).toHaveBeenCalled()

    const planInDb = await database.get(plan.userId)
    expect(planInDb).toEqual(plan)
  })
})