import { StoryObj, Meta } from '@storybook/react'

import FooterMenuSub from '../FooterMenuSub'

const meta: Meta = {
  title: 'Atoms/FooterMenuSub',
  component: FooterMenuSub,
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

type FooterMenuSubStory = StoryObj<typeof FooterMenuSub>

export const Default: FooterMenuSubStory = {
  args: {
    id: 1,
    link: '/',
    text: 'Home',
  },
}
