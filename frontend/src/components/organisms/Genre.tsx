'use client'
import React from 'react'

// next

// hooks
import useAOS from '@/hooks/useAOS'

// scss
import styles from './styles/Genre.module.scss'
import GenreArticle from '../molecules/GenreArticle'

// components

const Genre = () => {
  // AOSの初期化
  useAOS()
  return (
    <div className={styles.genre}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle} data-aos='fade-up'>
          # ジャンル記事
        </h1>
        <div className={styles.box}>
          <GenreArticle id={1} genreImgLink='/' articleId='記事タイトル' />
        </div>
      </div>
    </div>
  )
}

export default Genre
