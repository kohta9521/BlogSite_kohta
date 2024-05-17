import React from 'react'

// next
import Link from 'next/link'
import Image from 'next/image'

// scss
import styles from './styles/GenreArticle.module.scss'

// props
export type GenreArticleProps = {
  id: number
  genreImgLink: string
  articleId: string
}

const GenreArticle = ({ id, genreImgLink, articleId }: GenreArticleProps) => {
  return (
    <div className={styles.box} key={id}>
      <div className={styles.leftBox}>
        <Image
          className={styles.image}
          src={genreImgLink}
          width={400}
          height={200}
          alt='ジャンル画像'
        />
      </div>
      <div className={styles.rightBox}>
        {/* 3つ記事載っける */}
        <Link className={styles.link} href='/'>
          <Image className={styles.image} src='/' width={200} height={100} alt='記事画像' />
          <p className={styles.title}>{articleId}</p>
        </Link>
      </div>
    </div>
  )
}

export default GenreArticle
