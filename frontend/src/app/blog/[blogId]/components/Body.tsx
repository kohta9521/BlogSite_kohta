'use client'
import React, { useState, useEffect } from 'react'

// next
import { GetServerSideProps } from 'next'
// import { useRouter } from 'next/router'

// scss
import styles from './Body.module.scss'

// components

// cms
import { client } from '../../../../libs/microcms'

// interface
interface Article {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  body: string
  topImage?: {
    // Make topImage optional to handle missing images
    url: string
    height: number
    width: number
  }
}

interface BodyProps {
  article: Article
  error?: string
}

const Body = ({ article, error }: BodyProps) => {
  const [dateInfo, setDateInfo] = useState({ createdAt: '', updatedAt: '' })

  useEffect(() => {
    if (article) {
      setDateInfo({
        createdAt: new Date(article.createdAt).toLocaleDateString(),
        updatedAt: new Date(article.updatedAt).toLocaleDateString(),
      })
    }
  }, [article])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!article) {
    return <div>Loading or no article found.</div>
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>{article.title}</h1>
      {article.topImage && (
        <img src={article.topImage.url} alt='Top Image' style={{ width: '100%' }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
      <p>Created at: {dateInfo.createdAt}</p>
      <p>Last updated: {dateInfo.updatedAt}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (!id) {
    return { props: { error: 'Article ID is missing.' } }
  }

  try {
    const article = await client.get({
      endpoint: 'blog',
      contentId: id as string,
    })
    return { props: { article } }
  } catch (error: any) {
    console.error('Error fetching article:', error)
    return { props: { error: error.message, statusCode: error.response?.status || 500 } }
  }
}

export default Body
