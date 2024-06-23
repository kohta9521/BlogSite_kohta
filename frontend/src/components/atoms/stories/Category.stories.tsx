import { StoryObj, Meta } from '@storybook/react'

import Category from '../CategoryText'

const meta: Meta = {
  title: 'Atoms/CategoryText',
  component: Category,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
    },
    link: {
      control: {
        type: 'string',
      },
    },
    text: {
      control: {
        type: 'string',
      },
    },
  },
}

export default meta

type CategoryStory = StoryObj<typeof Category>

export const Default: CategoryStory = {
  args: {
    id: 1,
    link: '/',
    text: '最新記事',
  },
}
