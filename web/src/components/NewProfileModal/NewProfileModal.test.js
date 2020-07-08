import { render } from '@redwoodjs/testing'

import NewProfileModal from './NewProfileModal'

describe('NewProfileModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewProfileModal />)
    }).not.toThrow()
  })
})
