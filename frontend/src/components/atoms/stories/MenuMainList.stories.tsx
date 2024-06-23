import { StoryObj, Meta } from '@storybook/react'

import MenuMainList from '../MenuMainList'

const meta: Meta = {
  title: 'Atoms/MenuMainList',
  component: MenuMainList,
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

type MenuMainListStory = StoryObj<typeof MenuMainList>

export const Default: MenuMainListStory = {
  args: {
    id: 1,
    link: '/',
    text: '最新記事',
  },
}
