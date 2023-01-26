import { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuid } from 'uuid'
import database from "../../../data/stub-database"
import { Plan } from "../../../types/plan"
import { handleGet } from "./[userId]"

describe('GET /plan/:userId', () => {
  it('returns 404 if plan not found', async () => {
    const plan: Plan = {
      userId: uuid(),
      healthGoals: [],
      plannedDays: [],
      startDate: new Date().toISOString()
    }

    await database.save(plan)

    const mockReq = { method: 'GET', query: { userId: uuid() }} as unknown as NextApiRequest
    const mockRes = { status: jest.fn(() => ({ send: jest.fn() })), send: jest.fn() } as unknown as NextApiResponse
    await handleGet(mockReq, mockRes)

    expect(mockRes.status).toHaveBeenCalledWith(404)
  })

  it('returns plan if found', async () => {
    const plan: Plan = {
      userId: uuid(),
      healthGoals: [],
      plannedDays: [],
      startDate: new Date().toISOString()
    }

    await database.save(plan)

    const mockReq = { method: 'GET', query: { userId: plan.userId }} as unknown as NextApiRequest
    const mockRes = { status: jest.fn(() => ({ send: jest.fn() })), send: jest.fn() } as unknown as NextApiResponse
    await handleGet(mockReq, mockRes)

    expect(mockRes.send).toHaveBeenCalledWith({plan})
  })
})