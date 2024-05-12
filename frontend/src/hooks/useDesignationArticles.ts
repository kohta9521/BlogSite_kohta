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
  tags: {
    id: string
    tag: string
  }[]
  image: string
}

interface Props {
  ids: string[]
}

function useDesignationBlogData({ ids }: Props) {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs: Blog[] = []

      for (const id of ids) {
        try {
          const data: Blog = await client.get({ endpoint: 'blog', contentId: id })
          fetchedBlogs.push(data)
        } catch (error) {
          console.error('Error fetching blogs:', error)
        }
      }

      setBlogs(fetchedBlogs)
    }
    fetchBlogs()
  }, [ids])

  return blogs
}

export default useDesignationBlogData
