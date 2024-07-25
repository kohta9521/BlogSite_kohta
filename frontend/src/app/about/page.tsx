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
      desc='このサイトは、kohtaのテックブログサイトです。内容はテックに留まらずフリーランス関連もございます。'
    >
      <SubPageSecTitle id={1} title='What is this site?' />
      <SubPageTitle id={1} enTitle='About' jaTitle='このサイトについて' />
      <SubMainText
        id={2}
        text='このサイトはブログサイトです。
Kohtaの日々学んでいるエンジニア関連の内容。開発関連・トレンドの技術・面白い技術などをご覧いただけます。単にエンジニア関連の内容だけとなると面白くないためフリーランスとして活動をしているというのを強みにエンジニアのフリーランス活動をするにおいて必要な情報。仕事のもらい方・節税方法・開業をするにあたっての流れなどもご覧いただけるでしょう。'
      />
    </SubPageLayout>
  )
}

export default About
