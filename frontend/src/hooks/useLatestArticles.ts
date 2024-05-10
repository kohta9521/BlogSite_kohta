'use client'
import { useState, useEffect } from 'react'
import { client } from '../libs/client'

// Blog型の定義
interface Blog {
  id: string
  title: string
  body: string
  createdAt: string
  updatedAt: string
  tags: { id: string; tag: string }[]
  image: string
}

// 最新の記事を3件取得するカスタムフック
function useLatestArticles() {
  const [articles, setArticles] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    client
      .get({
        endpoint: 'blog',
        queries: { limit: 3, orders: '-createdAt' }, // 作成日時の降順で最新の3件を取得
      })
      .then((data) => {
        setArticles(data.contents)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch latest articles:', err)
        setError(err)
        setLoading(false)
      })
  }, [])

  return { articles, loading, error }
}

export default useLatestArticles
