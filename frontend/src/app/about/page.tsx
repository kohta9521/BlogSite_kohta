// scss
import styles from './About.module.scss'

// components
import SubPageLayout from '@/components/templates/SubPageLayout'

const About = () => {
  return (
    <SubPageLayout
      id={1}
      enTitle='About'
      jaTitle='# このサイトについて'
      desc='このサイトは、Next.jsで作成したサンプルサイトです。'
    >
      <h1 style={styles.sample}>sabout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ex nihil vel reprehenderit
        quam ipsa officia dignissimos magnam nemo quaerat.
      </p>
    </SubPageLayout>
  )
}

export default About
