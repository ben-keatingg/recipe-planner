import { render, screen } from "@testing-library/react"
import DayBox from "./DayBox"

describe('DayBox', () => {
  it('displays the correct week day', () => {
    render(<DayBox date={new Date('2023-01-25')} />)

    screen.getByText('Wednesday')
  })

  it('displays correct day of month', () => {
    render(<DayBox date={new Date('2023-01-25')} />)

    screen.getByText('25')
    screen.getByText('th')
  })

  it('displays correct month', () => {
    render(<DayBox date={new Date('2023-08-25')} />)
    screen.getByText('August')
  })

  it('displays today flag if date is today', () => {
    render(<DayBox date={new Date()} />)
    screen.getByText('Today')
  })

  it('applies selected class when isSelected = true', async () => {
    const {container} = render(<DayBox date={new Date()} isSelected={true} />)
    const res = container.querySelector('.day-container--selected')
    expect(res).toBeTruthy()
  })

  it('applies smaller class when smaller = true', async () => {
    const {container} = render(<DayBox date={new Date()} smaller={true} />)
    const res = container.querySelector('.day-container--smaller')
    expect(res).toBeTruthy()
  })
})