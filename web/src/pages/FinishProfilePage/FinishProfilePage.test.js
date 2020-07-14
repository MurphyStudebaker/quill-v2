import { render } from '@redwoodjs/testing'

import FinishProfilePage from './FinishProfilePage'

describe('FinishProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FinishProfilePage />)
    }).not.toThrow()
  })
})
