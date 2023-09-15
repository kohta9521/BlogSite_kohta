import React, { FC } from 'react'

// css import
import styles from './styles/FlexBlogBox.module.css'
import BlogCard from '../molecules/BlogCard'

const FlexBlogBox: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>おすすめ記事</h1>
      <div className={styles.flexBox}>
        <BlogCard
          id={1}
          imgUrl="/img/sample2.png"
          madeDay="2023/08/04"
          reEditDay="2023/08/04"
          title="TypeScrip React とStorybookを触ってみた"
          tags={12}
        />
        <BlogCard
          id={1}
          imgUrl="/img/sample3.png"
          madeDay="2023/08/04"
          reEditDay="2023/08/04"
          title="NuxtとVueでの初期設定について"
          tags={0}
        />
        <BlogCard
          id={1}
          imgUrl="/img/sample5.png"
          madeDay="2023/08/04"
          reEditDay="2023/08/04"
          title="JsのFetch勉強し直し"
          tags={7}
        />
      </div>
    </>
  )
}

export default FlexBlogBox
