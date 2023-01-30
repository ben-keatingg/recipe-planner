import React from 'react'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import axios from "axios"
import { addDays } from "date-fns"
import { v4 as uuid } from 'uuid'
import Home from "../pages"
import { dateToDay } from "../lib/dates"

const mockPush = jest.fn()
jest.mock('next/router', () => {
  return {
    useRouter: jest.fn(() => ({ push: mockPush }))
  }
})

jest.mock('axios', () => {
  return {
    post: jest.fn()
  }
})

beforeEach(() => {
  mockPush.mockReset()
})

describe('Home Page', () => {

  it('Allows you to select a day, 2 health goals and save', async () => {
    const userId = uuid()
    render(<Home planFromServer={null}  userId={userId}/>)
    const dateToSelect = addDays(new Date(), 3)
    const dateTestId = `day-box-${dateToDay(dateToSelect).toISOString().slice(0,10)}`

    fireEvent.click(screen.getByTestId(dateTestId))
    
    expect(screen.getByTestId(dateTestId).className).toContain('day-container--selected')

    fireEvent.click(screen.getByLabelText('Brain Health'))
    fireEvent.click(screen.getByLabelText('Mental Wellbeing'))

    fireEvent.click(screen.getByText('Start Planning'))

    const expectedPlan = {
      "healthGoals": ["brain-health", "mental-wellbeing"],
      "plannedDays": [],
      "startDate": dateToDay(dateToSelect).toISOString(),
       "userId": userId
    }
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/plan', expectedPlan)
    })

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/plan')
    })
    
  })
})