import { StoryObj, Meta } from '@storybook/react'

// component
import Hero from '../Hero'

const meta: Meta = {
  title: 'Organisms/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    jaTitle: {
      control: {
        type: 'text',
      },
      description: '日本語のタイトル',
    },
    enTitle: {
      control: {
        type: 'text',
      },
      description: '英語のタイトル',
    },
  },
}

export default meta

type HeroStory = StoryObj<typeof Hero>

export const Default: HeroStory = {
  args: {
    jaTitle: 'ヒーローセクション',
    enTitle: 'Hero Section',
  },
}
