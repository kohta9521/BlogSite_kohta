import { StoryObj, Meta } from '@storybook/react'

// components
import RecentArticle from '../RecentArticle'

const meta: Meta = {
  title: 'Atoms/RecentArticle',
  component: RecentArticle,
  tags: ['autodocs'],
  argTypes: {
    key: {
      control: {
        type: 'number',
      },
      description: '記事のキー',
    },
    id: {
      control: {
        type: 'string',
      },
      description: '記事の文字列型のid -> 画面遷移用？',
    },
    link: {
      control: {
        type: 'string',
      },
      description: '記事のリンク',
    },
    date: {
      control: {
        type: 'string',
      },
      description: '記事の日付',
    },
    title: {
      control: {
        type: 'string',
      },
      description: '記事のタイトル',
    },
  },
}

export default meta

type RecentArticleStory = StoryObj<typeof RecentArticle>

export const Default: RecentArticleStory = {
  args: {
    key: 1,
    id: '1',
    link: '/',
    date: '2021/01/01',
    title: '記事タイトル',
  },
}
