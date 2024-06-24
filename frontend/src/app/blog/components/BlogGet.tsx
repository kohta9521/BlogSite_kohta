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

// code highlight
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

// loading animation
import { Puff } from '@agney/react-loading'

// type
export interface Blog {
  id: string
  title: string
  body: string
  tags: { id: string; tag: string }[]
  image: string
  topImage: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

const BlogGet = () => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [formattedBody, setFormattedBody] = useState<string | null>(null)
  const pathname = usePathname()
  const id = pathname.split('/').pop()

  useEffect(() => {
    if (id) {
      client
        .get({ endpoint: 'blog', contentId: id })
        .then((data) => {
          setBlog(data)
          const $ = cheerio.load(data.body)
          $('code').each(function () {
            const unhighlightedCode = $(this).html() || ''
            const highlightedCode = hljs.highlightAuto(unhighlightedCode).value
            $(this).html(highlightedCode)
          })
          setFormattedBody($.html())
        })
        .catch((error) => console.error('Failed to load blog data', error))
    }
  }, [id])

  if (!blog)
    if (!blog) {
      return <Puff className={styles.loader} />
    }

  return (
    <div className={styles.blogContent}>
      <h1 className={styles.blogTitle}>{blog.title}</h1>
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
      <div className={styles.topImageBox}>
        <Image
          className={styles.topImage}
          width={500}
          height={300}
          src={blog.topImage}
          alt='Blog Top Image'
        />
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: formattedBody || '' }} />
    </div>
  )
}

export default BlogGet
