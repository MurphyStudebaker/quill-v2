import { render, cleanup } from '@redwoodjs/testing'

import PoemPreview from './PoemPreview'

describe('PoemPreview', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PoemPreview />)
    }).not.toThrow()
  })
})
