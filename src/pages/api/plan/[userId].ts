// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Plan } from '../../../types/plan'
import z, { ZodError } from 'zod'
import database from '../../../data/stub-database'

type Data = {
  plan?: Plan
  error?: ZodError | string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }

  res.status(404).send({})
}


export const handleGet = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const userId = req.query.userId as string

  const plan = await database.get(userId)
  if (!plan) {
    res.status(404).send({ error: 'plan not found' })
    return
  }

  res.send({ plan })
}
