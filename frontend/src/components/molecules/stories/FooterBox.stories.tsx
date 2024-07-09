import { StoryObj, Meta } from '@storybook/react'

// components
import FooterBox from '../FooterBox'
import FooterMenuMain from '@/components/atoms/FooterMenuMain'
import FooterMenuSub from '@/components/atoms/FooterMenuSub'

const meta: Meta = {
  title: 'Molecules/FooterBox',
  component: FooterBox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
    },
    children: {
      control: {
        type: 'node',
      },
    },
  },
}

export default meta

type FooterBoxStory = StoryObj<typeof FooterBox>

export const Default: FooterBoxStory = {
  args: {
    id: 1,
    children: (
      <>
        <FooterMenuMain id={1} link='/' text='Home' />
        <FooterMenuSub id={1} link='/' text='おすすめ記事' />
        <FooterMenuSub id={2} link='/' text='記事一覧' />
        <FooterMenuSub id={3} link='/' text='最新情報' />
        <FooterMenuSub id={4} link='/' text='カテゴリー' />
        <FooterMenuSub id={5} link='/' text='アーカイブ' />
      </>
    ),
  },
}
