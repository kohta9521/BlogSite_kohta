import { StoryObj, Meta } from '@storybook/react'

// component
import SubPageLayout from '../SubPageLayout'

const meta: Meta = {
  title: 'Template/SubPageLayout',
  component: SubPageLayout,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
      description: 'id',
    },
    enTitle: {
      control: {
        type: 'text',
      },
      description: '英語のタイトル',
    },
    jaTitle: {
      control: {
        type: 'text',
      },
      description: '日本語のタイトル',
    },
    desc: {
      control: {
        type: 'text',
      },
      description: '説明',
    },
    children: {
      control: {
        type: 'node',
      },
      description: '子要素',
    },
  },
}

export default meta

type SubPageLayoutStory = StoryObj<typeof SubPageLayout>

export const Default: SubPageLayoutStory = {
  args: {
    id: 1,
    enTitle: 'SubPageLayout',
    jaTitle: 'サブページレイアウト',
    desc: 'サブページレイアウトです。',
    children: (
      <div>
        <p>サブページレイアウトです。</p>
      </div>
    ),
  },
}
