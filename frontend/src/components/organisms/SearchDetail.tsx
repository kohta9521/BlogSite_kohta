import React from 'react'

// next
import Link from 'next/link'

// scss
import styles from './styles/SearchDetail.module.scss'

// hooks

// components

// icons
import { FaSearch } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { IoReload } from 'react-icons/io5'

const SearchDetail = () => {
  return (
    <div className={styles.searchBox}>
      {/* キーワード検索 */}
      <div className={styles.sectionBox}>
        <p className={styles.title}>
          <FaSearch className={styles.icon} />
          キーワードで検索
        </p>
        <input type='text' className={styles.input} />
      </div>
      {/* タグ検索 */}
      <div className={styles.sectionBox}>
        <p className={styles.title}>
          <FaTag className={styles.icon} />
          タグ検索
        </p>
      </div>
      {/* 投稿日・更新日検索 */}
      <div className={styles.sectionBox}>
        <div className={styles.leftBox}>
          <p className={styles.title}>
            <FaPencilAlt className={styles.icon} />
            投稿日
          </p>
        </div>
        <div className={styles.rightBox}>
          <p className={styles.title}>
            <IoReload className={styles.icon} />
            最終更新日
          </p>
        </div>
      </div>
      {/* 検索ボタン */}
      <Link className={styles.searchButton} href='/'>
        この条件で検索
      </Link>
    </div>
  )
}

export default SearchDetail
