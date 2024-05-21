'use client'
import React, { useState } from 'react'

// next
import Link from 'next/link'

// scss
import styles from './styles/SearchDetail.module.scss'

// hooks
import useTagData from '@/hooks/useGetAllTags'

// components
// import CategoryText from '../atoms/CategoryText'

// icons
import { FaSearch } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { IoReload } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MdKeyboardArrowUp } from 'react-icons/md'

const SearchDetail = () => {
  const tags = useTagData()

  // タグのモーダル管理
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className={styles.searchBox}>
      {/* キーワード検索 */}
      <div className={styles.sectionBox}>
        <p className={styles.title}>
          <FaSearch className={styles.icon} />
          キーワードで検索
        </p>
        <input type='search' placeholder='Reactの環境構築について' className={styles.input} />
      </div>
      {/* タグ検索 */}
      <div className={styles.sectionBox}>
        <p className={styles.title}>
          <FaTag className={styles.icon} />
          タグ検索
        </p>
        <div className={styles.tagBox}>
          {tags.slice(0, 10).map((tag) => (
            <Link href='/' key={1} className={styles.tagItem}>
              <p className={styles.tagText}>{tag.tag}</p>
            </Link>
          ))}
        </div>
        <div className={styles.moreBox}>
          <button className={styles.moreButton} onClick={toggleModal}>
            {showModal ? (
              <MdKeyboardArrowUp className={styles.moreButtonIcon} />
            ) : (
              <MdKeyboardArrowDown className={styles.moreButtonIcon} />
            )}
          </button>
        </div>
      </div>
      {/* すべてのタグを掲載 モーダル */}
      {showModal && (
        <div className={styles.allTagsBox}>
          {tags.slice(10).map((tag, index) => (
            <Link href='/' key={index} className={styles.tagItem}>
              <p className={styles.tagText}>{tag.tag}</p>
            </Link>
          ))}
        </div>
      )}
      {/* 投稿日・更新日検索 */}
      <div className={styles.sectionBox}>
        <div className={styles.leftBox}>
          <p className={styles.title}>
            <FaPencilAlt className={styles.icon} />
            投稿日
          </p>
          <input type='date' className={styles.dateInput} />
        </div>
        <div className={styles.rightBox}>
          <p className={styles.title}>
            <IoReload className={styles.icon} />
            最終更新日
          </p>
          <input type='date' className={styles.dateInput} />
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
