import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header.tsx', () => {
  it('renders sub header when hideSubHeader prop is falsey', () => {
    render(<Header />)

    screen.getByText('Use our handy planner to easily plan your meals for the week')
  })

  it('doesn\'t render sub header when hideSubHeader is true', () => {
    render(<Header hideSubHeader={true} />)
    expect(screen.queryByText('Use our handy planner to easily plan your meals for the week')).toBeNull()
  })
})