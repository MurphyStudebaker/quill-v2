import { render, cleanup } from '@redwoodjs/testing'

import BasicLayout from './BasicLayout'

describe('BasicLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BasicLayout />)
    }).not.toThrow()
  })
})
