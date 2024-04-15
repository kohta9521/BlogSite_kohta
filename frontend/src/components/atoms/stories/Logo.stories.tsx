import React from 'react'

import { StoryObj, Meta } from '@storybook/react'

import Logo, { LogoProps } from '../Logo'

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

type Logo = StoryObj<typeof Logo>

export const Default: Logo = {
  args: {
    id: 1,
    link: '/',
    size: 'medium',
  },
}

export const Small: Logo = {
  args: {
    id: 1,
    link: '/',
    size: 'small',
  },
}

export const Medium: Logo = {
  args: {
    id: 1,
    link: '/',
    size: 'medium',
  },
}

export const Large: Logo = {
  args: {
    id: 1,
    link: '/',
    size: 'large',
  },
}
