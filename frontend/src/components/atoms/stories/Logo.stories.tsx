import { StoryObj, Meta } from '@storybook/react'

import Logo from '../Logo'

const meta: Meta = {
  title: 'Atoms/Logo',
  component: Logo,
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
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
}

export default meta

type LogoStory = StoryObj<typeof Logo>

export const Default: LogoStory = {
  args: {
    id: 1,
    link: '/',
    size: 'medium',
  },
}

export const Small: LogoStory = {
  args: {
    id: 1,
    link: '/',
    size: 'small',
  },
}

export const Medium: LogoStory = {
  args: {
    id: 1,
    link: '/',
    size: 'medium',
  },
}

export const Large: LogoStory = {
  args: {
    id: 1,
    link: '/',
    size: 'large',
  },
}
