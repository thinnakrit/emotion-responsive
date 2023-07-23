import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Row } from '../src'

describe('Row render', () => {
  it('renders without crashing', () => {
    render(<Row />)
  })
})
