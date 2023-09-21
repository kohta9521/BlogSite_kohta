import React, { FC } from 'react'

// css import
import styles from './styles/BlogCard.module.css'
import ArticleDate from '../atoms/ArticleDate'
import CategoryTag from '../atoms/CategoryTag'

// props type
type Props = {
  id: number
  imgUrl: string
  madeDay: string
  reEditDay: string
  title: string
  tags: number
}

const BlogCard: React.FC<Props> = ({
  id,
  imgUrl,
  madeDay,
  reEditDay,
  title,
  tags,
}) => {
  // tagのコンポーネントに渡すdateとの紐付け用の数値
  const i: number = tags

  return (
    <div className={styles.blogCard} key={id}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={imgUrl} alt="blogCardImg" />
      </div>
      <div className={styles.textBox}>
        <div className={styles.dateBox}>
          <ArticleDate id={1} imgBool={true} date="2023/08/05" size="small" />
          <ArticleDate id={2} imgBool={false} date="2023/08/05" size="small" />
        </div>
        <h2 className={styles.blogTitle}>{title}</h2>
        <div className={styles.tagBox}>
          <CategoryTag id={0} tagsNumber={i} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
