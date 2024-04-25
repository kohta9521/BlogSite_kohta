import React from 'react'
import { NextResponse } from 'next/server'

// scss
// import styles from './styles/ArticleLIst.module.scss'

// components
import ArticleCard from '../molecules/ArticleCard'

// cms
import { client } from '../../libs/microcms'

async function listBlog() {
  try {
    const response = await client.getList({
      endpoint: 'blog',
      customRequestInit: {
        next: {
          revalidate: 0, // 0秒でページを再読み込み
        },
      },
    })

    return NextResponse.json({
      data: response.contents ?? null,
      error: null,
    })
  } catch (error: any) {
    console.error('エラーが発生しました', error)
    return NextResponse.json({
      data: null,
      error: error.message,
    })
  }
}

export default async function ArticleList() {
  const response = await listBlog()
  const { data, error } = await response.json()

  if (error != null) return <div>エラーが発生しました。</div>
  return (
    <main>
      <ul>
        {data != null ? (
          data.map((blog: any) => (
            <ArticleCard
              key={blog.id}
              id={blog.id}
              link={`/blog/${blog.id}`}
              imgLink={blog.topImage.url}
              makeDate={blog.createdAt} // 作成日
              updateDate={blog.updatedAt} // 更新日
              title={blog.title}
              tags={['front', 'AWS']} // カテゴリからタグを抽出
              desc={blog.body} // 記事の本文
            />
          ))
        ) : (
          <li>データがありませんでした。</li>
        )}
      </ul>
    </main>
  )
}
