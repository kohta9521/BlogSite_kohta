'use client'
import { useState, useEffect } from 'react'

// cms
import { client } from '../libs/client'

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

function useBlogData() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    // ブログ記事を取得
    client
      .get({ endpoint: 'blog' })
      .then((data) => setBlogs(data.contents))
      .catch((error) => console.error('Error fetching blogs:', error))
  }, [])

  return blogs
}

export default useBlogData
