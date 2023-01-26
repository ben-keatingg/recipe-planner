// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Plan } from '../../../types/plan'
import z, { ZodError } from 'zod'
import database from '../../../data/stub-database'

const plannedDaySchema = z.object({
  id: z.string().uuid(),
  date: z.string(),
  breakfast: z.number().optional(),
  lunch: z.number().optional(),
  dinner: z.number().optional(),
})

const planSchema = z.object({
  userId: z.string().uuid(),
  startDate: z.string(),
  healthGoals: z.array(z.string()),
  plannedDays: z.array(plannedDaySchema)
})

type Data = {
  plan?: Plan
  error?: ZodError
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    return handlePost(req, res)
  }

  res.status(404).send({})
}

export const handlePost = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const validationRes = planSchema.safeParse(req.body)
  if (!validationRes.success) {
    res.status(400).send({ error: validationRes.error })
    return
  }

  await database.save(req.body)

  res.send(req.body)
}
