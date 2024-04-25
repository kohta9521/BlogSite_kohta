import React from 'react'
import { NextResponse } from 'next/server'
import ArticleCard from '../../components/molecules/ArticleCard'

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

function extractTags(categories: { [key: string]: string[] } | null | undefined): string[] {
  // categoriesがundefinedまたはnullでないことを確認
  if (!categories) {
    return [] // categoriesがundefinedまたはnullなら空の配列を返す
  }

  // カテゴリオブジェクトからタグ配列を生成
  return Object.keys(categories).reduce((acc: string[], key: string) => {
    // categories[key]が配列で要素を持っているかチェック
    if (categories[key] && categories[key].length > 0) {
      acc.push(key) // カテゴリ名をタグとして追加
    }
    return acc
  }, [])
}

export default async function BlogList() {
  const response = await listBlog()
  const { data, error } = await response.json()

  if (error != null) return <div>エラーが発生しました。</div>
  return (
    <main>
      <h1>ここは記事一覧ページです</h1>
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
              tags={extractTags(blog.category)} // カテゴリからタグを抽出
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
