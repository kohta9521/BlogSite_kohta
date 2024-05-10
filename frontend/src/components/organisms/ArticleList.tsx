'use client'
import React, { useEffect, useState } from 'react'

// scss
// import styles from './styles/ArticleLIst.module.scss'

// components

// cms
import { client } from '../../libs/client'

// html
// import parse from 'html-react-parser'
import ArticleCard from '../molecules/ArticleCard'

// type
interface Blog {
  id: string
  topImage: string
  updatedAt: string
  createdAt: string
  title: string
  body: string
  tags: { id: string; tag: string }[]
  image: string
}

interface Tag {
  id: string
  tag: string
}

const ArticleList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    // ブログ記事を取得
    client
      .get({ endpoint: 'blog' })
      .then((data) => {
        setBlogs(data.contents)
      })
      .catch((error) => console.error('Error fetching blogs:', error))

    // タグを取得
    client
      .get({ endpoint: 'tag' })
      .then((data) => {
        setTags(data.contents)
      })
      .catch((error) => console.error('Error fetching tags:', error))
  }, [])
  console.log(tags)

  return (
    <div>
      <h1># 記事一覧</h1>
      <div>
        {blogs.map((blog) => (
          <ArticleCard
            key={1}
            link={`/blog/${blog.id}`}
            imgLink={blog.topImage}
            makeDate={blog.createdAt}
            updateDate={blog.updatedAt}
            title={blog.title}
            tags={blog.tags.map((tag) => tag.tag)}
          />
        ))}
      </div>
      {/* <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.tag}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default ArticleList
