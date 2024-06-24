import { StoryObj, Meta } from '@storybook/react'

// component
import SidebarSection from '../SidebarSection'
import RecentArticle from '@/components/atoms/RecentArticle'

const meta: Meta = {
  title: 'Molecules/SidebarSection',
  component: SidebarSection,
  tags: ['autodocs'],
  argTypes: {
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
    children: {
      control: {
        type: 'node',
      },
      description: '子要素',
    },
  },
}

export default meta

type SidebarSectionStory = StoryObj<typeof SidebarSection>

export const Default: SidebarSectionStory = {
  args: {
    jaTitle: '最新記事',
    enTitle: 'Recent Articles',
    children: (
      <>
        <RecentArticle
          key={1}
          id='1'
          link='/'
          date='2021/01/01'
          title='[競プロ鉄則①] 勉強記録 ~探索編~'
        />
        <RecentArticle
          key={1}
          id='1'
          link='/'
          date='2021/01/01'
          title='useSWR使ってみた ~ useEffectからの脱却 ~'
        />
        <RecentArticle
          key={1}
          id='1'
          link='/'
          date='2021/01/01'
          title='[Next.js]動的なMetaTagの設定方法について'
        />
      </>
    ),
  },
}
