import { createClient } from 'microcms-js-sdk'

// クライアントの作成
const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_API_URL ?? '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY ?? '',
})

// 記事の型定義
export interface Article {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  body: string
  topImage?: {
    url: string
    height: number
    width: number
  }
}

// 記事一覧を取得
export async function getBlogList(): Promise<Article[]> {
  const data = await client.get({ endpoint: 'blog' })
  return data.contents
}

// 記事詳細を取得
export async function getArticle(id: string): Promise {
  const data = await client.get({
    endpoint: 'blog',
    contentId: id,
  })
  return data
}
