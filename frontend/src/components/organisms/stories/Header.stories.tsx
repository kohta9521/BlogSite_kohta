import { StoryObj, Meta } from '@storybook/react'

// components
import Header from '../Header'

const meta: Meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

type HeaderStory = StoryObj<typeof Header>

export const Default: HeaderStory = {
  args: {},
}
