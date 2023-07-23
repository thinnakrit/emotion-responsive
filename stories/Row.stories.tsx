import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Row } from '../src'

const meta: Meta<typeof Row> = {
  component: Row,
  title: 'Usaged/Row',
  tags: ['autodocs'],
  args: {
    children: <div>Row</div>,
  },
}

export default meta

type Story = StoryObj<typeof Row>

export const RowExample: Story = {
  args: {
    children: <div>Row</div>,
  },
}
