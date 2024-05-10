'use client'
import React, { useState, useEffect } from 'react'

// next
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// scss
import styles from './BlogGet.module.scss'

// cms
import { client } from '../../../libs/client'

// icons
import { FaPencilAlt } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'

// type
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

const BlogGet = () => {
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
    <div className={styles.blogContent}>
      <div className={styles.flexBox}>
        <div className={styles.tagsBox}>
          {blog.tags.map((tag) => (
            <p className={styles.tag} key={tag.id}>
              #{tag.tag}{' '}
            </p>
          ))}
        </div>
        <div className={styles.dateBox}>
          <p className={styles.createdAt}>
            <FaPencilAlt className={styles.icon} />
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
          <p className={styles.updatedAt}>
            <TfiReload className={styles.icon} />
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.topImageBox}>
        <Image
          className={styles.topImage}
          width={500}
          height={300}
          src={blog.image}
          alt='Blog Top Image'
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </div>
  )
}

export default BlogGet
