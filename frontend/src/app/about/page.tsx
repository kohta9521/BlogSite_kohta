// scss
// import styles from './About.module.scss'

// components
import SubMainText from '@/components/atoms/SubMainText'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import SubPageTitle from '@/components/atoms/SubPageTitle'
import SubPageLayout from '@/components/templates/SubPageLayout'

const About = () => {
  return (
    <SubPageLayout
      id={1}
      enTitle='About'
      jaTitle='# このサイトについて'
      desc='このサイトは、Next.jsで作成したサンプルサイトです。'
    >
      <SubPageSecTitle id={1} title='What is this site?' />
      <SubPageTitle id={1} enTitle='About' jaTitle='このサイトについて' />
      <SubMainText id={1} text='このサイトは、Next.jsで作成したサンプルサイトです。' />
      <SubMainText
        id={2}
        text='このブログは、私の学んだ知識と経験を共有するためのプラットフォームです。ここでは、ウェブ開発、プログラミング、テクノロジーのトレンドなど、私が情熱を持って'
      />
      <SubMainText id={3} text='このサイトは、Next.jsで作成したサンプルサイトです。' />
      <SubMainText id={4} text='このサイトは、Next.jsで作成したサンプルサイトです。' />
    </SubPageLayout>
  )
}

export default About
