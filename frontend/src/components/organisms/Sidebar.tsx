'use client'
import React from 'react'

// scss
import styles from './styles/Sidebar.module.scss'

// hooks
import useTagData from '@/hooks/useGetAllTags'
import useLatestArticles from '@/hooks/useLatestArticles'

// components
import SidebarSection from '../molecules/SidebarSection'
import RecentArticle from '../atoms/RecentArticle'
import CategoryText from '../atoms/CategoryText'

// client

const Sidebar = () => {
  const tags = useTagData()
  const { articles, loading, error } = useLatestArticles()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading latest articles: {error.message}</p>

  return (
    <div className={styles.sidebar}>
      <SidebarSection jaTitle='# 最新情報' enTitle='LATEST INFO'>
        {articles.map((article) => (
          <RecentArticle
            key={1}
            id={article.id}
            link={`/blog/${article.id}`}
            date={new Date(article.updatedAt).toLocaleDateString()}
            title={article.title}
          />
        ))}
      </SidebarSection>
      <SidebarSection jaTitle='# カテゴリー' enTitle='CATEGORY'>
        {tags.map((tag) => (
          <CategoryText key={tag.id} id={1} link='/category' text={tag.tag} />
        ))}
      </SidebarSection>
      <SidebarSection jaTitle='# アーカイブ' enTitle='ARCHIVE'>
        <select className={styles.selectTag}>
          <option>2024年4月</option>
          <option>2024年3月</option>
          <option>2024年2月</option>
          <option>2024年1月</option>
          <option>2023年12月</option>
          <option>2023年11月</option>
          <option>2023年10月</option>
          <option>2023年9月</option>
          <option>2023年8月</option>
          <option>2023年7月</option>
        </select>
      </SidebarSection>
    </div>
  )
}

export default Sidebar
