import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Col } from '../src'

describe('Col render', () => {
  it('renders without crashing', () => {
    render(<Col />)
  })
})
