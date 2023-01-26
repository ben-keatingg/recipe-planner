import { render, screen } from "@testing-library/react"
import DayList from "./DayList"

describe('DayList', () => {
  it('Displays a list of days 7 days behind and 7 days ahead', async () => {
    render(<DayList startDate={new Date('2023-01-26')} selectedDate={new Date('2023-01-26')} onClick={() => {}}/>)
    screen.getByText('19')
    screen.getByText('20')
    screen.getByText('21')
    screen.getByText('22')
    screen.getByText('23')
    screen.getByText('24')
    screen.getByText('25')
    screen.getByText('26')
    screen.getByText('27')
    screen.getByText('28')
    screen.getByText('29')
    screen.getByText('30')
    screen.getByText('31')
    screen.getByText('1')
    screen.getAllByText('th')
    screen.getByText('st')
    screen.getAllByText('January')
    screen.getByText('February')
    
    screen.getAllByText('Monday')
    screen.getAllByText('Tuesday')
    screen.getAllByText('Wednesday')
    screen.getAllByText('Thursday')
    screen.getAllByText('Friday')
    screen.getAllByText('Saturday')
    screen.getAllByText('Sunday')
  })
})