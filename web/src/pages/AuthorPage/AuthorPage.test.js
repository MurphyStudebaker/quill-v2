import { render, cleanup } from '@redwoodjs/testing'

import AuthorPage from './AuthorPage'

describe('AuthorPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorPage />)
    }).not.toThrow()
  })
})
