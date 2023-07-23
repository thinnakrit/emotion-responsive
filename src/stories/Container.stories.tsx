import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '../'

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Usaged/Container',
  tags: ['autodocs'],
  args: {
    children: <div>Container</div>,
  },
}

export default meta

type Story = StoryObj<typeof Container>

export const ContainerExample: Story = {
  args: {
    children: <div>Container</div>,
  },
}
