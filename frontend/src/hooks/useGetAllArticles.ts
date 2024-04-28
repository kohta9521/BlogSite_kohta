'use client'
import { useEffect, useState } from 'react'

// cms
import { client } from '../libs/microcms'

export function useGetAllArticles() {
  // 'articles' の状態は null または any[] 型を取ることができます。
  const [articles, setArticles] = useState<any[] | null>(null)
  // 'error' の状態は null または string 型を取ることができます。
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await client.getList({
          endpoint: 'blog',
          customRequestInit: {
            next: {
              revalidate: 0, // 0秒でページを再読み込み
            },
          },
        })
        // response.contents が array であることを確認した上で状態を更新
        setArticles(response.contents)
      } catch (error: any) {
        console.error('エラーが発生しました', error)
        // エラーメッセージを string として扱う
        setError(error.message)
      }
    }

    fetchArticles()
  }, [])

  return { articles, error }
}
