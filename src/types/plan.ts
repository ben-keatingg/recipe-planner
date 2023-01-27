export interface PlannedDay {
  id: string
  date: string
  breakfast?: string
  lunch?: string
  dinner?: string
}

export interface Plan {
  userId: string
  startDate: string
  healthGoals: string[]
  plannedDays:PlannedDay[]
}

export type Meal = 'breakfast' | 'lunch' | 'dinner'