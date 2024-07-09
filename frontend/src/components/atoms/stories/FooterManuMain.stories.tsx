import { StoryObj, Meta } from '@storybook/react'

import FooterMenuMain from '../FooterMenuMain'

const meta: Meta = {
  title: 'Atoms/FooterMenuMain',
  component: FooterMenuMain,
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

type FooterMenuMainStory = StoryObj<typeof FooterMenuMain>

export const Default: FooterMenuMainStory = {
  args: {
    id: 1,
    link: '/',
    text: 'Home',
  },
}
