import { render, cleanup } from '@redwoodjs/testing'

import CreatePoemPage from './CreatePoemPage'

describe('CreatePoemPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePoemPage />)
    }).not.toThrow()
  })
})
