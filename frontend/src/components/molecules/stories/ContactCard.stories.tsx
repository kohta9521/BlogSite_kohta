import { StoryObj, Meta } from '@storybook/react'

// component
import ContactCard from '../ContactCard'

const meta: Meta = {
  title: 'Molecules/ContactCard',
  component: ContactCard,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
      description: 'コンポーネントのID',
    },
    jaTitle: {
      control: {
        type: 'string',
      },
      description: '日本語のタイトル',
    },
    enTitle: {
      control: {
        type: 'string',
      },
      description: '英語のタイトル',
    },
    desc: {
      control: {
        type: 'string',
      },
      description: '説明文',
    },
    link: {
      control: {
        type: 'string',
      },
      description: 'リンク先',
    },
  },
}

export default meta

type ContactCardStory = StoryObj<typeof ContactCard>

export const Request: ContactCardStory = {
  args: {
    id: 1,
    jaTitle: '# 創作依頼・ご相談',
    enTitle: 'REQUEST',
    desc: '新しいサイト制作や、既存サイトの運用に関するお困りごとなどございましたらご依頼、ご相談ください。',
    link: '/request',
  },
}

export const Services: ContactCardStory = {
  args: {
    id: 2,
    jaTitle: '# サービス紹介',
    enTitle: 'SERVICES',
    desc: '私kohtaの運営しているサービス・そして提供しているサービスをご紹介いたします。',
    link: '/services',
  },
}
