import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Col } from '../src'

const meta: Meta<typeof Col> = {
  component: Col,
  title: 'Usaged/Col',
  tags: ['autodocs'],
  args: {
    children: <div>Col</div>,
  },
}

export default meta

type Story = StoryObj<typeof Col>

export const ColExample: Story = {
  args: {
    children: <div>Col</div>,
  },
}
