'use client'
'use client'
import React, { useState, useEffect } from 'react'
import { client } from '../../../libs/client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export interface Blog {
  id: string
  title: string
  body: string
  tags: { id: string; tag: string }[]
  image: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

const BlogDetail = () => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const pathname = usePathname() // パス名を取得
  const id = pathname.split('/').pop() // URLからIDを抽出

  useEffect(() => {
    if (id) {
      client
        .get({ endpoint: 'blog', contentId: id })
        .then((data) => {
          setBlog(data)
        })
        .catch((error) => console.error('Failed to load blog data', error))
    }
  }, [id])

  if (!blog) return <p>Loading...</p>

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>Published on: {new Date(blog.publishedAt).toLocaleDateString()}</p>
      {blog.tags.map((tag) => (
        <span key={tag.id}>#{tag.tag} </span>
      ))}
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      {blog.image && <Image width='1000' height='700' src={blog.image} alt='Blog Image' />}
    </main>
  )
}

export default BlogDetail
