import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Container } from '../src'

describe('Container render', () => {
  it('renders without crashing', () => {
    render(<Container />)
  })
})
